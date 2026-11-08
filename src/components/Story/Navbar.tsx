import clsx from "clsx";
import { useEffect, useState } from "react";

import { ArrowUpRight } from "./doodles";

const LINKEDIN_URL = "https://www.linkedin.com/in/melco-maniel/";
const SCROLLED_AFTER_PX = 40;
// a section counts as "current" while it crosses a thin band just above the middle of the screen
const ACTIVE_BAND = "-40% 0px -55% 0px";

const NAV_LINKS = [
  { id: "record", label: "Record" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const LOGO_PATH =
  "M8 59.1V45.75H12.45V41.3H16.9V36.85H21.35H25.8H30.25V50.2H25.8V54.65H30.25V68H16.9V63.55H12.45V59.1H8ZM12.45 50.2V54.65H16.9V59.1H21.35V63.55H25.8V59.1H21.35V54.65H16.9V50.2H21.35V45.75H25.8V41.3H21.35V45.75H16.9V50.2H12.45ZM34.7 68V36.85H48.05V41.3H52.5V36.85H65.85V68H52.5V59.1H48.05V68H34.7ZM43.6 45.75V41.3H39.15V63.55H43.6V50.2H48.05V54.65H52.5V50.2H56.95V63.55H61.4V41.3H56.95V45.75H52.5V50.2H48.05V45.75H43.6ZM70.3 68V54.65H74.75V50.2H70.3V36.85H83.65V41.3H88.1V45.75H92.55V59.1H88.1V63.55H83.65V68H70.3ZM74.75 59.1V63.55H79.2V59.1H83.65V54.65H88.1V50.2H83.65V45.75H79.2V41.3H74.75V45.75H79.2V50.2H83.65V54.65H79.2V59.1H74.75Z";

function useIsScrolled(): boolean {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > SCROLLED_AFTER_PX);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > SCROLLED_AFTER_PX);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return isScrolled;
}

function useActiveSection(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: ACTIVE_BAND },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

export default function Navbar() {
  const isScrolled = useIsScrolled();
  const activeId = useActiveSection();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div className={clsx("navwrap", isScrolled && "scrolled")}>
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top">
          <span className="tile" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <path d={LOGO_PATH} fill="#fff" />
            </svg>
          </span>
          <span className="txt">
            <b>Melco Maniel Gulbe</b>
            <small>Software · Product engineer</small>
          </span>
        </a>
        <div className="links">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={clsx(activeId === id && "active")}>
              {label}
            </a>
          ))}
        </div>
        <div className="cta">
          <a className="pill" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <ArrowUpRight />
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-label="Menu"
            aria-expanded={isSheetOpen}
            aria-controls="sheet"
            onClick={() => setIsSheetOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div className={clsx("sheet", isSheetOpen && "open")} id="sheet">
        {NAV_LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={closeSheet}>
            {label}
          </a>
        ))}
        <a className="ext" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={closeSheet}>
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
