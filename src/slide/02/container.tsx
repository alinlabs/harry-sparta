import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide02Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide02Tab>('foundation');

  return (
    <div className="w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto px-2 sm:px-4 py-1 font-sans text-slate-800 dark:text-slate-100 select-text">
      <div className="space-y-3">
        {/* Centered Header: Subtitle Above Title, Centered 2-Tab Switcher Below */}
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
              aria-label="Tab fondasi dan validasi"
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
                        ? 'bg-red-600 text-white shadow-xs'
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

        {/* Tab Content: Shows ONLY Selected Tab's Cards */}
        {activeTab === 'foundation' ? (
          <motion.div
            key="foundation"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
          >
            {/* 4 Public Capabilities */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
                  {slideData.foundationSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.foundationSection.evidenceLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slideData.foundationSection.items.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {item.number}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Heritage Timeline */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
                    {slideData.heritageSection.title}
                  </h2>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.heritageSection.evidenceLabel}
                  </span>
                </div>

                <div className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                  {slideData.heritageSection.milestones.map((m) => (
                    <div key={m.year} className="py-2.5 first:pt-1 last:pb-1 flex items-baseline gap-4">
                      <span className="text-lg font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {m.year}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-2.5 pt-2 border-t border-slate-200/70 dark:border-slate-800/70 text-[11px] text-slate-500 dark:text-slate-400">
                {slideData.heritageSection.validationNote}
              </p>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="validation"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
          >
            {/* 5 Strategic Assets */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
                  {slideData.assetsSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.assetsSection.evidenceLabel}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.assetsSection.items.map((asset) => (
                  <li key={asset.number} className="py-2 first:pt-0.5 last:pb-0.5 flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {asset.number}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {asset.text}
                      </span>
                    </div>
                    {asset.note && (
                      <span className="text-[10.5px] font-semibold text-red-600 dark:text-red-400 shrink-0">
                        {asset.note}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            {/* 6 Internal Validation Baseline Items */}
            <section className="lg:col-span-6 rounded-xl border border-red-200/80 dark:border-red-900/50 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
                  {slideData.validationSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.validationSection.evidenceLabel}
                </span>
              </div>

              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slideData.validationSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 px-3 py-2 flex items-baseline gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
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
            {slideData.interpretation.label}
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug sm:text-right">
            {slideData.interpretation.statement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
