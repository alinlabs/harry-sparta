/// <reference types="vite/client" />
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage, Language } from './contexts/LanguageContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { DetailModalProvider } from './components/ui';

// Components
import SplashScreen from './components/SplashScreen';
import NotFoundPage from './components/NotFoundPage';

// URL & Cache Manager
import {
  parseUrl,
  syncBrowserUrl,
  setCachedTheme,
  setCachedLang,
  ParseResult,
  Theme,
} from './utils/urlManager';

// Centralized Slide Registry (Single Source of Truth with Sidebar & Directories)
import { getSlidesConfig } from './slide/registry';

interface AppContentProps {
  initialPage?: number;
  hasInitialPage: boolean;
}

function AppContent({ initialPage, hasInitialPage }: AppContentProps) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const slides = getSlidesConfig(language);

  // If URL already had a valid page (e.g. ?theme=light&lang=en&page=5), start on that slide (5 - 1 = 4)
  const [currentSlide, setCurrentSlide] = useState<number>(() => {
    if (typeof initialPage === 'number' && initialPage >= 1 && initialPage <= slides.length) {
      return initialPage - 1;
    }
    return 0;
  });

  // Nonaktifkan splashscreen saat mode developer agar refresh cepat saat develop
  const [showSplash, setShowSplash] = useState(!import.meta.env.DEV);
  const [targetStep, setTargetStep] = useState(0);

  const { controller, isLocked } = useNavigation();

  // Ref to track if user explicitly opened a URL with a page param
  const hadInitialPageRef = useRef<boolean>(hasInitialPage);

  // Initial mount: ensure canonical /slide?q=...&mode=...&lang=... URL parameters and update cache
  useEffect(() => {
    syncBrowserUrl(theme, language, currentSlide + 1);
    setCachedTheme(theme);
    setCachedLang(language);
  }, []);

  // Sync URL whenever theme, language, or slide changes
  useEffect(() => {
    syncBrowserUrl(theme, language, currentSlide + 1);
    setCachedTheme(theme);
    setCachedLang(language);
  }, [theme, language, currentSlide, showSplash]);

  // Handle browser popstate navigation (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const res = parseUrl(window.location.search, window.location.pathname);
      if (!res.is404) {
        if (res.theme !== theme) setTheme(res.theme);
        if (res.lang !== language) setLanguage(res.lang);
        if (res.hasValidPage && typeof res.page === 'number') {
          setCurrentSlide(res.page - 1);
          setShowSplash(false);
          hadInitialPageRef.current = true;
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [theme, language, setTheme, setLanguage]);

  // Handle completing splash screen
  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    hadInitialPageRef.current = true;
    syncBrowserUrl(theme, language, currentSlide + 1);
  }, [theme, language, currentSlide]);

  // --- NAVIGATION LOGIC ---

  const handleGlobalNext = useCallback(() => {
    if (isLocked) return;

    // 1. Internal Component Step (Priority)
    if (controller) {
      const stepTaken = controller.next();
      if (stepTaken) return; // Stay on current slide
    }

    // 2. Slide Navigation
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      setTargetStep(0); // Always start next slide at step 0
      setCurrentSlide(nextSlide);
      syncBrowserUrl(theme, language, nextSlide + 1);
    }
  }, [controller, currentSlide, isLocked, slides.length, theme, language]);

  const handleGlobalPrev = useCallback(() => {
    if (isLocked) return;

    // 1. Internal Component Step (Priority)
    if (controller) {
      const stepTaken = controller.prev();
      if (stepTaken) return; // Stay on current slide
    }

    // 2. Slide Navigation
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      setTargetStep(-1); // Signal to go to the LAST step of the previous slide
      setCurrentSlide(prevSlide);
      syncBrowserUrl(theme, language, prevSlide + 1);
    }
  }, [controller, currentSlide, isLocked, theme, language]);

  // --- KEYBOARD LISTENERS ---
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable nav during splash OR IF LOCKED
      if (showSplash || isLocked) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleGlobalNext();
      } else if (e.key === 'ArrowLeft') {
        handleGlobalPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGlobalNext, handleGlobalPrev, showSplash, isLocked]);

  const handleJumpToSlide = (index: number, step: number = 0) => {
    setCurrentSlide(index);
    setTargetStep(step);
    syncBrowserUrl(theme, language, index + 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden sparta-root-surface bg-white dark:bg-brand-950">
      {/* Keep Layout pre-mounted underneath SplashScreen so dark theme styles and slide content are ready before crossfade */}
      <div
        aria-hidden={showSplash}
        className={`w-full h-full ${showSplash ? 'pointer-events-none select-none' : ''}`}
      >
        <Layout
          key="layout"
          currentSlide={currentSlide}
          transitionKey={`${currentSlide}-${language}`}
          totalSlides={slides.length}
          nextSlide={handleGlobalNext}
          prevSlide={handleGlobalPrev}
          title={slides[currentSlide].title}
          sectionTitle={slides[currentSlide].category}
          hideHeaderBrand={slides[currentSlide].hideHeaderBrand}
          slides={slides}
          onSelectSlide={handleJumpToSlide}
          initialSidebarOpen={true}
        >
          {React.cloneElement(slides[currentSlide].component as React.ReactElement<any>, { 
            key: `${currentSlide}-${language}`,
            initialStep: targetStep,
            language: language
          })}
        </Layout>
      </div>

      <AnimatePresence>
        {showSplash && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [urlState, setUrlState] = useState<ParseResult>(() =>
    parseUrl(window.location.search, window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setUrlState(parseUrl(window.location.search, window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleReset404 = (resetTheme: Theme, resetLang: Language) => {
    setUrlState({
      is404: false,
      theme: resetTheme,
      lang: resetLang,
      hasValidPage: false,
      validParamsCount: 2,
      totalParamsCount: 2,
      invalidParams: [],
    });
  };

  if (urlState.is404) {
    return (
      <NotFoundPage
        invalidParams={urlState.invalidParams}
        onReset={handleReset404}
      />
    );
  }

  return (
    <ThemeProvider initialTheme={urlState.theme}>
      <LanguageProvider initialLang={urlState.lang}>
        <NavigationProvider>
          <DetailModalProvider>
            <AppContent
              initialPage={urlState.page}
              hasInitialPage={urlState.hasValidPage}
            />
          </DetailModalProvider>
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
