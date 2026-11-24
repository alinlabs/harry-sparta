import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Wrench,
  UserRound,
  ShieldCheck,
  Monitor,
  Server,
  Code2,
  Wifi,
  AlertCircle,
  Compass,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem, type DetailModalItem } from '@/components/ui';
import {
  useSlideData,
  type CapabilityGroupId,
  type CorePillarId,
} from './data';

type Slide03TabId = 'positioning' | 'capabilities';

const PILLAR_ICONS: Record<CorePillarId, LucideIcon> = {
  'hardware-pillar': Cpu,
  'solutions-pillar': Wrench,
};

const CAPABILITY_ICONS: Record<CapabilityGroupId, LucideIcon> = {
  devices: Monitor,
  infrastructure: Server,
  'it-solutions': Code2,
  'connectivity-support': Wifi,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide03TabId>('positioning');

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: DetailModalItem,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide03TabId>[] = [
    {
      id: 'positioning',
      label: isEn ? 'Positioning & Credibility' : 'Posisi & Kredibilitas',
      icon: Compass,
    },
    {
      id: 'capabilities',
      label: isEn ? 'Solution Capabilities' : 'Kapabilitas Solusi',
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
      {/* Slide Header + Tabs */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={sectionTabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'positioning' ? (
          <div className="flex flex-col space-y-3.5">
            {/* Positioning Statement */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/75 border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-600 dark:border-l-red-500 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {slideData.positioningLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-normal text-slate-500 dark:text-slate-400">
                  <AlertCircle size={11} />
                  {slideData.positioningCaveat}
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                “{slideData.positioningStatement}”
              </p>

              {/* Value Bridge Flow (Typography + Arrow Separators — Zero Badge Boxes) */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="font-semibold text-slate-500 dark:text-slate-400">
                  {slideData.valueBridgeLabel}:
                </span>
                {slideData.valueBridgeSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span
                      className={
                        idx === slideData.valueBridgeSteps.length - 1
                          ? 'font-bold text-red-600 dark:text-red-400'
                          : 'font-semibold text-slate-700 dark:text-slate-200'
                      }
                    >
                      {step}
                    </span>
                    {idx < slideData.valueBridgeSteps.length - 1 && (
                      <ArrowRight size={11} className="text-slate-400 dark:text-slate-500 shrink-0" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 2 Uniform Core Capability Pillars */}
            <section aria-label={slideData.pillarsSectionLabel}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slideData.pillars.map((pillar) => {
                  const Icon = PILLAR_ICONS[pillar.id];

                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, pillar.modal, Icon)}
                      className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
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
                            {pillar.kicker}
                          </span>
                          <h3 className="text-xs sm:text-[13.5px] font-black text-slate-900 dark:text-white leading-snug">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                        {pillar.keywords}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Owner Personal Branding Placeholder + Verifiable Proof Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={(e) => handleOpenModal(e, slideData.ownerCard.modal, UserRound)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-center gap-2.5 pr-6">
                  <div className="w-9 h-9 rounded-xl bg-red-600 dark:bg-red-600 border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 text-white">
                    <UserRound size={17} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {slideData.ownerCard.kicker}
                    </span>
                    <h3 className="text-xs sm:text-[13.5px] font-black text-slate-900 dark:text-white leading-snug">
                      {slideData.ownerCard.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-0.5">
                  <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                    {slideData.ownerCard.keywords}
                  </p>
                  <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                    {slideData.ownerCard.caveat}
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={(e) => handleOpenModal(e, slideData.proofCard.modal, ShieldCheck)}
                className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3.5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
              >
                <ArrowUpRight
                  size={14}
                  className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                />

                <div className="flex items-center gap-2.5 pr-6">
                  <div className="w-9 h-9 rounded-xl bg-red-600 dark:bg-red-600 border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 text-white">
                    <ShieldCheck size={17} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {slideData.proofCard.kicker}
                    </span>
                    <h3 className="text-xs sm:text-[13.5px] font-black text-slate-900 dark:text-white leading-snug">
                      {slideData.proofCard.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-0.5">
                  <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                    {slideData.proofCard.keywords}
                  </p>
                  <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                    {slideData.proofCard.caveat}
                  </p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <section aria-label={slideData.capabilitiesSectionLabel} className="space-y-3">
            <div className="flex items-center justify-between gap-2 px-0.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {slideData.capabilitiesSectionLabel}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {slideData.capabilityGroups.map((group) => {
                const Icon = CAPABILITY_ICONS[group.id];

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, group.modal, Icon)}
                    className="group relative text-left rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between min-h-[190px]"
                  >
                    <ArrowUpRight
                      size={14}
                      className="absolute top-3.5 right-3.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
                    />

                    <div>
                      <div className="flex items-center gap-2.5 pr-6">
                        <div className="w-8 h-8 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0">
                          <Icon size={15} />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 truncate">
                            {group.category}
                          </span>
                          <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight truncate">
                            {group.title}
                          </h4>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1.5">
                        {group.subcategories.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-center gap-1.5 text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
