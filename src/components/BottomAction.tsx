import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomActionProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onOpenSidebar?: () => void;
  onExitPresentation?: () => void;
  currentTitle?: string;
  isLocked?: boolean;
  isFullView?: boolean;
}

export const BottomAction: React.FC<BottomActionProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onOpenSidebar,
  isLocked = false,
  isFullView = false,
}) => {
  const { language } = useLanguage();
  const progressPercentage = Math.round(((currentSlide + 1) / totalSlides) * 100);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - 1;

  if (isFullView) {
    return (
      <footer 
        className="w-full shrink-0 z-40 bg-transparent select-none transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Line per page tetap ada di full view */}
        <div className="w-full h-1 bg-slate-200/80 dark:bg-slate-800 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-600 via-rose-600 to-red-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </footer>
    );
  }

  return (
    <footer 
      className="w-full shrink-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.25)] select-none"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Slide Progress Bar */}
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-600 via-rose-600 to-red-500 transition-[width] duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-[1600px] mx-auto py-2.5 flex items-center justify-between">
          {/* KIRI: Tombol Sebelumnya (Hanya ChevronLeft tanpa teks & tanpa card) */}
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirstSlide || isLocked}
            className={`inline-flex items-center justify-center p-1.5 bg-transparent border-0 shadow-none transition-colors active:scale-95 ${
              isFirstSlide || isLocked
                ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-600'
                : 'cursor-pointer text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400'
            }`}
            aria-label={language === 'en' ? 'Previous slide' : 'Halaman sebelumnya'}
            title={language === 'en' ? 'Previous Slide (Left Arrow)' : 'Halaman Sebelumnya (Panah Kiri)'}
          >
            <ChevronLeft size={22} />
          </button>

          {/* TENGAH: Format angka halaman tanpa card atau badge dengan font teks normal */}
          <div 
            onClick={onOpenSidebar}
            className="cursor-pointer text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            title={language === 'en' ? "Click to open slide outline" : "Klik untuk membuka Ikhtisar Slide"}
          >
            <span>{currentSlide + 1}/{totalSlides}</span>
          </div>

          {/* KANAN: Tombol Berikutnya (Hanya ChevronRight tanpa teks & tanpa card) */}
          <button
            type="button"
            onClick={onNext}
            disabled={isLocked}
            className={`inline-flex items-center justify-center p-1.5 bg-transparent border-0 shadow-none transition-colors active:scale-95 ${
              isLocked
                ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-600'
                : 'cursor-pointer text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400'
            }`}
            aria-label={isLastSlide ? (language === 'en' ? 'Finish presentation' : 'Selesai presentasi') : (language === 'en' ? 'Next slide' : 'Halaman berikutnya')}
            title={isLastSlide ? (language === 'en' ? 'Finish Presentation' : 'Selesai Presentasi') : (language === 'en' ? 'Next Slide (Right Arrow / Space)' : 'Halaman Berikutnya (Panah Kanan / Spasi)')}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BottomAction;
