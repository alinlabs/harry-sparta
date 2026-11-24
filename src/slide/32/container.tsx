import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export const Container: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <img
        src={isDark ? '/mockup-dark.webp' : '/mockup-light.webp'}
        alt=""
        draggable={false}
        className="w-full h-auto block select-none"
      />
      <img
        src={isDark ? '/mockup-light.webp' : '/mockup-dark.webp'}
        alt=""
        aria-hidden="true"
        className="hidden"
      />
    </motion.div>
  );
};

export default Container;
