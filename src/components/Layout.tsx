import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';
import Header from './Header';
import Sidebar, { SlideItem } from './Sidebar';
import BottomAction from './BottomAction';
import LiveWallpaperBackground from './LiveWallpaperBackground';

interface LayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  transitionKey?: string;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  title: string;
  sectionTitle?: string;
  hideHeaderBrand?: boolean;
  slides?: SlideItem[];
  onSelectSlide?: (index: number) => void;
  onExitPresentation?: () => void;
  initialSidebarOpen?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  transitionKey,
  totalSlides, 
  nextSlide, 
  prevSlide,
  title,
  sectionTitle,
  hideHeaderBrand = false,
  slides = [],
  onSelectSlide = () => {},
  onExitPresentation,
  initialSidebarOpen = true,
}) => {
  const { isLocked } = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialSidebarOpen);
  const [isFullView, setIsFullView] = useState(false);
  const mainScrollRef = useRef<HTMLElement | null>(null);

  const resetScrollToTop = () => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
      const nestedScrollables = mainScrollRef.current.querySelectorAll<HTMLElement>('[class*="overflow-y-auto"], [class*="overflow-auto"]');
      nestedScrollables.forEach((el) => {
        el.scrollTop = 0;
      });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Pastikan posisi scroll kembali ke paling atas saat slide berganti
  useLayoutEffect(() => {
    resetScrollToTop();
  }, [currentSlide]);

  // Sync with fullscreen change and Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      const inFullscreen = !!document.fullscreenElement;
      setIsFullView(inFullscreen);
      if (inFullscreen) {
        setIsSidebarOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullView) {
        setIsFullView(false);
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullView]);

  const handleToggleFullView = () => {
    setIsFullView((prev) => {
      const next = !prev;
      if (next) {
        setIsSidebarOpen(false);
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
      return next;
    });
  };

  // Logic untuk navigasi klik area dominan luar konten
  const handleScreenClick = (e: React.MouseEvent) => {
    // Block interaction if locked or sidebar open
    if (isLocked || (isSidebarOpen && !isFullView)) return;

    // Jangan trigger navigasi jika user sedang memblok/menyeleksi teks
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      return;
    }

    const target = e.target as HTMLElement;

    // 1. Cek apakah yang diklik adalah elemen interaktif spesifik
    const isInteractive = 
      target.closest('button') || 
      target.closest('a') || 
      target.closest('input') || 
      target.closest('.recharts-wrapper') ||
      target.closest('aside') ||
      target.closest('footer');

    if (isInteractive) return;

    // 2. Cek apakah klik terjadi di dalam area konten utama
    if (target.closest('.main-content-wrapper')) {
      return;
    }

    const width = window.innerWidth;
    const clickX = e.clientX;

    // Dominan Kanan = Next, Dominan Kiri = Prev
    if (clickX > width / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const slideKey = transitionKey ?? String(currentSlide);

  return (
    <div 
      className={`relative h-screen w-full sparta-root-surface bg-white dark:bg-brand-950 text-slate-900 dark:text-white overflow-hidden flex ${isLocked ? 'cursor-wait pointer-events-none' : 'cursor-default'}`}
      onClick={handleScreenClick}
    >
      {/* KIRI: Unified Sidebar (full height 100vh) - Tersembunyi saat Full View aktif */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && !isFullView && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-screen flex-shrink-0 z-30 overflow-hidden isolate transform-gpu [backface-visibility:hidden]"
          >
            <Sidebar
              mode="docked"
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              slides={slides}
              currentSlide={currentSlide}
              onSelectSlide={(index) => {
                onSelectSlide(index);
              }}
              onStartPresentation={() => setIsSidebarOpen(false)}
              onExitPresentation={onExitPresentation}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* KANAN: Main Layout Area (Header, Slide Content, and BottomAction) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10 w-full min-w-0 sparta-main-surface bg-white dark:bg-brand-900 isolate">
        {/* Fluid Live Wallpaper Ambience scoped strictly inside main pane */}
        <LiveWallpaperBackground />

        {/* Top Header */}
        <Header 
          title={title}
          sectionTitle={sectionTitle} 
          hideHeaderBrand={hideHeaderBrand}
          onExitPresentation={onExitPresentation} 
          isLocked={isLocked}
          onOpenSidebar={() => {
            if (isFullView) {
              setIsFullView(false);
              if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
              }
            }
            setIsSidebarOpen(prev => !prev);
          }}
          isFullView={isFullView}
          onToggleFullView={handleToggleFullView}
        />

        {/* Slide Content Area - GPU-accelerated smooth transition without filter:blur tearing */}
        <main
          ref={mainScrollRef}
          className="flex-1 relative z-10 w-full overflow-y-auto overflow-x-hidden no-scrollbar [overflow-anchor:none]"
        >
          <div
            className={`min-h-full flex flex-col items-center justify-start ${
              hideHeaderBrand ? 'p-0' : isFullView ? 'p-2 sm:p-4 md:p-6' : 'p-3 sm:p-6 md:p-8'
            }`}
          >
            <AnimatePresence mode="wait" initial={false} onExitComplete={resetScrollToTop}>
              <motion.div
                key={slideKey}
                initial={{ opacity: 0, y: hideHeaderBrand ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: hideHeaderBrand ? 0 : -6 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={
                  hideHeaderBrand
                    ? 'w-full flex flex-col justify-start main-content-wrapper transform-gpu'
                    : 'w-full max-w-[1600px] mx-auto my-auto flex flex-col justify-start main-content-wrapper transform-gpu'
                }
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Bottom Action Bar - Menampilkan full controls saat mode normal, dan hanya progress line per page saat full view */}
        <BottomAction
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={nextSlide}
          onPrev={prevSlide}
          onOpenSidebar={() => {
            if (isFullView) {
              setIsFullView(false);
              if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
              }
            }
            setIsSidebarOpen(prev => !prev);
          }}
          onExitPresentation={onExitPresentation}
          currentTitle={title}
          isLocked={isLocked}
          isFullView={isFullView}
        />
      </div>
    </div>
  );
};

export default Layout;
