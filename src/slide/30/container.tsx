import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  GitMerge,
  Database,
  Globe2,
  TrendingUp,
  CheckSquare,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide30ModalPayload } from './data';

type Slide30TabId = 'transformation' | 'decisions';

const PILLAR_ICONS: LucideIcon[] = [Users, GitMerge, Database, Globe2, TrendingUp];

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide30TabId>('transformation');

  const tabs: SlideTabItem<Slide30TabId>[] = [
    {
      id: 'transformation',
      label: isEn ? 'Transformation & Pillars' : 'Transformasi & Pilar',
      icon: TrendingUp,
    },
    {
      id: 'decisions',
      label: isEn ? 'Initial Decisions & Closing' : 'Keputusan Awal & Komitmen',
      icon: CheckSquare,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide30ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-2 sm:py-3 px-1 sm:px-2 space-y-3.5"
    >
      {/* Header */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          ariaLabel={isEn ? 'Slide sections' : 'Bagian slide'}
        />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'transformation' ? (
          /* Main Split: 6-Row From -> To Table (Left) + 5 Pillars (Right) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left: Six-Row From -> To Transformation Table */}
            <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                  {slideData.tableTitle}
                </h3>

                <div className="grid grid-cols-[0.9fr_1.15fr_20px_1.35fr] items-center gap-x-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <span>{slideData.dimensionLabel}</span>
                  <span>{slideData.fromLabel}</span>
                  <span />
                  <span className="text-red-600 dark:text-red-400">{slideData.toLabel}</span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {slideData.rows.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-1 sm:grid-cols-[0.9fr_1.15fr_20px_1.35fr] items-center gap-x-2 gap-y-1 py-2.5"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {row.dimension}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-snug">
                        {row.fromState}
                      </span>
                      <ArrowRight
                        size={13}
                        className="hidden sm:block text-red-600 dark:text-red-400 shrink-0"
                      />
                      <span className="text-xs font-black text-slate-900 dark:text-white leading-snug block">
                        {row.toState}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Right: 5 Pillars (People / Process / Data / Market / Growth) */}
            <section className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                  {slideData.pillarsTitle}
                </h3>

                <div className="space-y-3">
                  {slideData.pillars.map((pil, idx) => {
                    const Icon = PILLAR_ICONS[idx] ?? Users;
                    return (
                      <div
                        key={pil.id}
                        className="flex items-start gap-3 border-b border-slate-100 dark:border-slate-800 pb-2.5 last:border-b-0 last:pb-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={15} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                            {pil.name}
                          </h4>
                          <p className="text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                            {pil.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* 4 First Decisions Cards */
          <section className="space-y-2.5">
            <div className="flex items-center gap-1.5">
              <CheckSquare size={14} className="text-red-600 dark:text-red-400 shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {slideData.decisionsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {slideData.decisions.map((dec) => (
                <button
                  key={dec.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, dec.modal, CheckSquare)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-4 transition-colors focus:outline-none cursor-pointer flex flex-col justify-between min-h-[140px]"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-3.5 right-3.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                      {dec.code}
                    </p>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mt-1 pr-5">
                      {dec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {dec.scope}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}
      </SlideTabPanel>

      {/* Executive Closing Line & Presenter Attribution */}
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight max-w-3xl">
          {slideData.closingStatement}
        </p>
        <div className="sm:text-right shrink-0">
          <p className="text-xs font-black text-slate-900 dark:text-white">
            {slideData.presenterName}
          </p>
          <p className="text-[10.5px] font-semibold text-red-600 dark:text-red-400">
            {slideData.presenterRole}
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Container;
