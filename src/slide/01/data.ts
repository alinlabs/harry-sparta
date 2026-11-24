import { useLanguage } from '@/contexts/LanguageContext';

export type CoverNodeId = 'people' | 'process' | 'product' | 'data' | 'growth';

export interface CoverNodeItem {
  id: CoverNodeId;
  label: string;
  categoryLabel: string;
  desc: string;
}

export interface Slide01Data {
  contextLabel: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  networkTitle: string;
  networkHint: string;
  nodes: CoverNodeItem[];
  presenter: {
    label: string;
    name: string;
    role: string;
  };
}

export const slideDataId: Slide01Data = {
  contextLabel: "Arah Transformasi Commercial",
  title: "Culture, Commercial Transformation & Growth Roadmap",
  titleLine1: "Culture, Commercial Transformation",
  titleLine2: "& Growth Roadmap",
  subtitle: "Membangun sistem penjualan yang terukur, menguntungkan, dan dapat berkembang.",
  networkTitle: "Arsitektur Transformasi Commercial",
  networkHint: "Pilih node untuk melihat fokus transformasi",
  nodes: [
    {
      id: "people",
      label: "People",
      categoryLabel: "Organisasi & Tim",
      desc: "Menyelaraskan tim Sales dan Marketing melalui struktur peran, sistem grade, dan pengembangan kapabilitas."
    },
    {
      id: "process",
      label: "Process",
      categoryLabel: "SOP, KPI & Pemisahan Fungsi",
      desc: "Memisahkan Sales–Marketing di bawah Commercial serta menertibkan SOP, KPI, dan eksekusi jalur B2B/B2G."
    },
    {
      id: "product",
      label: "Product",
      categoryLabel: "Stok & Portofolio Pasar",
      desc: "Mengoptimalkan kekuatan stok dan digitalisasi inventori ke dalam empat portofolio pasar yang terarah."
    },
    {
      id: "data",
      label: "Data",
      categoryLabel: "CRM, Pricing & Visibilitas",
      desc: "Mengelola pipeline berbasis CRM, tata kelola harga, dan pelacakan KPI agar keputusan komersial terukur."
    },
    {
      id: "growth",
      label: "Growth",
      categoryLabel: "Tujuan Transformasi",
      desc: "Mendorong pertumbuhan omzet yang konsisten dengan menjaga profitabilitas margin dan kualitas pembayaran."
    }
  ],
  presenter: {
    label: "Disampaikan oleh",
    name: "Harry Gultom",
    role: "Kandidat Manager Sales & Marketing"
  }
};

export const slideDataEn: Slide01Data = {
  contextLabel: "Commercial Transformation Direction",
  title: "Culture, Commercial Transformation & Growth Roadmap",
  titleLine1: "Culture, Commercial Transformation",
  titleLine2: "& Growth Roadmap",
  subtitle: "Building a measurable, profitable, and scalable sales system.",
  networkTitle: "Commercial Transformation Architecture",
  networkHint: "Select a node to inspect its transformation focus",
  nodes: [
    {
      id: "people",
      label: "People",
      categoryLabel: "Organization & Team",
      desc: "Aligning the Sales and Marketing teams through clear role structure, grading, and capability development."
    },
    {
      id: "process",
      label: "Process",
      categoryLabel: "SOPs, KPIs & Function Split",
      desc: "Separating Sales and Marketing under Commercial while standardizing SOPs, KPIs, and B2B/B2G execution."
    },
    {
      id: "product",
      label: "Product",
      categoryLabel: "Inventory & Market Portfolio",
      desc: "Channeling inventory strength and inventory digitalization across four focused market portfolios."
    },
    {
      id: "data",
      label: "Data",
      categoryLabel: "CRM, Pricing & Visibility",
      desc: "Governing pipelines through CRM, pricing discipline, and KPI tracking for measurable commercial decisions."
    },
    {
      id: "growth",
      label: "Growth",
      categoryLabel: "Transformation Outcome",
      desc: "Driving consistent revenue growth while protecting margin profitability and payment quality."
    }
  ],
  presenter: {
    label: "Presented by",
    name: "Harry Gultom",
    role: "Sales & Marketing Manager Candidate"
  }
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'id'): Slide01Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide01Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 1,
  folder: "01",
  sectionId: 0,
  navTitle: {
    in: "Arah Transformasi Commercial",
    en: "Commercial Transformation Direction"
  },
  headerTitle: {
    in: "Cover - Arah Transformasi Commercial",
    en: "Cover - Commercial Transformation Direction"
  },
  category: {
    in: "Cover",
    en: "Cover"
  },
  section: {
    in: "Cover",
    en: "Cover"
  }
};


