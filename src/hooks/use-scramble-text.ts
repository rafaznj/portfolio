import { useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export function useScrambleText<T extends HTMLElement>(
  text: string,
  speed?: number,
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
        chars: "01!@#$%^&*_+-=<>?/\\|",
        speed: speed ?? 0.7,
        revealDelay: 0.4,
        tweenLength: false,
      },
    });
  };

  // useEffect(() => {
  //   const intervalMs = options?.intervalMs ?? 6000;
  //   const interval = setInterval(trigger, intervalMs);

  //   return () => {
  //     clearInterval(interval);
  //     tweenRef.current?.kill();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [text]);

  return { ref, trigger };
}
