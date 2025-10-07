import { useState, useEffect, useRef, useCallback } from "react";
import applePhoto from "../assets/apple_photograph.png";

// Import all photos
import melcoGdg from "../assets/photos/melco-gdg.jpg";
import picture1 from "../assets/photos/picture1.jpg";
import zmi0Peju from "../assets/photos/Zmi0Peju.jpg";

const Div2 = () => {
  const photos = [zmi0Peju, melcoGdg, picture1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality - changes photo every 15 seconds
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 15000); // 15 seconds
  }, [photos.length]);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [photos.length, startAutoSlide]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
    resetTimer(); // Reset timer when manually navigating
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    resetTimer(); // Reset timer when manually navigating
  };

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full aspect-[3/2] h-full max-w-full rounded-xl overflow-hidden group">
        {/* Photo counter */}
        <div className="absolute top-3 right-3 z-10 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
          {currentIndex + 1} / {photos.length}
        </div>
        
        {/* Apple Gallery icon - single floating element */}
        <div className="absolute top-3 left-3 z-10">
          <img src={applePhoto} className="h-8 w-8" alt="Apple Gallery" />
        </div>
        
        {/* Navigation arrows - only visible on hover */}
        <button 
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Previous photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Next photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Sliding photos container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full cursor-pointer"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onClick={handleImageClick}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${photo})` }}
            />
          ))}
        </div>
      </div>

      {/* Custom Lightbox Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          {/* Close on backdrop click */}
          <div 
            className="absolute inset-0"
            onClick={() => setIsDialogOpen(false)}
          />
          
          {/* Image */}
          <img 
            src={photos[currentIndex]} 
            alt={`Photo ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain relative z-10"
          />
          
          {/* Photo Counter */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-md text-sm z-20">
            {currentIndex + 1} / {photos.length}
          </div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-6 right-6 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors z-20"
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors z-20"
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Div2;
