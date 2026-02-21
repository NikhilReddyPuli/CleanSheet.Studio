import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** Range of vertical movement in pixels. Larger = more movement */
  range?: number;
}

/**
 * ParallaxSection - Wraps a section with scroll-driven parallax
 * Creates subtle depth by moving content relative to scroll position
 * Does not interfere with existing animations
 */
export function ParallaxSection({ children, className = '', range = 100 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to Y transform
  // Elements move up as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], [0, -range]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
