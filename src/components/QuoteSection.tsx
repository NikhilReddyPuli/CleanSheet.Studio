import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import quoteBgImage from "figma:asset/0e27f0930d1e0e3a5e76e2d3efc0083cee651ba8.png";

export function QuoteSection() {
  const ref = useRef(null);
  
  // Scroll-driven parallax effect using ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  // Transform scroll progress to Y movement with different speeds
  // Heading moves slower (0.35x speed) - 150px total range
  const quoteHeadingY = useTransform(scrollYProgress, [0, 1], [0, -52.5]);
  // Text moves at medium speed (0.5x) - 150px total range
  const quoteTextY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  
  return (
    <div 
      ref={ref}
      className="relative bg-[rgb(243,243,243)] content-stretch flex h-[1080px] items-center justify-center px-[253px] py-0 w-full max-w-[1920px] mx-auto overflow-hidden" 
      data-name="quote"
    >
      {/* Background Image */}
      <img 
        src={quoteBgImage} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Grain Texture Overlay for Quote */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Quote content */}
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto relative z-10">
        
        {/* Main quote text */}
        <motion.div 
          className="text-center mb-10"
          style={{ y: quoteHeadingY }}
        >
          <h2 className="font-['Arimo',sans-serif] font-normal text-[72px] leading-[1.15] text-[rgb(10,10,10)]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              "Simplicity is about subtracting the obvious
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              and adding the meaningful."
            </motion.span>
          </h2>
        </motion.div>
        
        {/* Separator line */}
        <motion.div 
          className="w-[60px] h-[2px] bg-[rgb(228,219,219)] mb-6"
          style={{ y: quoteTextY }}
        />
        
        {/* Attribution */}
        <motion.p 
          className="font-['Arimo',sans-serif] text-[18px] font-normal text-[rgb(121,121,121)] tracking-[0.5px]"
          style={{ y: quoteTextY }}
        >
          John Maeda, The Laws of Simplicity
        </motion.p>
      </div>
    </div>
  );
}