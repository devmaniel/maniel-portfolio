// Projects on the story page: the grid card, and the full story shown in the popup.
import bbCard from "../assets/brokencodebounty/bb_preview.png";
import bbCover from "../assets/brokencodebounty/brokencountbounty.png";
import bbShot1 from "../assets/brokencodebounty/bb-shot-1.jpg";
import bbShot2 from "../assets/brokencodebounty/bb-shot-2.jpg";
import bbShot3 from "../assets/brokencodebounty/bb-shot-3.jpg";
import bbShot4 from "../assets/brokencodebounty/bb-shot-4.jpg";
import chapCover from "../assets/chap/chap-cover.jpg";
import ehelpLogo from "../assets/ehelp/ehelp-logo.png";
import financeCard from "../assets/finance-tracker-web/finance-card.jpg";
import financeCover from "../assets/finance-tracker-web/finance-cover.jpg";
import florvilleCover from "../assets/florville/florville.png";
import florvilleCard from "../assets/florville/florville-small.png";
import modokardCover from "../assets/modokard-cover.png";
import modokardCard from "../assets/modokard-preview.png";
import modokardShot1 from "../assets/modokard/modokard-shot-1.jpg";
import modokardShot2 from "../assets/modokard/modokard-shot-2.jpg";
import modokardShot3 from "../assets/modokard/modokard-shot-3.jpg";
import modokardShot4 from "../assets/modokard/modokard-shot-4.jpg";
import modokardShot5 from "../assets/modokard/modokard-shot-5.jpg";
import modokardShot6 from "../assets/modokard/modokard-shot-6.jpg";
import modokardShot7 from "../assets/modokard/modokard-shot-7.jpg";
import modokardShot8 from "../assets/modokard/modokard-shot-8.jpg";
import nookCover from "../assets/nook/nook-cover.jpg";
import omoideCover from "../assets/omoide/omoide-cover.jpg";
import galaCard from "../assets/travel-app/gala-card.jpg";
import galaCover from "../assets/travel-app/gala-cover.jpg";
import galaShot1 from "../assets/travel-app/gala-square-1.png";
import galaShot2 from "../assets/travel-app/gala-square-2.png";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  // logo-style images are shown whole on a coloured tile instead of filling the frame
  isFit?: boolean;
  tile?: string;
};

export type ProjectLink = { label: string; href: string };

export type ProjectSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type StoryProject = {
  id: string;
  name: string;
  cardType: string;
  cardLine: string;
  card: ProjectImage;
  cover: ProjectImage;
  // the small line above the popup title, e.g. "Mobile · Built for ..."
  popupType: string;
  lede: string;
  // the first link is the main (dark) button
  links: ProjectLink[];
  stack: string[];
  intro?: string;
  sections: ProjectSection[];
  shots?: { images: ProjectImage[]; isTwoColumn?: boolean };
};

const shots = (sources: string[], width: number, heights: number[]): ProjectImage[] =>
  sources.map((src, index) => ({ src, width, height: heights[index] }));

