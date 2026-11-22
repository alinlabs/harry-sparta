import { useLanguage } from '@/contexts/LanguageContext';

export type PcChartViewMode = 'yoy' | 'volume';

export interface PcGrowthPoint {
  label: string;
  fullLabel: string;
  yoyPct: number;
  yoyLabel: string;
  statusLabel: string;
  isForecast: boolean;
  note: string;
}

export interface PcVolumePoint {
  period: string;
  unitsMillions: number;
  valueLabel: string;
  statusLabel: string;
  isPartialYear: boolean;
  note: string;
}

export interface OpportunityPool {
  number: string;
  title: string;
  desc: string;
}

export interface Slide03Content {
  title: string;
  subtitle: string;
  pcSection: {
    title: string;
    evidenceLabel: string;
    tabs: Array<{ id: PcChartViewMode; label: string }>;
    metrics: Array<{ label: string; value: string; status: string }>;
    growthData: PcGrowthPoint[];
    volumeData: PcVolumePoint[];
    legendNote: string;
    sourceLine: string;
  };
  dataCenterSection: {
    title: string;
    evidenceLabel: string;
    operationalMw: number;
    constructionMw: number;
    operationalLabel: string;
    constructionLabel: string;
    contextNote: string;
    sourceLine: string;
  };
  implicationsSection: {
    title: string;
    evidenceLabel: string;
    items: string[];
  };
  opportunitySection: {
    title: string;
    horizonLabel: string;
    pools: OpportunityPool[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide03Content = {
  title: 'Permintaan Pasar Ada, Pola Belinya Bergeser',
  subtitle: 'Prospek PC Indonesia, kapasitas data center, dan 4 kantong peluang.',
  pcSection: {
    title: 'Pasar PC Indonesia',
    evidenceLabel: 'Data pasar',
    tabs: [
      { id: 'yoy', label: 'Dinamika YoY (%)' },
      { id: 'volume', label: 'Volume Unit' },
    ],
    metrics: [
      { label: '2023 (Basis)', value: '~3,78 Jt', status: 'Historis' },
      { label: '2024', value: '4,10 Jt', status: '+8,8% YoY' },
      { label: 'Q1 2026', value: '982 Rb', status: '+9,4% Q1' },
      { label: 'FY 2026', value: '-22,9% YoY', status: 'Proyeksi IDC' },
    ],
    growthData: [
      { label: '2024 Total', fullLabel: 'Total PC 2024', yoyPct: 8.8, yoyLabel: '+8,8%', statusLabel: 'Aktual', isForecast: false, note: '4,10 Jt unit' },
      { label: '2024 Konsumen', fullLabel: 'Konsumen 2024', yoyPct: 16.7, yoyLabel: '+16,7%', statusLabel: 'Aktual', isForecast: false, note: 'Sensitif nilai' },
      { label: '2024 Komersial', fullLabel: 'Komersial 2024', yoyPct: -7.5, yoyLabel: '-7,5%', statusLabel: 'Aktual', isForecast: false, note: 'Belanja B2B selektif' },
      { label: 'Q1 2026', fullLabel: 'Q1 2026', yoyPct: 9.4, yoyLabel: '+9,4%', statusLabel: 'Aktual Q1', isForecast: false, note: '982 Rb unit (frontloading)' },
      { label: '2026 (Proyeksi)', fullLabel: 'Proyeksi FY 2026', yoyPct: -22.9, yoyLabel: '-22,9%', statusLabel: 'Proyeksi IDC', isForecast: true, note: 'Koreksi stok & biaya' },
    ],
    volumeData: [
      { period: '2023 (Est.)', unitsMillions: 3.78, valueLabel: '~3,78 Jt', statusLabel: 'Basis', isPartialYear: false, note: 'Baseline 2023' },
      { period: '2024 (Aktual)', unitsMillions: 4.1, valueLabel: '4,10 Jt', statusLabel: 'Aktual', isPartialYear: false, note: 'Setahun penuh' },
      { period: 'Q1 2026 (Q1)', unitsMillions: 0.982, valueLabel: '982 Rb', statusLabel: 'Q1 Saja', isPartialYear: true, note: 'FY 2026 proyeksi -22,9%' },
    ],
    legendNote: 'Batang padat: aktual · Merah putus: proyeksi IDC 2026.',
    sourceLine: 'Sumber: IDC / Katadata (2024–2026). Bukan pangsa Sparta.',
  },
  dataCenterSection: {
    title: 'Kapasitas Data Center Nasional',
    evidenceLabel: '2025–2026',
    operationalMw: 584,
    constructionMw: 337,
    operationalLabel: '584 MW Operasional',
    constructionLabel: '337 MW Konstruksi',
    contextNote: 'Ekspansi berjalan; kesiapan daya & capex jadi penentu.',
    sourceLine: 'Sumber: IFC (2026) & World Bank (2025).',
  },
  implicationsSection: {
    title: '5 Implikasi bagi Sparta',
    evidenceLabel: 'Arah pasar',
    items: [
      'Pembeli kejar value-for-money',
      'Siklus B2B besar namun bertahap',
      'Harga baru naik dorong pasar bekas',
      'Klien pilih paket setup–disposal',
      'Masuk DC bertahap, bukan instan',
    ],
  },
  opportunitySection: {
    title: '4 Kantong Peluang',
    horizonLabel: '3–5 Tahun',
    pools: [
      { number: '01', title: 'Endpoint Terjangkau', desc: 'Baru & bekas teruji' },
      { number: '02', title: 'Refresh & Disposal B2B', desc: 'Buyback, lelang, lot' },
      { number: '03', title: 'Workplace Display', desc: 'Digital Display & AIO' },
      { number: '04', title: 'Server & Infra', desc: 'Suplai & kajian bertahap' },
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Fokus ke segmen yang cocok dengan kekuatan sourcing, harga & eksekusi Sparta.',
  },
};

export const slideDataEn: Slide03Content = {
  title: 'Demand Exists, Buying Patterns Are Shifting',
  subtitle: 'Indonesia PC outlook, data center capacity, and 4 demand pools.',
  pcSection: {
    title: 'Indonesia PC Market',
    evidenceLabel: 'Market data',
    tabs: [
      { id: 'yoy', label: 'YoY Dynamics (%)' },
      { id: 'volume', label: 'Unit Volume' },
    ],
    metrics: [
      { label: '2023 (Basis)', value: '~3.78M', status: 'Historical' },
      { label: '2024', value: '4.10M', status: '+8.8% YoY' },
      { label: 'Q1 2026', value: '982K', status: '+9.4% Q1' },
      { label: 'FY 2026', value: '-22.9% YoY', status: 'IDC Forecast' },
    ],
    growthData: [
      { label: '2024 Total', fullLabel: 'Total PC 2024', yoyPct: 8.8, yoyLabel: '+8.8%', statusLabel: 'Actual', isForecast: false, note: '4.10M units' },
      { label: '2024 Consumer', fullLabel: 'Consumer 2024', yoyPct: 16.7, yoyLabel: '+16.7%', statusLabel: 'Actual', isForecast: false, note: 'Value-conscious demand' },
      { label: '2024 Commercial', fullLabel: 'Commercial 2024', yoyPct: -7.5, yoyLabel: '-7.5%', statusLabel: 'Actual', isForecast: false, note: 'Selective B2B spend' },
      { label: 'Q1 2026', fullLabel: 'Q1 2026', yoyPct: 9.4, yoyLabel: '+9.4%', statusLabel: 'Q1 Actual', isForecast: false, note: '982K units (frontloading)' },
      { label: '2026 (Forecast)', fullLabel: 'FY 2026 Forecast', yoyPct: -22.9, yoyLabel: '-22.9%', statusLabel: 'IDC Forecast', isForecast: true, note: 'Stock & cost pressure' },
    ],
    volumeData: [
      { period: '2023 (Est.)', unitsMillions: 3.78, valueLabel: '~3.78M', statusLabel: 'Basis', isPartialYear: false, note: '2023 baseline' },
      { period: '2024 (Actual)', unitsMillions: 4.1, valueLabel: '4.10M', statusLabel: 'Actual', isPartialYear: false, note: 'Full year' },
      { period: 'Q1 2026 (Q1)', unitsMillions: 0.982, valueLabel: '982K', statusLabel: 'Q1 Only', isPartialYear: true, note: 'FY 2026 forecast -22.9%' },
    ],
    legendNote: 'Solid bars: actuals · Dashed red: IDC FY 2026 forecast.',
    sourceLine: 'Sources: IDC / Katadata (2024–2026). Not Sparta market share.',
  },
  dataCenterSection: {
    title: 'National Data Center Capacity',
    evidenceLabel: '2025–2026',
    operationalMw: 584,
    constructionMw: 337,
    operationalLabel: '584 MW Operational',
    constructionLabel: '337 MW Construction',
    contextNote: 'Expansion continues; power readiness & capex remain hurdles.',
    sourceLine: 'Sources: IFC (2026) & World Bank (2025).',
  },
  implicationsSection: {
    title: '5 Implications for Sparta',
    evidenceLabel: 'Direction',
    items: [
      'Buyers seek value-for-money',
      'B2B cycles stay lumpy',
      'Higher new prices lift used demand',
      'Clients want setup-to-disposal',
      'Enter DC staged, not instant',
    ],
  },
  opportunitySection: {
    title: '4 Demand Pools',
    horizonLabel: '3–5 Years',
    pools: [
      { number: '01', title: 'Affordable Endpoints', desc: 'New & tested used' },
      { number: '02', title: 'B2B Refresh & Disposal', desc: 'Buyback, auction, lots' },
      { number: '03', title: 'Workplace Display', desc: 'Digital Display & AIO' },
      { number: '04', title: 'Server & Infra', desc: 'Supply & gated path' },
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Win segments aligned with Sparta’s sourcing, pricing & execution.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide03Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide03Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 3,
  folder: '03',
  sectionId: 1,
  navTitle: {
    in: 'Lanskap & Prospek Pasar',
    en: 'Market Landscape & Outlook',
  },
  headerTitle: {
    in: 'Lanskap & Prospek Pasar — PT Sparta Computindo Teknologi',
    en: 'Market Landscape & Outlook — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Riset Pasar',
    en: 'Market Research',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
