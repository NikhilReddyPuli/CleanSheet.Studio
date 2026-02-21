import { motion } from "motion/react";
import signatureImage from "figma:asset/2a19f9517ec81655c227aaeac63d28c6a6f1cb05.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  // Define the text as a single string with line breaks
  const fullText = `DESIGN IS THE ART OF SUBTRACTION.
LIFE IS THE DISCIPLINE OF IT.
WHEN YOU REMOVE THE EXCESS,
YOU DON'T LOSE SUBSTANCE—
     YOU GAIN CLARITY.`;

  // Convert to array of characters with their positions
  const textLines = fullText.split('\n');

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-[10000] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        // Auto-complete loading after typing finishes (4 seconds max)
        setTimeout(() => {
          onLoadingComplete();
        }, 4000);
      }}
    >
      {/* Main content container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-[120px]">
        
        {/* Center text content */}
        <div className="flex flex-col items-center justify-center">
          
          {/* Quote text with character-by-character typing effect */}
          <div className="text-left font-['Delight:Light',sans-serif] text-[#d4d4d4] text-[18px] leading-[2] tracking-[0.5px] mb-[60px]">
            {textLines.map((line, lineIndex) => {
              // Calculate starting character index for this line
              let startCharIndex = 0;
              for (let i = 0; i < lineIndex; i++) {
                startCharIndex += textLines[i].length + 3; // +3 for line break pause (reduced)
              }
              
              const isLastLine = lineIndex === textLines.length - 1;
              
              return (
                <p key={lineIndex} className="m-0">
                  {line.split('').map((char, charIndex) => {
                    const globalCharIndex = startCharIndex + charIndex;
                    const delay = 0.2 + globalCharIndex * 0.018; // Faster typing: 18ms per char
                    const nextCharDelay = 0.2 + (globalCharIndex + 1) * 0.018;
                    const isLastChar = isLastLine && charIndex === line.length - 1;
                    
                    return (
                      <span key={charIndex} className="inline-block relative">
                        <motion.span
                          className="inline-block"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.1, 
                            delay: delay
                          }}
                          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                        >
                          {char}
                        </motion.span>
                        {/* Show cursor after this character, hide when next char appears */}
                        <motion.span
                          className="inline-block w-[2px] h-[18px] bg-[#d4d4d4] ml-[2px] align-middle"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: isLastChar ? 1 : [0, 1, 1, 0]
                          }}
                          transition={{
                            duration: isLastChar ? 0.1 : 0.06,
                            delay: delay + 0.05,
                            times: isLastChar ? undefined : [0, 0.1, 0.9, 1]
                          }}
                          style={{
                            position: 'absolute',
                            animation: isLastChar ? `blink 0.8s step-end infinite` : 'none',
                            animationDelay: isLastChar ? `${delay + 0.15}s` : undefined
                          }}
                        />
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </div>

          {/* Signature - appears after text is fully typed */}
          <motion.div
            className="w-[200px] h-auto ml-[200px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <img 
              src={signatureImage} 
              alt="Signature" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Loading spinner - bottom left */}
        <motion.div
          className="absolute left-[100px] bottom-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="relative w-[40px] h-[40px]">
            {/* Spinning circle */}
            <motion.div
              className="absolute inset-0 border-2 border-[#d4d4d4]/20 border-t-[#d4d4d4] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          <motion.p
            className="text-[#d4d4d4] font-['Delight:Regular',sans-serif] text-[12px] tracking-[1px] uppercase mt-[12px] text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            LOADING
          </motion.p>
        </motion.div>

        {/* Edition text - bottom right */}
        <motion.div
          className="absolute right-[100px] bottom-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-[#d4d4d4]/60 font-['Delight:Regular',sans-serif] text-[14px] tracking-[1px] uppercase">
            CLEANSHEET.STUDIO
          </p>
        </motion.div>

        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
    </motion.div>
  );
}