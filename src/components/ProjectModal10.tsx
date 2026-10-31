import { Badge } from "./ui/badge";
import { BiLogoYoutube } from "react-icons/bi";
import { FaAmazon } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiOpenjdk,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import omoide_cover from "../assets/omoide/omoide-cover.jpg";

type ProjectModalProps = {
  onClose: () => void;
};

const tech = [
  { icon: <FaAmazon className="text-[#00CAFF]" />, name: "Alexa Skill" },
  { icon: <FaAmazon className="text-[#DD344C]" />, name: "Amazon Cognito" },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, name: "Spring Boot" },
  { icon: <SiSpring className="text-[#6DB33F]" />, name: "Spring AI · MCP" },
  { icon: <SiOpenjdk className="text-[#ED8B00]" />, name: "Java 21" },
  { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
  { icon: <SiFlutter className="text-[#02569B]" />, name: "Flutter" },
];

const ProjectModal10 = ({ onClose }: ProjectModalProps) => {
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
              src={omoide_cover}
              alt="Omoide — a journal you keep by talking"
              className="w-full object-cover border-2 border-black rounded-lg aspect-3/2"
            />
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Mobile Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: Omoide
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-red-500 text-white cursor-pointer" asChild>
              <a
                href="https://youtu.be/c-2UHB8c_jo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoYoutube />
                Demo Video
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
              <h2 className="text-xl font-semibold">Say it to Alexa. Read it here.</h2>
              <p>
                Most journals die because writing takes effort. Speaking doesn't. Omoide is a journal you keep by talking: an assistant writes your words into your journal, finds them again when you ask, and the same journal is on your phone.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Say it</h2>
              <p>
                "Alexa, ask Omoide to write my journal." Speak freely. Alexa reads it back, asks "Save it?", and stores your exact words — nothing summarized, nothing rewritten.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Ask for it back</h2>
              <p>
                "Read today's journal," or have any MCP assistant search your past entries.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">See it on your phone</h2>
              <p>
                The same journal lives in the Omoide app: browse by calendar, search, fix a misheard word, or type an entry by hand. Alexa reads typed entries too. One account, one journal, three ways in: voice, AI assistant, and phone.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">A pen, not an author</h2>
              <p>
                Made for people who want to remember their days but never keep up a written diary, and for people who think out loud. Your words are kept verbatim and saved only on your "yes".
              </p>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Under the hood</h2>
              <p>
                Built Oct 19–24, 2026 for the Build, Ship, Shape: Amazon Developer Hackathon (Alexa+ track). One Spring Boot 4.1 server (Java 21, PostgreSQL 17) serves three ways in: a self-hosted MCP server built with Spring AI, a classic Alexa skill, and a Flutter app for iOS and Android. All three sign in through one Amazon Cognito user pool, so one account is one journal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal10;
