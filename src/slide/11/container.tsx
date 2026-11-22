import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide11Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide11Tab>('workstreams');
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

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
              aria-label="Tab peta jalan"
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
        {activeTab === 'workstreams' ? (
          <motion.section
            key="workstreams"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
              <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                {slideData.matrixSection.title}
              </h2>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {slideData.matrixSection.label}
              </span>
            </div>

            <div className="space-y-1.5">
              {slideData.matrixSection.workstreams.map((ws) => {
                const isSelected = selectedCode === ws.code;
                const isDimmedByRow = selectedCode !== null && !isSelected;

                return (
                  <button
                    key={ws.code}
                    type="button"
                    onClick={() => setSelectedCode(isSelected ? null : ws.code)}
                    className={`w-full text-left rounded-lg border px-3 py-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-red-500/70 dark:border-red-500/70 bg-red-50/40 dark:bg-red-950/20'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/65 dark:bg-slate-950/35 hover:border-slate-300 dark:hover:border-slate-700'
                    } ${isDimmedByRow ? 'opacity-45' : 'opacity-100'}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
                      <div className="lg:col-span-3 flex items-baseline justify-between lg:block">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 shrink-0">
                            {ws.code}
                          </span>
                          <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-white leading-snug">
                            {ws.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 lg:pl-4 block">
                          {ws.horizonType}
                        </span>
                      </div>

                      <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {ws.stages.map((stage) => (
                          <div
                            key={stage.horizon}
                            className="rounded-md bg-white dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800/80 px-2.5 py-1.5"
                          >
                            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                              {stage.horizon}
                            </div>
                            <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                              {stage.deliverable}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="governance"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-3 border-b border-slate-200/70 dark:border-slate-800/80">
              <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                {slideData.governanceSection.title}
              </h2>
              <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                {slideData.governanceSection.label}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {slideData.governanceSection.items.map((gov) => (
                <div
                  key={gov.number}
                  className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/75 dark:bg-slate-950/45 p-3.5 flex items-baseline gap-3"
                >
                  <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                    {gov.number}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                      {gov.label}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                      {gov.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
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
