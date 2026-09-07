import { Badge } from "./ui/badge";
import { FaGlobe } from "react-icons/fa";
import {
  SiNestjs,
  SiNextdotjs,
  SiFlutter,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiTypeorm,
  SiDocker,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import ehelp_logo from "../assets/ehelp/ehelp-logo.png";

type ProjectModalProps = {
  onClose: () => void;
};

const ProjectModal7 = ({ onClose }: ProjectModalProps) => {
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
            <div
              className="w-full border-2 border-black rounded-lg aspect-2/1 flex items-center justify-center p-10"
              style={{ backgroundColor: "#0B1220" }}
            >
              <img
                src={ehelp_logo}
                alt="EHELP — one place to find, apply for, and track government financial aid"
                className="max-h-full max-w-[70%] object-contain"
              />
            </div>
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Web &amp; Mobile Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: EHELP
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-blue-500 text-white cursor-pointer" asChild>
              <a
                href="https://egov-app-ground.vercel.app/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                egov-app-ground.vercel.app
              </a>
            </Badge>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold text-gray-500">Built with:</span>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiNestjs className="text-[#E0234E]" />
              <span className="text-xs font-medium">NestJS</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiNextdotjs />
              <span className="text-xs font-medium">Next.js</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <RiReactjsLine className="text-[#61DAFB]" />
              <span className="text-xs font-medium">React</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiTypescript className="text-[#3178C6]" />
              <span className="text-xs font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiFlutter className="text-[#02569B]" />
              <span className="text-xs font-medium">Flutter · Riverpod</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiPostgresql className="text-[#336791]" />
              <span className="text-xs font-medium">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiTypeorm className="text-[#FE0803]" />
              <span className="text-xs font-medium">TypeORM</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiTailwindcss className="text-[#06B6D4]" />
              <span className="text-xs font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1">
              <SiDocker className="text-[#2496ED]" />
              <span className="text-xs font-medium">Docker</span>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Getting help shouldn't cost a day's pay</h2>
              <p>
                Government financial aid in the Philippines is spread across more than a dozen agencies, each with its own form, its own office, and its own queue. People who need help the most are the ones who lose a day of income to line up, get sent home for a missing paper, and come back to line up again. EHELP puts that whole journey — finding the right program, applying, and knowing where your application stands — into one app on your phone.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Apply from your phone, not from a queue</h2>
              <p>
                Citizens browse the programs they actually qualify for, fill out the form once, and submit it without going anywhere. No printed forms, no second trip because a requirement was missing — the app asks for what's needed up front.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">You can see where your application is</h2>
              <p>
                Every application shows its real status as it moves from review to decision. Instead of weeks of silence and rumors, applicants know whether they're still being evaluated, approved, or need to fix something.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">A booked slot instead of a 4AM line</h2>
              <p>
                Once approved, the applicant books a claim schedule and gets a QR code for the day. At the office, staff scan the code and confirm the person's face on the spot — so the payout goes to the right person, and the crowd turns into appointments.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Each agency runs its own rules</h2>
              <p>
                Every agency works differently, so nothing is hardcoded to one process. Administrators build their own program with its own steps, eligibility, and schedule windows — which means onboarding the next agency is a configuration job, not a rebuild.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Built so public money is traceable</h2>
              <p>
                Audits have flagged hundreds of millions of pesos paid twice or paid to the wrong people. In EHELP the person who reviews a case cannot be the same person who approves it, identity is verified by face check at both application and claim, and every action is recorded. The control happens before the money moves, not in an audit months later.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Ask instead of guess</h2>
              <p>
                An in-app assistant answers the questions people would otherwise queue to ask — what programs exist, what's happening with their case, when the next claim slots open. It guides; the decisions stay with the agency's own officers.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Somewhere to complain, on record</h2>
              <p>
                If something goes wrong, citizens file a report from the app and get a case number they can follow, and the agency sees the complaint in one ledger instead of scattered across counters and phone calls.
              </p>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Under the hood</h2>
              <p>
                One NestJS core API (TypeScript, TypeORM, PostgreSQL) serves both channels: a Next.js 16 / React 19 web console for agency staff and administrators, and a Flutter app with Riverpod for citizens. Sessions are JWTs issued by the core, gated behind SSO exchange, national-ID verification, and face liveness, with role-based access and separation of duties enforced server-side. Local development runs on Docker Compose with Postgres; the demo environment runs the API and managed Postgres on Render with the web console on Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal7;
