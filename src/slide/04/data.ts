import { useLanguage } from '@/contexts/LanguageContext';

export type PortfolioGroupId =
  | 'end-user-computing'
  | 'enterprise-infrastructure'
  | 'components-accessories'
  | 'services';

export type ProgressionStageId = 'product' | 'bundle' | 'service' | 'recurring';

export type GuardrailId = 'refurbished-transparency' | 'catalog-boundary';

export interface Slide04ModalPayload {
  badge: string;
  subtitle: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  highlights: string[];
  footerLabel: string;
  footerValue: string;
  accent: 'red' | 'slate';
}

export interface ProductGroupCardData {
  id: PortfolioGroupId;
  kicker: string;
  title: string;
  products: string[];
  useCaseLabel: string;
  useCaseCue: string;
  modal: Slide04ModalPayload;
}

export interface ProgressionStageData {
  id: ProgressionStageId;
  step: string;
  title: string;
  cue: string;
  modal: Slide04ModalPayload;
}

export interface GuardrailCardData {
  id: GuardrailId;
  kicker: string;
  title: string;
  cue: string;
  modal: Slide04ModalPayload;
}

export interface Slide04Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  matrixSectionLabel: string;
  progressionSectionLabel: string;
  guardrailsSectionLabel: string;
  groups: ProductGroupCardData[];
  progression: ProgressionStageData[];
  guardrails: GuardrailCardData[];
}

