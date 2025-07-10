import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiAdobephotoshop,
  SiMysql,
} from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { BiLogoMongodb } from "react-icons/bi";

const Div4 = () => {
  return (
    <>
      <div className="item glass  item4 p-5 flex flex-col gap-2 ">
        <div className="flex gap-3 items-center ">
          <h1 className="font-semibold  text-lg">Technolgies Stack</h1>
        </div>

        <div className="h-full bg-white w-full  rounded-md  shadow-xl/20">
          <div className="flex flex-wrap gap-2 items-center w-full h-full p-2">
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <SiTailwindcss className="text-3xl" style={{ color: "#38BDF8" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <BiLogoTypescript className="text-3xl" style={{ color: "#3178C6" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <FaJava className="text-3xl" style={{ color: "#007396" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <FaPhp className="text-3xl" style={{ color: "#777BB4" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <RiReactjsLine className="text-3xl" style={{ color: "#61DAFB" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <SiExpress className="text-3xl" style={{ color: "#000000" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <BiLogoSpringBoot className="text-3xl" style={{ color: "#6DB33F" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <SiAdobephotoshop className="text-3xl" style={{ color: "#31A8FF" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <PiFigmaLogoFill className="text-3xl" style={{ color: "#F24E1E" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <BiLogoMongodb className="text-3xl" style={{ color: "#47A248" }} />
            </div>
            <div className="p-1 rounded-md transition-all duration-200 hover:ring-2 hover:ring-gray-400">
              <SiMysql className="text-3xl" style={{ color: "#4479A1" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Div4;
