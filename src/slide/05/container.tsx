import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { useSlideData, Slide05Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide05Tab>('engines');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const stages = slideData.flywheelSection.stages;
  const activeStage = stages[activeStageIdx] ?? stages[0];

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
              aria-label="Tab arsitektur dan pengaman strategis"
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
        {activeTab === 'engines' ? (
          <motion.div
            key="engines"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 4 Growth Engines */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.enginesSection.title}
                  </h2>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.enginesSection.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {slideData.enginesSection.items.map((engine) => {
                    const isLinked = activeStage.linkedEngine === engine.id;
                    return (
                      <div
                        key={engine.id}
                        className={`rounded-lg border p-3 transition-colors ${
                          isLinked
                            ? 'border-red-400 dark:border-red-500/70 bg-red-50/45 dark:bg-red-950/20'
                            : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <div className="flex items-baseline gap-2 min-w-0">
                            <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                              {engine.number}
                            </span>
                            <h3 className="text-xs sm:text-[13.5px] font-extrabold text-slate-900 dark:text-white tracking-tight truncate">
                              {engine.name}
                            </h3>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                            {engine.stageTag}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-slate-700 dark:text-slate-200 leading-snug pl-6">
                          {engine.scope}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pl-6 mt-0.5">
                          {engine.channels}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Interactive 7-Stage Flywheel */}
            <section className="lg:col-span-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.flywheelSection.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                    <RotateCcw size={11} className="text-red-600 dark:text-red-400" />
                    <span>{slideData.flywheelSection.loopNote}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {stages.map((stage, idx) => {
                    const isActive = idx === activeStageIdx;
                    return (
                      <React.Fragment key={stage.step}>
                        <button
                          type="button"
                          onClick={() => setActiveStageIdx(idx)}
                          aria-pressed={isActive}
                          className={`inline-flex items-baseline gap-1.5 px-3 py-2 rounded-md text-xs font-bold border transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-red-600 text-white border-red-600 shadow-2xs'
                              : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-red-400'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10.5px] tabular-nums ${
                              isActive ? 'text-red-100' : 'text-red-600 dark:text-red-400'
                            }`}
                          >
                            {stage.step}
                          </span>
                          <span className="whitespace-nowrap">{stage.label}</span>
                        </button>
                        {idx < stages.length - 1 && (
                          <ArrowRight
                            size={12}
                            aria-hidden="true"
                            className="text-slate-400 dark:text-slate-600 shrink-0 hidden sm:inline"
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800/70 flex items-baseline gap-2.5">
                <span className="text-sm font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                  {activeStage.step}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                  <strong className="text-slate-900 dark:text-white">{activeStage.label}:</strong>{' '}
                  {activeStage.summary}
                </p>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="guardrails"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* Proposed Positioning Card */}
            <section className="lg:col-span-5 rounded-xl border border-red-200/90 dark:border-red-900/60 bg-red-50/45 dark:bg-red-950/20 p-4 shadow-xs flex flex-col justify-center space-y-2">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-red-600 dark:text-red-400">
                {slideData.positioning.label}
              </p>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                {slideData.positioning.headline}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                {slideData.positioning.promise}
              </p>
            </section>

            {/* 5 Strategic Guardrails */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.guardrailsSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.guardrailsSection.label}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.guardrailsSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-2 first:pt-0.5 last:pb-0.5 flex items-baseline gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
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
