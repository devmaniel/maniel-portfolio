import ibm_svg from "../assets/certificates icon/ibm-logo-svgrepo-com.svg";
import aws_svg from "../assets/certificates icon/amazon-2-logo-svgrepo-com.svg";
import google_svg from "../assets/certificates icon/google-2015-logo-svgrepo-com.svg";
import gdg_svg from "../assets/certificates icon/google-developers-svgrepo-com.svg";
import ff_svg from "../assets/certificates icon/ffdg_color.svg";
import nasa_logo from "../assets/certificates/nasa-space-apps-challege-card-logo.png";
import nasa_cert from "../assets/certificates/nasa-space-apps-challenge.png";

export type Certificate = {
  image: string;
  name: string;
  link: string;
  isFull?: boolean;
};

export const CERTIFICATES: Certificate[] = [
  {
    image: nasa_logo,
    name: "NASA Space Apps Challenge 2025",
    link: nasa_cert,
    isFull: true,
  },
  {
    image: aws_svg,
    name: "Amazon Junior Software Developer",
    link: "https://coursera.org/share/01178ce3db2c9ec64c4457828e91a3a2",
  },
  {
    image: ibm_svg,
    name: "Git and Github Essentials",
    link: "https://www.credly.com/badges/4a8f384f-e3a9-49ec-a37a-bf864cd7d527/linked_in_profile",
  },
  {
    image: aws_svg,
    name: "AWS Cloud Technical Essentials",
    link: "https://www.coursera.org/account/accomplishments/records/YMMPWZEM9AXC",
  },
  {
    image: google_svg,
    name: "Google UX Design Professional Certificate (v2)",
    link: "https://www.credly.com/badges/3a5c5516-9b49-41ee-b1e8-32fb2e8de150/linked_in_profile",
  },
  {
    image: ibm_svg,
    name: "Introduction to DevOps",
    link: "https://www.coursera.org/account/accomplishments/verify/MJHYLQ1PLOA0",
  },
  {
    image: gdg_svg,
    name: "InnOlympics: GDSC PLM Hackathon 2025",
    link: "https://www.linkedin.com/in/melco-maniel/details/certifications/1741044781658/single-media-viewer/?profileId=ACoAAFCUA3IBV0tT_SeoOtnmN0wsZyE3WGCMJm0",
  },
  {
    image: ff_svg,
    name: "FlutterFlow PH HackFest 2024",
    link: "https://www.linkedin.com/in/melco-maniel/details/certifications/1734669641858/single-media-viewer/?profileId=ACoAAFCUA3IBV0tT_SeoOtnmN0wsZyE3WGCMJm0",
  },
];
