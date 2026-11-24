import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Crown,
  UserCog,
  Megaphone,
  Users,
  ShoppingBag,
  Truck,
  Building2,
  Landmark,
  type LucideIcon,
} from 'lucide-react';
import { useDetailModal } from '@/components/ui';
import {
  useSlideData,
  type OrgNodeId,
  type Slide09ModalPayload,
} from './data';

const ORG_ICONS: Record<OrgNodeId, LucideIcon> = {
  owner: Crown,
  manager: UserCog,
  'div-marketing': Megaphone,
  'spv-retail-dist': Users,
  'spv-b2b-b2g': Users,
  'unit-retail': ShoppingBag,
  'unit-dist': Truck,
  'unit-b2b': Building2,
  'unit-b2g': Landmark,
};

export const Container: React.FC = () => {
  const { openModal } = useDetailModal();
  const slideData = useSlideData();

  const handleOpenModal = (
    e: React.MouseEvent,
    modal: Slide09ModalPayload,
    icon: LucideIcon
  ) => {
    e.stopPropagation();
    openModal({ ...modal, icon }, { size: 'lg' });
  };

  const { nodes } = slideData.orgChart;

  const renderNodeCard = (id: OrgNodeId) => {
    const node = nodes[id];
    const Icon = ORG_ICONS[id];

    return (
      <button
        type="button"
        onClick={(e) => handleOpenModal(e, node.modal, Icon)}
        className="group relative text-left rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-md hover:shadow-red-500/5 p-3 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 cursor-pointer select-none flex flex-col justify-between w-full"
      >
        <ArrowUpRight
          size={13}
          className="absolute top-2.5 right-2.5 text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none"
        />

        <div className="flex items-start gap-2.5 pr-4">
          <div className="w-7 h-7 rounded-lg bg-red-600 dark:bg-red-600 text-white border border-red-600 dark:border-red-500 flex items-center justify-center shrink-0 mt-0.5">
            <Icon size={14} />
          </div>
          <div className="min-w-0">
            <span className="block text-[9.5px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 leading-tight">
              {node.levelTag}
            </span>
            <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mt-0.5">
              {node.title}
            </h4>
          </div>
        </div>

        <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
            {node.shortScope}
          </p>
        </div>
      </button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-1 sm:py-2 px-1 sm:px-2 space-y-4"
    >
      {/* Header */}
      <header className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {slideData.title}
        </h2>
      </header>

      {/* Open Organization Chart directly on canvas (only division/unit cards) */}
      <section className="w-full flex flex-col items-center">
        {/* Peak: Owner */}
        <div className="w-full max-w-sm">{renderNodeCard('owner')}</div>

        {/* Connector Owner -> Manager */}
        <div className="w-px h-3 bg-slate-300 dark:bg-slate-600" aria-hidden="true" />

        {/* Department Lead: Sales & Marketing Manager */}
        <div className="w-full max-w-sm">{renderNodeCard('manager')}</div>

        {/* Connector Manager -> 3 Equal Divisions */}
        <div className="w-full flex flex-col items-center" aria-hidden="true">
          <div className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
          <div className="hidden md:block w-[67%] h-px bg-slate-300 dark:bg-slate-600" />
          <div className="hidden md:grid md:grid-cols-3 gap-4 w-full">
            <div className="flex justify-center">
              <div className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
            </div>
            <div className="flex justify-center">
              <div className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
            </div>
            <div className="flex justify-center">
              <div className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
            </div>
          </div>
        </div>

        {/* Equal Divisions directly under Sales & Marketing Manager */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-start mt-2 md:mt-0">
          {/* Division 1: Retail + Distribution */}
          <div className="flex flex-col space-y-2.5">
            {renderNodeCard('spv-retail-dist')}
            <div className="pl-3 border-l-2 border-slate-300 dark:border-slate-600 space-y-2.5">
              {renderNodeCard('unit-retail')}
              {renderNodeCard('unit-dist')}
            </div>
          </div>

          {/* Division 2: B2B + B2G */}
          <div className="flex flex-col space-y-2.5">
            {renderNodeCard('spv-b2b-b2g')}
            <div className="pl-3 border-l-2 border-slate-300 dark:border-slate-600 space-y-2.5">
              {renderNodeCard('unit-b2b')}
              {renderNodeCard('unit-b2g')}
            </div>
          </div>

          {/* Division 3: Marketing (equal division under Manager) */}
          <div className="flex flex-col space-y-3">
            {renderNodeCard('div-marketing')}

            <div className="pl-3 border-l-2 border-dashed border-slate-300 dark:border-slate-700 space-y-1">
              <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">
                {slideData.orgChart.proposalCaveat}
              </span>
              <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                {slideData.orgChart.coordinationRule}
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Container;
