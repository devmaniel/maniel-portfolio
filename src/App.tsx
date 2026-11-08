import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./App.css"; // resolve naming problem

import LoadingPage, { DISSOLVE_MS } from "./components/Loading/LoadingPage";
import StoryPage from "./components/Story/StoryPage";
import { STORY_PROJECTS } from "./data/storyProjects";

const WHITE_FADE_MS = 450;

// the project cards are the page's main images, so they are ready when the loading screen lifts
const PRELOAD_IMAGES = STORY_PROJECTS.map((project) => project.card.src);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isOverlayMounted, setIsOverlayMounted] = useState(true);

  // preload the page images
  useEffect(() => {
    let loadedCount = 0;

    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === PRELOAD_IMAGES.length) {
          setIsLoaded(true);
        }
      };
    });

    // Show loading for at least 2 seconds
    const delay = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

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

      {!shouldShowLoading && <StoryPage />}
    </>
  );
}

export default App;
