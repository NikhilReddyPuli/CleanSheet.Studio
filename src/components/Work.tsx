import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Navbar } from "./Navbar";
import sectionBgImage from "figma:asset/b578b437b831946edf04cae069df0ea8c3f92ffe.png";
import quoteBgImage from "figma:asset/0e27f0930d1e0e3a5e76e2d3efc0083cee651ba8.png";

// Updated project data with tags and year
const projects = [
  {
    id: 1,
    title: "ECHO MERIDIAN",
    tags: ["DIGITAL PRODUCT"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjkwMDEzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "VELVET SIGNAL",
    tags: ["BRANDING", "MOTION"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NjkxMDM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "CARBON PATTERN LAB",
    tags: ["BRANDING"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1762525984790-7349708a8894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NjkxMDM1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "ELECTRIC HARBOR STUDIO",
    tags: ["WEBSITES DEVELOPMENT"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjkwODM2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "OBSIDIAN VALE",
    tags: ["DIGITAL PRODUCT", "MOTION"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjkwMTgwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "COMMON SIGNAL ASSEMBLY CO",
    tags: ["DIGITAL PRODUCT", "BRANDING"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTAwMTQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    title: "QUIET LANTERN BUREAU",
    tags: ["WEBSITES DEVELOPMENT"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkwMDYwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    title: "INDIGO ORCHARD RESEARCH STUDIO",
    tags: ["MOTION"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkwNzI3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    title: "GOLDEN HORIZON DESIGN OFFICE",
    tags: ["DIGITAL PRODUCT"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1736942901765-88ae15aeed55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzY5MTAzNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 10,
    title: "NORTHERN THREAD WORKS",
    tags: ["WEBSITES DEVELOPMENT", "BRANDING"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5MDcyMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero parallax transforms
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroHeadingY = useTransform(heroProgress, [0, 1], [0, -150]);
  const heroSubtitleY = useTransform(heroProgress, [0, 1], [0, -100]);
  const heroBackgroundY = useTransform(heroProgress, [0, 1], [0, 50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
        style={{ y: heroBackgroundY }}
      >
        {/* Background Image */}
        <img 
          src={sectionBgImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative z-10 max-w-[1920px] mx-auto px-[120px] w-full">
          <div className="max-w-[1400px] mx-auto text-center">
            {/* Small intro badge */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">Our Work</span>
              </div>
            </div>

            {/* Main Heading - slowest parallax */}
            <motion.h1
              className="text-center text-white font-['Delight:Regular',sans-serif] text-[120px] leading-[0.95] tracking-[-0.02em] mb-8"
              style={{ y: heroHeadingY }}
            >
              DITCHING FORM<br />
              IS AN OFFENSE
            </motion.h1>

            {/* Subtitle - medium parallax */}
            <motion.p
              className="text-center text-[#c0c0c0] font-['Delight:Light',sans-serif] text-[16px] leading-[1.6] tracking-[0.5px] max-w-[800px] mx-auto"
              style={{ y: heroSubtitleY }}
            >
              IT'S ALL ABOUT BLENDING FORM & FUNCTION SEAMLESSLY LIKE A<br />
              FLAWLESS MIX OF WHISKEY AND ICE
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects List Section */}
      <section className="relative bg-[#1a1a1a] py-[200px]">
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative z-10 max-w-[1920px] mx-auto px-[120px]">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative h-screen flex items-center justify-center bg-[rgb(243,243,243)] overflow-hidden">
        {/* Background Image */}
        <img 
          src={quoteBgImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative z-10 text-center">
          <h2 className="font-['Delight:Regular',sans-serif] text-[140px] leading-[0.9] tracking-[-0.02em] text-[#0a0a0a] mb-[60px]">
            LET'S TAAA<br />
            AAAAAKKKKK!
          </h2>
          
          <a
            href="#contact"
            className="inline-block border-2 border-[#0a0a0a] px-[40px] py-[16px] font-['Delight:Regular',sans-serif] text-[13px] tracking-[1px] uppercase text-[#0a0a0a] transition-all duration-300 hover:bg-[#0a0a0a] hover:text-[#f5f5f5]"
          >
            LET'S WORK →
          </a>
        </div>

        {/* Footer bottom links */}
        <div className="absolute bottom-[60px] left-0 right-0 flex justify-between items-center px-[100px]">
          <p className="font-['Delight:Light',sans-serif] text-[13px] tracking-[0.5px] text-[#0a0a0a]/60">
            ©2025 BALAVIGNESH
          </p>
          <div className="flex gap-[40px]">
            <a href="#" className="font-['Delight:Light',sans-serif] text-[13px] tracking-[0.5px] text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="font-['Delight:Light',sans-serif] text-[13px] tracking-[0.5px] text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors">
              LINKEDIN
            </a>
            <a href="#" className="font-['Delight:Light',sans-serif] text-[13px] tracking-[0.5px] text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors">
              BEHANCE
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Delight:Light',sans-serif] text-[13px] tracking-[0.5px] text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors"
          >
            GO BACK TO TOP
          </button>
        </div>
      </section>
    </div>
  );
}

// ProjectRow component to display each project
function ProjectRow({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <motion.a
      href="#"
      className="relative flex items-center justify-between py-[48px] border-b border-white/10 group cursor-pointer overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Project Name - Left */}
      <motion.div
        className="flex-1 relative z-10"
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h3 className="font-['Arimo',sans-serif] text-[20px] tracking-[0.08em] uppercase text-white font-normal">
          {project.title}
        </h3>
      </motion.div>

      {/* Tags - Center */}
      <div className="flex gap-[16px] mx-[80px] relative z-10">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-[24px] py-[10px] bg-white/5 border border-white/10 font-['Arimo',sans-serif] text-[13px] tracking-[0.08em] uppercase text-white/70 font-normal"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Year - Right */}
      <div className="min-w-[80px] text-right relative z-10">
        <span className="font-['Arimo',sans-serif] text-[18px] tracking-[0.08em] text-white/60 font-normal">
          {project.year}
        </span>
      </div>

      {/* Subtle dark charcoal hover background */}
      <motion.div
        className="absolute inset-0 bg-[#2a2a2a] pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        style={{ transformOrigin: "left" }}
      />

      {/* Floating Image that follows cursor */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-50 top-0 left-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 8,
            x: mousePosition.x - 140,
            y: mousePosition.y - 190,
          }}
          exit={{ opacity: 0, scale: 0.8, rotate: -8 }}
          transition={{ 
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
            rotate: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
            x: { type: "spring", damping: 30, stiffness: 200 },
            y: { type: "spring", damping: 30, stiffness: 200 },
          }}
        >
          <div className="w-[280px] h-[380px] rounded-[8px] overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </motion.a>
  );
}