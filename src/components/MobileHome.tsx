import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import imgImage from "figma:asset/f8128c57025ddbaa59b269bb59d872ec6e4a7ac0.png";
import imgHeroMonkey from "figma:asset/fd2931788792859ae9abdb38dba933ad779cc8fb.png";
import imgHeroBg from "figma:asset/a0d1a60520e2cf016349c6c5bbe84c70cb468afe.png";
import imgCLogoBg from "figma:asset/706df61bb570644c4d4424152d6e4dba301fe2fc.png";
import imgBrandIdentity from "figma:asset/8c0f4c2b3f987df6649d4de05404e2ac63e4a11b.png";
import imgUIUX from "figma:asset/cb2c0c6c88f3d0e587e8719e20b80cd1e7dafcad.png";
import imgCreativeDesign from "figma:asset/ea64426fb52bcad19d30d5a1a741d17e2e2f0bd2.png";
import imgPitchDeck from "figma:asset/62d23b3d63171837a9a7a8ec2a614076795e49d8.png";
import imgFrame30 from "figma:asset/8855b101e9fd48d47dd742b2ea3f18609bd4b4c0.png";
import imgFrame31 from "figma:asset/fa0f06ddb358ed76caf0f700b0889e97b842a26e.png";
import imgFrame32 from "figma:asset/b9353653a3270dc29cc5fab11c23ba81feecf77d.png";
import imgFrame33 from "figma:asset/9c40f657e2672b8729a66efb08ce28d073b33a2b.png";
import imgFrame34 from "figma:asset/45aab52c3a4dc45f43259c736adba5c34f6193d8.png";
import imgFrame35 from "figma:asset/4741634d62bcc8efb6d523433eafbb6606612be4.png";
import imgFrame36 from "figma:asset/ada34c32313b6025e9d57b2df870c7a6aef83ef4.png";
import imgFrame37 from "figma:asset/2ac60486a63e76b463dddfdb271df475c7a9f440.png";
import { Navbar } from "./Navbar";

