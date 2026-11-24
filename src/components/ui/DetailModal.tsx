import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, LucideIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigation } from '../../contexts/NavigationContext';

export type DetailAccent = 'red' | 'emerald' | 'rose' | 'slate';

export interface DetailModalMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface DetailModalSection {
  title: string;
  description?: string;
  items?: string[];
  accent?: DetailAccent;
  icon?: LucideIcon;
}

export interface DetailModalItem {
  id?: string | number;
  badge?: string;
  subtitle?: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  icon?: LucideIcon;
  image?: string;
  imageAlt?: string;
  summary?: string;
  description?: string;
  highlights?: string[];
  metrics?: DetailModalMetric[];
  sections?: DetailModalSection[];
  footerLabel?: string;
  footerValue?: string;
  accent?: DetailAccent;
  customContent?: React.ReactNode;
}

export interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: DetailModalItem | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

const ACCENT_STYLES: Record<
  DetailAccent,
  {
    topBar: string;
    iconBg: string;
    badge: string;
    metricText: string;
    sectionBg: string;
    sectionTitle: string;
    bulletIcon: string;
  }
> = {
  red: {
    topBar: 'from-red-600 via-rose-500 to-red-600',
    iconBg: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/60',
    metricText: 'text-red-600 dark:text-red-400',
    sectionBg: 'bg-red-50/70 dark:bg-red-950/25 border-red-200/70 dark:border-red-900/40',
    sectionTitle: 'text-red-700 dark:text-red-300',
    bulletIcon: 'text-red-600 dark:text-red-400',
  },
  emerald: {
    topBar: 'from-emerald-600 via-teal-500 to-emerald-600',
    iconBg: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    metricText: 'text-emerald-600 dark:text-emerald-400',
    sectionBg: 'bg-emerald-50/70 dark:bg-emerald-950/25 border-emerald-200/70 dark:border-emerald-900/40',
    sectionTitle: 'text-emerald-700 dark:text-emerald-300',
    bulletIcon: 'text-emerald-600 dark:text-emerald-400',
  },
  rose: {
    topBar: 'from-rose-600 via-red-500 to-rose-600',
    iconBg: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    metricText: 'text-rose-600 dark:text-rose-400',
    sectionBg: 'bg-rose-50/70 dark:bg-rose-950/25 border-rose-200/70 dark:border-rose-900/40',
    sectionTitle: 'text-rose-700 dark:text-rose-300',
    bulletIcon: 'text-rose-600 dark:text-rose-400',
  },
  slate: {
    topBar: 'from-slate-600 via-slate-500 to-slate-600',
    iconBg: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    metricText: 'text-slate-900 dark:text-white',
    sectionBg: 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/70',
    sectionTitle: 'text-slate-800 dark:text-slate-200',
    bulletIcon: 'text-red-600 dark:text-red-400',
  },
};

