import { useLanguage } from '@/contexts/LanguageContext';

export type ExecutiveKpiId = 'current-revenue' | 'company-target' | 'commercial-team';
export type TransformationStageId = 'current' | 'transformation' | 'outcome';
export type PortfolioId = 'retail' | 'distribution' | 'b2b' | 'b2g';

export interface ModalMetricData {
  label: string;
  value: string;
  sublabel?: string;
}

export interface ExecutiveKpiCard {
  id: ExecutiveKpiId;
  tag: string;
  label: string;
  value: string;
  unit: string;
  shortCue: string;
  modal: {
    badge: string;
    subtitle: string;
    title: string;
    metric: string;
    metricLabel: string;
    summary: string;
    highlights: string[];
    metrics?: ModalMetricData[];
    footerLabel: string;
    footerValue: string;
    accent: 'red' | 'slate';
  };
}

export interface TransformationColumn {
  id: TransformationStageId;
  stepNumber: string;
  label: string;
  title: string;
  points: string[];
  modal: {
    badge: string;
    subtitle: string;
    title: string;
    metric: string;
    metricLabel: string;
    summary: string;
    highlights: string[];
    footerLabel: string;
    footerValue: string;
    accent: 'red' | 'slate';
  };
}

export interface PortfolioCardData {
  id: PortfolioId;
  title: string;
  share: string;
  shareLabel: string;
  isDevelopment?: boolean;
  shortCue: string;
  modal: {
    badge: string;
    subtitle: string;
    title: string;
    metric: string;
    metricLabel: string;
    summary: string;
    highlights: string[];
    footerLabel: string;
    footerValue: string;
    accent: 'red' | 'slate';
  };
}

export interface Slide02Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  kpiSectionLabel: string;
  flowSectionLabel: string;
  portfolioSectionLabel: string;
  portfolioSectionNote: string;
  kpis: ExecutiveKpiCard[];
  transformationFlow: TransformationColumn[];
  portfolios: PortfolioCardData[];
  governanceNote: {
    label: string;
    text: string;
  };
}

