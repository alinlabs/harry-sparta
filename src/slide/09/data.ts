import { useLanguage } from '@/contexts/LanguageContext';

export type OrgNodeId =
  | 'owner'
  | 'manager'
  | 'div-marketing'
  | 'spv-retail-dist'
  | 'spv-b2b-b2g'
  | 'unit-retail'
  | 'unit-dist'
  | 'unit-b2b'
  | 'unit-b2g';

export type PolicyCardId = 'ownership-assessment' | 'roster-confirmation';

export interface Slide09ModalPayload {
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

export interface OrgNodeItem {
  id: OrgNodeId;
  levelTag: string;
  title: string;
  headcountLabel: string;
  shortScope: string;
  modal: Slide09ModalPayload;
}

export interface HeadcountTableRow {
  id: string;
  roleFunction: string;
  allocation: number;
  scope: string;
}

export interface PolicyCardItem {
  id: PolicyCardId;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide09ModalPayload;
}

export interface Slide09Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  orgChart: {
    sectionTitle: string;
    headcountBadgeText: string;
    proposalCaveat: string;
    coordinationRule: string;
    nodes: Record<OrgNodeId, OrgNodeItem>;
  };
  tableSection: {
    sectionTitle: string;
    columns: {
      roleFunction: string;
      allocation: string;
      scope: string;
    };
    rows: HeadcountTableRow[];
    totalLabel: string;
    totalScopeNote: string;
  };
  policies: PolicyCardItem[];
}

