import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Workflow, Package, Database, TrendingUp } from 'lucide-react';
import { useSlideData, type CoverNodeId } from './data';

interface NodePosition {
  id: CoverNodeId;
  leftPct: number;
  topPct: number;
  svgX: number;
  svgY: number;
}

const NODE_POSITIONS: NodePosition[] = [
  { id: 'people', leftPct: 18, topPct: 26, svgX: 72, svgY: 57 },
  { id: 'process', leftPct: 18, topPct: 74, svgX: 72, svgY: 163 },
  { id: 'product', leftPct: 50, topPct: 26, svgX: 200, svgY: 57 },
  { id: 'data', leftPct: 50, topPct: 74, svgX: 200, svgY: 163 },
  { id: 'growth', leftPct: 83, topPct: 50, svgX: 332, svgY: 110 },
];

const NODE_EDGES: Array<{ from: CoverNodeId; to: CoverNodeId; isStrategic?: boolean }> = [
  { from: 'people', to: 'process' },
  { from: 'people', to: 'product' },
  { from: 'process', to: 'data' },
  { from: 'product', to: 'data' },
  { from: 'people', to: 'data' },
  { from: 'process', to: 'growth', isStrategic: true },
  { from: 'product', to: 'growth', isStrategic: true },
  { from: 'data', to: 'growth', isStrategic: true },
];

const NODE_ICONS: Record<CoverNodeId, React.ComponentType<{ className?: string }>> = {
  people: Users,
  process: Workflow,
  product: Package,
  data: Database,
  growth: TrendingUp,
};

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeNodeId, setActiveNodeId] = useState<CoverNodeId>('growth');

  const getPosition = (id: CoverNodeId) =>
    NODE_POSITIONS.find((pos) => pos.id === id)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center px-2 sm:px-4 py-2 sm:py-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Editorial Zone: Open directly on Layout canvas */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 mb-3">
            {slideData.contextLabel}
          </p>

          <div className="w-12 h-0.5 bg-red-600 dark:bg-red-500 mb-5" aria-hidden="true" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white [text-wrap:balance]">
            <span className="block">{slideData.titleLine1}</span>
            <span className="block text-red-600 dark:text-red-500 mt-1">
              {slideData.titleLine2}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
            {slideData.subtitle}
          </p>

          <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <span>{slideData.presenter.label}</span>
            <span className="font-bold text-slate-900 dark:text-white">
              {slideData.presenter.name}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>{slideData.presenter.role}</span>
          </div>
        </div>

        {/* Right Visual Zone: Open Mind Map directly on canvas (no wrapper card, no header/readout text) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-[20/11] select-none">
            <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
              <defs>
                <marker
                  id="arrow-muted"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" className="text-slate-400 dark:text-slate-500" />
                </marker>
                <marker
                  id="arrow-red"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
                </marker>
              </defs>

              {NODE_EDGES.map((edge) => {
                const p1 = getPosition(edge.from);
                const p2 = getPosition(edge.to);
                const isConnectedToActive =
                  edge.from === activeNodeId || edge.to === activeNodeId;
                const isStrategicHighlight =
                  isConnectedToActive && (edge.isStrategic || activeNodeId === 'growth');

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={p1.svgX}
                    y1={p1.svgY}
                    x2={p2.svgX}
                    y2={p2.svgY}
                    stroke="currentColor"
                    className={
                      isStrategicHighlight
                        ? 'text-red-600 dark:text-red-500'
                        : isConnectedToActive
                        ? 'text-slate-700 dark:text-slate-200'
                        : 'text-slate-300 dark:text-slate-700'
                    }
                    strokeWidth={isConnectedToActive ? 2 : 1.25}
                    strokeDasharray={edge.isStrategic ? undefined : '4 3'}
                    markerEnd={
                      edge.to === 'growth'
                        ? isStrategicHighlight
                          ? 'url(#arrow-red)'
                          : 'url(#arrow-muted)'
                        : undefined
                    }
                  />
                );
              })}
            </svg>

            {/* Interactive Positioned Node Buttons */}
            {slideData.nodes.map((node) => {
              const pos = getPosition(node.id);
              const Icon = NODE_ICONS[node.id];
              const isActive = activeNodeId === node.id;
              const isGrowth = node.id === 'growth';

              return (
                <button
                  key={node.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveNodeId(node.id)}
                  style={{
                    left: `${pos.leftPct}%`,
                    top: `${pos.topPct}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[42px] px-2.5 sm:px-3.5 py-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    isActive
                      ? isGrowth
                        ? 'bg-red-600 text-white border-red-600 dark:border-red-500 shadow-sm'
                        : 'bg-white text-slate-900 border-slate-900 ring-1 ring-slate-900/20 dark:bg-slate-800 dark:text-white dark:border-white dark:ring-white/20 shadow-sm'
                      : isGrowth
                      ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100 dark:bg-red-950/70 dark:text-red-200 dark:border-red-800/70 dark:hover:bg-red-900/70'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:text-slate-900 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-700 dark:hover:border-slate-500'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{node.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Container;


