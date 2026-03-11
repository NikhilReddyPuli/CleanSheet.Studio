import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import imgAboutHero from "figma:asset/fd2931788792859ae9abdb38dba933ad779cc8fb.png";
import aboutMonkeyImg from "figma:asset/6aa087fedc5daab8d54dfe3593658e4b32ab2d85.png";
import imgUnderlineAccent from "figma:asset/f9b53a99cecafb68614f538bcf0b7616ab850b68.png";
import searchIcon from "figma:asset/5f2b10fc86419d5fec63c086d45d3c3e1d4412be.png";
import funnelIcon from "figma:asset/4ce10d1da1d4762c957d1e45c786a9fdbcba6565.png";
import paletteIcon from "figma:asset/a6867ea0f8468426ca03dfaa7865235e0f43ff84.png";
import rocketIcon from "figma:asset/38011b748b0dbede78b0132ba780d9e25c890065.png";
import imgHeroMonkey from "figma:asset/fd2931788792859ae9abdb38dba933ad779cc8fb.png";
import imgImage from "figma:asset/f8128c57025ddbaa59b269bb59d872ec6e4a7ac0.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

// Word-by-word reveal component  
function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.08,
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

export function MobileAbout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroImageY = useTransform(heroScrollProgress, [0, 1], ["0%", "20%"]);
  const heroImageOpacity = useTransform(heroScrollProgress, [0, 0.7, 1], [1, 0.5, 0]);

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

  const philosophyPoints = [
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
  ];

  const services = [
    { 
      name: "Brand Identity",
      description: "Visual systems that reflect brand strategy, not trends. Logos, colors, typography, guidelines."
    },
    { 
      name: "UI/UX Design",
      description: "Digital interfaces designed for clarity and usability. Web, mobile, SaaS products."
    },
    { 
      name: "Pitch Decks",
      description: "Investor presentations that communicate vision clearly. Structure, narrative, visual design."
    },
    { 
      name: "Print Design",
      description: "Physical collateral designed with the same rigor as digital. Business cards, packaging, editorial."
    },
    { 
      name: "Consultation",
      description: "Strategic guidance on brand direction, visual systems, and design decisions. Clarity without execution."
    }
  ];

  const processSteps = [
    {
      icon: searchIcon,
      title: "Discovery",
      description: "Understanding your brand, audience, and challenges through research and conversation."
    },
    {
      icon: funnelIcon,
      title: "Strategy",
      description: "Defining clear direction and objectives that guide the creative process."
    },
    {
      icon: paletteIcon,
      title: "Design",
      description: "Creating visual solutions with intention, clarity, and restraint."
    },
    {
      icon: rocketIcon,
      title: "Delivery",
      description: "Providing organized files, guidelines, and ongoing support for implementation."
    }
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

      {/* Hero Section - Main Statement */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col items-center justify-center px-[24px] py-[100px] mt-[60px] overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]"
          style={{ 
            y: useTransform(heroScrollProgress, [0, 1], ["0%", "15%"])
          }}
        />

        <div className="relative z-10 text-center max-w-[500px]">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[11px] tracking-[0.15em] uppercase font-medium">About Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-['Delight_Semi_Bold',sans-serif] text-[36px] sm:text-[42px] leading-[1.15] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From the frustration of{" "}
            <span className="relative inline-block">
              unclear branding.
              <motion.img 
                src={imgUnderlineAccent}
                alt=""
                className="absolute left-0 bottom-[-4px] h-[6px] w-full object-cover object-left opacity-80"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.8, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            <br />
            With the clarity of{" "}
            <span className="text-[#fdd2b0] whitespace-nowrap">
              <span className="font-['Imperial_Script',cursive] text-[48px] inline-block leading-[0.82]">S</span>trategic{" "}
              <span className="font-['Imperial_Script',cursive] text-[48px] inline-block leading-[0.82]">D</span>esign.
            </span>
          </motion.h1>

          <motion.p
            className="font-['Arimo',sans-serif] text-[15px] leading-[1.7] text-[#c0c0c0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cleansheet is a design studio built on clarity, restraint, and intent — helping brands strip away noise and communicate with purpose.
          </motion.p>
        </div>
      </section>

      {/* Vision Section - Why It Matters */}
      <section className="relative py-[80px] px-[24px] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[11px] tracking-[0.15em] uppercase font-medium">Why It Matters</span>
          </motion.div>

          {/* Image */}
          <motion.div
            className="mb-8 rounded-[20px] overflow-hidden border border-white/10 bg-white/5 p-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={aboutMonkeyImg} 
              alt="Vision" 
              className="w-full h-auto object-contain rounded-[16px]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-['Delight_Semi_Bold',sans-serif] text-[32px] sm:text-[36px] leading-[1.2] text-white mb-6">
              Not to compete with AI.
            </h2>

            <div className="space-y-5 text-[#c0c0c0] font-['Arimo',sans-serif] text-[15px] leading-[1.8]">
              <p>
                But to bring <span className="text-white font-semibold">human judgment</span>, <span className="text-white font-semibold">clarity</span>, and <span className="text-white font-semibold">restraint</span> back into design.
              </p>
              
              <p>
                In a world where anyone can generate visuals instantly, the value isn't in speed — it's in knowing what to make, why it matters, and what to leave out.
              </p>

              <p className="text-white font-semibold text-[16px] pt-3">
                That's where Cleansheet comes in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-[80px] px-[24px] bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[11px] tracking-[0.15em] uppercase font-medium">Our Philosophy</span>
          </motion.div>

          <motion.h2
            className="font-['Delight_Semi_Bold',sans-serif] text-[32px] sm:text-[36px] leading-[1.2] text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Design that respects intelligence.
          </motion.h2>

          {/* Philosophy Points */}
          <div className="space-y-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="pb-8 border-b border-white/5 last:border-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-['Delight_Semi_Bold',sans-serif] text-[20px] text-white mb-4">
                  {point.title}
                </h3>
                <p className="font-['Arimo',sans-serif] text-[15px] leading-[1.8] text-[#c0c0c0]">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-[80px] px-[24px] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[11px] tracking-[0.15em] uppercase font-medium">What I Do</span>
          </motion.div>

          <motion.h2
            className="font-['Delight_Semi_Bold',sans-serif] text-[32px] sm:text-[36px] leading-[1.2] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Strategic design services.
          </motion.h2>

          <motion.p
            className="font-['Arimo',sans-serif] text-[15px] leading-[1.8] text-[#c0c0c0] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I help brands communicate clearly through thoughtful visual systems and strategic design.
          </motion.p>

          {/* Service Pills */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden p-6 bg-white/5 backdrop-blur-sm rounded-[16px] border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <h3 className="font-['Arimo',sans-serif] font-semibold text-[18px] text-white mb-3 tracking-[0.02em] uppercase">
                  {service.name}
                </h3>
                <p className="font-['Arimo',sans-serif] text-[14px] leading-[1.7] text-[#c0c0c0]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-[80px] px-[24px] bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[11px] tracking-[0.15em] uppercase font-medium">Our Process</span>
          </motion.div>

          <motion.h2
            className="font-['Delight_Semi_Bold',sans-serif] text-[32px] sm:text-[36px] leading-[1.2] text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The Cleansheet approach.
          </motion.h2>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.1, borderColor: "rgba(253, 210, 176, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={step.icon} alt="" className="w-[30px] h-[30px] object-contain opacity-80" />
                </motion.div>
                
                <div className="flex-1 pt-2">
                  <h3 className="font-['Delight_Semi_Bold',sans-serif] text-[20px] text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-['Arimo',sans-serif] text-[14px] leading-[1.7] text-[#c0c0c0]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-[80px] px-[24px] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2
            className="font-['Delight_Semi_Bold',sans-serif] text-[36px] sm:text-[42px] leading-[1.2] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ready to Work<br />Together?
          </motion.h2>

          <motion.p
            className="font-['Arimo',sans-serif] text-[15px] leading-[1.6] text-[#c0c0c0] mb-8 max-w-[340px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how we can help bring your vision to life with clarity and purpose.
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
            GET IN TOUCH
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