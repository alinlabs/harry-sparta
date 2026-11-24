import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  Megaphone,
  BookOpen,
  MousePointerClick,
  Filter,
  Send,
  Award,
  Repeat,
  Server,
  CalendarDays,
  Handshake,
  AlertCircle,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide16ModalPayload } from './data';
import type { FlywheelStepId } from './utils';

type Slide16TabId = 'flywheel' | 'campaign';

const FLYWHEEL_ICONS: Record<FlywheelStepId, LucideIcon> = {
  'brand-awareness': Megaphone,
  'content-education': BookOpen,
  'lead-capture': MousePointerClick,
  'qualification': Filter,
  'sales-handover': Send,
  'customer-proof': Award,
  'referral-retention': Repeat,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide16TabId>('flywheel');

  const tabs: SlideTabItem<Slide16TabId>[] = [
    {
      id: 'flywheel',
      label: isEn ? 'Marketing Flywheel & Partners' : 'Marketing Flywheel & Partner',
      icon: Repeat,
    },
    {
      id: 'campaign',
      label: isEn ? 'Server Campaigns & Calendar' : 'Kampanye Server & Kalender',
      icon: Server,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide16ModalPayload,
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
        {activeTab === 'flywheel' ? (
          <div className="space-y-3">
            {/* Closed-Loop 7-Stage Marketing Flywheel */}
            <section aria-label={slideData.flywheelSection.sectionTitle} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.flywheelSection.sectionTitle}
                </h3>
                <span className="text-[10.5px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.flywheelSection.narrativeFormula}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {slideData.flywheelSection.steps.map((step, idx) => {
                  const Icon = FLYWHEEL_ICONS[step.id];
                  const isLast = idx === slideData.flywheelSection.steps.length - 1;

                  return (
                    <div key={step.id} className="relative flex items-stretch">
                      <button
                        type="button"
                        onClick={(e) => handleOpenModal(e, step.modal, Icon)}
                        className="group relative flex-1 min-w-0 text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                      >
                        <ArrowUpRight
                          size={12}
                          className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                        />

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 pr-4 mb-2">
                            <div className="w-6 h-6 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                              <Icon size={13} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                              {step.stepCode}
                            </span>
                          </div>

                          <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                            {step.title}
                          </h4>
                          <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug mt-1">
                            {step.shortCue}
                          </p>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                          {step.kpiCue}
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

            {/* Partner Co-Marketing Governance Card */}
            <button
              type="button"
              onClick={(e) => handleOpenModal(e, slideData.partnerRuleCard.modal, Handshake)}
              className="group relative w-full text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 sm:px-4 transition-colors cursor-pointer select-none"
            >
              <ArrowUpRight
                size={13}
                className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
              />
              <div className="flex items-start gap-3 pr-5">
                <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Handshake size={15} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {slideData.partnerRuleCard.code}
                  </span>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                    {slideData.partnerRuleCard.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                    {slideData.partnerRuleCard.keywords}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ) : (
          /* Server Campaign Hypothesis Panel (Left 6 cols) + 4-Week Mini Content Calendar (Right 6 cols) */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left: Server Campaign Hypothesis ("On-premise vs Cloud") */}
            <button
              type="button"
              onClick={(e) => handleOpenModal(e, slideData.campaignSection.campaignModal, Server)}
              className="group relative lg:col-span-6 text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-all duration-200 cursor-pointer select-none flex flex-col justify-between space-y-2.5"
            >
              <ArrowUpRight
                size={14}
                className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
              />

              <div className="pr-5">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {slideData.campaignSection.sectionTitle}
                  </span>
                  <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">
                    · {slideData.campaignSection.hypothesisBadgeLabel}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                  {slideData.campaignSection.centralQuestion}
                </h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {slideData.campaignSection.balanceRule}
                </p>
              </div>

              {/* 5-Factor Evaluation Matrix (Control / Latency / Workload / Security / Capex-Opex) */}
              <div className="w-full space-y-1 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-12 gap-2 px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <div className="col-span-3">{slideData.campaignSection.columnHeaders.factor}</div>
                  <div className="col-span-5 text-red-600 dark:text-red-400">{slideData.campaignSection.columnHeaders.onPrem}</div>
                  <div className="col-span-4">{slideData.campaignSection.columnHeaders.cloud}</div>
                </div>

                {slideData.campaignSection.factors.map((f) => (
                  <div
                    key={f.id}
                    className="grid grid-cols-12 gap-2 items-center px-2 py-1.5 rounded-lg bg-slate-50/70 dark:bg-slate-800/40 text-[10.5px] leading-snug"
                  >
                    <div className="col-span-3 font-black text-slate-900 dark:text-white">
                      {f.label}
                    </div>
                    <div className="col-span-5 font-semibold text-slate-700 dark:text-slate-200">
                      {f.onPremCue}
                    </div>
                    <div className="col-span-4 font-medium text-slate-500 dark:text-slate-400">
                      {f.cloudCue}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] font-bold text-slate-600 dark:text-slate-300">
                {slideData.campaignSection.priorityListCue}
              </div>
            </button>

            {/* Right: 4-Week Mini Content Calendar */}
            <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {slideData.calendarSection.sectionTitle}
                  </h3>
                  <p className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                    {slideData.calendarSection.simulationLabel}
                  </p>
                </div>
                <CalendarDays size={15} className="text-red-600 dark:text-red-400 shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                {slideData.calendarSection.weeks.map((wk) => (
                  <button
                    key={wk.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, wk.modal, CalendarDays)}
                    className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="pr-4">
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {wk.weekLabel} · {wk.trackCue}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                        {wk.themeTitle}
                      </h4>
                    </div>
                    <span className="mt-2 pt-1.5 border-t border-slate-200/70 dark:border-slate-700/70 text-[10.5px] font-medium text-slate-600 dark:text-slate-300">
                      {wk.channelCue}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </SlideTabPanel>

      {/* Block 4: Data Prerequisites & Unresolved Partner Clarification */}
      <footer className="flex items-start gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-800 text-[10.5px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
        <AlertCircle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
        <span>{slideData.evidenceFooter}</span>
      </footer>
    </motion.div>
  );
};

export default Container;
