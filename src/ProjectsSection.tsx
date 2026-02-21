/**
 * PROJECTS SECTION - Standalone Component
 * 
 * A beautiful sticky scrolling projects gallery with staggered card animations.
 * Each card has hover effects with glowing borders and smooth scale transitions.
 * 
 * DEPENDENCIES:
 * - motion/react (Framer Motion)
 * - React
 * 
 * INSTALLATION:
 * npm install motion
 * 
 * USAGE:
 * import { ProjectsSection } from './ProjectsSection';
 * 
 * <ProjectsSection />
 * 
 * ASSETS REQUIRED:
 * You need to replace the image imports with your own project images.
 * The component uses 8 project images (imgFrame30 through imgFrame37).
 */

import { useRef } from "react";
import { motion } from "motion/react";

// ============================================================================
// REPLACE THESE IMPORTS WITH YOUR OWN PROJECT IMAGES
// ============================================================================
// For this example, you'll need to import your images like:
// import imgFrame30 from "./assets/project1.jpg";
// import imgFrame31 from "./assets/project2.jpg";
// ... etc

// Placeholder - replace with your actual image imports
const imgFrame30 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600";
const imgFrame31 = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600";
const imgFrame32 = "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600";
const imgFrame33 = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600";
const imgFrame34 = "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600";
const imgFrame35 = "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600";
const imgFrame36 = "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&h=600";
const imgFrame37 = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600";

// ============================================================================
// CARD COMPONENTS
// ============================================================================

// First project card - with rotation
function Frame14() {
  const ref = useRef(null);
  
  return (
    <div 
      ref={ref}
      id="first-project-trigger"
      className="h-[646px] relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.75)] w-[679.824px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]"
    >
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img 
        alt="Project 1" 
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full group-hover:scale-[1.02] transition-transform duration-500" 
        src={imgFrame30} 
      />
    </div>
  );
}