export const slideDataId: Slide09Data = {
  eyebrow: "Struktur Organisasi",
  title: "Commercial Department (Usulan Struktur)",
  subtitle:
    "Memisahkan fungsi penjualan dan pemasaran sesuai kompleksitas kanal — ditetapkan bertahap setelah asesmen tim existing.",
  orgChart: {
    sectionTitle: "Bagan Organisasi (Usulan)",
    headcountBadgeText: "15 Posisi Tim (Manager di luar hitungan – konfirmasi)",
    proposalCaveat: "Usulan pasca-asesmen — bukan perombakan langsung",
    coordinationRule:
      "Garis putus-putus: KAM ↔ AM Wilayah bersifat koordinasi, bukan atasan langsung (1 primary owner di CRM)",
    nodes: {
      owner: {
        id: "owner",
        levelTag: "Puncak Perusahaan",
        title: "Owner",
        headcountLabel: "Puncak Keputusan",
        shortScope: "Arah strategis & keputusan perusahaan",
        modal: {
          badge: "Puncak Organisasi",
          subtitle: "Executive Authority",
          title: "Owner",
          metric: "Puncak",
          metricLabel: "Otoritas Akhir",
          summary:
            "Memegang mandat strategis perusahaan, persetujuan struktur final, alokasi anggaran rekrutmen, serta keputusan eskalasi tingkat akhir.",
          highlights: [
            "Menyetujui target komersial tahunan, kebijakan margin, dan persetujuan pengecualian harga di atas kewenangan Manager.",
            "Memberikan mandat lintas departemen antara Commercial, Finance, Warehouse, dan Operasional.",
            "Mengesahkan struktur final serta penempatan tim pasca-asesmen karyawan existing."
          ],
          footerLabel: "Peran",
          footerValue: "Arah strategis, otoritas anggaran & keputusan akhir",
          accent: "slate"
        }
      },
      manager: {
        id: "manager",
        levelTag: "Departemen Komersial",
        title: "Sales & Marketing Manager",
        headcountLabel: "Di luar 15 (konfirmasi)",
        shortScope: "Divisi Retail & Distribusi • Divisi B2B & B2G • Divisi Marketing",
        modal: {
          badge: "Kepemimpinan Komersial",
          subtitle: "Commercial Department Lead",
          title: "Sales & Marketing Manager",
          metric: "Terpisah",
          metricLabel: "Konfirmasi Hitungan 15",
          summary:
            "Memimpin seluruh divisi di bawah Commercial Department secara terintegrasi dengan batas peran yang jelas.",
          highlights: [
            "Ditampilkan terpisah sambil menunggu konfirmasi apakah Manager termasuk hitungan 15 orang atau di luar 15.",
            "Menyelaraskan target omzet, disiplin gross margin, KPI pipeline, dan kolaborasi lintas divisi.",
            "Keputusan penempatan tim tetap mengacu pada hasil pemetaan serta asesmen karyawan existing."
          ],
          footerLabel: "Status",
          footerValue: "Menunggu konfirmasi definisi headcount & struktur final Owner",
          accent: "slate"
        }
      },
      "div-marketing": {
        id: "div-marketing",
        levelTag: "Portofolio Marketing",
        title: "Divisi Marketing",
        headcountLabel: "1 Posisi Awal",
        shortScope: "Brand & Digital • Analytics • CRM & Lead Gen",
        modal: {
          badge: "Divisi Marketing",
          subtitle: "Peran Gabungan Awal",
          title: "Brand/Digital, Analytics, CRM & Lead Gen",
          metric: "1 Posisi",
          metricLabel: "Initial Combined Role",
          summary:
            "Satu peran awal yang mengawal brand/digital marketing, kampanye lead generation, analitik pemasaran, dan dukungan data CRM.",
          highlights: [
            "Sejajar sebagai divisi setara di bawah Sales & Marketing Manager untuk membangun funnel prospek terukur.",
            "Mencakup Brand/Digital Marketing serta Marketing Analytics & CRM/Data/Retention.",
            "Beban kerja diprioritaskan; dukungan eksternal/outsourcing diajukan bila kapasitas tidak cukup."
          ],
          footerLabel: "Kendali Beban",
          footerValue: "Prioritaskan kanal berdampak leads tercepat & dukung CRM",
          accent: "slate"
        }
      },
      "spv-retail-dist": {
        id: "spv-retail-dist",
        levelTag: "Divisi Retail & Distribusi",
        title: "Supervisor Retail + Distribusi",
        headcountLabel: "1 SPV → 5 Anggota",
        shortScope: "Portofolio Retail & Distribusi",
        modal: {
          badge: "Supervisi Transaksional",
          subtitle: "Kanal Kecepatan & Volume",
          title: "Team Leader / Supervisor Retail & Distribusi",
          metric: "5 Anggota",
          metricLabel: "4 Retail + 1 Distribusi",
          summary:
            "Mengawal ritme harian showroom, marketplace, telemarketing, dan jaringan reseller agar konversi serta perputaran stok terjaga.",
          highlights: [
            "Diprioritaskan dari anggota tim existing yang lolos uji kompetensi dan kepemimpinan.",
            "Mengawasi kecepatan respons leads ritel dan frekuensi repeat order toko komputer.",
            "Berkoordinasi dengan gudang untuk ketersediaan stok harian dan promo barang aging."
          ],
          footerLabel: "Jalur",
          footerValue: "Prioritas promosi internal berbasis hasil asesmen",
          accent: "slate"
        }
      },
      "spv-b2b-b2g": {
        id: "spv-b2b-b2g",
        levelTag: "Divisi B2B & B2G",
        title: "Supervisor B2B + B2G",
        headcountLabel: "1 SPV → 7 Anggota",
        shortScope: "Portofolio B2B & B2G",
        modal: {
          badge: "Supervisi Solusi & Publik",
          subtitle: "Kanal Konsultatif & Tender",
          title: "Team Leader / Supervisor B2B & B2G",
          metric: "7 Anggota",
          metricLabel: "6 B2B + 1 B2G",
          summary:
            "Membina kedisiplinan account planning, pipeline konsultatif korporat, serta kepatuhan proses tender dan e-Catalog.",
          highlights: [
            "Diprioritaskan merekrut dari eksternal apabila asesmen internal menunjukkan celah pengalaman solusi B2B/B2G.",
            "Memastikan satu akun hanya memiliki satu primary owner di CRM walaupun ada koordinasi KAM.",
            "Menjalankan review deal mingguan serta seleksi bid/no-bid untuk paket proyek."
          ],
          footerLabel: "Jalur",
          footerValue: "Opsi rekrutmen eksternal bergantung hasil asesmen tim saat ini",
          accent: "slate"
        }
      },
      "unit-retail": {
        id: "unit-retail",
        levelTag: "Portofolio Retail",
        title: "Tim Retail",
        headcountLabel: "4 Orang",
        shortScope: "Sales Offline • Sales Online • Telemarketing",
        modal: {
          badge: "Portofolio • Retail",
          subtitle: "4 Posisi Penjualan Langsung",
          title: "Komposisi Tim Retail (4 Orang)",
          metric: "4 Orang",
          metricLabel: "Offline • Online • Tele",
          summary:
            "Menangani trafik showroom fisik, kanal marketplace/web/sosial, serta panggilan proaktif telemarketing.",
          highlights: [
            "2 Sales Offline mengawal layanan showroom dan penawaran unit PC/laptop langsung.",
            "1 Sales Online mengelola pesan masuk marketplace, website, dan media sosial.",
            "1 Telemarketing mengolah database leads dan penawaran prospek terukur."
          ],
          footerLabel: "KPI Inti",
          footerValue: "Kecepatan respons, tingkat konversi & basket size",
          accent: "slate"
        }
      },
      "unit-dist": {
        id: "unit-dist",
        levelTag: "Portofolio Distribusi",
        title: "Tim Distribusi",
        headcountLabel: "1 Orang",
        shortScope: "Sales Reseller / Channel",
        modal: {
          badge: "Portofolio • Distribusi",
          subtitle: "1 Posisi Channel Reseller",
          title: "Sales Reseller / Channel (1 Orang)",
          metric: "1 Orang",
          metricLabel: "Dedicated Channel",
          summary:
            "Fokus membina toko komputer dan mitra reseller untuk pengisian stok rutin dengan kontrol piutang ketat.",
          highlights: [
            "Mengelola daftar reseller aktif dan mendorong jadwal order ulang reguler.",
            "Menjaga disiplin tier harga agar tidak kanibal dengan penjualan ritel langsung.",
            "Memverifikasi kelayakan batas kredit bersama Finance sebelum pengiriman volume."
          ],
          footerLabel: "KPI Inti",
          footerValue: "Jumlah reseller aktif, repeat order & keteraturan bayar",
          accent: "slate"
        }
      },
      "unit-b2b": {
        id: "unit-b2b",
        levelTag: "Portofolio B2B",
        title: "Tim B2B",
        headcountLabel: "6 Orang",
        shortScope: "AM Wilayah (Jakarta, Tgr/Tangsel/Cilegon, Bks/Ckr/Krw) • KAM",
        modal: {
          badge: "Portofolio • B2B",
          subtitle: "5 AM Wilayah + 1 KAM Sejajar",
          title: "Komposisi Tim B2B (6 Orang)",
          metric: "6 Orang",
          metricLabel: "Wilayah + Key Account",
          summary:
            "Membagi cakupan wilayah Jabodetabek-Banten secara jelas sambil menempatkan KAM sejajar pada akun strategis.",
          highlights: [
            "3 AM Jakarta, 1 AM Tangerang/Tangsel/Cilegon, 1 AM Bekasi/Cikarang/Karawang.",
            "1 Key Account Manager (KAM) memegang akun strategis — BUKAN atasan dari para AM wilayah.",
            "Koordinasi KAM dan AM digambarkan dengan garis putus-putus; satu akun = satu primary owner di CRM."
          ],
          footerLabel: "Aturan CRM",
          footerValue: "Industri dapat menjadi overlay, tetapi ownership akun tunggal",
          accent: "slate"
        }
      },
      "unit-b2g": {
        id: "unit-b2g",
        levelTag: "Portofolio B2G",
        title: "Tim B2G",
        headcountLabel: "1 Orang",
        shortScope: "AM Pemerintah • Badan / Lembaga • Pemda",
        modal: {
          badge: "Portofolio • B2G",
          subtitle: "1 Posisi Sektor Publik",
          title: "Account Manager B2G (1 Orang)",
          metric: "1 Orang",
          metricLabel: "Pengadaan Publik",
          summary:
            "Mengelola penjajakan instansi pemerintah, BUMN, dan layanan publik secara patuh aturan dan selektif.",
          highlights: [
            "Fokus pada e-Catalog, tender relevan, dan kemitraan sebagai subcon/maincon.",
            "Memastikan kepatuhan spesifikasi barang baru vs second sesuai syarat paket pengadaan.",
            "Bekerja di bawah pengawasan Supervisor B2B+B2G untuk seleksi bid/no-bid."
          ],
          footerLabel: "KPI Inti",
          footerValue: "Kelengkapan administrasi, seleksi peluang & kepatuhan",
          accent: "slate"
        }
      }
    }
  },
  tableSection: {
    sectionTitle: "Tabel Alokasi Headcount per Fungsi",
    columns: {
      roleFunction: "Fungsi",
      allocation: "Alokasi",
      scope: "Ruang lingkup"
    },
    rows: [
      {
        id: "row-retail",
        roleFunction: "Retail",
        allocation: 4,
        scope: "2 Sales Offline; 1 Sales Online; 1 Telemarketing"
      },
      {
        id: "row-dist",
        roleFunction: "Distribusi",
        allocation: 1,
        scope: "Sales Reseller / Channel"
      },
      {
        id: "row-b2b",
        roleFunction: "B2B",
        allocation: 6,
        scope: "3 AM Jakarta; 1 AM Tangerang/Tangsel/Cilegon; 1 AM Bekasi/Cikarang/Karawang; 1 KAM"
      },
      {
        id: "row-b2g",
        roleFunction: "B2G",
        allocation: 1,
        scope: "AM pemerintahan / badan / lembaga / Pemda"
      },
      {
        id: "row-marketing",
        roleFunction: "Marketing",
        allocation: 1,
        scope: "Brand/Digital, Analytics, CRM, Lead Generation (peran gabungan awal)"
      },
      {
        id: "row-spv",
        roleFunction: "Supervisor",
        allocation: 2,
        scope: "1 Retail+Distribusi; 1 B2B+B2G"
      }
    ],
    totalLabel: "TOTAL",
    totalScopeNote: "Di luar Manager; perlu konfirmasi definisi headcount"
  },
  policies: [
    {
      id: "ownership-assessment",
      tag: "Tata Kelola & Asesmen",
      title: "Penempatan Berbasis Asesmen",
      keywords: "1 owner CRM • KAM sejajar AM • Bukan rombak total",
      modal: {
        badge: "Prinsip Organisasi",
        subtitle: "Batas Klaim & Transisi",
        title: "Penempatan & Rekrutmen Pasca-Asesmen",
        summary:
          "Struktur ini adalah rancangan kerja yang disesuaikan sesudah pemetaan tim existing — bukan perombakan serentak tanpa evaluasi.",
        highlights: [
          "Penempatan staf ke posisi Retail, Distribusi, B2B, B2G, atau Supervisor ditentukan dari hasil asesmen.",
          "Rekrutmen eksternal dijalankan selektif bila asesmen internal belum menutup kebutuhan kompetensi.",
          "Industri spesifik dapat menjadi overlay, namun setiap akun tetap punya satu primary owner di CRM."
        ],
        footerLabel: "Aturan",
        footerValue: "KAM tidak menjadi line manager atas regional AM",
        accent: "slate"
      }
    },
    {
      id: "roster-confirmation",
      tag: "Bukti & Konfirmasi",
      title: "Data Roster & Definisi 15 Orang",
      keywords: "Roster aktual & payroll • Konfirmasi posisi SPV/Manager",
      modal: {
        badge: "Data Wajib Disiapkan",
        subtitle: "Audit SDM Eksisting",
        title: "Daftar Data & Konfirmasi Headcount",
        summary:
          "Finalisasi bagan organisasi memerlukan verifikasi roster karyawan saat ini dan definisi tepat batas 15 orang.",
        highlights: [
          "Data roster aktual: nama/jumlah karyawan, jabatan, lokasi kerja, keahlian, payroll band, dan atasan saat ini.",
          "Konfirmasi resmi apakah 2 Team Leader/Supervisor termasuk dalam kuota 15 orang atau tambahan di luar 15.",
          "Konfirmasi ruang lingkup rekrutmen bertahap sesuai kemampuan anggaran perusahaan."
        ],
        footerLabel: "Keputusan",
        footerValue: "Memerlukan persetujuan Direksi dan HR sebelum implementasi",
        accent: "slate"
      }
    }
  ]
};

