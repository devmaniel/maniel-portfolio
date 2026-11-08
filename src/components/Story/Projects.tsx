import clsx from "clsx";
import { useRef, useState } from "react";

import { STORY_PROJECTS, type StoryProject } from "../../data/storyProjects";
import { cssVars } from "./cssVars";
import { Asterisk } from "./doodles";
import ProjectDialog from "./ProjectDialog";
import { useReveal } from "./useReveal";

function ProjectsTitle() {
  const { ref, isOn } = useReveal<HTMLHeadingElement>();
  return (
    <h2 ref={ref} className={clsx("roads-title title", isOn && "on")}>
      Things I built after 5.
      <Asterisk className="after" />
    </h2>
  );
}

type ProjectCardProps = {
  project: StoryProject;
  onOpen: (project: StoryProject, opener: HTMLButtonElement) => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { name, cardType, cardLine, card } = project;
  return (
    <button
      className="pcard"
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => onOpen(project, event.currentTarget)}
    >
      <span className={clsx("pthumb", card.isFit && "fit")} style={card.tile ? cssVars({ "--tile": card.tile }) : undefined}>
        <img src={card.src} alt="" width={card.width} height={card.height} loading="lazy" decoding="async" />
      </span>
      <span className="pname">{name}</span>
      <span className="ptype">{cardType}</span>
      <span className="pline">{cardLine}</span>
    </button>
  );
}

export default function Projects() {
  const { ref, isOn } = useReveal<HTMLUListElement>();
  const [activeProject, setActiveProject] = useState<StoryProject | null>(null);
  // the card that opened the popup gets focus back when it closes
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const openProject = (project: StoryProject, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
    openerRef.current?.focus();
  };

  return (
    <section className="wrap" id="projects">
      <div className="projects">
        <ProjectsTitle />
        <p className="roads-sub">Hackathon builds and side projects. Open one for the whole story.</p>
        <ul ref={ref} className={clsx("pgrid", isOn && "on")} aria-label="Projects">
          {STORY_PROJECTS.map((project, index) => (
            <li key={project.id} style={cssVars({ "--i": index })}>
              <ProjectCard project={project} onOpen={openProject} />
            </li>
          ))}
        </ul>
      </div>
      <ProjectDialog project={activeProject} onClose={closeProject} />
    </section>
  );
}
