import { motion, useScroll, useTransform } from "motion/react";
import imgUnderlineAccent from "figma:asset/f9b53a99cecafb68614f538bcf0b7616ab850b68.png";
import intentionBgImage from "figma:asset/b578b437b831946edf04cae069df0ea8c3f92ffe.png";

export function IntentionSection() {
  const { scrollY } = useScroll({ layoutEffect: false });
  
  return (
    <div className="relative h-[1080px] w-full min-w-[1920px] overflow-hidden flex items-center justify-center" data-name="Intention">
      {/* Background Image */}
      <img 
        src={intentionBgImage} 
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
      
      {/* Content container - centered */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-[90px] text-center">
        {/* Main heading with Imperial Script "I" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-['Arimo',sans-serif] font-normal text-white m-0 leading-[78px]">
            {/* "I" with Imperial Script */}
            <motion.span 
              className="font-['Imperial_Script',cursive] text-[98px] leading-[78px] inline-block mr-[0.25em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              I
            </motion.span>
            
            {/* "create" */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block mr-[0.25em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              create
            </motion.span>
            
            {/* "designs" */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block mr-[0.25em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              designs
            </motion.span>
            
            {/* "that's" */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              that's
            </motion.span>
            
            <br />
            
            {/* "intentional," */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block mr-[0.25em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              intentional,
            </motion.span>
            
            {/* "modern," */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              modern,
            </motion.span>
            
            <br />
            
            {/* "and" */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block mr-[0.25em]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              and
            </motion.span>
            
            {/* "calm." */}
            <motion.span 
              className="text-[68px] leading-[78px] inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              calm.
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Body text */}
        <motion.p
          className="mt-[80px] font-['Delight:Regular',sans-serif] text-[20px] leading-[1.8] m-0 mx-auto max-w-[701px] text-[#c0c0c0]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          In a world full of loud brands and AI-generated clutter, I create design that feels powerful enough to convert. I help founders build brands people instantly understand and naturally trust.
        </motion.p>
      </div>
    </div>
  );
}