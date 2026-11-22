import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide10Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide10Tab>('pathway');

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
              aria-label="Tab jalur data center"
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
        {activeTab === 'pathway' ? (
          <motion.div
            key="pathway"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="space-y-3"
          >
            {/* Market Context Compact Strip */}
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-4 py-2.5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.contextCard.title}
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {slideData.contextCard.sourceLabel}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {slideData.contextCard.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/45 px-3 py-1.5"
                    >
                      <span className="text-sm sm:text-base font-black font-mono text-red-600 dark:text-red-400 tabular-nums mr-1.5">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-300">
                        {metric.caption}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 md:text-right">
                {slideData.contextCard.narrative}
              </p>
            </section>

            {/* 4-Stage Pathway */}
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.pathwaySection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.pathwaySection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {slideData.pathwaySection.stages.map((item, idx) => (
                  <div
                    key={item.stage}
                    className={`rounded-lg border p-3 ${
                      idx === 0
                        ? 'border-red-200 dark:border-red-900/60 bg-red-50/35 dark:bg-red-950/15'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-200/70 dark:border-slate-800/70">
                      <span className="text-[11px] font-mono font-black uppercase text-red-600 dark:text-red-400 tabular-nums">
                        {item.stage}
                      </span>
                      <span className="text-[10.5px] font-semibold text-slate-500 dark:text-slate-400">
                        {item.horizon}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <ul className="space-y-1">
                      {item.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug"
                        >
                          — {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="gates"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Operational Realities */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.distinctionCard.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.distinctionCard.label}
                </span>
              </div>

              <p className="text-xs font-bold text-slate-900 dark:text-white mb-2.5">
                {slideData.distinctionCard.statement}
              </p>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.distinctionCard.requirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="py-1.5 first:pt-0.5 last:pb-0.5 flex items-baseline gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 6 Mandatory Decision Gates */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.gatesSection.title}
                  </h2>
                  <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                    {slideData.gatesSection.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {slideData.gatesSection.items.map((gate) => (
                    <div
                      key={gate.number}
                      className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 flex items-baseline gap-2.5"
                    >
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {gate.number}
                      </span>
                      <span className="text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug">
                        {gate.label}
                      </span>
                    </div>
                  ))}
                </div>
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
