import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Database,
  MessageSquare,
  Eye,
  ClipboardCheck,
  GitMerge,
  Grid3X3,
  Map,
  FileSearch,
  ShieldAlert,
  ListChecks,
  AlertCircle,
  Layers,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import {
  useSlideData,
  type AuditStageId,
  type DeliverableId,
  type DiagnosticMethod,
  type Slide11ModalPayload,
} from './data';
import { getFunnelWidthPercent, type SkillGroup } from './utils';

type Slide11TabId = 'diagnostic' | 'deliverables';

const STAGE_ICONS: Record<AuditStageId, LucideIcon> = {
  'stage-data': Database,
  'stage-interview': MessageSquare,
  'stage-observe': Eye,
  'stage-test': ClipboardCheck,
  'stage-findings': GitMerge,
};

const DELIVERABLE_ICONS: Record<DeliverableId, LucideIcon> = {
  'out-skill-matrix': Grid3X3,
  'out-process-map': Map,
  'out-data-quality': FileSearch,
  'out-risk-list': ShieldAlert,
  'out-idp-action': ListChecks,
};

const METHOD_ORDER: DiagnosticMethod[] = ['data', 'interview', 'observe', 'test'];

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<Slide11TabId>('diagnostic');
  const [skillFilter, setSkillFilter] = useState<SkillGroup>('all');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide11ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const filteredCompetencies = slideData.heatmapSection.competencies.filter((comp) =>
    skillFilter === 'all' ? true : comp.group === skillFilter
  );

  const totalStages = slideData.funnelSection.stages.length;

  const sectionTabs: SlideTabItem<Slide11TabId>[] = [
    {
      id: 'diagnostic',
      label: isEn ? 'Audit & Competency Map' : 'Audit & Peta Kompetensi',
      icon: Grid3X3,
    },
    {
      id: 'deliverables',
      label: isEn ? 'Deliverables & Scope Limits' : 'Deliverables & Batasan',
      icon: ListChecks,
    },
  ];

  const skillTabs: SlideTabItem<SkillGroup>[] = [
    { id: 'all', label: slideData.heatmapSection.filterLabels.all, icon: Layers },
    { id: 'hard', label: slideData.heatmapSection.filterLabels.hard, icon: Wrench },
    { id: 'soft', label: slideData.heatmapSection.filterLabels.soft, icon: MessageSquare },
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
        {activeTab === 'diagnostic' ? (
          /* Block 2: 5-Stage Diagnostic Audit Funnel (Left 5 cols) + Competency Heatmap (Right 7 cols) */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left: 5-Stage Audit Funnel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.funnelSection.sectionTitle}
            </h3>
            <p className="text-[11px] font-semibold text-red-600 dark:text-red-400 mt-0.5">
              {slideData.funnelSection.sequenceLabel}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center space-y-2">
            {slideData.funnelSection.stages.map((stage, idx) => {
              const Icon = STAGE_ICONS[stage.id];
              const widthPct = getFunnelWidthPercent(idx, totalStages);

              return (
                <div
                  key={stage.id}
                  style={{ width: `${widthPct}%` }}
                  className="w-full transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(e, stage.modal, Icon)}
                    className="group relative w-full text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-2.5 sm:px-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={13}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    <div className="flex items-center gap-2.5 pr-5">
                      <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 leading-tight">
                          {stage.stepCode}
                        </span>
                        <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                          {stage.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Competency Heatmap Matrix (Hard Skills & Soft Skills — Privacy Protected) */}
        <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.heatmapSection.sectionTitle}
            </h3>

            <SlideTabs
              tabs={skillTabs}
              activeTab={skillFilter}
              onChange={setSkillFilter}
              size="sm"
              align="end"
              ariaLabel={slideData.heatmapSection.sectionTitle}
            />
          </div>

          {/* Heatmap Grid */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[440px] space-y-1">
              {/* Matrix Header */}
              <div className="grid grid-cols-12 gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <div className="col-span-6">{slideData.heatmapSection.methodHeaders.skill}</div>
                <div className="col-span-1 text-center">{slideData.heatmapSection.methodHeaders.data}</div>
                <div className="col-span-2 text-center">{slideData.heatmapSection.methodHeaders.interview}</div>
                <div className="col-span-1 text-center">{slideData.heatmapSection.methodHeaders.observe}</div>
                <div className="col-span-2 text-center pr-4">{slideData.heatmapSection.methodHeaders.test}</div>
              </div>

              {/* Matrix Rows (Clickable for Method & Privacy Detail) */}
              <div className="space-y-1 max-h-[275px] overflow-y-auto no-scrollbar pr-0.5">
                {filteredCompetencies.map((comp) => {
                  const Icon = ClipboardCheck;
                  const colSpanMap: Record<DiagnosticMethod, string> = {
                    data: 'col-span-1',
                    interview: 'col-span-2',
                    observe: 'col-span-1',
                    test: 'col-span-2 pr-4',
                  };

                  return (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, comp.modal, Icon)}
                      className="group relative w-full grid grid-cols-12 gap-1.5 items-center text-left px-2.5 py-1.5 rounded-lg bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 transition-colors cursor-pointer select-none"
                    >
                      <ArrowUpRight
                        size={12}
                        className="absolute top-1/2 -translate-y-1/2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />

                      <div className="col-span-6 min-w-0">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 shrink-0">
                            {comp.group === 'hard' ? 'Hard' : 'Soft'}
                          </span>
                          <span className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                            {comp.name}
                          </span>
                        </div>
                        <span className="block text-[9.5px] font-medium text-slate-500 dark:text-slate-400 truncate">
                          {comp.focusKeywords}
                        </span>
                      </div>

                      {METHOD_ORDER.map((method) => {
                        const isPrimary = comp.primaryMethods.includes(method);
                        const isSupporting = comp.supportingMethods.includes(method);
                        return (
                          <div key={method} className={`${colSpanMap[method]} flex justify-center`}>
                            <span
                              aria-label={
                                isPrimary
                                  ? slideData.heatmapSection.legendPrimary
                                  : isSupporting
                                  ? slideData.heatmapSection.legendSupporting
                                  : slideData.heatmapSection.legendBlank
                              }
                              className={`h-4 w-7 rounded-sm border transition-colors ${
                                isPrimary
                                  ? 'bg-red-600 dark:bg-red-500 border-red-600 dark:border-red-500'
                                  : isSupporting
                                  ? 'bg-red-200 dark:bg-red-900/60 border-red-300 dark:border-red-800'
                                  : 'bg-slate-100 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3.5 h-2.5 rounded-xs bg-red-600 dark:bg-red-500 inline-block" />
                <span>{slideData.heatmapSection.legendPrimary}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3.5 h-2.5 rounded-xs bg-red-200 dark:bg-red-900/60 inline-block" />
                <span>{slideData.heatmapSection.legendSupporting}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3.5 h-2.5 rounded-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 inline-block" />
                <span>{slideData.heatmapSection.legendBlank}</span>
              </span>
            </div>
            <span className="tabular-nums font-bold text-slate-600 dark:text-slate-300">
              {filteredCompetencies.length} / {slideData.heatmapSection.competencies.length}
            </span>
          </div>
        </div>
      </section>
        ) : (
      /* Block 3: 5 Deliverables & 30/60/90-Day Action Output + Boundary Caveat */
      <section aria-label={slideData.deliverablesSection.sectionTitle} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {slideData.deliverablesSection.sectionTitle}
          </h3>
          <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
            {slideData.deliverablesSection.horizonNote}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {slideData.deliverablesSection.items.map((item) => {
            const Icon = DELIVERABLE_ICONS[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => handleOpenModal(e, item.modal, Icon)}
                className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-2.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center"
              >
                <ArrowUpRight
                  size={13}
                  className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-center gap-2 min-w-0 w-full">
                  <div className="w-6 h-6 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                    <Icon size={13} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 pr-4 leading-tight">
                      {item.tag}
                    </span>
                    <h4 className="text-[11px] font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-0.5 whitespace-nowrap truncate">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-1.5 pt-0.5 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
          <AlertCircle size={13} className="shrink-0 mt-0.5" />
          <span>{slideData.caveatFooter}</span>
        </div>
      </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
