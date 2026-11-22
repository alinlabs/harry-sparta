import { useLanguage } from '@/contexts/LanguageContext';

export type Slide02Tab = 'foundation' | 'validation';

export interface CapabilityItem {
  number: string;
  title: string;
  desc: string;
}

export interface HeritageMilestone {
  year: string;
  title: string;
}

export interface StrategicAssetItem {
  number: string;
  text: string;
  note?: string;
}

export interface Slide02Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide02Tab; label: string }>;
  foundationSection: {
    title: string;
    evidenceLabel: string;
    items: CapabilityItem[];
  };
  heritageSection: {
    title: string;
    evidenceLabel: string;
    milestones: HeritageMilestone[];
    validationNote: string;
  };
  assetsSection: {
    title: string;
    evidenceLabel: string;
    items: StrategicAssetItem[];
  };
  validationSection: {
    title: string;
    evidenceLabel: string;
    items: string[];
  };
  interpretation: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide02Content = {
  title: 'Memahami Kekuatan Sparta Sebelum Ekspansi',
  subtitle: 'Kapabilitas berjalan dan baseline internal wajib validasi.',
  tabs: [
    { id: 'foundation', label: 'Fondasi & Jejak' },
    { id: 'validation', label: 'Aset & Validasi' },
  ],
  foundationSection: {
    title: '4 Kapabilitas Bisnis Publik',
    evidenceLabel: 'Fakta publik',
    items: [
      { number: '01', title: 'Perdagangan IT', desc: 'PC, laptop, server, UPS, jaringan' },
      { number: '02', title: 'Aset Multi-Kondisi', desc: 'Normal, rusak, mati; satuan–borongan' },
      { number: '03', title: 'Sourcing Korporasi', desc: 'Survei, valuasi, beli, lelang, angkut' },
      { number: '04', title: 'Baru & Bekas', desc: 'Opsi fleksibel lintas budget' },
    ],
  },
  heritageSection: {
    title: 'Jejak Historis',
    evidenceLabel: 'Materi publik',
    milestones: [
      { year: '2005', title: 'Mulai beroperasi' },
      { year: '2016', title: 'CV Sparta Computindo' },
      { year: '2018', title: 'PT Sparta Computindo' },
    ],
    validationNote: 'Catatan: Tanggal dari materi publik — verifikasi akta resmi.',
  },
  assetsSection: {
    title: '5 Aset Strategis Diaktivasi',
    evidenceLabel: 'Hipotesis',
    items: [
      { number: '01', text: 'Sourcing aset IT bekas' },
      { number: '02', text: 'Penilaian kondisi & nilai sisa' },
      { number: '03', text: 'Jangkauan ritel & korporasi' },
      { number: '04', text: 'Kategori endpoint hingga infra' },
      { number: '05', text: 'Peluang cross-sell layanan', note: 'Cek cakupan aktual' },
    ],
  },
  validationSection: {
    title: '6 Baseline Wajib Validasi',
    evidenceLabel: 'Pra-eksekusi',
    items: [
      'Bauran baru vs bekas',
      'Revenue & margin kategori',
      'Akun B2B & repeat rate',
      'Kapasitas toko & gudang',
      'Cakupan sales & umur stok',
      'Skala aktual sewa & servis',
    ],
  },
  interpretation: {
    label: 'Inti',
    statement: 'Unggul karena paham nilai perangkat sebelum, saat, dan sesudah dipakai.',
  },
};

export const slideDataEn: Slide02Content = {
  title: 'Understanding Sparta’s Strengths Before Expanding',
  subtitle: 'Active capabilities paired with internal baseline verification.',
  tabs: [
    { id: 'foundation', label: 'Foundation & Heritage' },
    { id: 'validation', label: 'Assets & Validation' },
  ],
  foundationSection: {
    title: '4 Public Business Capabilities',
    evidenceLabel: 'Public fact',
    items: [
      { number: '01', title: 'IT Hardware Trading', desc: 'PCs, laptops, servers, UPS, network' },
      { number: '02', title: 'Multi-Condition Used', desc: 'Working to dead; single to bulk' },
      { number: '03', title: 'Corporate Sourcing', desc: 'Survey, valuation, buyout, auction' },
      { number: '04', title: 'New & Used Supply', desc: 'Flexible across buyer budgets' },
    ],
  },
  heritageSection: {
    title: 'Company Heritage',
    evidenceLabel: 'Public records',
    milestones: [
      { year: '2005', title: 'Market origin' },
      { year: '2016', title: 'CV Sparta Computindo' },
      { year: '2018', title: 'PT Sparta Computindo' },
    ],
    validationNote: 'Note: Dates from public narrative — verify corporate deeds.',
  },
  assetsSection: {
    title: '5 Strategic Assets to Activate',
    evidenceLabel: 'Hypothesis',
    items: [
      { number: '01', text: 'Used IT sourcing reach' },
      { number: '02', text: 'Condition & residual valuation' },
      { number: '03', text: 'Retail & B2B agility' },
      { number: '04', text: 'Endpoint to infra breadth' },
      { number: '05', text: 'Service cross-sell upside', note: 'Verify actual scope' },
    ],
  },
  validationSection: {
    title: '6 Baselines to Verify',
    evidenceLabel: 'Pre-execution',
    items: [
      'New vs. used mix',
      'Category revenue & margin',
      'B2B accounts & repeat rate',
      'Store & warehouse capacity',
      'Sales reach & stock age',
      'Actual rental & service scale',
    ],
  },
  interpretation: {
    label: 'Core',
    statement: 'Edge: knowing hardware value before, during, and after use.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide02Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide02Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 2,
  folder: '02',
  sectionId: 1,
  navTitle: {
    in: 'Fondasi & Aset Strategis',
    en: 'Foundation & Strategic Assets',
  },
  headerTitle: {
    in: 'Fondasi Perusahaan & Aset Strategis — PT Sparta Computindo Teknologi',
    en: 'Company Foundation & Strategic Assets — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Fondasi Bisnis',
    en: 'Business Foundation',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
