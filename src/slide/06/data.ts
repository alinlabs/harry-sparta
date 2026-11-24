import { useLanguage } from '@/contexts/LanguageContext';

export type PortfolioId = 'retail' | 'distribution' | 'b2b' | 'b2g';
export type AccountLayerId = 'layer-retail-reseller' | 'layer-b2b-sectors' | 'layer-b2g-public';

export interface Slide06ModalPayload {
  badge: string;
  subtitle: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  summary: string;
  highlights: string[];
  footerLabel: string;
  footerValue: string;
  accent: 'red' | 'slate';
}

export interface MixSliceData {
  name: string;
  share: number;
  color: string;
}

export interface PortfolioCardData {
  id: PortfolioId;
  title: string;
  shareText: string;
  isDevelopment?: boolean;
  targetCustomer: string;
  mainOffering: string;
  salesMotion: string;
  primaryKpi: string;
  modal: Slide06ModalPayload;
}

export interface AccountUniverseLayer {
  id: AccountLayerId;
  layerTag: string;
  title: string;
  entities: string;
  modal: Slide06ModalPayload;
}

export interface Slide06Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  portfoliosSectionLabel: string;
  mixChart: {
    title: string;
    b2gStatusLabel: string;
    b2gStatusText: string;
    footnote: string;
    slices: MixSliceData[];
  };
  fieldLabels: {
    targetCustomer: string;
    mainOffering: string;
    salesMotion: string;
    primaryKpi: string;
  };
  portfolios: PortfolioCardData[];
  layersSectionLabel: string;
  layersDistinctionNote: string;
  accountLayers: AccountUniverseLayer[];
}

