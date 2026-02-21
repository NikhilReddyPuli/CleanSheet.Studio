import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'motion/react';

type ParallaxSpeed = 'slow' | 'medium' | 'fast';

/**
 * useParallax - Custom hook for scroll-driven parallax effects
 * 
 * Speed hierarchy (as % of scroll speed):
 * - slow: 0.3-0.4x (for headings)
 * - medium: 0.5-0.6x (for body text)
 * - fast: 0.7-0.8x (for images)
 * 
 * @returns ref to attach to element and y MotionValue for transform
 */
export function useParallax(speed: ParallaxSpeed = 'medium'): {
  ref: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map speed to transform range
  // Negative values create upward movement as you scroll down
  const ranges: Record<ParallaxSpeed, [number, number]> = {
    slow: [0, -60],    // Headings: slowest movement (0.3-0.4x)
    medium: [0, -100],  // Body text: medium speed (0.5-0.6x)
    fast: [0, -140]     // Images: fastest movement (0.7-0.8x)
  };

  const y = useTransform(scrollYProgress, [0, 1], ranges[speed]);

  return { ref, y };
}
