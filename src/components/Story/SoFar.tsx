import clsx from "clsx";

import { WaveMark } from "./doodles";
import { useReveal } from "./useReveal";

const SO_FAR_WAVE = "M3 15 C 40 15, 60 5, 110 5 S 180 19, 230 18 S 330 8, 397 4";

/** Dashed trail out of the tech stack, through the sign-off line, down into "Say hi." */
export default function SoFar() {
  const { ref, isOn } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={clsx("wrap sofar", isOn && "on")}>
      <svg className="seg top" viewBox="0 0 160 120" aria-hidden="true">
        <path className="dash" d="M80 4 C 80 34, 34 40, 44 66 C 52 88, 80 86, 80 116" />
      </svg>
      <p className="sofar-line">
        That’s the story <WaveMark path={SO_FAR_WAVE}>so far</WaveMark>.
      </p>
      <svg className="seg bottom" viewBox="0 0 240 180" aria-hidden="true">
        <path className="dash" d="M120 4 C 120 40, 196 46, 186 86 C 178 118, 120 116, 120 164" />
        <path className="head" d="M106 152 L120 167 L134 152" />
      </svg>
    </div>
  );
}
