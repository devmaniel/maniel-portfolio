import type { IconType } from "react-icons";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript, BiLogoSpringBoot, BiLogoMongodb } from "react-icons/bi";
import { FaJava, FaAws } from "react-icons/fa6";
import { SiExpress, SiNextdotjs, SiNestjs, SiMysql, SiPostgresql, SiFlutter } from "react-icons/si";

type Tech = { name: string; Icon: IconType; color: string };

const CORE_TECHNOLOGIES: Tech[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "React", Icon: RiReactjsLine, color: "#61DAFB" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Spring Boot", Icon: BiLogoSpringBoot, color: "#6DB33F" },
];

const SUPPORTING_TECHNOLOGIES: Tech[] = [
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "TypeScript", Icon: BiLogoTypescript, color: "#3178C6" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: BiLogoMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
];

const Div4 = () => {
  return (
    <div className="item glass item4 p-5 flex flex-col gap-2 min-h-0">
      <h1 className="font-semibold text-lg shrink-0">Technologies Stack</h1>

      <div className="min-h-0 flex-1 bg-white w-full rounded-md shadow-xl/20 p-3 flex flex-col justify-center gap-2 overflow-hidden">
        <div className="flex flex-wrap gap-2 items-center">
          {CORE_TECHNOLOGIES.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 ring-1 ring-gray-200 transition-all duration-200 hover:ring-gray-400 hover:bg-white"
            >
              <Icon className="text-xl shrink-0" style={{ color }} />
              <span className="text-xs font-medium leading-none text-gray-700">{name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider leading-none text-gray-400">Also works with</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          {SUPPORTING_TECHNOLOGIES.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="p-1 rounded-md opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 hover:bg-gray-50"
            >
              <Icon className="text-xl" style={{ color }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Div4;
