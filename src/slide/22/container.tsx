import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  LineChart as LineChartIcon,
  ShieldCheck,
  TableProperties,
  PieChart,
  Package,
  MapPin,
  Users,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide22ModalPayload } from './data';
import type { ReviewDimensionId } from './utils';

type Slide22TabId = 'forecast' | 'variance';

const DIMENSION_ICON_MAP: Record<ReviewDimensionId, LucideIcon> = {
  segment: PieChart,
  'product-family': Package,
  region: MapPin,
  'sales-owner': Users,
  'customer-cohort': Building2,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<Slide22TabId>('forecast');
  const [activeDim, setActiveDim] = useState<ReviewDimensionId>('segment');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide22ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide22TabId>[] = [
    {
      id: 'forecast',
      label: isEn ? 'Forecast Charts & Assumptions' : 'Grafik Forecast & Asumsi',
      icon: BarChart3,
    },
    {
      id: 'variance',
      label: isEn ? 'Segment Variance Analysis' : 'Analisis Varians Segmen',
      icon: TableProperties,
    },
  ];

  const dimensionTabs: SlideTabItem<ReviewDimensionId>[] = slideData.dimensions.map((dim) => ({
    id: dim.id,
    label: dim.label,
    icon: DIMENSION_ICON_MAP[dim.id] || PieChart,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-2.5"
    >
      {/* Header + Section Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      {/* Apple-to-Apple Rule & Dimension Selector Strip */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span className="text-[10.5px] font-bold text-red-600 dark:text-red-400 leading-snug">
          {slideData.appleToAppleRule}
        </span>

        <SlideTabs
          tabs={dimensionTabs}
          activeTab={activeDim}
          onChange={setActiveDim}
          size="sm"
          align="end"
        />
      </section>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'forecast' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
            {/* Left 7 Cols: Main Chart Design */}
            <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <BarChart3 size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span>{slideData.chartSection.mainChartTitle}</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9.5px] font-bold">
                <span className="text-slate-400 dark:text-slate-400">■ {slideData.chartSection.legendPrior}</span>
                <span className="text-slate-600 dark:text-slate-300">■ {slideData.chartSection.legendTarget}</span>
                <span className="text-slate-900 dark:text-white">■ {slideData.chartSection.legendActual}</span>
                <span className="text-red-600 dark:text-red-400">- - {slideData.chartSection.legendForecast}</span>
              </div>

              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={slideData.chartSection.monthlyDesignPoints}
                    margin={{ top: 6, right: 8, left: -24, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.2} />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        fontSize: '11px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                      }}
                    />
                    <Bar
                      dataKey="priorYearSim"
                      name={slideData.chartSection.legendPrior}
                      fill="#cbd5e1"
                      radius={[2, 2, 0, 0]}
                      barSize={7}
                    />
                    <Bar
                      dataKey="targetSim"
                      name={slideData.chartSection.legendTarget}
                      fill="#64748b"
                      radius={[2, 2, 0, 0]}
                      barSize={7}
                    />
                    <Bar
                      dataKey="currentActualSim"
                      name={slideData.chartSection.legendActual}
                      fill="#0f172a"
                      radius={[2, 2, 0, 0]}
                      barSize={7}
                    />
                    <Line
                      type="monotone"
                      dataKey="forecastSim"
                      name={slideData.chartSection.legendForecast}
                      stroke="#dc2626"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ r: 3, fill: '#dc2626' }}
                      connectNulls
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Right 5 Cols: Gross Profit & Margin Ratio + 3 Forecast Assumption Cards */}
            <section className="lg:col-span-5 flex flex-col justify-between gap-2.5">
              {/* Secondary Chart: Gross Profit & Margin Ratio */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <LineChartIcon size={12} className="text-red-600 dark:text-red-400 shrink-0" />
                    <span>{slideData.chartSection.marginChartTitle}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-[9px] font-bold">
                    <span className="text-slate-600 dark:text-slate-300">■ {slideData.chartSection.legendGp}</span>
                    <span className="text-red-600 dark:text-red-400">— {slideData.chartSection.legendMarginPct}</span>
                  </div>
                </div>

                <div className="h-[100px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={slideData.chartSection.monthlyDesignPoints}
                      margin={{ top: 4, right: 6, left: -24, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.2} />
                      <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 8, fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          fontSize: '11px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                        }}
                      />
                      <Bar dataKey="gpIndexSim" name={slideData.chartSection.legendGp} fill="#94a3b8" radius={[2, 2, 0, 0]} barSize={8} />
                      <Line
                        type="monotone"
                        dataKey="marginRatioSim"
                        name={slideData.chartSection.legendMarginPct}
                        stroke="#dc2626"
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 3 Clickable Forecast Governance Cards */}
              <div className="space-y-1.5">
                {slideData.assumptionsSection.cards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, card.modal, ShieldCheck)}
                    className="group relative w-full text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 px-3 py-2 transition-colors cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="text-[11px] font-black text-slate-900 dark:text-white pr-4 leading-snug">
                      {card.title}
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {card.shortRule}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <TableProperties size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.varianceTable.title}
                </h3>
              </div>
              <span className="text-[10.5px] font-bold text-red-600 dark:text-red-400">
                {slideData.dimensions.find((d) => d.id === activeDim)?.label}
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[680px] space-y-1.5">
                <div className="grid grid-cols-12 gap-2 px-2.5 py-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <div className="col-span-2">{slideData.varianceTable.columns.segment}</div>
                  <div className="col-span-1">{slideData.varianceTable.columns.ytdActual}</div>
                  <div className="col-span-1">{slideData.varianceTable.columns.ytdTarget}</div>
                  <div className="col-span-2">{slideData.varianceTable.columns.ytdPrior}</div>
                  <div className="col-span-1">{slideData.varianceTable.columns.achPct}</div>
                  <div className="col-span-1">{slideData.varianceTable.columns.yoyPct}</div>
                  <div className="col-span-1">{slideData.varianceTable.columns.margin}</div>
                  <div className="col-span-3 pr-4">{slideData.varianceTable.columns.driver}</div>
                </div>

                {slideData.varianceTable.rows.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, row.modal, TableProperties)}
                    className="group relative w-full grid grid-cols-12 gap-2 items-center text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-2.5 py-2.5 transition-colors cursor-pointer select-none text-[10.5px]"
                  >
                    <ArrowUpRight
                      size={11}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="col-span-2 font-black text-slate-900 dark:text-white truncate">
                      {row.segment}
                    </div>
                    <div className="col-span-1 font-semibold text-slate-600 dark:text-slate-300 tabular-nums truncate">
                      {row.ytdActual}
                    </div>
                    <div className="col-span-1 font-semibold text-slate-600 dark:text-slate-300 tabular-nums truncate">
                      {row.ytdTarget}
                    </div>
                    <div className="col-span-2 font-semibold text-slate-600 dark:text-slate-300 tabular-nums truncate">
                      {row.ytdPriorYear}
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 dark:text-slate-200 tabular-nums truncate">
                      {row.achievementPct}
                    </div>
                    <div className="col-span-1 font-bold text-slate-700 dark:text-slate-200 tabular-nums truncate">
                      {row.yoyPct}
                    </div>
                    <div className="col-span-1 font-bold text-red-600 dark:text-red-400 tabular-nums truncate">
                      {row.grossMargin}
                    </div>
                    <div className="col-span-3 pr-4 font-medium text-slate-600 dark:text-slate-300 truncate">
                      {row.keyDriver}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
