import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Users,
  ClipboardCheck,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import {
  useSlideData,
  type GradeId,
  type PathwayCardId,
  type Slide10ModalPayload,
} from './data';

type Slide10TabId = 'ladder' | 'pathways';

const GRADE_ICONS: Record<GradeId, LucideIcon> = {
  'grade-1': ShoppingBag,
  'grade-2': Truck,
  'grade-3': Building2,
  'grade-4': Landmark,
};

const PATHWAY_ICONS: Record<PathwayCardId, LucideIcon> = {
  'specialist-track': Award,
  'leader-track': Users,
  'hr-evidence': ClipboardCheck,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide10TabId>('ladder');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide10ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const cols = slideData.ladderSection.columns;

  const sectionTabs: SlideTabItem<Slide10TabId>[] = [
    {
      id: 'ladder',
      label: isEn ? '4-Grade Career Ladder' : 'Jenjang Karier 4 Grade',
      icon: Award,
    },
    {
      id: 'pathways',
      label: isEn ? 'Pathways & Compensation' : 'Jalur & Kompensasi',
      icon: Users,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-4"
    >
      {/* Block 1: Header + Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'ladder' ? (
          /* Block 2: Four-Level Career Ladder (Grade 1-4) */
          <section aria-label={slideData.ladderSection.sectionTitle} className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {slideData.ladderSection.sectionTitle}
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {slideData.ladderSection.principleNote}
          </span>
        </div>

        {/* Column Header Bar (Desktop) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-3 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <div className="col-span-2">{cols.grade}</div>
          <div className="col-span-2">{cols.scope}</div>
          <div className="col-span-3">{cols.competencies}</div>
          <div className="col-span-2">{cols.kpi}</div>
          <div className="col-span-3 pr-5">{cols.evidence} / {cols.gate}</div>
        </div>

        {/* 4 Grade Rows (Uniform Neutral Clickable Cards) */}
        <div className="space-y-2">
          {slideData.ladderSection.grades.map((row) => {
            const Icon = GRADE_ICONS[row.id];

            return (
              <button
                key={row.id}
                type="button"
                onClick={(e) => handleOpenModal(e, row.modal, Icon)}
                className="group relative w-full text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 sm:px-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 lg:gap-3 items-start pr-5">
                  {/* Col 1: Grade 1-4 + Portfolio */}
                  <div className="lg:col-span-2 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 leading-tight">
                        {row.gradeLabel}
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mt-0.5">
                        {row.portfolioName}
                      </h4>
                    </div>
                  </div>

                  {/* Col 2: Scope */}
                  <div className="lg:col-span-2 text-[11px] leading-snug">
                    <span className="lg:hidden font-bold text-slate-400 dark:text-slate-500 uppercase text-[9.5px] block">
                      {cols.scope}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {row.scope}
                    </span>
                  </div>

                  {/* Col 3: Required Competencies */}
                  <div className="lg:col-span-3 text-[11px] leading-snug">
                    <span className="lg:hidden font-bold text-slate-400 dark:text-slate-500 uppercase text-[9.5px] block">
                      {cols.competencies}
                    </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">
                      {row.competencies}
                    </span>
                  </div>

                  {/* Col 4: Performance KPI */}
                  <div className="lg:col-span-2 text-[11px] leading-snug">
                    <span className="lg:hidden font-bold text-slate-400 dark:text-slate-500 uppercase text-[9.5px] block">
                      {cols.kpi}
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {row.kpi}
                    </span>
                  </div>

                  {/* Col 5: Evidence & Advancement Gate */}
                  <div className="lg:col-span-3 text-[11px] leading-snug space-y-0.5">
                    <div>
                      <span className="lg:hidden font-bold text-slate-400 dark:text-slate-500 uppercase text-[9.5px] block">
                        {cols.evidence}
                      </span>
                      <span className="font-medium text-slate-600 dark:text-slate-300 block">
                        {row.evidence}
                      </span>
                    </div>
                    <span className="block text-[10.5px] font-bold text-red-600 dark:text-red-400">
                      {row.gate}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
        ) : (
      /* Block 3: Two Career Pathways + Required HR Data + Governance Footer */
      <section
        aria-label={slideData.pathwaysSection.sectionTitle}
        className="space-y-3"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {slideData.pathwaysSection.sectionTitle}
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {slideData.pathwaysSection.ruleNote}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {slideData.pathwaysSection.items.map((item) => {
            const Icon = PATHWAY_ICONS[item.id];

            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => handleOpenModal(e, item.modal, Icon)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-start gap-2.5 pr-5">
                  <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {item.tag}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <p className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                  {item.keywords}
                </p>
              </button>
            );
          })}
        </div>

        {/* Mandatory Compensation Mapping Footer */}
        <p className="pt-0.5 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
          {slideData.compensationFooter}
        </p>
      </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
