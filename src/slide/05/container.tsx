import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Boxes,
  PieChart as PieChartIcon,
  Clock,
  Wallet,
  Briefcase,
  Warehouse,
  Calculator,
  ShieldCheck,
  Info,
  AlertCircle,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import { useTheme } from '@/contexts/ThemeContext';
import {
  useSlideData,
  type InventoryKpiId,
  type AccessRoleId,
  type Slide05ModalPayload,
} from './data';

type Slide05TabId = 'analytics' | 'governance';

const KPI_ICONS: Record<InventoryKpiId, LucideIcon> = {
  'total-units': Boxes,
  'stock-mix': PieChartIcon,
  'slow-moving': Clock,
  'stock-value': Wallet,
};

const ROLE_ICONS: Record<AccessRoleId, LucideIcon> = {
  sales: Briefcase,
  warehouse: Warehouse,
  finance: Calculator,
  'manager-owner': ShieldCheck,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const { theme } = useTheme();
  const slideData = useSlideData();
  const isDark = theme === 'dark';
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide05TabId>('analytics');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide05ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide05TabId>[] = [
    {
      id: 'analytics',
      label: isEn ? 'Stock Health & Analytics' : 'Analitik & Kesehatan Stok',
      icon: BarChart3,
    },
    {
      id: 'governance',
      label: isEn ? 'Role Access & Governance' : 'Tata Kelola Akses Peran',
      icon: ShieldCheck,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3.5 sm:space-y-4"
    >
      {/* Block 1: Header + Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'analytics' ? (
          <div className="space-y-3.5">

      {/* Block 2: Top Row — 4 Uniform KPI Cards (No Fabricated Stock Numbers or Pill Badges) */}
      <section aria-label={slideData.kpiSectionLabel} className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-0.5">
          <span className="text-[10.5px] font-black uppercase tracking-wider text-red-600 dark:text-red-400">
            {slideData.simulationTag}
          </span>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-snug">
            {slideData.simulationNotice}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {slideData.kpis.map((kpi) => {
            const Icon = KPI_ICONS[kpi.id];

            return (
              <button
                key={kpi.id}
                type="button"
                onClick={(e) => handleOpenModal(e, kpi.modal, Icon)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-start gap-2.5 pr-5">
                  <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                      {kpi.kicker}
                    </span>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 truncate">
                      {kpi.label}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-lg sm:text-xl font-black tabular-nums text-slate-900 dark:text-white leading-tight truncate">
                    {kpi.value}
                  </div>
                  <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {kpi.cue}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Block 3: 3-Panel Dashboard Mockup Area (Mix Donut | Stock Table Structure | Aging Example) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Panel Left (3 cols): 70/30 Mix Donut + Basis Confirmation Warning */}
        <div className="lg:col-span-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white tracking-tight">
              {slideData.mixPanel.title}
            </h3>
            <p className="text-[10.5px] font-normal text-slate-500 dark:text-slate-400 flex items-start gap-1 mt-0.5 leading-snug">
              <AlertCircle size={11} className="shrink-0 mt-0.5" />
              <span>{slideData.mixPanel.caveat}</span>
            </p>
          </div>

          <div className="h-32 w-full my-1 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={slideData.mixPanel.slices}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={48}
                  paddingAngle={2}
                  stroke="none"
                >
                  {slideData.mixPanel.slices.map((slice) => (
                    <Cell key={slice.name} fill={slice.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`~${value}%`, '']}
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[11px] font-black tabular-nums text-slate-900 dark:text-white">
                70/30
              </span>
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
            {slideData.mixPanel.slices.map((slice) => (
              <div key={slice.name} className="flex items-center gap-2 text-[10.5px]">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: slice.color }}
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {slice.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Center (6 cols): Target Stock Table Mockup */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between overflow-hidden">
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-black text-slate-900 dark:text-white tracking-tight">
                {slideData.tablePanel.title}
              </h3>
            </div>
            <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              {slideData.tablePanel.note}
            </p>
          </div>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full text-left border-collapse text-[10.5px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-1.5 pr-2 whitespace-nowrap">{slideData.tablePanel.headers.sku}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap">{slideData.tablePanel.headers.category}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap">{slideData.tablePanel.headers.condition}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap hidden sm:table-cell">{slideData.tablePanel.headers.entryDate}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap">{slideData.tablePanel.headers.age}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap hidden md:table-cell">{slideData.tablePanel.headers.hpp}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap hidden md:table-cell">{slideData.tablePanel.headers.price}</th>
                  <th className="py-1.5 px-1.5 whitespace-nowrap hidden sm:table-cell">{slideData.tablePanel.headers.location}</th>
                  <th className="py-1.5 pl-1.5 whitespace-nowrap">{slideData.tablePanel.headers.qcStatus}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {slideData.tablePanel.rows.map((row) => (
                  <tr key={row.sku} className="text-slate-700 dark:text-slate-300">
                    <td className="py-2 pr-2 font-bold tabular-nums text-slate-900 dark:text-white whitespace-nowrap">
                      {row.sku}
                    </td>
                    <td className="py-2 px-1.5 font-medium whitespace-nowrap">{row.category}</td>
                    <td className="py-2 px-1.5 font-semibold whitespace-nowrap">{row.condition}</td>
                    <td className="py-2 px-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:table-cell">
                      {row.entryDate}
                    </td>
                    <td className="py-2 px-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {row.age}
                    </td>
                    <td className="py-2 px-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap hidden md:table-cell">
                      {row.hpp}
                    </td>
                    <td className="py-2 px-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap hidden md:table-cell">
                      {row.price}
                    </td>
                    <td className="py-2 px-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap hidden sm:table-cell">
                      {row.location}
                    </td>
                    <td className="py-2 pl-1.5 font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                      {row.qcStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 mt-1">
            {slideData.benchmarkNote}
          </p>
        </div>

        {/* Panel Right (3 cols): Stock Aging Buckets Example Bar Chart */}
        <div className="lg:col-span-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white tracking-tight">
              {slideData.agingPanel.title}
            </h3>
            <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
              {slideData.agingPanel.note}
            </p>
          </div>

          <div className="h-36 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={slideData.agingPanel.buckets}
                margin={{ top: 6, right: 4, left: -24, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={isDark ? '#1e293b' : '#e2e8f0'}
                />
                <XAxis
                  dataKey="bucket"
                  tick={{ fontSize: 10, fill: isDark ? '#94a3b8' : '#64748b', fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide domain={[0, 50]} />
                <Tooltip
                  formatter={(_val: number, _name: string, props: { payload?: { note?: string } }) => [
                    props?.payload?.note || slideData.agingPanel.tooltipLabel,
                    '',
                  ]}
                  contentStyle={{
                    backgroundColor: isDark ? '#0f172a' : '#ffffff',
                    borderColor: isDark ? '#334155' : '#e2e8f0',
                    borderRadius: '0.5rem',
                    fontSize: '11px',
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                />
                <Bar dataKey="sampleIndex" radius={[4, 4, 0, 0]} fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
          </div>
        ) : (
          <div className="space-y-3.5">
            {/* Block 4: Role-Based Access Diagram (4 Uniform Neutral Clickable Cards) */}
            <section aria-label={slideData.rolesSectionLabel} className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {slideData.rolesSectionLabel}
                </h3>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {slideData.rolesSectionNote}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {slideData.roles.map((role) => {
                  const Icon = ROLE_ICONS[role.id];

                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, role.modal, Icon)}
                      className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between min-h-[140px]"
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
                          <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">
                            {role.role}
                          </h4>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                            {role.restriction}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                        {role.accessScope}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Block 5: Claim Boundary & Readiness Footer */}
            <footer className="rounded-xl bg-slate-50/90 dark:bg-slate-900/75 border border-slate-200 dark:border-slate-800 px-4 py-3 flex items-start sm:items-center gap-2.5">
              <Info size={15} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                <strong className="font-bold text-slate-900 dark:text-white mr-1">
                  {slideData.governanceNote.label}:
                </strong>
                {slideData.governanceNote.text}
              </p>
            </footer>
          </div>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
