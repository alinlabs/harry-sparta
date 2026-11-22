import React from 'react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();

  return (
    <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-2 sm:px-4 py-1">
      <div className="space-y-3 sm:space-y-3.5">
        {/* Centered Header: Subtitle Above Title, No Eyebrow */}
        <div className="text-center space-y-1.5 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {slideData.subtitle}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white text-balance max-w-4xl mx-auto">
            <span>{slideData.headlinePrimary} </span>
            <span className="text-red-600 dark:text-red-400">{slideData.headlineAccent}</span>
          </h1>
        </div>

        {/* Main Executive Grid: 4 Pillars + Thesis & 5 Focus Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex-1">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {slideData.pillarsTitle}
                </h2>
                <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 tabular-nums">
                  01 — 04
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {slideData.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.number}
                    className={`rounded-lg border p-3 transition-colors ${
                      idx === 0
                        ? 'border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40'
                    }`}
                  >
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums">
                        {pillar.number}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {pillar.label}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug pl-6">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-red-200/80 dark:border-slate-800 bg-red-50/80 dark:bg-slate-950/90 text-slate-900 dark:text-white px-4 py-2.5 sm:px-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600 dark:text-red-400 shrink-0">
                {slideData.thesisLabel}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-semibold sm:text-right">
                {slideData.thesis}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                    {slideData.agendaTitle}
                  </h2>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 tabular-nums">
                    05
                  </span>
                </div>

                <ol className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                  {slideData.agendaItems.map((item) => (
                    <li key={item.number} className="py-2 first:pt-0.5 last:pb-0.5 flex items-baseline gap-3">
                      <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {item.number}
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {item.question}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600 dark:text-red-400 mb-0.5">
                  {slideData.closingLabel}
                </p>
                <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                  {slideData.closingLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presenter Attribution Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
          <span className="font-bold text-slate-900 dark:text-slate-100">{slideData.presenter.name}</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span>{slideData.presenter.role}</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="font-semibold text-red-600 dark:text-red-400">{slideData.presenter.company}</span>
        </div>
      </div>
    </div>
  );
};

export default Container;
