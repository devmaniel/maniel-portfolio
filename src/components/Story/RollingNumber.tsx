import { useLayoutEffect, useState } from "react";

import { useReveal } from "./useReveal";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const DIGIT_STAGGER_MS = 90;
const isDigit = (char: string) => /\d/.test(char);

type RollingNumberProps = {
  value: string;
  label: string;
};

/** Measures each character's width in em, using the element's own font. */
function measureCharWidths(element: HTMLElement, chars: string[]): number[] {
  const probe = document.createElement("span");
  probe.style.cssText = "position:absolute;visibility:hidden;white-space:pre";
  element.appendChild(probe);
  const fontPx = parseFloat(getComputedStyle(element).fontSize);
  const widths = chars.map((char) => {
    probe.textContent = char;
    return probe.getBoundingClientRect().width / fontPx;
  });
  element.removeChild(probe);
  return widths;
}

/**
 * A number whose digits spin like a slot machine and land on the value
 * once it is 40% on screen. Each digit column is as wide as its own digit.
 */
export default function RollingNumber({ value, label }: RollingNumberProps) {
  const { ref, isOn } = useReveal<HTMLDivElement>({ rootMargin: "0px", threshold: 0.4 });
  const [widths, setWidths] = useState<number[] | null>(null);
  const chars = value.split("");
  // position of each digit among digits only, so the stagger skips commas and spaces
  const digitOrder = chars.map((_, index) => chars.slice(0, index).filter(isDigit).length);

  useLayoutEffect(() => {
    if (ref.current) setWidths(measureCharWidths(ref.current, value.split("")));
  }, [ref, value]);

  return (
    <div ref={ref} className="num" role="img" aria-label={label}>
      {chars.map((char, index) => {
        if (char === " ") return <span key={index} className="ch sp" aria-hidden="true" />;
        if (!isDigit(char)) {
          return (
            <span key={index} className="ch" aria-hidden="true">
              {char}
            </span>
          );
        }
        const width = widths ? `${widths[index].toFixed(3)}em` : undefined;
        const rolled = {
          transform: `translateY(-${char}em)`,
          transitionDelay: `${digitOrder[index] * DIGIT_STAGGER_MS}ms`,
        };
        return (
          <span key={index} className="ch d" aria-hidden="true" style={{ width }}>
            <span className="strip" style={isOn ? rolled : undefined}>
              {DIGITS.map((digit) => (
                <b key={digit}>{digit}</b>
              ))}
            </span>
          </span>
        );
      })}
    </div>
  );
}
