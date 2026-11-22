import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide12Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide12Tab>('scorecard');

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
              aria-label="Tab scorecard dan keputusan"
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
        {activeTab === 'scorecard' ? (
          <motion.div
            key="scorecard"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="space-y-3"
          >
            {/* 5 Scorecard Dimensions */}
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.scorecardSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.scorecardSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {slideData.scorecardSection.dimensions.map((dim) => (
                  <div
                    key={dim.number}
                    className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/75 dark:bg-slate-950/45 p-3"
                  >
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {dim.number}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-white leading-snug">
                        {dim.name}
                      </h3>
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      {dim.metrics}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Management Rhythm */}
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.rhythmSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.rhythmSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {slideData.rhythmSection.items.map((item, idx) => (
                  <div
                    key={item.cadence}
                    className={`${
                      idx > 0
                        ? 'md:border-l md:border-slate-200/80 dark:md:border-slate-800 md:pl-4 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800/60'
                        : ''
                    }`}
                  >
                    <div className="text-xs font-extrabold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      {item.cadence}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="decisions"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 5 Owner Decisions */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.decisionsSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.decisionsSection.label}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.decisionsSection.items.map((decision) => (
                  <li
                    key={decision.number}
                    className="py-2 first:pt-0.5 last:pb-0.5 flex items-baseline gap-3"
                  >
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {decision.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                      {decision.statement}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Closing Commitment & Sign-off */}
            <section className="lg:col-span-5 rounded-xl border border-red-200/90 dark:border-slate-800 bg-red-50/80 dark:bg-slate-950/90 text-slate-900 dark:text-white p-4 sm:p-5 shadow-xs flex flex-col justify-between gap-3">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 dark:text-red-400">
                  {slideData.closing.label}
                </p>
                <blockquote className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                  “{slideData.closing.quote}”
                </blockquote>
              </div>

              <div className="border-t border-red-200/70 dark:border-slate-700/80 pt-3">
                <div className="text-sm font-black tracking-tight text-slate-900 dark:text-white">
                  {slideData.closing.presenterName}
                </div>
                <div className="text-xs font-semibold text-red-600 dark:text-red-400">
                  {slideData.closing.presenterRole}
                </div>
                <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                  {slideData.closing.companyName}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Container;
