import clsx from "clsx";

import resumeUrl from "../../assets/resume/resume-melco-maniel-gulbe.pdf";
import { Asterisk } from "./doodles";
import { useReveal } from "./useReveal";

const RESUME_FILE_NAME = "Resume - Melco Maniel Gulbe (Fintech).pdf";

function WorkTitle() {
  const { ref, isOn } = useReveal<HTMLHeadingElement>();
  return (
    <h2 ref={ref} className={clsx("roads-title title", isOn && "on")}>
      <Asterisk />
      All roads lead to
      <br />
      a real 9 to 5 job.
    </h2>
  );
}

/** Desktop: one trunk splitting onto the three cards. */
function ThreeRoads() {
  const { ref, isOn } = useReveal<SVGSVGElement>();
  return (
    <svg ref={ref} className={clsx("arrow road-map three", isOn && "on")} viewBox="0 0 1000 200" aria-hidden="true">
      <path className="shaft trunk" pathLength={1} d="M500 6 L500 56" />
      <path className="shaft" pathLength={1} d="M500 56 C 500 118, 160 72, 160 142 L160 184" />
      <path className="shaft" pathLength={1} d="M500 56 L500 184" />
      <path className="shaft" pathLength={1} d="M500 56 C 500 118, 840 72, 840 142 L840 184" />
      <path className="head" d="M144 168 L160 185 L176 168" />
      <path className="head" d="M484 168 L500 185 L516 168" />
      <path className="head" d="M824 168 L840 185 L856 168" />
    </svg>
  );
}

/** Mobile: the cards stack, so one straight arrow down. */
function OneRoad() {
  const { ref, isOn } = useReveal<SVGSVGElement>();
  return (
    <svg ref={ref} className={clsx("arrow road-map one", isOn && "on")} viewBox="0 0 400 90" aria-hidden="true">
      <path className="shaft trunk" pathLength={1} d="M200 6 L200 76" />
      <path className="head" d="M186 62 L200 77 L214 62" />
    </svg>
  );
}

export default function Work() {
  return (
    <section className="wrap" id="work">
      <div className="roads">
        <WorkTitle />
        <p className="roads-sub">Software &amp; product engineering experience in:</p>
        <ThreeRoads />
        <OneRoad />
        <ul className="wgrid">
          <li className="wcard fin">
            <span className="ico">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M4 12 16 5l12 7" />
                <path d="M7 12v11M12.5 12v11M19.5 12v11M25 12v11" />
                <path d="M4 27h24" />
              </svg>
            </span>
            <h3>Fintech</h3>
          </li>
          <li className="wcard hr">
            <span className="ico">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="9" r="4" />
                <path d="M8.5 27c0-4.4 3.4-8 7.5-8s7.5 3.6 7.5 8" />
                <circle cx="6" cy="14" r="2.6" />
                <circle cx="26" cy="14" r="2.6" />
                <path d="M2 25c0-2.8 1.8-5 4-5M30 25c0-2.8-1.8-5-4-5" />
              </svg>
            </span>
            <h3>HR tech</h3>
          </li>
          <li className="wcard gov">
            <span className="ico">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M8 3h11l6 6v12" />
                <path d="M19 3v6h6" />
                <path d="M8 3v24h7" />
                <path d="M12 13h8M12 18h5" />
                <circle cx="22" cy="24" r="4" />
                <path d="M20 27.5 19 31l3-1.5 3 1.5-1-3.5" />
              </svg>
            </span>
            <h3>Govtech</h3>
          </li>
        </ul>
        <a className="pill pill-dark roads-cta" href={resumeUrl} download={RESUME_FILE_NAME}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v12M6 11l6 6 6-6M5 20h14" />
          </svg>
          Download resume
        </a>
      </div>
    </section>
  );
}
