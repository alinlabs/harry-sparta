import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface SlideTabItem<T extends string = string> {
  id: T;
  label: string;
  icon: LucideIcon;
}

export interface SlideTabsProps<T extends string = string> {
  tabs: SlideTabItem<T>[];
  activeTab: T;
  onChange: (id: NoInfer<T>) => void;
  size?: 'sm' | 'md';
  align?: 'center' | 'start' | 'end';
  className?: string;
  ariaLabel?: string;
}

export function SlideTabs<T extends string>({
  tabs,
  activeTab,
  onChange,
  size = 'md',
  align = 'center',
  className = '',
  ariaLabel = 'Slide sections',
}: SlideTabsProps<T>) {
  const alignClass =
    align === 'start'
      ? 'justify-start'
      : align === 'end'
      ? 'justify-end'
      : 'justify-center';

  const sizeClass =
    size === 'sm'
      ? 'px-2.5 py-1 text-[10.5px] rounded-lg gap-1.5'
      : 'px-3.5 py-1.5 text-[11.5px] sm:text-xs rounded-xl gap-1.5';

  const iconSize = size === 'sm' ? 12 : 14;

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onClick={(e) => e.stopPropagation()}
      className={`flex flex-wrap items-center ${alignClass} gap-1.5 sm:gap-2 ${className}`}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={(e) => {
              e.stopPropagation();
              onChange(tab.id);
            }}
            className={`inline-flex items-center font-bold border transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${sizeClass} ${
              isActive
                ? 'bg-red-600 dark:bg-red-600 text-white border-red-600 dark:border-red-500 shadow-sm shadow-red-600/20 opacity-100'
                : 'bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 opacity-65 hover:opacity-100 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Icon size={iconSize} className="shrink-0" aria-hidden="true" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export interface SlideTabPanelProps {
  tabKey: string;
  children: React.ReactNode;
  className?: string;
}

export const SlideTabPanel: React.FC<SlideTabPanelProps> = ({
  tabKey,
  children,
  className = '',
}) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={tabKey}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideTabs;
