import { useLanguage } from '@/contexts/LanguageContext';

export type Slide05Tab = 'engines' | 'guardrails';
export type GrowthEngineId = 'core' | 'corporate' | 'products' | 'infrastructure';

export interface GrowthEngine {
  id: GrowthEngineId;
  number: string;
  name: string;
  stageTag: string;
  scope: string;
  channels: string;
}

export interface FlywheelStage {
  step: string;
  label: string;
  linkedEngine: GrowthEngineId;
  summary: string;
}

export interface Slide05Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide05Tab; label: string }>;
  positioning: {
    label: string;
    headline: string;
    promise: string;
  };
  enginesSection: {
    title: string;
    label: string;
    items: GrowthEngine[];
  };
  flywheelSection: {
    title: string;
    label: string;
    loopNote: string;
    stages: FlywheelStage[];
  };
  guardrailsSection: {
    title: string;
    label: string;
    items: string[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide05Content = {
  title: 'Satu Mesin Pertumbuhan, Empat Sumber Pendapatan',
  subtitle: 'Arsitektur terpadu untuk menjaga kas dan repeat order.',
  tabs: [
    { id: 'engines', label: 'Mesin & Flywheel' },
    { id: 'guardrails', label: 'Positioning & Pengaman' },
  ],
  positioning: {
    label: 'Positioning Usulan',
    headline: 'SPARTA — Mitra Siklus Hidup Aset & Infra IT',
    promise: 'Dari pengadaan hingga pemulihan nilai aset.',
  },
  enginesSection: {
    title: '4 Mesin Pertumbuhan',
    label: 'Arsitektur bisnis',
    items: [
      { id: 'core', number: '01', name: 'Core Commerce', stageTag: 'Fondasi', scope: 'Baru/bekas: PC, server, UPS', channels: 'Ritel, grosir, online, B2B' },
      { id: 'corporate', number: '02', name: 'Corporate & Tender', stageTag: 'Skala B2B', scope: 'Tender bekas, buyback, lelang', channels: 'Korporasi & institusi' },
      { id: 'products', number: '03', name: 'SPARTA Products', stageTag: 'Pilot', scope: 'AIO PC & Digital Display', channels: 'Rilis pasca-validasi' },
      { id: 'infrastructure', number: '04', name: 'Infra Pathway', stageTag: 'Bertahap', scope: 'Server, jaringan & kajian DC', channels: 'Kemitraan stage-gate' },
    ],
  },
  flywheelSection: {
    title: 'Flywheel Siklus Hidup Aset',
    label: 'Klik tahap',
    loopNote: 'Berulang ke pengadaan berikutnya',
    stages: [
      { step: '01', label: 'Pengadaan B2B', linkedEngine: 'core', summary: 'Pintu masuk akun korporasi' },
      { step: '02', label: 'Relasi Akun', linkedEngine: 'corporate', summary: 'Petakan aset & jadwal refresh' },
      { step: '03', label: 'Siklus Refresh', linkedEngine: 'products', summary: 'Opsi baru, bekas, atau SPARTA' },
      { step: '04', label: 'Buyback / Lelang', linkedEngine: 'corporate', summary: 'Akuisisi unit lama klien' },
      { step: '05', label: 'Uji & Grading', linkedEngine: 'core', summary: 'Sortir & pisahkan unit siap jual' },
      { step: '06', label: 'Jual Kembali', linkedEngine: 'core', summary: 'Ritel, grosir & online' },
      { step: '07', label: 'Order Ulang', linkedEngine: 'infrastructure', summary: 'Ekspansi ke proyek infra' },
    ],
  },
  guardrailsSection: {
    title: '5 Pengaman Strategis',
    label: 'Disiplin eksekusi',
    items: [
      'Jaga arus kas & modal kerja',
      'Cegah penumpukan stok',
      'Pisahkan ekonomi baru vs bekas',
      'Rilis SPARTA pasca-siap servis',
      'Data center bertahap (gated)',
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Setiap transaksi membuka transaksi berikutnya — bukan jual putus.',
  },
};

export const slideDataEn: Slide05Content = {
  title: 'One Growth Engine, Four Connected Revenue Streams',
  subtitle: 'Integrated architecture protecting cash flow and repeat orders.',
  tabs: [
    { id: 'engines', label: 'Engines & Flywheel' },
    { id: 'guardrails', label: 'Positioning & Guardrails' },
  ],
  positioning: {
    label: 'Proposed Positioning',
    headline: 'SPARTA — IT Asset Lifecycle & Infra Partner',
    promise: 'From hardware supply to value recovery.',
  },
  enginesSection: {
    title: '4 Growth Engines',
    label: 'Architecture',
    items: [
      { id: 'core', number: '01', name: 'Core Commerce', stageTag: 'Core', scope: 'New/used PCs, servers, UPS', channels: 'Retail, wholesale, online, B2B' },
      { id: 'corporate', number: '02', name: 'Corporate & Tender', stageTag: 'B2B scale', scope: 'Used tenders, buyback, auction', channels: 'Corporates & institutions' },
      { id: 'products', number: '03', name: 'SPARTA Products', stageTag: 'Pilot', scope: 'AIO PC & Digital Display', channels: 'Post-validation rollout' },
      { id: 'infrastructure', number: '04', name: 'Infra Pathway', stageTag: 'Staged', scope: 'Servers, network & DC study', channels: 'Stage-gated partnerships' },
    ],
  },
  flywheelSection: {
    title: 'Asset Lifecycle Flywheel',
    label: 'Click stage',
    loopNote: 'Loops to repeat procurement',
    stages: [
      { step: '01', label: 'B2B Supply', linkedEngine: 'core', summary: 'Opens corporate account entry' },
      { step: '02', label: 'Account Trust', linkedEngine: 'corporate', summary: 'Maps fleet age & refresh cycle' },
      { step: '03', label: 'Refresh Cycle', linkedEngine: 'products', summary: 'New, graded used, or SPARTA' },
      { step: '04', label: 'Buyback / Auction', linkedEngine: 'corporate', summary: 'Acquires retiring fleet units' },
      { step: '05', label: 'Test & Grade', linkedEngine: 'core', summary: 'Sorts & certifies resale stock' },
      { step: '06', label: 'Resale', linkedEngine: 'core', summary: 'Retail, wholesale & online' },
      { step: '07', label: 'Repeat Orders', linkedEngine: 'infrastructure', summary: 'Expands into infra deals' },
    ],
  },
  guardrailsSection: {
    title: '5 Strategic Guardrails',
    label: 'Discipline',
    items: [
      'Protect cash & working capital',
      'Prevent excess inventory buildup',
      'Separate new vs. used economics',
      'Launch SPARTA after service readiness',
      'Stage data center via capex gates',
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Every deal unlocks the next cycle — never stop at a one-off sale.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide05Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide05Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 5,
  folder: '05',
  sectionId: 1,
  navTitle: {
    in: 'Positioning & Arsitektur',
    en: 'Positioning & Architecture',
  },
  headerTitle: {
    in: 'Posisi Strategis & Arsitektur Pertumbuhan — PT Sparta Computindo Teknologi',
    en: 'Strategic Positioning & Growth Architecture — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Arsitektur Pertumbuhan',
    en: 'Growth Architecture',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
