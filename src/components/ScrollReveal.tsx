import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 40 
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px", amount: 0.15 }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Out-quint ease curve for silky-smooth motion
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
