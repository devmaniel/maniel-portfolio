import { useEffect, useRef, useState } from "react";

const DEFAULT_ROOT_MARGIN = "-10% 0px";

type RevealOptions = {
  rootMargin?: string;
  threshold?: number;
};

function shouldSkipAnimation(): boolean {
  if (typeof window === "undefined") return true;
  if (!("IntersectionObserver" in window)) return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Turns `isOn` true the first time the element scrolls into view, then stops watching.
 * The CSS draws marks, arrows and lists in when the element gets the `on` class.
 * With reduced motion (or no IntersectionObserver) it starts already on.
 */
export function useReveal<T extends Element>({
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = 0,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isOn, setIsOn] = useState(shouldSkipAnimation);

  useEffect(() => {
    const element = ref.current;
    if (isOn || !element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsOn(true);
        observer.disconnect();
      },
      { rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isOn, rootMargin, threshold]);

  return { ref, isOn };
}
