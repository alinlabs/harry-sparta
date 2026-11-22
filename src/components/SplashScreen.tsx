import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DmsLogo from './DmsLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

const TOTAL_DURATION_MS = 3800;

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
      setProgress(currentPct);

      if (elapsed >= TOTAL_DURATION_MS) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 120);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-white dark:bg-brand-900 text-slate-900 dark:text-white flex items-center justify-center overflow-hidden transition-colors duration-200 select-text"
    >
      {/* Clean Subtle Radial Ambience (No heavy blur filter layers) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-200"
          style={{
            background:
              'radial-gradient(circle at 12% 10%, rgba(241, 245, 249, 0.9) 0%, transparent 50%), radial-gradient(circle at 88% 90%, rgba(254, 226, 226, 0.45) 0%, transparent 45%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-200"
          style={{
            background:
              'radial-gradient(circle at 12% 10%, rgba(15, 23, 42, 0.7) 0%, transparent 55%), radial-gradient(circle at 88% 90%, rgba(127, 29, 29, 0.22) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10 max-w-4xl"
      >
        {/* Brand Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 flex flex-col items-center relative"
        >
          <DmsLogo size="lg" showText={false} />
        </motion.div>

        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-slate-800 dark:text-slate-200 mb-3"
        >
          PT SPARTA COMPUTINDO TEKNOLOGI
        </motion.div>

        {/* Slogan / Presentation Theme */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3 text-balance"
        >
          Mitra Siklus Hidup Aset
          <span className="block mt-1 text-red-600 dark:text-red-400">
            dan Infrastruktur IT
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-medium mb-4"
        >
          Dari Kekuatan Perdagangan IT Menuju Ekosistem Solusi Teknologi Terintegrasi
        </motion.p>

        {/* Presenter Name */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide mt-2 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="font-bold text-slate-900 dark:text-white">Harry Gultom</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Kandidat Sales Manager</span>
        </motion.div>
      </motion.div>

      {/* Loading line indicator at the very bottom of the screen */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-1 sm:h-1.5 bg-slate-100 dark:bg-slate-800/60 z-50 overflow-hidden">
        <div
          className="h-full bg-red-600 dark:bg-red-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
