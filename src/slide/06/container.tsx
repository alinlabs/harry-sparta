import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
  Store,
  Factory,
  Layers,
  AlertCircle,
  PieChart as PieChartIcon,
  type LucideIcon,
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import { useTheme } from '@/contexts/ThemeContext';
import {
  useSlideData,
  type PortfolioId,
  type AccountLayerId,
  type Slide06ModalPayload,
} from './data';

type Slide06TabId = 'portfolio' | 'universe';

const PORTFOLIO_ICONS: Record<PortfolioId, LucideIcon> = {
  retail: ShoppingBag,
  distribution: Truck,
  b2b: Building2,
  b2g: Landmark,
};

const LAYER_ICONS: Record<AccountLayerId, LucideIcon> = {
  'layer-retail-reseller': Store,
  'layer-b2b-sectors': Factory,
  'layer-b2g-public': Layers,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const { theme } = useTheme();
  const slideData = useSlideData();
  const isDark = theme === 'dark';
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide06TabId>('portfolio');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide06ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide06TabId>[] = [
    {
      id: 'portfolio',
      label: isEn ? 'Commercial Portfolio (40/40/20)' : 'Portofolio Komersial (40/40/20)',
      icon: PieChartIcon,
    },
    {
      id: 'universe',
      label: isEn ? 'Three-Layer Account Universe' : 'Semesta Akun Tiga Lapisan',
      icon: Layers,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-4"
    >
      {/* Block 1: Header + Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'portfolio' ? (
          <section aria-label={slideData.portfoliosSectionLabel}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
              {/* Left: Current Mix Donut (40/40/20 + B2G Development Label) */}
              <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                    {slideData.mixChart.title}
                  </h3>

                  {/* Recharts Donut Chart */}
                  <div className="h-44 w-full relative flex items-center justify-center my-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={slideData.mixChart.slices}
                          dataKey="share"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={44}
                          outerRadius={68}
                          paddingAngle={2}
                          stroke="none"
                        >
                          {slideData.mixChart.slices.map((slice) => (
                            <Cell key={slice.name} fill={slice.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number) => [`${value}%`, '']}
                          contentStyle={{
                            backgroundColor: isDark ? '#0f172a' : '#ffffff',
                            borderColor: isDark ? '#334155' : '#e2e8f0',
                            borderRadius: '0.5rem',
                            fontSize: '11px',
                            color: isDark ? '#f8fafc' : '#0f172a',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-sm font-black tabular-nums text-slate-900 dark:text-white leading-none">
                        40/40/20
                      </span>
                    </div>
                  </div>

                  {/* Mix Legend */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                    {slideData.mixChart.slices.map((slice) => (
                      <div key={slice.name}>
                        <div className="flex items-center justify-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: slice.color }}
                          />
                          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 truncate">
                            {slice.name}
                          </span>
                        </div>
                        <span className="block text-sm font-black tabular-nums text-slate-900 dark:text-white mt-0.5">
                          {slice.share}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="flex items-start gap-1.5 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
                    <AlertCircle size={13} className="shrink-0 mt-0.5" />
                    <span>
                      {slideData.mixChart.b2gStatusLabel} {slideData.mixChart.b2gStatusText}
                    </span>
                  </div>
                  <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 leading-snug">
                    {slideData.mixChart.footnote}
                  </p>
                </div>
              </div>

              {/* Right: 4 Uniform Commercial Portfolio Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slideData.portfolios.map((pf) => {
                  const Icon = PORTFOLIO_ICONS[pf.id];

                  return (
                    <button
                      key={pf.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, pf.modal, Icon)}
                      className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 sm:p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                    >
                      <ArrowUpRight
                        size={14}
                        className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                      />

                      <div className="flex items-start justify-between gap-2 pr-5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                            <Icon size={15} />
                          </div>
                          <h3 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white truncate">
                            {pf.title}
                          </h3>
                        </div>

                        <span
                          className={`shrink-0 text-right leading-tight ${
                            pf.isDevelopment
                              ? 'text-[10.5px] font-normal text-slate-500 dark:text-slate-400 max-w-[140px]'
                              : 'text-base font-black tabular-nums text-red-600 dark:text-red-400'
                          }`}
                        >
                          {pf.shareText}
                        </span>
                      </div>

                      <dl className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1 text-[11px]">
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <dt className="font-bold text-slate-700 dark:text-slate-200 shrink-0 w-14">
                            {slideData.fieldLabels.targetCustomer}:
                          </dt>
                          <dd className="font-medium text-slate-600 dark:text-slate-300 truncate">
                            {pf.targetCustomer}
                          </dd>
                        </div>
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <dt className="font-bold text-slate-700 dark:text-slate-200 shrink-0 w-14">
                            {slideData.fieldLabels.mainOffering}:
                          </dt>
                          <dd className="font-medium text-slate-600 dark:text-slate-300 truncate">
                            {pf.mainOffering}
                          </dd>
                        </div>
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <dt className="font-bold text-slate-700 dark:text-slate-200 shrink-0 w-14">
                            {slideData.fieldLabels.salesMotion}:
                          </dt>
                          <dd className="font-medium text-slate-600 dark:text-slate-300 truncate">
                            {pf.salesMotion}
                          </dd>
                        </div>
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <dt className="font-bold text-slate-700 dark:text-slate-200 shrink-0 w-14">
                            {slideData.fieldLabels.primaryKpi}:
                          </dt>
                          <dd className="font-medium text-slate-600 dark:text-slate-300 truncate">
                            {pf.primaryKpi}
                          </dd>
                        </div>
                      </dl>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          <section aria-label={slideData.layersSectionLabel} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.layersSectionLabel}
              </h3>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {slideData.layersDistinctionNote}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {slideData.accountLayers.map((layer) => {
                const Icon = LAYER_ICONS[layer.id];

                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, layer.modal, Icon)}
                    className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between min-h-[155px]"
                  >
                    <ArrowUpRight
                      size={14}
                      className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    <div className="flex items-center gap-2.5 pr-6">
                      <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                        <Icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {layer.layerTag}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    <p className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                      {layer.entities}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
