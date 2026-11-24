import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Handshake,
  Award,
  GitBranch,
  Scale,
  Landmark,
  AlertCircle,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide15ModalPayload } from './data';
import { getLadderElevationOffset, type LadderLevelId } from './utils';

type Slide15TabId = 'capability-bid' | 'accounts-compliance';

const LADDER_ICONS: Record<LadderLevelId, LucideIcon> = {
  'vendor-readiness': ShieldCheck,
  'subcon-partner': Handshake,
  'qualified-maincon': Award,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide15TabId>('capability-bid');

  const tabs: SlideTabItem<Slide15TabId>[] = [
    {
      id: 'capability-bid',
      label: isEn ? 'Capability & Bid Decision' : 'Kapabilitas & Keputusan Bid',
      icon: GitBranch,
    },
    {
      id: 'accounts-compliance',
      label: isEn ? 'Target Accounts & Compliance' : 'Target Akun & Kepatuhan',
      icon: Landmark,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide15ModalPayload,
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
      {/* Block 1: Header + Tabs Below Title */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'capability-bid' ? (
          /* Tab 1: 3-Step Capability Ladder (Left 7 cols) + Bid/No-Bid Decision Flow & Regulations (Right 5 cols) */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left: 3-Step Capability Ladder */}
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.ladderSection.sectionTitle}
                </h3>
                <p className="text-[11px] font-semibold text-red-600 dark:text-red-400 mt-0.5">
                  {slideData.ladderSection.sequenceCue}
                </p>
              </div>

              {/* Stepped Capability Ladder */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-end flex-1 py-2">
                {slideData.ladderSection.steps.map((step, idx) => {
                  const Icon = LADDER_ICONS[step.id];
                  const isLast = idx === slideData.ladderSection.steps.length - 1;
                  const offsetPx = getLadderElevationOffset(idx);

                  return (
                    <div
                      key={step.id}
                      style={{ marginBottom: `${offsetPx}px` }}
                      className="relative flex items-stretch h-full sm:h-auto"
                    >
                      <button
                        type="button"
                        onClick={(e) => handleOpenModal(e, step.modal, Icon)}
                        className="group relative flex-1 text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                      >
                        <ArrowUpRight
                          size={12}
                          className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                        />

                        <div>
                          <div className="flex items-center gap-2 pr-4 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                              <Icon size={14} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                              {step.levelCode}
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug">
                            {step.title}
                          </h4>
                          <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                            {step.gateRule}
                          </span>
                        </div>

                        <p className="mt-2.5 pt-2 border-t border-slate-200/70 dark:border-slate-700/70 text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                          {step.keywords}
                        </p>
                      </button>

                      {!isLast && (
                        <ChevronRight
                          size={14}
                          aria-hidden="true"
                          className="hidden sm:block absolute -right-[12px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Applicable Regulations [R1-R4] Interactive Strip */}
              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <Scale size={12} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span>{slideData.decisionSection.regTitle}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {slideData.decisionSection.regulations.map((reg) => (
                    <button
                      key={reg.code}
                      type="button"
                      onClick={(e) => handleOpenModal(e, reg.modal, Scale)}
                      className="group relative text-left rounded-lg bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-2.5 py-2 transition-colors cursor-pointer select-none"
                    >
                      <ArrowUpRight
                        size={11}
                        className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <span className="block text-[9.5px] font-black text-red-600 dark:text-red-400">
                        {reg.code} · {reg.effectiveDate}
                      </span>
                      <span className="block text-[10.5px] font-bold text-slate-900 dark:text-white truncate pr-3">
                        {reg.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 5-Step Bid / No-Bid Decision Flow */}
            <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {slideData.decisionSection.sectionTitle}
                  </h3>
                  <p className="text-[10.5px] font-semibold text-red-600 dark:text-red-400">
                    {slideData.decisionSection.ruleCue}
                  </p>
                </div>
                <GitBranch size={14} className="text-red-600 dark:text-red-400 shrink-0" />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-2">
                {slideData.decisionSection.steps.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, step.modal, GitBranch)}
                    className="group relative w-full text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3.5 py-2.5 transition-colors cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="flex items-baseline justify-between gap-2 pr-4">
                      <div className="min-w-0 flex items-baseline gap-1.5">
                        <span className="text-[10px] font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                          {step.stepCode}
                        </span>
                        <span className="text-xs font-black text-slate-900 dark:text-white truncate">
                          {step.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                        {step.cue}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Tab 2: B2G Target Accounts Panel + Refurbished / Verification Caveat */
          <section
            aria-label={slideData.accountsSection.sectionTitle}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
              <div className="flex items-center gap-2">
                <Landmark size={15} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.accountsSection.sectionTitle}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {slideData.accountsSection.entityDiffNote}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {slideData.accountsSection.accounts.map((acc) => (
                <button
                  key={acc.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, acc.modal, Landmark)}
                  className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-all cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={13}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug pr-4">
                    {acc.title}
                  </h4>
                  <span className="block text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1.5 leading-snug">
                    {acc.trackCue}
                  </span>
                </button>
              ))}
            </div>

            <footer className="flex items-start gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              <AlertCircle size={14} className="shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
              <span>{slideData.caveatFooter}</span>
            </footer>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