function Card() {
  return (
    <motion.div 
      className="h-[914px] overflow-clip pointer-events-auto sticky top-0 w-[960px]" 
      data-name="card 1"
      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute flex h-[810.526px] items-center justify-center left-[113px] top-[126px] w-[833.525px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.262deg]">
          <Frame14 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame15() {
  return (
    <div className="absolute bottom-0 h-[646px] left-[36px] shadow-[8px_8px_8px_0px_rgba(0,0,0,0.75)] w-[1105.575px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 2" 
          className="absolute h-full left-0 max-w-none top-0 w-[100.17%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame31} 
        />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <motion.div 
      className="h-[776px] overflow-clip pointer-events-auto sticky top-0 w-[990px]" 
      data-name="card 2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      <Frame15 />
    </motion.div>
  );
}

function Frame16() {
  return (
    <div className="h-[535.809px] relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.65)] w-[916.992px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 3" 
          className="absolute h-full left-0 max-w-none top-0 w-[100.17%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame32} 
        />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <motion.div 
      className="h-[770px] overflow-clip pointer-events-auto sticky top-0 w-[1020px]" 
      data-name="card 3"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      <div className="absolute bottom-[28.69px] flex h-[661.381px] items-center justify-center left-[17px] w-[984.164px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.782deg]">
          <Frame16 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="h-[530.086px] relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.35)] w-[907.198px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 4" 
          className="absolute h-full left-0 max-w-none top-0 w-[100.17%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame33} 
        />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <motion.div 
      className="h-[771px] overflow-clip pointer-events-auto sticky top-0 w-[1162px]" 
      data-name="card 4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    >
      <div className="absolute bottom-[51.62px] flex h-[649.381px] items-center justify-center left-[30.33px] w-[971.27px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.875deg]">
          <Frame17 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="h-[646px] relative shadow-[6px_10px_8px_0px_rgba(0,0,0,0.15)] w-[796.274px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 5" 
          className="absolute h-full left-[-0.38%] max-w-none top-0 w-[100.94%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame34} 
        />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <motion.div 
      className="h-[813px] overflow-clip pointer-events-auto sticky top-0 w-[981px]" 
      data-name="card 5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
    >
      <div className="absolute bottom-[-0.41px] flex h-[726.41px] items-center justify-center left-[19px] w-[859.99px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.057deg]">
          <Frame18 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame19() {
  return (
    <div className="h-[646px] relative shadow-[6px_10px_8px_0px_rgba(0,0,0,0.15)] w-[661.395px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 6" 
          className="absolute h-full left-[0.17%] max-w-none top-0 w-[97.67%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame35} 
        />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="h-[914px] overflow-clip pointer-events-auto sticky top-0 w-[981px]" data-name="card 6">
      <div className="absolute bottom-[0.41px] flex h-[688.306px] items-center justify-center left-[257.61px] w-[702.65px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.21deg]">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[646px] relative shadow-[6px_10px_8px_0px_rgba(0,0,0,0.15)] w-[661.395px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 7" 
          className="absolute h-full left-[0.17%] max-w-none top-0 w-[97.67%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame36} 
        />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="h-[762px] overflow-clip pointer-events-auto sticky top-0 w-[981px]" data-name="card 7">
      <div className="absolute bottom-[-0.18px] flex h-[712.179px] items-center justify-center left-[105px] w-[725.864px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.057deg]">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[646px] relative shadow-[6px_10px_8px_0px_rgba(0,0,0,0.15)] w-[736.422px] group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(253,210,176,0.6)]">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt="Project 8" 
          className="absolute h-full left-[0.17%] max-w-none top-0 w-[97.67%] group-hover:scale-[1.02] transition-transform duration-500" 
          src={imgFrame37} 
        />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="h-[731px] overflow-clip pointer-events-auto sticky top-0 w-[878px]" data-name="card 8">
      <div className="absolute bottom-[-0.34px] flex h-[659.749px] items-center justify-center left-[107.2px] w-[748.453px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.079deg]">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCROLL PROJECTS CONTAINER
// ============================================================================

function ScrollProjects() {
  return (
    <div className="h-[5799px] overflow-clip pointer-events-none relative shrink-0 w-[1265px]" data-name="scroll projects">
      <div className="absolute bottom-0 h-[5613px] left-[110px] top-[186px]">
        <Card />
      </div>
      <div className="absolute bottom-0 h-[4882.5px] left-[81px] top-[916.5px]">
        <Card1 />
      </div>
      <div className="absolute bottom-0 h-[4169px] left-[91px] top-[1630px]">
        <Card2 />
      </div>
      <div className="absolute bottom-0 h-[3484px] left-[81px] top-[2315px]">
        <Card3 />
      </div>
      <div className="absolute bottom-0 h-[2962px] left-[110px] top-[2837px]">
        <Card4 />
      </div>
      <div className="absolute bottom-0 h-[2459px] left-[101px] top-[3340px]">
        <Card5 />
      </div>
      <div className="absolute bottom-0 h-[1739px] left-[37px] top-[4060px]">
        <Card6 />
      </div>
      <div className="absolute bottom-0 h-[1106px] left-[152px] top-[4693px]">
        <Card7 />
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PROJECTS SECTION EXPORT
// ============================================================================

/**
 * ProjectsSection Component
 * 
 * A sticky scrolling gallery of project cards with beautiful animations.
 * 
 * Features:
 * - Sticky scroll effect where cards stack on top of each other
 * - Staggered fade-in and scale animations
 * - Hover effects with glowing borders (#fdd2b0)
 * - Smooth image zoom on hover
 * - Cards have subtle rotations for visual interest
 * 
 * Customization:
 * - Replace the image URLs with your own project images
 * - Adjust the colors (currently using #fdd2b0 accent color)
 * - Modify animation timings in the Card components
 * - Change heights and widths to fit your design
 */
export function ProjectsSection() {
  return (
    <div 
      id="projects" 
      className="relative bg-[#0a0a0a] flex flex-col h-[5768px] items-center justify-center overflow-clip pb-[200px] pt-[50px] px-0 w-full"
    >
      <ScrollProjects />
    </div>
  );
}

// ============================================================================
// USAGE EXAMPLE
// ============================================================================

/**
 * How to use in your app:
 * 
 * import { ProjectsSection } from './ProjectsSection';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <YourOtherSections />
 *       <ProjectsSection />
 *       <YourOtherSections />
 *     </div>
 *   );
 * }
 * 
 * IMPORTANT NOTES:
 * 1. Replace the placeholder image URLs with your actual project images
 * 2. Make sure you have Framer Motion installed: npm install motion
 * 3. The section requires a fixed height (5768px) for the scroll effect to work
 * 4. The background color is #0a0a0a (dark charcoal)
 * 5. The accent color for hover effects is #fdd2b0 (warm peach/gold)
 */

export default ProjectsSection;
