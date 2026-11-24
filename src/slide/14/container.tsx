import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MapPin,
  Users,
  Building2,
  ClipboardList,
  Filter,
  AlertCircle,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide14ModalPayload } from './data';
import { getB2BFunnelBarPercent, type TerritoryId } from './utils';

type Slide14TabId = 'territory-funnel' | 'vertical-matrix';

const TERRITORY_ICONS: Record<TerritoryId, LucideIcon> = {
  'jakarta': Building2,
  'west-corridor': MapPin,
  'east-corridor': MapPin,
  'kam-overlay': Users,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide14TabId>('territory-funnel');

  const tabs: SlideTabItem<Slide14TabId>[] = [
    {
      id: 'territory-funnel',
      label: isEn ? 'Territory & B2B Pipeline' : 'Teritori & Pipeline B2B',
      icon: MapPin,
    },
    {
      id: 'vertical-matrix',
      label: isEn ? 'Vertical Industry Matrix' : 'Matriks Sektor Vertikal',
      icon: Building2,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide14ModalPayload,
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
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-3"
    >
      {/* Block 1: Header + Tabs Below Title */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'territory-funnel' ? (
          /* Tab 1: Jabodetabek Territories + Governance (Left 8 cols) & B2B Project Funnel (Right 4 cols) */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left: Jabodetabek Corridor Diagram, 3 Territories + 1 KAM Overlay, Governance Strip */}
            <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {slideData.territorySection.sectionTitle}
                </h3>
                <span className="text-[11px] font-bold text-red-600 dark:text-red-400">
                  {slideData.territorySection.ruleCue}
                </span>
              </div>

              {/* Stylized Jabodetabek Geographic Corridor Schematic SVG + Overlay */}
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 px-3 py-2.5">
                <div className="grid grid-cols-3 items-center gap-2 text-center text-[10.5px] font-bold">
                  <div className="text-slate-600 dark:text-slate-300 truncate">
                    {slideData.territorySection.corridorLabels.west}
                  </div>
                  <div className="text-red-600 dark:text-red-400 font-black truncate">
                    {slideData.territorySection.corridorLabels.center}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 truncate">
                    {slideData.territorySection.corridorLabels.east}
                  </div>
                </div>
                <div className="relative h-5 flex items-center mt-0.5">
                  <div className="w-full h-0.5 bg-slate-300 dark:bg-slate-600" />
                  <div className="absolute left-1/6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-slate-200 border-2 border-white dark:border-slate-900" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600 dark:bg-red-500 border-2 border-white dark:border-slate-900" />
                  <div className="absolute left-5/6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-slate-200 border-2 border-white dark:border-slate-900" />
                </div>
                <div className="text-center text-[10px] font-semibold text-red-600 dark:text-red-400 pt-1 border-t border-dashed border-red-300 dark:border-red-800">
                  {slideData.territorySection.corridorLabels.overlay}
                </div>
              </div>

              {/* 3 Territory Cards + 1 KAM Overlay Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {slideData.territorySection.territories.map((t) => {
                  const Icon = TERRITORY_ICONS[t.id];
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, t.modal, Icon)}
                      className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between"
                    >
                      <ArrowUpRight
                        size={12}
                        className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <div className="pr-4">
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                          {t.code}
                        </span>
                        <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
                          {t.title}
                        </h4>
                        <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {t.roleLabel}
                        </span>
                      </div>
                      <p className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                        {t.keywords}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Governance: Account Universe & Scoring + Account Plan & E-Proc Separation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {slideData.governanceItems.map((gov) => (
                  <button
                    key={gov.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, gov.modal, ClipboardList)}
                    className="group relative text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 p-3 transition-colors cursor-pointer select-none"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="pr-4">
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        {gov.code}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                        {gov.title}
                      </h4>
                      <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                        {gov.keywords}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: B2B Project Pipeline Funnel (7 Stages) */}
            <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {slideData.funnelSection.sectionTitle}
                  </h3>
                  <p className="text-[10.5px] font-semibold text-red-600 dark:text-red-400">
                    {slideData.funnelSection.motionNote}
                  </p>
                </div>
                <Filter size={14} className="text-red-600 dark:text-red-400 shrink-0" />
              </div>

              <div className="flex-1 flex flex-col justify-center items-center space-y-2">
                {slideData.funnelSection.stages.map((st, idx) => {
                  const widthPct = getB2BFunnelBarPercent(idx, slideData.funnelSection.stages.length);
                  return (
                    <div key={st.id} style={{ width: `${widthPct}%` }} className="w-full">
                      <button
                        type="button"
                        onClick={(e) => handleOpenModal(e, st.modal, Layers)}
                        className="group relative w-full text-left rounded-lg bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3 py-2 transition-colors cursor-pointer select-none"
                      >
                        <ArrowUpRight
                          size={11}
                          className="absolute top-2.5 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                        />
                        <div className="flex items-baseline justify-between gap-1.5 pr-4">
                          <div className="min-w-0 flex items-baseline gap-1.5">
                            <span className="text-[9.5px] font-bold text-red-600 dark:text-red-400 tabular-nums shrink-0">
                              {st.step}
                            </span>
                            <span className="text-[11px] font-black text-slate-900 dark:text-white truncate">
                              {st.title}
                            </span>
                          </div>
                          <span className="text-[9.5px] font-medium text-slate-500 dark:text-slate-400 truncate">
                            {st.cue}
                          </span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          /* Tab 2: Vertical Industry Matrix (7 Sectors) */
          <section
            aria-label={slideData.verticalSection.sectionTitle}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.verticalSection.sectionTitle}
              </h3>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                {slideData.verticalSection.priorityCaveat}
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[680px] space-y-1.5">
                {/* Desktop Table Header */}
                <div className="grid grid-cols-12 gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <div className="col-span-2">{slideData.verticalSection.columns.sector}</div>
                  <div className="col-span-3">{slideData.verticalSection.columns.useCase}</div>
                  <div className="col-span-3">{slideData.verticalSection.columns.fit}</div>
                  <div className="col-span-2">{slideData.verticalSection.columns.buyer}</div>
                  <div className="col-span-2 pr-4">{slideData.verticalSection.columns.proof}</div>
                </div>

                {slideData.verticalSection.rows.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, row.modal, Building2)}
                    className="group relative w-full grid grid-cols-12 gap-2 items-center text-left rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3 py-2.5 transition-colors cursor-pointer select-none text-[11px] leading-snug"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-1/2 -translate-y-1/2 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="col-span-2 font-black text-red-600 dark:text-red-400 truncate">
                      {row.sector}
                    </div>
                    <div className="col-span-3 font-medium text-slate-700 dark:text-slate-200 truncate">
                      {row.useCase}
                    </div>
                    <div className="col-span-3 font-semibold text-slate-900 dark:text-white truncate">
                      {row.productFit}
                    </div>
                    <div className="col-span-2 font-medium text-slate-600 dark:text-slate-300 truncate">
                      {row.buyerPic}
                    </div>
                    <div className="col-span-2 pr-4 font-medium text-slate-500 dark:text-slate-400 truncate">
                      {row.salesProof}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <footer className="flex items-start gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-normal text-slate-500 dark:text-slate-400 leading-snug">
              <AlertCircle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>{slideData.evidenceFooter}</span>
            </footer>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
