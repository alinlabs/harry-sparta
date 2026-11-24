import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  Store,
  Truck,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide17ModalPayload } from './data';

type Slide17TabId = 'channels' | 'gates';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide17TabId>('channels');

  const tabs: SlideTabItem<Slide17TabId>[] = [
    {
      id: 'channels',
      label: isEn ? 'Retail & Distribution Channels' : 'Kanal Retail & Distribusi',
      icon: Store,
    },
    {
      id: 'gates',
      label: isEn ? 'Branch Expansion Gates' : 'Gerbang Ekspansi Cabang',
      icon: MapPin,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide17ModalPayload,
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
      {/* Block 1: Header */}
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
        {activeTab === 'channels' ? (
          /* Block 2: Dual Panels (Retail 40% + Distribution 40%) */
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-stretch">
            {/* Left Panel: Retail */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Store size={15} className="text-red-600 dark:text-red-400 shrink-0" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {slideData.retailPanel.sectionTitle}
                    </h3>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl font-black text-red-600 dark:text-red-400 tabular-nums leading-none">
                    {slideData.retailPanel.shareMetric}
                  </span>
                </div>
              </div>

              {/* Retail Mini-Funnel Strip */}
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 p-2.5 space-y-1.5">
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {slideData.retailPanel.funnelTitle}
                </span>
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 text-[10.5px]">
                  {slideData.retailPanel.funnelSteps.map((step, idx) => (
                    <React.Fragment key={step.code}>
                      <div className="min-w-0 flex items-baseline gap-1">
                        <span className="font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                          {step.code}
                        </span>
                        <span className="font-black text-slate-900 dark:text-white truncate">
                          {step.label}
                        </span>
                      </div>
                      {idx < slideData.retailPanel.funnelSteps.length - 1 && (
                        <ChevronRight size={12} className="text-slate-400 shrink-0 hidden sm:block" aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 3 Retail Action Cards */}
              <div className="space-y-2 flex-1">
                {slideData.retailPanel.channels.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, ch.modal, Store)}
                    className="group relative w-full text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3 py-2.5 transition-colors cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="flex items-baseline gap-2 pr-4">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 shrink-0">
                        {ch.tag}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
                        {ch.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      {ch.keywords}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel: Distribution */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Truck size={15} className="text-red-600 dark:text-red-400 shrink-0" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {slideData.distributionPanel.sectionTitle}
                    </h3>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl font-black text-red-600 dark:text-red-400 tabular-nums leading-none">
                    {slideData.distributionPanel.shareMetric}
                  </span>
                </div>
              </div>

              {/* Partner Lifecycle Diagram */}
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 p-2.5 space-y-1.5">
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {slideData.distributionPanel.lifecycleTitle}
                </span>
                <div className="flex items-center justify-between gap-1 text-[10.5px]">
                  {slideData.distributionPanel.lifecycleSteps.map((step, idx) => (
                    <React.Fragment key={step.code}>
                      <div className="flex items-baseline gap-1">
                        <span className="font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                          {step.code}
                        </span>
                        <span className="font-black text-slate-900 dark:text-white">
                          {step.label}
                        </span>
                      </div>
                      {idx < slideData.distributionPanel.lifecycleSteps.length - 1 && (
                        <ChevronRight size={12} className="text-slate-400 shrink-0" aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 3 Distribution Levers */}
              <div className="space-y-2 flex-1">
                {slideData.distributionPanel.levers.map((lv) => (
                  <button
                    key={lv.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, lv.modal, Truck)}
                    className="group relative w-full text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3 py-2.5 transition-colors cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="flex items-baseline gap-2 pr-4">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 shrink-0">
                        {lv.tag}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
                        {lv.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      {lv.keywords}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Block 3: Branch / Small Store Expansion Decision Gate */
          <section aria-label={slideData.branchGateSection.sectionTitle} className="space-y-3">
            <div className="px-0.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.branchGateSection.sectionTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {slideData.branchGateSection.gates.map((gate, idx) => {
                const isLast = idx === slideData.branchGateSection.gates.length - 1;
                return (
                  <div key={gate.id} className="relative flex items-stretch">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(e, gate.modal, MapPin)}
                      className="group relative flex-1 text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between min-h-[160px]"
                    >
                      <ArrowUpRight
                        size={14}
                        className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <div className="pr-5">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {gate.stepCode}
                        </span>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug mt-1">
                          {gate.title}
                        </h4>
                      </div>
                      <p className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                        {gate.keywords}
                      </p>
                    </button>
                    {!isLast && (
                      <ChevronRight
                        size={14}
                        aria-hidden="true"
                        className="hidden lg:block absolute -right-[12px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                      />
                    )}
                  </div>
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
