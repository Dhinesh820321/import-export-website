import { motion } from 'framer-motion';

/**
 * Wraps children with a slide-up + fade-in animation triggered on scroll.
 * Each instance independently observes the viewport via IntersectionObserver,
 * so it works correctly inside MUI Grid without requiring a motion parent chain.
 *
 * @param {number} delay    - Delay in seconds before animation starts
 * @param {number} duration - Animation duration in seconds
 * @param {number} y        - Starting Y offset in pixels
 */
function ScrollReveal({ children, delay = 0, duration = 0.6, y = 40, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={{ overflow: 'visible', ...style }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
