import svgPaths from "../imports/svg-n3smrndo5p";
import imgImage from "figma:asset/f8128c57025ddbaa59b269bb59d872ec6e4a7ac0.png";
import signatureImage from "figma:asset/2a19f9517ec81655c227aaeac63d28c6a6f1cb05.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Always show button on About page, or when scrolled past hero section on other pages
      const isAboutPage = window.location.hash === '#about';
      setShowButton(isAboutPage || window.scrollY > 1000);
    };

    const handleHashChange = () => {
      // Recalculate button visibility when navigating
      const isAboutPage = window.location.hash === '#about';
      setShowButton(isAboutPage || window.scrollY > 1000);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdwJEZ4EhHuW1CzAyNztTjyP1YxbZCTG5S5njmUQAuVFdEu7A/viewform?usp=dialog', '_blank');
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if we're on the about page
    const isAboutPage = window.location.hash === '#about';
    
    if (isAboutPage) {
      // Navigate to home page first, then scroll to projects
      window.location.href = '#home';
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to projects section on the current page
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className="fixed left-0 top-0 w-full h-[68px] z-[150]"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.05)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Border elements */}
      <div className="absolute border border-[#f6f6f6] border-solid h-[68px] left-0 top-0 w-[1920px]" />
      <div className="absolute border border-[#f6f6f6] border-solid h-[68px] left-0 top-0 w-[272px]" />
      <div className="absolute border-[#f6f6f6] border-solid h-[68px] left-0 top-0 w-[1635px]" style={{ borderWidth: '0.5px' }} />
      
      {/* Logo */}
      <a href="#hero" className="absolute left-[67px] top-[21px]">
        <div className="h-[26.25px] w-[118.5px] cursor-pointer hover:opacity-80 transition-opacity">
          <img alt="" className="w-full h-full object-cover" src={imgImage} />
        </div>
      </a>
      
      {/* Navigation Links */}
      <div className="absolute flex gap-[60px] items-center left-[765px] top-[21px]">
        <a
          href="#about"
          className="font-['Arimo',sans-serif] text-[22px] leading-[33px] text-[#d4d4d4] hover:text-white transition-colors cursor-pointer"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          onClick={handleWorkClick}
          className="font-['Arimo',sans-serif] text-[22px] leading-[33px] text-[#d4d4d4] hover:text-white transition-colors cursor-pointer"
        >
          WORK
        </a>
        <a
          href="#footer"
          onClick={handleContactClick}
          className="font-['Arimo',sans-serif] text-[22px] leading-[33px] text-[#d4d4d4] hover:text-white transition-colors cursor-pointer"
        >
          CONTACT
        </a>
      </div>
      
      {/* Signature - shows in hero section */}
      {!showButton && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-[1730px] top-1/2 -translate-y-1/2 w-[120px] h-auto"
        >
          <img 
            src={signatureImage} 
            alt="Signature" 
            className="w-full h-auto object-contain opacity-90"
          />
        </motion.div>
      )}
      
      {/* Let's work together button - appears after scrolling */}
      {showButton && (
        <motion.a
          href="#footer"
          onClick={handleContactClick}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-[1685px] top-1/2 -translate-y-1/2 px-6 py-2 font-['Arimo',sans-serif] text-[16px] text-white cursor-pointer group whitespace-nowrap"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <span className="relative z-10">Let's work together</span>
          
          {/* Animated glow effect */}
          <div 
            className="absolute inset-0 rounded-[4px] opacity-30 blur-[8px] group-hover:blur-[16px] transition-all duration-500"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />
          
          {/* Subtle shimmer */}
          <div 
            className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)',
            }}
          />
        </motion.a>
      )}
    </div>
  );
}