import { useState } from "react";
import { Badge } from "./ui/badge";
import { FaGlobe } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiGooglegemini } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import ft_cover from "../assets/finance-tracker-web/finance.png";
import gif1 from "../assets/finance-tracker-web/finance-vid-1.gif";
import gif2 from "../assets/finance-tracker-web/finance-vid-2.gif";
import gif3 from "../assets/finance-tracker-web/finance-vid-3.gif";
import gif4 from "../assets/finance-tracker-web/finance-vid-4.gif";
import gif5 from "../assets/finance-tracker-web/finance-vid-5.gif";
import gif6 from "../assets/finance-tracker-web/finance-vid-6.gif";

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6];

type ProjectModalProps = {
  onClose: () => void;
};

const GifWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {!loaded && (
        <div className="h-[300px] lg:h-[550px] w-full rounded-lg bg-gray-200 animate-pulse" />
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

const ProjectModal5 = ({ onClose }: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div className="flex justify-center px-5 py-10" onClick={(e) => e.stopPropagation()}>
        <div className="w-[300px] md:w-[700px] lg:w-[1100px] bg-white p-5 flex flex-col gap-5 rounded-lg">
          <p
            className="text-md text-[#FF474C] cursor-pointer hover:underline"
            onClick={onClose}
          >
            Close
          </p>

          <div className="relative">
            <img
              src={ft_cover}
              alt="Finance Tracker Web"
              className="h-[300px] w-full object-fill border-2 border-black rounded-lg aspect-3/2"
            />
            <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Web Project
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Project Name: Finance Tracker Web
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            <Badge className="bg-blue-500 text-white cursor-pointer" asChild>
              <a
                href="https://finance-tracker-web-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                finance-tracker-web-ten.vercel.app
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
              <SiGooglegemini className="text-[#8E75B2]" />
              <span className="text-xs font-medium">Gemini AI</span>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">The Problem It Solves</h2>
              <p>
                Most people have money spread across multiple accounts — bank accounts, e-wallets, credit cards, savings. Keeping track of where your money goes is tedious. Finance Tracker Web brings everything into a single dashboard so you always know your full financial picture.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">See Everything at a Glance</h2>
              <p>
                Your portfolio dashboard shows the total balance across all your accounts in real time. Switch between currencies, view daily balance trends over the past 7 days, and see exactly where your money is going with category breakdowns.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Manage Multiple Accounts</h2>
              <p>
                Create as many accounts as you need — checking, savings, credit, investment, e-wallet, or cash. Set your own currency, opening balance, and a custom icon or color to keep things organized.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Track Every Transaction</h2>
              <p>
                Log income, expenses, and transfers between accounts. Multi-currency transfers are fully supported with exchange rate and fee tracking. Made a mistake? You can void and restore any transaction with a reason attached.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Never Miss a Recurring Payment</h2>
              <p>
                Set up recurring rules for bills, subscriptions, or regular income. Choose how often they repeat, when they start and end, and the app handles the rest — automatically posting transactions in the background so your records stay accurate even if you forget.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">AI-Powered Spending Insights</h2>
              <p>
                Every week, an AI-generated summary breaks down your spending patterns — what's driving your expenses, the health of your finances, and a suggested action to improve. It's honest, personalized, and updates automatically as your data changes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Supported Currencies</h2>
              <p className="font-mono text-sm tracking-wide">
                USD · EUR · PHP · JPY · GBP · SGD · AUD · CAD
              </p>
            </div>

            <hr />

            <div className="flex flex-col gap-6">
              {gifs.map((gif, idx) => (
                <GifWithSkeleton
                  key={idx}
                  src={gif}
                  alt={`Finance Tracker demo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal5;
