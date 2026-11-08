import "./story.css";

import Certificates from "./Certificates";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Numbers from "./Numbers";
import Projects from "./Projects";
import Record from "./Record";
import SoFar from "./SoFar";
import TechStack from "./TechStack";
import Work from "./Work";

/** The single-column story page, ported from artifacts/about-story-2026-11-08/about-story.html. */
export default function StoryPage() {
  return (
    <div className="story">
      <Navbar />
      <main id="top">
        <Hero />
        <Numbers />
        <Record />
        <Work />
        <Certificates />
        <Projects />
        <TechStack />
        <SoFar />
        <Contact />
      </main>
      <footer>
        <div className="in">
          <span>Melco Maniel Gulbe · 2026</span>
          <a className="totop" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
