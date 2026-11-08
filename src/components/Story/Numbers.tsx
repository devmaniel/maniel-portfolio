import clsx from "clsx";
import type { ReactNode } from "react";

import { StarIcon } from "./doodles";
import RollingNumber from "./RollingNumber";
import { useReveal } from "./useReveal";

type HopProps = {
  direction: "to-left" | "to-right";
  children: ReactNode;
};

/** Big swooping arrow with a handwritten note that leads to the next number. */
function Hop({ direction, children }: HopProps) {
  const { ref, isOn } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={clsx("hop", direction, isOn && "on")}>
      <svg viewBox="0 0 300 160" aria-hidden="true">
        <path className="shaft" pathLength={1} d="M268 6 C 262 70, 190 92, 130 84 C 70 76, 44 104, 42 148" />
        <path className="head" d="M29 136 L42 150 L55 136" />
      </svg>
      <p className="tag">{children}</p>
    </div>
  );
}

function Sparkles() {
  const { ref, isOn } = useReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={clsx("stars", isOn && "on")} aria-hidden="true">
      <StarIcon className="s1" />
      <StarIcon className="s2" />
      <StarIcon className="s3" />
      <StarIcon className="s4" />
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="wrap" id="numbers">
      <h2 className="sr-only">In numbers</h2>

      <Hop direction="to-right">
        Also hackathons,
        <br />
        mostly for the plot:
      </Hop>
      <div className="stat">
        <div className="stat-block purple">
          <RollingNumber value="15 events" label="15 events" />
        </div>
        <span className="cap blue">Hackathons entered, 2024 to 2026</span>
      </div>

      <Hop direction="to-left">
        That&rsquo;s a lot
        <br />
        of rivals:
      </Hop>
      <div className="stat left">
        <div className="stat-block blue">
          <RollingNumber value="360,000+" label="360,000 plus" />
        </div>
        <span className="cap ink">Builders registered in the same hackathons</span>
      </div>

      <Hop direction="to-right">
        Main character
        <br />
        moment:
      </Hop>
      <div className="stat">
        <div className="stat-block green">
          <RollingNumber value="2 wins" label="2 wins" />
          <Sparkles />
        </div>
        <span className="cap pink">One first place, one Top 10 of 137 teams</span>
      </div>
    </section>
  );
}
