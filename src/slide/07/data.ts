import { useLanguage } from '@/contexts/LanguageContext';

export type Slide07Tab = 'flow' | 'risk';

export interface ValuationFormulaLine {
  operator: string;
  label: string;
  note: string;
  isResult?: boolean;
}

export interface Slide07Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide07Tab; label: string }>;
  twoSidedSection: {
    title: string;
    label: string;
    supply: {
      code: string;
      title: string;
      items: string[];
    };
    recovery: {
      code: string;
      title: string;
      items: string[];
    };
  };
  tenderFlowSection: {
    title: string;
    label: string;
    steps: Array<{ step: string; title: string }>;
  };
  valuationSection: {
    title: string;
    label: string;
    lines: ValuationFormulaLine[];
  };
  riskSection: {
    title: string;
    label: string;
    items: string[];
  };
  kpiSection: {
    title: string;
    items: string[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide07Content = {
  title: 'Tangkap Dua Arah: Pengadaan & Disposal Aset',
  subtitle: 'Tender PC bekas dan suplai B2B dengan disiplin harga & risiko.',
  tabs: [
    { id: 'flow', label: 'Peluang & Alur Tender' },
    { id: 'risk', label: 'Valuasi & Kontrol Risiko' },
  ],
  twoSidedSection: {
    title: 'Peluang Korporasi Dua Arah',
    label: 'Siklus penuh',
    supply: {
      code: 'A',
      title: 'Pasokan — Klien Beli',
      items: [
        'PC & laptop baru',
        'PC & laptop bekas teruji',
        'Monitor, server, UPS',
        'Paket deployment bertahap',
      ],
    },
    recovery: {
      code: 'B',
      title: 'Pemulihan — Klien Lepas',
      items: [
        'Refresh PC korporasi',
        'Relokasi / tutup kantor',
        'Tender & lelang partai',
        'Disposal server & UPS',
      ],
    },
  },
  tenderFlowSection: {
    title: 'Alur Tender Desk (7 Tahap)',
    label: 'Terkontrol',
    steps: [
      { step: '01', title: 'Kualifikasi peluang' },
      { step: '02', title: 'Cek dokumen & kepatuhan' },
      { step: '03', title: 'Survei lokasi & unit' },
      { step: '04', title: 'Valuasi & batas bid' },
      { step: '05', title: 'Submit & klarifikasi' },
      { step: '06', title: 'Bayar, jemput, BA' },
      { step: '07', title: 'Sortir, uji, grade, jual' },
    ],
  },
  valuationSection: {
    title: 'Rumus Harga Akuisisi Maksimum',
    label: 'Batas bid',
    lines: [
      { operator: 'BASIS', label: 'Nilai Jual Kembali', note: 'Harga per grade & kanal' },
      { operator: '−', label: 'Uji & Perbaikan', note: 'Teknisi, parts & QC' },
      { operator: '−', label: 'Logistik & Bongkar', note: 'Survei & angkut' },
      { operator: '−', label: 'Data & Kepatuhan', note: 'Sanitasi & BA' },
      { operator: '−', label: 'Cadangan Garansi', note: 'Penyangga retur' },
      { operator: '−', label: 'Target Margin Wajib', note: 'Return & putaran kas' },
      { operator: '=', label: 'Batas Atas Bid (Max Price)', note: 'Plafon mutlak', isResult: true },
    ],
  },
  riskSection: {
    title: '7 Kontrol Risiko Wajib',
    label: 'Kepatuhan',
    items: [
      'Legalitas kepemilikan penjual',
      'Catat serial & kondisi unit',
      'Chain of custody tertulis',
      'Sanitasi data terverifikasi',
      'Aturan unit mati di awal',
      'Kunci max bid pra-submit',
      'Jalur exit jelas sebelum beli',
    ],
  },
  kpiSection: {
    title: 'KPI Tender',
    items: [
      'Tender valid',
      'Bid/no-bid',
      'Win rate',
      'Margin/lot',
      'Hari jual ulang',
      'Recovery yield',
      'Rasio retur',
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Hadir saat perusahaan membeli unit baru maupun melepas aset lama.',
  },
};

export const slideDataEn: Slide07Content = {
  title: 'Capture Both Sides: Procurement & Asset Disposal',
  subtitle: 'Used-PC tenders and B2B supply governed by pricing & risk rules.',
  tabs: [
    { id: 'flow', label: 'Opportunity & Tender Flow' },
    { id: 'risk', label: 'Valuation & Risk Controls' },
  ],
  twoSidedSection: {
    title: 'Two-Sided Corporate Access',
    label: 'Full-cycle',
    supply: {
      code: 'A',
      title: 'Supply — Client Buys',
      items: [
        'New PCs & laptops',
        'Tested used PCs & laptops',
        'Monitors, servers, UPS',
        'Staged rollout bundles',
      ],
    },
    recovery: {
      code: 'B',
      title: 'Recovery — Client Exits',
      items: [
        'Corporate PC refresh',
        'Office exit / relocation',
        'Bulk tenders & auctions',
        'Server & UPS disposal',
      ],
    },
  },
  tenderFlowSection: {
    title: 'Tender Desk Flow (7 Steps)',
    label: 'Gated',
    steps: [
      { step: '01', title: 'Lead qualification' },
      { step: '02', title: 'Compliance check' },
      { step: '03', title: 'Site survey & unit check' },
      { step: '04', title: 'Valuation & bid cap' },
      { step: '05', title: 'Submit & clarify' },
      { step: '06', title: 'Pay, pickup & handover' },
      { step: '07', title: 'Sort, test, grade, resell' },
    ],
  },
  valuationSection: {
    title: 'Maximum Acquisition Pricing',
    label: 'Bid ceiling',
    lines: [
      { operator: 'BASE', label: 'Expected Resale Value', note: 'By grade & exit channel' },
      { operator: '−', label: 'Testing & Repair', note: 'Tech labor, parts & QC' },
      { operator: '−', label: 'Logistics & Teardown', note: 'Survey & transport' },
      { operator: '−', label: 'Data & Compliance', note: 'Sanitization & records' },
      { operator: '−', label: 'Warranty Reserve', note: 'Defect & return buffer' },
      { operator: '−', label: 'Required Margin', note: 'Return & capital turn' },
      { operator: '=', label: 'Maximum Bid Ceiling', note: 'Hard cash cap', isResult: true },
    ],
  },
  riskSection: {
    title: '7 Mandatory Risk Controls',
    label: 'Controls',
    items: [
      'Seller legal title check',
      'Serial & condition logging',
      'Signed chain of custody',
      'Verified data sanitization',
      'Upfront dead-unit rules',
      'Lock max bid pre-submit',
      'Confirm exit before buy',
    ],
  },
  kpiSection: {
    title: 'Tender KPIs',
    items: [
      'Qualified bids',
      'Bid/no-bid',
      'Win rate',
      'Margin/lot',
      'Days to resell',
      'Recovery yield',
      'Return rate',
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Serve corporates both when buying new IT and retiring aging assets.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide07Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide07Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 7,
  folder: '07',
  sectionId: 1,
  navTitle: {
    in: 'Tender & Aset Bekas',
    en: 'Corporate Tender & Used Assets',
  },
  headerTitle: {
    in: 'Tender Korporasi & Bisnis Aset Bekas — PT Sparta Computindo Teknologi',
    en: 'Corporate Tender & Used-Asset Business — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Tender & Aset Korporasi',
    en: 'Corporate Tender & Assets',
  },
  section: {
    in: 'Strategi',
    en: 'Strategy',
  },
};
