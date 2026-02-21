import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type LineRevealProps = {
  text: string;
  className?: string;
};

export function LineReveal({ text, className = "" }: LineRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"]
  });

  // Split text into lines based on content
  const lines = [
    "In a world full of loud brands, hyper-stimulation, and AI-generated clutter,",
    "I create the opposite: design that feels intentional, modern, and calm —",
    "yet powerful enough to convert. I help founders, marketers, and product",
    "teams build brands people instantly understand  and naturally trust."
  ];

  return (
    <p ref={ref} className={className}>
      {lines.map((line, index) => {
        // Each line fades in sequentially with clear visibility change
        const start = index / lines.length;
        const end = (index + 0.8) / lines.length;
        
        const lineOpacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.1, 1]
        );
        
        const lineY = useTransform(
          scrollYProgress,
          [start, end],
          [30, 0]
        );

        return (
          <motion.span
            key={index}
            style={{ 
              opacity: lineOpacity,
              y: lineY,
              display: "inline-block",
              willChange: "opacity, transform"
            }}
          >
            {line}
            {index < lines.length - 1 && " "}
          </motion.span>
        );
      })}
    </p>
  );
}