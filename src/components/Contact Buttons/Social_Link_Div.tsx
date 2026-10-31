import React, { useState, useRef, useLayoutEffect } from "react";
import { Mail, Linkedin, Check } from "lucide-react";

const COPIED_MS = 1500;

const CopyButton = ({
  icon,
  text,
  copyValue,
  copiedLabel,
  link,
  expanded,
  copied,
  onHover,
  onLeave,
  onCopy,
}: {
  icon: React.ReactNode;
  text: string;
  copyValue: string;
  copiedLabel: string;
  link?: string;
  expanded: boolean;
  copied: boolean;
  onHover: () => void;
  onLeave: () => void;
  onCopy: () => void;
}) => {
  const [fullWidth, setFullWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  // re-measure when the label switches between text and copiedLabel
  useLayoutEffect(() => {
    if (textRef.current) {
      setFullWidth(textRef.current.offsetWidth);
    }
  }, [copied]);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(copyValue);
    onCopy();
  };

  const content = (
    <div
      className="flex shrink-0 items-center bg-[#121212] text-white rounded-2xl cursor-pointer overflow-hidden transition-colors duration-300"
      style={{
        width: expanded ? 56 + fullWidth + 40 : 56, // 56px for icon+padding, 24px gap+padding
        transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
        minWidth: 56,
        maxWidth: "100%",
        height: 56,
        padding: "0 16px",
      }}
      // mouse only: a tap on touch screens would "hover" and never un-hover
      onPointerEnter={(e) => e.pointerType === "mouse" && onHover()}
      onPointerLeave={onLeave}
      onClick={handleClick}
    >
      <span className="flex items-center justify-center w-8 h-8">
        {copied ? <Check size={24} /> : icon}
      </span>
      <span
        ref={textRef}
        className={`ml-3 font-semibold whitespace-nowrap transition-opacity duration-300 ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          pointerEvents: expanded ? "auto" : "none",
        }}
      >
        {copied ? copiedLabel : text}
      </span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        {content}
      </a>
    );
  }
  return content;
};

const BUTTONS = [
  {
    id: "email",
    icon: <Mail size={24} />,
    text: "devmaniel@gmail.com",
    copyValue: "devmaniel@gmail.com",
    copiedLabel: "Copied!",
  },
  {
    id: "linkedin",
    icon: <Linkedin size={24} />,
    text: "LinkedIn",
    copyValue: "https://www.linkedin.com/in/devmaniel",
    copiedLabel: "Copied link!",
    link: "https://www.linkedin.com/in/devmaniel",
  },
];

// Only one button is open at a time: the hovered one, or the one just copied.
const Social_Link_Div = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopiedId(id);
    timeoutRef.current = setTimeout(() => setCopiedId(null), COPIED_MS);
  };

  const openId = copiedId ?? hoveredId;

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {BUTTONS.map(({ id, ...button }) => (
        <CopyButton
          key={id}
          {...button}
          expanded={openId === id}
          copied={copiedId === id}
          onHover={() => {
            setHoveredId(id);
            if (copiedId !== id) setCopiedId(null);
          }}
          onLeave={() => setHoveredId((current) => (current === id ? null : current))}
          onCopy={() => handleCopy(id)}
        />
      ))}
    </div>
  );
};

export default Social_Link_Div;
