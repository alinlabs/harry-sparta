import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, LayoutGrid 
} from 'lucide-react';
import DmsLogo from './DmsLogo';

import { useLanguage, Language } from '../contexts/LanguageContext';
import {
  getSidebarSections,
  getCoverSlideInfo,
  TOTAL_SLIDES,
} from '../slide/registry';

export interface SlideItem {
  id: number;
  slideNumber?: number;
  folder?: string;
  sectionId?: number;
  title: string;
  navTitle?: string;
  category?: string;
  section?: string;
}

export const getSections = (lang: Language | 'id' = 'in') => getSidebarSections(lang);
export const SECTIONS = getSections('id');

interface SidebarProps {
  mode?: 'docked' | 'drawer';
  isOpen?: boolean;
  onClose?: () => void;
  currentSlide?: number;
  onSelectSlide?: (index: number) => void;
  onJumpToSlide?: (index: number) => void;
  onStartPresentation?: () => void;
  onExitPresentation?: () => void;
  slides?: SlideItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  mode = 'docked',
  isOpen = false,
  onClose = () => {},
  currentSlide = 0,
  onSelectSlide,
  onJumpToSlide,
}) => {
  const { language } = useLanguage();
  const sections = useMemo(() => getSidebarSections(language), [language]);
  const coverSlide = useMemo(() => getCoverSlideInfo(language), [language]);

  // Open state for each dropdown section - default ALL opened
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    getSidebarSections(language).forEach(s => {
      initial[s.id] = true;
    });
    return initial;
  });

  // Automatically expand current section when slide changes
  useEffect(() => {
    const activeSection = sections.find(s => s.steps.some(st => st.index === currentSlide));
    if (activeSection) {
      setOpenSections(prev => {
        if (prev[activeSection.id]) {
          return prev;
        }
        return { ...prev, [activeSection.id]: true };
      });
    }
  }, [currentSlide, sections]);

  const toggleSection = (id: number) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSlideClick = (index: number) => {
    if (onSelectSlide) {
      onSelectSlide(index);
    } else if (onJumpToSlide) {
      onJumpToSlide(index);
    }
    if (mode === 'drawer' && onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <aside 
      className={`w-72 sm:w-80 flex-shrink-0 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-20 relative font-sans select-none h-full ${
        mode === 'drawer' ? 'h-screen fixed top-0 left-0 bottom-0 z-50' : 'h-full'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Sidebar Header */}
      <div className="h-[68px] sm:h-[70px] px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900 sticky top-0 z-10">
        <DmsLogo size="sm" showText={true} subtitle="STRATEGI PERTUMBUHAN BISNIS" />
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={language === 'en' ? 'Close Sidebar' : 'Tutup Ikhtisar Sidebar'}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Navigation List - Flex-distributed full-height cards from Executive Summary down to Closing */}
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col no-scrollbar">
        <div className="flex-1 min-h-full flex flex-col gap-2.5">
          {/* Top Cover / Dashboard Item */}
          {coverSlide && (
            <button
              onClick={() => handleSlideClick(coverSlide.index)}
              className={`w-full shrink-0 min-h-[48px] flex items-center justify-between gap-3 px-3 py-3 rounded-xl transition-colors text-left group ${
                currentSlide === coverSlide.index
                  ? 'bg-red-600 text-white font-bold shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-semibold'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <LayoutGrid 
                  size={18} 
                  className={`shrink-0 ${
                    currentSlide === coverSlide.index 
                      ? 'text-white' 
                      : 'text-slate-500 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400'
                  }`} 
                />
                <span className="text-sm truncate">{coverSlide.name}</span>
              </div>
              <ChevronRight
                size={15}
                className={`shrink-0 transition-colors ${
                  currentSlide === coverSlide.index
                    ? 'text-white'
                    : 'text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400'
                }`}
              />
            </button>
          )}

          {/* Structure Area filling remaining vertical height */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Category Header */}
            <div className="px-3 pt-1 pb-0.5 shrink-0">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                {language === 'en' ? `Presentation Structure (${TOTAL_SLIDES} Slides)` : `Struktur Presentasi (${TOTAL_SLIDES} Slide)`}
              </span>
            </div>

            {/* Dropdown Section Menus with tall flex-filling step cards */}
            <div className="flex-1 flex flex-col gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isOpen = !!openSections[section.id];
                const isSectionActive = section.steps.some(s => s.index === currentSlide);

                return (
                  <div
                    key={section.id}
                    style={{ flexGrow: isOpen ? section.steps.length : 0 }}
                    className={`py-0.5 flex flex-col ${isOpen ? '' : 'shrink-0'}`}
                  >
                    {/* Main Section Header with Dropdown Chevron */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full shrink-0 flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-left group ${
                        isSectionActive
                          ? 'bg-red-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-semibold'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon 
                          size={18} 
                          className={`shrink-0 ${
                            isSectionActive 
                              ? 'text-white' 
                              : 'text-slate-500 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400'
                          }`} 
                        />
                        <span className="text-sm truncate">{section.title}</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        } ${
                          isSectionActive
                            ? 'text-white'
                            : isOpen
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-slate-400'
                        }`} 
                      />
                    </button>

                    {/* Dropdown Child Items with Timeline Line & Tall Flex Cards */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden flex-1 flex flex-col"
                        >
                          <div className="relative ml-5 pl-5 border-l border-slate-200 dark:border-slate-800 my-1.5 flex-1 flex flex-col gap-1.5">
                            {section.steps.map((step) => {
                              const isStepActive = currentSlide === step.index;

                              return (
                                <button
                                  key={step.index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSlideClick(step.index);
                                  }}
                                  className={`w-full flex-1 min-h-[40px] flex items-center gap-2 py-2.5 px-3 rounded-xl text-xs text-left transition-all relative ${
                                    isStepActive
                                      ? 'bg-red-600 text-white font-bold shadow-xs'
                                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-medium'
                                  }`}
                                >
                                  {/* Dot on the timeline connector */}
                                  <span 
                                    className={`absolute -left-[24px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 transition-colors ${
                                      isStepActive 
                                        ? 'bg-red-600 border-white dark:border-slate-900 ring-2 ring-red-500/30' 
                                        : 'bg-slate-300 dark:bg-slate-600 border-white dark:border-slate-900'
                                    }`} 
                                  />
                                  <span className="truncate flex-1">{step.name}</span>
                                  <ChevronRight
                                    size={14}
                                    className={`shrink-0 transition-colors ${
                                      isStepActive
                                        ? 'text-white'
                                        : 'text-slate-400 dark:text-slate-500'
                                    }`}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Presenter Info */}
      <div className="h-[57px] sm:h-[60px] px-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shrink-0 flex items-center">
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs font-bold text-slate-900 dark:text-white truncate leading-tight">
            Harry Gultom
          </span>
          <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 tracking-wider truncate">
            {language === 'en' ? 'Sales Manager Candidate' : 'Kandidat Sales Manager'}
          </span>
        </div>
      </div>
    </aside>
  );

  if (mode === 'docked') {
    return sidebarContent;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Backdrop to close when clicking outside without darkening screen */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-transparent z-40 pointer-events-auto"
          />
          {/* Animated Drawer */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 left-0 bottom-0 z-50"
          >
            {sidebarContent}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
