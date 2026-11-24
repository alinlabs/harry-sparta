import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarRange,
  CheckCircle2,
  Circle,
  Clock,
  FileCheck2,
  RotateCcw,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide26ModalPayload } from './data';
import { cycleMockupStatus, countMockupDone, type MockupTaskStatus } from './utils';

type Slide26TabId = 'plan' | 'deliverables';

const INITIAL_MOCKUP_STATUSES: Record<string, MockupTaskStatus> = {
  'd30-1': 'not_started',
  'd30-2': 'not_started',
  'd30-3': 'not_started',
  'd30-4': 'not_started',
  'd60-1': 'not_started',
  'd60-2': 'not_started',
  'd60-3': 'not_started',
  'd60-4': 'not_started',
  'd90-1': 'not_started',
  'd90-2': 'not_started',
  'd90-3': 'not_started',
  'd90-4': 'not_started',
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide26TabId>('plan');
  const [statuses, setStatuses] = useState<Record<string, MockupTaskStatus>>(INITIAL_MOCKUP_STATUSES);

  const tabs: SlideTabItem<Slide26TabId>[] = [
    {
      id: 'plan',
      label: isEn ? '30-60-90 Day Plan' : 'Rencana 30-60-90 Hari',
      icon: CalendarRange,
    },
    {
      id: 'deliverables',
      label: isEn ? 'Deliverables & Stakeholders' : 'Deliverables & Stakeholder',
      icon: FileCheck2,
    },
  ];

  const doneCount = countMockupDone(statuses);
  const hasChecklistChanges = doneCount > 0 || Object.values(statuses).some((s) => s !== 'not_started');

  const handleToggleActivity = (e: React.MouseEvent, activityId: string) => {
    e.stopPropagation();
    setStatuses((prev) => ({
      ...prev,
      [activityId]: cycleMockupStatus(prev[activityId] ?? 'not_started'),
    }));
  };

  const handleReset = () => {
    setStatuses(INITIAL_MOCKUP_STATUSES);
  };

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide26ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const renderStatusIcon = (status: MockupTaskStatus) => {
    if (status === 'done') {
      return <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />;
    }
    if (status === 'in_progress') {
      return <Clock size={13} className="text-slate-500 dark:text-slate-400 shrink-0" />;
    }
    return <Circle size={13} className="text-slate-400 dark:text-slate-500 shrink-0" />;
  };

  const statusTextColor = (status: MockupTaskStatus) => {
    if (status === 'done') return 'text-emerald-700 dark:text-emerald-400';
    if (status === 'in_progress') return 'text-slate-600 dark:text-slate-300';
    return 'text-slate-500 dark:text-slate-400';
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
        {activeTab === 'plan' ? (
          <div className="space-y-2.5">
            {hasChecklistChanges ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-red-600 dark:text-red-400 hover:underline focus:outline-none cursor-pointer"
                >
                  <RotateCcw size={11} />
                  {slideData.resetLabel}
                </button>
              </div>
            ) : null}

            {/* 3 Columns: Days 1-30, Days 31-60, Days 61-90 */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {slideData.columns.map((col) => (
                <div
                  key={col.id}
                  onClick={(e) => handleOpenModal(e, col.modal, CalendarRange)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal({ ...col.modal, icon: CalendarRange }, { size: 'lg' });
                    }
                  }}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-4 transition-colors cursor-pointer"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-3.5 right-3.5 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                  />

                  <div className="space-y-3">
                    <div className="pr-5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {col.windowLabel}
                      </p>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
                        {col.phaseTitle}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {col.activities.map((act) => {
                        const st = statuses[act.id] ?? 'not_started';
                        return (
                          <button
                            key={act.id}
                            type="button"
                            onClick={(e) => handleToggleActivity(e, act.id)}
                            className="w-full text-left flex items-start justify-between gap-2 py-1.5 px-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors focus:outline-none"
                          >
                            <span className="flex items-start gap-2 min-w-0">
                              <span className="mt-0.5">{renderStatusIcon(st)}</span>
                              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                                {act.label}
                              </span>
                            </span>
                            <span
                              className={`text-[9.5px] font-bold uppercase tracking-wide shrink-0 mt-0.5 tabular-nums ${statusTextColor(
                                st
                              )}`}
                            >
                              {slideData.statusLabels[st]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {slideData.columnLabels.output}:{' '}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      {col.outputSummary}
                    </span>
                  </div>
                </div>
              ))}
            </section>
          </div>
        ) : (
          <div className="space-y-3">
            {/* 8 Deliverables Grid */}
            <section className="space-y-2">
              <div className="flex items-center gap-1.5">
                <FileCheck2 size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {slideData.deliverablesTitle}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {slideData.deliverables.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, item.modal, FileCheck2)}
                    className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 px-3.5 py-3 transition-colors focus:outline-none cursor-pointer"
                  >
                    <ArrowUpRight
                      size={13}
                      className="absolute top-3 right-3 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                    />
                    <p className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                      {item.code} • {item.window}
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-1 pr-4">
                      {item.title}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Stakeholder Row (7 Roles) */}
            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Users size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {slideData.stakeholdersTitle}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                {slideData.stakeholders.map((st) => (
                  <div
                    key={st.id}
                    className="border-l-2 border-slate-200 dark:border-slate-700 pl-2.5"
                  >
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {st.role}
                    </p>
                    <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {st.focus}
                    </p>
                  </div>
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