export const slideDataId: Slide02Data = {
  eyebrow: "Executive Summary",
  title: "Dari Penjualan ke Sistem Commercial",
  subtitle: "Baseline perusahaan, arsitektur transformasi 3 lapis, dan empat portofolio pasar.",
  kpiSectionLabel: "Baseline & Sasaran Utama",
  flowSectionLabel: "Current → Transformation → Outcome",
  portfolioSectionLabel: "Empat Portofolio Komersial",
  portfolioSectionNote: "Retail 40% • Distribusi 40% • B2B 20% • B2G: Segmen Pengembangan",
  kpis: [
    {
      id: "current-revenue",
      tag: "Saat Ini",
      label: "Omzet Bulanan",
      value: "Rp2,5–3 M",
      unit: "Per Bulan",
      shortCue: "Portofolio kuat & stok besar",
      modal: {
        badge: "Kondisi Aktual",
        subtitle: "Brief Perusahaan",
        title: "Baseline Omzet Rp2,5–3 Miliar / Bulan",
        metric: "Rp2,5–3 M",
        metricLabel: "Per Bulan",
        summary: "Omzet saat ini ditopang stok besar dan portofolio luas, namun sistem penjualan masih perlu diseragamkan.",
        highlights: [
          "Komposisi berjalan: Retail 40%, Distribusi 40%, B2B 20%; B2G segmen pengembangan.",
          "Tantangan inti: menyatukan tim, menjaga margin, mempercepat stok, dan membangun proses.",
          "Data aktual 12–24 bulan, status PPN, margin, dan DSO divalidasi saat audit awal."
        ],
        metrics: [
          { label: "Retail", value: "40%" },
          { label: "Distribusi", value: "40%" },
          { label: "B2B", value: "20%" }
        ],
        footerLabel: "Status",
        footerValue: "Fakta baseline brief; B2G belum memiliki persentase terverifikasi",
        accent: "slate"
      }
    },
    {
      id: "company-target",
      tag: "Sasaran",
      label: "Target Omzet",
      value: "Rp4–5 M",
      unit: "Per Bulan",
      shortCue: "Berbasis audit baseline (bukan janji pribadi)",
      modal: {
        badge: "Target Perusahaan",
        subtitle: "Batas Klaim",
        title: "Sasaran Perusahaan Rp4–5 Miliar / Bulan",
        metric: "Rp4–5 M",
        metricLabel: "Sasaran",
        summary: "Target Rp4–5 miliar/bulan adalah sasaran perusahaan yang diturunkan ke rencana berbasis data pasca-audit baseline.",
        highlights: [
          "Gap kenaikan yang dibutuhkan: Rp1,5–2 miliar per bulan.",
          "Kontribusi per segmen ditetapkan setelah audit kapasitas tim, pipeline, dan stok.",
          "Pertumbuhan dikunci bersama guardrail gross margin, piutang/DSO, dan aging stok."
        ],
        metrics: [
          { label: "Saat Ini", value: "Rp2,5–3 M" },
          { label: "Sasaran", value: "Rp4–5 M" },
          { label: "Gap", value: "Rp1,5–2 M" }
        ],
        footerLabel: "Catatan",
        footerValue: "Sasaran perusahaan, bukan janji pribadi kandidat",
        accent: "red"
      }
    },
    {
      id: "commercial-team",
      tag: "Kapasitas",
      label: "Sales & Marketing",
      value: "15 Orang",
      unit: "Tim Komersial",
      shortCue: "Sales/BD & Marketing dipisah",
      modal: {
        badge: "Organisasi",
        subtitle: "Struktur Commercial",
        title: "Tim Sales & Marketing (15 Posisi)",
        metric: "15 Orang",
        metricLabel: "Alokasi Tim",
        summary: "Tim 15 posisi diarahkan ke empat portofolio dengan pemisahan divisi Sales/BD dan Marketing di bawah Commercial.",
        highlights: [
          "Usulan alokasi: Retail 4, Distribusi 1, B2B 6, B2G 1, Marketing 1, Supervisor 2.",
          "Setiap anggota punya wilayah, produk, target omzet/margin, dan ownership akun jelas.",
          "Penempatan final menunggu audit kompetensi serta konfirmasi definisi Manager dalam hitungan 15 orang."
        ],
        metrics: [
          { label: "Sales & BD", value: "12 Posisi" },
          { label: "Marketing", value: "1 Posisi" },
          { label: "Supervisor", value: "2 Posisi" }
        ],
        footerLabel: "Konfirmasi",
        footerValue: "Definisi headcount 15 orang di luar Manager perlu dikonfirmasi",
        accent: "slate"
      }
    }
  ],
  transformationFlow: [
    {
      id: "current",
      stepNumber: "01",
      label: "Current",
      title: "Titik Berangkat",
      points: [
        "Portofolio kuat & stok besar",
        "Retail 40% • Distribusi 40% • B2B 20%",
        "Sistem penjualan belum konsisten",
        "Tantangan tim, margin & stok"
      ],
      modal: {
        badge: "01 • Current",
        subtitle: "Kondisi Awal",
        title: "Titik Berangkat & Tantangan Utama",
        metric: "Rp2,5–3 M",
        metricLabel: "Baseline",
        summary: "Kekuatan produk dan stok besar belum terkonversi optimal karena proses komersial belum seragam.",
        highlights: [
          "Stok puluhan ribu unit (komposisi 70/30 menunggu konfirmasi basis unit/SKU/nilai).",
          "Belum ada standar terpadu untuk discovery, quotation, kontrol harga, dan handover.",
          "Fokus pembenahan: penyatuan tim, proteksi margin, perputaran stok, dan proses baku."
        ],
        footerLabel: "Langkah Awal",
        footerValue: "Audit operasional dilakukan sebelum perubahan struktur",
        accent: "slate"
      }
    },
    {
      id: "transformation",
      stepNumber: "02",
      label: "Transformation",
      title: "Sistem Commercial",
      points: [
        "Pisah Sales–Marketing & 4 portofolio",
        "Audit awal, grade, L&D, KPI & SOP",
        "CRM, dashboard & harga berjenjang",
        "Fokus B2B/B2G, solusi & pilot Retail"
      ],
      modal: {
        badge: "02 • Transformation",
        subtitle: "Strategi 3 Lapis",
        title: "Membangun Sistem Commercial Terpadu",
        metric: "3 Lapisan",
        metricLabel: "Arsitektur",
        summary: "Transformasi menyatukan penataan internal, penguatan mesin per segmen, dan pengukuran berbasis data bersama.",
        highlights: [
          "Organisasi: pisahkan Sales/BD dan Marketing; tetapkan 4 portofolio & 1 primary owner akun.",
          "Kapabilitas: ganti label senior/junior menjadi Sales Grade berbasis kompetensi & L&D rutin.",
          "Sistem: terapkan SOP, CRM internal, dashboard, harga online request berjenjang, dan playbook."
        ],
        footerLabel: "Catatan",
        footerValue: "CRM, dashboard & online price request adalah rancangan target",
        accent: "red"
      }
    },
    {
      id: "outcome",
      stepNumber: "03",
      label: "Outcome",
      title: "Hasil yang Dituju",
      points: [
        "Omzet bertumbuh terarah",
        "Margin kotor tetap sehat",
        "Stok berputar lebih cepat",
        "Piutang terkendali & kaderisasi leader"
      ],
      modal: {
        badge: "03 • Outcome",
        subtitle: "Dampak Bisnis",
        title: "Lima Hasil Utama Transformasi",
        metric: "5 Dampak",
        metricLabel: "Sasaran",
        summary: "Pertumbuhan omzet dikawal ketat oleh profitabilitas margin, kecepatan stok, kualitas piutang, dan regenerasi pemimpin.",
        highlights: [
          "Omzet naik terukur dari kontribusi jelas di tiap portofolio pasar.",
          "Margin terjaga lewat jualan solusi dan otoritas diskon berjenjang.",
          "Stok berputar lebih cepat, piutang/DSO terkendali, dan calon pemimpin baru terbentuk."
        ],
        footerLabel: "Prinsip",
        footerValue: "Pertumbuhan sehat yang tidak bergantung pada individu",
        accent: "slate"
      }
    }
  ],
  portfolios: [
    {
      id: "retail",
      title: "Retail",
      share: "40%",
      shareLabel: "Saat ini",
      shortCue: "Showroom • Online • Telesales • Pilot",
      modal: {
        badge: "Portofolio 01",
        subtitle: "Kontribusi 40%",
        title: "Portofolio Retail",
        metric: "40%",
        metricLabel: "Porsi Saat Ini",
        summary: "Melayani pelanggan langsung melalui offline/showroom, marketplace, web, media sosial, dan telesales.",
        highlights: [
          "Usulan tim: 4 orang (2 Sales Offline, 1 Sales Online, 1 Telemarketing).",
          "Fokus KPI: kecepatan respons leads, konversi, basket size, dan perputaran stok.",
          "Pengembangan cabang/toko kecil diuji lewat pilot area (ukur footfall, margin, dan payback)."
        ],
        footerLabel: "Fokus",
        footerValue: "Ekspansi jalur baru berbasis hasil pilot area",
        accent: "slate"
      }
    },
    {
      id: "distribution",
      title: "Distribusi",
      share: "40%",
      shareLabel: "Saat ini",
      shortCue: "Toko Komputer • Reseller • Kuantitas",
      modal: {
        badge: "Portofolio 02",
        subtitle: "Kontribusi 40%",
        title: "Portofolio Distribusi / Channel",
        metric: "40%",
        metricLabel: "Porsi Saat Ini",
        summary: "Mengelola toko komputer, reseller, dan pembelian kuantitas melalui program channel yang disiplin.",
        highlights: [
          "Usulan tim: 1 Sales Reseller / Channel di bawah supervisi Retail+Distribusi.",
          "Fokus KPI: aktivasi reseller aktif, frekuensi repeat order, dan volume margin.",
          "Pengendalian tempo/piutang ketat bersama Finance untuk mencegah overdue AR."
        ],
        footerLabel: "Fokus",
        footerValue: "Repeat order tinggi dengan disiplin batas kredit",
        accent: "slate"
      }
    },
    {
      id: "b2b",
      title: "B2B",
      share: "20%",
      shareLabel: "Saat ini",
      shortCue: "SI • Korporasi • Solusi & Server",
      modal: {
        badge: "Portofolio 03",
        subtitle: "Kontribusi 20%",
        title: "Portofolio B2B (Enterprise & SI)",
        metric: "20%",
        metricLabel: "Porsi Saat Ini",
        summary: "Menyasar System Integrator dan korporasi dengan solusi server, networking, software, internet, dan maintenance.",
        highlights: [
          "Usulan tim: 6 orang (3 AM Jakarta, 1 AM Tangerang/Cilegon, 1 AM Bekasi/Karawang, 1 KAM).",
          "Satu primary owner per akun di CRM agar koordinasi AM wilayah dan KAM rapi.",
          "Prioritas sektor dipilih berdasarkan product fit, akses PIC, margin, dan risiko bayar."
        ],
        footerLabel: "Catatan",
        footerValue: "Usulan porsi B2B+B2G 40% di M12 menunggu baseline & persetujuan",
        accent: "red"
      }
    },
    {
      id: "b2g",
      title: "B2G",
      share: "Pengembangan",
      shareLabel: "Baseline belum tersedia",
      isDevelopment: true,
      shortCue: "Instansi Publik • Subcon → Maincon",
      modal: {
        badge: "Portofolio 04",
        subtitle: "Segmen Pengembangan",
        title: "Portofolio B2G (Institusi Publik)",
        metric: "Pengembangan",
        metricLabel: "Status Baseline",
        summary: "Masuk secara bertahap lewat kemitraan subcon, e-Catalog, dan tender relevan sambil membangun rekam jejak.",
        highlights: [
          "Baseline persentase B2G belum tersedia di brief — tidak ditampilkan sebagai 0%.",
          "Usulan awal: 1 AM B2G fokus pada kepatuhan regulasi pengadaan dan bid/no-bid checklist.",
          "Menjaga kepatuhan syarat administrasi serta batas kelayakan produk baru vs refurbished."
        ],
        footerLabel: "Batas Klaim",
        footerValue: "Tidak menjanjikan kemenangan tender sebelum kesiapan teruji",
        accent: "slate"
      }
    }
  ],
  governanceNote: {
    label: "Catatan Baseline",
    text: "Target Rp4–5 M/bulan adalah sasaran perusahaan pasca-audit baseline (bukan janji pribadi). Kontribusi B2G belum memiliki baseline; definisi headcount 15 orang menunggu konfirmasi."
  }
};

