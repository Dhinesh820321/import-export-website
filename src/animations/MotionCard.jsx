import { motion } from 'framer-motion';

/**
 * Wrapper for cards with hover scale + shadow animation and
 * scroll-triggered fade-in reveal.
 */
function MotionCard({ children, delay = 0, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      style={{ height: '100%', ...style }}
    >
      {children}
    </motion.div>
  );
}

export default MotionCard;
