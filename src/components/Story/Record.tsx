import clsx from "clsx";
import type { ReactNode } from "react";

import { HACKATHON_YEARS, type HackathonResult } from "../../data/storyHackathons";
import { Asterisk, StarIcon } from "./doodles";
import { useReveal } from "./useReveal";

const ROW_STAGGER_MS = 60;
const ROWS_PER_STAGGER_CYCLE = 6;

type FadeRowProps = {
  // position among all table rows, so neighbouring rows fade in one after another
  index: number;
  className?: string;
  children: ReactNode;
};

function FadeRow({ index, className, children }: FadeRowProps) {
  const { ref, isOn } = useReveal<HTMLTableRowElement>({ rootMargin: "0px 0px -8% 0px" });
  const delayMs = (index % ROWS_PER_STAGGER_CYCLE) * ROW_STAGGER_MS;
  return (
    <tr ref={ref} className={clsx(className, isOn && "on")} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </tr>
  );
}

function ResultTag({ result }: { result: HackathonResult }) {
  const hasStar = result.kind === "win" || result.kind === "top";
  return (
    <span className={`rtag ${result.kind}`}>
      {result.label}
      {hasStar && <StarIcon className="star" />}
    </span>
  );
}

function RecordTitle() {
  const { ref, isOn } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={clsx("title", isOn && "on")}>
      <h2>
        The record
        <Asterisk />
      </h2>
    </div>
  );
}

// each year adds a heading row before its events, so rows are numbered across the whole table
const YEAR_START_INDEX = HACKATHON_YEARS.map((_, yearIndex) =>
  HACKATHON_YEARS.slice(0, yearIndex).reduce((sum, year) => sum + year.events.length + 1, 0),
);

export default function Record() {
  return (
    <section className="wrap" id="record">
      <div className="card">
        <div className="card-head">
          <RecordTitle />
          <p className="fn">
            <Asterisk />
            Every hackathon from 2024 to 2026. The wins, and the ones that were mostly for the plot.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Where</th>
              <th>Registered</th>
              <th className="res">Result</th>
            </tr>
          </thead>
          {HACKATHON_YEARS.map(({ year, events }, yearIndex) => (
            <tbody key={year}>
              <FadeRow index={YEAR_START_INDEX[yearIndex]} className="yr-row">
                <th colSpan={4} scope="rowgroup">
                  <span className="y">{year}</span>
                  <span className="n">
                    {events.length} {events.length === 1 ? "hackathon" : "hackathons"}
                  </span>
                </th>
              </FadeRow>
              {events.map((hackathon, eventIndex) => (
                <FadeRow key={hackathon.event} index={YEAR_START_INDEX[yearIndex] + eventIndex + 1}>
                  <td className="ev">{hackathon.event}</td>
                  <td className="where">{hackathon.where}</td>
                  <td className="reg">{hackathon.registered}</td>
                  <td className="res">
                    <ResultTag result={hackathon.result} />
                  </td>
                </FadeRow>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
