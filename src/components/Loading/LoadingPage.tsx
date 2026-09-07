import FaultyTerminal from "./FaultyTerminal";

export const DISSOLVE_MS = 700;

const LoadingPage = ({ exiting = false }: { exiting?: boolean }) => (
  <div className="h-full w-full overflow-hidden bg-white">
    <FaultyTerminal
      lightMode
      tint="#007AFF"
      scale={1.6}
      gridMul={[2, 1]}
      digitSize={1.2}
      timeScale={0.4}
      scanlineIntensity={0.4}
      curvature={0}
      mouseReact={false}
      dpr={1}
      pageLoadAnimation
      exiting={exiting}
      exitDuration={DISSOLVE_MS}
      brightness={1}
    />
  </div>
);

export default LoadingPage;
