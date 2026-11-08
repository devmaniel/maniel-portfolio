import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { useReveal } from "./useReveal";

const EMAIL = "devmaniel@gmail.com";
const COPIED_LABEL_MS = 1500;

function CopyHint() {
  const { ref, isOn } = useReveal<SVGSVGElement>();
  return (
    <span className="copy-hint" aria-hidden="true">
      <svg ref={ref} className={clsx("arrow", isOn && "on")} viewBox="0 0 60 50">
        <path className="shaft" pathLength={1} d="M4 12 C 28 4, 44 16, 45 43" />
        <path className="head" d="M36 34 L45 45 L54 34" />
      </svg>
      <span className="tag">click to copy</span>
    </span>
  );
}

/** Copies the email address; shows "Copied!" for a moment. Falls back to a mailto link. */
function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    if (!navigator.clipboard?.writeText) {
      window.location.href = `mailto:${EMAIL}`;
      return;
    }
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setIsCopied(false), COPIED_LABEL_MS);
    } catch {
      // clipboard blocked (permissions or insecure page): keep showing the address so it can be copied by hand
      setIsCopied(false);
    }
  };

  return (
    <button className="pill pill-dark" type="button" aria-label={`Copy email address: ${EMAIL}`} onClick={copyEmail}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
      <span aria-live="polite">{isCopied ? "Copied!" : EMAIL}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <section className="wrap contact" id="contact">
      <h2>Say hi.</h2>
      <p>Open to good problems, good teams, and the occasional hackathon weekend.</p>
      <div className="actions">
        <span className="copy-wrap">
          <CopyHint />
          <CopyEmailButton />
        </span>
        <a className="pill" href="https://www.linkedin.com/in/devmaniel" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a className="pill" href="https://github.com/devmaniel" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
