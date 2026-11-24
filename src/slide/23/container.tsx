import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  GitPullRequest,
  Building2,
  ClipboardList,
  PackageCheck,
  Wrench,
  Tag,
  Receipt,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDetailModal, SlideTabs, SlideTabPanel, type SlideTabItem } from '@/components/ui';
import { useSlideData, type Slide23ModalPayload } from './data';
import type { RequestCategoryId } from './utils';

type Slide23TabId = 'raci' | 'ticket';

const TICKET_CATEGORY_ICONS: Record<RequestCategoryId, LucideIcon> = {
  'stock-check': PackageCheck,
  'tech-sizing': Wrench,
  'discount-request': Tag,
  'credit-review': Receipt,
};

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { openModal } = useDetailModal();
  const slideData = useSlideData();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<Slide23TabId>('raci');
  const [selectedCategory, setSelectedCategory] = useState<RequestCategoryId>('stock-check');
  const activeTicket =
    slideData.ticketSection.categories.find((c) => c.id === selectedCategory) ||
    slideData.ticketSection.categories[0];

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide23ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const sectionTabs: SlideTabItem<Slide23TabId>[] = [
    {
      id: 'raci',
      label: isEn ? 'Functions & RACI Matrix' : 'Fungsi & Matriks RACI',
      icon: Building2,
    },
    {
      id: 'ticket',
      label: isEn ? 'Service Ticket Simulation' : 'Simulasi Tiket Layanan',
      icon: GitPullRequest,
    },
  ];

  const ticketTabs: SlideTabItem<RequestCategoryId>[] = slideData.ticketSection.categories.map(
    (cat) => ({
      id: cat.id,
      label: cat.label,
      icon: TICKET_CATEGORY_ICONS[cat.id] || GitPullRequest,
    })
  );

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

      <SlideTabPanel tabKey={activeTab}>
        {activeTab === 'raci' ? (
          <div className="space-y-3">
            {/* 6 Cross-Functional Lanes */}
            <section aria-label={slideData.functionsSection.title} className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <Building2 size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                <span>{slideData.functionsSection.title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {slideData.functionsSection.lanes.map((lane) => (
                  <button
                    key={lane.id}
                    type="button"
                    onClick={(e) => handleOpenModal(e, lane.modal, Building2)}
                    className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 p-3 transition-colors cursor-pointer select-none flex flex-col justify-between"
                  >
                    <ArrowUpRight
                      size={12}
                      className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                    />
                    <div className="pr-4">
                      <div className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                        {lane.department}
                      </div>
                      <div className="text-[10.5px] font-semibold text-slate-700 dark:text-slate-200 mt-0.5 leading-snug">
                        {lane.roleScope}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Mini RACI Matrix for 5 Key Decisions */}
            <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <ClipboardList size={13} className="text-red-600 dark:text-red-400 shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {slideData.raciSection.title}
                  </h3>
                </div>
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                  {slideData.raciSection.legend}
                </p>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[560px] space-y-1">
                  <div className="grid grid-cols-12 gap-2 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <div className="col-span-4">{slideData.raciSection.columns.decision}</div>
                    <div className="col-span-1 text-center">{slideData.raciSection.columns.sales}</div>
                    <div className="col-span-2 text-center">{slideData.raciSection.columns.whPurch}</div>
                    <div className="col-span-1 text-center">{slideData.raciSection.columns.tech}</div>
                    <div className="col-span-2 text-center">{slideData.raciSection.columns.finance}</div>
                    <div className="col-span-2 text-center pr-3">{slideData.raciSection.columns.mgrDir}</div>
                  </div>

                  {slideData.raciSection.rows.map((row) => (
                    <button
                      key={row.id}
                      type="button"
                      onClick={(e) => handleOpenModal(e, row.modal, ClipboardList)}
                      className="group relative w-full grid grid-cols-12 gap-2 items-center text-left rounded-lg bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-red-500/60 hover:bg-white dark:hover:bg-slate-900 px-2.5 py-1.5 transition-colors cursor-pointer select-none text-[10.5px]"
                    >
                      <ArrowUpRight
                        size={11}
                        className="absolute top-1/2 -translate-y-1/2 right-2 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 pointer-events-none"
                      />
                      <div className="col-span-4 font-black text-slate-900 dark:text-white truncate">
                        {row.decision}
                      </div>
                      <div className="col-span-1 text-center font-bold text-slate-600 dark:text-slate-300">
                        {row.sales}
                      </div>
                      <div className="col-span-2 text-center font-bold text-slate-700 dark:text-slate-200">
                        {row.warehousePurch}
                      </div>
                      <div className="col-span-1 text-center font-bold text-slate-700 dark:text-slate-200">
                        {row.technical}
                      </div>
                      <div className="col-span-2 text-center font-bold text-red-600 dark:text-red-400">
                        {row.finance}
                      </div>
                      <div className="col-span-2 text-center pr-3 font-bold text-slate-700 dark:text-slate-200 truncate">
                        {row.managerDirector}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <GitPullRequest size={14} className="text-red-600 dark:text-red-400 shrink-0" />
                <span>{slideData.ticketSection.fieldsTitle}</span>
              </h3>

              <div className="flex items-center gap-2">
                <SlideTabs
                  tabs={ticketTabs}
                  activeTab={selectedCategory}
                  onChange={setSelectedCategory}
                  size="sm"
                  align="end"
                />
                <button
                  type="button"
                  onClick={(e) => handleOpenModal(e, slideData.ticketSection.ticketModal, GitPullRequest)}
                  aria-label={slideData.ticketSection.ticketModal.title}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:border-red-400 cursor-pointer shrink-0"
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* 11 Ticket Fields Clean Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-[11px]">
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  1. {slideData.ticketSection.fieldLabels.requestId}
                </span>
                <span className="font-black text-slate-900 dark:text-white tabular-nums mt-0.5 block">
                  {activeTicket.requestId}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  2. {slideData.ticketSection.fieldLabels.category}
                </span>
                <span className="font-bold text-red-600 dark:text-red-400 mt-0.5 block">
                  {activeTicket.label}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  3. {slideData.ticketSection.fieldLabels.requester}
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5 block">
                  {slideData.ticketSection.staticPlaceholders.requester}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  4. {slideData.ticketSection.fieldLabels.customerDeal}
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5 block">
                  {slideData.ticketSection.staticPlaceholders.customerDeal}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  5. {slideData.ticketSection.fieldLabels.priority}
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5 block">
                  {activeTicket.priority}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  6. {slideData.ticketSection.fieldLabels.ownerDept}
                </span>
                <span className="font-black text-slate-900 dark:text-white mt-0.5 block">
                  {activeTicket.ownerDept}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  7. {slideData.ticketSection.fieldLabels.dueDate}
                </span>
                <span className="font-semibold text-slate-600 dark:text-slate-300 mt-0.5 block">
                  {slideData.ticketSection.staticPlaceholders.dueDate}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  8. {slideData.ticketSection.fieldLabels.attachments}
                </span>
                <span className="font-semibold text-slate-600 dark:text-slate-300 mt-0.5 block">
                  {slideData.ticketSection.staticPlaceholders.attachments}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  9. {slideData.ticketSection.fieldLabels.status}
                </span>
                <span className="font-semibold text-slate-600 dark:text-slate-300 mt-0.5 block">
                  {activeTicket.status}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  10. {slideData.ticketSection.fieldLabels.approval}
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-100 mt-0.5 block">
                  {activeTicket.approvalPath}
                </span>
              </div>
              <div className="col-span-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 p-2.5">
                <span className="text-slate-400 dark:text-slate-500 font-bold uppercase block text-[9px]">
                  11. {slideData.ticketSection.fieldLabels.resolution}
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 mt-0.5 block">
                  {activeTicket.resolutionCue}
                </span>
              </div>
            </div>
          </section>
        )}
      </SlideTabPanel>
    </motion.div>
  );
};

export default Container;
