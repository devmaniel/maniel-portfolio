import { useEffect, useRef, useState } from "react";
import TextLoop from "../Animations/TextAnimations/TextLoop/TextLoop";
import type { TextLoopDirection } from "../Animations/TextAnimations/TextLoop/TextLoop";

const MOBILE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1023;

// TextLoop renders a 1200x520 viewBox at width:100%/height:auto, so most of each
// SVG is transparent padding around a centered wave. The ribbons are overlapped
// with a negative margin rather than cropped -- cropping is what produced the
// flat cut-off edges, since any wrapper shorter than the crest slices the curve.
const VIEW_W = 1200;
const VIEW_H = 520;

const LOOP_SETTINGS = {
  mobile: { fontSize: 74, ribbonWidth: 128, curviness: 70, spacing: 150 },
  tablet: { fontSize: 52, ribbonWidth: 96, curviness: 80, spacing: 240 },
  desktop: { fontSize: 46, ribbonWidth: 86, curviness: 80, spacing: 320 },
} as const;

type Breakpoint = keyof typeof LOOP_SETTINGS;

const RIBBONS: {
  separator: string;
  direction: TextLoopDirection;
  speed: number;
  ribbonColor: string;
}[] = [
  { separator: "✦", direction: "forward", speed: 120, ribbonColor: "#007AFF" },
  { separator: "★", direction: "reverse", speed: 95, ribbonColor: "#FF4D6D" },
];

const getBreakpoint = (width: number): Breakpoint => {
  if (width <= MOBILE_MAX_WIDTH) return "mobile";
  if (width <= TABLET_MAX_WIDTH) return "tablet";
  return "desktop";
};

const LoadingPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const measure = () => setWidth(containerRef.current?.clientWidth ?? window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { fontSize, ribbonWidth, curviness, spacing } = LOOP_SETTINGS[getBreakpoint(width || window.innerWidth)];

  // Rendered SVG height; the gap between ribbon centerlines is `spacing`.
  const svgHeight = (width * VIEW_H) / VIEW_W;
  const overlap = Math.round(spacing - svgHeight);

  return (
    <div ref={containerRef} className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      {width > 0 &&
        RIBBONS.map((ribbon, index) => (
          <div
            key={ribbon.ribbonColor}
            className="w-full shrink-0"
            style={{ marginTop: index === 0 ? 0 : overlap }}
          >
            <TextLoop
              text="devmaniel"
              shape="wave"
              speed={ribbon.speed}
              direction={ribbon.direction}
              separator={ribbon.separator}
              curviness={curviness}
              fontSize={fontSize}
              fontWeight={800}
              letterSpacing={2}
              uppercase
              color="#ffffff"
              ribbon
              ribbonColor={ribbon.ribbonColor}
              ribbonWidth={ribbonWidth}
              pauseOnHover={false}
            />
          </div>
        ))}
    </div>
  );
};

export default LoadingPage;
