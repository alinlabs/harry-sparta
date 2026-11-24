import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Target,
  Users,
  HeartHandshake,
  CalendarDays,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import {
  useSlideData,
  type LdModeId,
  type Slide12ModalPayload,
} from './data';

type Slide12TabId = 'calendar' | 'matrix';

const MODE_ICONS: Record<LdModeId, LucideIcon> = {
  training: GraduationCap,
  mentoring: Users,
  coaching: Target,
  counselling: HeartHandshake,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide12TabId>('calendar');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide12ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide12TabId>[] = [
    {
      id: 'calendar',
      label: isEn ? 'L&D Model & 4-Week Calendar' : 'Model L&D & Kalender 4-Minggu',
      icon: GraduationCap,
    },
    {
      id: 'matrix',
      label: isEn ? 'Gap-to-Grade Matrix' : 'Matriks Gap-to-Grade',
      icon: Target,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3.5"
    >
      {/* Block 1: Header + Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'calendar' ? (
          <div className="space-y-4">
            {/* Block 2: Four Sequential L&D Cards Connected by Learn -> Practice -> Review -> Improve */}
            <section aria-label={slideData.modesSection.sectionTitle} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.modesSection.sectionTitle}
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-700 dark:text-slate-200 shrink-0">
                  {slideData.cycleStrip.steps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className={idx === 0 ? 'text-red-600 dark:text-red-400' : ''}>
                        {step}
                      </span>
                      {idx < slideData.cycleStrip.steps.length - 1 && (
                        <ChevronRight size={13} className="text-red-500 dark:text-red-400 shrink-0" aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {slideData.modesSection.modes.map((mode, idx) => {
                  const Icon = MODE_ICONS[mode.id];
                  const isLast = idx === slideData.modesSection.modes.length - 1;

                  return (
                    <div key={mode.id} className="relative flex items-stretch">
                      <button
                        type="button"
                        onClick={(e) => handleOpenModal(e, mode.modal, Icon)}
                        className="group relative flex-1 text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center"
                      >
                        <ArrowUpRight
                          size={14}
                          className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                        />

                        <div className="flex items-center gap-2.5 pr-5">
                          <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                            <Icon size={15} />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 leading-tight">
                              {mode.cycleTag}
                            </span>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                              {mode.title}
                            </h4>
                          </div>
                        </div>
                      </button>

                      {!isLast && (
                        <ChevronRight
                          size={15}
                          aria-hidden="true"
                          className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Sample 4-Week Calendar */}
            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {slideData.calendarSection.sectionTitle}
                  </h3>
                  <p className="text-[10.5px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                    {slideData.calendarSection.simulationLabel}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-red-600 dark:text-red-400">
                  {slideData.calendarSection.quarterlyNote}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {slideData.calendarSection.weeks.map((wk) => (
                  <button
                    key={wk.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, wk.modal, CalendarDays)}
                    className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />

                    <div className="pr-4">
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {wk.weekLabel} · {wk.modeRef}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                        {wk.title}
                      </h4>
                    </div>

                    <p className="mt-2 text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                      {wk.focusKeywords}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.matrixSection.sectionTitle}
                </h3>
                <p className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                  {slideData.matrixSection.evidenceRule}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {slideData.matrixSection.rows.map((row) => (
                <button
                  key={row.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, row.modal, Target)}
                  className="group relative w-full text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3.5 py-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center"
                >
                  <ArrowUpRight
                    size={13}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />

                  <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-2 items-center pr-5 text-[11px] leading-snug">
                    <div className="sm:col-span-3 font-black text-slate-900 dark:text-white">
                      {row.gap}
                    </div>
                    <div className="sm:col-span-3 font-semibold text-slate-700 dark:text-slate-200">
                      {row.intervention}
                    </div>
                    <div className="sm:col-span-3 font-medium text-slate-600 dark:text-slate-300">
                      {row.evidence}
                    </div>
                    <div className="sm:col-span-3 font-bold text-red-600 dark:text-red-400">
                      {row.gradeReadiness}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              {slideData.hrBoundaryFooter}
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
