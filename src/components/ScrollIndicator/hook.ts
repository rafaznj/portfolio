import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function useScrollIndicator() {
  const { t } = useTranslation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      setIsAtTop(currentScroll <= 16);
      setIsAtBottom(currentScroll >= maxScroll - 16);
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const handleScroll = () => {
    const nextDirection = isAtBottom ? "up" : "down";
    setScrollDirection(nextDirection);

    const nextScrollPosition =
      nextDirection === "up" ? 0 : document.documentElement.scrollHeight;

    window.scrollTo({
      top: nextScrollPosition,
      behavior: "smooth",
    });
  };

  const tooltipText = isAtBottom
    ? t("components.navbar.scrollIndicator.up")
    : t("components.navbar.scrollIndicator.down");

  return {
    handleScroll,
    isAtTop,
    tooltipText,
    scrollDirection,
    t,
  };
}
