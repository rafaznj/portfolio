import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";

const FADE = "1.5rem";

function buildPath(bullets: { x: number; y: number; type: string }[]): string {
  if (bullets.length === 0) return "";

  const parts: string[] = [];
  let started = false;

  for (let i = 0; i < bullets.length; i++) {
    const b = bullets[i];

    if (!started) {
      parts.push(`M ${b.x} ${b.y}`);
      started = true;
    } else {
      const prev = bullets[i - 1];

      if (prev.type === "company" && b.type === "position") {
        const midY = prev.y + (b.y - prev.y) * 0.5;
        parts.push(`C ${prev.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`);
      }
      else if (prev.type === "position" && b.type === "company") {
        const midY = prev.y + (b.y - prev.y) * 0.5;
        parts.push(`C ${prev.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`);
      }
      else {
        parts.push(`L ${b.x} ${b.y}`);
      }
    }
  }

  return parts.join(" ");
}

function findLengthAtY(
  track: SVGPathElement,
  targetY: number,
  low: number,
  high: number,
): number {
  for (let iter = 0; iter < 16; iter++) {
    const mid = (low + high) / 2;
    const pt = track.getPointAtLength(mid);
    if (pt.y < targetY) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) / 2;
}

export function TimelineExperience({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const bulletLengthsRef = useRef<number[]>([]);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const [pathD, setPathD] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  const measureAndBuild = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const bulletEls = list.querySelectorAll<HTMLElement>("[data-bullet]");
    if (bulletEls.length === 0) return;

    const listRect = list.getBoundingClientRect();

    const bullets = Array.from(bulletEls).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left - listRect.left + list.scrollLeft + rect.width / 2,
        y: rect.top - listRect.top + list.scrollTop + rect.height / 2,
        type: el.getAttribute("data-bullet") || "position",
      };
    });

    const d = buildPath(bullets);
    setPathD(d);

    const maxY = Math.max(...bullets.map((b) => b.y)) + 20;
    setSvgHeight(Math.max(maxY, list.scrollHeight));
  }, []);

  const updateScroll = useCallback(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill || pathLength === 0) return;

    const { scrollTop, scrollHeight, clientHeight } = list;
    const maxScroll = scrollHeight - clientHeight;
    const lengths = bulletLengthsRef.current;

    let currentFilledLength = pathLength;
    if (lengths.length >= 2) {
      const startLength = lengths[1];
      const progress =
        maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 1;
      currentFilledLength = startLength + progress * (pathLength - startLength);
    }

    const offset = Math.max(0, pathLength - currentFilledLength);
    fill.style.strokeDashoffset = `${offset}`;

    const bulletEls = list.querySelectorAll<HTMLElement>("[data-bullet]");
    bulletEls.forEach((el, index) => {
      const item = el.closest<HTMLElement>("[data-timeline-item]");
      if (!item) return;

      const isActive =
        index <= 1 ||
        (lengths[index] !== undefined &&
          currentFilledLength >= lengths[index] - 4);

      const wasActive = item.getAttribute("data-active") === "true";
      if (isActive !== wasActive) {
        item.setAttribute("data-active", isActive ? "true" : "false");
      }
    });

    if (maxScroll <= 1) {
      setEdges({ top: false, bottom: false });
    } else {
      setEdges({
        top: scrollTop > 1,
        bottom: scrollTop < maxScroll - 1,
      });
    }
  }, [pathLength]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const timer = setTimeout(() => {
      measureAndBuild();
    }, 50);

    const observer = new ResizeObserver(() => {
      measureAndBuild();
    });
    observer.observe(list);
    Array.from(list.children).forEach((child) => observer.observe(child));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [children, measureAndBuild]);

  useEffect(() => {
    const track = trackRef.current;
    const list = listRef.current;
    if (!track || !pathD || !list) return;

    const totalLen = track.getTotalLength();
    setPathLength(totalLen);

    const bulletEls = list.querySelectorAll<HTMLElement>("[data-bullet]");
    if (bulletEls.length === 0) return;

    const listRect = list.getBoundingClientRect();
    const bullets = Array.from(bulletEls).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        y: rect.top - listRect.top + list.scrollTop + rect.height / 2,
      };
    });

    const lengths: number[] = [0];
    for (let i = 1; i < bullets.length; i++) {
      if (i === bullets.length - 1) {
        lengths.push(totalLen);
      } else {
        const len = findLengthAtY(
          track,
          bullets[i].y,
          lengths[i - 1],
          totalLen,
        );
        lengths.push(len);
      }
    }
    bulletLengthsRef.current = lengths;

    updateScroll();
  }, [pathD, updateScroll]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    updateScroll();
    list.addEventListener("scroll", updateScroll, { passive: true });
    return () => list.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const mask = `linear-gradient(
    to bottom,
    transparent,
    #000 ${edges.top ? FADE : "0px"},
    #000 calc(100% - ${edges.bottom ? FADE : "0px"}),
    transparent
  )`;

  return (
    <div ref={containerRef} className="relative min-h-0 cursor-pointer">
      <ol
        ref={listRef}
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
        className="
          relative flex max-h-60 flex-col
          snap-y snap-proximity scroll-py-3
          overflow-y-auto overscroll-contain
          scroll-smooth px-2
          scrollbar-none
          motion-reduce:scroll-auto
          [&::-webkit-scrollbar]:hidden
        "
      >
        {pathD && (
          <svg
            ref={svgRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{ height: svgHeight }}
            preserveAspectRatio="none"
          >
            <path
              ref={trackRef}
              d={pathD}
              fill="none"
              className="stroke-zinc-200 dark:stroke-zinc-800"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              ref={fillRef}
              d={pathD}
              fill="none"
              className="stroke-zinc-900 dark:stroke-zinc-100"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength}
              style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
            />
          </svg>
        )}

        {children}
      </ol>
    </div>
  );
}