export const slideDataId: Slide04Data = {
  eyebrow: "Portofolio Produk & Solusi",
  title: "Dari SKU ke Use Case Pelanggan",
  subtitle: "Empat kelompok produk & layanan, use case turunan, serta transisi menuju hubungan berulang.",
  matrixSectionLabel: "Empat Kelompok Produk & Layanan",
  progressionSectionLabel: "Alur Nilai: Product → Recurring",
  guardrailsSectionLabel: "Transparansi & Batas Katalog",
  groups: [
    {
      id: "end-user-computing",
      kicker: "Kelompok 01",
      title: "End-User Computing",
      products: [
        "PC rakitan / custom build",
        "AIO & Mini PC",
        "Laptop consumer & business",
        "Laptop gaming (New / Second)"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Kantor baru • Upgrade perangkat • Efisiensi anggaran",
      modal: {
        badge: "Kelompok 01",
        subtitle: "End-User Computing",
        title: "PC, AIO, Mini PC & Laptop (New / Second)",
        metric: "4 Lini Utama",
        metricLabel: "Cakupan",
        summary: "Menyediakan komputasi kerja hingga performa tinggi dalam opsi unit baru dan second/refurbished.",
        highlights: [
          "Produk: PC rakitan/custom build, All-in-One, Mini PC, laptop consumer, business, dan gaming.",
          "Use case: pengadaan kantor baru, peremajaan armada kerja, serta efisiensi anggaran via unit refurbished teruji.",
          "Turunan layanan: instalasi awal, upgrade komponen, serta dukungan purnajual."
        ],
        footerLabel: "Data Resmi",
        footerValue: "Daftar SKU prioritas, merek, spek & garansi menunggu data internal",
        accent: "slate"
      }
    },
    {
      id: "enterprise-infrastructure",
      kicker: "Kelompok 02",
      title: "Enterprise Infrastructure",
      products: [
        "Server baru & second",
        "Storage / backup (bila tersedia)",
        "Router & switch",
        "Perangkat jaringan"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Server / backup • Jaringan • Cabang baru",
      modal: {
        badge: "Kelompok 02",
        subtitle: "Enterprise Infrastructure",
        title: "Server, Storage/Backup & Jaringan",
        metric: "New & Second",
        metricLabel: "Infrastruktur",
        summary: "Mendukung tulang punggung komputasi dan konektivitas kantor pusat, cabang, maupun institusi.",
        highlights: [
          "Produk: server baru/second, perangkat jaringan, router, switch, serta storage/backup bila tersedia.",
          "Use case: pembangunan server/backup, pembukaan cabang baru, dan efisiensi investasi infrastruktur.",
          "Turunan solusi: bundling instalasi jaringan, internet bisnis, dan kontrak maintenance."
        ],
        footerLabel: "Data Resmi",
        footerValue: "Spesifikasi server, status storage/backup & daftar merek menunggu konfirmasi",
        accent: "slate"
      }
    },
    {
      id: "components-accessories",
      kicker: "Kelompok 03",
      title: "Components & Accessories",
      products: [
        "Sparepart komputasi",
        "Komponen server & jaringan",
        "Perangkat pendukung",
        "Opsi peremajaan unit"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Upgrade perangkat • Perawatan • Efisiensi biaya",
      modal: {
        badge: "Kelompok 03",
        subtitle: "Components & Accessories",
        title: "Sparepart & Perangkat Pendukung",
        metric: "Lifecycle Care",
        metricLabel: "Peran",
        summary: "Menjaga kesiapan suku cadang dan memperpanjang masa pakai perangkat milik pelanggan maupun reseller.",
        highlights: [
          "Produk: sparepart internal dan perangkat pendukung lintas PC, laptop, server, dan jaringan.",
          "Use case: upgrade bertahap tanpa ganti unit penuh dan penggantian komponen cepat.",
          "Peran komersial: memicu repeat order rutin serta menjadi pelengkap paket troubleshooting."
        ],
        footerLabel: "Data Resmi",
        footerValue: "Daftar SKU sparepart, garansi & harga dasar menunggu data inventori",
        accent: "slate"
      }
    },
    {
      id: "services",
      kicker: "Kelompok 04",
      title: "Services",
      products: [
        "Instalasi infrastruktur",
        "Preventive maintenance",
        "Troubleshooting & internet",
        "Software development"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Kantor & cabang baru • Stabilitas operasional",
      modal: {
        badge: "Kelompok 04",
        subtitle: "Services & Software",
        title: "Instalasi, Maintenance, Internet & Software",
        metric: "Recurring Engine",
        metricLabel: "Nilai Tambah",
        summary: "Mengubah transaksi perangkat menjadi layanan terkelola dan solusi sesuai proses kerja pelanggan.",
        highlights: [
          "Cakupan: instalasi, preventive maintenance, troubleshooting, konektivitas internet, dan software development.",
          "Use case: setup kantor/cabang baru siap pakai serta penjagaan keandalan operasional harian.",
          "Batas klaim: setiap layanan & software yang dijual wajib dipastikan kesiapan tim internal atau mitranya."
        ],
        footerLabel: "Verifikasi",
        footerValue: "Kapasitas teknis internal vs mitra & daftar aplikasi harus terkonfirmasi",
        accent: "slate"
      }
    }
  ],
  progression: [
    {
      id: "product",
      step: "01",
      title: "Product",
      cue: "Unit baru, second & sparepart",
      modal: {
        badge: "Tahap 01",
        subtitle: "Alur Komersial",
        title: "Product — Pintu Masuk Kebutuhan Dasar",
        metric: "Entry Point",
        metricLabel: "Peran",
        summary: "Ketersediaan perangkat baru, second/refurbished, dan sparepart membuka akses awal ke pelanggan.",
        highlights: [
          "Menjawab kebutuhan cepat personal, reseller, korporasi, hingga instansi.",
          "Katalog dipetakan berdasarkan masalah pelanggan, bukan sekadar daftar harga SKU.",
          "Kualitas pemeriksaan unit membangun kepercayaan untuk tahap penawaran berikutnya."
        ],
        footerLabel: "Fokus",
        footerValue: "Konversi awal yang jujur pada kondisi dan spesifikasi",
        accent: "slate"
      }
    },
    {
      id: "bundle",
      step: "02",
      title: "Bundle",
      cue: "Kantor baru • Cabang • Server",
      modal: {
        badge: "Tahap 02",
        subtitle: "Alur Komersial",
        title: "Bundle — Paket Sesuai Use Case",
        metric: "Multi-Kategori",
        metricLabel: "Nilai Transaksi",
        summary: "Menggabungkan unit komputasi, infrastruktur jaringan, dan aksesori sesuai skenario bisnis nyata.",
        highlights: [
          "Contoh use case: paket kantor baru, pembukaan cabang baru, atau penguatan server & backup.",
          "Kombinasi unit baru dan second/refurbished membantu efisiensi anggaran pelanggan.",
          "Menggeser percakapan dari adu harga satuan menjadi kesiapan kerja menyeluruh."
        ],
        footerLabel: "Fokus",
        footerValue: "Meningkatkan basket size dan relevansi penawaran",
        accent: "slate"
      }
    },
    {
      id: "service",
      step: "03",
      title: "Service",
      cue: "Instalasi, internet & software",
      modal: {
        badge: "Tahap 03",
        subtitle: "Alur Komersial",
        title: "Service — Implementasi & Solusi",
        metric: "End-to-End",
        metricLabel: "Layanan",
        summary: "Menyertakan instalasi, konfigurasi jaringan, internet, serta software development pada paket solusi.",
        highlights: [
          "Pelanggan menerima sistem yang terpasang dan berjalan, bukan sekadar dus perangkat.",
          "Menyelaraskan tim Sales, tim teknis, maupun mitra resmi sesuai cakupan proyek.",
          "Menjaga margin kotor tetap sehat dibandingkan penjualan komoditas murni."
        ],
        footerLabel: "Fokus",
        footerValue: "Hanya menjanjikan layanan yang terbukti siap dieksekusi",
        accent: "slate"
      }
    },
    {
      id: "recurring",
      step: "04",
      title: "Recurring Relationship",
      cue: "Maintenance, upgrade & repeat order",
      modal: {
        badge: "Tahap 04",
        subtitle: "Alur Komersial",
        title: "Recurring Relationship — Hubungan Jangka Panjang",
        metric: "Repeat & Retensi",
        metricLabel: "Dampak",
        summary: "Mengubah pembeli satu kali menjadi akun berkelanjutan melalui perawatan berkala dan dukungan jangka panjang.",
        highlights: [
          "Didorong oleh preventive maintenance, troubleshooting, langganan internet, dan pasokan sparepart.",
          "Memberi visibilitas siklus upgrade perangkat serta kebutuhan cabang berikutnya.",
          "Menstabilkan pendapatan dan memperkuat posisi sebagai mitra teknologi tepercaya."
        ],
        footerLabel: "Fokus",
        footerValue: "Retensi pelanggan berbasis SLA dan konsistensi purnajual",
        accent: "slate"
      }
    }
  ],
  guardrails: [
    {
      id: "refurbished-transparency",
      kicker: "Transparansi Second / Refurbished",
      title: "Kondisi, Pemeriksaan & Garansi Jujur",
      cue: "Kondisi fisik • Spesifikasi • Hasil QC • Cakupan garansi & batasan",
      modal: {
        badge: "Standar Transparansi",
        subtitle: "Produk Second / Refurbished",
        title: "Kejujuran Informasi Produk Second & Refurbished",
        summary: "Setiap penawaran unit second/refurbished wajib menyampaikan kondisi riil dan batasannya sejak awal.",
        highlights: [
          "Menjelaskan kondisi fisik, spesifikasi aktual, dan hasil pemeriksaan/QC secara terbuka.",
          "Menyatakan cakupan garansi serta batasan pemakaian tanpa klaim berlebihan.",
          "Membantu pelanggan memahami opsi efisiensi anggaran secara aman dan terukur."
        ],
        footerLabel: "Status Data",
        footerValue: "Standar condition grade & ketentuan garansi resmi menunggu dokumen internal",
        accent: "slate"
      }
    },
    {
      id: "catalog-boundary",
      kicker: "Batas Katalog & Bukti",
      title: "Ringkasan Kategori (Bukan Daftar 20–30 SKU)",
      cue: "SKU detail di company profile terpisah • Daftar SKU, merek & layanan menunggu data resmi",
      modal: {
        badge: "Batas Katalog",
        subtitle: "Data / Bukti yang Disiapkan",
        title: "Struktur Slide vs Katalog Produk Terpisah",
        summary: "Slide ini merangkum 4 kelompok kapabilitas utama; rincian puluhan SKU ditempatkan pada company profile terpisah.",
        highlights: [
          "Perlu disiapkan: daftar SKU prioritas, merek resmi, spesifikasi, condition grade, dan harga resmi.",
          "Perlu diverifikasi: daftar layanan IT dan software yang benar-benar dipenuhi internal atau mitra.",
          "Tidak mencantumkan merek, harga, atau garansi tertentu sebelum dokumen resmi ditetapkan."
        ],
        footerLabel: "Prinsip",
        footerValue: "Tanpa rekayasa spesifikasi, merek, harga, maupun sertifikasi",
        accent: "slate"
      }
    }
  ]
};

export const slideDataEn: Slide04Data = {
  eyebrow: "Product & Solution Portfolio",
  title: "From SKU to Customer Use Cases",
  subtitle: "Four product & service groups, derived use cases, and the progression toward recurring relationships.",
  matrixSectionLabel: "Four Product & Service Groups",
  progressionSectionLabel: "Value Flow: Product → Recurring",
  guardrailsSectionLabel: "Transparency & Catalog Boundaries",
  groups: [
    {
      id: "end-user-computing",
      kicker: "Group 01",
      title: "End-User Computing",
      products: [
        "Custom-build PCs",
        "AIO & Mini PCs",
        "Consumer & business laptops",
        "Gaming laptops (New / Second)"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "New office • Device refresh • Budget efficiency",
      modal: {
        badge: "Group 01",
        subtitle: "End-User Computing",
        title: "PCs, AIO, Mini PCs & Laptops (New / Second)",
        metric: "4 Core Lines",
        metricLabel: "Scope",
        summary: "Delivers workplace and performance computing across new and tested second/refurbished tiers.",
        highlights: [
          "Products: custom-build PCs, All-in-One desktops, Mini PCs, plus consumer, business, and gaming laptops.",
          "Use cases: new office setups, workstation upgrades, and cost efficiency via verified refurbished fleets.",
          "Attached services: initial setup, component upgrades, and after-sales support."
        ],
        footerLabel: "Official Data",
        footerValue: "Priority SKU list, brands, specs & warranty await internal data",
        accent: "slate"
      }
    },
    {
      id: "enterprise-infrastructure",
      kicker: "Group 02",
      title: "Enterprise Infrastructure",
      products: [
        "New & second servers",
        "Storage / backup (where available)",
        "Routers & switches",
        "Networking hardware"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Servers / backup • Networking • New branch",
      modal: {
        badge: "Group 02",
        subtitle: "Enterprise Infrastructure",
        title: "Servers, Storage/Backup & Networking",
        metric: "New & Second",
        metricLabel: "Infrastructure",
        summary: "Powers core compute and connectivity backbones for head offices, branches, and institutions.",
        highlights: [
          "Products: new and second servers, networking gear, routers, switches, and storage/backup where available.",
          "Use cases: server/backup deployments, new branch rollouts, and capex optimization.",
          "Attached solutions: network installation, business internet, and maintenance contracts."
        ],
        footerLabel: "Official Data",
        footerValue: "Server specs, storage scope & authorized brand list await confirmation",
        accent: "slate"
      }
    },
    {
      id: "components-accessories",
      kicker: "Group 03",
      title: "Components & Accessories",
      products: [
        "Computing spare parts",
        "Server & network parts",
        "Supporting peripherals",
        "Asset refresh components"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "Hardware upgrade • Maintenance • Cost efficiency",
      modal: {
        badge: "Group 03",
        subtitle: "Components & Accessories",
        title: "Spare Parts & Supporting Peripherals",
        metric: "Lifecycle Care",
        metricLabel: "Role",
        summary: "Maintains component readiness and extends hardware lifecycles for direct clients and resellers.",
        highlights: [
          "Products: spare parts and supporting peripherals across PCs, laptops, servers, and networking.",
          "Use cases: phased hardware upgrades without full replacement and rapid repair turnaround.",
          "Commercial role: drives steady repeat orders and complements troubleshooting services."
        ],
        footerLabel: "Official Data",
        footerValue: "Spare part SKU availability, warranty & base pricing await inventory data",
        accent: "slate"
      }
    },
    {
      id: "services",
      kicker: "Group 04",
      title: "Services",
      products: [
        "IT installation",
        "Preventive maintenance",
        "Troubleshooting & internet",
        "Software development"
      ],
      useCaseLabel: "Use case",
      useCaseCue: "New office & branches • Operational continuity",
      modal: {
        badge: "Group 04",
        subtitle: "Services & Software",
        title: "Installation, Maintenance, Internet & Software",
        metric: "Recurring Engine",
        metricLabel: "Value Add",
        summary: "Elevates hardware deliveries into managed support and tailored operational software.",
        highlights: [
          "Scope: installation, preventive maintenance, troubleshooting, internet connectivity, and software development.",
          "Use cases: turnkey office/branch commissioning and reliable day-to-day IT uptime.",
          "Claim rule: every offered service or app must match verified internal or partner delivery capacity."
        ],
        footerLabel: "Verification",
        footerValue: "In-house vs. partner delivery & app portfolio must be confirmed",
        accent: "slate"
      }
    }
  ],
  progression: [
    {
      id: "product",
      step: "01",
      title: "Product",
      cue: "New, second & spare parts",
      modal: {
        badge: "Stage 01",
        subtitle: "Commercial Flow",
        title: "Product — Entry Point for Core Needs",
        metric: "Entry Point",
        metricLabel: "Role",
        summary: "Immediate supply of new, second/refurbished devices and spare parts initiates buyer trust.",
        highlights: [
          "Addresses fast procurement across personal, reseller, corporate, and institutional buyers.",
          "Catalog organized around customer problems rather than raw price sheets.",
          "Honest inspection builds credibility for larger solution conversations."
        ],
        footerLabel: "Focus",
        footerValue: "Accurate initial deals with transparent unit condition",
        accent: "slate"
      }
    },
    {
      id: "bundle",
      step: "02",
      title: "Bundle",
      cue: "New office • Branches • Servers",
      modal: {
        badge: "Stage 02",
        subtitle: "Commercial Flow",
        title: "Bundle — Use-Case Configurations",
        metric: "Multi-Category",
        metricLabel: "Deal Size",
        summary: "Combines computing, networking infrastructure, and accessories around real operational scenarios.",
        highlights: [
          "Example use cases: new office launches, branch rollouts, or server & backup setups.",
          "Mixing new and second/refurbished units optimizes client capex budgets.",
          "Shifts conversations from unit price comparison to workplace readiness."
        ],
        footerLabel: "Focus",
        footerValue: "Expand basket size through practical solution bundling",
        accent: "slate"
      }
    },
    {
      id: "service",
      step: "03",
      title: "Service",
      cue: "Installation, internet & software",
      modal: {
        badge: "Stage 03",
        subtitle: "Commercial Flow",
        title: "Service — Deployment & Solutions",
        metric: "End-to-End",
        metricLabel: "Delivery",
        summary: "Embeds installation, network setup, internet connectivity, and software development into deliveries.",
        highlights: [
          "Clients receive working systems rather than unopened hardware boxes.",
          "Aligns Sales, engineers, and authorized partners cleanly around project scope.",
          "Protects gross margin beyond pure commodity hardware resale."
        ],
        footerLabel: "Focus",
        footerValue: "Commit only to services verified as ready for execution",
        accent: "slate"
      }
    },
    {
      id: "recurring",
      step: "04",
      title: "Recurring Relationship",
      cue: "Maintenance, upgrades & repeat orders",
      modal: {
        badge: "Stage 04",
        subtitle: "Commercial Flow",
        title: "Recurring Relationship — Long-Term Accounts",
        metric: "Repeat & Retention",
        metricLabel: "Impact",
        summary: "Turns one-off buyers into retained accounts via ongoing maintenance, support, and lifecycle upgrades.",
        highlights: [
          "Anchored by preventive maintenance, troubleshooting, internet subscriptions, and spare parts.",
          "Provides visibility into upcoming refresh cycles and branch expansions.",
          "Stabilizes revenue while reinforcing long-term partner credibility."
        ],
        footerLabel: "Focus",
        footerValue: "Retention built on SLAs and consistent after-sales care",
        accent: "slate"
      }
    }
  ],
  guardrails: [
    {
      id: "refurbished-transparency",
      kicker: "Second / Refurbished Transparency",
      title: "Honest Condition, Inspection & Warranty",
      cue: "Physical grade • Actual specs • QC results • Warranty scope & limits",
      modal: {
        badge: "Transparency Rule",
        subtitle: "Second / Refurbished Units",
        title: "Transparent Second & Refurbished Disclosures",
        summary: "Every second/refurbished quote clearly states actual condition, test results, and warranty limits.",
        highlights: [
          "Disclose physical grade, verified hardware specs, and inspection/QC outcomes upfront.",
          "Define exact warranty coverage and operational boundaries without overpromising.",
          "Help budget-conscious buyers evaluate refurbished value with confidence."
        ],
        footerLabel: "Data Status",
        footerValue: "Official condition grades & warranty terms await internal documentation",
        accent: "slate"
      }
    },
    {
      id: "catalog-boundary",
      kicker: "Catalog & Evidence Boundary",
      title: "Category Overview (Not a 20–30 SKU List)",
      cue: "Full catalog lives in company profile • Official SKUs, brands & services await verification",
      modal: {
        badge: "Catalog Scope",
        subtitle: "Data / Proof to Prepare",
        title: "Slide Matrix vs. Full Company Profile Catalog",
        summary: "This slide maps four strategic offering groups; detailed 20–30 SKU lists belong in the separate profile catalog.",
        highlights: [
          "Required data: priority SKUs, authorized brands, specs, condition grades, and official price lists.",
          "Required proof: deliverable IT and software services confirmed across internal staff or partners.",
          "No brand names, prices, certifications, or warranties are invented before internal sign-off."
        ],
        footerLabel: "Principle",
        footerValue: "Zero fabricated specs, brands, prices, or certifications",
        accent: "slate"
      }
    }
  ]
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide04Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide04Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 4,
  folder: "04",
  sectionId: 1,
  navTitle: {
    in: "Portofolio Produk & Solusi",
    en: "Product & Solution Portfolio"
  },
  headerTitle: {
    in: "Portofolio Produk dan Solusi - Dari SKU ke Use Case",
    en: "Product and Solution Portfolio - From SKU to Use Case"
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