export const slideDataEn: Slide02Data = {
  eyebrow: "Executive Summary",
  title: "From Ad-Hoc Sales to a Commercial System",
  subtitle: "Company baseline, three-layer transformation architecture, and four market portfolios.",
  kpiSectionLabel: "Baseline & Primary Goals",
  flowSectionLabel: "Current → Transformation → Outcome",
  portfolioSectionLabel: "Four Commercial Portfolios",
  portfolioSectionNote: "Retail 40% • Distribution 40% • B2B 20% • B2G: Development Segment",
  kpis: [
    {
      id: "current-revenue",
      tag: "Current",
      label: "Monthly Revenue",
      value: "IDR 2.5–3B",
      unit: "Per Month",
      shortCue: "Strong portfolio & large stock",
      modal: {
        badge: "Actual Baseline",
        subtitle: "Company Brief",
        title: "Current Revenue IDR 2.5–3 Billion / Month",
        metric: "IDR 2.5–3B",
        metricLabel: "Per Month",
        summary: "Current revenue is backed by large inventory and broad hardware offerings, yet lacks a consistent sales system.",
        highlights: [
          "Current mix: Retail 40%, Distribution 40%, B2B 20%; B2G as development segment.",
          "Core challenges: team alignment, margin protection, stock turns, and process consistency.",
          "12–24 month actuals, VAT treatment, margin, and DSO will be validated during initial audit."
        ],
        metrics: [
          { label: "Retail", value: "40%" },
          { label: "Distribution", value: "40%" },
          { label: "B2B", value: "20%" }
        ],
        footerLabel: "Status",
        footerValue: "Brief baseline fact; B2G has no verified share yet",
        accent: "slate"
      }
    },
    {
      id: "company-target",
      tag: "Target",
      label: "Revenue Target",
      value: "IDR 4–5B",
      unit: "Per Month",
      shortCue: "Post-audit data plan (not personal promise)",
      modal: {
        badge: "Company Target",
        subtitle: "Claim Boundary",
        title: "Company Goal: IDR 4–5 Billion / Month",
        metric: "IDR 4–5B",
        metricLabel: "Company Goal",
        summary: "IDR 4–5B/month is a company goal to be translated into a data-driven plan after the baseline audit.",
        highlights: [
          "Required monthly uplift: IDR 1.5–2 billion per month.",
          "Segment targets are set after auditing team capacity, pipeline, and inventory.",
          "Growth is governed alongside gross margin, AR/DSO, and stock aging guardrails."
        ],
        metrics: [
          { label: "Current", value: "IDR 2.5–3B" },
          { label: "Target", value: "IDR 4–5B" },
          { label: "Gap", value: "IDR 1.5–2B" }
        ],
        footerLabel: "Note",
        footerValue: "Company target, not a personal candidate guarantee",
        accent: "red"
      }
    },
    {
      id: "commercial-team",
      tag: "Capacity",
      label: "Sales & Marketing",
      value: "15 People",
      unit: "Commercial Team",
      shortCue: "Separate Sales/BD & Marketing",
      modal: {
        badge: "Organization",
        subtitle: "Commercial Structure",
        title: "Sales & Marketing Team (15 Positions)",
        metric: "15 People",
        metricLabel: "Allocation",
        summary: "15 positions are structured across four portfolios by separating Sales/BD and Marketing under one Commercial Department.",
        highlights: [
          "Proposed split: Retail 4, Distribution 1, B2B 6, B2G 1, Marketing 1, Supervisors 2.",
          "Every member gets clear territory, products, revenue/margin targets, and CRM ownership.",
          "Final placement awaits competency audit and confirmation of Manager headcount definition."
        ],
        metrics: [
          { label: "Sales & BD", value: "12 Roles" },
          { label: "Marketing", value: "1 Role" },
          { label: "Supervisors", value: "2 Roles" }
        ],
        footerLabel: "Confirmation",
        footerValue: "15-position definition excluding Manager awaits confirmation",
        accent: "slate"
      }
    }
  ],
  transformationFlow: [
    {
      id: "current",
      stepNumber: "01",
      label: "Current",
      title: "Starting Point",
      points: [
        "Strong portfolio & large stock",
        "Retail 40% • Dist 40% • B2B 20%",
        "Inconsistent sales execution",
        "Team, margin & stock challenges"
      ],
      modal: {
        badge: "01 • Current",
        subtitle: "Initial State",
        title: "Starting Point & Core Challenges",
        metric: "IDR 2.5–3B",
        metricLabel: "Baseline",
        summary: "Strong product depth and stock volume need a unified commercial process to scale profitably.",
        highlights: [
          "Tens of thousands of units in stock (70/30 metric basis awaits confirmation).",
          "Lacks standardized discovery, quotation, pricing control, and order handover.",
          "Immediate priorities: team unity, margin defense, stock velocity, and standard SOPs."
        ],
        footerLabel: "First Step",
        footerValue: "Operational audit precedes structural changes",
        accent: "slate"
      }
    },
    {
      id: "transformation",
      stepNumber: "02",
      label: "Transformation",
      title: "Commercial System",
      points: [
        "Split Sales–Marketing & 4 portfolios",
        "Audit, grading, L&D, KPI & SOPs",
        "CRM, dashboard & tiered pricing",
        "B2B/B2G push, solutions & Retail pilot"
      ],
      modal: {
        badge: "02 • Transformation",
        subtitle: "3-Layer Strategy",
        title: "Building an Integrated Commercial System",
        metric: "3 Layers",
        metricLabel: "Architecture",
        summary: "Connects internal foundations, segment sales engines, and shared data governance.",
        highlights: [
          "Organization: separate Sales/BD and Marketing; 4 portfolios with single CRM account owners.",
          "Capability: replace senior/junior labels with competency-based Sales Grades & scheduled L&D.",
          "Systems: deploy SOPs, internal CRM, dashboard, tiered online pricing, and sales playbooks."
        ],
        footerLabel: "Note",
        footerValue: "CRM, dashboard & online pricing are proposed target designs",
        accent: "red"
      }
    },
    {
      id: "outcome",
      stepNumber: "03",
      label: "Outcome",
      title: "Target Outcomes",
      points: [
        "Structured revenue growth",
        "Healthy gross margins",
        "Faster inventory turnover",
        "Controlled AR & new leaders"
      ],
      modal: {
        badge: "03 • Outcome",
        subtitle: "Business Impact",
        title: "Five Core Commercial Outcomes",
        metric: "5 Outcomes",
        metricLabel: "Target Impact",
        summary: "Revenue growth is paired with margin discipline, stock rotation, receivable control, and leadership development.",
        highlights: [
          "Measurable revenue uplift backed by clear segment-level accountability.",
          "Protected margins via consultative selling and tiered discount authority.",
          "Faster stock rotation, controlled AR/DSO, and new leaders groomed via L&D."
        ],
        footerLabel: "Principle",
        footerValue: "Scalable growth independent of individual habits",
        accent: "slate"
      }
    }
  ],
  portfolios: [
    {
      id: "retail",
      title: "Retail",
      share: "40%",
      shareLabel: "Current",
      shortCue: "Showroom • Online • Telesales • Pilot",
      modal: {
        badge: "Portfolio 01",
        subtitle: "40% Share",
        title: "Retail Portfolio",
        metric: "40%",
        metricLabel: "Current Share",
        summary: "Serves direct buyers via offline/showroom, marketplaces, web, social media, and telesales.",
        highlights: [
          "Proposed team: 4 roles (2 Offline Sales, 1 Online Sales, 1 Telemarketing).",
          "Core KPIs: lead response speed, conversion rate, basket size, and stock rotation.",
          "Small-store expansion tested via area pilots tracking footfall, margin, and payback."
        ],
        footerLabel: "Focus",
        footerValue: "Data-backed area pilots before scaling stores",
        accent: "slate"
      }
    },
    {
      id: "distribution",
      title: "Distribution",
      share: "40%",
      shareLabel: "Current",
      shortCue: "Computer Stores • Resellers • Volume",
      modal: {
        badge: "Portfolio 02",
        subtitle: "40% Share",
        title: "Distribution / Channel Portfolio",
        metric: "40%",
        metricLabel: "Current Share",
        summary: "Manages computer stores, resellers, and volume orders through disciplined channel programs.",
        highlights: [
          "Proposed team: 1 Reseller / Channel Sales rep under the Retail+Distribution Supervisor.",
          "Core KPIs: active reseller count, repeat order frequency, and volume margin.",
          "Strict payment term and credit control with Finance to prevent overdue AR."
        ],
        footerLabel: "Focus",
        footerValue: "High repeat orders with strict credit discipline",
        accent: "slate"
      }
    },
    {
      id: "b2b",
      title: "B2B",
      share: "20%",
      shareLabel: "Current",
      shortCue: "SI • Corporates • Solutions & Servers",
      modal: {
        badge: "Portfolio 03",
        subtitle: "20% Share",
        title: "B2B Portfolio (Enterprise & SI)",
        metric: "20%",
        metricLabel: "Current Share",
        summary: "Targets System Integrators and corporates with server, networking, software, internet, and maintenance solutions.",
        highlights: [
          "Proposed team: 6 roles (3 Jakarta AMs, 1 Tangerang/Cilegon AM, 1 Bekasi/Karawang AM, 1 KAM).",
          "One primary owner per account in CRM to align regional AMs and KAM.",
          "Sectors prioritized by product fit, PIC access, margin potential, and payment risk."
        ],
        footerLabel: "Note",
        footerValue: "Proposed 40% B2B+B2G share at M12 awaits baseline & approval",
        accent: "red"
      }
    },
    {
      id: "b2g",
      title: "B2G",
      share: "Development",
      shareLabel: "Baseline unavailable",
      isDevelopment: true,
      shortCue: "Public Sector • Subcon → Maincon",
      modal: {
        badge: "Portfolio 04",
        subtitle: "Development Segment",
        title: "B2G Portfolio (Public Institutions)",
        metric: "Development",
        metricLabel: "Baseline Status",
        summary: "Phased market entry through subcontracting partnerships, e-Catalog, and eligible tenders to build track record.",
        highlights: [
          "No B2G baseline exists in the brief — never displayed as 0%.",
          "Initial proposal: 1 B2G AM focused on procurement compliance and bid/no-bid discipline.",
          "Strict adherence to administrative rules and new vs. refurbished eligibility limits."
        ],
        footerLabel: "Boundary",
        footerValue: "No tender win promises prior to readiness verification",
        accent: "slate"
      }
    }
  ],
  governanceNote: {
    label: "Baseline Note",
    text: "IDR 4–5B/month is a company goal post-baseline audit (not a personal guarantee). B2G has no verified baseline yet; the 15-person headcount definition awaits confirmation."
  }
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide02Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide02Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 2,
  folder: "02",
  sectionId: 1,
  navTitle: {
    in: "Executive Summary",
    en: "Executive Summary"
  },
  headerTitle: {
    in: "Executive Summary - Dari Penjualan ke Sistem Commercial",
    en: "Executive Summary - From Sales to a Commercial System"
  },
  category: {
    in: "I. Memahami Bisnis",
    en: "I. Understanding the Business"
  },
  section: {
    in: "I. Memahami Bisnis",
    en: "I. Understanding the Business"
  }
};
