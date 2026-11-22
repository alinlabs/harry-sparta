import { useLanguage } from '@/contexts/LanguageContext';

export type Slide10Tab = 'pathway' | 'gates';

export interface DataCenterStage {
  stage: string;
  horizon: string;
  title: string;
  bullets: string[];
}

export interface DecisionGateItem {
  number: string;
  label: string;
}

export interface Slide10Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide10Tab; label: string }>;
  contextCard: {
    title: string;
    sourceLabel: string;
    metrics: Array<{ value: string; caption: string }>;
    narrative: string;
  };
  distinctionCard: {
    title: string;
    label: string;
    statement: string;
    requirements: string[];
  };
  pathwaySection: {
    title: string;
    label: string;
    stages: DataCenterStage[];
  };
  gatesSection: {
    title: string;
    label: string;
    items: DecisionGateItem[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide10Content = {
  title: 'Ambisi Data Center Melalui Tahapan & Gerbang Investasi',
  subtitle: 'Selaraskan visi Owner dengan kelayakan teknis & disiplin kas.',
  tabs: [
    { id: 'pathway', label: 'Konteks & Jalur 4 Tahap' },
    { id: 'gates', label: 'Realitas & 6 Decision Gates' },
  ],
  contextCard: {
    title: 'Konteks Pasar & Infrastruktur',
    sourceLabel: 'IFC (2026) & World Bank',
    metrics: [
      { value: '584 MW', caption: 'Operasional (2025)' },
      { value: '337 MW', caption: 'Konstruksi' },
    ],
    narrative: 'Terkonsentrasi di Jabodetabek; listrik & jaringan jadi kunci.',
  },
  distinctionCard: {
    title: 'Realitas Operasional Data Center',
    label: 'Bukan ruang server biasa',
    statement: 'Syarat mutlak sebelum komitmen modal:',
    requirements: [
      'Daya listrik & redundansi',
      'Pendinginan & proteksi api',
      'Keamanan fisik & jaringan',
      'Uptime & regulasi 24/7',
      'Capex jangka panjang',
      'Tim teknis spesialis',
    ],
  },
  pathwaySection: {
    title: 'Jalur Bertahap (Tahap 0 → 3)',
    label: 'Rekomendasi',
    stages: [
      { stage: 'Tahap 0', horizon: '0–6 Bln', title: 'Pemetaan', bullets: ['Audit tim infra', 'Wawancara enterprise', 'Model finansial awal'] },
      { stage: 'Tahap 1', horizon: '6–18 Bln', title: 'Mitra Solusi', bullets: ['Partner operator DC/SI', 'Jual server & storage', 'Pelajari SLA B2B'] },
      { stage: 'Tahap 2', horizon: '18–30 Bln', title: 'Studi & Pilot', bullets: ['Bandingkan edge vs colo', 'Kaji daya, capex & izin', 'Kunci anchor client'] },
      { stage: 'Tahap 3', horizon: '30+ Bln', title: 'Keputusan Capex', bullets: ['Due diligence independen', 'Build, lease, atau JV', 'Sertifikasi sebelum klaim'] },
    ],
  },
  gatesSection: {
    title: '6 Decision Gates Mutlak',
    label: 'Syarat naik tahap',
    items: [
      { number: '01', label: 'Permintaan pasar tervalidasi' },
      { number: '02', label: 'Kelayakan teknis terverifikasi' },
      { number: '03', label: 'Pendanaan & kas memadai' },
      { number: '04', label: 'Tim operasional siap' },
      { number: '05', label: 'Rencana risiko & keamanan' },
      { number: '06', label: 'Investment case disetujui' },
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Bangun kompetensi dan klien dulu; bangun fasilitas setelah kelayakan terbukti.',
  },
};

export const slideDataEn: Slide10Content = {
  title: 'Preparing Data Center Ambition Through Stage-Gates',
  subtitle: 'Aligning owner vision with technical feasibility and cash discipline.',
  tabs: [
    { id: 'pathway', label: 'Context & 4-Stage Path' },
    { id: 'gates', label: 'Reality & 6 Decision Gates' },
  ],
  contextCard: {
    title: 'Market & Infra Context',
    sourceLabel: 'IFC (2026) & World Bank',
    metrics: [
      { value: '584 MW', caption: 'Operational (2025)' },
      { value: '337 MW', caption: 'Construction' },
    ],
    narrative: 'Clustered in Greater Jakarta; power & fiber remain critical.',
  },
  distinctionCard: {
    title: 'Data Center Reality',
    label: 'Not a server room',
    statement: 'Mandatory prerequisites before capex:',
    requirements: [
      'Power & N+1 redundancy',
      'Cooling & fire suppression',
      'Physical & fiber security',
      '24/7 uptime & compliance',
      'Long-term capex lock-in',
      'Specialized ops team',
    ],
  },
  pathwaySection: {
    title: 'Staged Pathway (Stage 0 → 3)',
    label: 'Recommended',
    stages: [
      { stage: 'Stage 0', horizon: '0–6 Mos', title: 'Mapping', bullets: ['Audit infra skills', 'Interview enterprise buyers', 'Draft initial risk model'] },
      { stage: 'Stage 1', horizon: '6–18 Mos', title: 'Partner Sales', bullets: ['Partner DC ops & SIs', 'Sell server & storage', 'Learn enterprise SLAs'] },
      { stage: 'Stage 2', horizon: '18–30 Mos', title: 'Feasibility', bullets: ['Compare edge vs. colo', 'Assess power & permits', 'Secure anchor demand'] },
      { stage: 'Stage 3', horizon: '30+ Mos', title: 'Capex Decision', bullets: ['Independent due diligence', 'Build, lease, or JV', 'Certify before claims'] },
    ],
  },
  gatesSection: {
    title: '6 Mandatory Decision Gates',
    label: 'Required to advance',
    items: [
      { number: '01', label: 'Validated client demand' },
      { number: '02', label: 'Verified technical feasibility' },
      { number: '03', label: 'Sufficient funding & cash' },
      { number: '04', label: 'Qualified ops team ready' },
      { number: '05', label: 'Risk & security plan set' },
      { number: '06', label: 'Approved investment case' },
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Build competence and clients first; commit capex only after feasibility is proven.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide10Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide10Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 10,
  folder: '10',
  sectionId: 2,
  navTitle: {
    in: 'Jalur Strategis Data Center',
    en: 'Data Center Pathway',
  },
  headerTitle: {
    in: 'Jalur Strategis Data Center — PT Sparta Computindo Teknologi',
    en: 'Data Center Strategic Pathway — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Infrastruktur & Data Center',
    en: 'Infrastructure & Data Center',
  },
  section: {
    in: 'Ekspansi & Produk',
    en: 'Expansion & Products',
  },
};
