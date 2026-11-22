import { useLanguage } from '@/contexts/LanguageContext';

export type Slide11Tab = 'workstreams' | 'governance';

export interface WorkstreamStage {
  horizon: string;
  deliverable: string;
}

export interface WorkstreamItem {
  code: string;
  title: string;
  horizonType: string;
  stages: WorkstreamStage[];
}

export interface GovernanceItem {
  number: string;
  label: string;
  note: string;
}

export interface Slide11Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide11Tab; label: string }>;
  matrixSection: {
    title: string;
    label: string;
    workstreams: WorkstreamItem[];
  };
  governanceSection: {
    title: string;
    label: string;
    items: GovernanceItem[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide11Content = {
  title: 'Satukan Pertumbuhan Cepat dan Ambisi Panjang',
  subtitle: 'Peta jalan 0–36+ bulan — tunduk pada persetujuan Owner & audit baseline.',
  tabs: [
    { id: 'workstreams', label: 'Matriks Roadmap A–E' },
    { id: 'governance', label: 'Tata Kelola Eksekusi' },
  ],
  matrixSection: {
    title: '5 Alur Kerja Paralel (0–36+ Bulan)',
    label: 'Klik baris untuk sorot',
    workstreams: [
      {
        code: 'A',
        title: 'Sales Inti',
        horizonType: '0–24 Bln',
        stages: [
          { horizon: '0–3 Bln', deliverable: 'Audit & CRM' },
          { horizon: '3–6 Bln', deliverable: 'Account plan' },
          { horizon: '6–12 Bln', deliverable: 'Konversi & margin' },
          { horizon: '12–24 Bln', deliverable: 'Skala segmen' },
        ],
      },
      {
        code: 'B',
        title: 'Tender & Bekas',
        horizonType: '0–24 Bln',
        stages: [
          { horizon: '0–3 Bln', deliverable: 'Aturan bid & risiko' },
          { horizon: '3–6 Bln', deliverable: 'Radar tender B2B' },
          { horizon: '6–12 Bln', deliverable: 'Win rate & yield' },
          { horizon: '12–24 Bln', deliverable: 'Sumber institusi' },
        ],
      },
      {
        code: 'C',
        title: 'Ekspansi Ritel',
        horizonType: '0–24 Bln',
        stages: [
          { horizon: '0–3 Bln', deliverable: 'Audit & catchment' },
          { horizon: '3–6 Bln', deliverable: 'Uji pickup & ads' },
          { horizon: '6–12 Bln', deliverable: 'Cabang jika impas' },
          { horizon: '12–24 Bln', deliverable: 'Replikasi playbook' },
        ],
      },
      {
        code: 'D',
        title: 'Merek SPARTA',
        horizonType: '0–24 Bln',
        stages: [
          { horizon: '0–3 Bln', deliverable: 'Validasi & OEM' },
          { horizon: '3–6 Bln', deliverable: 'Sampel & landed cost' },
          { horizon: '6–12 Bln', deliverable: 'Pilot AIO & Display' },
          { horizon: '12–24 Bln', deliverable: 'Skala SKU teruji' },
        ],
      },
      {
        code: 'E',
        title: 'Jalur Data Center',
        horizonType: '0–36+ Bln',
        stages: [
          { horizon: '0–6 Bln', deliverable: 'Audit skill & pasar' },
          { horizon: '6–18 Bln', deliverable: 'Solusi mitra infra' },
          { horizon: '18–30 Bln', deliverable: 'Studi & anchor client' },
          { horizon: '30+ Bln', deliverable: 'Capex pasca-gate' },
        ],
      },
    ],
  },
  governanceSection: {
    title: '6 Tata Kelola Wajib per Workstream',
    label: 'Akuntabilitas',
    items: [
      { number: '01', label: 'Sponsor Eksekutif', note: 'Dukungan langsung pimpinan' },
      { number: '02', label: '1 Pemilik Akuntabel', note: 'PIC tunggal tiap alur' },
      { number: '03', label: 'Tonggak Kuartalan', note: 'Target konkret tiap 90 hari' },
      { number: '04', label: 'Batas Anggaran', note: 'Plafon biaya & SDM awal' },
      { number: '05', label: 'Dashboard KPI', note: 'Pantau metrik & risiko' },
      { number: '06', label: 'Go / Hold / Stop', note: 'Disiplin lanjut atau henti' },
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Bangun fondasi, validasi pasar, lalu percepat hanya yang terbukti.',
  },
};

export const slideDataEn: Slide11Content = {
  title: 'Aligning Near-Term Growth and Long-Term Ambition',
  subtitle: '0–36+ month roadmap — subject to owner sign-off & baseline audit.',
  tabs: [
    { id: 'workstreams', label: 'Roadmap Matrix A–E' },
    { id: 'governance', label: 'Execution Governance' },
  ],
  matrixSection: {
    title: '5 Parallel Workstreams (0–36+ Months)',
    label: 'Click row to spotlight',
    workstreams: [
      {
        code: 'A',
        title: 'Core Sales',
        horizonType: '0–24 Mos',
        stages: [
          { horizon: '0–3 Mos', deliverable: 'Audit & CRM' },
          { horizon: '3–6 Mos', deliverable: 'Account plans' },
          { horizon: '6–12 Mos', deliverable: 'Conversion & margin' },
          { horizon: '12–24 Mos', deliverable: 'Scale segments' },
        ],
      },
      {
        code: 'B',
        title: 'Tender & Used',
        horizonType: '0–24 Mos',
        stages: [
          { horizon: '0–3 Mos', deliverable: 'Bid & risk rules' },
          { horizon: '3–6 Mos', deliverable: 'Tender tracker' },
          { horizon: '6–12 Mos', deliverable: 'Win rate & yield' },
          { horizon: '12–24 Mos', deliverable: 'Institutional supply' },
        ],
      },
      {
        code: 'C',
        title: 'Retail Expansion',
        horizonType: '0–24 Mos',
        stages: [
          { horizon: '0–3 Mos', deliverable: 'Store & catchment' },
          { horizon: '3–6 Mos', deliverable: 'Pickup & ads test' },
          { horizon: '6–12 Mos', deliverable: 'Open if break-even' },
          { horizon: '12–24 Mos', deliverable: 'Replicate playbook' },
        ],
      },
      {
        code: 'D',
        title: 'SPARTA Brand',
        horizonType: '0–24 Mos',
        stages: [
          { horizon: '0–3 Mos', deliverable: 'Demand & OEM' },
          { horizon: '3–6 Mos', deliverable: 'Samples & cost' },
          { horizon: '6–12 Mos', deliverable: 'AIO & Display pilot' },
          { horizon: '12–24 Mos', deliverable: 'Scale proven SKUs' },
        ],
      },
      {
        code: 'E',
        title: 'Data Center Path',
        horizonType: '0–36+ Mos',
        stages: [
          { horizon: '0–6 Mos', deliverable: 'Market & skill audit' },
          { horizon: '6–18 Mos', deliverable: 'Partner infra sales' },
          { horizon: '18–30 Mos', deliverable: 'Feasibility & anchor' },
          { horizon: '30+ Mos', deliverable: 'Capex post-gates' },
        ],
      },
    ],
  },
  governanceSection: {
    title: '6 Governance Rules Per Workstream',
    label: 'Accountability',
    items: [
      { number: '01', label: 'Executive Sponsor', note: 'Direct leadership alignment' },
      { number: '02', label: '1 Accountable Owner', note: 'Single lead per track' },
      { number: '03', label: 'Quarterly Milestone', note: 'Concrete 90-day outputs' },
      { number: '04', label: 'Budget Envelope', note: 'Pre-agreed capex & team' },
      { number: '05', label: 'KPI Dashboard', note: 'Commercial & risk metrics' },
      { number: '06', label: 'Go / Hold / Stop', note: 'Scale or pause gates' },
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Build the base, validate demand, then accelerate only what proves viable.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide11Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide11Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 11,
  folder: '11',
  sectionId: 3,
  navTitle: {
    in: 'Peta Jalan Terintegrasi',
    en: 'Integrated Roadmap',
  },
  headerTitle: {
    in: 'Peta Jalan & Tonggak Terintegrasi — PT Sparta Computindo Teknologi',
    en: 'Integrated Roadmap & Milestones — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Peta Jalan 0–36+ Bulan',
    en: '0–36+ Month Roadmap',
  },
  section: {
    in: 'Tata Kelola',
    en: 'Governance',
  },
};
