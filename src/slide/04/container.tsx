import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, MatrixNodeId, Slide04Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [selectedNodeId, setSelectedNodeId] = useState<MatrixNodeId>('sparta');
  const [activeTab, setActiveTab] = useState<Slide04Tab>('benchmark');

  const selectedPoint =
    slideData.matrixSection.points.find((p) => p.id === selectedNodeId) ??
    slideData.matrixSection.points[0];

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
              aria-label="Tab analisis kompetisi dan positioning"
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
                    className={`px-4 py-1.5 rounded-md text-[11px] sm:text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
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

        {/* Main 12-Col Layout: Left 7 (Benchmark OR Positioning), Right 5 (Persistent 2x2 Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            {activeTab === 'benchmark' ? (
              <motion.section
                key="benchmark"
                initial={{ y: 4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
                role="tabpanel"
                className="flex-1 flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                    <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                      {slideData.benchmarkSection.title}
                    </h2>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {slideData.benchmarkSection.evidenceLabel}
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                    {slideData.benchmarkSection.archetypes.map((item) => {
                      const isSelected = selectedNodeId === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedNodeId(item.id)}
                          className={`w-full text-left py-2.5 first:pt-1 last:pb-1 px-2 -mx-2 rounded-lg transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-red-50/70 dark:bg-red-950/25'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-0.5">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                                {item.number}
                              </span>
                              <span className="text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-white">
                                {item.name}
                              </span>
                            </div>
                            <span className="text-[10.5px] font-semibold text-slate-500 dark:text-slate-400">
                              {item.roleLabel}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug pl-6">
                            {item.proposition} · <strong className="text-slate-800 dark:text-slate-200">{item.lesson}</strong>
                          </p>
                          {item.caveat && (
                            <p className="text-[10.5px] font-medium text-red-700 dark:text-red-300 leading-snug pl-6 mt-0.5">
                              {item.caveat}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800/70 text-[10.5px] text-slate-500 dark:text-slate-400">
                  {slideData.benchmarkSection.caveat}
                </p>
              </motion.section>
            ) : (
              <motion.div
                key="positioning"
                initial={{ y: 4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
                role="tabpanel"
                className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
              >
                <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 shadow-xs flex flex-col">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200 pb-2.5 mb-3 border-b border-slate-200/70 dark:border-slate-800/80">
                    {slideData.differentiationSection.title}
                  </h2>
                  <ul className="space-y-2.5 flex-1">
                    {slideData.differentiationSection.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                      >
                        <span className="text-[10.5px] font-mono font-bold text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-4 shadow-xs flex flex-col">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-red-700 dark:text-red-400 pb-2.5 mb-3 border-b border-slate-200/70 dark:border-slate-800/80">
                    {slideData.gapsSection.title}
                  </h2>
                  <ul className="space-y-2.5 flex-1">
                    {slideData.gapsSection.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                      >
                        <span className="text-[10.5px] font-mono font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </motion.div>
            )}
          </div>

          {/* Right 5 Columns: Persistent 2x2 Positioning Matrix */}
          <div className="lg:col-span-5 flex flex-col">
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.matrixSection.title}
                  </h2>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.matrixSection.evidenceLabel}
                  </span>
                </div>

                <div className="text-center text-[10.5px] font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                  {slideData.matrixSection.yTop}
                </div>

                <div className="relative h-[200px] sm:h-[210px] w-full rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-950/60 overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-500/[0.06] dark:bg-red-500/[0.08]" />
                  <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-slate-300/80 dark:bg-slate-700/80" />
                  <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-slate-300/80 dark:bg-slate-700/80" />

                  {slideData.matrixSection.points.map((pt) => {
                    const isSelected = pt.id === selectedNodeId;
                    const isSparta = Boolean(pt.isSparta);

                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => setSelectedNodeId(pt.id)}
                        style={{ left: `${pt.xPct}%`, top: `${pt.yPct}%` }}
                        aria-pressed={isSelected}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-md text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer border shadow-xs ${
                          isSparta
                            ? isSelected
                              ? 'bg-red-600 text-white border-red-600 ring-2 ring-red-500/30 z-20'
                              : 'bg-red-600/90 text-white border-red-600 hover:bg-red-600 z-20'
                            : isSelected
                              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white ring-2 ring-slate-400/30 z-10'
                              : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:border-slate-500 z-10'
                        }`}
                      >
                        {pt.shortLabel}
                      </button>
                    );
                  })}
                </div>

                <div className="text-center text-[10.5px] font-semibold text-slate-500 dark:text-slate-400 mt-1.5">
                  {slideData.matrixSection.yBottom}
                </div>
                <div className="flex items-center justify-between gap-2 text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 mt-2 pt-2 border-t border-slate-200/70 dark:border-slate-800/70">
                  <span>← {slideData.matrixSection.xLeft}</span>
                  <span className="text-right font-bold text-red-600 dark:text-red-400">
                    {slideData.matrixSection.xRight} →
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white">
                    {selectedPoint.title}
                  </h3>
                  <span
                    className={`text-[10.5px] font-semibold shrink-0 ${
                      selectedPoint.isSparta
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {selectedPoint.quadrantLabel}
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                  {selectedPoint.detail}
                </p>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  {slideData.matrixSection.spartaConditionNote}
                </p>
              </div>
            </section>
          </div>
        </div>

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
