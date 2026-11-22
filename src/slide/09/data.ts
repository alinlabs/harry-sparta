import { useLanguage } from '@/contexts/LanguageContext';

export type Slide09Tab = 'products' | 'gates';

export interface ProductDirectionItem {
  number: string;
  name: string;
  targetLabel: string;
  target: string;
  valueLabel: string;
  value: string;
  scopeLabel: string;
  scope: string;
}

export interface LaunchGateItem {
  number: string;
  title: string;
  detail: string;
}

export interface BrandRuleItem {
  number: string;
  text: string;
}

export interface BrandMetricItem {
  number: string;
  name: string;
  note: string;
}

export interface Slide09Content {
  title: string;
  subtitle: string;
  tabs: Array<{ id: Slide09Tab; label: string }>;
  productsSection: {
    title: string;
    label: string;
    items: ProductDirectionItem[];
  };
  gatesSection: {
    title: string;
    label: string;
    items: LaunchGateItem[];
  };
  architectureSection: {
    title: string;
    label: string;
    rules: BrandRuleItem[];
    commercialLabel: string;
    commercialStatement: string;
  };
  metricsSection: {
    title: string;
    label: string;
    items: BrandMetricItem[];
  };
  takeaway: {
    label: string;
    statement: string;
  };
}

export const slideDataId: Slide09Content = {
  title: 'Dari Distributor Menuju Produk Identitas Sendiri',
  subtitle: 'Strategi bertahap untuk SPARTA All-in-One PC & Digital Display.',
  tabs: [
    { id: 'products', label: 'Produk & Aturan Merek' },
    { id: 'gates', label: 'Launch Gates & Metrik' },
  ],
  productsSection: {
    title: '2 Lini Produk SPARTA',
    label: 'Prioritas awal',
    items: [
      {
        number: '01',
        name: 'SPARTA All-in-One PC',
        targetLabel: 'Target',
        target: 'Kantor, sekolah, front desk, UMKM',
        valueLabel: 'Nilai',
        value: 'Ringkas, praktis, purnajual jelas',
        scopeLabel: 'Fokus',
        scope: 'Mulai dari spek standar terbatas',
      },
      {
        number: '02',
        name: 'SPARTA Digital Display',
        targetLabel: 'Target',
        target: 'Ritel, F&B, klinik, hotel',
        valueLabel: 'Nilai',
        value: 'Visual tajam, instalasi praktis',
        scopeLabel: 'Paket',
        scope: 'Pisah unit vs pasang & servis',
      },
    ],
  },
  gatesSection: {
    title: '6 Gerbang Peluncuran',
    label: 'Berurutan',
    items: [
      { number: '01', title: 'Validasi Permintaan', detail: 'Wawancara & komitmen pilot' },
      { number: '02', title: 'Validasi OEM', detail: 'Mitra & standar mutu' },
      { number: '03', title: 'Definisi Produk', detail: 'SKU, BOM, landed cost' },
      { number: '04', title: 'Pilot Terbatas', detail: 'Batch kecil klien awal' },
      { number: '05', title: 'Rilis Komersial', detail: 'Harga, kit & garansi' },
      { number: '06', title: 'Skalabilitas', detail: 'Naik jika margin & retur sehat' },
    ],
  },
  architectureSection: {
    title: 'Aturan Merek & Model Komersial',
    label: 'Disiplin klaim',
    rules: [
      { number: '01', text: 'SPARTA sebagai merek utama' },
      { number: '02', text: 'Nama model sesuai kebutuhan' },
      { number: '03', text: 'Klaim spek wajib berbasis bukti' },
      { number: '04', text: 'Jangan klaim manufaktur sendiri jika OEM' },
    ],
    commercialLabel: 'Model Komersial',
    commercialStatement: 'Margin hardware + jasa pasang + opsi maintenance.',
  },
  metricsSection: {
    title: '7 Metrik Sukses Merek Privat',
    label: 'Pasca-pilot',
    items: [
      { number: '01', name: 'Pilot Sell-Through', note: 'Serapan batch awal' },
      { number: '02', name: 'Gross Margin', note: 'Margin pasca-garansi' },
      { number: '03', name: 'Defect Rate', note: 'Rasio unit cacat' },
      { number: '04', name: 'Klaim Garansi', note: 'Frekuensi & kecepatan' },
      { number: '05', name: 'Kepuasan Klien', note: 'Keandalan & dukungan' },
      { number: '06', name: 'Repeat Deployment', note: 'Order ulang klien pilot' },
      { number: '07', name: 'Channel Reorder', note: 'Restock reseller' },
    ],
  },
  takeaway: {
    label: 'Inti',
    statement: 'Mulai dari pilot kecil; bangun merek lewat kualitas, bukan sekadar logo.',
  },
};

