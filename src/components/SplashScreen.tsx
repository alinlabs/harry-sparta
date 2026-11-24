import { useLanguage } from '../contexts/LanguageContext';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DmsLogo from './DmsLogo';
import LiveWallpaperBackground from './LiveWallpaperBackground';

interface SplashScreenProps {
  onComplete: () => void;
}

const TOTAL_DURATION_MS = 3800;

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);

  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const startTime = Date.now();
    let timeoutId: number | undefined;
    let completed = false;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
      setProgress(currentPct);

      if (elapsed >= TOTAL_DURATION_MS && !completed) {
        completed = true;
        window.clearInterval(interval);
        timeoutId = window.setTimeout(() => {
          onCompleteRef.current();
        }, 120);
      }
    }, 20);

    return () => {
      window.clearInterval(interval);
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 sparta-splash-surface bg-white dark:bg-brand-900 text-slate-900 dark:text-white flex items-center justify-center overflow-hidden select-text transform-gpu [backface-visibility:hidden] will-change-[opacity]"
    >
      {/* Background Ambience */}
      <LiveWallpaperBackground />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.015, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10 max-w-4xl transform-gpu"
      >
        {/* Brand Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 flex flex-col items-center relative"
        >
          <div className="absolute inset-0 bg-red-500/20 dark:bg-red-500/25 rounded-full blur-2xl scale-125 pointer-events-none" />
          <DmsLogo size="lg" showText={false} />
        </motion.div>

        {/* Company Header - Warna Hitam */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-black dark:text-white mb-2.5"
        >
          PT. SPARTA COMPUTINDO
        </motion.div>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3"
        >
          COMMERCIAL TRANSFORMATION
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500 dark:from-red-400 dark:via-rose-400 dark:to-red-300">
            &amp; GROWTH ROADMAP
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-medium mb-4"
        >
          {language === 'en'
            ? 'Building a measurable, profitable, and scalable commercial system across People, Process, Product, and Data.'
            : 'Membangun sistem penjualan yang terukur, menguntungkan, dan dapat berkembang melalui penyelarasan People, Process, Product, dan Data.'}
        </motion.p>

        {/* Presenter Name: By Harry Gultom */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 tracking-wide mt-2"
        >
          By Harry Gultom
        </motion.div>
      </motion.div>

      {/* Loading line indicator at the very bottom of the screen */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-1 sm:h-1.5 bg-slate-100 dark:bg-slate-800/60 z-50 overflow-hidden">
        <div
          className="h-full bg-red-600 dark:bg-red-500 transition-[width] duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
