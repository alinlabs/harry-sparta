import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  Wallet,
  PackageCheck,
  FileCheck2,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
  Flag,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import {
  useSlideData,
  type MilestoneId,
  type EngineId,
  type GuardrailId,
  type Slide08ModalPayload,
} from './data';
import { toRangePercent } from './utils';

type Slide08TabId = 'bridge' | 'engines';

const GUARDRAIL_ICONS: Record<GuardrailId, LucideIcon> = {
  'gross-margin': TrendingUp,
  'overdue-ar': Wallet,
  'stock-aging': PackageCheck,
  'baseline-evidence': FileCheck2,
};

const ENGINE_ICONS: Record<EngineId, LucideIcon> = {
  'retail-engine': ShoppingBag,
  'dist-engine': Truck,
  'b2b-engine': Building2,
  'b2g-engine': Landmark,
};

const MILESTONE_ICON: Record<MilestoneId, LucideIcon> = {
  m0: TrendingUp,
  m6: TrendingUp,
  m9: TrendingUp,
  m12: TrendingUp,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<Slide08TabId>('bridge');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide08ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const currentBar = slideData.bridgePanel.bars[0];
  const targetBar = slideData.bridgePanel.bars[1];

  const currentLeftPct = toRangePercent(currentBar.minBillions);
  const currentWidthPct = toRangePercent(currentBar.maxBillions) - currentLeftPct;
  const targetLeftPct = toRangePercent(targetBar.minBillions);
  const targetWidthPct = toRangePercent(targetBar.maxBillions) - targetLeftPct;
  const gapLeftPct = currentLeftPct + currentWidthPct;
  const gapWidthPct = Math.max(0, targetLeftPct - gapLeftPct);

  const sectionTabs: SlideTabItem<Slide08TabId>[] = [
    {
      id: 'bridge',
      label: isEn ? 'Target Bridge & Guardrails' : 'Jembatan Target & Guardrail',
      icon: TrendingUp,
    },
    {
      id: 'engines',
      label: isEn ? 'Milestones & Growth Engines' : 'Milestone & Mesin Pertumbuhan',
      icon: Flag,
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
        {activeTab === 'bridge' ? (
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Left: Range Comparison Chart Canvas */}
          <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                {slideData.bridgePanel.sectionTitle}
              </h3>
              <span className="text-xs font-black tabular-nums text-red-600 dark:text-red-400">
                {slideData.bridgePanel.gapLabel}: {slideData.bridgePanel.gapValue}
              </span>
            </div>

            {/* Horizontal Range Tracks */}
            <div className="space-y-3 pt-1">
              {/* Bar A: Current Interval (Rp2.5 - 3.0B) */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    {currentBar.label}{' '}
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      • {currentBar.note}
                    </span>
                  </span>
                  <span className="font-black tabular-nums text-slate-900 dark:text-white">
                    {currentBar.rangeText}
                  </span>
                </div>
                <div className="relative h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                  {/* Subtle baseline up to min */}
                  <div
                    className="absolute inset-y-0 left-0 bg-slate-200/70 dark:bg-slate-700/40"
                    style={{ width: `${currentLeftPct}%` }}
                  />
                  {/* Interval bar */}
                  <div
                    className="absolute inset-y-1 rounded bg-slate-700 dark:bg-slate-400 flex items-center justify-center"
                    style={{ left: `${currentLeftPct}%`, width: `${currentWidthPct}%` }}
                  />
                </div>
              </div>

              {/* Arithmetic Gap Bracket Indicator */}
              <div className="relative h-8 flex items-center">
                <div
                  className="hidden sm:flex absolute items-center justify-center border-x-2 border-b-2 border-red-500/70 dark:border-red-400/70 h-2.5 top-0 rounded-b-sm"
                  style={{ left: `${gapLeftPct}%`, width: `${gapWidthPct}%` }}
                  aria-hidden="true"
                />
                <div
                  className="w-full sm:w-auto sm:absolute flex items-center justify-center sm:-translate-x-1/2 top-3"
                  style={{ left: `${gapLeftPct + gapWidthPct / 2}%` }}
                >
                  <span className="text-[11px] font-black tabular-nums text-red-600 dark:text-red-400 whitespace-nowrap">
                    {slideData.bridgePanel.gapValue}
                  </span>
                </div>
              </div>

              {/* Bar B: Target Interval (Rp4.0 - 5.0B) */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-slate-200">
                    {targetBar.label}{' '}
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      • {targetBar.note}
                    </span>
                  </span>
                  <span className="font-black tabular-nums text-red-600 dark:text-red-400">
                    {targetBar.rangeText}
                  </span>
                </div>
                <div className="relative h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-slate-200/70 dark:bg-slate-700/40"
                    style={{ width: `${targetLeftPct}%` }}
                  />
                  <div
                    className="absolute inset-y-1 rounded bg-red-600 dark:bg-red-500 flex items-center justify-center"
                    style={{ left: `${targetLeftPct}%`, width: `${targetWidthPct}%` }}
                  />
                </div>
              </div>

              {/* Scale Ticks 0..5M */}
              <div className="flex items-center justify-between text-[10px] font-semibold tabular-nums text-slate-400 dark:text-slate-500 pt-0.5 border-t border-slate-100 dark:border-slate-800">
                {slideData.bridgePanel.axisTicks.map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>
            </div>

            {/* Midpoint Arithmetic Illustration Disclaimer */}
            <div className="flex items-start gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              <AlertCircle size={13} className="shrink-0 mt-0.5" />
              <span>{slideData.bridgePanel.midpointNote}</span>
            </div>
          </div>

          {/* Right: 4 Compact Guardrail Cards matching left Range card height */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4 gap-2.5">
            {slideData.guardrailPanel.items.map((item) => {
              const Icon = GUARDRAIL_ICONS[item.id];

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, item.modal, Icon)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 px-3.5 py-2.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center"
                >
                  <ArrowUpRight
                    size={13}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div className="flex items-center gap-2.5 pr-5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                        {item.tag}
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
          </section>
        ) : (
          <div className="space-y-4">
        {/* Milestone Line M0 / M6 / M9 / M12 */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-0.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.milestonesSection.sectionTitle}
            </h3>
            <span className="text-[10.5px] font-normal text-slate-500 dark:text-slate-400">
              {slideData.milestonesSection.proposalQualifier}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {slideData.milestonesSection.items.map((ms, idx) => {
              const isLast = idx === slideData.milestonesSection.items.length - 1;
              const Icon = MILESTONE_ICON[ms.id];

              return (
                <div key={ms.id} className="relative flex items-stretch">
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(e, ms.modal, Icon)}
                    className="group relative flex-1 text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-center"
                  >
                    <ArrowUpRight
                      size={13}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 pr-4">
                        {ms.period}
                      </span>
                      <span className="block text-base font-black tabular-nums text-slate-900 dark:text-white mt-0.5">
                        {ms.revenueRange}
                      </span>
                      <span className="block text-[10.5px] font-normal tabular-nums text-slate-500 dark:text-slate-400 leading-tight mt-1">
                        {ms.b2bB2gMix}
                      </span>
                    </div>
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
        </div>
        {/* Block 3: Four Portfolio Growth Engines (Explicitly Non-Equal Split) */}
        <section
          aria-label={slideData.enginesSection.sectionTitle}
          className="pt-3 border-t border-slate-200 dark:border-slate-800"
        >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2.5">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {slideData.enginesSection.sectionTitle}
          </h3>
          <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
            {slideData.enginesSection.nonEqualSplitNote}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {slideData.enginesSection.items.map((engine) => {
            const Icon = ENGINE_ICONS[engine.id];

            return (
              <button
                key={engine.id}
                type="button"
                onClick={(e) => handleOpenModal(e, engine.modal, Icon)}
                className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={13}
                  className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-start gap-2 pr-4">
                  <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                      {engine.portfolio}
                    </span>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                      {engine.lever}
                    </h4>
                  </div>
                </div>

                <span className="block mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                  {engine.note}
                </span>
              </button>
            );
          })}
        </div>
      </section>
          </div>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
