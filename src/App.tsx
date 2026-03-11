import Desktop6 from "./imports/Desktop6";
import { LoadingScreen } from "./components/LoadingScreen";
import { AboutPage } from "./components/AboutPage";
import { MobileHome } from "./components/MobileHome";
import { MobileAbout } from "./components/MobileAbout";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "about") {
        setCurrentPage("about");
      } else {
        setCurrentPage("home");
      }
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <style>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Imperial+Script&display=swap');
        
        /* Desktop: Keep original zoom-based scaling for laptop dimensions (1024px and above) */
        @media (min-width: 1920px) {
          body {
            zoom: 1;
          }
        }
        
        @media (max-width: 1919px) and (min-width: 1680px) {
          body {
            zoom: 0.875;
          }
        }
        
        @media (max-width: 1679px) and (min-width: 1536px) {
          body {
            zoom: 0.8;
          }
        }
        
        @media (max-width: 1535px) and (min-width: 1440px) {
          body {
            zoom: 0.75;
          }
        }
        
        @media (max-width: 1439px) and (min-width: 1366px) {
          body {
            zoom: 0.71;
          }
        }
        
        @media (max-width: 1365px) and (min-width: 1280px) {
          body {
            zoom: 0.6667;
          }
        }
        
        @media (max-width: 1279px) and (min-width: 1024px) {
          body {
            zoom: 0.533;
          }
        }
        
        /* Mobile: Remove zoom and use native responsive design (below 1024px) */
        @media (max-width: 1023px) {
          body {
            zoom: 1;
          }
          
          /* Hide desktop version */
          .desktop-only {
            display: none !important;
          }
          
          /* Show mobile version */
          .mobile-only {
            display: block !important;
          }
        }
        
        /* Desktop: Hide mobile version */
        @media (min-width: 1024px) {
          .mobile-only {
            display: none !important;
          }
          
          .desktop-only {
            display: block !important;
          }
        }
      `}</style>
      
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Desktop Version */}
          <div className="desktop-only">
            {currentPage === "home" ? <Desktop6 key="home" /> : <AboutPage key="about" />}
          </div>
          
          {/* Mobile Version */}
          <div className="mobile-only">
            {currentPage === "home" ? <MobileHome key="mobile-home" /> : <MobileAbout key="mobile-about" />}
          </div>
        </>
      )}
    </div>
  );
}