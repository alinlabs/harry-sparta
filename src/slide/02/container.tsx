import React from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  Target,
  Users,
  Compass,
  Workflow,
  TrendingUp,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
  ArrowUpRight,
  ArrowRight,
  Info,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { useDetailModal, type DetailModalItem } from '@/components/ui';
import {
  useSlideData,
  type ExecutiveKpiId,
  type TransformationStageId,
  type PortfolioId,
} from './data';

const KPI_ICONS: Record<ExecutiveKpiId, LucideIcon> = {
  'current-revenue': Wallet,
  'company-target': Target,
  'commercial-team': Users,
};

const STAGE_ICONS: Record<TransformationStageId, LucideIcon> = {
  current: Compass,
  transformation: Workflow,
  outcome: TrendingUp,
};

const PORTFOLIO_ICONS: Record<PortfolioId, LucideIcon> = {
  retail: ShoppingBag,
  distribution: Truck,
  b2b: Building2,
  b2g: Landmark,
};

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();

  const handleOpenItem = (
    e: React.MouseEvent,
    modal: DetailModalItem,
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
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-4 sm:space-y-5"
    >
      {/* Block 1: Slide Header */}
      <header className="text-center pb-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
      </header>

      {/* Block 2: Top Row — 3 Uniform Neutral KPI Cards (Zero Badge Boxes, Zero Special Card) */}
      <section aria-label={slideData.kpiSectionLabel}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5">
          {slideData.kpis.map((kpi) => {
            const Icon = KPI_ICONS[kpi.id];

            return (
              <button
                key={kpi.id}
                type="button"
                onClick={(e) => handleOpenItem(e, kpi.modal, Icon)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 sm:p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-center justify-between gap-2.5 pr-5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                        {kpi.tag}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        {kpi.label}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 pt-1.5">
                    <span className="block text-lg sm:text-xl font-black tabular-nums tracking-tight leading-[0.95] text-slate-900 dark:text-white">
                      {kpi.value}
                    </span>
                    <span className="block text-[10px] font-medium leading-none text-slate-500 dark:text-slate-400 mt-0.5">
                      {kpi.unit}
                    </span>
                  </div>
                </div>

                <p className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                  {kpi.shortCue}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Block 3: Middle Row — Current -> Transformation -> Outcome (Uniform Neutral Cards) */}
      <section aria-label={slideData.flowSectionLabel}>
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {slideData.flowSectionLabel}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch">
          {slideData.transformationFlow.map((stage, idx) => {
            const Icon = STAGE_ICONS[stage.id];
            const isOutcome = stage.id === 'outcome';

            return (
              <div key={stage.id} className="relative flex flex-col">
                <button
                  type="button"
                  onClick={(e) => handleOpenItem(e, stage.modal, Icon)}
                  className="group relative flex-1 text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div>
                    <div className="flex items-center gap-2.5 pr-6 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                        <Icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {stage.label}
                        </div>
                        <h4 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug">
                          {stage.title}
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mt-2">
                      {stage.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-center gap-2 text-[11.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          {isOutcome ? (
                            <CheckCircle2
                              size={12}
                              className="text-slate-500 dark:text-slate-400 shrink-0"
                            />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                          )}
                          <span className="truncate">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>

                {idx < slideData.transformationFlow.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 shadow-2xs pointer-events-none"
                  >
                    <ArrowRight size={12} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Block 4: Bottom Row — Four Uniform Commercial Portfolio Cards */}
      <section aria-label={slideData.portfolioSectionLabel}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {slideData.portfolioSectionLabel}
          </h3>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {slideData.portfolioSectionNote}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {slideData.portfolios.map((pf) => {
            const Icon = PORTFOLIO_ICONS[pf.id];
            const isB2G = Boolean(pf.isDevelopment);

            return (
              <button
                key={pf.id}
                type="button"
                onClick={(e) => handleOpenItem(e, pf.modal, Icon)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 sm:p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-center justify-between gap-2 pr-5">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">
                      {pf.title}
                    </h4>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className={`block font-black tabular-nums leading-none ${
                        isB2G
                          ? 'text-xs text-slate-900 dark:text-white'
                          : 'text-lg text-slate-900 dark:text-white'
                      }`}
                    >
                      {pf.share}
                    </span>
                  </div>
                </div>

                <p className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                  {pf.shortCue}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Block 5: Baseline & Claim Boundary Note */}
      <footer className="rounded-xl bg-slate-50/90 dark:bg-slate-900/75 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 flex items-start sm:items-center gap-2.5">
        <Info size={14} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
          <strong className="font-bold text-slate-900 dark:text-white mr-1">
            {slideData.governanceNote.label}:
          </strong>
          {slideData.governanceNote.text}
        </p>
      </footer>
    </motion.div>
  );
};

export default Container;
