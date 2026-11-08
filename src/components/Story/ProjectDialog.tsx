import clsx from "clsx";
import { Fragment, useEffect, useId, useRef, type MouseEvent } from "react";

import type { ProjectImage, StoryProject } from "../../data/storyProjects";
import { cssVars } from "./cssVars";
import { ArrowUpRight } from "./doodles";

type ProjectDialogProps = {
  project: StoryProject | null;
  onClose: () => void;
};

function tileStyle(image: ProjectImage) {
  return image.tile ? cssVars({ "--tile": image.tile }) : undefined;
}

function ProjectStory({ project, titleId }: { project: StoryProject; titleId: string }) {
  const { name, cover, popupType, lede, links, stack, intro, sections, shots } = project;
  return (
    <>
      <figure className={clsx("pm-cover", cover.isFit && "fit")} style={tileStyle(cover)}>
        <img src={cover.src} alt={`${name} cover`} width={cover.width} height={cover.height} decoding="async" />
      </figure>
      <div className="pm-head">
        <p className="pm-type">{popupType}</p>
        <h2 className="pm-title" id={titleId}>
          {name}
        </h2>
        <p className="pm-lede">{lede}</p>
      </div>
      {links.length > 0 && (
        <div className="pm-links">
          {links.map(({ label, href }, index) => (
            <a key={href} className={clsx("pill", index === 0 && "pill-dark")} href={href} target="_blank" rel="noopener noreferrer">
              {label} <ArrowUpRight />
            </a>
          ))}
        </div>
      )}
      {stack.length > 0 && (
        <ul className="pm-stack" aria-label="Built with">
          {stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      )}
      <div className="pm-text">
        {intro && <p className="pm-intro">{intro}</p>}
        {sections.map(({ heading, paragraphs = [], list }, index) => (
          <Fragment key={heading ?? index}>
            {heading && <h3>{heading}</h3>}
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {list && (
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
      {shots && (
        <div className={clsx("pm-shots", shots.isTwoColumn && "two")}>
          {shots.images.map((shot, index) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={`${name} screenshot ${index + 1}`}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}
    </>
  );
}

/**
 * The project popup, built on the native <dialog>: Esc closes it and focus stays inside.
 * It opens whenever `project` is set; any close (Esc, ×, backdrop) calls `onClose`.
 */
export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;
    if (!dialog.open) dialog.showModal();
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    document.documentElement.classList.add("modal-open");
    return () => document.documentElement.classList.remove("modal-open");
  }, [project]);

  const close = () => dialogRef.current?.close();

  // a click on the dim backdrop lands on the dialog element itself
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <dialog ref={dialogRef} className="pmodal" aria-labelledby={titleId} onClose={onClose} onClick={handleClick}>
      <button className="pm-x" type="button" aria-label="Close" onClick={close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <div className="pm-in" ref={bodyRef}>
        {project && <ProjectStory project={project} titleId={titleId} />}
      </div>
    </dialog>
  );
}