const SIZE_CLASSES: Record<NonNullable<DetailModalProps['size']>, string> = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  item,
  size = 'lg',
  children,
}) => {
  const { language } = useLanguage();
  const { setInteractionLock } = useNavigation();
  const isEnglish = language === 'en';

  useEffect(() => {
    if (!isOpen) return;

    setInteractionLock(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      setInteractionLock(false);
    };
  }, [isOpen, onClose, setInteractionLock]);

  if (typeof document === 'undefined') return null;

  const accent: DetailAccent = item?.accent || 'red';
  const styles = ACCENT_STYLES[accent];
  const IconComp = item?.icon;

  return createPortal(
    <AnimatePresence>
      {isOpen && item && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 select-text"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          {/* Solid-tint Backdrop (no heavy backdrop-blur to avoid compositor white glitches) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed inset-0 bg-slate-950/65 dark:bg-black/75"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 w-full ${SIZE_CLASSES[size]} max-h-[88vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 font-sans transform-gpu`}
          >
            {/* Top Accent Strip */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${styles.topBar} shrink-0`} />

            {/* Modal Header */}
            <div className="px-5 pt-4 pb-3.5 sm:px-6 sm:pt-5 sm:pb-4 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-3 shrink-0 bg-white dark:bg-slate-900">
              <div className="flex items-start gap-3.5 min-w-0">
                {IconComp && (
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${styles.iconBg}`}>
                    <IconComp size={20} />
                  </div>
                )}

                <div className="min-w-0">
                  {(item.badge || item.subtitle) && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      {item.badge && (
                        <span className={`text-[10.5px] font-black uppercase tracking-wider ${styles.metricText}`}>
                          {item.badge}
                        </span>
                      )}
                      {item.badge && item.subtitle && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 text-xs">·</span>
                      )}
                      {item.subtitle && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  )}

                  <h3
                    id="detail-modal-title"
                    className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-snug tracking-tight"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {item.metric && (
                  <div className="hidden sm:flex flex-col items-end text-right px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                    {item.metricLabel && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 leading-none mb-0.5">
                        {item.metricLabel}
                      </span>
                    )}
                    <span className={`text-sm sm:text-base font-black tabular-nums leading-none ${styles.metricText}`}>
                      {item.metric}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={isEnglish ? 'Close modal' : 'Tutup detail'}
                  title={isEnglish ? 'Close (Esc)' : 'Tutup (Esc)'}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/60 dark:hover:text-red-400 border border-transparent hover:border-red-200 dark:hover:border-red-800/60 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 space-y-4 no-scrollbar">
              {/* Optional Visual Image Banner */}
              {item.image && (
                <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-center max-h-56 p-3">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="max-h-48 w-auto object-contain"
                  />
                </div>
              )}

              {/* Mobile Metric Pill */}
              {item.metric && (
                <div className="sm:hidden flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.metricLabel || (isEnglish ? 'Key Metric' : 'Indikator Utama')}
                  </span>
                  <span className={`text-base font-black tabular-nums ${styles.metricText}`}>
                    {item.metric}
                  </span>
                </div>
              )}

              {/* Summary Lead */}
              {item.summary && (
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800">
                  {item.summary}
                </p>
              )}

              {/* Full Description */}
              {item.description && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              )}

              {/* Key Metrics Row */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {item.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-center"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {m.label}
                      </span>
                      <span className={`text-base sm:text-lg font-black tabular-nums mt-0.5 ${styles.metricText}`}>
                        {m.value}
                      </span>
                      {m.sublabel && (
                        <span className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {m.sublabel}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    {isEnglish ? 'Key Action Points & Details' : 'Poin Utama & Rincian Eksekusi'}
                  </span>
                  <div className="space-y-2">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed">
                        <CheckCircle2 size={15} className={`${styles.bulletIcon} shrink-0 mt-0.5`} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Structured Sub-Sections */}
              {item.sections && item.sections.length > 0 && (
                <div className={`grid grid-cols-1 ${item.sections.length > 1 ? 'sm:grid-cols-2' : ''} gap-3`}>
                  {item.sections.map((sec, idx) => {
                    const secAccent = ACCENT_STYLES[sec.accent || accent];
                    const SecIcon = sec.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border space-y-1.5 ${secAccent.sectionBg}`}
                      >
                        <div className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider ${secAccent.sectionTitle}`}>
                          {SecIcon && <SecIcon size={13} className="shrink-0" />}
                          <span>{sec.title}</span>
                        </div>
                        {sec.description && (
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {sec.description}
                          </p>
                        )}
                        {sec.items && sec.items.length > 0 && (
                          <ul className="space-y-1 pt-0.5">
                            {sec.items.map((sub, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 leading-snug">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-current ${secAccent.sectionTitle}`} />
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Custom Embedded Content */}
              {item.customContent}
              {children}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 sm:px-6 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/95 flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="text-xs min-w-0">
                {item.footerValue ? (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.footerLabel && (
                      <span className="text-slate-500 dark:text-slate-400 font-semibold">
                        {item.footerLabel}:
                      </span>
                    )}
                    <span className={`font-black ${styles.metricText}`}>
                      {item.footerValue}
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {isEnglish
                      ? 'Click outside or press Esc to close'
                      : 'Klik di luar area atau tekan Esc untuk menutup'}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default DetailModal;