export const slideDataId: Slide06Data = {
  eyebrow: "Model Bisnis",
  title: "Empat Portofolio Komersial",
  subtitle: "Pemisahan kanal, tipe pelanggan, pola penjualan, dan ownership agar tidak tumpang tindih.",
  portfoliosSectionLabel: "Komposisi Saat Ini & Empat Portofolio Komersial",
  mixChart: {
    title: "Kontribusi Saat Ini (Brief)",
    b2gStatusLabel: "B2G:",
    b2gStatusText: "Development segment – baseline belum tersedia",
    footnote: "Komposisi 40/40/20 adalah data brief. Kontribusi B2G tidak ditampilkan sebagai 0% dan tidak ditambahkan sebelum transaksi terverifikasi.",
    slices: [
      { name: "Retail", share: 40, color: "#dc2626" },
      { name: "Distribusi", share: 40, color: "#475569" },
      { name: "B2B", share: 20, color: "#94a3b8" }
    ]
  },
  fieldLabels: {
    targetCustomer: "Target",
    mainOffering: "Offering",
    salesMotion: "Motion",
    primaryKpi: "KPI"
  },
  portfolios: [
    {
      id: "retail",
      title: "Retail",
      shareText: "40%",
      targetCustomer: "Pelanggan langsung & pengguna akhir",
      mainOffering: "PC, laptop, komponen (New & Second)",
      salesMotion: "Showroom, marketplace, web, medsos & telesales",
      primaryKpi: "Respons leads, konversi & basket size",
      modal: {
        badge: "Portofolio 01 • 40%",
        subtitle: "Kanal Konsumen Langsung",
        title: "Retail — Offline, Online & Telesales",
        metric: "40%",
        metricLabel: "Kontribusi Brief",
        summary: "Menangani pembelian satuan hingga multi-unit melalui kanal fisik, digital, dan telesales secara responsif.",
        highlights: [
          "Kanal aktif: showroom/offline, marketplace, website, media sosial, dan telesales.",
          "Usulan tim: 4 orang (2 Sales Offline, 1 Sales Online, 1 Telemarketing).",
          "Ekspansi jalur baru maupun cabang/toko kecil diuji via pilot area (ukur footfall, margin, dan payback)."
        ],
        footerLabel: "Fokus",
        footerValue: "Kecepatan respons leads, konversi & perputaran stok",
        accent: "slate"
      }
    },
    {
      id: "distribution",
      title: "Distribusi",
      shareText: "40%",
      targetCustomer: "Toko komputer, reseller & pembeli volume",
      mainOffering: "Suplai kuantitas & stok reguler",
      salesMotion: "Program channel & pengulangan order",
      primaryKpi: "Reseller aktif, repeat order & tempo/AR",
      modal: {
        badge: "Portofolio 02 • 40%",
        subtitle: "Kanal Channel & Reseller",
        title: "Distribusi — Toko Komputer & Reseller",
        metric: "40%",
        metricLabel: "Kontribusi Brief",
        summary: "Mengelola toko komputer dan mitra reseller dengan disiplin harga berjenjang dan kontrol piutang.",
        highlights: [
          "Usulan tim: 1 Sales Reseller/Channel di bawah supervisi Retail + Distribusi.",
          "Fokus pada aktivasi pelanggan rutin, ketersediaan stok, dan kejelasan tier harga.",
          "Kontrol tempo bayar dan batas kredit dikoordinasikan ketat bersama Finance."
        ],
        footerLabel: "Fokus",
        footerValue: "Frekuensi repeat order tinggi dengan piutang terkendali",
        accent: "slate"
      }
    },
    {
      id: "b2b",
      title: "B2B",
      shareText: "20%",
      targetCustomer: "System Integrator & end-user korporat",
      mainOffering: "Server, jaringan, software, internet & maintenance",
      salesMotion: "Consultative selling & account management",
      primaryKpi: "Pipeline, gross margin & retensi akun",
      modal: {
        badge: "Portofolio 03 • 20%",
        subtitle: "Korporat & System Integrator",
        title: "B2B — Solusi Enterprise & SI",
        metric: "20%",
        metricLabel: "Kontribusi Brief",
        summary: "Meningkatkan porsi bisnis berbasis proyek dan layanan berkelanjutan lintas sektor industri.",
        highlights: [
          "Usulan tim: 6 orang (3 AM Jakarta, 1 AM Tangerang/Cilegon, 1 AM Bekasi/Karawang, 1 KAM).",
          "Setiap akun memiliki satu primary owner di CRM agar koordinasi wilayah dan KAM rapi.",
          "Fokus produk: server baru/second, networking, IT Solution, internet, instalasi, dan maintenance."
        ],
        footerLabel: "Catatan",
        footerValue: "Usulan porsi gabungan B2B+B2G bergantung pada baseline & kapasitas",
        accent: "slate"
      }
    },
    {
      id: "b2g",
      title: "B2G",
      shareText: "Development segment – baseline belum tersedia",
      isDevelopment: true,
      targetCustomer: "Instansi pemerintah, BUMN & layanan publik",
      mainOffering: "Perangkat & infrastruktur sesuai regulasi",
      salesMotion: "Kemitraan subcon → maincon, e-Catalog & tender",
      primaryKpi: "Lolos syarat, bid/no-bid & kepatuhan",
      modal: {
        badge: "Portofolio 04 • Pengembangan",
        subtitle: "Segmen Pengembangan",
        title: "B2G — Kemitraan Subcon menuju Maincon",
        metric: "Pengembangan",
        metricLabel: "Baseline Belum Tersedia",
        summary: "Memasuki pasar institusi publik secara terukur dimulai dari peluang relevan dan kemitraan subcon.",
        highlights: [
          "Belum memiliki baseline persentase di brief — tidak boleh ditampilkan sebagai 0%.",
          "Usulan tim: 1 AM B2G fokus pada kepatuhan dokumen, e-Catalog, dan tender terseleksi.",
          "Menjaga batas kelayakan produk baru vs refurbished sesuai ketentuan paket pengadaan."
        ],
        footerLabel: "Batas Klaim",
        footerValue: "Tidak menjanjikan kemenangan tender sebelum kesiapan administrasi teruji",
        accent: "slate"
      }
    }
  ],
  layersSectionLabel: "Tiga Lapisan Target Akun (Account Universe)",
  layersDistinctionNote: "Klasifikasi target akun (catatan kandidat) — terpisah dan bukan pengganti empat portofolio komersial di atas",
  accountLayers: [
    {
      id: "layer-retail-reseller",
      layerTag: "Lapisan Akun 01",
      title: "Retail & Reseller",
      entities: "Offline / showroom • Online / marketplace • Web & medsos • Toko komputer / reseller",
      modal: {
        badge: "Lapisan Akun 01",
        subtitle: "Account Universe",
        title: "Kelompok Akun Konsumen & Reseller",
        summary: "Memetakan seluruh titik akses pasar ritel langsung dan jaringan toko mitra.",
        highlights: [
          "Menjangkau pembeli personal/UMKM lewat showroom, e-commerce, web, dan telesales.",
          "Menjangkau toko komputer dan reseller regional sebagai mitra distribusi ulang.",
          "Di dalam sistem komersial, lapisan ini dilayani oleh Portofolio Retail dan Distribusi."
        ],
        footerLabel: "Peran Dimensi",
        footerValue: "Peta account universe — bukan penggabungan portofolio",
        accent: "slate"
      }
    },
    {
      id: "layer-b2b-sectors",
      layerTag: "Lapisan Akun 02",
      title: "Tujuh Sektor Industri B2B",
      entities: "Education • Manufacturing • Financial • Healthcare • Hospitality • ICT • Oil & Gas",
      modal: {
        badge: "Lapisan Akun 02",
        subtitle: "Account Universe",
        title: "Kelompok Sektor Industri Korporat",
        summary: "Daftar vertikal industri pada catatan kandidat untuk memetakan prospek akun B2B.",
        highlights: [
          "Mencakup 7 sektor utama: Education, Manufacturing, Financial, Healthcare, Hospitality, ICT, Oil & Gas.",
          "Prioritas garapan dipilih lewat scoring product fit, akses PIC, margin, dan risiko bayar.",
          "Satu akun tetap memiliki satu primary owner di CRM walaupun spesialisasi sektor menjadi overlay."
        ],
        footerLabel: "Peran Dimensi",
        footerValue: "Daftar akun disaring berdasarkan kapasitas dan bukti rekam jejak",
        accent: "slate"
      }
    },
    {
      id: "layer-b2g-public",
      layerTag: "Lapisan Akun 03",
      title: "Institusi Publik / Pemerintah",
      entities: "K/L • BUMN • Badan/Lembaga • Pemda & BPD • Badan/Sudin/UPT/RSUD/Puskesmas",
      modal: {
        badge: "Lapisan Akun 03",
        subtitle: "Account Universe",
        title: "Kelompok Institusi Publik & Pengadaan",
        summary: "Pemetaan jenis instansi sektor publik sebagai referensi penelusuran peluang B2G yang patuh regulasi.",
        highlights: [
          "Mencakup K/L, BUMN, Badan/Lembaga, Pemda, BPD, serta unit teknis (Sudin, UPT, RSUD, Puskesmas).",
          "Peluang diseleksi lewat bid/no-bid checklist agar sesuai kelayakan produk dan modal kerja.",
          "Masuk bertahap melalui kemitraan subcon/maincon dan kanal e-Catalog resmi."
        ],
        footerLabel: "Peran Dimensi",
        footerValue: "Klasifikasi akun target — transaksi tetap dicatat pada Portofolio B2G",
        accent: "slate"
      }
    }
  ]
};

