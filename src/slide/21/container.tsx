import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  AlertTriangle,
  Filter,
  SlidersHorizontal,
  TableProperties,
  TrendingUp,
  Clock,
  CalendarDays,
  CalendarRange,
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
import { useSlideData, type Slide21ModalPayload } from './data';
import { type ReportCadenceTab, type SegmentFilterId } from './utils';

const CADENCE_ICON_MAP: Record<ReportCadenceTab, LucideIcon> = {
  daily: Clock,
  weekly: CalendarDays,
  monthly: CalendarRange,
  quarterly: BarChart3,
};

type DashboardViewTab = 'overview' | 'deals';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const langKey = language === 'en' ? 'en' : 'in';

  const [activeTab, setActiveTab] = useState<ReportCadenceTab>('daily');
  const [viewTab, setViewTab] = useState<DashboardViewTab>('overview');
  const [segmentFilter, setSegmentFilter] = useState<SegmentFilterId>('ALL');
  const [dateIdx, setDateIdx] = useState<number>(0);
  const [ownerIdx, setOwnerIdx] = useState<number>(0);
  const [regionIdx, setRegionIdx] = useState<number>(0);
  const [familyIdx, setFamilyIdx] = useState<number>(0);

  const activeCadence =
    slideData.cadenceTabs.find((t) => t.id === activeTab) || slideData.cadenceTabs[0];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide21ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const cadenceTabs: SlideTabItem<ReportCadenceTab>[] = slideData.cadenceTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    icon: CADENCE_ICON_MAP[tab.id] || BarChart3,
  }));

  const viewTabs: SlideTabItem<DashboardViewTab>[] = [
    {
      id: 'overview',
      label: langKey === 'en' ? 'KPIs, Funnel & Trend' : 'Ringkasan KPI & Tren',
      icon: BarChart3,
    },
    {
      id: 'deals',
      label: langKey === 'en' ? 'Top Deals & Risk' : 'Top Deals & Risiko',
      icon: TableProperties,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-2.5"
    >
      {/* Header + 4 Cadence Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={cadenceTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      {/* Filter Bar & Secondary View Switcher */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 space-y-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-black text-slate-900 dark:text-white">
            {activeCadence.headline}
          </span>
          <SlideTabs
            tabs={viewTabs}
            activeTab={viewTab}
            onChange={setViewTab}
            size="sm"
            align="end"
          />
        </div>

        {/* Interactive Mockup Filters (Date, Segment, Owner, Region, Product Family) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-[10px]">
          <select
            aria-label="Date filter"
            value={dateIdx}
            onChange={(e) => setDateIdx(Number(e.target.value))}
            className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
          >
            {slideData.filters.dateOptions.map((opt, idx) => (
              <option key={opt} value={idx}>
                {opt}
              </option>
            ))}
          </select>

          <select
            aria-label="Segment filter"
            value={segmentFilter}
            onChange={(e) => setSegmentFilter(e.target.value as SegmentFilterId)}
            className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
          >
            {slideData.filters.segments.map((seg) => (
              <option key={seg.id} value={seg.id}>
                {seg.label}
              </option>
            ))}
          </select>

          <select
            aria-label="Sales owner filter"
            value={ownerIdx}
            onChange={(e) => setOwnerIdx(Number(e.target.value))}
            className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
          >
            {slideData.filters.owners.map((own, idx) => (
              <option key={own} value={idx}>
                {own}
              </option>
            ))}
          </select>

          <select
            aria-label="Region filter"
            value={regionIdx}
            onChange={(e) => setRegionIdx(Number(e.target.value))}
            className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
          >
            {slideData.filters.regions.map((reg, idx) => (
              <option key={reg} value={idx}>
                {reg}
              </option>
            ))}
          </select>

          <select
            aria-label="Product family filter"
            value={familyIdx}
            onChange={(e) => setFamilyIdx(Number(e.target.value))}
            className="col-span-2 sm:col-span-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-red-500"
          >
            {slideData.filters.families.map((fam, idx) => (
              <option key={fam} value={idx}>
                {fam}
              </option>
            ))}
          </select>
        </div>
      </section>

      <SlideTabPanel tabKey={`${activeTab}-${viewTab}`}>
        {viewTab === 'overview' ? (
          <div className="space-y-2.5">
            {/* Row 1: 6 Uniform Neutral KPI Cards */}
            <section aria-label="KPI Row" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {slideData.kpiCards.map((kpi) => (
                <button
                  key={kpi.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, kpi.modal, SlidersHorizontal)}
                  className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 p-2.5 transition-colors cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={11}
                    className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />
                  <span className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pr-3 truncate">
                    {kpi.label}
                  </span>
                  <div className="text-[11px] font-black text-slate-900 dark:text-white tabular-nums mt-1">
                    {kpi.simulationValue}
                  </div>
                </button>
              ))}
            </section>

            {/* Row 2: Funnel Conversion + Activity (6 cols) & Revenue/Margin Trend Chart (6 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
              {/* Funnel Conversion & Activity */}
              <section className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Filter size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                    <span>{slideData.funnelPanel.title}</span>
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(e, slideData.funnelPanel.activityModal, SlidersHorizontal)}
                    className="group inline-flex items-center gap-1 text-[10px] font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                  >
                    <span>{langKey === 'en' ? 'KPI Policy' : 'Kebijakan KPI'}</span>
                    <ArrowUpRight size={11} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {slideData.funnelPanel.steps.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, st.modal, BarChart3)}
                      className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 p-2.5 transition-colors cursor-pointer select-none flex flex-col justify-between"
                    >
                      <ArrowUpRight
                        size={11}
                        className="absolute top-2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <span className="text-[10.5px] font-black text-slate-900 dark:text-white pr-3 leading-snug">
                        {st.stage}
                      </span>
                      <div className="text-[11px] font-bold text-red-600 dark:text-red-400 tabular-nums mt-1">
                        {st.placeholderCount}
                      </div>
                      <span className="text-[9.5px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {st.conversionLabel}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Simulated Wireframe Trend Chart */}
              <section className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex flex-col justify-between space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                    <span>{activeCadence.chartLabel}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-[9.5px] font-bold">
                    <span className="text-slate-700 dark:text-slate-200">
                      ■ {slideData.trendPanel.legendRevenue}
                    </span>
                    <span className="text-slate-400 dark:text-slate-400">
                      ■ {slideData.trendPanel.legendTarget}
                    </span>
                    <span className="text-red-600 dark:text-red-400">
                      — {slideData.trendPanel.legendMargin}
                    </span>
                  </div>
                </div>

                <div className="h-[135px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={activeCadence.chartPoints} margin={{ top: 4, right: 8, left: -24, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.2} />
                      <XAxis dataKey="period" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          fontSize: '11px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                        }}
                      />
                      <Bar dataKey="targetSim" name={slideData.trendPanel.legendTarget} fill="#cbd5e1" radius={[3, 3, 0, 0]} barSize={14} />
                      <Bar dataKey="revenueSim" name={slideData.trendPanel.legendRevenue} fill="#334155" radius={[3, 3, 0, 0]} barSize={14} />
                      <Line
                        type="monotone"
                        dataKey="marginSim"
                        name={slideData.trendPanel.legendMargin}
                        stroke="#dc2626"
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#dc2626' }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
            {/* Top Deals Table */}
            <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <TableProperties size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.topDealsPanel.title}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[540px] space-y-1.5">
                  <div className="grid grid-cols-12 gap-2 px-2 py-1 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <div className="col-span-3">{slideData.topDealsPanel.columns.customer}</div>
                    <div className="col-span-2">{slideData.topDealsPanel.columns.owner}</div>
                    <div className="col-span-2">{slideData.topDealsPanel.columns.stage}</div>
                    <div className="col-span-2">{slideData.topDealsPanel.columns.value}</div>
                    <div className="col-span-3 pr-4">{slideData.topDealsPanel.columns.nextStep}</div>
                  </div>

                  {slideData.topDealsPanel.rows.map((row) => (
                    <button
                      key={row.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, row.modal, TableProperties)}
                      className="group relative w-full grid grid-cols-12 gap-2 items-center text-left rounded-lg bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-2 py-2 transition-colors cursor-pointer select-none text-[10.5px]"
                    >
                      <ArrowUpRight
                        size={11}
                        className="absolute top-1/2 -translate-y-1/2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <div className="col-span-3 font-black text-slate-900 dark:text-white truncate">
                        {row.customer}
                      </div>
                      <div className="col-span-2 font-medium text-slate-600 dark:text-slate-300 truncate">
                        {row.owner}
                      </div>
                      <div className="col-span-2 font-bold text-red-600 dark:text-red-400 truncate">
                        {row.stage}
                      </div>
                      <div className="col-span-2 font-semibold text-slate-700 dark:text-slate-200 tabular-nums truncate">
                        {row.value}
                      </div>
                      <div className="col-span-3 pr-4 font-medium text-slate-600 dark:text-slate-300 truncate">
                        {row.nextStep}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Risk Panel */}
            <section className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <AlertTriangle size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.riskPanel.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {slideData.riskPanel.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, item.modal, AlertTriangle)}
                    className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between min-h-[88px]"
                  >
                    <ArrowUpRight
                      size={11}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <span className="block text-[10.5px] font-black text-red-600 dark:text-red-400 pr-3 truncate">
                      {item.title}
                    </span>
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white tabular-nums mt-1">
                      {item.placeholderCount}
                    </div>
                    <span className="block text-[9.5px] font-medium text-slate-500 dark:text-slate-400 truncate mt-1">
                      {item.actionCue}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
