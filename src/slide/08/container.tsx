import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide08Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide08Tab>('footprint');

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
              aria-label="Tab ekspansi ritel"
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

        {/* Tab Content */}
        {activeTab === 'footprint' ? (
          <motion.div
            key="footprint"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 3 Phases */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.phasesSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.phasesSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {slideData.phasesSection.items.map((phase, idx) => (
                  <div
                    key={phase.number}
                    className={`rounded-lg border p-3 ${
                      idx === 0
                        ? 'border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40'
                    }`}
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {phase.number}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-white leading-snug">
                        {phase.phaseTitle}
                      </h3>
                    </div>
                    <p className="text-[10.5px] font-semibold text-slate-500 dark:text-slate-400 pl-6 mb-1.5">
                      {phase.tag}
                    </p>
                    <ul className="space-y-1 pl-6">
                      {phase.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          — {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 Catchment Criteria */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.catchmentSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.catchmentSection.label}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.catchmentSection.criteria.map((c) => (
                  <li key={c.number} className="py-1.5 first:pt-0.5 last:pb-0.5 flex items-baseline gap-2.5">
                    <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {c.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="economics"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 7 Store Economics Metrics */}
            <section className="lg:col-span-8 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.economicsSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.economicsSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {slideData.economicsSection.metrics.map((m) => (
                  <div key={m.number} className="flex items-baseline gap-2.5 py-0.5">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {m.number}
                    </span>
                    <div className="text-xs leading-snug">
                      <span className="font-bold text-slate-900 dark:text-white">{m.name}</span>
                      <span className="text-slate-400 dark:text-slate-500"> · </span>
                      <span className="text-slate-600 dark:text-slate-300">{m.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Decision Gate */}
            <section className="lg:col-span-4 rounded-xl border border-red-200/90 dark:border-red-900/60 bg-red-50/45 dark:bg-red-950/20 p-4 shadow-xs flex flex-col justify-center">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-red-600 dark:text-red-400 mb-1.5">
                {slideData.decisionGate.label}
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {slideData.decisionGate.statement}
              </p>
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
