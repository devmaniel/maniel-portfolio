import React, { useState, useRef, useLayoutEffect } from "react";
import { Mail, Linkedin, Check } from "lucide-react";

const CopyButton = ({
  icon,
  text,
  copyValue,
  copiedLabel,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  copyValue: string;
  copiedLabel: string;
  link?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fullWidth, setFullWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setFullWidth(textRef.current.offsetWidth);
    }
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const expanded = hovered || copied;

  const content = (
    <div
      className="flex items-center bg-[#121212] text-white rounded-2xl cursor-pointer overflow-hidden transition-colors duration-300"
      style={{
        width: expanded ? 56 + fullWidth + 40 : 56, // 56px for icon+padding, 24px gap+padding
        transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
        minWidth: 56,
        height: 56,
        padding: "0 16px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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

const Social_Link_Div = () => {
  return (
    <div className="flex gap-4 items-center">
      <CopyButton
        icon={<Mail size={24} />}
        text="devmaniel@gmail.com"
        copyValue="devmaniel@gmail.com"
        copiedLabel="Copied!"
      />
      <CopyButton
        icon={<Linkedin size={24} />}
        text="LinkedIn"
        copyValue="https://www.linkedin.com/in/devmaniel"
        copiedLabel="Copied link!"
        link="https://www.linkedin.com/in/devmaniel"
      />
    </div>
  );
};

export default Social_Link_Div;