import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ClipboardCheck,
  Cpu,
  ShieldCheck,
  Zap,
  Repeat,
  Target,
  Scale,
  Database,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';
import { useDetailModal } from '@/components/ui';
import { useSlideData, type Slide28ModalPayload } from './data';

const PRINCIPLE_ICONS: LucideIcon[] = [
  ClipboardCheck,
  Cpu,
  ShieldCheck,
  Zap,
  Repeat,
  Target,
  Scale,
  Database,
  GraduationCap,
];

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const [selectedLoopIdx, setSelectedLoopIdx] = useState<number>(0);

  const activeLoop = slideData.loopStages[selectedLoopIdx] ?? slideData.loopStages[0];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide28ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-2.5"
    >
      {/* Header */}
      <header className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
      </header>

      {/* 3x3 Grid of 9 Observable Operating Principles */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {slideData.principles.map((item, idx) => {
          const Icon = PRINCIPLE_ICONS[idx] ?? ClipboardCheck;
          return (
            <button
              key={item.id}
              type="button"
              onClick={(e) => handleOpenModal(e, item.modal, Icon)}
              className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-700/60 p-3 flex flex-col justify-between transition-colors focus:outline-none"
            >
              <ArrowUpRight
                size={13}
                className="absolute top-3 right-3 text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
              />

              <div>
                <div className="flex items-center gap-2 pr-5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 tabular-nums">
                      {item.code} • {item.verb}
                    </p>
                    <h3 className="text-[13px] font-black text-slate-900 dark:text-white leading-tight truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  {item.behavior}
                </p>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  {item.proof}
                </p>
              </div>
            </button>
          );
        })}
      </section>

      {/* Continuous Improvement Loop Strip */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
              {slideData.loopTitle}:
            </span>
            {slideData.loopStages.map((stage, idx) => {
              const isActive = idx === selectedLoopIdx;
              const StageIcon = [Target, Cpu, ClipboardCheck, Repeat][idx] ?? Repeat;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedLoopIdx(idx)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] font-bold border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/20 opacity-100'
                        : 'bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 opacity-65 hover:opacity-100 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <StageIcon size={12} className="shrink-0" aria-hidden="true" />
                    <span>{stage.label}</span>
                  </button>
                  {idx < slideData.loopStages.length - 1 && (
                    <ArrowRight size={12} className="text-slate-300 dark:text-slate-600 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 lg:text-right">
            <span className="font-bold text-red-600 dark:text-red-400 tabular-nums mr-1.5">
              {activeLoop.step} {activeLoop.label}:
            </span>
            {activeLoop.mechanism}
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
