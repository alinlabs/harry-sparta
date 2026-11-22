import { useLanguage } from '@/contexts/LanguageContext';

export type Slide12Tab = 'scorecard' | 'decisions';

export interface ScorecardDimension {
  number: string;
  name: string;
  metrics: string;
}

export interface ManagementCadenceItem {
  cadence: string;
  focus: string;
}

export interface OwnerDecisionItem {
  number: string;
  statement: string;
}

export interface Slide12Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide12Tab; label: string }>;
  scorecardSection: {
    title: string;
    label: string;
    dimensions: ScorecardDimension[];
  };
  rhythmSection: {
    title: string;
    label: string;
    items: ManagementCadenceItem[];
  };
  decisionsSection: {
    title: string;
    label: string;
    items: OwnerDecisionItem[];
  };
  closing: {
    label: string;
    quote: string;
    presenterName: string;
    presenterRole: string;
    companyName: string;
  };
}

export const slideDataId: Slide12Content = {
  title: 'Pertumbuhan Terukur, Terkendali & Akuntabel',
  subtitle: 'Scorecard 5 dimensi, ritme evaluasi & 5 keputusan awal Owner.',
  tabs: [
    { id: 'scorecard', label: 'Scorecard & Ritme' },
    { id: 'decisions', label: 'Keputusan & Penutup' },
  ],
  scorecardSection: {
    title: 'Executive Scorecard (5 Dimensi)',
    label: 'Tanpa target buatan',
    dimensions: [
      { number: '01', name: 'Pertumbuhan', metrics: 'Revenue · GP · Akun baru · Repeat' },
      { number: '02', name: 'Efektivitas Sales', metrics: 'Pipeline · Konversi · Siklus · Forecast' },
      { number: '03', name: 'Kesehatan Stok', metrics: 'Turn · Aged · Sell-through · Hari jual' },
      { number: '04', name: 'Hasil Klien', metrics: 'Respons · Pemenuhan · Retur · CSAT' },
      { number: '05', name: 'Progres Strategis', metrics: 'Gate ritel · Pilot SPARTA · Gate DC' },
    ],
  },
  rhythmSection: {
    title: 'Ritme Manajemen',
    label: '3 siklus evaluasi',
    items: [
      { cadence: 'Mingguan', focus: 'Pipeline & tender aktif' },
      { cadence: 'Bulanan', focus: 'Revenue, margin, stok & kas' },
      { cadence: 'Kuartalan', focus: 'Workstream & decision gate' },
    ],
  },
  decisionsSection: {
    title: '5 Keputusan Awal Owner',
    label: 'Persetujuan awal',
    items: [
      { number: '01', statement: 'Konfirmasi segmen & fokus komersial' },
      { number: '02', statement: 'Setujui audit baseline & setup 90 hari' },
      { number: '03', statement: 'Tunjuk PIC tiap alur kerja' },
      { number: '04', statement: 'Setujui pilot pasca-business case' },
      { number: '05', statement: 'Sepakati DC ikut studi & gate' },
    ],
  },
  closing: {
    label: 'Komitmen Penutup',
    quote: 'Perkuat fondasi, sistematiskan peluang B2B, dan buktikan ekspansi lewat data.',
    presenterName: 'Harry Gultom',
    presenterRole: 'Kandidat Sales Manager',
    companyName: 'PT Sparta Computindo Teknologi',
  },
};

export const slideDataEn: Slide12Content = {
  title: 'Measurable, Governable & Accountable Growth',
  subtitle: '5-dimension scorecard, review rhythm & 5 owner decisions.',
  tabs: [
    { id: 'scorecard', label: 'Scorecard & Rhythm' },
    { id: 'decisions', label: 'Decisions & Closing' },
  ],
  scorecardSection: {
    title: 'Executive Scorecard (5 Dimensions)',
    label: 'Zero fabricated targets',
    dimensions: [
      { number: '01', name: 'Growth', metrics: 'Revenue · GP · New accounts · Repeat' },
      { number: '02', name: 'Sales Effectiveness', metrics: 'Pipeline · Win rate · Cycle · Forecast' },
      { number: '03', name: 'Stock Health', metrics: 'Turn · Aged · Sell-through · Resale days' },
      { number: '04', name: 'Client Outcomes', metrics: 'Response · Fulfilment · Returns · CSAT' },
      { number: '05', name: 'Strategic Progress', metrics: 'Retail gates · SPARTA pilot · DC gates' },
    ],
  },
  rhythmSection: {
    title: 'Management Rhythm',
    label: '3 review cycles',
    items: [
      { cadence: 'Weekly', focus: 'Pipeline & active tenders' },
      { cadence: 'Monthly', focus: 'Revenue, margin, stock & cash' },
      { cadence: 'Quarterly', focus: 'Workstreams & gate approvals' },
    ],
  },
  decisionsSection: {
    title: '5 Decisions Requested from Owner',
    label: 'Initial sign-off',
    items: [
      { number: '01', statement: 'Confirm priority segments & focus' },
      { number: '02', statement: 'Approve 90-day audit & sales setup' },
      { number: '03', statement: 'Appoint PIC per workstream' },
      { number: '04', statement: 'Approve lean pilots post-case' },
      { number: '05', statement: 'Align DC path to stage-gates' },
    ],
  },
  closing: {
    label: 'Closing Commitment',
    quote: 'Strengthen the core, systematize B2B wins, and prove expansion with data.',
    presenterName: 'Harry Gultom',
    presenterRole: 'Sales Manager Candidate',
    companyName: 'PT Sparta Computindo Teknologi',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide12Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide12Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 12,
  folder: '12',
  sectionId: 4,
  navTitle: {
    in: 'KPI, Tata Kelola & Penutup',
    en: 'KPIs, Governance & Closing',
  },
  headerTitle: {
    in: 'KPI, Tata Kelola & Penutup — PT Sparta Computindo Teknologi',
    en: 'KPIs, Governance & Closing — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Penutup & Keputusan',
    en: 'Closing & Decisions',
  },
  section: {
    in: 'Penutup & Komitmen',
    en: 'Closing & Commitment',
  },
};
