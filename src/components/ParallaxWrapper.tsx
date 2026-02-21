import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type ParallaxSpeed = 'slow' | 'medium' | 'fast';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: ParallaxSpeed;
  className?: string;
}

/**
 * ParallaxWrapper - Creates scroll-driven parallax effects
 * 
 * Speed mappings:
 * - slow (headings): moves at 0.3x scroll speed
 * - medium (body text): moves at 0.5x scroll speed  
 * - fast (images): moves at 0.7x scroll speed
 */
export function ParallaxWrapper({ children, speed = 'medium', className = '' }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Define transform ranges based on speed
  // Negative values create upward movement as you scroll down
  const transformRanges: Record<ParallaxSpeed, [number, number]> = {
    slow: [0, -80],     // Headings move slowest (0.3-0.4x)
    medium: [0, -120],  // Body text medium speed (0.5-0.6x)
    fast: [0, -160]     // Images move fastest (0.7-0.8x)
  };

  const y = useTransform(scrollYProgress, [0, 1], transformRanges[speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
