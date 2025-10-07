
import fv_cover from "../assets/florville/florville.png";

import { Badge } from "./ui/badge";

import { SiCanva } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";



type ProjectModalProps = {
  onClose: () => void;
};

const ProjectModal4 = ({ onClose }: ProjectModalProps) => {
  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 p-5 flex justify-center z-50 overflow-hidden overflow-y-auto"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
         

          {/* Modal Content */}
          <div className="w-[300px] h-[600px]  md:w-[700px] md:h-[750px] lg:w-[1100px] lg:h-[900px] overflow-hidden overflow-y-auto mt-5 bg-white p-5 flex flex-col gap-5 rounded-lg">
            <p
              className="text-md text-[#FF474C] cursor-pointer hover:underline"
              onClick={onClose}
            >
              Close
            </p>

            <div className="relative">
              <img
                src={fv_cover}
                alt={"fv_cover"}
                className="h-[300px] w-full object-fit border-2 border-black rounded-lg aspect-3/2"
              />
              <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Web Project
              </span>
            </div>

            <h1 className="text-xl  md:text-2xl lg:text-4xl font-bold">
              Project Name: Flòrville
            </h1>

            <div className="flex flex-col lg:flex-row  gap-2">
              <Badge className="bg-blue-500 text-white cursor-pointer" asChild>
                <a
                  href="https://florville.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  https://florville.vercel.app/
                </a>
              </Badge>

              <Badge className="bg-violet-500 text-white cursor-pointer" asChild>
                <a
                  href="https://www.canva.com/design/DAG07tm29L4/xbJKxmMfafmMSmP8uvoihw/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCanva />
                  NASAyers: Vol4 Slide Deck Presentation
                </a>
              </Badge>
            </div>

            <hr />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">About Florville</h2>
                <p>
                  Florville is an AI-powered web application revolutionizing how we monitor and understand plant flowering patterns. By integrating real-time citizen science data from iNaturalist with botanical knowledge from Wikipedia and GBIF, and enhancing it with Google Gemini AI, Florville delivers species-level precision in bloom tracking—something satellites alone cannot achieve.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">The Challenge</h2>
                <p>
                  Our platform tackles the urgent need for accurate, ground-truthed phenology data by aggregating millions of plant observations, validating them, and using AI to fill gaps and generate actionable insights. This data is essential for early detection of invasive species, pollinator conservation, climate change research, and agricultural planning.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Our Solution</h2>
                <p>
                  Florville empowers researchers, conservationists, and nature enthusiasts by transforming complex ecological data into accessible, meaningful intelligence. Whether you're studying seasonal shifts, tracking rare blooms, or planning pollinator-friendly landscapes, Florville offers clarity and depth.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Technology & Impact</h2>
                <p>
                  Built with modern technologies like React, TypeScript, and Vite, the app is fast, modular, and designed for scalability. It's not just a tool—it's a bridge between grassroots observation and global ecological understanding. By grounding AI in real-world data, Florville helps protect biodiversity and supports informed decision-making in a rapidly changing world. It's phenology reimagined for the age of intelligence.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal4;
