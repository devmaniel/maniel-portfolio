import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import "./styles/grid-setup-desktop.css";
import "./styles/grid-setup-tablet.css";
import "./styles/grid-setup-mobile.css";

// components and modals
import Div1 from "./components/Div1";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";
import Div4 from "./components/Div4";
import DivProjects from "./components/DivProjects";
import DivCertificates from "./components/DivCertificates";
import Div16 from "./components/Div16";
import ProjectModal1 from "./components/ProjectModal1";
import ProjectModal2 from "./components/ProjectModal2";
import ProjectModal3 from "./components/ProjectModal3";
import LoadingPage from "./components/Loading/LoadingPage";

// assets
import samplebg from "./assets/samplebg.png";
import modokardpreview from "./assets/modokard-preview.png";
import bbpreview from "./assets/brokencodebounty/bb_preview.png";
import ibm_svg from "./assets/certificates icon/ibm-logo-svgrepo-com.svg";
import aws_svg from "./assets/certificates icon/amazon-2-logo-svgrepo-com.svg";
import google_svg from "./assets/certificates icon/google-2015-logo-svgrepo-com.svg";
import gdg_svg from "./assets/certificates icon/google-developers-svgrepo-com.svg";
import ff_svg from "./assets/certificates icon/ffdg_color.svg";

import modokard_cover from "./assets/modokard-cover.png";

import modokard_slide_1 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-1.png";
import modokard_slide_2 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-2.png";
import modokard_slide_3 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-3.png";
import modokard_slide_4 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-4.png";
import modokard_slide_5 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-5.png";
import modokard_slide_6 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-6.png";
import modokard_slide_7 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-7.png";
import modokard_slide_8 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-8.png";

import bb_cover from "./assets/brokencodebounty/brokencountbounty.png";

import Sample1 from "./assets/brokencodebounty/Sample 1.png";
import Sample2 from "./assets/brokencodebounty/Sample 2.png";
import Sample3 from "./assets/brokencodebounty/Sample 4.png";
import Sample4 from "./assets/brokencodebounty/Sample 5.png";

const projects = [
  { image: modokardpreview, title: "Modokard" },
  { image: bbpreview, title: "BrokenCode.Bounty" },
];

const certificates = [
  {
    certificate_img: aws_svg,
    certificate_name: "Amazon Junior Software Developer",
    certificate_link: "dummy",
  },
  {
    certificate_img: ibm_svg,
    certificate_name: "Git and Github Essentials",
    certificate_link: "dummy",
  },
  {
    certificate_img: aws_svg,
    certificate_name: "AWS Cloud Technical Essentials",
    certificate_link: "dummy",
  },
  {
    certificate_img: google_svg,
    certificate_name: "Google UX Design Professional Certificate (v2)",
    certificate_link: "dummy",
  },
  {
    certificate_img: ibm_svg,
    certificate_name: "Introduction to DevOps",
    certificate_link: "dummy",
  },
  {
    certificate_img: ibm_svg,
    certificate_name: "Introduction to Software Engineering",
    certificate_link: "dummy",
  },
  {
    certificate_img: gdg_svg,
    certificate_name: "InnOlympics: GDSC PLM Hackathon 2025",
    certificate_link: "dummy",
  },
  {
    certificate_img: ff_svg,
    certificate_name: "FlutterFlow PH HackFest 2024",
    certificate_link: "dummy",
  },
];

const modalComponents = {
  1: ProjectModal1,
  2: ProjectModal2,
  3: ProjectModal3,
};

function App() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  // preload all images
  useEffect(() => {
    const allImages = [
      samplebg,
      modokardpreview,
      bbpreview,
      modokard_cover,
      bb_cover,
      Sample1,
      Sample2,
      Sample3,
      Sample4,
      modokard_slide_1,
      modokard_slide_2,
      modokard_slide_3,
      modokard_slide_4,
      modokard_slide_5,
      modokard_slide_6,
      modokard_slide_7,
      modokard_slide_8,
      ...certificates.map((c) => c.certificate_img),
    ];

    let loadedCount = 0;

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === allImages.length) {
          setIsLoaded(true);
        }
      };
    });

    // Show loading for at least 5 seconds
    const delay = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const openModal = (modalId: number) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const shouldShowLoading = !isLoaded || showLoading;

  return (
    <>
      {/* AnimatePresence handles exit animation */}
      <AnimatePresence mode="wait">
        {shouldShowLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1, ease: "easeOut" },
              filter: { duration: 1, ease: "easeOut" },
            }}
            className="fixed inset-0 z-[999] bg-white"
          >
            <LoadingPage />
          </motion.div>
        )}
      </AnimatePresence>

      {!shouldShowLoading && (
        <main>
          <div className="grid-container">
            <Div1 />
            <Div2 />
            <Div3 />
            <Div4 />

            <div className="blue-row">
              {projects.map((project, idx) => (
                <div className={`item glass item${5 + idx}`} key={idx}>
                  <DivProjects
                    project_image={project.image}
                    project_title={project.title}
                    project_id={idx + 1}
                    openModal={openModal}
                  />
                </div>
              ))}
            </div>

            {certificates.slice(0, 8).map((cert, idx) => (
              <div
                className={`item glass cursor-pointer item${8 + idx}`}
                key={idx}
                onClick={() => window.open(cert.certificate_link, "_blank")}
              >
                <DivCertificates
                  certificate_img={cert.certificate_img}
                  certificate_name={cert.certificate_name}
                />
              </div>
            ))}

            <div className="item item16 overflow-hidden relative ">
              <Div16 />
            </div>
          </div>

          {activeModal &&
            (() => {
              const ModalComponent =
                modalComponents[activeModal as keyof typeof modalComponents];
              return ModalComponent ? (
                <ModalComponent onClose={closeModal} />
              ) : null;
            })()}
        </main>
      )}
    </>
  );
}

export default App;
