import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calculator,
  Clock,
  LayoutDashboard,
  GitBranch,
  Database,
  Award,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide29ModalPayload } from './data';
import type { AppendixTabId } from './utils';

const TAB_ICONS: Record<AppendixTabId, LucideIcon> = {
  kpi: Calculator,
  cockpit: LayoutDashboard,
  readiness: Database,
  clarifications: HelpCircle,
};

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<AppendixTabId>('kpi');

  const tabs: SlideTabItem<AppendixTabId>[] = slideData.tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    icon: TAB_ICONS[tab.id] ?? Calculator,
  }));

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide29ModalPayload,
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
      {/* Header + Standardized Tabs Below Title */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {/* TAB 1: KPI Formulas & Reporting Cadence */}
        {activeTab === 'kpi' && (
          <div className="space-y-3">
            <section className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <Calculator size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.kpiSectionTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {slideData.kpis.map((kpi) => (
                  <button
                    key={kpi.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, kpi.modal, Calculator)}
                    className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-3 transition-colors focus:outline-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={13}
                      className="absolute top-2.5 right-2.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                    />
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white pr-4">
                        {kpi.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-red-600 dark:text-red-400 tabular-nums mt-1 leading-snug">
                        {kpi.formula}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <Clock size={12} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {slideData.cadenceTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {slideData.cadences.map((cad) => (
                  <div
                    key={cad.id}
                    className="border-l-2 border-red-600 dark:border-red-500 pl-2.5"
                  >
                    <p className="text-[11px] font-black uppercase tracking-wider text-red-600 dark:text-red-400">
                      {cad.frequency}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">
                      {cad.question}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {cad.output}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: Commercial Cockpit, Individual Report & Drill-Down */}
        {activeTab === 'cockpit' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
              {/* Manager Cockpit 6 Panels */}
              <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 space-y-2">
                <div className="flex items-center gap-1.5">
                  <LayoutDashboard size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    {slideData.cockpitTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {slideData.cockpitPanels.map((cp) => (
                    <div
                      key={cp.id}
                      className="border-l-2 border-slate-200 dark:border-slate-700 pl-2.5 py-0.5"
                    >
                      <p className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
                        {cp.panel}
                      </p>
                      <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                        {cp.fields}
                      </p>
                      <p className="text-[10px] font-semibold text-red-600 dark:text-red-400 leading-snug mt-0.5">
                        {cp.interaction}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sales Individual Report */}
              <section className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 space-y-2">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.individualTitle}
                </h3>
                <div className="space-y-1.5">
                  {slideData.individualBlocks.map((blk) => (
                    <div
                      key={blk.id}
                      className="flex items-baseline gap-2 border-b border-slate-100 dark:border-slate-800 pb-1 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-red-600 dark:text-red-400 w-24 shrink-0">
                        {blk.block}
                      </span>
                      <span className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                        {blk.scope}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* 5 Interactive Drill-Downs */}
            <section className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <GitBranch size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.drilldownTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                {slideData.drilldowns.map((dd) => (
                  <button
                    key={dd.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, dd.modal, GitBranch)}
                    className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-2.5 transition-colors focus:outline-none"
                  >
                    <ArrowUpRight
                      size={13}
                      className="absolute top-2.5 right-2.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                    />
                    <p className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                      {dd.code}
                    </p>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white pr-4 leading-tight mt-0.5">
                      {dd.trigger}
                    </h4>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mt-1">
                      {dd.path}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 3: Data Readiness & Portfolio Competencies */}
        {activeTab === 'readiness' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Database size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.readinessTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {slideData.dataDomains.map((dom) => (
                  <div
                    key={dom.id}
                    className="border-l-2 border-slate-200 dark:border-slate-700 pl-2.5"
                  >
                    <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                      {dom.area}
                    </p>
                    <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {dom.scope}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.competencyTitle}
                </h3>
              </div>
              <div className="space-y-3">
                {slideData.portfolioCompetencies.map((pc) => (
                  <div
                    key={pc.id}
                    className="border-l-2 border-red-600 dark:border-red-500 pl-2.5"
                  >
                    <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                      {pc.portfolio}
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                      {pc.coreTest}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: 9 Material Open Clarifications */}
        {activeTab === 'clarifications' && (
          <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="flex items-center gap-2">
                <HelpCircle size={15} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  {slideData.clarificationsTitle}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {slideData.clarificationsNote}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {slideData.clarifications.map((cl) => (
                <div
                  key={cl.id}
                  className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-3"
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                    {cl.code} • {cl.topic}
                  </p>
                  <p className="text-[11.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug mt-1">
                    {cl.question}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
