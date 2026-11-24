import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  Filter,
  LayoutGrid,
  Users,
  GitMerge,
  TrendingUp,
  Database,
  type LucideIcon,
} from 'lucide-react';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide25ModalPayload } from './data';
import {
  isMonthActive,
  type WorkstreamFilterId,
  type PhaseFilterId,
  type CadenceNatureFilterId,
} from './utils';

const WORKSTREAM_ICONS: Record<WorkstreamFilterId, LucideIcon> = {
  ALL: LayoutGrid,
  People: Users,
  Process: GitMerge,
  Revenue: TrendingUp,
  Data: Database,
};

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();

  const [workstream, setWorkstream] = useState<WorkstreamFilterId>('ALL');
  const [phase, setPhase] = useState<PhaseFilterId>('ALL');
  const [nature, setNature] = useState<CadenceNatureFilterId>('ALL');

  const workstreamTabs: SlideTabItem<WorkstreamFilterId>[] = slideData.workstreamOptions.map((opt) => ({
    id: opt.id,
    label: opt.label,
    icon: WORKSTREAM_ICONS[opt.id] ?? LayoutGrid,
  }));

  const filteredRows = slideData.rows.filter((r) => {
    if (workstream !== 'ALL' && r.workstream !== workstream) return false;
    if (phase !== 'ALL' && r.phase !== phase) return false;
    if (nature !== 'ALL' && r.nature !== nature) return false;
    return true;
  });

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide25ModalPayload,
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
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-2.5"
    >
      {/* Header + Workstream Tabs Below Title */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={workstreamTabs} activeTab={workstream} onChange={setWorkstream} />
      </header>

      {/* Filter Bar + Gantt 12 Columns */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 space-y-2">
        {/* Controls: Phase / Nature */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              <Filter size={11} className="text-red-600 dark:text-red-400" />
              Filter:
            </span>

            <select
              aria-label={slideData.filterLabels.phase}
              value={phase}
              onChange={(e) => setPhase(e.target.value as PhaseFilterId)}
              className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
            >
              {slideData.phaseOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select
              aria-label={slideData.filterLabels.nature}
              value={nature}
              onChange={(e) => setNature(e.target.value as CadenceNatureFilterId)}
              className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
            >
              {slideData.natureOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tabular-nums shrink-0">
            {filteredRows.length} / {slideData.rows.length}
          </span>
        </div>

        {/* 12-Column Gantt Grid */}
        <SlideTabPanel tabKey={`${workstream}-${phase}-${nature}`}>
          <div className="overflow-x-auto">
            <div className="min-w-[760px] space-y-0.5">
              {/* Table Header */}
              <div className="grid grid-cols-[2.7fr_repeat(12,minmax(0,1fr))_1.5fr] gap-1 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <div>{slideData.tableHeaders.activity}</div>
                {slideData.months.map((m) => (
                  <div key={m} className="text-center tabular-nums">
                    {m}
                  </div>
                ))}
                <div className="pl-2">{slideData.tableHeaders.output}</div>
              </div>

              {filteredRows.map((row) => (
                <button
                  key={row.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, row.modal, CalendarDays)}
                  className="group relative w-full grid grid-cols-[2.7fr_repeat(12,minmax(0,1fr))_1.5fr] gap-1 items-center text-left rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60 px-2 py-1 transition-colors cursor-pointer select-none"
                >
                  <div className="pr-2 flex items-center justify-between gap-1 min-w-0">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
                        {row.rowNo}
                      </span>
                      <span className="text-[10.5px] font-bold text-slate-900 dark:text-white truncate">
                        {row.activity}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={10}
                      className="text-slate-300 dark:text-slate-600 group-hover:text-red-600 dark:group-hover:text-red-400 shrink-0"
                    />
                  </div>

                  {slideData.months.map((_, mIdx) => {
                    const mNum = mIdx + 1;
                    const isMilestone = row.milestoneMonths?.includes(mNum);
                    const active = isMonthActive(mNum, row.activeMonths);

                    let cellClass = 'bg-slate-100 dark:bg-slate-800/40';
                    if (isMilestone) {
                      cellClass = 'bg-red-600 dark:bg-red-500';
                    } else if (active && row.nature === 'recurring') {
                      cellClass = 'bg-sky-200 dark:bg-sky-700/80';
                    } else if (active) {
                      cellClass = 'bg-slate-800 dark:bg-slate-200';
                    }

                    return <div key={mNum} className={`h-3.5 rounded-xs ${cellClass}`} aria-hidden="true" />;
                  })}

                  <div className="pl-2 text-[9.5px] font-semibold text-slate-600 dark:text-slate-300 truncate">
                    {row.controlOutput}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </SlideTabPanel>

        {/* Bottom Color Legend */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[9.5px]">
          <div className="flex flex-wrap items-center gap-3 font-bold">
            <span className="inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-800 dark:bg-slate-200 inline-block" />
              <span>{slideData.legend.phased}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sky-700 dark:text-sky-300">
              <span className="w-2.5 h-2.5 rounded-xs bg-sky-200 dark:bg-sky-700 inline-block" />
              <span>{slideData.legend.recurring}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
              <span className="w-2.5 h-2.5 rounded-xs bg-red-600 inline-block" />
              <span>{slideData.legend.milestone}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 inline-block" />
              <span>{slideData.legend.inactive}</span>
            </span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
