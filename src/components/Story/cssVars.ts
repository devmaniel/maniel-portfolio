import type { CSSProperties } from "react";

type CssVarName = `--${string}`;

/** Typed way to pass CSS custom properties (like `--i` or `--tile`) through `style`. */
export function cssVars(vars: Record<CssVarName, string | number>): CSSProperties {
  return vars as CSSProperties;
}