export const slideDataEn: Slide06Data = {
  eyebrow: "Business Model",
  title: "Four Commercial Portfolios",
  subtitle: "Separating sales channels, buyer profiles, sales motions, and ownership to prevent overlap.",
  portfoliosSectionLabel: "Current Mix & Four Commercial Portfolios",
  mixChart: {
    title: "Current Revenue Mix (Brief)",
    b2gStatusLabel: "B2G:",
    b2gStatusText: "Development segment – baseline unavailable",
    footnote: "The 40/40/20 split reflects the company brief. B2G is never displayed as 0% or added without verified transactions.",
    slices: [
      { name: "Retail", share: 40, color: "#dc2626" },
      { name: "Distribution", share: 40, color: "#475569" },
      { name: "B2B", share: 20, color: "#94a3b8" }
    ]
  },
  fieldLabels: {
    targetCustomer: "Target",
    mainOffering: "Offering",
    salesMotion: "Motion",
    primaryKpi: "KPI"
  },
  portfolios: [
    {
      id: "retail",
      title: "Retail",
      shareText: "40%",
      targetCustomer: "Direct buyers & end-users",
      mainOffering: "PCs, laptops, components (New & Second)",
      salesMotion: "Showroom, marketplace, web, social & telesales",
      primaryKpi: "Lead response, conversion & basket size",
      modal: {
        badge: "Portfolio 01 • 40%",
        subtitle: "Direct Consumer Channel",
        title: "Retail — Offline, Online & Telesales",
        metric: "40%",
        metricLabel: "Brief Share",
        summary: "Serves single-unit to small-batch direct orders across physical stores, digital platforms, and telesales.",
        highlights: [
          "Active channels: showroom/offline, marketplaces, web, social media, and telesales.",
          "Proposed team: 4 roles (2 Offline Sales, 1 Online Sales, 1 Telemarketing).",
          "New channels or small-branch expansion tested via area pilots tracking footfall, margin, and payback."
        ],
        footerLabel: "Focus",
        footerValue: "Fast lead response, conversion rate & inventory turns",
        accent: "slate"
      }
    },
    {
      id: "distribution",
      title: "Distribution",
      shareText: "40%",
      targetCustomer: "Computer stores, resellers & volume buyers",
      mainOffering: "Volume supply & regular stock replenishment",
      salesMotion: "Channel programs & repeat ordering",
      primaryKpi: "Active resellers, repeat orders & AR aging",
      modal: {
        badge: "Portfolio 02 • 40%",
        subtitle: "Channel & Reseller Network",
        title: "Distribution — Computer Stores & Resellers",
        metric: "40%",
        metricLabel: "Brief Share",
        summary: "Develops computer store and reseller partners through tiered channel pricing and credit discipline.",
        highlights: [
          "Proposed team: 1 Reseller/Channel rep supervised alongside Retail.",
          "Focuses on active partner retention, stock readiness, and clear pricing tiers.",
          "Payment terms and credit limits strictly governed with Finance."
        ],
        footerLabel: "Focus",
        footerValue: "High repeat order frequency with controlled receivables",
        accent: "slate"
      }
    },
    {
      id: "b2b",
      title: "B2B",
      shareText: "20%",
      targetCustomer: "System Integrators & corporate end-users",
      mainOffering: "Servers, networking, software, internet & maintenance",
      salesMotion: "Consultative selling & account management",
      primaryKpi: "Pipeline health, gross margin & retention",
      modal: {
        badge: "Portfolio 03 • 20%",
        subtitle: "Enterprise & System Integrators",
        title: "B2B — Corporate & SI Solutions",
        metric: "20%",
        metricLabel: "Brief Share",
        summary: "Grows project-driven solutions and recurring contracts across priority corporate industry verticals.",
        highlights: [
          "Proposed team: 6 roles (3 Jakarta AMs, 1 Tangerang/Cilegon AM, 1 Bekasi/Karawang AM, 1 KAM).",
          "Single primary owner per account in CRM ensures regional AM and KAM coordination.",
          "Core focus: new/second servers, networking, IT Solutions, internet, installation, and maintenance."
        ],
        footerLabel: "Note",
        footerValue: "Proposed combined B2B+B2G share depends on baseline & capacity",
        accent: "slate"
      }
    },
    {
      id: "b2g",
      title: "B2G",
      shareText: "Development segment – baseline unavailable",
      isDevelopment: true,
      targetCustomer: "Ministries, SOEs, local governments & public units",
      mainOffering: "Compliant hardware & infrastructure supply",
      salesMotion: "Subcon → maincon, e-Catalog & selective tenders",
      primaryKpi: "Admin readiness, bid/no-bid & compliance",
      modal: {
        badge: "Portfolio 04 • Development",
        subtitle: "Development Segment",
        title: "B2G — Subcontracting Toward Maincon",
        metric: "Development",
        metricLabel: "Baseline Unavailable",
        summary: "Enters public-sector procurement in measured phases starting with compliant opportunities and subcon partners.",
        highlights: [
          "No verified share in brief — never shown as 0%.",
          "Proposed team: 1 B2G AM focused on procurement documentation, e-Catalog, and selective bids.",
          "Enforces strict eligibility boundaries between new and refurbished units per tender rules."
        ],
        footerLabel: "Boundary",
        footerValue: "No tender win promises prior to compliance and readiness checks",
        accent: "slate"
      }
    }
  ],
  layersSectionLabel: "Three Account Segmentation Layers (Account Universe)",
  layersDistinctionNote: "Target account classification (candidate notes) — distinct from the four commercial portfolios above",
  accountLayers: [
    {
      id: "layer-retail-reseller",
      layerTag: "Account Layer 01",
      title: "Retail & Resellers",
      entities: "Offline / showroom • Online / marketplace • Web & social • Computer stores / resellers",
      modal: {
        badge: "Account Layer 01",
        subtitle: "Account Universe",
        title: "Direct Consumer & Reseller Accounts",
        summary: "Maps direct retail touchpoints and regional reseller stores across offline and online channels.",
        highlights: [
          "Reaches personal and SMB buyers via showrooms, marketplaces, web, and telesales.",
          "Covers computer shops and local resellers purchasing recurring stock.",
          "Operated commercially under the Retail and Distribution portfolios."
        ],
        footerLabel: "Role",
        footerValue: "Account universe mapping — not a replacement for portfolios",
        accent: "slate"
      }
    },
    {
      id: "layer-b2b-sectors",
      layerTag: "Account Layer 02",
      title: "Seven B2B Industry Verticals",
      entities: "Education • Manufacturing • Financial • Healthcare • Hospitality • ICT • Oil & Gas",
      modal: {
        badge: "Account Layer 02",
        subtitle: "Account Universe",
        title: "Corporate B2B Industry Clusters",
        summary: "Industry verticals outlined in candidate notes to structure corporate account targeting.",
        highlights: [
          "Covers 7 core sectors: Education, Manufacturing, Financial, Healthcare, Hospitality, ICT, Oil & Gas.",
          "Accounts are prioritized via scoring across product fit, PIC access, margin, and payment risk.",
          "Each account keeps one primary CRM owner even where sector specialization overlays."
        ],
        footerLabel: "Role",
        footerValue: "Target list prioritized by team capacity and verified track record",
        accent: "slate"
      }
    },
    {
      id: "layer-b2g-public",
      layerTag: "Account Layer 03",
      title: "Public Sector Institutions",
      entities: "Ministries/Agencies • SOEs • Regional Gov & Banks • Municipal Units / Hospitals",
      modal: {
        badge: "Account Layer 03",
        subtitle: "Account Universe",
        title: "Public Sector & Government Institutions",
        summary: "Classifies public-sector entity types to guide compliant B2G pipeline qualification.",
        highlights: [
          "Includes Ministries (K/L), SOEs (BUMN), agencies, Regional Gov (Pemda/BPD), and public health/service units.",
          "Opportunities pass bid/no-bid screening for hardware eligibility and cash-flow fit.",
          "Entered step-by-step via subcon/maincon partnerships and official e-Catalog listings."
        ],
        footerLabel: "Role",
        footerValue: "Account classification — deals belong under the B2G portfolio",
        accent: "slate"
      }
    }
  ]
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide06Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide06Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 6,
  folder: "06",
  sectionId: 5,
  navTitle: {
    in: "Model Bisnis - 4 Portofolio",
    en: "Business Model - 4 Portfolios"
  },
  headerTitle: {
    in: "Model Bisnis - Empat Portofolio Komersial",
    en: "Business Model - Four Commercial Portfolios"
  },
  category: {
    in: "II. Menentukan Arah Pertumbuhan",
    en: "II. Setting Growth Direction"
  },
  section: {
    in: "II. Menentukan Arah Pertumbuhan",
    en: "II. Setting Growth Direction"
  }
};