export const slideDataEn: Slide09Content = {
  title: 'From Multi-Brand Distributor to Own Branded Products',
  subtitle: 'Staged GTM plan for SPARTA All-in-One PC & Digital Display.',
  tabs: [
    { id: 'products', label: 'Products & Brand Rules' },
    { id: 'gates', label: 'Launch Gates & Metrics' },
  ],
  productsSection: {
    title: '2 SPARTA Product Lines',
    label: 'Initial focus',
    items: [
      {
        number: '01',
        name: 'SPARTA All-in-One PC',
        targetLabel: 'Target',
        target: 'Offices, schools, front desks, SMEs',
        valueLabel: 'Value',
        value: 'Compact, practical, reliable support',
        scopeLabel: 'Focus',
        scope: 'Start with limited standard specs',
      },
      {
        number: '02',
        name: 'SPARTA Digital Display',
        targetLabel: 'Target',
        target: 'Retail, F&B, clinics, hotels',
        valueLabel: 'Value',
        value: 'Clear display, fast installation',
        scopeLabel: 'Offer',
        scope: 'Separate unit vs. install/service',
      },
    ],
  },
  gatesSection: {
    title: '6 Product Launch Gates',
    label: 'Sequential',
    items: [
      { number: '01', title: 'Demand Validation', detail: 'Buyer talks & pilot LOIs' },
      { number: '02', title: 'OEM Validation', detail: 'Partners & QC standards' },
      { number: '03', title: 'Product Definition', detail: 'SKU, BOM & landed cost' },
      { number: '04', title: 'Controlled Pilot', detail: 'Small batch at client sites' },
      { number: '05', title: 'Commercial Launch', detail: 'Pricing, kit & warranty' },
      { number: '06', title: 'Scale', detail: 'Expand if margin & returns pass' },
    ],
  },
  architectureSection: {
    title: 'Brand Rules & Commercial Model',
    label: 'Claim discipline',
    rules: [
      { number: '01', text: 'Lead with SPARTA primary brand' },
      { number: '02', text: 'Name models by use case' },
      { number: '03', text: 'Keep spec claims evidence-based' },
      { number: '04', text: 'Never claim in-house build for OEM' },
    ],
    commercialLabel: 'Commercial Model',
    commercialStatement: 'Hardware margin + installation + optional maintenance.',
  },
  metricsSection: {
    title: '7 Private-Brand Metrics',
    label: 'Post-pilot',
    items: [
      { number: '01', name: 'Pilot Sell-Through', note: 'Initial batch uptake' },
      { number: '02', name: 'Gross Margin', note: 'Net post-warranty' },
      { number: '03', name: 'Defect Rate', note: 'Early field failure' },
      { number: '04', name: 'Warranty Claims', note: 'Volume & turnaround' },
      { number: '05', name: 'Client Satisfaction', note: 'Uptime & support' },
      { number: '06', name: 'Repeat Deployment', note: 'Follow-on pilot orders' },
      { number: '07', name: 'Channel Reorder', note: 'Reseller restock pace' },
    ],
  },
  takeaway: {
    label: 'Core',
    statement: 'Start with a lean pilot; build a brand via quality, not just a logo.',
  },
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide09Content =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide09Content {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 9,
  folder: '09',
  sectionId: 2,
  navTitle: {
    in: 'Merek Privat SPARTA',
    en: 'SPARTA Private Brand',
  },
  headerTitle: {
    in: 'Merek Privat SPARTA — PT Sparta Computindo Teknologi',
    en: 'SPARTA Private Brand — PT Sparta Computindo Teknologi',
  },
  category: {
    in: 'Merek Privat',
    en: 'Private Brand',
  },
  section: {
    in: 'Ekspansi & Produk',
    en: 'Expansion & Products',
  },
};
