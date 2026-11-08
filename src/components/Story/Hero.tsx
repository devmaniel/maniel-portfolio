import clsx from "clsx";

import { cssVars } from "./cssVars";
import { Mark, WaveMark } from "./doodles";
import { useReveal } from "./useReveal";

const BRICK_ROWS = [
  { row: "r1", word: "work.", color: "blue" },
  { row: "r2", word: "right.", color: "purple" },
  { row: "r3", word: "feel.", color: "green feel" },
] as const;

const WAVE_PATH =
  "M3 15 C 16 15, 24 5, 42 5 S 66 19, 86 19 S 112 5, 132 5 S 160 17, 184 16 S 280 12, 330 9 S 384 5, 397 3";

function Bricks() {
  const { ref, isOn } = useReveal<HTMLHeadingElement>();
  return (
    <h1 ref={ref} className={clsx("bricks", isOn && "on")}>
      <span className="sr-only">Make it work. Make it right. Make it feel.</span>
      <span className="stack" aria-hidden="true">
        {BRICK_ROWS.map(({ row, word, color }, index) => (
          <span key={row} className={`row ${row}`}>
            <span className="brick ink" style={cssVars({ "--i": index * 2 })}>
              Make it
            </span>
            <span className={`brick ${color}`} style={cssVars({ "--i": index * 2 + 1 })}>
              {word}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}

function Pointer() {
  const { ref, isOn } = useReveal<SVGSVGElement>();
  return (
    <div className="pointer">
      <svg ref={ref} className={clsx("arrow", isOn && "on")} viewBox="0 0 100 190" aria-hidden="true">
        <path className="shaft" pathLength={1} d="M22 6 C 70 2, 92 36, 68 64 C 46 90, 44 136, 52 180" />
        <path className="head" d="M39 167 L52 181 L64 166" />
      </svg>
      <p className="tag">Master of some.</p>
    </div>
  );
}

function WhatIBuild() {
  return (
    <ul className="does" aria-label="What I build">
      <li>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="6" y="9" width="36" height="24" rx="4" />
          <path d="M18 40h12M24 33v7" />
        </svg>
        Web apps
      </li>
      <li>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="13" y="5" width="22" height="38" rx="5" />
          <path d="M21 37h6" />
        </svg>
        Mobile apps
      </li>
      <li>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="7" y="8" width="34" height="12" rx="3" />
          <rect x="7" y="28" width="34" height="12" rx="3" />
          <path d="M14 14h.01M14 34h.01" />
        </svg>
        Backend &amp; cloud
      </li>
      <li>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 38l4-14 18-18 10 10-18 18-14 4z" />
          <path d="M28 10l10 10M14 24l10 10" />
        </svg>
        Product design
      </li>
    </ul>
  );
}

export default function Hero() {
  return (
    <section className="wrap hero">
      <Bricks />
      <p className="intro">
        Hi, <Mark variant="name">I'm Melco Maniel Gulbe,</Mark> a{" "}
        <WaveMark path={WAVE_PATH}>software engineer</WaveMark> at White Cloak Technologies, and a{" "}
        <Mark variant="circ" className="nw">
          product engineer
        </Mark>{" "}
        the rest of the time.
      </p>
      <Pointer />
      <WhatIBuild />
    </section>
  );
}
