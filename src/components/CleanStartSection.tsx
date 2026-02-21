import { motion } from "motion/react";

export function CleanStartSection() {
  return (
    <div 
      className="relative bg-[#1c1c1c] flex min-h-[900px] items-center justify-center pointer-events-auto px-[253px] py-32 mx-[-120px] w-[1920px] border-t border-b border-white/5" 
      data-name="clean-start-section"
    >
      {/* Subtle corner accents - top left and bottom right */}
      <motion.div 
        className="absolute top-0 left-[120px] w-[120px] h-[120px] border-l-2 border-t-2 border-[#fdd2b0]/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-0 right-[120px] w-[120px] h-[120px] border-r-2 border-b-2 border-[#fdd2b0]/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Subtle background glow - center focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fdd2b0]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Content container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Quote mark or decorative element */}
        <motion.div 
          className="mb-12 opacity-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-[#fdd2b0]">
            <path d="M0 60V36C0 16.12 12.4 2.8 34 0L38 8C23.6 10.8 18 18.64 18 28V36H38V60H0ZM42 60V36C42 16.12 54.4 2.8 76 0L80 8C65.6 10.8 60 18.64 60 28V36H80V60H42Z" fill="currentColor"/>
          </svg>
        </motion.div>
        
        {/* Main quote text */}
        <motion.div
          className="max-w-[1200px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="font-['Delight:Light',sans-serif] text-[48px] leading-[1.3] text-[#d4d4d4] tracking-[-0.02em]">
            Every strong brand begins the same way —
          </h2>
          
          <h2 className="font-['Delight:Semi_Bold',sans-serif] text-[48px] leading-[1.25] text-white tracking-[-0.02em]">
            with a clear idea and a clean start.
          </h2>
        </motion.div>
        
        {/* Elegant divider line */}
        <motion.div 
          className="h-[1px] bg-gradient-to-r from-transparent via-[#fdd2b0]/40 to-transparent rounded-full mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: "300px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
        
        {/* Closing statement */}
        <motion.p 
          className="font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8] text-[#c0c0c0] text-center mb-16 tracking-[-0.01em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          That's what Cleansheet is here for.
        </motion.p>
        
        {/* Refined CTA section */}
        <motion.div 
          className="flex flex-col items-center gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="font-['Delight:Light',sans-serif] text-[24px] leading-[1.6] text-[#b8b8b8] tracking-wide uppercase">
            Ready to grow your brand with clarity?
          </p>
          
          {/* Minimal, elegant button */}
          <motion.a
            href="#contact"
            className="group relative px-12 py-5 bg-transparent border-2 border-white text-white font-['Delight:Semi_Bold',sans-serif] text-[16px] tracking-[0.05em] uppercase rounded-none overflow-hidden transition-all duration-500 hover:border-[#fdd2b0] hover:text-[#0a0a0a]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Fill animation on hover */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <div className="absolute inset-0 bg-[#fdd2b0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75" />
            
            <span className="relative z-10 flex items-center gap-3">
              Work with Cleansheet
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-2">
                <path d="M14 1L19 6M19 6L14 11M19 6H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}