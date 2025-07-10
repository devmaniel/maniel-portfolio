
import bb_cover from "../assets/brokencodebounty/brokencountbounty.png";

// @ts-ignore
import { Badge } from "@/components/ui/badge";

import { BiLogoYoutube } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";

import Sample1 from "../assets/brokencodebounty/Sample 1.png";
import Sample2 from "../assets/brokencodebounty/Sample 2.png";
import Sample3 from "../assets/brokencodebounty/Sample 4.png";
import Sample4 from "../assets/brokencodebounty/Sample 5.png";

type ProjectModalProps = {
  onClose: () => void;
};

const ProjectModal2 = ({ onClose }: ProjectModalProps) => {
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
          <div className="w-[300px] h-[500px]  md:w-[700px] md:h-[750px] lg:w-[1100px] lg:h-[900px] overflow-hidden overflow-y-auto mt-5 bg-white p-5 flex flex-col gap-5 rounded-lg">
            <p
              className="text-md text-[#FF474C] cursor-pointer hover:underline"
              onClick={onClose}
            >
              Close
            </p>

            <img
              src={bb_cover}
              alt={"bb_cover"}
              className="h-[300px] w-full object-fit border-2 border-black rounded-lg aspect-3/2"
            />

            <h1 className="text-xl  md:text-2xl lg:text-4xl font-bold">
              Project Name: BrokenCode.Bounty
            </h1>

            <div className="flex flex-col lg:flex-row  gap-2">
              <Badge className="bg-blue-500 text-white cursor-pointer" asChild>
                <a
                  href="https://brokencodebounty.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  https://brokencodebounty.netlify.app/
                </a>
              </Badge>

              <Badge className="bg-red-500 text-white cursor-pointer" asChild>
                <a
                  href="https://youtu.be/3evlsVut5Nc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoYoutube />
                  Verified
                </a>
              </Badge>
            </div>

            <hr />

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Inspiration</h2>
                <p>
                  We drew inspiration from the chaotic brilliance of Stack
                  Overflow, the high-stakes utility of bug bounties, the humor
                  of r/ProgrammerHumor, and the freelance spirit of Upwork. We
                  wanted to create a space where “bad code” isn’t just a
                  frustration—it’s a challenge, a punchline, and most
                  importantly, an opportunity.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Inspiration</h2>
                <p>
                  BrokenCode.Bounty is a gamified platform where developers post
                  hilariously terrible or hopelessly broken code, and others
                  take on the challenge of fixing it for bounties. It’s a
                  chaotic mix of fun, competition, and community-driven
                  skill-building—where debugging earns both reputation and
                  rewards.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">How we built it</h2>
                <p>
                  Balancing humor with functionality - ensuring meme code
                  submissions remained genuinely fixable. Implementing fair
                  bounty distribution algorithms and preventing spam
                  submissions. Creating a reputation system that rewards both
                  entertaining broken code and quality fixes.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">
                  What's next for BrokenCode.Bounty
                </h2>
                <p>
                  AI-powered code analysis for automatic chaos scoring
                  Integration with GitHub for direct repository bounties
                  Corporate partnerships for enterprise-level code review
                  bounties Mobile app development for on-the-go code hunting
                  NFT-style badges for legendary fixes
                </p>
              </div>

              <img
                src={Sample1}
                alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
                className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
              />

              <img
                src={Sample2}
                alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
                className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
              />

              <img
                src={Sample3}
                alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
                className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
              />

              <img
                src={Sample4}
                alt={"84222c70-6f0a-4806-8304-dec904692389-1.png"}
                className="h-[300px] lg:h-[550px] w-full object-fill shadow-xl rounded-lg aspect-3/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal2;
