import clsx from "clsx";

import { ALSO_STACK, MAIN_STACK, type Tool } from "../../data/storyTechStack";
import { cssVars } from "./cssVars";
import { useReveal } from "./useReveal";

type ToolListProps = {
  tools: Tool[];
  label: string;
  className: string;
  // the second list keeps counting so its pills fade in after the first list's
  firstIndex: number;
};

function ToolList({ tools, label, className, firstIndex }: ToolListProps) {
  const { ref, isOn } = useReveal<HTMLUListElement>();
  return (
    <ul ref={ref} className={clsx("tlist", className, isOn && "on")} aria-label={label}>
      {tools.map(({ name, icon }, index) => (
        <li key={name} style={cssVars({ "--i": firstIndex + index })}>
          <span className="tico">
            <img src={icon} alt="" />
          </span>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function TechStack() {
  return (
    <section className="wrap" id="stack">
      <div className="stack-list">
        <h2 className="roads-title certs-title">What I reach for.</h2>
        <ToolList tools={MAIN_STACK} label="Main stack" className="main" firstIndex={0} />
        <p className="tlabel">Also works with</p>
        <ToolList tools={ALSO_STACK} label="Also works with" className="also" firstIndex={MAIN_STACK.length} />
      </div>
    </section>
  );
}
