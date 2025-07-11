

import modokard_cover from "../assets/modokard-cover.png";

import modokard_slide_1 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-1.png";
import modokard_slide_2 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-2.png";
import modokard_slide_3 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-3.png";
import modokard_slide_4 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-4.png";
import modokard_slide_5 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-5.png";
import modokard_slide_6 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-6.png";
import modokard_slide_7 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-7.png";
import modokard_slide_8 from "../assets/modokard/84222c70-6f0a-4806-8304-dec904692389-8.png";

type ProjectModalProps = {
  onClose: () => void;
};

const ProjectModal1 = ({ onClose }: ProjectModalProps) => {
  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 p-5 flex justify-center-safe z-50 overflow-hidden overflow-y-auto"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
         

          {/* Modal Content */}
          <div className="w-[300px] h-[600px]  md:w-[700px] md:h-[750px] lg:w-[1100px] lg:h-[900px] overflow-hidden overflow-y-auto mt-5 bg-white p-5 flex flex-col gap-5 rounded-l">
            <p className="text-md text-[#FF474C] cursor-pointer hover:underline" onClick={onClose}>Close</p>

            <img
              src={modokard_cover}
              alt={"modokard_cover"}
              className="h-[300px] w-full object-fit rounded-lg aspect-3/2"
            />

            <h1 className="text-4xl font-bold">Project Name: Modokard</h1>

            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-semibold">Descriptions</h4>
              <hr />

              <p className="pt-2 font-light leading-6">
                <span className="font-bold">
                  Introducing Modokard an easy-to-use web application
                </span>{" "}
                designed to help learners improve faster. The platform combines{" "}
                <span className="font-bold">
                  flashcards for quick, repetitive learning with Pomodoro timers
                </span>{" "}
                to help users manage their study time effectively. <br /> <br />{" "}
                The <span className="font-bold">interface is engaging</span> and{" "}
                <span className="font-bold">
                  encourages community interaction
                </span>
                , where users can discuss and share ideas about different
                flashcard collections.{" "}
                <span className="font-bold">
                  The app also includes helpful tracking features like heatmaps,
                  pie charts, and line charts to show users their progress.
                </span>{" "}
                This makes learning more enjoyable and helps users stay
                motivated and on track, whether they're studying alone or with
                others.
              </p>
            </div>

            <img
              src={modokard_slide_1}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_2}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_3}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_4}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />
            <img
              src={modokard_slide_5}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_6}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_7}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />

            <img
              src={modokard_slide_8}
              alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
              className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal1;
