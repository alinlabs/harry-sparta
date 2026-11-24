import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Landmark,
  Store,
  Server,
  FileSpreadsheet,
  SlidersHorizontal,
  ClipboardCheck,
  ChevronRight,
  Users,
  CheckCircle2,
  Filter,
  Percent,
  TrendingUp,
  Target,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import {
  useSlideData,
  type ClusterId,
  type MacroStatId,
  type GovernanceCardId,
  type FunnelStepId,
  type Slide07ModalPayload,
} from './data';

type Slide07TabId = 'matrix' | 'funnel';

const CLUSTER_ICONS: Record<ClusterId, LucideIcon> = {
  'b2b-cluster': Building2,
  'b2g-cluster': Landmark,
  'retail-pilot-cluster': Store,
};

const MACRO_ICONS: Record<MacroStatId, LucideIcon> = {
  'datacenter-mw': Server,
  'gov-procurement': FileSpreadsheet,
};

const GOVERNANCE_ICONS: Record<GovernanceCardId, LucideIcon> = {
  'prioritization-mapping': SlidersHorizontal,
  'evidence-required': ClipboardCheck,
};

const FUNNEL_ICONS: Record<FunnelStepId, LucideIcon> = {
  'target-account': Users,
  'relevant-need': CheckCircle2,
  'qualified-opportunity': Filter,
  'win-probability': Percent,
  'revenue-obtainable': TrendingUp,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<Slide07TabId>('matrix');
  const [hoveredClusterId, setHoveredClusterId] = useState<ClusterId | null>(null);

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide07ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide07TabId>[] = [
    {
      id: 'matrix',
      label: isEn ? 'Opportunity Map & Macro' : 'Peta Peluang & Makro',
      icon: Target,
    },
    {
      id: 'funnel',
      label: isEn ? 'Bottom-Up Market Sizing' : 'Bottom-Up Market Sizing',
      icon: Filter,
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
        {activeTab === 'matrix' ? (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left: Two-Axis Opportunity Map */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="mb-3 px-0.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.matrix.sectionTitle}
            </h3>
            <p className="mt-1 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              {slideData.matrix.unratedNote}
            </p>
          </div>

          {/* Matrix Coordinate Frame */}
          <div className="flex-1 flex flex-col">
            <div className="flex gap-2.5 flex-1">
              {/* Vertical Y-Axis */}
              <div className="hidden sm:flex flex-col items-center justify-between py-2 w-6 shrink-0">
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">
                  ▲
                </span>
                <span
                  className="text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {slideData.matrix.yAxisLabel}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">
                  •
                </span>
              </div>

              {/* 2x2 Coordinate Plot Area (Transparent — No background fill) */}
              <div className="relative flex-1 border-l-2 border-b-2 border-slate-300 dark:border-slate-700 p-3 sm:p-4 flex flex-col justify-between min-h-[270px]">
                {/* Dashed Quadrant Crosshair (visual anchor only, no fake scores) */}
                <div
                  className="absolute inset-y-3 left-1/2 border-l border-dashed border-slate-300/80 dark:border-slate-700 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-3 top-1/2 border-t border-dashed border-slate-300/80 dark:border-slate-700 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top/Bottom Y-axis hints on mobile & desktop */}
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-2 relative z-10">
                  <span>{slideData.matrix.yHighLabel}</span>
                  <span className="sm:hidden uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                    {slideData.matrix.yAxisLabel}
                  </span>
                </div>

                {/* Positioned Icon-Only Opportunity Nodes + Floating Hover Cards */}
                <div className="relative z-20 grid grid-cols-2 grid-rows-2 gap-4 flex-1 items-center justify-items-center py-4">
                  {slideData.matrix.clusters.map((cluster) => {
                    const Icon = CLUSTER_ICONS[cluster.id];
                    const isHovered = hoveredClusterId === cluster.id;

                    // Position floating card cleanly inside plot bounds per quadrant
                    const popoverPositionClass =
                      cluster.id === 'b2g-cluster'
                        ? 'top-full mt-2.5 left-1/2 -translate-x-1/4 sm:left-0 sm:translate-x-0'
                        : cluster.id === 'b2b-cluster'
                        ? 'top-full mt-2.5 right-0'
                        : 'bottom-full mb-2.5 right-0';

                    return (
                      <div
                        key={cluster.id}
                        className={`relative flex items-center justify-center ${cluster.positionClass} ${
                          isHovered ? 'z-30' : 'z-10'
                        }`}
                        onMouseEnter={() => setHoveredClusterId(cluster.id)}
                        onMouseLeave={() => setHoveredClusterId(null)}
                      >
                        <button
                          type="button"
                          aria-label={`${cluster.tag} — ${cluster.title}`}
                          onFocus={() => setHoveredClusterId(cluster.id)}
                          onBlur={() => setHoveredClusterId(null)}
                          onClick={(e) => handleOpenModal(e, cluster.modal, Icon)}
                          className={`group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center cursor-pointer select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                            isHovered
                              ? 'bg-red-600 text-white border-red-600 dark:border-red-500 scale-110 shadow-lg shadow-red-600/20'
                              : 'bg-red-600 text-white border-red-600 dark:border-red-500 shadow-md hover:scale-110 hover:shadow-lg'
                          }`}
                        >
                          <Icon size={22} />
                        </button>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: cluster.id === 'retail-pilot-cluster' ? 4 : -4, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: cluster.id === 'retail-pilot-cluster' ? 4 : -4, scale: 0.97 }}
                              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                              role="tooltip"
                              className={`pointer-events-none absolute ${popoverPositionClass} w-64 sm:w-72 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl p-3.5 text-left`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-start gap-2 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon size={14} />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 leading-tight">
                                      {cluster.tag}
                                    </span>
                                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                                      {cluster.title}
                                    </h4>
                                  </div>
                                </div>
                                <ArrowUpRight size={13} className="text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                              </div>

                              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                                <p className="text-[10.5px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                                  {cluster.itemsSummary}
                                </p>
                                <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-snug">
                                  {cluster.focusLine}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Y-low hint */}
                <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400 dark:text-slate-500 relative z-10">
                  <span>{slideData.matrix.yLowLabel}</span>
                </div>
              </div>
            </div>

            {/* Horizontal X-Axis Footer */}
            <div className="sm:pl-8 pt-1.5 flex items-center justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
              <span>{slideData.matrix.xLowLabel}</span>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {slideData.matrix.xAxisLabel} ▶
              </span>
              <span>{slideData.matrix.xHighLabel}</span>
            </div>
          </div>
        </div>

        {/* Right: Sourced Macro Context + Prioritization & Proof Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
          {/* Section Title & Explicit TAM Disclaimer */}
          <div className="px-0.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.macroSection.sectionTitle}
            </h3>
            <p className="mt-1 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              {slideData.macroSection.disclaimerBanner}
            </p>
          </div>

          {/* Two Sourced Macro Statistic Cards (Uniform Neutral Styling) */}
          <div className="grid grid-cols-1 gap-2.5">
            {slideData.macroSection.stats.map((stat) => {
              const Icon = MACRO_ICONS[stat.id];

              return (
                <button
                  key={stat.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, stat.modal, Icon)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div className="flex items-start gap-2.5 pr-5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight truncate">
                        {stat.sourceRef} • {stat.yearLabel}
                      </span>
                      <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {stat.caveatLine}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                    <span className="text-xl sm:text-2xl font-black tabular-nums text-red-600 dark:text-red-400 leading-none">
                      {stat.primaryMetric}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white mt-1.5 leading-snug">
                    {stat.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Prioritization 6 Factors + Required Evidence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2.5">
            {slideData.macroSection.governanceCards.map((card) => {
              const Icon = GOVERNANCE_ICONS[card.id];

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, card.modal, Icon)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={13}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div className="flex items-start gap-2 pr-4">
                    <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {card.tag}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-2 text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                    {card.keywords}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
        ) : (
      /* Block 3: Bottom-Up Market Sizing Funnel */
      <section aria-label={slideData.funnelSection.sectionTitle} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {slideData.funnelSection.sectionTitle}
          </h3>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {slideData.funnelSection.methodologyNote}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {slideData.funnelSection.steps.map((step, idx) => {
            const Icon = FUNNEL_ICONS[step.id];
            const isLast = idx === slideData.funnelSection.steps.length - 1;

            return (
              <div key={step.id} className="relative flex items-stretch">
                <button
                  type="button"
                  onClick={(e) => handleOpenModal(e, step.modal, Icon)}
                  className="group relative flex-1 text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={13}
                    className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div className="flex items-start gap-2 pr-5">
                    <Icon
                      size={14}
                      className="text-slate-600 dark:text-slate-300 shrink-0 mt-0.5"
                    />
                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  <p className="mt-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400 leading-snug">
                    {step.keywords}
                  </p>
                </button>

                {!isLast && (
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                    className="hidden lg:block absolute -right-[12px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
