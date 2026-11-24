import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  Lock,
  Unlock,
  FileSpreadsheet,
  GitPullRequest,
  Calculator,
  PackageCheck,
  Award,
  type LucideIcon,
} from 'lucide-react';
import { useDetailModal, SlideTabs, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide19ModalPayload } from './data';
import { calculateMarginVsMarkupSimulation, type AccessRoleView } from './utils';

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const [roleView, setRoleView] = useState<AccessRoleView>('sales');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide19ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const simResult = calculateMarginVsMarkupSimulation(
    slideData.formulaSection.simHpp,
    slideData.formulaSection.simPrice
  );

  const roleTabs: SlideTabItem<AccessRoleView>[] = [
    { id: 'sales', label: slideData.mockupSection.roleLabels.sales, icon: Lock },
    { id: 'approver', label: slideData.mockupSection.roleLabels.approver, icon: Unlock },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3"
    >
      {/* Block 1: Header */}
      <header className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
      </header>

      {/* Block 2: Left Price Request Mockup (6 cols) + Right Approval Flow, Formula Comparison & Policy Cards (6 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Left: Interactive Role-Gated Online Price Request Form Mockup */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.mockupSection.sectionTitle}
              </h3>
            </div>

            <SlideTabs
              tabs={roleTabs}
              activeTab={roleView}
              onChange={setRoleView}
              size="sm"
              align="end"
              ariaLabel={slideData.mockupSection.roleToggleLabel}
            />
          </div>

          {/* 12 Wireframe Fields (Clickable Card Surface) */}
          <button
            type="button"
            onClick={(e) => handleOpenModal(e, slideData.mockupSection.mockupModal, FileSpreadsheet)}
            className="group relative flex-1 text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between space-y-2"
          >
            <ArrowUpRight
              size={13}
              className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pr-4">
              {slideData.mockupSection.fields.map((field) => {
                const showApprover = roleView === 'approver';
                const displayValue = showApprover ? field.approverValue : field.salesValue;
                const isLockedDisplay = !showApprover && field.isRestrictedForSales;

                return (
                  <div
                    key={field.key}
                    className="py-1 border-b border-slate-200/70 dark:border-slate-700/70 min-w-0"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate">
                        {field.label}
                      </span>
                      {field.isRestrictedForSales &&
                        (showApprover ? (
                          <Unlock size={10} className="text-red-600 dark:text-red-400 shrink-0" />
                        ) : (
                          <Lock size={10} className="text-slate-400 dark:text-slate-500 shrink-0" />
                        ))}
                    </div>
                    <span
                      className={`block text-[10.5px] font-semibold truncate mt-0.5 ${
                        isLockedDisplay
                          ? 'text-slate-500 dark:text-slate-400'
                          : 'text-slate-800 dark:text-slate-100'
                      }`}
                    >
                      {displayValue}
                    </span>
                  </div>
                );
              })}
            </div>
          </button>
        </div>

        {/* Right: Approval Flow + Formula Comparison Table + Stock & Incentive Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
          {/* Approval Flow Card */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="flex items-center gap-1.5">
                <GitPullRequest size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.approvalSection.sectionTitle}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {slideData.approvalSection.stages.map((st, idx) => {
                const isLast = idx === slideData.approvalSection.stages.length - 1;
                return (
                  <div key={st.id} className="relative flex items-stretch">
                    <button
                      type="button"
                      onClick={(e) => handleOpenModal(e, st.modal, GitPullRequest)}
                      className="group relative flex-1 text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-2.5 transition-colors cursor-pointer select-none"
                    >
                      <ArrowUpRight
                        size={11}
                        className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <span className="block text-[9.5px] font-bold text-red-600 dark:text-red-400 tabular-nums">
                        {st.step}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug pr-3">
                        {st.role}
                      </h4>
                      <span className="block text-[9.5px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {st.ruleCue}
                      </span>
                    </button>
                    {!isLast && (
                      <ChevronRight
                        size={13}
                        aria-hidden="true"
                        className="hidden sm:block absolute -right-[11px] top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 pointer-events-none"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formula Comparison Table (Gross Margin % vs Markup %) */}
          <button
            type="button"
            onClick={(e) => handleOpenModal(e, slideData.formulaSection.formulaModal, Calculator)}
            className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-colors cursor-pointer select-none space-y-2"
          >
            <ArrowUpRight
              size={13}
              className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
            />
            <div className="flex items-center gap-1.5 pr-5">
              <Calculator size={13} className="text-red-600 dark:text-red-400 shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.formulaSection.sectionTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 p-2.5">
                <div className="flex items-baseline justify-between gap-1">
                  <span className="text-[11px] font-black text-red-600 dark:text-red-400">
                    {slideData.formulaSection.marginTitle}
                  </span>
                  <span className="text-xs font-black text-red-600 dark:text-red-400 tabular-nums">
                    {simResult.grossMarginPct}%
                  </span>
                </div>
                <span className="block text-[10px] font-bold text-slate-800 dark:text-slate-100 mt-1">
                  {slideData.formulaSection.marginFormula}
                </span>
              </div>

              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 p-2.5">
                <div className="flex items-baseline justify-between gap-1">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white">
                    {slideData.formulaSection.markupTitle}
                  </span>
                  <span className="text-xs font-black text-slate-700 dark:text-slate-200 tabular-nums">
                    {simResult.markupPct}%
                  </span>
                </div>
                <span className="block text-[10px] font-bold text-slate-700 dark:text-slate-200 mt-1">
                  {slideData.formulaSection.markupFormula}
                </span>
              </div>
            </div>

            <div className="text-[10px]">
              <span className="font-normal text-slate-500 dark:text-slate-400">
                {slideData.formulaSection.simExampleLabel}
              </span>
            </div>
          </button>

          {/* Two Policy Cards: Old-Stock Pricing & Margin-Linked Incentives */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {slideData.policyCards.map((card, idx) => {
              const Icon = idx === 0 ? PackageCheck : Award;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, card.modal, Icon)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={12}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />
                  <div className="pr-4">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {card.tag}
                    </span>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                      {card.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                    {card.keywords}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
