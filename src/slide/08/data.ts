import { useLanguage } from '@/contexts/LanguageContext';

export type Slide08Tab = 'footprint' | 'economics';

export interface ExpansionPhase {
  number: string;
  phaseTitle: string;
  tag: string;
  bullets: string[];
}

export interface CatchmentCriterion {
  number: string;
  label: string;
}

export interface StoreMetric {
  number: string;
  name: string;
  note: string;
}

export interface Slide08Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide08Tab; label: string }>;
  phasesSection: {
    title: string;
    label: string;
    items: ExpansionPhase[];
  };
  catchmentSection: {
    title: string;
    label: string;
    criteria: CatchmentCriterion[];
  };
  economicsSection: {
    title: string;
    label: string;
    metrics: StoreMetric[];
  };
  decisionGate: {
    label: string;
    statement: string;
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide08Content = {
  title: 'Ekspansi Berbasis Data, Bukan Sekadar Tambah Toko',
  subtitle: 'Kuatkan Jakarta dulu, uji Jabodetabek ringan modal, baru buka cabang.',
  tabs: [
    { id: 'footprint', label: 'Fase & Catchment' },
    { id: 'economics', label: 'Ekonomi Toko & Gate' },
  ],
  phasesSection: {
    title: '3 Fase Ekspansi Ritel',
    label: 'Bertahap',
    items: [
      {
        number: '01',
        phaseTitle: 'Kuatkan Jakarta',
        tag: 'Optimasi basis',
        bullets: ['Naikkan konversi & SEO lokal', 'Petakan celah area permintaan'],
      },
      {
        number: '02',
        phaseTitle: 'Uji Jabodetabek',
        tag: 'Modal ringan',
        bullets: ['Pop-up, pickup, mitra & ads', 'Ukur prospek & ongkos kirim'],
      },
      {
        number: '03',
        phaseTitle: 'Cabang Selektif',
        tag: 'Wajib impas',
        bullets: ['Buka di klaster terkuat', 'Kunci playbook sebelum ekspansi'],
      },
    ],
  },
  catchmentSection: {
    title: '6 Kriteria Lokasi',
    label: 'Catchment',
    criteria: [
      { number: '01', label: 'Kepadatan UMKM & kantor' },
      { number: '02', label: 'Dekat klien B2B & institusi' },
      { number: '03', label: 'Peta kompetitor & harga' },
      { number: '04', label: 'Akses, parkir & radius kirim' },
      { number: '05', label: 'Sewa, SDM & biaya fit-out' },
      { number: '06', label: 'Jarak gudang & servis pusat' },
    ],
  },
  economicsSection: {
    title: '7 Metrik Ekonomi Toko',
    label: 'Unit economics',
    metrics: [
      { number: '01', name: 'Sales & Gross Profit', note: 'Omzet & margin toko' },
      { number: '02', name: 'Sewa & Payroll Ratio', note: 'Beban tetap vs omzet' },
      { number: '03', name: 'Konversi & ATV', note: 'Walk-in & nilai belanja' },
      { number: '04', name: 'Stock Turn', note: 'Putaran & umur stok' },
      { number: '05', name: 'Lead-to-Visit', note: 'Pencarian jadi kunjungan' },
      { number: '06', name: 'Break-Even Point', note: 'Omzet impas minimum' },
      { number: '07', name: 'Payback Period', note: 'Waktu balik modal' },
    ],
  },
  decisionGate: {
    label: 'Decision Gate',
    statement: 'Cabang disetujui hanya jika proyeksi konservatif menutup biaya tetap, stok & modal kerja.',
  },
  takeaway: {
    label: 'Inti',
    statement: 'Perluas jangkauan tanpa membebani kas dan kontrol operasional.',
  },
};

export const slideDataEn: Slide08Content = {
  title: 'Data-Driven Expansion, Not Just Adding Stores',
  subtitle: 'Strengthen Jakarta first, test Jabodetabek lean, then open selectively.',
  tabs: [
    { id: 'footprint', label: 'Phases & Catchment' },
    { id: 'economics', label: 'Store Economics & Gate' },
  ],
  phasesSection: {
    title: '3 Retail Rollout Phases',
    label: 'Sequential',
    items: [
      {
        number: '01',
        phaseTitle: 'Strengthen Jakarta',
        tag: 'Optimize base',
        bullets: ['Lift store conversion & SEO', 'Spot underserved demand'],
      },
      {
        number: '02',
        phaseTitle: 'Test Jabodetabek',
        tag: 'Asset-light',
        bullets: ['Pop-ups, pickup, local ads', 'Compare leads & delivery cost'],
      },
      {
        number: '03',
        phaseTitle: 'Selective Openings',
        tag: 'Break-even gated',
        bullets: ['Open in proven catchments', 'Lock playbook before scaling'],
      },
    ],
  },
  catchmentSection: {
    title: '6 Catchment Criteria',
    label: 'Site selection',
    criteria: [
      { number: '01', label: 'SME & office cluster density' },
      { number: '02', label: 'Proximity to B2B clients' },
      { number: '03', label: 'Competitors & local pricing' },
      { number: '04', label: 'Access, parking & delivery' },
      { number: '05', label: 'Rent, staff & fit-out cost' },
      { number: '06', label: 'Distance to central hub' },
    ],
  },
  economicsSection: {
    title: '7 Store Economics Metrics',
    label: 'Unit economics',
    metrics: [
      { number: '01', name: 'Sales & Gross Profit', note: 'Store revenue & margin' },
      { number: '02', name: 'Rent & Payroll Ratio', note: 'Fixed cost vs. revenue' },
      { number: '03', name: 'Conversion & ATV', note: 'Walk-in & basket size' },
      { number: '04', name: 'Stock Turn', note: 'Velocity & stock age' },
      { number: '05', name: 'Lead-to-Visit', note: 'Local search to walk-in' },
      { number: '06', name: 'Break-Even Point', note: 'Minimum viable sales' },
      { number: '07', name: 'Payback Period', note: 'Months to recover capex' },
    ],
  },
  decisionGate: {
    label: 'Decision Gate',
    statement: 'Approve new sites only when conservative forecasts cover fixed costs, stock & working capital.',
  },
  takeaway: {
    label: 'Core',
    statement: 'Extend customer reach without straining cash flow or operational control.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide08Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide08Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 8,
  folder: '08',
  sectionId: 2,
  navTitle: {
    in: 'Ekspansi Ritel Jabodetabek',
    en: 'Retail Expansion Jabodetabek',
  },
  headerTitle: {
    in: 'Ekspansi Ritel: Jakarta & Jabodetabek — PT Sparta Computindo Teknologi',
    en: 'Retail Expansion: Jakarta & Jabodetabek — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Ekspansi Ritel',
    en: 'Retail Expansion',
  },
  section: {
    in: 'Ekspansi & Produk',
    en: 'Expansion & Products',
  },
};