export const STORY_PROJECTS: StoryProject[] = [
  {
    id: "omoide",
    name: "Omoide",
    cardType: "Mobile",
    cardLine: "A journal you keep by talking.",
    card: { src: omoideCover, width: 1200, height: 800 },
    cover: { src: omoideCover, width: 1200, height: 800 },
    popupType: "Mobile · Built for Build, Ship, Shape: Amazon Developer Hackathon",
    lede: "Say it to Alexa. Read it here.",
    links: [{ label: "Demo video", href: "https://youtu.be/c-2UHB8c_jo" }],
    stack: ["Alexa Skill", "Amazon Cognito", "Spring Boot", "Spring AI · MCP", "Java 21", "PostgreSQL", "Flutter"],
    intro:
      "Most journals die because writing takes effort. Speaking doesn't. Omoide is a journal you keep by talking: an assistant writes your words into your journal, finds them again when you ask, and the same journal is on your phone.",
    sections: [
      { heading: "Say it", paragraphs: ["“Alexa, ask Omoide to write my journal.” Speak freely. Alexa reads it back, asks “Save it?”, and stores your exact words — nothing summarized, nothing rewritten."] },
      { heading: "Ask for it back", paragraphs: ["“Read today's journal,” or have any MCP assistant search your past entries."] },
      { heading: "See it on your phone", paragraphs: ["The same journal lives in the Omoide app: browse by calendar, search, fix a misheard word, or type an entry by hand. Alexa reads typed entries too. One account, one journal, three ways in: voice, AI assistant, and phone."] },
      { heading: "A pen, not an author", paragraphs: ["Made for people who want to remember their days but never keep up a written diary, and for people who think out loud. Your words are kept verbatim and saved only on your “yes”."] },
      { heading: "Under the hood", paragraphs: ["Built Oct 19–24, 2026 for the Build, Ship, Shape: Amazon Developer Hackathon (Alexa+ track). One Spring Boot 4.1 server (Java 21, PostgreSQL 17) serves three ways in: a self-hosted MCP server built with Spring AI, a classic Alexa skill, and a Flutter app for iOS and Android. All three sign in through one Amazon Cognito user pool, so one account is one journal."] },
    ],
  },
  {
    id: "chap",
    name: "Chap",
    cardType: "Mobile",
    cardLine: "AI friends you can text or call.",
    card: { src: chapCover, width: 1200, height: 800 },
    cover: { src: chapCover, width: 1200, height: 800 },
    popupType: "Mobile · Built for Build With AI: Basics",
    lede: "A small, fictional social world.",
    links: [
      { label: "Demo video", href: "https://youtu.be/RTo7CPfReVE" },
      { label: "GitHub", href: "https://github.com/devmaniel/chap" },
    ],
    stack: ["Flutter", "Dart", "Spring Boot", "Java 21", "PostgreSQL", "Docker", "Google Gemini", "ElevenLabs"],
    intro:
      "Chap is a small, fictional social world on your phone. You discover AI characters, each with their own name, personality, interests and voice, and add them as friends.",
    sections: [
      { heading: "Message, share a photo, or call", paragraphs: ["You talk to your friends the way you would with anyone else: send messages, share a photo, or call them by voice. Come back later and the conversation picks up where it left off."] },
      { heading: "Clearly fictional, clearly AI", paragraphs: ["The friends are clearly fictional and clearly AI. There are no points or streaks, just the conversation and the character."] },
      { heading: "Under the hood", paragraphs: ["Built for Build With AI: Basics on Devpost. A Flutter app for iOS and Android talks to a Spring Boot 4 server (Java 21) with PostgreSQL 17 in Docker and Flyway migrations. Friend replies come from Google Gemini, and voice calls run on ElevenLabs Conversational AI."] },
    ],
  },
  {
    id: "nook",
    name: "Nook",
    cardType: "Web & Mobile",
    cardLine: "Ask the house, not the landlord.",
    card: { src: nookCover, width: 1200, height: 800 },
    cover: { src: nookCover, width: 1200, height: 800 },
    popupType: "Web & Mobile · Built for AppBuildersPH Hackathon 2026",
    lede: "The same questions, over and over.",
    links: [
      { label: "Full demo", href: "https://www.youtube.com/watch?v=2q67SkeN_fw" },
      { label: "1-minute demo", href: "https://x.com/manielco/status/2108626704415814077" },
    ],
    stack: ["Ollama · Qwen2.5-VL 7B", "Spring Boot", "Java 21", "PostgreSQL", "React", "Vite", "TypeScript", "Tailwind CSS", "Flutter", "Supabase Storage", "ElevenLabs"],
    intro:
      "Tenants ask their landlord the same things again and again: when is trash day, when is rent due, how does the washer work, what does this error mean. Repair reports get lost in the same chat threads, so nothing is tracked or closed. Nook gives tenants one place to ask and report, and gives landlords one place to answer once and track every ticket.",
    sections: [
      { heading: "Ask Nook anything about the home", paragraphs: ["Tenants join their unit with the landlord's code, then ask by typing or by voice, and Nook answers out loud too. For an appliance problem, Nook first asks what is happening, then gives the steps from the landlord's own guide and attaches that guide so the tenant can open it."] },
      { heading: "A ticket only when the tenant says yes", paragraphs: ["If the steps don't fix it, Nook offers to report it to the landlord and files the ticket only when the tenant agrees. Ask “any update?” and Nook repeats the landlord's newest note word for word. Tenants can also file a ticket themselves, with a photo."] },
      { heading: "One board for the landlord", paragraphs: ["Landlords upload guides and house info once — appliance manuals, trash and rent schedule, Wi-Fi, house rules — and Nook answers from them. They choose which details tenants may get and which stay private, and see every ticket on one board with what the tenant said and what Nook already suggested."] },
      { heading: "Answers only from the landlord's documents", paragraphs: ["If something isn't in the landlord's documents, Nook says so instead of guessing. Private codes are never shared, even if a tenant insists, and for emergencies like gas, flood or smoke, Nook tells the tenant to get safe and call 911."] },
      { heading: "Under the hood", paragraphs: ["Built in 24 hours for the AppBuildersPH Hackathon (Oct 9–10, 2026). The AI model (Qwen2.5-VL 7B through Ollama) runs on the landlord's own laptop. A Spring Boot server (Java 21, PostgreSQL) serves a React + Vite + TypeScript web dashboard for the landlord and a Flutter app for tenants, with Supabase Storage for files and ElevenLabs for the voice."] },
    ],
  },
  {
    id: "gala",
    name: "GALA",
    cardType: "Web",
    cardLine: "Group trips, out of the group chat.",
    card: { src: galaCard, width: 1200, height: 800 },
    cover: { src: galaCover, width: 1600, height: 800 },
    popupType: "Web",
    lede: "Plan the whole trip before you spend a peso.",
    links: [{ label: "Live site", href: "https://gala-phi-ten.vercel.app" }],
    stack: ["Spring Boot", "React", "TypeScript", "Java · JPA", "PostgreSQL", "Tailwind CSS", "MapLibre GL"],
    intro:
      "Group trips fall apart in the group chat. The dates live in one message, the budget in another, the place someone found in a screenshot nobody can scroll back to. GALA holds the whole trip in one place — so everyone is looking at the same plan instead of arguing about what was agreed.",
    sections: [
      { heading: "Day-by-day itinerary", paragraphs: ["Lay the trip out day by day — where you're going, where you're staying, and how you get from one to the next. Everything sits in order, so you can see the shape of the trip at a glance instead of piecing it together from memory."] },
      { heading: "Budget and expenses", paragraphs: ["Every stop carries what it costs, and the trip adds it up as you plan. You know the number before you commit to it — not after you're already there and the money is gone."] },
      { heading: "Trips people share", paragraphs: ["Somebody already figured out the good four days in Palawan. Browse trips other people have posted, and copy one into your own plan to change however you want — your dates, your budget, your pace."] },
      { heading: "Map and directions", paragraphs: ["Every place you add lands on the map, so the plan stops being a list and starts looking like a route. You can see how far apart things really are before the day you have to travel between them."] },
    ],
    shots: { images: shots([galaShot1, galaShot2], 1080, [1080, 1080]), isTwoColumn: true },
  },
  {
    id: "ehelp",
    name: "EHELP",
    cardType: "Web & Mobile",
    cardLine: "Government aid without the 4AM line.",
    card: { src: ehelpLogo, width: 860, height: 293, isFit: true, tile: "#0B1220" },
    cover: { src: ehelpLogo, width: 860, height: 293, isFit: true, tile: "#0B1220" },
    popupType: "Web & Mobile",
    lede: "Getting help shouldn't cost a day's pay.",
    links: [
      { label: "Live site", href: "https://egov-app-ground.vercel.app/signin" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=1HFsW51J-rY&t=1s" },
    ],
    stack: ["NestJS", "Next.js", "React", "TypeScript", "Flutter · Riverpod", "PostgreSQL", "TypeORM", "Tailwind CSS", "Docker"],
    intro:
      "Government financial aid in the Philippines is spread across more than a dozen agencies, each with its own form, its own office, and its own queue. People who need help the most are the ones who lose a day of income to line up, get sent home for a missing paper, and come back to line up again. EHELP puts that whole journey — finding the right program, applying, and knowing where your application stands — into one app on your phone.",
    sections: [
      { heading: "Apply from your phone, not from a queue", paragraphs: ["Citizens browse the programs they actually qualify for, fill out the form once, and submit it without going anywhere. No printed forms, no second trip because a requirement was missing — the app asks for what's needed up front."] },
      { heading: "You can see where your application is", paragraphs: ["Every application shows its real status as it moves from review to decision. Instead of weeks of silence and rumors, applicants know whether they're still being evaluated, approved, or need to fix something."] },
      { heading: "A booked slot instead of a 4AM line", paragraphs: ["Once approved, the applicant books a claim schedule and gets a QR code for the day. At the office, staff scan the code and confirm the person's face on the spot — so the payout goes to the right person, and the crowd turns into appointments."] },
      { heading: "Each agency runs its own rules", paragraphs: ["Every agency works differently, so nothing is hardcoded to one process. Administrators build their own program with its own steps, eligibility, and schedule windows — which means onboarding the next agency is a configuration job, not a rebuild."] },
      { heading: "Built so public money is traceable", paragraphs: ["Audits have flagged hundreds of millions of pesos paid twice or paid to the wrong people. In EHELP the person who reviews a case cannot be the same person who approves it, identity is verified by face check at both application and claim, and every action is recorded. The control happens before the money moves, not in an audit months later."] },
      { heading: "Ask instead of guess", paragraphs: ["An in-app assistant answers the questions people would otherwise queue to ask — what programs exist, what's happening with their case, when the next claim slots open. It guides; the decisions stay with the agency's own officers."] },
      { heading: "Somewhere to complain, on record", paragraphs: ["If something goes wrong, citizens file a report from the app and get a case number they can follow, and the agency sees the complaint in one ledger instead of scattered across counters and phone calls."] },
      { heading: "Under the hood", paragraphs: ["One NestJS core API (TypeScript, TypeORM, PostgreSQL) serves both channels: a Next.js 16 / React 19 web console for agency staff and administrators, and a Flutter app with Riverpod for citizens. Sessions are JWTs issued by the core, gated behind SSO exchange, national-ID verification, and face liveness, with role-based access and separation of duties enforced server-side. Local development runs on Docker Compose with Postgres; the demo environment runs the API and managed Postgres on Render with the web console on Vercel."] },
    ],
  },
  {
    id: "finance",
    name: "Finance Tracker Web",
    cardType: "Web",
    cardLine: "Every account in one dashboard.",
    card: { src: financeCard, width: 537, height: 461 },
    cover: { src: financeCover, width: 1257, height: 461 },
    popupType: "Web",
    lede: "Every account in one dashboard.",
    links: [{ label: "Live site", href: "https://finance-tracker-web-ten.vercel.app" }],
    stack: ["Spring Boot", "React", "TypeScript", "Java · JPA", "PostgreSQL", "Gemini AI"],
    sections: [
      { heading: "The problem it solves", paragraphs: ["Most people have money spread across multiple accounts — bank accounts, e-wallets, credit cards, savings. Keeping track of where your money goes is tedious. Finance Tracker Web brings everything into a single dashboard so you always know your full financial picture."] },
      { heading: "See everything at a glance", paragraphs: ["Your portfolio dashboard shows the total balance across all your accounts in real time. Switch between currencies, view daily balance trends over the past 7 days, and see exactly where your money is going with category breakdowns."] },
      { heading: "Manage multiple accounts", paragraphs: ["Create as many accounts as you need — checking, savings, credit, investment, e-wallet, or cash. Set your own currency, opening balance, and a custom icon or color to keep things organized."] },
      { heading: "Track every transaction", paragraphs: ["Log income, expenses, and transfers between accounts. Multi-currency transfers are fully supported with exchange rate and fee tracking. Made a mistake? You can void and restore any transaction with a reason attached."] },
      { heading: "Never miss a recurring payment", paragraphs: ["Set up recurring rules for bills, subscriptions, or regular income. Choose how often they repeat, when they start and end, and the app handles the rest — automatically posting transactions in the background so your records stay accurate even if you forget."] },
      { heading: "AI-powered spending insights", paragraphs: ["Every week, an AI-generated summary breaks down your spending patterns — what's driving your expenses, the health of your finances, and a suggested action to improve. It's honest, personalized, and updates automatically as your data changes."] },
      { heading: "Supported currencies", paragraphs: ["USD · EUR · PHP · JPY · GBP · SGD · AUD · CAD"] },
    ],
  },
  {
    id: "florville",
    name: "Flòrville",
    cardType: "Web",
    cardLine: "Tracks when plants bloom, with AI.",
    card: { src: florvilleCard, width: 400, height: 309, isFit: true, tile: "#ffffff" },
    cover: { src: florvilleCover, width: 1584, height: 396, tile: "#ffffff" },
    popupType: "Web",
    lede: "Tracks when plants bloom, with AI.",
    links: [
      { label: "Live site", href: "https://florville.vercel.app/" },
      { label: "Slide deck", href: "https://www.canva.com/design/DAG07tm29L4/xbJKxmMfafmMSmP8uvoihw/edit" },
    ],
    stack: ["React", "TypeScript", "Vite", "Google Gemini"],
    sections: [
      { heading: "About Flòrville", paragraphs: ["Florville is an AI-powered web application revolutionizing how we monitor and understand plant flowering patterns. By integrating real-time citizen science data from iNaturalist with botanical knowledge from Wikipedia and GBIF, and enhancing it with Google Gemini AI, Florville delivers species-level precision in bloom tracking—something satellites alone cannot achieve."] },
      { heading: "The challenge", paragraphs: ["Our platform tackles the urgent need for accurate, ground-truthed phenology data by aggregating millions of plant observations, validating them, and using AI to fill gaps and generate actionable insights. This data is essential for early detection of invasive species, pollinator conservation, climate change research, and agricultural planning."] },
      { heading: "Our solution", paragraphs: ["Florville empowers researchers, conservationists, and nature enthusiasts by transforming complex ecological data into accessible, meaningful intelligence. Whether you're studying seasonal shifts, tracking rare blooms, or planning pollinator-friendly landscapes, Florville offers clarity and depth."] },
      { heading: "Technology & impact", paragraphs: ["Built with modern technologies like React, TypeScript, and Vite, the app is fast, modular, and designed for scalability. It's not just a tool—it's a bridge between grassroots observation and global ecological understanding. By grounding AI in real-world data, Florville helps protect biodiversity and supports informed decision-making in a rapidly changing world. It's phenology reimagined for the age of intelligence."] },
    ],
  },
  {
    id: "modokard",
    name: "Modokard",
    cardType: "Web",
    cardLine: "Flashcards with a Pomodoro timer.",
    card: { src: modokardCard, width: 400, height: 400, isFit: true, tile: "#000000" },
    cover: { src: modokardCover, width: 1584, height: 396, tile: "#000000" },
    popupType: "Web",
    lede: "Flashcards with a Pomodoro timer.",
    links: [],
    stack: [],
    intro:
      "Introducing Modokard an easy-to-use web application designed to help learners improve faster. The platform combines flashcards for quick, repetitive learning with Pomodoro timers to help users manage their study time effectively.",
    sections: [
      { paragraphs: ["The interface is engaging and encourages community interaction, where users can discuss and share ideas about different flashcard collections. The app also includes helpful tracking features like heatmaps, pie charts, and line charts to show users their progress. This makes learning more enjoyable and helps users stay motivated and on track, whether they're studying alone or with others."] },
    ],
    shots: {
      images: shots(
        [modokardShot1, modokardShot2, modokardShot3, modokardShot4, modokardShot5, modokardShot6, modokardShot7, modokardShot8],
        1600,
        [900, 900, 900, 900, 900, 900, 900, 900],
      ),
    },
  },
  {
    id: "bb",
    name: "BrokenCode.Bounty",
    cardType: "Web",
    cardLine: "Post broken code. Fix it for a bounty.",
    card: { src: bbCard, width: 400, height: 309, isFit: true, tile: "#ffffff" },
    cover: { src: bbCover, width: 1584, height: 396, tile: "#ffffff" },
    popupType: "Web",
    lede: "Post broken code. Fix it for a bounty.",
    links: [
      { label: "Live site", href: "https://brokencodebounty.netlify.app/" },
      { label: "Video", href: "https://youtu.be/3evlsVut5Nc" },
    ],
    stack: [],
    sections: [
      { heading: "Inspiration", paragraphs: ["We drew inspiration from the chaotic brilliance of Stack Overflow, the high-stakes utility of bug bounties, the humor of r/ProgrammerHumor, and the freelance spirit of Upwork. We wanted to create a space where “bad code” isn’t just a frustration—it’s a challenge, a punchline, and most importantly, an opportunity."] },
      { heading: "What it does", paragraphs: ["BrokenCode.Bounty is a gamified platform where developers post hilariously terrible or hopelessly broken code, and others take on the challenge of fixing it for bounties. It’s a chaotic mix of fun, competition, and community-driven skill-building—where debugging earns both reputation and rewards."] },
      { heading: "How we built it", paragraphs: ["Balancing humor with functionality - ensuring meme code submissions remained genuinely fixable. Implementing fair bounty distribution algorithms and preventing spam submissions. Creating a reputation system that rewards both entertaining broken code and quality fixes."] },
      {
        heading: "What's next for BrokenCode.Bounty",
        list: [
          "AI-powered code analysis for automatic chaos scoring",
          "Integration with GitHub for direct repository bounties",
          "Corporate partnerships for enterprise-level code review bounties",
          "Mobile app development for on-the-go code hunting",
          "NFT-style badges for legendary fixes",
        ],
      },
    ],
    shots: { images: shots([bbShot1, bbShot2, bbShot3, bbShot4], 1440, [844, 831, 831, 831]) },
  },
];
