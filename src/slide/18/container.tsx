import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  GitCommitHorizontal,
  Diamond,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideTabs, SlideTabPanel, useDetailModal, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide18ModalPayload } from './data';

type Slide18TabId = 'swimlane' | 'matrix';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<Slide18TabId>('swimlane');

  const tabs: SlideTabItem<Slide18TabId>[] = [
    {
      id: 'swimlane',
      label: isEn ? 'Swimlane Flow' : 'Alur Swimlane',
      icon: GitCommitHorizontal,
    },
    {
      id: 'matrix',
      label: isEn ? 'Division Variants Matrix' : 'Matriks Varian Divisi',
      icon: ClipboardCheck,
    },
  ];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide18ModalPayload,
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
      {/* Block 1: Header */}
      <header className="text-center space-y-2.5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
        <SlideTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          ariaLabel={isEn ? 'Slide sections' : 'Bagian slide'}
        />
      </header>

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'swimlane' ? (
          /* Block 2: 5-Lane Horizontal Swimlane Flow */
          <section
            aria-label={slideData.swimlaneSection.sectionTitle}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-2.5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {slideData.swimlaneSection.sectionTitle}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
                <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-800 dark:bg-slate-200 inline-block" />
                  <span>{slideData.swimlaneSection.colorLegendNormal}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <Diamond size={11} className="fill-red-600 dark:fill-red-400" />
                  <span>{slideData.swimlaneSection.colorLegendException}</span>
                </span>
              </div>
            </div>

            {/* 5 Horizontal Swimlanes */}
            <div className="space-y-2">
              {slideData.swimlaneSection.lanes.map((lane) => (
                <button
                  key={lane.id}
                  type="button"
                  onClick={(e) => handleOpenModal(e, lane.modal, GitCommitHorizontal)}
                  className="group relative w-full text-left rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3.5 py-2.5 transition-colors cursor-pointer select-none"
                >
                  <ArrowUpRight
                    size={12}
                    className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center pr-5">
                    {/* Lane Name */}
                    <div className="md:col-span-4 min-w-0">
                      <span className="block text-xs font-black text-slate-900 dark:text-white leading-snug">
                        {lane.laneTitle}
                      </span>
                    </div>

                    {/* Lane Steps & Approval Decision Diamonds */}
                    <div className="md:col-span-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                      {lane.nodes.map((node, nIdx) => (
                        <React.Fragment key={node.id}>
                          <div className="inline-flex items-center gap-1.5">
                            {node.isApprovalException ? (
                              <>
                                <Diamond
                                  size={12}
                                  className="text-red-600 dark:text-red-400 fill-red-600/15 dark:fill-red-400/20 shrink-0"
                                  aria-hidden="true"
                                />
                                <span className="font-bold text-red-600 dark:text-red-400 tabular-nums">
                                  {node.stepCode}
                                </span>
                                <span className="font-black text-red-600 dark:text-red-400">
                                  {node.diamondQuestion}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                                  {node.stepCode}
                                </span>
                                <span className="font-bold text-slate-800 dark:text-slate-100">
                                  {node.title}
                                </span>
                              </>
                            )}
                          </div>
                          {nIdx < lane.nodes.length - 1 && (
                            <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ) : (
          /* Block 3: Shared SOP vs 5 Division Variants Table */
          <section
            aria-label={slideData.divisionTableSection.sectionTitle}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-2.5"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {slideData.divisionTableSection.sectionTitle}
            </h3>

            <div className="overflow-x-auto">
              <div className="min-w-[680px] space-y-1.5">
                {/* Column Headers */}
                <div className="grid grid-cols-12 gap-2 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <div className="col-span-2">{slideData.divisionTableSection.columns.division}</div>
                  <div className="col-span-2">{slideData.divisionTableSection.columns.leadRule}</div>
                  <div className="col-span-3">{slideData.divisionTableSection.columns.checklist}</div>
                  <div className="col-span-3 text-red-600 dark:text-red-400">
                    {slideData.divisionTableSection.columns.escalation}
                  </div>
                  <div className="col-span-2 pr-4">{slideData.divisionTableSection.columns.crmProof}</div>
                </div>

                {slideData.divisionTableSection.rows.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, row.modal, ClipboardCheck)}
                    className="group relative w-full grid grid-cols-12 gap-2 items-center text-left rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-3 py-2.5 transition-colors cursor-pointer select-none text-[11px] leading-snug"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-1/2 -translate-y-1/2 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="col-span-2 font-black text-slate-900 dark:text-white truncate">
                      {row.division}
                    </div>
                    <div className="col-span-2 font-medium text-slate-600 dark:text-slate-300 truncate">
                      {row.leadRule}
                    </div>
                    <div className="col-span-3 font-medium text-slate-700 dark:text-slate-200 truncate">
                      {row.keyChecklist}
                    </div>
                    <div className="col-span-3 font-bold text-red-600 dark:text-red-400 truncate">
                      {row.escalationGate}
                    </div>
                    <div className="col-span-2 pr-4 font-medium text-slate-500 dark:text-slate-400 truncate">
                      {row.crmProof}
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
