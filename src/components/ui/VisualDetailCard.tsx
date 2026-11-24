import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDetailModal } from './DetailModalContext';
import { DetailAccent, DetailModalItem, DetailModalProps } from './DetailModal';

export interface VisualDetailCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  metric?: string;
  metricLabel?: string;
  summary?: string;
  icon?: LucideIcon;
  image?: string;
  imageAlt?: string;
  accent?: DetailAccent;
  variant?: 'default' | 'featured' | 'compact';
  ctaLabel?: string;
  showCta?: boolean;
  className?: string;
  modalSize?: DetailModalProps['size'];
  /** Rich detail content rendered inside the modal when card is clicked */
  modalData?: Partial<DetailModalItem>;
  /** Optional list of sibling items so presenter can cycle Prev/Next directly inside the modal */
  groupItems?: DetailModalItem[];
  /** Index of this card inside groupItems */
  groupIndex?: number;
  /** Optional custom click handler overriding or running before modal open */
  onClick?: () => void;
}

const CARD_ACCENTS: Record<
  DetailAccent,
  {
    borderHover: string;
    iconBox: string;
    badge: string;
    metric: string;
    cta: string;
    featuredBg: string;
  }
> = {
  red: {
    borderHover: 'hover:border-red-500/50 dark:hover:border-red-500/50 hover:shadow-md hover:shadow-red-500/10',
    iconBox: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    metric: 'text-red-600 dark:text-red-400',
    cta: 'text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300',
    featuredBg: 'bg-gradient-to-br from-red-50/70 via-white to-white dark:from-red-950/30 dark:via-slate-900 dark:to-slate-900 border-red-300/80 dark:border-red-800/60',
  },
  emerald: {
    borderHover: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-500/10',
    iconBox: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    metric: 'text-emerald-600 dark:text-emerald-400',
    cta: 'text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300',
    featuredBg: 'bg-gradient-to-br from-emerald-50/70 via-white to-white dark:from-emerald-950/30 dark:via-slate-900 dark:to-slate-900 border-emerald-300/80 dark:border-emerald-800/60',
  },
  rose: {
    borderHover: 'hover:border-rose-500/50 dark:hover:border-rose-500/50 hover:shadow-md hover:shadow-rose-500/10',
    iconBox: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    metric: 'text-rose-600 dark:text-rose-400',
    cta: 'text-rose-600 dark:text-rose-400 group-hover:text-rose-700 dark:group-hover:text-rose-300',
    featuredBg: 'bg-gradient-to-br from-rose-50/70 via-white to-white dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-900 border-rose-300/80 dark:border-rose-800/60',
  },
  slate: {
    borderHover: 'hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md',
    iconBox: 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500',
    badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    metric: 'text-slate-900 dark:text-white',
    cta: 'text-red-600 dark:text-red-400',
    featuredBg: 'bg-gradient-to-br from-slate-50 via-white to-white dark:from-slate-800/70 dark:via-slate-900 dark:to-slate-900 border-slate-300 dark:border-slate-700',
  },
};

export const VisualDetailCard: React.FC<VisualDetailCardProps> = ({
  title,
  subtitle,
  badge,
  metric,
  metricLabel,
  summary,
  icon: Icon,
  image,
  imageAlt,
  accent = 'red',
  variant = 'default',
  ctaLabel,
  showCta = true,
  className = '',
  modalSize = 'lg',
  modalData,
  groupItems,
  groupIndex = 0,
  onClick,
}) => {
  const { language } = useLanguage();
  const { openModal, openModalGroup } = useDetailModal();
  const isEnglish = language === 'en';
  const styles = CARD_ACCENTS[accent];

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (onClick) {
      onClick();
      return;
    }

    if (groupItems && groupItems.length > 0) {
      openModalGroup(groupItems, groupIndex, { size: modalSize });
      return;
    }

    openModal(
      {
        title,
        subtitle,
        badge,
        metric,
        metricLabel,
        icon: Icon,
        image,
        imageAlt,
        accent,
        ...modalData,
      },
      { size: modalSize }
    );
  };

  const paddingClass =
    variant === 'compact'
      ? 'p-3 sm:p-3.5'
      : 'p-4 sm:p-5';

  const surfaceClass =
    variant === 'featured'
      ? styles.featuredBg
      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800';

  return (
    <button
      type="button"
      onClick={handleCardClick}
      className={`group relative w-full h-full text-left rounded-2xl border shadow-2xs transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 active:scale-[0.99] flex flex-col justify-between cursor-pointer select-none ${paddingClass} ${surfaceClass} ${styles.borderHover} ${className}`}
    >
      {showCta && (
        <ArrowUpRight
          size={14}
          className={`absolute top-3.5 right-3.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none ${styles.cta}`}
        />
      )}

      <div className="w-full space-y-2.5">
        {/* Visual Header: Icon/Image + Badge/Metric */}
        {(Icon || badge || metric) && (
          <div className={`flex items-start justify-between gap-2.5 ${showCta ? 'pr-6' : ''}`}>
            <div className="flex items-center gap-2.5 min-w-0">
              {Icon && (
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${styles.iconBox}`}>
                  <Icon size={18} />
                </div>
              )}
              {badge && (
                <span className={`inline-block text-[10.5px] font-bold uppercase tracking-wider truncate ${styles.metric}`}>
                  {badge}
                </span>
              )}
            </div>

            {metric && (
              <div className="text-right shrink-0">
                {metricLabel && (
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 leading-none mb-0.5">
                    {metricLabel}
                  </span>
                )}
                <span className={`text-base sm:text-xl font-black tabular-nums leading-none ${styles.metric}`}>
                  {metric}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Optional Product/Concept Image Preview */}
        {image && (
          <div className="w-full h-28 sm:h-32 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-2.5 overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title}
              className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Title & Ultra-Concise Optional Summary */}
        <div className={!(Icon || badge || metric) && showCta ? 'pr-6' : ''}>
          {subtitle && (
            <span className="block text-[10.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5 truncate">
              {subtitle}
            </span>
          )}
          <h3 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug tracking-tight">
            {title}
          </h3>
          {summary && (
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug mt-1 line-clamp-2">
              {summary}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default VisualDetailCard;
