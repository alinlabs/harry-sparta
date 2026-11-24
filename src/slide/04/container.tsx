import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDown,
  Monitor,
  Server,
  Cpu,
  Wrench,
  Package,
  Layers,
  Settings2,
  Repeat,
  ShieldCheck,
  FileCheck2,
  type LucideIcon,
} from 'lucide-react';
import { useDetailModal } from '@/components/ui';
import {
  useSlideData,
  type PortfolioGroupId,
  type ProgressionStageId,
  type GuardrailId,
  type Slide04ModalPayload,
} from './data';

const GROUP_ICONS: Record<PortfolioGroupId, LucideIcon> = {
  'end-user-computing': Monitor,
  'enterprise-infrastructure': Server,
  'components-accessories': Cpu,
  services: Wrench,
};

const PROGRESSION_ICONS: Record<ProgressionStageId, LucideIcon> = {
  product: Package,
  bundle: Layers,
  service: Settings2,
  recurring: Repeat,
};

const GUARDRAIL_ICONS: Record<GuardrailId, LucideIcon> = {
  'refurbished-transparency': ShieldCheck,
  'catalog-boundary': FileCheck2,
};

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide04ModalPayload,
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
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-4 sm:space-y-5"
    >
      {/* Block 1: Header */}
      <header className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
      </header>

      {/* Block 2: Left 4-Category Matrix + Right Product->Bundle->Service->Recurring Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left: 2x2 Matrix of Four Product & Service Groups */}
        <section
          aria-label={slideData.matrixSectionLabel}
          className="lg:col-span-8 flex flex-col"
        >
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            {slideData.matrixSectionLabel}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            {slideData.groups.map((group) => {
              const Icon = GROUP_ICONS[group.id];

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, group.modal, Icon)}
                  className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 sm:p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                  />

                  <div className="flex items-start gap-3 pr-5">
                    <div className="w-10 h-10 rounded-xl bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {group.kicker}
                      </span>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                        {group.title}
                      </h4>
                    </div>
                  </div>

                  <ul className="mt-2.5 space-y-1">
                    {group.products.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10.5px] leading-snug truncate">
                    <strong className="font-bold text-slate-800 dark:text-slate-200 mr-1">
                      {group.useCaseLabel}:
                    </strong>
                    <span className="font-medium text-slate-500 dark:text-slate-400">
                      {group.useCaseCue}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Right: Product -> Bundle -> Service -> Recurring Relationship Diagram */}
        <section
          aria-label={slideData.progressionSectionLabel}
          className="lg:col-span-4 flex flex-col"
        >
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            {slideData.progressionSectionLabel}
          </h3>

          <div className="flex-1 flex flex-col justify-between space-y-1.5">
            {slideData.progression.map((stage, idx) => {
              const Icon = PROGRESSION_ICONS[stage.id];

              return (
                <React.Fragment key={stage.id}>
                  <button
                    type="button"
                    onClick={(e) => handleOpenModal(e, stage.modal, Icon)}
                    className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 px-3.5 py-2.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center gap-3 pr-8"
                  >
                    <ArrowUpRight
                      size={14}
                      className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                      <Icon size={15} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold tabular-nums text-red-600 dark:text-red-400">
                          {stage.step}
                        </span>
                        <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {stage.cue}
                      </p>
                    </div>
                  </button>

                  {idx < slideData.progression.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="flex items-center justify-center py-0.5 text-slate-400 dark:text-slate-500"
                    >
                      <ArrowDown size={13} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </div>

      {/* Block 3: Bottom Row — Second/Refurbished Transparency & Catalog Boundary (Uniform Neutral Cards) */}
      <section aria-label={slideData.guardrailsSectionLabel}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {slideData.guardrails.map((item) => {
            const Icon = GUARDRAIL_ICONS[item.id];

            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => handleOpenModal(e, item.modal, Icon)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 px-4 py-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex items-center gap-3 pr-9"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                  <Icon size={15} />
                </div>

                <div className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                    {item.kicker}
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {item.cue}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