// Word-by-word reveal component
function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function MobileHome() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for hero image
  const heroImageY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);
  const heroImageOpacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    { img: imgFrame30, title: "Brand Evolution", category: "Branding", desc: "Complete brand transformation" },
    { img: imgFrame31, title: "Visual Identity", category: "Design", desc: "Unique visual language" },
    { img: imgFrame32, title: "Digital Experience", category: "UI/UX", desc: "User-centered design approach" },
    { img: imgFrame33, title: "Creative Campaign", category: "Marketing", desc: "Strategic marketing design" },
    { img: imgFrame34, title: "Brand Assets", category: "Branding", desc: "Comprehensive brand materials" },
    { img: imgFrame35, title: "Brand Strategy", category: "Branding", desc: "Comprehensive brand system" },
    { img: imgFrame36, title: "Brand Identity", category: "Branding", desc: "Strategic brand development" },
    { img: imgFrame37, title: "Visual Design", category: "Creative", desc: "Creative visual solutions" },
  ];

  const services = [
    { 
      img: imgBrandIdentity, 
      title: "Brand Identity", 
      desc: "Creating cohesive visual identities that make your brand unforgettable",
      color: "from-[#fdd2b0]/10 to-transparent",
      number: "01"
    },
    { 
      img: imgUIUX, 
      title: "UI/UX Design", 
      desc: "Crafting intuitive user experiences that delight and engage",
      color: "from-[#d4d4d4]/10 to-transparent",
      number: "02"
    },
    { 
      img: imgCreativeDesign, 
      title: "Creative Design", 
      desc: "Innovative design solutions that push creative boundaries",
      color: "from-[#fdd2b0]/10 to-transparent",
      number: "03"
    },
    { 
      img: imgPitchDeck, 
      title: "Pitch Deck", 
      desc: "Compelling presentation design that wins investors and clients",
      color: "from-[#d4d4d4]/10 to-transparent",
      number: "04"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Navbar */}
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fdd2b0] via-white to-[#d4d4d4] z-[200] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-end px-[20px] pb-[60px] overflow-hidden">
        {/* Background gradient base */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]" />

        {/* C Logo Background - subtle in center with parallax */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.04] z-[2]"
          style={{ y: useTransform(heroScrollProgress, [0, 1], ["0%", "20%"]) }}
        >
          <img src={imgCLogoBg} alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Full-Screen Hero Monkey Image with parallax */}
        <motion.div
          className="absolute inset-0 z-[3]"
          style={{ 
            y: heroImageY,
            opacity: heroImageOpacity
          }}
        >
          <img 
            src={imgHeroMonkey} 
            alt="" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Gradient overlay at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        {/* Content - Positioned at bottom, overlaying the monkey */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          <h1 className="font-['Delight_Extra_Bold',sans-serif] text-[48px] sm:text-[56px] leading-[0.95] tracking-tight text-white mb-[16px]"
            style={{
              textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'
            }}
          >
            <WordReveal text="Crafting Stories" delay={0.6} />
            <br />
            <WordReveal text="Through Design" delay={0.9} />
          </h1>

          <motion.p
            className="font-['Arimo',sans-serif] text-[14px] leading-[1.6] text-[#d4d4d4] max-w-[340px] mb-[28px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{
              textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)'
            }}
          >
            We transform ideas into impactful visual experiences that resonate with your audience
          </motion.p>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwJEZ4EhHuW1CzAyNztTjyP1YxbZCTG5S5njmUQAuVFdEu7A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black/30 backdrop-blur-md text-white font-['Arimo',sans-serif] font-semibold text-[14px] tracking-wide rounded-full border-2 border-white/30 hover:border-[#fdd2b0] hover:bg-[#fdd2b0]/10 hover:text-[#fdd2b0] transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            GET IN TOUCH
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          {/* Scroll indicator */}
          <motion.div
            className="mt-[28px] flex flex-col items-center gap-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p className="font-['Arimo',sans-serif] text-[10px] uppercase tracking-[0.15em] text-white/70">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/70">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Our Work */}
      <section id="projects" className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-[80px] px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div className="text-center mb-[60px]">
            <motion.h2
              className="font-['Delight_Semi_Bold',sans-serif] text-[36px] sm:text-[44px] leading-[1.2] text-white mb-[16px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Our Work
            </motion.h2>

            <motion.p
              className="font-['Arimo',sans-serif] text-[14px] leading-[1.6] text-[#d4d4d4]/80 max-w-[340px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A showcase of our recent projects and creative solutions
            </motion.p>
          </motion.div>

          {/* Enhanced Sticky Scroll Projects */}
          <div className="relative space-y-[20px]">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="sticky top-[80px]"
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.05 
                }}
              >
                <div className="relative group overflow-hidden rounded-[20px] aspect-[4/3] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  {/* Image with zoom effect */}
                  <motion.img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-[28px]">
                    <motion.p 
                      className="font-['Arimo',sans-serif] text-[11px] uppercase tracking-[0.15em] text-[#fdd2b0] mb-[8px]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {project.category}
                    </motion.p>
                    <motion.h3 
                      className="font-['Delight_Semi_Bold',sans-serif] text-[24px] text-white mb-[6px]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="font-['Arimo',sans-serif] text-[12px] text-[#d4d4d4]/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {project.desc}
                    </motion.p>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  />

                  {/* Border accent */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0]/30 transition-all duration-500 rounded-[20px]" />
                </div>
              </motion.div>
            ))}</div>
        </div>
      </section>

      {/* What We Do Section - Enhanced Services */}
      <section className="relative py-[80px] px-[20px] bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div className="text-center mb-[60px]">
            <motion.h2
              className="font-['Delight_Semi_Bold',sans-serif] text-[36px] sm:text-[44px] leading-[1.2] text-white mb-[16px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              What We Do
            </motion.h2>

            <motion.p
              className="font-['Arimo',sans-serif] text-[14px] leading-[1.6] text-[#d4d4d4]/80 max-w-[340px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We specialize in creating comprehensive design solutions that elevate your brand
            </motion.p>
          </motion.div>

          {/* Enhanced Services Grid */}
          <div className="space-y-[24px]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden p-[32px] bg-[#0f0f0f]/80 backdrop-blur-sm rounded-[20px] border border-white/5 hover:border-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                
                {/* Number indicator */}
                <motion.div 
                  className="absolute top-[20px] right-[20px] font-['Delight_Semi_Bold',sans-serif] text-[60px] text-white/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  {service.number}
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 flex items-start gap-[24px]">
                  <motion.div 
                    className="flex-shrink-0 w-[90px] h-[90px] flex items-center justify-center bg-black/20 rounded-[12px] backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={service.img} alt={service.title} className="w-[70px] h-[70px] object-contain" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="font-['Delight_Semi_Bold',sans-serif] text-[22px] text-white mb-[10px]">
                      {service.title}
                    </h3>
                    <p className="font-['Arimo',sans-serif] text-[14px] leading-[1.7] text-[#d4d4d4]">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent with animation */}
                <motion.div 
                  className="absolute top-0 right-0 w-[80px] h-[80px] bg-gradient-to-bl from-[#fdd2b0]/10 to-transparent"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-[80px] px-[20px] bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2
            className="font-['Delight_Semi_Bold',sans-serif] text-[36px] sm:text-[44px] leading-[1.2] text-white mb-[24px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Let's Create<br />Something Amazing
          </motion.h2>

          <motion.p
            className="font-['Arimo',sans-serif] text-[14px] leading-[1.6] text-[#d4d4d4] mb-[36px] max-w-[340px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your vision to life? Get in touch with us today
          </motion.p>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwJEZ4EhHuW1CzAyNztTjyP1YxbZCTG5S5njmUQAuVFdEu7A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white font-['Arimo',sans-serif] font-semibold text-[15px] tracking-wide rounded-full border-2 border-dashed border-white/40 hover:border-[#fdd2b0] hover:text-[#fdd2b0] hover:bg-[#fdd2b0]/5 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            START A PROJECT
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="relative py-[70px] px-[20px] bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          {/* Quote with Monkey Image */}
          <motion.div 
            className="relative text-center mb-[52px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Monkey Image - Cropped Circle */}
            <motion.div
              className="mx-auto mb-[24px] w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-[#fdd2b0]/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img 
                src={imgHeroMonkey} 
                alt="" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <motion.p 
              className="font-['Delight_Light',sans-serif] text-[20px] leading-[1.6] text-[#fbe1c4]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              "Your Growth Starts With<br />A Clear Brand."
            </motion.p>
          </motion.div>

          {/* CleanSheet Logo Text */}
          <motion.div 
            className="text-center mb-[44px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Arimo',sans-serif] font-bold text-[52px] sm:text-[68px] leading-[1] text-white mb-[8px]">
              Clean<span className="font-normal">Sheet</span>
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-[36px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Contact Info */}
          <motion.div 
            className="space-y-[28px] mb-[36px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email */}
            <div className="text-center">
              <a 
                href="mailto:work.with.cleansheet@gmail.com"
                className="font-['Arimo',sans-serif] text-[14px] text-white/80 hover:text-[#fdd2b0] transition-colors duration-300"
              >
                work.with.cleansheet@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-[40px] justify-center">
              <a 
                href="https://www.behance.net/cleansheet_studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Arimo',sans-serif] text-[12px] uppercase tracking-[0.12em] text-white/80 hover:text-[#fdd2b0] transition-colors duration-300"
              >
                Behance
              </a>
              <a 
                href="https://linkedin.com/company/cleansheet-studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Arimo',sans-serif] text-[12px] uppercase tracking-[0.12em] text-white/80 hover:text-[#fdd2b0] transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Logo Image */}
          <motion.div 
            className="flex justify-center mb-[28px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={imgImage} alt="CleanSheet" className="h-[28px] w-auto opacity-70" />
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Arimo',sans-serif] text-[11px] text-white/40">
              © {new Date().getFullYear()} CleanSheet Studio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-[24px] right-[24px] w-[52px] h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all z-[100] shadow-lg"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={22} className="text-white" />
        </motion.button>
      )}
    </div>
  );
}