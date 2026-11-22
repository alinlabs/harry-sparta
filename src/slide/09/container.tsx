import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSlideData, Slide09Tab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<Slide09Tab>('products');

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
              aria-label="Tab merek privat SPARTA"
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
        {activeTab === 'products' ? (
          <motion.div
            key="products"
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch"
          >
            {/* 2 Product Lines */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.productsSection.title}
                </h2>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.productsSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slideData.productsSection.items.map((product) => (
                  <div
                    key={product.number}
                    className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/45 p-3 space-y-1.5"
                  >
                    <div className="flex items-baseline gap-2 border-b border-slate-200/70 dark:border-slate-800/70 pb-1.5">
                      <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {product.number}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {product.name}
                      </h3>
                    </div>

                    <div className="space-y-1.5 text-xs leading-snug">
                      <div>
                        <span className="font-bold text-slate-800 dark:text-slate-100">
                          {product.targetLabel}:{' '}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">{product.target}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 dark:text-slate-100">
                          {product.valueLabel}:{' '}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">{product.value}</span>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                        <span className="font-bold text-red-600 dark:text-red-400">
                          {product.scopeLabel}:{' '}
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {product.scope}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Brand Rules & Commercial Model */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                    {slideData.architectureSection.title}
                  </h2>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {slideData.architectureSection.label}
                  </span>
                </div>

                <ol className="divide-y divide-slate-200/60 dark:divide-slate-800/70">
                  {slideData.architectureSection.rules.map((rule) => (
                    <li key={rule.number} className="py-1.5 first:pt-0.5 last:pb-0.5 flex items-baseline gap-2.5">
                      <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {rule.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {rule.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-2.5 pt-2 border-t border-red-200/80 dark:border-red-900/50">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600 dark:text-red-400 mb-0.5">
                  {slideData.architectureSection.commercialLabel}
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {slideData.architectureSection.commercialStatement}
                </p>
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
            {/* 6 Launch Gates */}
            <section className="lg:col-span-7 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.gatesSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.gatesSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {slideData.gatesSection.items.map((gate) => (
                  <div
                    key={gate.number}
                    className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/35 p-2.5"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[11px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                        {gate.number}
                      </span>
                      <h3 className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                        {gate.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug pl-5">
                      {gate.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7 Success Metrics */}
            <section className="lg:col-span-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-200/70 dark:border-slate-800/80">
                <h2 className="text-xs font-bold uppercase tracking-[0.11em] text-slate-700 dark:text-slate-200">
                  {slideData.metricsSection.title}
                </h2>
                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                  {slideData.metricsSection.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {slideData.metricsSection.items.map((metric) => (
                  <div key={metric.number} className="flex items-baseline gap-2 py-0.5">
                    <span className="text-[10.5px] font-mono font-black text-red-600 dark:text-red-400 tabular-nums shrink-0">
                      {metric.number}
                    </span>
                    <div className="min-w-0 text-xs leading-snug">
                      <span className="font-bold text-slate-900 dark:text-white">{metric.name}</span>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">{metric.note}</div>
                    </div>
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
