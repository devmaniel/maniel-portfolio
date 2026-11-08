import clsx from "clsx";
import type { ReactNode } from "react";

import { useReveal } from "./useReveal";

const STAR_PATH =
  "M12.00 1.10 L14.82 8.72 L22.94 9.05 L16.57 14.08 L18.76 21.90 L12.00 17.40 L5.24 21.90 L7.43 14.08 L1.06 9.05 L9.18 8.72 Z";

/** Five-point star used on winning results and around the "2 wins" block. */
export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR_PATH} />
    </svg>
  );
}

/** Green hand-drawn asterisk next to section titles. */
export function Asterisk({ className }: { className?: string }) {
  return (
    <span className={clsx("ast", className)}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 V22 M3.3 7 L20.7 17 M3.3 17 L20.7 7" />
      </svg>
    </span>
  );
}

/** Small diagonal arrow shown inside pill links that open a new tab. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

type MarkProps = {
  variant: "name" | "circ";
  className?: string;
  children: ReactNode;
};

/** Highlight (name) or green ring (circ) drawn behind words once they scroll into view. */
export function Mark({ variant, className, children }: MarkProps) {
  const { ref, isOn } = useReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={clsx("mark", variant, className, isOn && "on")}>
      {children}
    </span>
  );
}

type WaveMarkProps = {
  path: string;
  children: ReactNode;
};

/** Purple wavy underline drawn left to right once the phrase scrolls into view. */
export function WaveMark({ path, children }: WaveMarkProps) {
  const { ref, isOn } = useReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={clsx("mark wave", isOn && "on")}>
      {children}
      <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}
