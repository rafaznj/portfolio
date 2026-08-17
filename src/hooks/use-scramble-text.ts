import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const SCRAMBLE_CHARS = "01!@#$%^&*_+-=<>?/\\|";

interface UseScrambleTextOptions {
  speed?: number;
  intervalMs?: number;
}

export function useScrambleText<T extends HTMLElement>(
  text: string,
  options?: UseScrambleTextOptions,
) {
  const ref = useRef<T>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const trigger = () => {
    if (!ref.current) return;

    tweenRef.current?.kill();
    tweenRef.current = gsap.to(ref.current, {
      duration: 2.2,
      ease: "power2.out",
      scrambleText: {
        text,
        chars: SCRAMBLE_CHARS,
        speed: options?.speed ?? 0.25,
        revealDelay: 0.4,
        tweenLength: false,
      },
    });
  };

  useEffect(() => {
    const intervalMs = options?.intervalMs ?? 6000;
    const interval = setInterval(trigger, intervalMs);

    return () => {
      clearInterval(interval);
      tweenRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return { ref, trigger };
}
