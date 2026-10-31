import { Badge } from "./ui/badge";
import { BiLogoYoutube } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiOllama,
  SiSpringboot,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiSupabase,
  SiElevenlabs,
} from "react-icons/si";
import nook_cover from "../assets/nook/nook-cover.jpg";

type ProjectModalProps = {
  onClose: () => void;
};

const tech = [
  { icon: <SiOllama />, name: "Ollama · Qwen2.5-VL 7B" },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, name: "Spring Boot" },
  { icon: <SiOpenjdk className="text-[#ED8B00]" />, name: "Java 21" },
  { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
  { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
  { icon: <SiVite className="text-[#646CFF]" />, name: "Vite" },
  { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
  { icon: <SiFlutter className="text-[#02569B]" />, name: "Flutter" },
  { icon: <SiSupabase className="text-[#3FCF8E]" />, name: "Supabase Storage" },
  { icon: <SiElevenlabs />, name: "ElevenLabs" },
];

const ProjectModal8 = ({ onClose }: ProjectModalProps) => {
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
              src={nook_cover}
              alt="Nook — an AI helper that answers tenants' questions and reports problems to the landlord"
              className="w-full object-cover border-2 border-black rounded-lg aspect-3/2"
            />
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Web &amp; Mobile Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: Nook
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-red-500 text-white cursor-pointer" asChild>
              <a
                href="https://www.youtube.com/watch?v=2q67SkeN_fw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoYoutube />
                Full Demo
              </a>
            </Badge>
            <Badge className="bg-black text-white cursor-pointer" asChild>
              <a
                href="https://x.com/manielco/status/2108626704415814077"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
                1-minute Demo
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
              <h2 className="text-xl font-semibold">The same questions, over and over</h2>
              <p>
                Tenants ask their landlord the same things again and again: when is trash day, when is rent due, how does the washer work, what does this error mean. Repair reports get lost in the same chat threads, so nothing is tracked or closed. Nook gives tenants one place to ask and report, and gives landlords one place to answer once and track every ticket.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Ask Nook anything about the home</h2>
              <p>
                Tenants join their unit with the landlord's code, then ask by typing or by voice, and Nook answers out loud too. For an appliance problem, Nook first asks what is happening, then gives the steps from the landlord's own guide and attaches that guide so the tenant can open it.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">A ticket only when the tenant says yes</h2>
              <p>
                If the steps don't fix it, Nook offers to report it to the landlord and files the ticket only when the tenant agrees. Ask "any update?" and Nook repeats the landlord's newest note word for word. Tenants can also file a ticket themselves, with a photo.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">One board for the landlord</h2>
              <p>
                Landlords upload guides and house info once — appliance manuals, trash and rent schedule, Wi-Fi, house rules — and Nook answers from them. They choose which details tenants may get and which stay private, and see every ticket on one board with what the tenant said and what Nook already suggested.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Answers only from the landlord's documents</h2>
              <p>
                If something isn't in the landlord's documents, Nook says so instead of guessing. Private codes are never shared, even if a tenant insists, and for emergencies like gas, flood or smoke, Nook tells the tenant to get safe and call 911.
              </p>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Under the hood</h2>
              <p>
                Built in 24 hours for the AppBuildersPH Hackathon (Oct 9–10, 2026). The AI model (Qwen2.5-VL 7B through Ollama) runs on the landlord's own laptop. A Spring Boot server (Java 21, PostgreSQL) serves a React + Vite + TypeScript web dashboard for the landlord and a Flutter app for tenants, with Supabase Storage for files and ElevenLabs for the voice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal8;