export const slideDataEn: Slide09Data = {
  eyebrow: "Organization Structure",
  title: "Commercial Department (Proposed Structure)",
  subtitle:
    "Separating sales and marketing by channel complexity — phased implementation subject to existing-team assessment.",
  orgChart: {
    sectionTitle: "Organization Chart (Proposal)",
    headcountBadgeText: "15 team positions (manager excluded – confirm)",
    proposalCaveat: "Post-assessment proposal — not an immediate overhaul",
    coordinationRule:
      "Dashed line: KAM ↔ Regional AMs coordinate laterally, NOT a reporting hierarchy (1 CRM primary owner)",
    nodes: {
      owner: {
        id: "owner",
        levelTag: "Company Peak",
        title: "Owner",
        headcountLabel: "Executive Authority",
        shortScope: "Strategic direction & final company sign-off",
        modal: {
          badge: "Executive Peak",
          subtitle: "Executive Authority",
          title: "Owner",
          metric: "Peak",
          metricLabel: "Final Sign-Off",
          summary:
            "Holds company-wide strategic mandate, final organization approval, hiring budget sign-off, and top-tier escalation authority.",
          highlights: [
            "Approves annual commercial targets, margin policy, and exception discounts above Manager threshold.",
            "Sets cross-department mandates across Commercial, Finance, Warehouse, and Operations.",
            "Signs off on final team placement following existing staff assessment."
          ],
          footerLabel: "Role",
          footerValue: "Strategic direction, budget authority & final sign-off",
          accent: "slate"
        }
      },
      manager: {
        id: "manager",
        levelTag: "Commercial Department",
        title: "Sales & Marketing Manager",
        headcountLabel: "Outside 15 (confirm)",
        shortScope: "Retail & Distribution • B2B & B2G • Marketing Division",
        modal: {
          badge: "Commercial Leadership",
          subtitle: "Commercial Department Lead",
          title: "Sales & Marketing Manager",
          metric: "Separate",
          metricLabel: "Headcount Scope Check",
          summary:
            "Leads all divisions inside the Commercial Department under clear operational accountability.",
          highlights: [
            "Displayed separately pending confirmation on whether the Manager is included within or outside the 15 headcount.",
            "Aligns revenue targets, gross margin discipline, pipeline KPIs, and cross-division workflows.",
            "Final seat placement remains subject to mapping and assessing the existing workforce."
          ],
          footerLabel: "Status",
          footerValue: "Pending headcount definition confirmation & Owner sign-off",
          accent: "slate"
        }
      },
      "div-marketing": {
        id: "div-marketing",
        levelTag: "Marketing Portfolio",
        title: "Marketing Division",
        headcountLabel: "1 Initial Position",
        shortScope: "Brand & Digital • Analytics • CRM & Lead Gen",
        modal: {
          badge: "Marketing Division",
          subtitle: "Initial Combined Role",
          title: "Brand/Digital, Analytics, CRM & Lead Gen",
          metric: "1 Role",
          metricLabel: "Initial Combined Role",
          summary:
            "Single initial role covering brand/digital campaigns, lead generation, marketing analytics, and CRM data support.",
          highlights: [
            "Positioned as an equal division under the Sales & Marketing Manager to build a measurable inbound lead funnel.",
            "Combines Brand/Digital Marketing with Marketing Analytics & CRM/Retention support.",
            "Workload must be prioritized, with external/outsourced support used if capacity overflows."
          ],
          footerLabel: "Capacity Rule",
          footerValue: "Focus first on highest-converting lead channels & CRM hygiene",
          accent: "slate"
        }
      },
      "spv-retail-dist": {
        id: "spv-retail-dist",
        levelTag: "Retail & Distribution",
        title: "Supervisor Retail + Distribution",
        headcountLabel: "1 SPV → 5 Reps",
        shortScope: "Retail & Distribution Portfolios",
        modal: {
          badge: "Transactional Supervision",
          subtitle: "Velocity & Volume Channels",
          title: "Team Leader / Supervisor Retail & Distribution",
          metric: "5 Reps",
          metricLabel: "4 Retail + 1 Distribution",
          summary:
            "Coaches daily showroom, online, telemarketing, and reseller reps to sustain conversion speed and stock turns.",
          highlights: [
            "Prioritizes promoting a qualified existing team member pending competency assessment.",
            "Monitors lead response speed in Retail and reorder cadence across active resellers.",
            "Coordinates closely with Warehouse on ready stock and aging-inventory pushes."
          ],
          footerLabel: "Path",
          footerValue: "Internal promotion priority verified through assessment",
          accent: "slate"
        }
      },
      "spv-b2b-b2g": {
        id: "spv-b2b-b2g",
        levelTag: "B2B & B2G",
        title: "Supervisor B2B + B2G",
        headcountLabel: "1 SPV → 7 Reps",
        shortScope: "B2B & B2G Portfolios",
        modal: {
          badge: "Solution & Tender Supervision",
          subtitle: "Consultative & Public Channels",
          title: "Team Leader / Supervisor B2B & B2G",
          metric: "7 Reps",
          metricLabel: "6 B2B + 1 B2G",
          summary:
            "Drives account planning discipline, enterprise consultative selling, and compliant e-Catalog/tender bidding.",
          highlights: [
            "Prioritized for external hire if internal assessment confirms solution/tender leadership gaps.",
            "Enforces single primary account ownership in CRM alongside KAM coordination.",
            "Leads weekly deal reviews and bid/no-bid screening for complex tenders."
          ],
          footerLabel: "Path",
          footerValue: "External hiring option validated against internal assessment",
          accent: "slate"
        }
      },
      "unit-retail": {
        id: "unit-retail",
        levelTag: "Retail Portfolio",
        title: "Retail Team",
        headcountLabel: "4 Reps",
        shortScope: "Offline Sales • Online Sales • Telemarketing",
        modal: {
          badge: "Portfolio • Retail",
          subtitle: "4 Direct Consumer Roles",
          title: "Retail Team Allocation (4 Reps)",
          metric: "4 Reps",
          metricLabel: "Offline • Online • Tele",
          summary:
            "Handles walk-in showroom buyers, marketplace/web inquiries, and outbound database follow-up.",
          highlights: [
            "2 Offline Sales reps serving walk-in showroom buyers and direct PC/laptop quotes.",
            "1 Online Sales rep managing marketplace, website, and social media inquiries.",
            "1 Telemarketing rep qualifying inbound/outbound leads and repeat calls."
          ],
          footerLabel: "Core KPI",
          footerValue: "Lead response speed, conversion rate & basket size",
          accent: "slate"
        }
      },
      "unit-dist": {
        id: "unit-dist",
        levelTag: "Distribution Portfolio",
        title: "Distribution Team",
        headcountLabel: "1 Rep",
        shortScope: "Reseller / Channel Sales",
        modal: {
          badge: "Portfolio • Distribution",
          subtitle: "1 Channel Partner Role",
          title: "Reseller / Channel Sales (1 Rep)",
          metric: "1 Rep",
          metricLabel: "Dedicated Channel",
          summary:
            "Manages computer stores and recurring reseller partners with structured pricing tiers and credit discipline.",
          highlights: [
            "Maintains active buying resellers and drives recurring monthly restocks.",
            "Protects tiered pricing discipline to prevent direct-retail channel conflict.",
            "Verifies credit limits and receivables health with Finance prior to dispatch."
          ],
          footerLabel: "Core KPI",
          footerValue: "Active resellers, repeat orders & AR compliance",
          accent: "slate"
        }
      },
      "unit-b2b": {
        id: "unit-b2b",
        levelTag: "B2B Portfolio",
        title: "B2B Team",
        headcountLabel: "6 Reps",
        shortScope: "Regional AMs (Jakarta, Tgr/Cilegon, Bks/Karawang) • KAM",
        modal: {
          badge: "Portfolio • B2B",
          subtitle: "5 Regional AMs + 1 Peer KAM",
          title: "B2B Team Allocation (6 Reps)",
          metric: "6 Reps",
          metricLabel: "Regional + Key Account",
          summary:
            "Covers Greater Jakarta-Banten industrial zones clearly while placing KAM as a peer owner on strategic accounts.",
          highlights: [
            "3 Jakarta AMs, 1 Tangerang/Tangsel/Cilegon AM, 1 Bekasi/Cikarang/Karawang AM.",
            "1 Key Account Manager (KAM) owns strategic accounts — NOT the line manager of regional AMs.",
            "KAM and AM coordinate via dashed alignment; every account holds one primary CRM owner."
          ],
          footerLabel: "CRM Rule",
          footerValue: "Industry expertise may overlay, but account ownership stays singular",
          accent: "slate"
        }
      },
      "unit-b2g": {
        id: "unit-b2g",
        levelTag: "B2G Portfolio",
        title: "B2G Team",
        headcountLabel: "1 Rep",
        shortScope: "Public Sector • Ministries / Agencies • Regional Gov AM",
        modal: {
          badge: "Portfolio • B2G",
          subtitle: "1 Public Procurement Role",
          title: "B2G Account Manager (1 Rep)",
          metric: "1 Rep",
          metricLabel: "Public Sector",
          summary:
            "Develops compliant ministries, SOEs, and local government accounts via subcon partnerships and e-Catalog.",
          highlights: [
            "Focuses on e-Catalog listings, eligible tenders, and subcon/maincon teaming.",
            "Enforces strict new-vs-refurbished product rules per procurement package.",
            "Operates under Supervisor B2B+B2G review for bid/no-bid qualification."
          ],
          footerLabel: "Core KPI",
          footerValue: "Documentation readiness, bid selectivity & compliance",
          accent: "slate"
        }
      }
    }
  },
  tableSection: {
    sectionTitle: "Headcount Allocation by Function",
    columns: {
      roleFunction: "Function",
      allocation: "Count",
      scope: "Scope"
    },
    rows: [
      {
        id: "row-retail",
        roleFunction: "Retail",
        allocation: 4,
        scope: "2 Offline Sales; 1 Online Sales; 1 Telemarketing"
      },
      {
        id: "row-dist",
        roleFunction: "Distribution",
        allocation: 1,
        scope: "Reseller / Channel Sales"
      },
      {
        id: "row-b2b",
        roleFunction: "B2B",
        allocation: 6,
        scope: "3 Jakarta AMs; 1 Tangerang/Tangsel/Cilegon AM; 1 Bekasi/Cikarang/Karawang AM; 1 KAM"
      },
      {
        id: "row-b2g",
        roleFunction: "B2G",
        allocation: 1,
        scope: "Ministries / Agencies / Regional Gov AM"
      },
      {
        id: "row-marketing",
        roleFunction: "Marketing",
        allocation: 1,
        scope: "Brand/Digital, Analytics, CRM, Lead Generation (initial combined role)"
      },
      {
        id: "row-spv",
        roleFunction: "Supervisor",
        allocation: 2,
        scope: "1 Retail+Distribution; 1 B2B+B2G"
      }
    ],
    totalLabel: "TOTAL",
    totalScopeNote: "Excludes Manager; confirm headcount definition"
  },
  policies: [
    {
      id: "ownership-assessment",
      tag: "Governance & Assessment",
      title: "Assessment-Driven Placement",
      keywords: "1 CRM owner • KAM lateral to AM • No sudden overhaul",
      modal: {
        badge: "Organization Principle",
        subtitle: "Claim Boundary & Transition",
        title: "Placement & Hiring Subject to Assessment",
        summary:
          "This chart is an operating proposal calibrated after assessing current staff — not an abrupt team overhaul.",
        highlights: [
          "Assignments across Retail, Distribution, B2B, B2G, and Supervisors depend on assessment findings.",
          "External hiring closes verified capability gaps selectively over time.",
          "Vertical expertise acts as an overlay while preserving single primary ownership in CRM."
        ],
        footerLabel: "Rule",
        footerValue: "KAM has no line-management authority over regional AMs",
        accent: "slate"
      }
    },
    {
      id: "roster-confirmation",
      tag: "Required Proof & Check",
      title: "Roster & 15-Seat Confirmation",
      keywords: "Current roster & payroll • Confirm SPV/Manager scope",
      modal: {
        badge: "Required Evidence",
        subtitle: "Workforce Baseline Audit",
        title: "Roster Verification & Headcount Scope",
        summary:
          "Finalizing the organization chart requires validating existing staff records and the exact 15-headcount boundary.",
        highlights: [
          "Current roster audit: titles, work locations, skills, payroll bands, and current reporting lines.",
          "Confirm whether the 2 Team Leaders/Supervisors sit inside or outside the 15-person count.",
          "Align phased recruitment timing with company budget approvals."
        ],
        footerLabel: "Approval",
        footerValue: "Requires Director and HR sign-off prior to implementation",
        accent: "slate"
      }
    }
  ]
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide09Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide09Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 9,
  folder: "09",
  sectionId: 6,
  navTitle: {
    in: "Struktur Organisasi",
    en: "Organization Structure"
  },
  headerTitle: {
    in: "Struktur Organisasi - Commercial Department",
    en: "Organization Structure - Commercial Department"
  },
  category: {
    in: "III. Membangun Organisasi dan Kemampuan",
    en: "III. Building Organization & Capabilities"
  },
  section: {
    in: "III. Membangun Organisasi dan Kemampuan",
    en: "III. Building Organization & Capabilities"
  }
};
