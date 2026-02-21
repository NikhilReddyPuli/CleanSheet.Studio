import { motion, useScroll, useTransform } from "motion/react";
import aboutMonkeyImg from "figma:asset/6aa087fedc5daab8d54dfe3593658e4b32ab2d85.png";
import aboutMonkeyBackImg from "figma:asset/c9e8738db6392edd1c8f9231373cfeaa18508a49.png";
import imgUnderlineAccent from "figma:asset/f9b53a99cecafb68614f538bcf0b7616ab850b68.png";
import sketchLineImg from "figma:asset/7978f5a11dcde8e3181a710fd9913a7fdd9f739d.png";
import ctaBgImage from "figma:asset/e2638209d662058fd008046994e6ab07231723f8.png";
import heroBgImage from "figma:asset/a0d1a60520e2cf016349c6c5bbe84c70cb468afe.png";
import searchIcon from "figma:asset/5f2b10fc86419d5fec63c086d45d3c3e1d4412be.png";
import funnelIcon from "figma:asset/4ce10d1da1d4762c957d1e45c786a9fdbcba6565.png";
import paletteIcon from "figma:asset/a6867ea0f8468426ca03dfaa7865235e0f43ff84.png";
import rocketIcon from "figma:asset/38011b748b0dbede78b0132ba780d9e25c890065.png";
import sectionBgImage from "figma:asset/b578b437b831946edf04cae069df0ea8c3f92ffe.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AboutPage() {
  // Use global scroll tracking instead of target refs
  const { scrollY } = useScroll({ layoutEffect: false });
  
  // Parallax transforms with stronger depth effect
  // Depth-based parallax: headings (0.3x), body text (0.5x), images (0.7x)
  
  // Hero section: 0-1000px scroll range
  const heroHeadingY = useTransform(scrollY, [0, 1000], [0, -300]); // 0.3x slower
  const heroTextY = useTransform(scrollY, [0, 1000], [0, -500]); // 0.5x medium speed
  
  // Vision section: 1000-2000px
  const visionImageY = useTransform(scrollY, [1000, 2000], [0, -700]); // 0.7x faster for images
  const visionHeadingY = useTransform(scrollY, [1000, 2000], [0, -300]); // 0.3x slower
  const visionTextY = useTransform(scrollY, [1000, 2000], [0, -500]); // 0.5x medium
  
  // Philosophy section: 2000-3000px
  const philosophyHeadingY = useTransform(scrollY, [2000, 3000], [0, -300]); // 0.3x slower
  const philosophyTextY = useTransform(scrollY, [2000, 3000], [0, -500]); // 0.5x medium
  
  // Services section: 3000-4000px
  const servicesHeadingY = useTransform(scrollY, [3000, 4000], [0, -300]); // 0.3x slower
  const servicesTextY = useTransform(scrollY, [3000, 4000], [0, -500]); // 0.5x medium
  const servicesPillsY = useTransform(scrollY, [3000, 4000], [0, -700]); // 0.7x faster for pills
  
  // Process section: 4000-5000px
  const processHeadingY = useTransform(scrollY, [4000, 5000], [0, -300]); // 0.3x slower
  const processTextY = useTransform(scrollY, [4000, 5000], [0, -500]); // 0.5x medium
  const processIconsY = useTransform(scrollY, [4000, 5000], [0, -700]); // 0.7x faster for icons
  
  // CTA section: 5000-6000px
  const ctaHeadingY = useTransform(scrollY, [5000, 6000], [0, -300]); // 0.3x slower
  const ctaTextY = useTransform(scrollY, [5000, 6000], [0, -500]); // 0.5x medium

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] overflow-y-auto overflow-x-hidden isolate z-[1000]">
      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <div className="relative z-[150]">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="relative bg-[#0a0a0a] z-[100]">
        
        {/* Hero Statement Section - Bold and Centered */}
        <section className="relative z-[1] min-h-[1080px] flex items-center transition-all duration-700 ease-out overflow-hidden">
          {/* Background Image */}
          <img 
            src={sectionBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          
          <div className="max-w-[1920px] mx-auto px-[120px] w-full relative z-10">
            <motion.div
              className="max-w-[1400px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Small intro badge */}
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                  <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">About Us</span>
                </div>
              </motion.div>

              {/* Large hero statement */}
              <motion.h1
                className="text-center text-white font-['Delight:Semi_Bold',sans-serif] text-[90px] leading-[1.15] tracking-[-0.02em] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ y: heroHeadingY }}
              >
                From the frustration of <br/>
                <span className="relative inline-block">
                  unclear branding.
                  <motion.img 
                    src={imgUnderlineAccent}
                    alt=""
                    className="absolute left-0 bottom-[-8px] h-[10px] w-full object-cover object-left opacity-80"
                    initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                    whileInView={{ opacity: 0.8, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  />
                </span>
                <br/>
                With the clarity of <br/>
                <span className="text-[#fdd2b0]"><span className="font-['Imperial_Script',cursive] text-[110px] inline-block leading-[0.82]">S</span>trategic <span className="font-['Imperial_Script',cursive] text-[110px] inline-block leading-[0.82]">D</span>esign.</span>
              </motion.h1>

              <motion.p
                className="text-center text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8] max-w-[800px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ y: heroTextY }}
              >
                Cleansheet is a design studio built on clarity, restraint, and intent — helping brands strip away noise and communicate with purpose.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* The Vision Section - Image + Text */}
        <section className="relative z-[2] bg-[#0a0a0a] min-h-[1080px] flex items-center overflow-hidden">
          {/* Background Image */}
          <img 
            src={sectionBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="max-w-[1920px] mx-auto px-[120px] w-full relative z-10">
            <div className="grid grid-cols-2 gap-24 items-center">
              {/* Left - Image */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ perspective: '1000px' }}
              >
                {/* Glow effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#fdd2b0]/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px]"
                  animate={{
                    x: [-5, 5, -5],
                    y: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* 3D Flip Card Container */}
                <motion.div 
                  className="relative rounded-3xl shadow-2xl w-[65%] mx-auto"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    y: [-8, 8, -8],
                    x: [-4, 4, -4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Flip Inner Container */}
                  <motion.div
                    className="relative"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.8s'
                    }}
                    whileHover={{ rotateY: 180 }}
                  >
                    {/* Front Face */}
                    <div 
                      className="relative overflow-visible rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-4"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <motion.img 
                        src={aboutMonkeyImg} 
                        alt="Cleansheet Vision" 
                        className="w-full h-auto object-contain rounded-2xl"
                        style={{ y: visionImageY }}
                      />
                      
                      {/* Shine overlay */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ 
                          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 60%, transparent 100%)"
                        }}
                      />
                    </div>

                    {/* Back Face */}
                    <div 
                      className="absolute inset-0 overflow-visible rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-4"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <motion.img 
                        src={aboutMonkeyBackImg} 
                        alt="Cleansheet Vision - Back" 
                        className="w-full h-auto object-contain rounded-2xl"
                        style={{ y: visionImageY }}
                      />
                      
                      {/* Shine overlay for back */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ 
                          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 60%, transparent 100%)"
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right - Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                  <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">Why It Matters</span>
                </div>
                
                <h2 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[70px] leading-[1.2] mb-8" style={{ y: visionHeadingY }}>
                  Not to compete with AI.
                </h2>

                <div className="space-y-6 text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8]" style={{ y: visionTextY }}>
                  <p>
                    But to bring <span className="text-white font-['Delight:Semi_Bold',sans-serif]">human judgment</span>, <span className="text-white font-['Delight:Semi_Bold',sans-serif]">clarity</span>, and <span className="text-white font-['Delight:Semi_Bold',sans-serif]">restraint</span> back into design.
                  </p>
                  
                  <p>
                    In a world where anyone can generate visuals instantly, the value isn't in speed — it's in knowing what to make, why it matters, and what to leave out.
                  </p>

                  <p className="text-white font-['Delight:Semi_Bold',sans-serif] text-[22px] pt-4">
                    That's where Cleansheet comes in.
                  </p>
                </div>

                {/* Decorative line */}
                <div className="mt-10 h-[2px] w-24 bg-gradient-to-r from-[#fdd2b0] to-transparent rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section - Two Column Grid */}
        <section className="relative z-[3] bg-[#0a0a0a] border-y border-white/5 min-h-[1080px] flex items-center overflow-hidden py-24">
          {/* Background Image */}
          <img 
            src={sectionBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="max-w-[1920px] mx-auto px-[120px] w-full relative z-10">
            <motion.div
              className="mb-16 flex items-start gap-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Vertical "Our Philosophy" text */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div 
                  className="inline-flex flex-row items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                  <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">
                    Our Philosophy
                  </span>
                </div>
              </motion.div>

              {/* Main heading */}
              <div className="flex-1">
                <h2 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[70px] leading-[1.15] max-w-[800px]" style={{ y: philosophyHeadingY }}>
                  Design that respects intelligence.
                </h2>
              </div>
            </motion.div>

            {/* Four column grid with vertical dividers */}
            <div className="grid grid-cols-4 gap-0 relative">
              {/* Vertical dividers */}
              <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/10" />
              <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10" />
              <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/10" />

              {[
                {
                  title: "Clarity over decoration",
                  description: "Every element serves a purpose. If it doesn't clarify the message or strengthen the brand, it doesn't belong."
                },
                {
                  title: "Strategy before aesthetics",
                  description: "Beautiful design is the outcome, not the starting point. I begin with understanding, not templates."
                },
                {
                  title: "Restraint as a skill",
                  description: "In a world of excess, knowing what to leave out is as important as what to include."
                },
                {
                  title: "Human judgment over automation",
                  description: "AI can generate. But it can't judge context, nuance, or cultural relevance. That's where I come in."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="px-10 py-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  style={{ y: philosophyTextY }}
                >
                  <h3 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[24px] leading-[1.3] mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section - Dark with Service Cards */}
        <section className="relative z-[4] bg-[#0a0a0a] min-h-[1080px] flex items-center overflow-hidden py-24">
          {/* Background Image */}
          <img 
            src={sectionBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="max-w-[1920px] mx-auto px-[120px] w-full relative z-10">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">What I Do</span>
              </div>
              <h2 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[70px] leading-[1.15] mb-8" style={{ y: servicesHeadingY }}>
                Strategic design services.
              </h2>
              <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8] max-w-[700px]" style={{ y: servicesTextY }}>
                I help brands communicate clearly through thoughtful visual systems and strategic design.
              </p>
            </motion.div>

            {/* Service Grid - 2x3 */}
            <div className="max-w-[1400px] mx-auto">
              {/* Tool Pills - Now Larger and Primary */}
              <motion.div 
                className="flex items-center justify-center gap-8 flex-wrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  y: servicesPillsY
                }}
              >
                {[
                  { 
                    name: "Brand Identity", 
                    style: "dark", 
                    rotation: -2,
                    description: "Visual systems that reflect brand strategy, not trends. Logos, colors, typography, guidelines."
                  },
                  { 
                    name: "UI/UX Design", 
                    style: "light", 
                    rotation: 1,
                    description: "Digital interfaces designed for clarity and usability. Web, mobile, SaaS products."
                  },
                  { 
                    name: "Pitch Decks", 
                    style: "dark", 
                    rotation: -1,
                    description: "Investor presentations that communicate vision clearly. Structure, narrative, visual design."
                  },
                  { 
                    name: "Print Design", 
                    style: "light", 
                    rotation: 2,
                    description: "Physical collateral designed with the same rigor as digital. Business cards, packaging, editorial."
                  },
                  { 
                    name: "Consultation", 
                    style: "dark", 
                    rotation: -1,
                    description: "Strategic guidance on brand direction, visual systems, and design decisions. Clarity without execution."
                  }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className="relative group/pill"
                  >
                    <motion.div
                      className={`
                        px-20 py-8 rounded-full font-['Arimo',sans-serif] font-semibold text-[22px] tracking-[0.05em] uppercase
                        transition-all duration-500 cursor-default
                        ${tool.style === 'light' 
                          ? 'bg-white text-[#0a0a0a] shadow-xl shadow-white/30 hover:shadow-white/40' 
                          : 'bg-[#2a2a2a] text-white border border-white/10 hover:border-white/20 shadow-xl shadow-black/30'
                        }
                      `}
                      initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, rotate: tool.rotation, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3 + index * 0.1
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        rotate: tool.rotation + (tool.rotation > 0 ? 2 : -2),
                        y: -8,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      {tool.name}
                    </motion.div>
                    
                    {/* Hover Description Tooltip */}
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/pill:opacity-100 pointer-events-none transition-all duration-300 z-20"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl px-8 py-6 shadow-2xl shadow-black/40 backdrop-blur-sm w-[420px]">
                        <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[18px] leading-[1.8] text-center">
                          {tool.description}
                        </p>
                        
                        {/* Arrow pointing down */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1c1c1c] border-r border-b border-white/10 rotate-45" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="relative z-[5] bg-[#1c1c1c] border-y border-white/5 min-h-[1080px] flex items-center overflow-hidden py-24">
          {/* Background Image */}
          <img 
            src={sectionBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="max-w-[1920px] mx-auto px-[120px] w-full relative z-10">
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
                <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">Our Process</span>
              </div>
              <h2 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[70px] leading-[1.15] mb-8" style={{ y: processHeadingY }}>
                The Cleansheet approach.
              </h2>
            </motion.div>

            {/* Process Flow - Two rows of three with sketch connections */}
            <div className="relative max-w-[1400px] mx-auto mb-20">
              
              {/* Single Row - All 4 Steps */}
              <div className="flex items-center justify-between relative">
                {/* Step 1 */}
                <motion.div
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0 }}
                >
                  <motion.div 
                    className="w-32 h-32 flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#fdd2b0]/20 blur-xl"
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                    />
                    <img src={searchIcon} alt="Diagnose" className="w-full h-full object-contain relative z-10" />
                  </motion.div>
                  <h3 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[24px] mb-2">
                    Diagnose
                  </h3>
                  <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[16px] text-center max-w-[200px] leading-[1.6]">
                    Understanding your brand, audience, and goals
                  </p>
                </motion.div>

                {/* Connecting Line 1-2 */}
                <motion.div
                  className="flex-1 mx-6 relative flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div 
                    className="w-full h-[2px] bg-gradient-to-r from-[#d4d4d4]/40 via-[#d4d4d4]/20 to-[#d4d4d4]/40 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  >
                    {/* Traveling dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#fdd2b0] shadow-lg shadow-[#fdd2b0]/50"
                      initial={{ opacity: 0 }}
                      animate={{
                        x: [0, "100%"],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.9
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 w-3 h-3 border-r-2 border-t-2 border-[#d4d4d4]/60 rotate-45 -translate-y-[1px]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  />
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <motion.div 
                    className="w-32 h-32 flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#fdd2b0]/20 blur-xl"
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.3
                      }}
                    />
                    <img src={funnelIcon} alt="Distill" className="w-full h-full object-contain relative z-10" />
                  </motion.div>
                  <h3 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[24px] mb-2">
                    Distill
                  </h3>
                  <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[16px] text-center max-w-[200px] leading-[1.6]">
                    Stripping away noise to find the core idea
                  </p>
                </motion.div>

                {/* Connecting Line 2-3 */}
                <motion.div
                  className="flex-1 mx-6 relative flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <motion.div 
                    className="w-full h-[2px] bg-gradient-to-r from-[#d4d4d4]/40 via-[#d4d4d4]/20 to-[#d4d4d4]/40 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    style={{ transformOrigin: "left" }}
                  >
                    {/* Traveling dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#fdd2b0] shadow-lg shadow-[#fdd2b0]/50"
                      initial={{ opacity: 0 }}
                      animate={{
                        x: [0, "100%"],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.8
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 w-3 h-3 border-r-2 border-t-2 border-[#d4d4d4]/60 rotate-45 -translate-y-[1px]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                  />
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <motion.div 
                    className="w-32 h-32 flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#fdd2b0]/20 blur-xl"
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.2
                      }}
                    />
                    <img src={paletteIcon} alt="Design" className="w-full h-full object-contain relative z-10" />
                  </motion.div>
                  <h3 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[24px] mb-2">
                    Design
                  </h3>
                  <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[16px] text-center max-w-[200px] leading-[1.6]">
                    Crafting clean visuals with restraint
                  </p>
                </motion.div>

                {/* Connecting Line 3-4 */}
                <motion.div
                  className="flex-1 mx-6 relative flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  <motion.div 
                    className="w-full h-[2px] bg-gradient-to-r from-[#d4d4d4]/40 via-[#d4d4d4]/20 to-[#d4d4d4]/40 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    style={{ transformOrigin: "left" }}
                  >
                    {/* Traveling dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#fdd2b0] shadow-lg shadow-[#fdd2b0]/50"
                      initial={{ opacity: 0 }}
                      animate={{
                        x: [0, "100%"],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2.7
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 w-3 h-3 border-r-2 border-t-2 border-[#d4d4d4]/60 rotate-45 -translate-y-[1px]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 2.6 }}
                  />
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 2.7 }}
                >
                  <motion.div 
                    className="w-32 h-32 flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#fdd2b0]/20 blur-xl"
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3.2
                      }}
                    />
                    <img src={rocketIcon} alt="Deliver" className="w-full h-full object-contain relative z-10" />
                  </motion.div>
                  <h3 className="text-white font-['Delight:Semi_Bold',sans-serif] text-[24px] mb-2">
                    Deliver
                  </h3>
                  <p className="text-[#c0c0c0] font-['Delight:Regular',sans-serif] text-[16px] text-center max-w-[200px] leading-[1.6]">
                    Fast turnaround with clear documentation
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Closing statement */}
            <motion.div
              className="mt-[180px] flex items-center gap-8 max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-1 h-20 bg-gradient-to-b from-[#fdd2b0] to-transparent rounded-full" />
              <p className="text-white font-['Delight:Semi_Bold',sans-serif] text-[32px] leading-[1.5] max-w-[900px]">
                This process keeps the work honest — and the results clear.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Full Width */}
        <section className="relative z-[6] bg-[rgb(243,243,243)] min-h-[1080px] flex items-center overflow-hidden py-24">
          {/* Background Image */}
          <img 
            src={ctaBgImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Grain Texture Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
          
          <div className="max-w-[1920px] mx-auto px-[253px] w-full relative z-10">
            <motion.div
              className="text-center max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[rgb(10,10,10)] font-['Arimo',sans-serif] font-normal text-[72px] leading-[1.15] mb-10">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Ready to start with a clean sheet?
                </motion.span>
              </h2>

              {/* Separator line */}
              <div className="w-[60px] h-[2px] bg-[rgb(10,10,10)] mx-auto mb-6"></div>

              <p className="text-[rgb(121,121,121)] font-['Arimo',sans-serif] text-[18px] font-normal tracking-[0.5px] mb-16">
                Let's talk about your brand, your goals, and how strategic design can help.
              </p>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwJEZ4EhHuW1CzAyNztTjyP1YxbZCTG5S5njmUQAuVFdEu7A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-transparent text-[rgb(10,10,10)] font-['Arimo',sans-serif] font-semibold text-[18px] tracking-wide rounded-full border-2 border-dashed border-[rgb(10,10,10)]/40 hover:border-[#fdd2b0] hover:text-[#fdd2b0] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                GET IN TOUCH
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}