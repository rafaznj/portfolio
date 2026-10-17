import { useEffect } from "react";
import { sounds } from "../utils/sound";

export function useClickSound() {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest<HTMLElement>('a, button, [role="button"]');

      if (
        interactive &&
        !interactive.hasAttribute("disabled") &&
        interactive.getAttribute("aria-disabled") !== "true"
      ) {
        sounds.click();
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);
}
