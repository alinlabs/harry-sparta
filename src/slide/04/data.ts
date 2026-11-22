import { useLanguage } from '@/contexts/LanguageContext';

export type MatrixNodeId =
  | 'sparta'
  | 'enterkomputer'
  | 'assacomputer'
  | 'mitralelang'
  | 'enterprise';

export interface BenchmarkArchetype {
  id: Exclude<MatrixNodeId, 'sparta'>;
  number: string;
  name: string;
  roleLabel: string;
  proposition: string;
  lesson: string;
  caveat?: string;
}

export interface MatrixPoint {
  id: MatrixNodeId;
  shortLabel: string;
  title: string;
  quadrantLabel: string;
  detail: string;
  isSparta?: boolean;
  xPct: number;
  yPct: number;
}

export type Slide04Tab = 'benchmark' | 'positioning';

export interface Slide04Content {
  title: string;
  subtitle: string;
  tabs: { id: Slide04Tab; label: string }[];
  benchmarkSection: {
    title: string;
    evidenceLabel: string;
    archetypes: BenchmarkArchetype[];
    caveat: string;
  };
  matrixSection: {
    title: string;
    evidenceLabel: string;
    xLeft: string;
    xRight: string;
    yTop: string;
    yBottom: string;
    points: MatrixPoint[];
    spartaConditionNote: string;
  };
  differentiationSection: {
    title: string;
    items: string[];
  };
  gapsSection: {
    title: string;
    items: string[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide04Content = {
  title: 'Menjadi Mitra Paling Relevan, Bukan Toko Terbesar',
  subtitle: 'Benchmark model bisnis pasar untuk mengunci positioning Sparta.',
  tabs: [
    { id: 'benchmark', label: 'Benchmark' },
    { id: 'positioning', label: 'Positioning' },
  ],
  benchmarkSection: {
    title: '4 Model Benchmark Pasar',
    evidenceLabel: 'Proposisi publik',
    archetypes: [
      {
        id: 'enterkomputer',
        number: '01',
        name: 'EnterKomputer',
        roleLabel: 'Ritel & katalog',
        proposition: 'Katalog luas & harga ritel kompetitif',
        lesson: 'Kunci: katalog digital & UX',
      },
      {
        id: 'assacomputer',
        number: '02',
        name: 'ASSACOMPUTER',
        roleLabel: 'Akuisisi aset bekas',
        proposition: 'Beli IT bekas partai besar & jemput',
        lesson: 'Kunci: proses intake & standar data',
        caveat: 'Belum tercantum sertifikat data-erasure',
      },
      {
        id: 'mitralelang',
        number: '03',
        name: 'MitraLelang.id',
        roleLabel: 'Lelang & borongan',
        proposition: 'Akuisisi aset kantor via lot & lelang',
        lesson: 'Kunci: kesiapan tender & kecepatan',
      },
      {
        id: 'enterprise',
        number: '04',
        name: 'Penyedia Enterprise',
        roleLabel: 'Solusi & SLA',
        proposition: 'Desain infrastruktur & kontrak SLA',
        lesson: 'Kunci: kredibilitas & akun jangka panjang',
      },
    ],
    caveat: 'Catatan: Proposisi publik — bukan data pendapatan atau pangsa pasar.',
  },
  matrixSection: {
    title: 'Matriks Positioning',
    evidenceLabel: 'Klik titik',
    xLeft: 'Transaksional',
    xRight: 'Mitra Siklus Hidup',
    yTop: 'Baru + Bekas + Pemulihan',
    yBottom: 'Fokus Perangkat Baru',
    points: [
      {
        id: 'sparta',
        shortLabel: 'SPARTA (Usulan)',
        title: 'Positioning SPARTA',
        quadrantLabel: 'Baru + Bekas / Siklus Hidup',
        detail: 'Satukan suplai baru/bekas, tender, buyback & pemulihan aset.',
        isSparta: true,
        xPct: 76,
        yPct: 24,
      },
      {
        id: 'enterkomputer',
        shortLabel: '01 EnterKomputer',
        title: 'EnterKomputer',
        quadrantLabel: 'Baru · Katalog Ritel',
        detail: 'Unggul di katalog komponen & harga online.',
        xPct: 24,
        yPct: 76,
      },
      {
        id: 'assacomputer',
        shortLabel: '02 ASSACOMPUTER',
        title: 'ASSACOMPUTER',
        quadrantLabel: 'Bekas · Akuisisi B2B',
        detail: 'Fokus akuisisi IT bekas via valuasi & jemput.',
        xPct: 36,
        yPct: 26,
      },
      {
        id: 'mitralelang',
        shortLabel: '03 MitraLelang.id',
        title: 'MitraLelang.id',
        quadrantLabel: 'Bekas · Lelang & Lot',
        detail: 'Fokus beli cepat aset kantor via lelang.',
        xPct: 18,
        yPct: 36,
      },
      {
        id: 'enterprise',
        shortLabel: '04 Enterprise',
        title: 'Penyedia Enterprise',
        quadrantLabel: 'Baru · Solusi & SLA',
        detail: 'Unggul di desain infra baru & kontrak korporasi.',
        xPct: 78,
        yPct: 74,
      },
    ],
    spartaConditionNote: 'Menuntut bukti layanan & eksekusi konsisten.',
  },
  differentiationSection: {
    title: 'Ruang Diferensiasi',
    items: [
      'Opsi baru & bekas dalam 1 deal',
      'Pengadaan sekaligus disposal aset',
      'Valuasi buyback, lelang & jual ulang',
      'Relasi B2B lintas siklus refresh',
      'Merek SPARTA untuk deployment',
    ],
  },
  gapsSection: {
    title: 'Celah Wajib Ditutup',
    items: [
      'Katalog digital & lead online',
      'Standar grading, uji & garansi',
      'Akun B2B & tender desk',
      'Disiplin CRM & retensi',
      'SOP data & chain of custody',
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Suplai baru/bekas, pengadaan B2B, dan pemulihan aset dalam satu mitra.',
  },
};

export const slideDataEn: Slide04Content = {
  title: 'Be the Most Relevant Partner, Not the Largest Store',
  subtitle: 'Market business-model benchmarks to lock Sparta’s positioning.',
  tabs: [
    { id: 'benchmark', label: 'Benchmark' },
    { id: 'positioning', label: 'Positioning' },
  ],
  benchmarkSection: {
    title: '4 Market Benchmarks',
    evidenceLabel: 'Public proposition',
    archetypes: [
      {
        id: 'enterkomputer',
        number: '01',
        name: 'EnterKomputer',
        roleLabel: 'Retail & catalog',
        proposition: 'Broad catalog & sharp retail pricing',
        lesson: 'Key: digital catalog & UX',
      },
      {
        id: 'assacomputer',
        number: '02',
        name: 'ASSACOMPUTER',
        roleLabel: 'Used B2B intake',
        proposition: 'Bulk used-IT buying & pickup',
        lesson: 'Key: intake flow & data trust',
        caveat: 'No data-erasure certificate listed',
      },
      {
        id: 'mitralelang',
        number: '03',
        name: 'MitraLelang.id',
        roleLabel: 'Auctions & lots',
        proposition: 'Bulk office asset lots & auctions',
        lesson: 'Key: tender speed & readiness',
      },
      {
        id: 'enterprise',
        number: '04',
        name: 'Enterprise Providers',
        roleLabel: 'Solutions & SLA',
        proposition: 'Custom infra design & SLAs',
        lesson: 'Key: technical trust & depth',
      },
    ],
    caveat: 'Note: Public propositions only — not verified revenue or share.',
  },
  matrixSection: {
    title: 'Positioning Matrix',
    evidenceLabel: 'Click node',
    xLeft: 'Transactional',
    xRight: 'Lifecycle Partner',
    yTop: 'New + Used + Recovery',
    yBottom: 'New-Device Focus',
    points: [
      {
        id: 'sparta',
        shortLabel: 'SPARTA (Proposed)',
        title: 'SPARTA Positioning',
        quadrantLabel: 'New + Used / Lifecycle',
        detail: 'Unifies new/used supply, tenders, buyback & recovery.',
        isSparta: true,
        xPct: 76,
        yPct: 24,
      },
      {
        id: 'enterkomputer',
        shortLabel: '01 EnterKomputer',
        title: 'EnterKomputer',
        quadrantLabel: 'New · Retail Catalog',
        detail: 'Strong catalog breadth & retail pricing.',
        xPct: 24,
        yPct: 76,
      },
      {
        id: 'assacomputer',
        shortLabel: '02 ASSACOMPUTER',
        title: 'ASSACOMPUTER',
        quadrantLabel: 'Used · Corporate Intake',
        detail: 'Focused on used-IT valuation & pickup.',
        xPct: 36,
        yPct: 26,
      },
      {
        id: 'mitralelang',
        shortLabel: '03 MitraLelang.id',
        title: 'MitraLelang.id',
        quadrantLabel: 'Used · Auctions & Lots',
        detail: 'Focused on bulk office auctions.',
        xPct: 18,
        yPct: 36,
      },
      {
        id: 'enterprise',
        shortLabel: '04 Enterprise',
        title: 'Enterprise Providers',
        quadrantLabel: 'New · Solution & SLA',
        detail: 'Strong in infra design & long-term SLAs.',
        xPct: 78,
        yPct: 74,
      },
    ],
    spartaConditionNote: 'Requires proven service & consistent execution.',
  },
  differentiationSection: {
    title: 'Sparta Differentiation',
    items: [
      'New & used options in one deal',
      'Procurement + asset disposal',
      'Buyback, auction & resale pricing',
      'B2B ties across refresh cycles',
      'SPARTA brand for rollouts',
    ],
  },
  gapsSection: {
    title: 'Gaps to Close',
    items: [
      'Digital catalog & online leads',
      'Grading, testing & warranty SOPs',
      'B2B accounts & tender desk',
      'CRM, pipeline & retention',
      'Data erasure & custody records',
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'New & used hardware, B2B supply, and asset recovery in one partner.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide04Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide04Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 4,
  folder: '04',
  sectionId: 1,
  navTitle: {
    in: 'Lanskap Kompetisi & Benchmark',
    en: 'Competitive Landscape & Benchmark',
  },
  headerTitle: {
    in: 'Lanskap Kompetisi & Benchmark — PT Sparta Computindo Teknologi',
    en: 'Competitive Landscape & Benchmark — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Kompetisi & Benchmark',
    en: 'Competition & Benchmark',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
