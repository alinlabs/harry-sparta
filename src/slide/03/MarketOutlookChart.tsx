import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  LabelList,
} from 'recharts';
import { useTheme } from '@/contexts/ThemeContext';
import type { PcChartViewMode, PcGrowthPoint, PcVolumePoint } from './data';

interface MarketOutlookChartProps {
  mode: PcChartViewMode;
  growthData: PcGrowthPoint[];
  volumeData: PcVolumePoint[];
  language: 'in' | 'en';
}

export const MarketOutlookChart: React.FC<MarketOutlookChartProps> = ({
  mode,
  growthData,
  volumeData,
  language,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const textColor = isDark ? '#94a3b8' : '#475569';
  const zeroLineColor = isDark ? '#475569' : '#94a3b8';
  const tooltipBg = isDark ? '#0f172a' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#cbd5e1';
  const tooltipText = isDark ? '#f8fafc' : '#0f172a';

  if (mode === 'volume') {
    return (
      <div className="h-[175px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={volumeData}
            margin={{ top: 20, right: 12, left: -12, bottom: 4 }}
            barSize={46}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="period"
              stroke={textColor}
              tick={{ fontSize: 11, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke={textColor}
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => `${v.toFixed(1)} Jt`}
              domain={[0, 5]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: isDark ? 'rgba(30,41,59,0.45)' : 'rgba(241,245,249,0.8)' }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload as PcVolumePoint;
                return (
                  <div
                    style={{
                      backgroundColor: tooltipBg,
                      borderColor: tooltipBorder,
                      color: tooltipText,
                    }}
                    className="rounded-lg border p-2.5 text-xs shadow-lg max-w-[230px]"
                  >
                    <div className="font-bold text-slate-900 dark:text-white">{d.period}</div>
                    <div className="text-[11px] font-semibold text-red-600 dark:text-red-400 mt-0.5">
                      {d.statusLabel}
                    </div>
                    <div className="font-mono font-black text-sm mt-1 tabular-nums">
                      {d.valueLabel}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {d.note}
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="unitsMillions" radius={[6, 6, 0, 0]}>
              {volumeData.map((entry) => (
                <Cell
                  key={entry.period}
                  fill={entry.isPartialYear ? '#64748b' : '#1e293b'}
                  fillOpacity={entry.isPartialYear ? 0.78 : isDark ? 0.95 : 0.9}
                />
              ))}
              <LabelList
                dataKey="valueLabel"
                position="top"
                style={{
                  fill: isDark ? '#e2e8f0' : '#0f172a',
                  fontSize: 11,
                  fontWeight: 700,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[175px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={growthData}
          margin={{ top: 20, right: 10, left: -12, bottom: 4 }}
          barSize={36}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <ReferenceLine y={0} stroke={zeroLineColor} strokeWidth={1.25} />
          <XAxis
            dataKey="label"
            stroke={textColor}
            tick={{ fontSize: 10.5, fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis
            stroke={textColor}
            tick={{ fontSize: 11 }}
            tickFormatter={(v) => `${v > 0 ? `+${v}` : v}%`}
            domain={[-28, 22]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: isDark ? 'rgba(30,41,59,0.45)' : 'rgba(241,245,249,0.8)' }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload as PcGrowthPoint;
              return (
                <div
                  style={{
                    backgroundColor: tooltipBg,
                    borderColor: tooltipBorder,
                    color: tooltipText,
                  }}
                  className="rounded-lg border p-2.5 text-xs shadow-lg max-w-[240px]"
                >
                  <div className="font-bold text-slate-900 dark:text-white">{d.fullLabel}</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    {d.statusLabel}
                  </div>
                  <div
                    className={`font-mono font-black text-sm mt-1 tabular-nums ${
                      d.yoyPct >= 0
                        ? 'text-slate-900 dark:text-white'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {d.yoyPct > 0 ? `+${d.yoyPct}%` : `${d.yoyPct}%`} YoY
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {d.note}
                  </div>
                </div>
              );
            }}
          />
          <Bar dataKey="yoyPct" radius={[5, 5, 5, 5]}>
            {growthData.map((entry) => {
              let fill = isDark ? '#cbd5e1' : '#1e293b';
              if (entry.isForecast) {
                fill = '#dc2626';
              } else if (entry.yoyPct < 0) {
                fill = '#991b1b';
              } else if (entry.label.includes('Q1')) {
                fill = '#475569';
              }
              return (
                <Cell
                  key={entry.label}
                  fill={fill}
                  fillOpacity={entry.isForecast ? 0.85 : 0.95}
                  stroke={entry.isForecast ? '#ef4444' : 'none'}
                  strokeDasharray={entry.isForecast ? '4 2' : undefined}
                  strokeWidth={entry.isForecast ? 1.5 : 0}
                />
              );
            })}
            <LabelList
              dataKey="yoyLabel"
              content={(props: any) => {
                const { x = 0, y = 0, width = 0, height = 0, value, index } = props;
                const entry = typeof index === 'number' ? growthData[index] : undefined;
                const isNegative = entry ? entry.yoyPct < 0 : false;
                const numX = Number(x) + Number(width) / 2;
                const numY = Number(y);
                const numH = Number(height);
                const labelY = isNegative
                  ? Math.max(numY, numY + numH) + 13
                  : Math.min(numY, numY + numH) - 6;

                return (
                  <text
                    x={numX}
                    y={labelY}
                    textAnchor="middle"
                    fill={
                      entry?.isForecast
                        ? isDark
                          ? '#f87171'
                          : '#dc2626'
                        : isDark
                          ? '#e2e8f0'
                          : '#0f172a'
                    }
                    fontSize={10.5}
                    fontWeight={700}
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {value}
                  </text>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="sr-only">
        {language === 'en'
          ? 'Indonesia PC shipment YoY growth and 2026 forecast chart'
          : 'Grafik pertumbuhan YoY pengiriman PC Indonesia dan proyeksi 2026'}
      </div>
    </div>
  );
};

export default MarketOutlookChart;
