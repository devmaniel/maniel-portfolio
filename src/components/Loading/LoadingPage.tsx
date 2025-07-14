import Cubes from "../Animations/Animations/Cubes/Cubes";
import RotatingText from "../Animations/TextAnimations/RotatingText/RotatingText";

const LoadingPage = () => {
  return (
    <>
      <div className="lg:h-[500px] lg:w-[700px] md:h-[550px] md:w-[450px] items-center h-[350px] w-[250px]  flex flex-col lg:gap-[30px] md:gap-[50px] gap-[30px] justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex justify-center lg:h-[300px] lg:w-[650px] md:w-[450px] w-[250px]">
          <Cubes
            gridSize={10}
            maxAngle={60}
            radius={4}
            borderStyle="1px solid #000000"
            faceColor="#007AFF"
            rippleColor="#A34FA6"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>


        <RotatingText
          texts={["Loading...", "Keep Waiting", "Cooking 🧑‍🍳", "Rendering!"]}
          mainClassName="px-2 sm:px-2 md:px-3  font-semibold text-4xl text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </>
  );
};

export default LoadingPage;
