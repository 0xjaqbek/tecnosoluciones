import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const ScrollReveal = ({
  children,
  baseOpacity = 0,
  baseScale = 0.95,
  baseY = 20,
  baseBlur = 0,
  baseRotation = 0,
  enableBlur = false,
  blurStrength = 5,
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: baseOpacity,
        y: baseY,
        scale: baseScale,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${baseBlur}px)` : 'none',
      }}
      animate={{
        opacity: inView ? 1 : baseOpacity,
        y: inView ? 0 : baseY,
        scale: inView ? 1 : baseScale,
        rotate: inView ? 0 : baseRotation,
        filter: inView 
          ? enableBlur ? `blur(0px)` : 'none' 
          : enableBlur ? `blur(${blurStrength}px)` : 'none',
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 0.77, 0.47, 0.97],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;