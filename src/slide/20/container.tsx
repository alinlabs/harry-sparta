import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Database,
  Kanban,
  Gauge,
  Filter,
  ArrowRight,
  Layers,
  Store,
  Truck,
  Building2,
  Landmark,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide20ModalPayload } from './data';
import type { CrmSegmentFilter } from './utils';

type Slide20SectionTab = 'funnel' | 'workspace';

const SEGMENT_ICON_MAP: Record<CrmSegmentFilter, LucideIcon> = {
  ALL: Layers,
  Retail: Store,
  Distribution: Truck,
  B2B: Building2,
  B2G: Landmark,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [sectionTab, setSectionTab] = useState<Slide20SectionTab>('funnel');
  const [workspaceTab, setWorkspaceTab] = useState<'kanban' | 'objects'>('kanban');
  const [segmentFilter, setSegmentFilter] = useState<CrmSegmentFilter>('ALL');
  const [sourceIndex, setSourceIndex] = useState<number>(0);
  const [periodIndex, setPeriodIndex] = useState<number>(0);

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide20ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const visibleDeals =
    segmentFilter === 'ALL'
      ? slideData.kanbanSection.deals
      : slideData.kanbanSection.deals.filter((d) => d.segment === segmentFilter);

  const sectionTabs: SlideTabItem<Slide20SectionTab>[] = [
    {
      id: 'funnel',
      label: isEn ? '8-Stage Sales Funnel' : 'Funnel 8-Tahap',
      icon: Layers,
    },
    {
      id: 'workspace',
      label: isEn ? 'CRM Workspace & Cockpit' : 'Workspace CRM & Kokpit',
      icon: Kanban,
    },
  ];

  const workspaceSubTabs: SlideTabItem<'kanban' | 'objects'>[] = [
    { id: 'kanban', label: slideData.workspaceTabs.kanban, icon: Kanban },
    { id: 'objects', label: slideData.workspaceTabs.objects, icon: Database },
  ];

  const segmentTabs: SlideTabItem<CrmSegmentFilter>[] = slideData.cockpitSection.segments.map((seg) => ({
    id: seg.id,
    label: seg.label,
    icon: SEGMENT_ICON_MAP[seg.id] || Filter,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3"
    >
      {/* Header + Section Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={sectionTab} onChange={setSectionTab} />
      </header>

      <SlideTabPanel tabKey={sectionTab}>
        {sectionTab === 'funnel' ? (
          <section
            aria-label={slideData.funnelSection.sectionTitle}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Layers size={14} className="text-red-600 dark:text-red-400 shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.funnelSection.sectionTitle}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {slideData.funnelSection.stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, stage.modal, Layers)}
                  className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between min-h-[92px]"
                >
                  <ArrowUpRight
                    size={12}
                    className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />
                  <div>
                    <span className="block text-[10px] font-bold text-red-600 dark:text-red-400 tabular-nums">
                      {stage.step}
                    </span>
                    <span className="block text-xs font-black text-slate-900 dark:text-white leading-snug pr-4 mt-0.5">
                      {stage.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1 pt-2 mt-2 border-t border-slate-200/70 dark:border-slate-800 text-[10px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400 truncate">
                      {stage.ownerCue}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 tabular-nums shrink-0 flex items-center gap-0.5">
                      {stage.conversionPlaceholder}
                      {idx < slideData.funnelSection.stages.length - 1 && (
                        <ArrowRight size={9} className="text-slate-300 dark:text-slate-600 hidden lg:inline" />
                      )}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left 7 cols */}
            <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between space-y-2.5">
              {/* Sub-tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <SlideTabs
                  tabs={workspaceSubTabs}
                  activeTab={workspaceTab}
                  onChange={setWorkspaceTab}
                  size="sm"
                  align="start"
                />

                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {segmentFilter === 'ALL' ? (isEn ? 'All Segments' : 'Semua Segmen') : segmentFilter}
                </span>
              </div>

              {workspaceTab === 'kanban' ? (
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100">
                      {slideData.kanbanSection.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 flex-1">
                    {visibleDeals.map((deal) => (
                      <button
                        key={deal.id}
                        type="button"
                        onClick={(e) => handleOpenModal(e, deal.modal, Kanban)}
                        className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between space-y-2"
                      >
                        <ArrowUpRight
                          size={12}
                          className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                        />
                        <div className="space-y-1 pr-4">
                          <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                            {deal.stageLabel} · {deal.segment}
                          </span>
                          <div className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                            {deal.accountPlaceholder}
                          </div>
                          <div className="text-[10.5px] font-bold text-slate-700 dark:text-slate-200 tabular-nums">
                            {deal.valuePlaceholder}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                          <div className="truncate font-semibold text-slate-600 dark:text-slate-300">
                            {deal.ownerPlaceholder}
                          </div>
                          <div className="truncate font-semibold text-slate-700 dark:text-slate-200">
                            {deal.nextActivity}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1.5">
                        {slideData.crmObjectsSection.objectsTitle}
                      </h4>
                      <ol className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10.5px] font-semibold text-slate-700 dark:text-slate-200">
                        {slideData.crmObjectsSection.objects.map((obj, idx) => (
                          <li key={obj} className="truncate">
                            <span className="text-slate-400 dark:text-slate-500 tabular-nums mr-1">
                              {idx + 1}.
                            </span>
                            {obj}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                        {slideData.crmObjectsSection.fieldsTitle}
                      </h4>
                      <ol className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10.5px] font-semibold text-slate-700 dark:text-slate-200">
                        {slideData.crmObjectsSection.mandatoryFields.map((fld, idx) => (
                          <li key={fld} className="truncate">
                            <span className="text-slate-400 dark:text-slate-500 tabular-nums mr-1">
                              {idx + 1}.
                            </span>
                            {fld}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Right 5 cols: Manager Cockpit Mockup */}
            <section
              aria-label={slideData.cockpitSection.title}
              className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between space-y-2.5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Gauge size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {slideData.cockpitSection.title}
                    </h3>
                  </div>
                </div>

                {/* Interactive Mockup Filters (Segment / Source / Period) */}
                <div className="space-y-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-[10px]">
                  <SlideTabs
                    tabs={segmentTabs}
                    activeTab={segmentFilter}
                    onChange={setSegmentFilter}
                    size="sm"
                    align="start"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <select
                      aria-label={slideData.cockpitSection.filterLabels.source}
                      value={sourceIndex}
                      onChange={(e) => setSourceIndex(Number(e.target.value))}
                      className="w-full rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 text-[10px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
                    >
                      {slideData.cockpitSection.sources.map((src, idx) => (
                        <option key={src} value={idx}>
                          {src}
                        </option>
                      ))}
                    </select>
                    <select
                      aria-label={slideData.cockpitSection.filterLabels.period}
                      value={periodIndex}
                      onChange={(e) => setPeriodIndex(Number(e.target.value))}
                      className="w-full rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 text-[10px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
                    >
                      {slideData.cockpitSection.periods.map((prd, idx) => (
                        <option key={prd} value={idx}>
                          {prd}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

          {/* 8 Cockpit Metric Cards (Uniform Neutral Styling) */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            {slideData.cockpitSection.metrics.map((metric) => (
              <button
                key={metric.id}
                type="button"
                onClick={(e) => handleOpenModal(e, metric.modal, Gauge)}
                className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 p-2.5 transition-colors cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={11}
                  className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                />
                <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pr-3 truncate">
                  {metric.label}
                </span>
                <div className="text-xs font-black text-slate-900 dark:text-white tabular-nums mt-0.5">
                  {metric.placeholderValue}
                </div>
                <div className="text-[9.5px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {metric.ruleCue}
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
