import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Flag,
  CalendarRange,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide24ModalPayload } from './data';
import { isMonthInRange } from './utils';

type Slide24TabId = 'gantt' | 'milestones-phases';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide24TabId>('gantt');

  const tabs: SlideTabItem<Slide24TabId>[] = [
    {
      id: 'gantt',
      label: isEn ? '12-Month Gantt Chart' : 'Gantt Chart 12 Bulan',
      icon: CalendarRange,
    },
    {
      id: 'milestones-phases',
      label: isEn ? 'Milestones & Phase Summary' : 'Milestone & Ringkasan Fase',
      icon: Flag,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide24ModalPayload,
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
      {/* Header + Tabs Below Title */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'gantt' ? (
          /* Tab 1: 12-Month 14-Row Gantt */
          <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 space-y-2.5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <CalendarRange size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.ganttSection.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
                <span className="inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-800 dark:bg-slate-200 inline-block" />
                  <span>{slideData.ganttSection.legendCore}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sky-700 dark:text-sky-300">
                  <span className="w-2.5 h-2.5 rounded-xs bg-sky-200 dark:bg-sky-700 inline-block" />
                  <span>{slideData.ganttSection.legendOngoing}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <span className="w-2.5 h-2.5 rounded-xs bg-red-600 inline-block" />
                  <span>{slideData.ganttSection.legendMilestone}</span>
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[700px] space-y-1">
                {/* Column Headers */}
                <div className="grid grid-cols-[2.8fr_repeat(12,minmax(0,1fr))] gap-1 px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                  <div>{slideData.phaseTableSection.columns.phase} / Workstream</div>
                  {slideData.months.map((m) => (
                    <div key={m} className="text-center tabular-nums">
                      {m}
                    </div>
                  ))}
                </div>

                {slideData.ganttSection.rows.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, row.modal, CalendarRange)}
                    className="group relative w-full grid grid-cols-[2.8fr_repeat(12,minmax(0,1fr))] gap-1 items-center text-left rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60 px-2 py-1.5 transition-colors cursor-pointer select-none"
                  >
                    <div className="pr-2 flex items-center justify-between gap-1 min-w-0">
                      <span className="text-[10.5px] font-bold text-slate-800 dark:text-slate-100 truncate">
                        {row.activity}
                      </span>
                      <ArrowUpRight
                        size={10}
                        className="text-slate-300 dark:text-slate-600 group-hover:text-red-600 dark:group-hover:text-red-400 shrink-0"
                      />
                    </div>

                    {slideData.months.map((_, mIdx) => {
                      const mNum = mIdx + 1;
                      const isMilestone = row.milestoneMonths?.includes(mNum);
                      const isActive =
                        row.kind === 'milestone'
                          ? Boolean(isMilestone)
                          : isMonthInRange(mNum, row.startMonth, row.endMonth);

                      let cellClass = 'bg-slate-100 dark:bg-slate-800/40';
                      if (isMilestone) {
                        cellClass = 'bg-red-600 dark:bg-red-500';
                      } else if (isActive && row.kind === 'ongoing') {
                        cellClass = 'bg-sky-200 dark:bg-sky-700/80';
                      } else if (isActive && row.kind === 'core') {
                        cellClass = 'bg-slate-800 dark:bg-slate-200';
                      }

                      return (
                        <div
                          key={mNum}
                          className={`h-3.5 rounded-xs ${cellClass}`}
                          aria-hidden="true"
                        />
                      );
                    })}
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Tab 2: 6 Milestone Cards + 5-Phase Deliverable Summary */
          <div className="space-y-4">
            <section aria-label={slideData.milestonesSection.title} className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Flag size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.milestonesSection.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {slideData.milestonesSection.cards.map((ms) => (
                  <button
                    key={ms.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, ms.modal, Flag)}
                    className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-all cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div>
                      <span className="block text-[10.5px] font-black text-red-600 dark:text-red-400 tabular-nums">
                        {ms.monthCode}
                      </span>
                      <div className="text-xs font-black text-slate-900 dark:text-white leading-snug pr-3 mt-1">
                        {ms.title}
                      </div>
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 leading-snug">
                      {ms.proposedTargetCue}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Layers size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.phaseTableSection.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
                {slideData.phaseTableSection.rows.map((ph) => (
                  <button
                    key={ph.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, ph.modal, Layers)}
                    className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="pr-3">
                      <span className="block text-[10px] font-bold text-red-600 dark:text-red-400 tabular-nums">
                        {ph.window}
                      </span>
                      <div className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                        {ph.phase}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
