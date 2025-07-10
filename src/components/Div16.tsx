
import Silk from "./Animations/Backgrounds/Silk/Silk";

const Div16 = () => {
  return (
    <>

      <Silk
        speed={5}
        scale={1}
        color="#007AFF"
        noiseIntensity={1.5}
        rotation={0}
      />

      <div className="absolute inset-0 flex items-center justify-center z-50">
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-black text-white">Where design feels, code thinks, and vision leads.</h1>
      </div>
    </>
  );
};

export default Div16;
