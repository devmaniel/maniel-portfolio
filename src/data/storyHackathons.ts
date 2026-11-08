// Every hackathon entered, newest year first. Shown as "The record" table on the story page.

export type HackathonResult =
  | { kind: "win"; label: "Won" }
  | { kind: "top"; label: string }
  | { kind: "live"; label: "Judging" }
  | { kind: "wait"; label: "Submitted" | "Pending" };

export type Hackathon = {
  event: string;
  where: string;
  registered: string;
  result: HackathonResult;
};

export type HackathonYear = {
  year: number;
  events: Hackathon[];
};

const SUBMITTED: HackathonResult = { kind: "wait", label: "Submitted" };

export const HACKATHON_YEARS: HackathonYear[] = [
  {
    year: 2026,
    events: [
      { event: "NASA Space Apps Challenge 2026", where: "Local event", registered: "Not yet published", result: { kind: "live", label: "Judging" } },
      { event: "Shipaton Manila 2026 · Mini Hackathon", where: "Pasig", registered: "88", result: { kind: "win", label: "Won" } },
      { event: "eGovPH Hackathon 2026 · DICT", where: "Taguig", registered: "1,500+ · 137 teams", result: { kind: "top", label: "Top 10" } },
      { event: "AppBuildersPH Hackathon 2026", where: "Philippines", registered: "1,270", result: SUBMITTED },
      { event: "Build, Ship, Shape · Amazon Developer Hackathon", where: "Online", registered: "35,466", result: { kind: "wait", label: "Pending" } },
    ],
  },
  {
    year: 2025,
    events: [
      { event: "NASA Space Apps Challenge 2025", where: "Local event", registered: "114,094", result: SUBMITTED },
      { event: "World's Largest Hackathon · Bolt", where: "Online", registered: "129,554", result: SUBMITTED },
      { event: "RevenueCat Shipaton 2025", where: "Online", registered: "53,591", result: SUBMITTED },
      { event: "OpenAI Open Model Hackathon", where: "Online", registered: "8,633", result: SUBMITTED },
      { event: "GKE Turns 10 Hackathon", where: "Online", registered: "4,707", result: SUBMITTED },
      { event: "AWS Lambda Hackathon", where: "Online", registered: "3,713", result: SUBMITTED },
      { event: "AI Accelerate · Google Cloud", where: "Online", registered: "2,730", result: SUBMITTED },
      { event: "Build With AI: Basics", where: "Online", registered: "5,096", result: SUBMITTED },
      { event: "InnOlympics 2025 · GDSC PLM Hackathon", where: "Makati", registered: "122", result: SUBMITTED },
    ],
  },
  {
    year: 2024,
    events: [
      { event: "FlutterFlow HackFest · Impact Challenge", where: "Taguig · Makati", registered: "14 teams", result: SUBMITTED },
    ],
  },
];
