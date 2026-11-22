import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSlideData, PcChartViewMode } from './data';
import { MarketOutlookChart } from './MarketOutlookChart';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const [chartMode, setChartMode] = useState<PcChartViewMode>('yoy');

  const totalDcMw =
    slideData.dataCenterSection.operationalMw + slideData.dataCenterSection.constructionMw;
  const operationalPct = Math.round((slideData.dataCenterSection.operationalMw / totalDcMw) * 100);
  const constructionPct = 100 - operationalPct;

  return (
    <div className="w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto px-2 sm:px-4 py-1 font-sans text-slate-800 dark:text-slate-100 select-text">
      <div className="space-y-3">
        {/* Centered Header: Subtitle Above Title, No Eyebrow */}
        <div className="text-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5 space-y-1">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            {slideData.subtitle}
          </p>
          <h1 className="text-xl sm:text-2xl md:text-[1.75rem] font-black tracking-tight leading-tight text-slate-900 dark:text-white text-balance max-w-4xl mx-auto">
            {slideData.title}
          </h1>
        </div>

        {/* Wide 3-Column Horizontal Dashboard Grid: Zero Scroll on Laptop/Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Column 1 (5 cols): Indonesia PC Market Chart */}
          <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.pcSection.title}
                  </h2>
                  <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.pcSection.evidenceLabel}
                  </span>
                </div>

                <div
                  role="group"
                  aria-label="Mode grafik pasar PC"
                  className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shrink-0"
                >
                  {slideData.pcSection.tabs.map((tab) => {
                    const isActive = chartMode === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setChartMode(tab.id)}
                        className={`px-2 py-1 rounded-md text-[10.5px] font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
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

              <div className="grid grid-cols-4 gap-1.5 mb-2">
                {slideData.pcSection.metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className={`rounded-lg px-2 py-1.5 border ${
                      idx === 3
                        ? 'border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20'
                        : 'border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40'
                    }`}
                  >
                    <div className="text-[9.5px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                      {metric.label}
                    </div>
                    <div
                      className={`text-xs font-mono font-black tabular-nums mt-0.5 ${
                        idx === 3
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-[9.5px] text-slate-500 dark:text-slate-400 truncate">
                      {metric.status}
                    </div>
                  </div>
                ))}
              </div>

              <MarketOutlookChart
                mode={chartMode}
                growthData={slideData.pcSection.growthData}
                volumeData={slideData.pcSection.volumeData}
                language={language}
              />
            </div>

            <div className="mt-1.5 pt-1.5 border-t border-slate-200/70 dark:border-slate-800/70 space-y-0.5">
              <p className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                {slideData.pcSection.legendNote}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                {slideData.pcSection.sourceLine}
              </p>
            </div>
          </section>

          {/* Column 2 (4 cols): 4 Demand Pools + Data Center Capacity */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-xs flex-1">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.opportunitySection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.opportunitySection.horizonLabel}
                </span>
              </div>

              <div className="space-y-2">
                {slideData.opportunitySection.pools.map((pool) => (
                  <div
                    key={pool.number}
                    className="rounded-lg border border-slate-200/70 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 px-3 py-2"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {pool.number}
                      </span>
                      <h3 className="text-xs font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {pool.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug pl-6 mt-0.5">
                      {pool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Center Capacity */}
            <section className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-1.5 mb-2 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.dataCenterSection.title}
                </h2>
                <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.dataCenterSection.evidenceLabel}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-bold tabular-nums">
                  <span className="text-slate-900 dark:text-white font-mono">
                    {slideData.dataCenterSection.operationalLabel}
                  </span>
                  <span className="text-red-600 dark:text-red-400 font-mono">
                    + {slideData.dataCenterSection.constructionLabel}
                  </span>
                </div>

                <div
                  className="w-full h-2.5 rounded-md bg-slate-100 dark:bg-slate-800 overflow-hidden flex border border-slate-200/80 dark:border-slate-700"
                  aria-label="Arah kapasitas data center Indonesia 584 MW operasional dan 337 MW dalam konstruksi"
                >
                  <div className="h-full bg-slate-800 dark:bg-slate-200" style={{ width: `${operationalPct}%` }} />
                  <div className="h-full bg-red-600/80 dark:bg-red-500/80" style={{ width: `${constructionPct}%` }} />
                </div>

                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  {slideData.dataCenterSection.sourceLine}
                </p>
              </div>
            </section>
          </div>

          {/* Column 3 (3 cols): 5 Implications */}
          <section className="lg:col-span-3 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.implicationsSection.title}
                </h2>
                <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.implicationsSection.evidenceLabel}
                </span>
              </div>

              <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                {slideData.implicationsSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-2.5 first:pt-1 last:pb-1 flex items-baseline gap-2.5 text-xs leading-snug"
                  >
                    <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-2 pt-2 border-t border-slate-200/70 dark:border-slate-800/70 text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug">
              {slideData.dataCenterSection.contextNote}
            </p>
          </section>
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
