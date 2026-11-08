// Certificates shown as pills on the story page. Each one links to its proof.
import nasaCertificate from "../assets/certificates/nasa-space-apps-challenge.png";
import awsLogo from "../assets/story/certs/aws.svg";
import flutterflowLogo from "../assets/story/certs/flutterflow.svg";
import gdscLogo from "../assets/story/certs/gdsc.svg";
import googleLogo from "../assets/story/certs/google.svg";
import ibmLogo from "../assets/story/certs/ibm.svg";
import nasaLogo from "../assets/story/certs/nasa-space-apps.jpg";

export type CertificateLogo = {
  src: string;
  width: number;
  height: number;
  // "wide" logos get side padding, "square" ones sit flush, "photo" fills the whole tile
  shape: "wide" | "square" | "photo";
};

export type StoryCertificate = {
  name: string;
  href: string;
  logo: CertificateLogo;
};

const AWS: CertificateLogo = { src: awsLogo, width: 42, height: 13, shape: "wide" };
const IBM: CertificateLogo = { src: ibmLogo, width: 31, height: 12, shape: "wide" };

export const STORY_CERTIFICATES: StoryCertificate[] = [
  {
    name: "NASA Space Apps Challenge 2025",
    href: nasaCertificate,
    logo: { src: nasaLogo, width: 38, height: 38, shape: "photo" },
  },
  {
    name: "Amazon Junior Software Developer",
    href: "https://coursera.org/share/01178ce3db2c9ec64c4457828e91a3a2",
    logo: AWS,
  },
  {
    name: "AWS Cloud Technical Essentials",
    href: "https://www.coursera.org/account/accomplishments/records/YMMPWZEM9AXC",
    logo: AWS,
  },
  {
    name: "Google UX Design Professional Certificate",
    href: "https://www.credly.com/badges/3a5c5516-9b49-41ee-b1e8-32fb2e8de150/linked_in_profile",
    logo: { src: googleLogo, width: 20, height: 20, shape: "square" },
  },
  {
    name: "Git and GitHub Essentials",
    href: "https://www.credly.com/badges/4a8f384f-e3a9-49ec-a37a-bf864cd7d527/linked_in_profile",
    logo: IBM,
  },
  {
    name: "Introduction to DevOps",
    href: "https://www.coursera.org/account/accomplishments/verify/MJHYLQ1PLOA0",
    logo: IBM,
  },
  {
    name: "InnOlympics: GDSC PLM Hackathon 2025",
    href: "https://www.linkedin.com/in/melco-maniel/details/certifications/1741044781658/single-media-viewer/?profileId=ACoAAFCUA3IBV0tT_SeoOtnmN0wsZyE3WGCMJm0",
    logo: { src: gdscLogo, width: 30, height: 15, shape: "wide" },
  },
  {
    name: "FlutterFlow PH HackFest 2024",
    href: "https://www.linkedin.com/in/melco-maniel/details/certifications/1734669641858/single-media-viewer/?profileId=ACoAAFCUA3IBV0tT_SeoOtnmN0wsZyE3WGCMJm0",
    logo: { src: flutterflowLogo, width: 20, height: 20, shape: "square" },
  },
];
