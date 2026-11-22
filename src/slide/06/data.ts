import { useLanguage } from '@/contexts/LanguageContext';

export type Slide06Tab = 'motion' | 'governance';

export interface PrioritySegment {
  code: string;
  tier: string;
  target: string;
  buyersOrFocus: string;
}

export interface SalesMotionStep {
  step: string;
  title: string;
}

export interface CadenceItem {
  period: string;
  focus: string;
}

export interface CommercialKpi {
  number: string;
  name: string;
  definition: string;
}

export interface SetupPhase {
  window: string;
  actions: string;
}

export interface Slide06Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide06Tab; label: string }>;
  segmentSection: {
    title: string;
    label: string;
    items: PrioritySegment[];
  };
  motionSection: {
    title: string;
    label: string;
    steps: SalesMotionStep[];
  };
  cadenceSection: {
    title: string;
    items: CadenceItem[];
  };
  kpiSection: {
    title: string;
    label: string;
    items: CommercialKpi[];
  };
  setupSection: {
    title: string;
    label: string;
    phases: SetupPhase[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide06Content = {
  title: 'Ubah Peluang Jadi Pipeline, Deal & Repeat Order',
  subtitle: 'Sistem sales terstruktur dengan segmen jelas dan kontrol margin.',
  tabs: [
    { id: 'motion', label: 'Segmen & Sales Motion' },
    { id: 'governance', label: 'KPI & Setup 90 Hari' },
  ],
  segmentSection: {
    title: 'Prioritas Segmen',
    label: 'Fokus komersial',
    items: [
      { code: 'A', tier: 'Korporasi & Institusi', target: 'Kantor, pabrik, sekolah, RS', buyersOrFocus: 'PIC: Procurement, IT, GA, Finance' },
      { code: 'B', tier: 'Reseller & Integrator', target: 'Dealer, mitra proyek, installer', buyersOrFocus: 'Paket berulang & pasokan stabil' },
      { code: 'C', tier: 'Ritel & Digital', target: 'UMKM, profesional, home office', buyersOrFocus: 'Baru vs bekas transparan' },
    ],
  },
  motionSection: {
    title: 'Alur Penjualan (6 Tahap)',
    label: 'Sales motion',
    steps: [
      { step: '01', title: 'Target akun' },
      { step: '02', title: 'Kontak & gali kebutuhan' },
      { step: '03', title: 'Proposal solusi' },
      { step: '04', title: 'Quote & negosiasi' },
      { step: '05', title: 'Closing & serah terima' },
      { step: '06', title: 'Purnajual & repeat' },
    ],
  },
  cadenceSection: {
    title: 'Ritme Manajemen Sales',
    items: [
      { period: 'Harian', focus: 'Lead, follow-up, quote' },
      { period: 'Mingguan', focus: 'Pipeline, win/loss, stok' },
      { period: 'Bulanan', focus: 'Margin kotor, segmen, ROI' },
      { period: 'Kuartalan', focus: 'Wilayah, harga, portofolio' },
    ],
  },
  kpiSection: {
    title: '10 KPI Komersial',
    label: 'Target pasca-audit',
    items: [
      { number: '01', name: 'Qualified Leads', definition: 'Prospek valid' },
      { number: '02', name: 'Akun Baru', definition: 'Order perdana' },
      { number: '03', name: 'Konversi Quote', definition: 'Quote jadi PO' },
      { number: '04', name: 'Revenue & GP', definition: 'Omzet & laba kotor' },
      { number: '05', name: 'Avg Order Value', definition: 'Nilai per order' },
      { number: '06', name: 'Repeat Order', definition: 'Akun beli ulang' },
      { number: '07', name: 'Sales Cycle', definition: 'Durasi closing' },
      { number: '08', name: 'Forecast Accuracy', definition: 'Akurasi proyeksi' },
      { number: '09', name: 'Umur Piutang', definition: 'Kecepatan tagih' },
      { number: '10', name: 'Stock Turn', definition: 'Putaran & umur stok' },
    ],
  },
  setupSection: {
    title: 'Setup 90 Hari Pertama',
    label: 'Tahapan awal',
    phases: [
      { window: 'Hari 1–30', actions: 'Audit baseline, segmen, pipeline' },
      { window: 'Hari 31–60', actions: 'Account plan, ritme, CRM' },
      { window: 'Hari 61–90', actions: 'Optimasi konversi & cross-sell' },
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Kelola margin, pipeline, dan arus kas — bukan sekadar kejar omzet.',
  },
};

export const slideDataEn: Slide06Content = {
  title: 'Turn Opportunities Into Pipeline, Deals & Repeat Orders',
  subtitle: 'Structured sales system with clear segments and margin control.',
  tabs: [
    { id: 'motion', label: 'Segments & Sales Motion' },
    { id: 'governance', label: 'KPIs & 90-Day Setup' },
  ],
  segmentSection: {
    title: 'Segment Priority',
    label: 'Commercial focus',
    items: [
      { code: 'A', tier: 'Corporate & Institutional', target: 'Offices, plants, schools, hospitals', buyersOrFocus: 'PIC: Procurement, IT, GA, Finance' },
      { code: 'B', tier: 'Resellers & Integrators', target: 'Dealers, project partners, installers', buyersOrFocus: 'Repeatable bundles & steady stock' },
      { code: 'C', tier: 'Retail & Digital', target: 'SMEs, pros, home office', buyersOrFocus: 'Clear new vs. used value' },
    ],
  },
  motionSection: {
    title: 'Standard Sales Motion (6 Steps)',
    label: 'Workflow',
    steps: [
      { step: '01', title: 'Select accounts' },
      { step: '02', title: 'Outreach & discovery' },
      { step: '03', title: 'Solution proposal' },
      { step: '04', title: 'Quote & negotiate' },
      { step: '05', title: 'Close & handover' },
      { step: '06', title: 'After-sales & repeat' },
    ],
  },
  cadenceSection: {
    title: 'Management Cadence',
    items: [
      { period: 'Daily', focus: 'Leads, follow-up, quotes' },
      { period: 'Weekly', focus: 'Pipeline, win/loss, stock' },
      { period: 'Monthly', focus: 'Gross margin, mix, ROI' },
      { period: 'Quarterly', focus: 'Territory & pricing review' },
    ],
  },
  kpiSection: {
    title: '10 Commercial KPIs',
    label: 'Targets post-audit',
    items: [
      { number: '01', name: 'Qualified Leads', definition: 'Verified prospects' },
      { number: '02', name: 'New Accounts', definition: 'First-order clients' },
      { number: '03', name: 'Quote-to-Order', definition: 'Quotes closed as PO' },
      { number: '04', name: 'Revenue & GP', definition: 'Sales & gross profit' },
      { number: '05', name: 'Avg Order Value', definition: 'Mean deal size' },
      { number: '06', name: 'Repeat Rate', definition: 'Reordering accounts' },
      { number: '07', name: 'Sales Cycle', definition: 'Days to close' },
      { number: '08', name: 'Forecast Accuracy', definition: 'Projected vs. actual' },
      { number: '09', name: 'AR Ageing', definition: 'Collection speed' },
      { number: '10', name: 'Stock Turn', definition: 'Velocity & stock age' },
    ],
  },
  setupSection: {
    title: 'First 90-Day Setup',
    label: 'Rollout',
    phases: [
      { window: 'Days 1–30', actions: 'Baseline audit, segments, pipeline' },
      { window: 'Days 31–60', actions: 'Account plans, cadence, CRM' },
      { window: 'Days 61–90', actions: 'Tune conversion & cross-sell' },
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Manage margin quality, pipeline health, and cash — not volume alone.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide06Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide06Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 6,
  folder: '06',
  sectionId: 1,
  navTitle: {
    in: 'Eksekusi Penjualan',
    en: 'Sales Execution',
  },
  headerTitle: {
    in: 'Eksekusi Penjualan & Model Operasi Komersial — PT Sparta Computindo Teknologi',
    en: 'Sales Execution & Commercial Operating Model — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Operasi Komersial',
    en: 'Commercial Operations',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
