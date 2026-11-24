import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  Search,
  ShieldCheck,
  Layers,
  FileText,
  Presentation,
  ClipboardCheck,
  RefreshCw,
  Building2,
  Server,
  Laptop,
  Network,
  AlertCircle,
  Workflow,
  Package,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide13ModalPayload } from './data';
import type { JourneyStageKey, SolutionPackageKey } from './utils';

type Slide13TabId = 'journey' | 'packages';

const STAGE_ICONS: Record<JourneyStageKey, LucideIcon> = {
  'discovery': Search,
  'technical-validation': ShieldCheck,
  'solution-design': Layers,
  'commercial-proposal': FileText,
  'presentation': Presentation,
  'delivery-handover': ClipboardCheck,
  'after-sales': RefreshCw,
};

const PACKAGE_ICONS: Record<SolutionPackageKey, LucideIcon> = {
  'office-umkm': Building2,
  'server-backup': Server,
  'device-refresh': Laptop,
  'branch-connectivity': Network,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide13TabId>('journey');

  const tabs: SlideTabItem<Slide13TabId>[] = [
    {
      id: 'journey',
      label: isEn ? 'Consultative Sales Flow' : 'Alur Penjualan Konsultatif',
      icon: Workflow,
    },
    {
      id: 'packages',
      label: isEn ? 'Core Solution Packages' : 'Paket Solusi Utama',
      icon: Package,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide13ModalPayload,
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

      <SlideTabPanel tabKey={activeTab} className="space-y-3">
        {activeTab === 'journey' ? (
          /* Block 2: 7-Stage Consultative Sales Journey (Discovery -> After-Sales) */
          <section aria-label={slideData.journeySection.sectionTitle} className="space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.journeySection.sectionTitle}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-600 dark:text-red-400">
                <ShieldCheck size={13} className="shrink-0" aria-hidden="true" />
                <span>{slideData.journeySection.guardrailNote}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {slideData.journeySection.stages.map((stage, idx) => {
                const Icon = STAGE_ICONS[stage.id];
                const isLast = idx === slideData.journeySection.stages.length - 1;

                return (
                  <div key={stage.id} className="relative flex items-stretch">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(e, stage.modal, Icon)}
                      className="group relative flex-1 min-w-0 text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                    >
                      <ArrowUpRight
                        size={13}
                        className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                      />

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 pr-4 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                            <Icon size={13} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                            {stage.stepCode}
                          </span>
                        </div>

                        <h4 className="text-[11.5px] font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                          {stage.title}
                        </h4>
                        <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug mt-1">
                          {stage.shortCue}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                        {stage.ownerCue}
                      </div>
                    </button>

                    {!isLast && (
                      <ChevronRight
                        size={13}
                        aria-hidden="true"
                        className="hidden lg:block absolute -right-[11px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          /* Block 3: Four Example Solution Cards (Pain Point / Bundle / Service Attach / Proof & Assumption) */
          <section aria-label={slideData.packagesSection.sectionTitle} className="space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.packagesSection.sectionTitle}
              </h3>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                {slideData.packagesSection.exampleNote}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              {slideData.packagesSection.packages.map((pkg) => {
                const Icon = PACKAGE_ICONS[pkg.id];
                const labels = slideData.packagesSection.rowLabels;

                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, pkg.modal, Icon)}
                    className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={14}
                      className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    {/* Card Header */}
                    <div className="flex items-start gap-2.5 pr-5 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                          {pkg.statusTag}
                        </span>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                          {pkg.title}
                        </h4>
                      </div>
                    </div>

                    {/* Consistent 4-Part Solution Structure */}
                    <div className="mt-2.5 space-y-2 flex-1 flex flex-col justify-between text-[10.5px] leading-snug">
                      <div>
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {labels.painPoint}
                        </span>
                        <span className="block font-bold text-slate-900 dark:text-white mt-0.5">
                          {pkg.painPoint}
                        </span>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {labels.bundle}
                        </span>
                        <span className="block font-bold text-slate-900 dark:text-white mt-0.5">
                          {pkg.bundle}
                        </span>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {labels.serviceAttach}
                        </span>
                        <span className="block font-bold text-slate-900 dark:text-white mt-0.5">
                          {pkg.serviceAttach}
                        </span>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {labels.proofAssumption}
                        </span>
                        <span className="block font-bold text-slate-900 dark:text-white mt-0.5">
                          {pkg.proofAssumption}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </SlideTabPanel>

      {/* Block 4: Required Evidence & Verification Prerequisites */}
      <footer className="flex items-start gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-800 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
        <AlertCircle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
        <span>{slideData.evidenceFooter}</span>
      </footer>
    </motion.div>
  );
};

export default Container;
