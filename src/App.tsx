import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./App.css"; // resolve naming problem
import "./styles/grid-setup-desktop.css";
import "./styles/grid-setup-tablet.css";
import "./styles/grid-setup-mobile.css";

// components and modals
import DarkVeil from "./components/DarkVeil";
import Div1 from "./components/Div1";
import Div2 from "./components/Div2";
import Div3 from "./components/Div3";
import Div4 from "./components/Div4";
import DivProjects from "./components/DivProjects";
import CertificateCard from "./components/CertificateCard";
import { CERTIFICATES } from "./data/certificates";
import Div16 from "./components/Div16";

import ProjectModal2 from "./components/ProjectModal2";
import ProjectModal1 from "./components/ProjectModal1";
import ProjectModal4 from "./components/ProjectModal4";
import ProjectModal5 from "./components/ProjectModal5";
import ProjectModal6 from "./components/ProjectModal6";
import ProjectModal7 from "./components/ProjectModal7";
import ProjectModal8 from "./components/ProjectModal8";
import ProjectModal9 from "./components/ProjectModal9";
import ProjectModal10 from "./components/ProjectModal10";

import LoadingPage, { DISSOLVE_MS } from "./components/Loading/LoadingPage";

// assets
import samplebg from "./assets/samplebg.png";
import modokardpreview from "./assets/modokard-preview.png";
import bbpreview from "./assets/brokencodebounty/bb_preview.png";
import florville_preview from "./assets/florville/florville-small.png";
import ft_preview from "./assets/finance-tracker-web/finance-smaller-card.png";
import gala_preview from "./assets/travel-app/gala-thumbnail.png";
import ehelp_logo from "./assets/ehelp/ehelp-logo.png";
import omoide_cover from "./assets/omoide/omoide-cover.jpg";
import chap_cover from "./assets/chap/chap-cover.jpg";
import nook_cover from "./assets/nook/nook-cover.jpg";

import modokard_cover from "./assets/modokard-cover.png";
import picture1 from "./assets/photos/picture1.jpg";

import modokard_slide_1 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-1.png";
import modokard_slide_2 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-2.png";
import modokard_slide_3 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-3.png";
import modokard_slide_4 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-4.png";
import modokard_slide_5 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-5.png";
import modokard_slide_6 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-6.png";
import modokard_slide_7 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-7.png";
import modokard_slide_8 from "./assets/modokard/84222c70-6f0a-4806-8304-dec904692389-8.png";
import Starry_Night from "./assets/Starry_Night_Over_the_Rhone.jpg";



import bb_cover from "./assets/brokencodebounty/brokencountbounty.png";

import Sample1 from "./assets/brokencodebounty/Sample 1.png";
import Sample2 from "./assets/brokencodebounty/Sample 2.png";
import Sample3 from "./assets/brokencodebounty/Sample 4.png";
import Sample4 from "./assets/brokencodebounty/Sample 5.png";

// newest first; id links a card to its entry in modalComponents
const projects = [
  { id: 9, image: omoide_cover, title: "Omoide", label: "Mobile Project" },
  { id: 8, image: chap_cover, title: "Chap", label: "Mobile Project" },
  { id: 7, image: nook_cover, title: "Nook", label: "Web & Mobile Project" },
  { id: 1, image: gala_preview, title: "GALA" },
  {
    id: 2,
    image: ehelp_logo,
    title: "EHELP",
    imageBg: "#0B1220",
    label: "Web & Mobile Project",
  },
  { id: 3, image: ft_preview, title: "Finance Tracker Web" },
  { id: 4, image: florville_preview, title: "Flòrville" },
  { id: 5, image: modokardpreview, title: "Modokard" },
  { id: 6, image: bbpreview, title: "BrokenCode.Bounty" },
];

const modalComponents = {
  1: ProjectModal6,
  2: ProjectModal7,
  3: ProjectModal5,
  4: ProjectModal4,
  5: ProjectModal1,
  6: ProjectModal2,
  7: ProjectModal8,
  8: ProjectModal9,
  9: ProjectModal10,
};

const WHITE_FADE_MS = 450;

function App() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isOverlayMounted, setIsOverlayMounted] = useState(true);

  // preload all images
  useEffect(() => {
    const allImages = [
      samplebg,
      Starry_Night,
      modokardpreview,
      bbpreview,
      modokard_cover,
      bb_cover,
      Sample1,
      Sample2,
      Sample3,
      Sample4,
      picture1,
      modokard_slide_1,
      modokard_slide_2,
      modokard_slide_3,
      modokard_slide_4,
      modokard_slide_5,
      modokard_slide_6,
      modokard_slide_7,
      modokard_slide_8,
      ...CERTIFICATES.map((c) => c.image),
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
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const openModal = (modalId: number) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  // close active modal on Escape
  useEffect(() => {
    if (activeModal === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveModal(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const shouldShowLoading = !isLoaded || showLoading;

  // Two-stage exit: the terminal dissolves cell-by-cell to plain white, then the
  // white plane fades to reveal the page. Overlay stays mounted for the whole run.
  useEffect(() => {
    if (shouldShowLoading) return;
    setIsExiting(true);
    const unmount = setTimeout(() => setIsOverlayMounted(false), DISSOLVE_MS + WHITE_FADE_MS);
    return () => clearTimeout(unmount);
  }, [shouldShowLoading]);

  return (
    <>
      {/* White Veil Background -- unmounted during load so only one WebGL context runs */}
      {!shouldShowLoading && (
      <div className="fixed inset-0 z-0">
        <DarkVeil 
          hueShift={210}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.5}
          resolutionScale={1}
          invert
        />
      </div>
      )}

      {isOverlayMounted && (
        <motion.div
          key="loading"
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{
            duration: WHITE_FADE_MS / 1000,
            ease: "easeInOut",
            delay: isExiting ? DISSOLVE_MS / 1000 : 0,
          }}
          style={{ willChange: "opacity" }}
          className="fixed inset-0 z-[999] bg-white"
        >
          <LoadingPage exiting={isExiting} />
        </motion.div>
      )}

      {!shouldShowLoading && (
        <main className="relative z-10">
          <div className="grid-container">
            <Div1 />
            <Div2 />
            <Div3 />
            <Div4 />

            <div className="blue-row">
              {projects.map((project) => (
                <div className="item glass" key={project.id}>
                  <DivProjects
                    project_image={project.image}
                    project_title={project.title}
                    project_id={project.id}
                    openModal={openModal}
                    project_image_bg={project.imageBg}
                    project_label={project.label}
                  />
                </div>
              ))}
            </div>

            {CERTIFICATES.slice(0, 8).map((cert, idx) => (
              <CertificateCard
                key={cert.name}
                certificate={cert}
                className={`item${8 + idx}`}
              />
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
