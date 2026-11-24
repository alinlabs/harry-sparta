import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Building2,
  DoorOpen,
  Scale,
  Lock,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide27ModalPayload } from './data';

type Slide27TabId = 'roadmap' | 'gtm';

const HORIZON_ICONS: LucideIcon[] = [Compass, ShieldCheck, Building2];
const GTM_ICONS: LucideIcon[] = [DoorOpen, Scale];

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide27TabId>('roadmap');

  const tabs: SlideTabItem<Slide27TabId>[] = [
    {
      id: 'roadmap',
      label: isEn ? 'Roadmap & Stage Gates' : 'Peta Jalan & Stage Gate',
      icon: Compass,
    },
    {
      id: 'gtm',
      label: isEn ? 'Go-To-Market Tactics' : 'Taktik Go-To-Market',
      icon: DoorOpen,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide27ModalPayload,
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
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3"
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
        {activeTab === 'roadmap' ? (
          <div className="space-y-3">
            {/* 3-Horizon Roadmap */}
            <section className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {slideData.horizonsHeading}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {slideData.horizons.map((hz, idx) => {
                  const Icon = HORIZON_ICONS[idx] ?? Compass;
                  return (
                    <button
                      key={hz.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, hz.modal, Icon)}
                      className="group relative text-left flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-4 transition-colors focus:outline-none cursor-pointer"
                    >
                      <ArrowUpRight
                        size={14}
                        className="absolute top-3.5 right-3.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                      />

                      <div>
                        <div className="flex items-center gap-2 mb-2.5 pr-5">
                          <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                            <Icon size={16} />
                          </div>
                          <p className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                            {hz.horizonLabel}
                          </p>
                        </div>

                        <div className="flex items-baseline justify-between gap-2 mb-2.5">
                          <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                            {hz.title}
                          </h4>
                          <span className="text-xs font-black tabular-nums text-red-600 dark:text-red-400 shrink-0">
                            {hz.metric}
                          </span>
                        </div>

                        <ul className="space-y-1.5">
                          {hz.keyPoints.map((pt, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 4 Stage Gates Before Corporate Vision */}
            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Lock size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {slideData.gatesHeading}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {slideData.gates.map((gt) => (
                  <div
                    key={gt.id}
                    className="border-l-2 border-red-600 dark:border-red-500 pl-2.5"
                  >
                    <p className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                      {gt.step}
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {gt.label}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {gt.requirement}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* Isolated Go-To-Market Entry Tactics Panel */
          <section className="rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {slideData.gtmHeading}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {slideData.gtmTactics.map((tactic, idx) => {
                const Icon = GTM_ICONS[idx] ?? DoorOpen;
                return (
                  <button
                    key={tactic.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, tactic.modal, Icon)}
                    className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-4 transition-colors focus:outline-none cursor-pointer flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={14}
                      className="absolute top-3.5 right-3.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                    />

                    <div>
                      <div className="flex items-center gap-2 pr-5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {tactic.tag}
                        </span>
                      </div>

                      <h4 className="text-base font-black text-slate-900 dark:text-white leading-tight mb-2.5">
                        {tactic.title}
                      </h4>

                      <ul className="space-y-1.5">
                        {tactic.keyPoints.map((kp, kIdx) => (
                          <li
                            key={kIdx}
                            className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 shrink-0" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
