import { Badge } from "./ui/badge";
import { BiLogoYoutube } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiSpringboot,
  SiOpenjdk,
  SiPostgresql,
  SiDocker,
  SiGooglegemini,
  SiElevenlabs,
} from "react-icons/si";
import chap_cover from "../assets/chap/chap-cover.jpg";

type ProjectModalProps = {
  onClose: () => void;
};

const tech = [
  { icon: <SiFlutter className="text-[#02569B]" />, name: "Flutter" },
  { icon: <SiDart className="text-[#0175C2]" />, name: "Dart" },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, name: "Spring Boot" },
  { icon: <SiOpenjdk className="text-[#ED8B00]" />, name: "Java 21" },
  { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
  { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
  { icon: <SiGooglegemini className="text-[#8E75B2]" />, name: "Google Gemini" },
  { icon: <SiElevenlabs />, name: "ElevenLabs" },
];

const ProjectModal9 = ({ onClose }: ProjectModalProps) => {
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
              src={chap_cover}
              alt="Chap — AI friends you can message and call"
              className="w-full object-cover border-2 border-black rounded-lg aspect-3/2"
            />
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Mobile Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: Chap
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-red-500 text-white cursor-pointer" asChild>
              <a
                href="https://youtu.be/RTo7CPfReVE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoYoutube />
                Demo Video
              </a>
            </Badge>
            <Badge className="bg-black text-white cursor-pointer" asChild>
              <a
                href="https://github.com/devmaniel/chap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                github.com/devmaniel/chap
              </a>
            </Badge>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold text-gray-500">Built with:</span>
            {tech.map((t) => (
              <div key={t.name} className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
                {t.icon}
                <span className="text-xs font-medium">{t.name}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">A small, fictional social world</h2>
              <p>
                Chap is a small, fictional social world on your phone. You discover AI characters, each with their own name, personality, interests and voice, and add them as friends.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Message, share a photo, or call</h2>
              <p>
                You talk to your friends the way you would with anyone else: send messages, share a photo, or call them by voice. Come back later and the conversation picks up where it left off.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Clearly fictional, clearly AI</h2>
              <p>
                The friends are clearly fictional and clearly AI. There are no points or streaks, just the conversation and the character.
              </p>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Under the hood</h2>
              <p>
                Built for Build With AI: Basics on Devpost. A Flutter app for iOS and Android talks to a Spring Boot 4 server (Java 21) with PostgreSQL 17 in Docker and Flyway migrations. Friend replies come from Google Gemini, and voice calls run on ElevenLabs Conversational AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal9;
