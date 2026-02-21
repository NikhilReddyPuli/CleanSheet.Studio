import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import underlineImg from "figma:asset/f9b53a99cecafb68614f538bcf0b7616ab850b68.png";

interface Frame2Props {
  className?: string;
}

function Frame2({ className }: Frame2Props) {
  return null;
}

export function ImprovedStorySection() {
  const { scrollY } = useScroll({ layoutEffect: false });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  
  // Ref to track the story content section
  const storyContentRef = useRef(null);
  const isInView = useInView(storyContentRef, { 
    once: false,
    amount: 0.3 // Trigger when 30% of the element is visible
  });
  
  // Monitor scroll position to smoothly slide chimp text to the right after story section - USE BODY SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      setCurrentScrollY(scrollPos);
      // Start sliding at 1700px, fully off-screen by 2000px
      const startSlide = 1700;
      const endSlide = 2000;
      const progress = Math.max(0, Math.min(1, (scrollPos - startSlide) / (endSlide - startSlide)));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Parallax for story section text - scrolls up when entering the story section
  const storyTextY = useTransform(scrollY, [1080, 1897], [200, 0]);
  
  // Background opacity fade-in as user scrolls into story section
  const bgOpacity = useTransform(scrollY, [1080, 1400], [0, 0.95]);
  
  // Calculate mirror text opacity based on state (not useTransform)
  const calculateOpacity = () => {
    // Show card when the story content section is in view
    return isInView ? 1 : 0;
  };
  
  return (
    <>
      {/* Chimp mirror text - Portal to body to escape zoom transform */}
      {typeof document !== 'undefined' && createPortal(
        <div
          className="fixed right-[360px] top-[550px] w-[480px] z-[9999] pointer-events-none"
          style={{
            opacity: calculateOpacity(),
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div className="relative bg-gradient-to-br from-[#0a0a0a]/90 via-[#1c1c1c]/85 to-[#0a0a0a]/90 backdrop-blur-md p-5 rounded-2xl border border-[#d4d4d4]/20 shadow-2xl overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d4]/5 via-transparent to-[#c0c0c0]/5 pointer-events-none"></div>
            
            {/* Elegant corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#d4d4d4]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8] m-0">
                <span className="block text-[#d4d4d4] font-['Delight:Semi_Bold',sans-serif] text-[22px] mb-2 tracking-wide">Our chimp isn't a mascot. It's a mirror</span>
                <span className="text-[#c0c0c0]"> — a reminder that great design comes from deep observation, honest thinking, and evolutionary simplicity.</span>
              </p>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4d4d4]/30 to-transparent"></div>
          </div>
        </div>,
        document.body
      )}
      
      <div id="story" className="absolute left-0 top-0 w-full h-full" data-name="Story section">
        {/* Solid background to cover hero elements */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-transparent z-10 pointer-events-none"
          style={{ opacity: bgOpacity }}
        />
        
        {/* Main Container - Two Column Layout with PARALLAX */}
        <motion.div 
          ref={storyContentRef}
          className="absolute left-[120px] right-[120px] top-[150px] flex flex-col gap-[80px] items-start z-30"
          style={{ y: storyTextY }}
        >
          
          {/* Heading */}
          <div className="w-full max-w-[900px]">
            <motion.h1 
              className="text-white font-['Delight:Semi_Bold',sans-serif] text-[68px] leading-[1.15] m-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I create design that's{' '}
              <span className="relative inline-block">
                <span className="font-['Delight:Regular',sans-serif] not-italic">intentional</span>
                {/* Decorative underline scribble */}
                <motion.img
                  src={underlineImg}
                  alt=""
                  className="absolute left-0 -bottom-[8px] w-[105%] h-auto"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  style={{ transformOrigin: "left center" }}
                />
              </span>
              {', '}
              modern, and calm.
            </motion.h1>
          </div>

          {/* Content below heading */}
          <div className="w-full max-w-[700px]">
            
            {/* Subtitle */}
            <motion.p 
              className="text-white/80 font-['Delight:Regular',sans-serif] text-[22px] leading-[1.65] mb-[50px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              In a world full of loud brands and AI-generated clutter, I create design that feels powerful enough to convert. I help founders build brands people instantly understand and naturally trust.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <Frame2 />
            </motion.div>

          </div>

        </motion.div>
      </div>
    </>
  );
}