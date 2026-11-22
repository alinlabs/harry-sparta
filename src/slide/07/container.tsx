import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide07Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide07Tab>('flow');

  return (
    <div className="w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto px-2 sm:px-4 py-1 font-sans text-slate-800 dark:text-slate-100 select-text">
      <div className="space-y-3">
        {/* Centered Header: Subtitle Above Title, Centered 2 Tabs Below */}
        <div className="text-center space-y-1.5 border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            {slideData.subtitle}
          </p>
          <h1 className="text-xl sm:text-2xl md:text-[1.75rem] font-black tracking-tight leading-tight text-slate-900 dark:text-white text-balance max-w-4xl mx-auto">
            {slideData.title}
          </h1>

          <div className="flex justify-center pt-1">
            <div
              role="tablist"
              aria-label="Tab tender dan kontrol risiko"
              className="inline-flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80"
            >
              {slideData.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-md text-[11px] sm:text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-red-600 text-white shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content: Real Card Switching */}
        {activeTab === 'flow' ? (
          <motion.div
            key="flow"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Two-Sided Corporate Opportunity */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.twoSidedSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.twoSidedSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-xs font-mono font-black text-slate-700 dark:text-slate-300">
                      [{slideData.twoSidedSection.supply.code}]
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {slideData.twoSidedSection.supply.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {slideData.twoSidedSection.supply.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <span className="text-[10.5px] font-mono text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:border-l sm:border-slate-200/80 dark:sm:border-slate-800 sm:pl-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400">
                      [{slideData.twoSidedSection.recovery.code}]
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {slideData.twoSidedSection.recovery.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {slideData.twoSidedSection.recovery.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <span className="text-[10.5px] font-mono text-red-600 dark:text-red-400 tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 7-Step Tender Desk Operating Flow */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.tenderFlowSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.tenderFlowSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slideData.tenderFlowSection.steps.map((item) => (
                  <div
                    key={item.step}
                    className={`rounded-lg border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 px-3 py-2 flex items-baseline gap-2.5 ${
                      item.step === '07' ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="risk"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Used-Asset Pricing Discipline */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.valuationSection.title}
                  </h2>
                  <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                    {slideData.valuationSection.label}
                  </span>
                </div>

                <div className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                  {slideData.valuationSection.lines.map((line) => (
                    <div
                      key={line.label}
                      className={`py-1 flex items-baseline justify-between gap-3 ${
                        line.isResult
                          ? 'pt-1.5 mt-0.5 border-t-2 border-red-500/70 dark:border-red-500/60'
                          : ''
                      }`}
                    >
                      <div className="flex items-baseline gap-2 min-w-0">
                        <span
                          className={`text-[10.5px] font-mono font-black w-10 shrink-0 tabular-nums ${
                            line.isResult
                              ? 'text-red-600 dark:text-red-400'
                              : line.operator === 'BASIS' || line.operator === 'BASE'
                                ? 'text-slate-900 dark:text-white'
                                : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {line.operator}
                        </span>
                        <span
                          className={`text-xs leading-snug ${
                            line.isResult
                              ? 'font-black text-red-600 dark:text-red-400'
                              : 'font-bold text-slate-900 dark:text-white'
                          }`}
                        >
                          {line.label}
                        </span>
                      </div>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 text-right hidden sm:inline leading-tight">
                        {line.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mr-2">
                  {slideData.kpiSection.title}:
                </span>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {slideData.kpiSection.items.join(' · ')}
                </span>
              </div>
            </section>

            {/* 7 Mandatory Risk Controls */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-red-700 dark:text-red-400">
                  {slideData.riskSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.riskSection.label}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                {slideData.riskSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-1.5 first:pt-0.5 last:pb-0.5 flex items-baseline gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                  >
                    <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          </motion.div>
        )}

        {/* Bottom Main Takeaway */}
        <div className="rounded-xl border border-red-200/80 dark:border-slate-800 bg-red-50/80 dark:bg-slate-950/90 text-slate-900 dark:text-white px-4 py-2.5 sm:px-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 dark:text-red-400 shrink-0">
            {slideData.takeaway.label}
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug sm:text-right">
            {slideData.takeaway.statement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
