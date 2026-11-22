import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide06Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide06Tab>('motion');

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
              aria-label="Tab eksekusi penjualan"
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
        {activeTab === 'motion' ? (
          <motion.div
            key="motion"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Segment Priority Matrix A / B / C */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.segmentSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.segmentSection.label}
                </span>
              </div>

              <div className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                {slideData.segmentSection.items.map((seg, idx) => (
                  <div key={seg.code} className="py-2 first:pt-0.5 last:pb-0.5">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-xs font-mono font-black tabular-nums shrink-0 ${
                          idx === 0
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        [{seg.code}]
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {seg.tier}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug pl-7 mt-0.5">
                      {seg.target}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-snug pl-7 mt-0.5">
                      {seg.buyersOrFocus}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sales Motion + Cadence */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.motionSection.title}
                  </h2>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.motionSection.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {slideData.motionSection.steps.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 px-3 py-2 flex items-baseline gap-2"
                    >
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.11em] text-slate-500 dark:text-slate-400 mb-2">
                  {slideData.cadenceSection.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {slideData.cadenceSection.items.map((item, idx) => (
                    <div
                      key={item.period}
                      className={`${
                        idx > 0
                          ? 'md:border-l md:border-slate-200/80 dark:md:border-slate-800 md:pl-3'
                          : ''
                      }`}
                    >
                      <div className="text-xs font-extrabold text-red-600 dark:text-red-400 uppercase tracking-wide">
                        {item.period}
                      </div>
                      <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                        {item.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="governance"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 10 KPIs */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.kpiSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.kpiSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {slideData.kpiSection.items.map((kpi) => (
                  <div key={kpi.number} className="flex items-baseline gap-2 py-0.5">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {kpi.number}
                    </span>
                    <div className="text-xs leading-snug">
                      <span className="font-bold text-slate-900 dark:text-white">{kpi.name}</span>
                      <span className="text-slate-400 dark:text-slate-500"> · </span>
                      <span className="text-slate-600 dark:text-slate-300">{kpi.definition}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 90-Day Setup */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.setupSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.setupSection.label}
                </span>
              </div>

              <div className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                {slideData.setupSection.phases.map((phase) => (
                  <div key={phase.window} className="py-2 first:pt-0.5 last:pb-0.5">
                    <div className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums">
                      {phase.window}
                    </div>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">
                      {phase.actions}
                    </p>
                  </div>
                ))}
              </div>
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
