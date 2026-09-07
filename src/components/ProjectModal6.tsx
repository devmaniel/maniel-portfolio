import { useState } from "react";
import { Badge } from "./ui/badge";
import { FaGlobe } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMaplibre, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import gala_cover from "../assets/travel-app/gala-cover.png";
import gala_square_1 from "../assets/travel-app/gala-square-1.png";
import gala_square_2 from "../assets/travel-app/gala-square-2.png";

const squares = [gala_square_1, gala_square_2];

type ProjectModalProps = {
  onClose: () => void;
};

const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {!loaded && (
        <div className="aspect-square w-full rounded-lg bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full rounded-lg shadow-xl transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
      />
    </div>
  );
};

const ProjectModal6 = ({ onClose }: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div className="flex justify-center px-5 py-10" onClick={(e) => e.stopPropagation()}>
        <div className="w-[300px] md:w-[700px] lg:w-[1100px] max-w-[calc(100vw-40px)] bg-white p-5 flex flex-col gap-5 rounded-lg">
          <p
            className="text-md text-[#FF474C] cursor-pointer hover:underline"
            onClick={onClose}
          >
            Close
          </p>

          <div className="relative">
            <img
              src={gala_cover}
              alt="GALA — plan the whole trip before you spend a peso"
              className="w-full object-cover border-2 border-black rounded-lg aspect-2/1"
            />
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Web Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: GALA
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-blue-500 text-white cursor-pointer" asChild>
              <a
                href="https://gala-phi-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                gala-phi-ten.vercel.app
              </a>
            </Badge>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold text-gray-500">Built with:</span>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiSpringboot className="text-[#6DB33F]" />
              <span className="text-xs font-medium">Spring Boot</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <RiReactjsLine className="text-[#61DAFB]" />
              <span className="text-xs font-medium">React</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <BiLogoTypescript className="text-[#3178C6]" />
              <span className="text-xs font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <FaJava className="text-[#007396]" />
              <span className="text-xs font-medium">Java · JPA</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiPostgresql className="text-[#336791]" />
              <span className="text-xs font-medium">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiTailwindcss className="text-[#06B6D4]" />
              <span className="text-xs font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiMaplibre className="text-[#295DAA]" />
              <span className="text-xs font-medium">MapLibre GL</span>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Plan the whole trip before you spend a peso</h2>
              <p>
                Group trips fall apart in the group chat. The dates live in one message, the budget in another, the place someone found in a screenshot nobody can scroll back to. GALA holds the whole trip in one place — so everyone is looking at the same plan instead of arguing about what was agreed.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Day-by-day itinerary</h2>
              <p>
                Lay the trip out day by day — where you're going, where you're staying, and how you get from one to the next. Everything sits in order, so you can see the shape of the trip at a glance instead of piecing it together from memory.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Budget and expenses</h2>
              <p>
                Every stop carries what it costs, and the trip adds it up as you plan. You know the number before you commit to it — not after you're already there and the money is gone.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Trips people share</h2>
              <p>
                Somebody already figured out the good four days in Palawan. Browse trips other people have posted, and copy one into your own plan to change however you want — your dates, your budget, your pace.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Map and directions</h2>
              <p>
                Every place you add lands on the map, so the plan stops being a list and starts looking like a route. You can see how far apart things really are before the day you have to travel between them.
              </p>
            </div>

            <hr />

            <div className="grid gap-6 sm:grid-cols-2">
              {squares.map((square, idx) => (
                <ImageWithSkeleton
                  key={idx}
                  src={square}
                  alt={`GALA ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal6;
