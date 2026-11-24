import { useLanguage } from '@/contexts/LanguageContext';
import type { LadderLevelId, DecisionStepId, InstitutionTypeId } from './utils';

export interface Slide15ModalPayload {
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

export interface LadderStepItem {
  id: LadderLevelId;
  levelCode: string;
  title: string;
  gateRule: string;
  keywords: string;
  modal: Slide15ModalPayload;
}

export interface DecisionFlowStepItem {
  id: DecisionStepId;
  stepCode: string;
  title: string;
  cue: string;
  modal: Slide15ModalPayload;
}

export interface RegulationRefItem {
  code: string;
  title: string;
  effectiveDate: string;
  modal: Slide15ModalPayload;
}

export interface InstitutionTargetItem {
  id: InstitutionTypeId;
  title: string;
  trackCue: string;
  modal: Slide15ModalPayload;
}

export interface Slide15Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  tamCaveatCue: string;
  ladderSection: {
    sectionTitle: string;
    sequenceCue: string;
    steps: LadderStepItem[];
  };
  decisionSection: {
    sectionTitle: string;
    ruleCue: string;
    steps: DecisionFlowStepItem[];
    regTitle: string;
    regulations: RegulationRefItem[];
  };
  accountsSection: {
    sectionTitle: string;
    entityDiffNote: string;
    accounts: InstitutionTargetItem[];
  };
  caveatFooter: string;
}

export const slideDataId: Slide15Data = {
  eyebrow: "Masuk Pasar Sektor Publik Secara Patuh & Bertahap",
  title: "B2G Go-to-Market: Jalur Subcon, E-Purchasing, dan Maincon",
  subtitle:
    "Memilih peluang sesuai kelayakan produk, regulasi, margin, dan arus kas; membangun rekam jejak lewat kemitraan sebelum naik menjadi maincon.",
  tamCaveatCue: "Rp911,7 T [R5] = Total Belanja Pengadaan Nasional, Bukan TAM Satu Penyedia",
  ladderSection: {
    sectionTitle: "Tangga Kapabilitas 3 Tingkat",
    sequenceCue: "Vendor Readiness → Subcon/Partner Delivery → Qualified Maincon",
    steps: [
      {
        id: "vendor-readiness",
        levelCode: "Tahap 01",
        title: "Vendor Readiness",
        gateRule: "Fondasi Kepatuhan & Verifikasi Paket",
        keywords: "Legalitas & KBLI • Akun penyedia • Pajak • Kategori & garansi",
        modal: {
          badge: "Tingkat 01 • Vendor Readiness",
          subtitle: "Prasyarat Masuk B2G",
          title: "Checklist Kesiapan Legalitas, Produk & Administrasi",
          metric: "Wajib Siap",
          metricLabel: "Status Awal",
          summary:
            "Memastikan badan usaha, akun penyedia, kategori produk, garansi, dan kapasitas pengiriman terverifikasi sebelum menawar.",
          highlights: [
            "Menyiapkan legalitas, KBLI relevan, pajak, dukungan prinsipal bila wajib, dan status produk.",
            "Verifikasi dilakukan per paket dan per kategori — tidak menyamaratakan kelayakan seluruh unit.",
            "Produk refurbished tidak boleh dijamin otomatis lolos di semua pengadaan pemerintah."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Dokumen legal, KBLI, status dukungan prinsipal & daftar RUP awal",
          accent: "slate"
        }
      },
      {
        id: "subcon-partner",
        levelCode: "Tahap 02",
        title: "Subcon / Partner Delivery",
        gateRule: "Bangun Rekam Jejak Terkendali",
        keywords: "Scope jelas • Cek margin • Termin bayar • Klausul subcon & kas",
        modal: {
          badge: "Tingkat 02 • Subcon / Partner Delivery",
          subtitle: "Jalur Masuk Realistis",
          title: "Kemitraan Subkontraktor dengan Scope & Proteksi Kas Jelas",
          metric: "Kemitraan",
          metricLabel: "Bangun Track Record",
          summary:
            "Memulai kontribusi melalui proyek bersama maincon untuk membangun database pengalaman sambil menjaga margin dan arus kas.",
          highlights: [
            "Menetapkan scope pekerjaan yang terukur serta kewajiban pengiriman dan garansi tertulis.",
            "Wajib mengevaluasi margin bersih, payment terms, klausul subkontrak, dan ketahanan kas sebelum komitmen.",
            "Menjembatani proyek yang mensyaratkan kualifikasi atau pengalaman maincon terdahulu."
          ],
          footerLabel: "Pengaman",
          footerValue: "Dilarang berkomitmen tanpa review klausul bayar & kapasitas kas",
          accent: "slate"
        }
      },
      {
        id: "qualified-maincon",
        levelCode: "Tahap 03",
        title: "Qualified Maincon",
        gateRule: "Gerbang Kontraktor Utama",
        keywords: "Rekam jejak terbukti • Teknis & admin siap • Finansial memadai",
        modal: {
          badge: "Tingkat 03 • Qualified Maincon",
          subtitle: "Ekspansi Bertahap",
          title: "Naik ke Kontraktor Utama Setelah Kapasitas & Rekam Jejak Terpenuhi",
          metric: "Tervalidasi",
          metricLabel: "Syarat Naik Level",
          summary:
            "Posisi maincon ditempuh hanya setelah pengalaman proyek, SDM teknis, tata kelola admin, dan pendanaan terbukti siap.",
          highlights: [
            "Mengelola langsung tender/seleksi penyedia atau E-Purchasing Katalog Elektronik sesuai ketentuan.",
            "Didukung rekam jejak penyelesaian kontrak, histori menang/kalah, serta kapasitas garansi & support.",
            "Tidak pernah menjanjikan kemenangan tender secara sepihak."
          ],
          footerLabel: "Standar",
          footerValue: "Pertumbuhan bertahap berbasis rekam jejak & kesehatan keuangan",
          accent: "red"
        }
      }
    ]
  },
  decisionSection: {
    sectionTitle: "Alur Keputusan Bid / No-Bid (5 Tahap)",
    ruleCue: "Seleksi Peluang — Bukan Kejar Semua Tender",
    steps: [
      {
        id: "category-check",
        stepCode: "01",
        title: "Product / Service Category",
        cue: "Cocokkan portofolio & stok",
        modal: {
          badge: "Langkah 01 • Cek Kategori",
          subtitle: "Alur Bid / No-Bid",
          title: "Kesesuaian Kategori Produk/Jasa dengan Kapabilitas Internal",
          summary: "Memastikan item pengadaan berada dalam kompetensi produk, teknis, dan stok yang layak jual.",
          highlights: [
            "Cek apakah kebutuhan berupa server, networking, perangkat end-user, atau layanan IT.",
            "Tolak dini bila spesifikasi menuntut item atau sertifikasi yang tidak dapat dipenuhi."
          ],
          footerLabel: "Filter",
          footerValue: "Hanya lanjut bila barang/jasa berada di lingkup kompetensi nyata",
          accent: "slate"
        }
      },
      {
        id: "catalog-check",
        stepCode: "02",
        title: "Catalog Availability?",
        cue: "Cek kurasi & wajib E-Purchasing [R2]",
        modal: {
          badge: "Langkah 02 • Cek Katalog Elektronik",
          subtitle: "Peraturan LKPP 2/2026 [R2]",
          title: "Pemeriksaan Ketersediaan & Ketentuan Katalog Elektronik",
          summary: "Memeriksa apakah barang/jasa tersedia dan terkurasi pada Katalog Elektronik sesuai ketentuan berlaku.",
          highlights: [
            "Ringkasan Per LKPP 2/2026 [R2]: e-purchasing wajib bila barang/jasa tersedia di katalog (dengan pengecualian sesuai aturan).",
            "Metode e-purchasing mencakup pembelian langsung, negosiasi harga, dan mini-kompetisi."
          ],
          footerLabel: "Rujukan",
          footerValue: "Periksa syarat penayangan & kategori pada Katalog Elektronik saat peluang muncul",
          accent: "slate"
        }
      },
      {
        id: "method-terms",
        stepCode: "03",
        title: "Procurement Method & Terms",
        cue: "E-Purchasing / Tender / Subcon / BUMN",
        modal: {
          badge: "Langkah 03 • Metode & Syarat",
          subtitle: "4 Jalur Masuk Pasar",
          title: "Identifikasi Jalur Pengadaan & Aturan Entitas Pembeli",
          summary: "Membedakan mekanisme E-Purchasing, tender penyedia [R3], subcon maincon, dan portal BUMN/BUMD.",
          highlights: [
            "Pengadaan instansi pemerintah mengikuti Perpres 46/2025 [R1] serta Per LKPP 2/2026 & 3/2026 [R2–R3].",
            "BUMN, BUMD, dan korporasi memiliki sistem serta syarat pengadaan tersendiri yang wajib dicek per entitas."
          ],
          footerLabel: "Penting",
          footerValue: "Pisahkan syarat Katalog pemerintah dengan e-procurement BUMN/BUMD",
          accent: "slate"
        }
      },
      {
        id: "compliance-check",
        stepCode: "04",
        title: "Eligibility & Compliance",
        cue: "Spek, refurbished, garansi & kas",
        modal: {
          badge: "Langkah 04 • Uji Kelayakan",
          subtitle: "Verifikasi Per Paket & Kategori",
          title: "Audit Dokumen, Dukungan Prinsipal, Kondisi Barang & Arus Kas",
          summary: "Memverifikasi kelengkapan syarat administrasi, keabsahan spesifikasi barang baru/refurbished, serta kemampuan pembiayaan.",
          highlights: [
            "Memeriksa apakah paket mensyaratkan barang baru/TKDN/sertifikat prinsipal sehingga refurbished tidak memenuhi syarat.",
            "Menilai margin bersih, denda keterlambatan, kewajiban garansi purnajual, dan ketahanan termin bayar."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Jangan pernah berasumsi seluruh barang refurbished layak ikut paket pemerintah",
          accent: "red"
        }
      },
      {
        id: "bid-no-bid",
        stepCode: "05",
        title: "Bid / No-Bid Decision",
        cue: "Putuskan lanjut atau mundur disiplin",
        modal: {
          badge: "Langkah 05 • Keputusan Akhir",
          subtitle: "Bid / No-Bid Governance",
          title: "Keputusan Disiplin Berbasis Kelayakan, Margin & Risiko",
          summary: "Mengambil keputusan Bid atau No-Bid secara objektif bersama Finance, Teknis, dan Pimpinan.",
          highlights: [
            "Bid: hanya bila legalitas lengkap, spek tervalidasi, margin aman, dan arus kas sanggup menopang termin.",
            "No-Bid: lebih baik mundur awal daripada memaksakan paket berisiko gagal kirim atau gagal bayar."
          ],
          footerLabel: "Hasil",
          footerValue: "Sumber daya fokus pada peluang dengan tingkat kesiapan tertinggi",
          accent: "red"
        }
      }
    ],
    regTitle: "Konteks Regulasi Wajib Cek Saat Peluang Muncul",
    regulations: [
      {
        code: "[R1]",
        title: "Perpres 46/2025",
        effectiveDate: "30 Apr 2025",
        modal: {
          badge: "Regulasi [R1]",
          subtitle: "Perubahan Kedua Perpres 16/2018",
          title: "Peraturan Presiden Nomor 46 Tahun 2025",
          metric: "30 Apr 2025",
          metricLabel: "Ditetapkan & Berlaku",
          summary:
            "Payung hukum terbaru perubahan kedua tata cara pengadaan barang dan jasa pemerintah.",
          highlights: [
            "Menjadi rujukan dasar penyesuaian metode pengadaan, preferensi produk, dan peran pelaku usaha.",
            "Wajib dicek kesesuaiannya pada setiap dokumen paket pengadaan."
          ],
          footerLabel: "Tindakan",
          footerValue: "Verifikasi aturan turunan yang berlaku pada waktu penawaran",
          accent: "slate"
        }
      },
      {
        code: "[R2]",
        title: "Per LKPP 2/2026",
        effectiveDate: "1 Sep 2026",
        modal: {
          badge: "Regulasi [R2]",
          subtitle: "Katalog Elektronik",
          title: "Peraturan LKPP Nomor 2 Tahun 2026",
          metric: "1 Sep 2026",
          metricLabel: "Mulai Berlaku",
          summary:
            "Mengatur pengelolaan katalog, pencantuman/kurasi produk, mekanisme e-purchasing, dan pengawasan.",
          highlights: [
            "Menggantikan Per LKPP 9/2021; e-purchasing wajib bila barang/jasa tersedia di katalog sesuai ketentuan.",
            "Mencakup metode pembelian langsung, negosiasi harga, dan mini-kompetisi."
          ],
          footerLabel: "Tindakan",
          footerValue: "Cek syarat pencantuman & kurasi kategori produk IT sebelum tayang",
          accent: "slate"
        }
      },
      {
        code: "[R3]",
        title: "Per LKPP 3/2026",
        effectiveDate: "22 Sep 2026",
        modal: {
          badge: "Regulasi [R3]",
          subtitle: "Pengadaan Melalui Penyedia",
          title: "Peraturan LKPP Nomor 3 Tahun 2026",
          metric: "22 Sep 2026",
          metricLabel: "Ditetapkan / Berlaku",
          summary:
            "Pedoman persiapan dan pelaksanaan pengadaan barang/jasa pemerintah melalui penyedia (mencabut Per LKPP 12/2021 & 4/2024).",
          highlights: [
            "Mengatur kualifikasi penyedia, evaluasi penawaran tender/seleksi, dan kontrak pelaksanaan.",
            "Harus dibaca per paket sebelum menyusun penawaran maincon maupun subcon."
          ],
          footerLabel: "Tindakan",
          footerValue: "Pastikan dokumen pemilihan terbaru digunakan sebagai acuan",
          accent: "slate"
        }
      },
      {
        code: "[R4]",
        title: "SE Ka. LKPP 3/2026",
        effectiveDate: "29 Okt 2026",
        modal: {
          badge: "Regulasi [R4]",
          subtitle: "Surat Edaran Penjelasan",
          title: "Surat Edaran Kepala LKPP Nomor 3 Tahun 2026",
          metric: "29 Okt 2026",
          metricLabel: "Tanggal Terbit",
          summary:
            "Memberikan penjelasan teknis pelaksanaan atas ketentuan pada Peraturan LKPP Nomor 3 Tahun 2026.",
          highlights: [
            "Naskah surat edaran wajib diperiksa langsung saat menyiapkan prosedur atau tender spesifik.",
            "Menghindari penafsiran keliru atas ketentuan transisi dan dokumen penyedia."
          ],
          footerLabel: "Tindakan",
          footerValue: "Cek langsung isi SE pada JDIH LKPP saat ada peluang aktif",
          accent: "slate"
        }
      }
    ]
  },
  accountsSection: {
    sectionTitle: "B2G Target Accounts (Menurut Tipe Institusi)",
    entityDiffNote: "Catatan: Kementerian/Pemda vs BUMN/BUMD memiliki aturan & sistem berbeda — verifikasi per entitas & per paket",
    accounts: [
      {
        id: "ministry-agency",
        title: "Kementerian & Lembaga",
        trackCue: "Katalog Elektronik / Tender [R1–R4]",
        modal: {
          badge: "Institusi • Kementerian & Badan/Lembaga",
          subtitle: "Sektor Publik Pusat",
          title: "Kementerian dan Badan / Lembaga Negara",
          summary: "Pengadaan pusat melalui RUP (SIRUP), E-Purchasing Katalog Elektronik, atau tender sesuai aturan LKPP.",
          highlights: [
            "Umumnya diakses melalui produk terkurasi di Katalog atau kemitraan dengan maincon pemegang kontrak.",
            "Cek spesifikasi teknis, sertifikasi, serta termin pembayaran APBN."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Periksa syarat paket & kelengkapan legalitas pada tiap satuan kerja",
          accent: "slate"
        }
      },
      {
        id: "pemda",
        title: "Pemerintah Daerah",
        trackCue: "E-Purchasing & APBD Daerah",
        modal: {
          badge: "Institusi • Pemda",
          subtitle: "Pemerintah Provinsi / Kab / Kota",
          title: "Pemerintah Daerah (Pemda)",
          summary: "Pemenuhan perangkat kantor, infrastruktur jaringan, dan layanan IT satuan kerja daerah.",
          highlights: [
            "Memantau jadwal RUP daerah serta persyaratan katalog lokal/nasional.",
            "Menilai risiko keterlambatan pencairan APBD terhadap arus kas pengiriman."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Cek jadwal anggaran daerah & kesiapan layanan support lokal",
          accent: "slate"
        }
      },
      {
        id: "bpd",
        title: "BPD",
        trackCue: "Bank Pembangunan Daerah",
        modal: {
          badge: "Institusi • BPD",
          subtitle: "Perbankan Daerah",
          title: "Bank Pembangunan Daerah (BPD)",
          summary: "Menggabungkan kebutuhan infrastruktur IT perbankan dengan aturan pengadaan internal BPD masing-masing.",
          highlights: [
            "Memiliki standar kepatuhan IT perbankan, jaminan garansi, dan seleksi vendor internal tersendiri.",
            "Beda aturan dengan tender satuan kerja dinas pemerintah biasa."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Cek prosedur pendaftaran vendor & persyaratan teknis per BPD",
          accent: "slate"
        }
      },
      {
        id: "sudin-upt",
        title: "Badan / Sudin / UPT",
        trackCue: "Unit Pelaksana & Dinas Teknis",
        modal: {
          badge: "Institusi • Badan / Sudin / UPT",
          subtitle: "Satuan Kerja Operasional",
          title: "Badan, Suku Dinas (Sudin) & Unit Pelaksana Teknis (UPT)",
          summary: "Belanja perangkat kerja, jaringan unit layanan, serta pemeliharaan operasional tingkat kota/kabupaten.",
          highlights: [
            "Membutuhkan respons instalasi cepat dan kejelasan jaminan purnajual per lokasi unit.",
            "Peluang dapat dijajaki lewat e-purchasing atau kolaborasi subcon."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Periksa kategori paket dan kelayakan barang sesuai RUP unit",
          accent: "slate"
        }
      },
      {
        id: "rsud-puskesmas",
        title: "RSUD / Puskesmas",
        trackCue: "BLUD / Layanan Kesehatan Publik",
        modal: {
          badge: "Institusi • RSUD & Puskesmas",
          subtitle: "Fasilitas Kesehatan Daerah",
          title: "RSUD dan Puskesmas",
          summary: "Kebutuhan workstation layanan pasien, jaringan stabil, serta infrastruktur pendukung operasional faskes.",
          highlights: [
            "Banyak faskes daerah berstatus BLUD dengan pola pengadaan yang perlu dicek per rumah sakit/dinas.",
            "Menuntut ketersediaan sparepart dan SLA dukungan agar pelayanan tidak terganggu."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Cek status BLUD/dinas dan syarat teknis perangkat medis/non-medis",
          accent: "slate"
        }
      },
      {
        id: "bumn-bumd",
        title: "BUMN / BUMD",
        trackCue: "Aturan Korporasi Per Entitas",
        modal: {
          badge: "Institusi • BUMN & BUMD",
          subtitle: "Korporasi Milik Negara / Daerah",
          title: "Pengadaan Korporasi BUMN dan BUMD",
          summary: "Mengikuti pedoman pengadaan internal dan portal vendor masing-masing BUMN/BUMD.",
          highlights: [
            "Aturan BUMN/BUMD berbeda dengan Katalog pemerintah atau tender APBN/APBD murni.",
            "Wajib memenuhi registrasi vendor korporat entitas bersangkutan serta uji risiko termin bayar."
          ],
          footerLabel: "Verifikasi",
          footerValue: "Cek portal & ketentuan pengadaan resmi setiap BUMN/BUMD",
          accent: "slate"
        }
      }
    ]
  },
  caveatFooter:
    "Batas Klaim & Data Wajib: Jangan menjamin produk refurbished lolos di semua pengadaan pemerintah (cek syarat paket/kategori). Perlu siapkan legalitas, KBLI, status produk, sertifikasi prinsipal, RUP/histori tender & daftar calon mitra maincon/subcon."
};

export const slideDataEn: Slide15Data = {
  eyebrow: "Compliant & Staged Public-Sector Entry",
  title: "B2G Go-to-Market: Subcon, E-Purchasing & Maincon Path",
  subtitle:
    "Selecting opportunities aligned with product eligibility, regulations, margin, and cash flow — building track record via partnerships before advancing to Maincon.",
  tamCaveatCue: "Rp911.7T [R5] = Total National Procurement Spend, Not Single-Vendor IT TAM",
  ladderSection: {
    sectionTitle: "3-Step Capability Ladder",
    sequenceCue: "Vendor Readiness → Subcon/Partner Delivery → Qualified Maincon",
    steps: [
      {
        id: "vendor-readiness",
        levelCode: "Stage 01",
        title: "Vendor Readiness",
        gateRule: "Compliance Base & Package Verification",
        keywords: "Legal & KBLI • Vendor accounts • Tax • Categories & warranty",
        modal: {
          badge: "Level 01 • Vendor Readiness",
          subtitle: "B2G Entry Prerequisites",
          title: "Legal, Product Category & Administrative Readiness Checklist",
          metric: "Pre-Check",
          metricLabel: "Baseline Gate",
          summary:
            "Ensures corporate registration, vendor portals, product specs, warranty, and delivery capacity are verified before bidding.",
          highlights: [
            "Confirms business legality, KBLI codes, tax standing, principal letters if mandated, and product status.",
            "Eligibility must be verified per package and per category — never assumed across the whole catalog.",
            "Refurbished units cannot be assumed eligible across government tenders."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Verified legal docs, KBLI scope, principal support & initial RUP logs",
          accent: "slate"
        }
      },
      {
        id: "subcon-partner",
        levelCode: "Stage 02",
        title: "Subcon / Partner Delivery",
        gateRule: "Controlled Track-Record Building",
        keywords: "Clear scope • Margin check • Payment terms • Subcontract & cash risk",
        modal: {
          badge: "Level 02 • Subcon / Partner Delivery",
          subtitle: "Practical Market Entry",
          title: "Subcontracting with Clear Scope & Cash-Flow Protection",
          metric: "Partnered",
          metricLabel: "Track Record Build",
          summary:
            "Enters public-sector delivery alongside Maincons to build documented references while safeguarding margins and cash flow.",
          highlights: [
            "Defines clear delivery scope, acceptance standards, and written warranty boundaries.",
            "Evaluates net margin, payment terms, subcontract clauses, and cash-flow exposure before signing.",
            "Bridges packages requiring prior Maincon credentials or past contract references."
          ],
          footerLabel: "Safeguard",
          footerValue: "Never commit before reviewing payment terms and cash capacity",
          accent: "slate"
        }
      },
      {
        id: "qualified-maincon",
        levelCode: "Stage 03",
        title: "Qualified Maincon",
        gateRule: "Prime Contractor Gate",
        keywords: "Proven history • Technical & admin depth • Financial capacity",
        modal: {
          badge: "Level 03 • Qualified Maincon",
          subtitle: "Staged Graduation",
          title: "Advancing to Prime Contractor Once Capacity & Proof Are Proven",
          metric: "Qualified",
          metricLabel: "Graduation Gate",
          summary:
            "Bids directly as Maincon only when project references, technical resources, compliance admin, and capital align.",
          highlights: [
            "Executes direct provider tenders or E-Purchasing Electronic Catalog fulfillment under current rules.",
            "Backed by verified delivery references, win/loss history, and warranty support capacity.",
            "Never promises or guarantees tender wins."
          ],
          footerLabel: "Standard",
          footerValue: "Measured progression grounded in track record and liquidity",
          accent: "red"
        }
      }
    ]
  },
  decisionSection: {
    sectionTitle: "5-Step Bid / No-Bid Decision Flow",
    ruleCue: "Selective Discipline — Never Chase Every Tender",
    steps: [
      {
        id: "category-check",
        stepCode: "01",
        title: "Product / Service Category",
        cue: "Match core portfolio & stock",
        modal: {
          badge: "Step 01 • Category Screen",
          subtitle: "Bid / No-Bid Flow",
          title: "Matching Tender Scope to Verified Internal Capabilities",
          summary: "Checks whether the package fits sellable hardware, technical capabilities, and stock availability.",
          highlights: [
            "Screens server, networking, end-user hardware, or IT service components.",
            "Filters out requests requiring certifications or products outside verified supply."
          ],
          footerLabel: "Gate",
          footerValue: "Proceed only when hardware/service scope fits real capacity",
          accent: "slate"
        }
      },
      {
        id: "catalog-check",
        stepCode: "02",
        title: "Catalog Availability?",
        cue: "Check curation & mandatory E-Purchasing [R2]",
        modal: {
          badge: "Step 02 • Electronic Catalog Check",
          subtitle: "LKPP Regulation 2/2026 [R2]",
          title: "Checking Catalog Listing & Mandatory E-Purchasing Rules",
          summary: "Verifies whether required items are listed and curated on the government Electronic Catalog.",
          highlights: [
            "Per LKPP Reg 2/2026 [R2], e-purchasing is mandatory when listed items exist (subject to legal exceptions).",
            "Purchasing methods include direct order, price negotiation, and mini-competition."
          ],
          footerLabel: "Reference",
          footerValue: "Verify active catalog category rules at the time of opportunity",
          accent: "slate"
        }
      },
      {
        id: "method-terms",
        stepCode: "03",
        title: "Procurement Method & Terms",
        cue: "E-Purchasing / Tender / Subcon / BUMN",
        modal: {
          badge: "Step 03 • Method & Rules",
          subtitle: "4 Public Entry Tracks",
          title: "Identifying Procurement Track & Buyer-Specific Governance",
          summary: "Separates government E-Purchasing and tenders [R3] from Maincon subcontracts and BUMN/BUMD rules.",
          highlights: [
            "Government agencies follow Perpres 46/2025 [R1] plus LKPP Regs 2/2026 & 3/2026 [R2–R3].",
            "BUMN and BUMD entities enforce separate corporate procurement portals and vendor criteria."
          ],
          footerLabel: "Distinction",
          footerValue: "Keep government e-Catalog separate from BUMN/BUMD corporate rules",
          accent: "slate"
        }
      },
      {
        id: "compliance-check",
        stepCode: "04",
        title: "Eligibility & Compliance",
        cue: "Specs, refurbished rules, warranty & cash",
        modal: {
          badge: "Step 04 • Compliance Audit",
          subtitle: "Per-Package & Category Verification",
          title: "Screening Admin Docs, Hardware Condition Rules & Cash Impact",
          summary: "Audits legal eligibility, new-vs-refurbished spec constraints, principal letters, and working-capital burden.",
          highlights: [
            "Checks if packages strictly mandate brand-new or certified goods, disqualifying refurbished units.",
            "Reviews net margin, liquidated damages, warranty terms, and collection timing."
          ],
          footerLabel: "Guardrail",
          footerValue: "Never assume refurbished units qualify across public tenders",
          accent: "red"
        }
      },
      {
        id: "bid-no-bid",
        stepCode: "05",
        title: "Bid / No-Bid Decision",
        cue: "Disciplined go or walk-away",
        modal: {
          badge: "Step 05 • Final Gate",
          subtitle: "Bid / No-Bid Governance",
          title: "Objective Go / No-Go Sign-Off Across Finance, Tech & Management",
          summary: "Commits bidding effort strictly to opportunities meeting compliance, margin, and liquidity thresholds.",
          highlights: [
            "Bid: all legal, technical spec, margin, and cash-flow requirements clear.",
            "No-Bid: walk away early from high-risk contracts or mismatched specifications."
          ],
          footerLabel: "Outcome",
          footerValue: "Concentrates bidding effort on winnable, cash-healthy contracts",
          accent: "red"
        }
      }
    ],
    regTitle: "Applicable Regulatory Framework — Verify Per Active Opportunity",
    regulations: [
      {
        code: "[R1]",
        title: "Perpres 46/2025",
        effectiveDate: "30 Apr 2025",
        modal: {
          badge: "Regulation [R1]",
          subtitle: "Second Amendment to Perpres 16/2018",
          title: "Presidential Regulation No. 46 of 2025",
          metric: "30 Apr 2025",
          metricLabel: "Enacted Date",
          summary:
            "Updated national framework governing Indonesian government procurement of goods and services.",
          highlights: [
            "Defines core adjustments across procurement methods, domestic preferences, and vendor eligibility.",
            "Checked directly against each active tender package."
          ],
          footerLabel: "Action",
          footerValue: "Confirm implementing rules active when bid opens",
          accent: "slate"
        }
      },
      {
        code: "[R2]",
        title: "LKPP Reg 2/2026",
        effectiveDate: "1 Sep 2026",
        modal: {
          badge: "Regulation [R2]",
          subtitle: "Electronic Catalog",
          title: "LKPP Regulation No. 2 of 2026",
          metric: "1 Sep 2026",
          metricLabel: "Effective Date",
          summary:
            "Governs catalog management, product curation, mandatory e-purchasing rules, and oversight.",
          highlights: [
            "Replaces LKPP Reg 9/2021; mandates e-purchasing when items exist in catalog (with statutory exceptions).",
            "Includes direct purchasing, price negotiation, and mini-competition mechanisms."
          ],
          footerLabel: "Action",
          footerValue: "Verify product curation rules per IT category before listing",
          accent: "slate"
        }
      },
      {
        code: "[R3]",
        title: "LKPP Reg 3/2026",
        effectiveDate: "22 Sep 2026",
        modal: {
          badge: "Regulation [R3]",
          subtitle: "Procurement via Providers",
          title: "LKPP Regulation No. 3 of 2026",
          metric: "22 Sep 2026",
          metricLabel: "Effective Date",
          summary:
            "Guidelines for preparing and executing public procurement through providers (repealing LKPP Regs 12/2021 & 4/2024).",
          highlights: [
            "Sets provider qualification, bid evaluation, and contract execution rules.",
            "Reviewed per package prior to Maincon or Subcon bid preparation."
          ],
          footerLabel: "Action",
          footerValue: "Use current selection documents for every active tender",
          accent: "slate"
        }
      },
      {
        code: "[R4]",
        title: "SE Ka. LKPP 3/2026",
        effectiveDate: "29 Oct 2026",
        modal: {
          badge: "Regulation [R4]",
          subtitle: "Circular Clarification",
          title: "LKPP Head Circular Letter No. 3 of 2026",
          metric: "29 Oct 2026",
          metricLabel: "Issued Date",
          summary:
            "Provides operational clarification on implementing LKPP Regulation No. 3 of 2026.",
          highlights: [
            "Full text must be inspected when drafting specific tender workflows.",
            "Prevents misreading transitional provider or contract rules."
          ],
          footerLabel: "Action",
          footerValue: "Check official JDIH LKPP circular before submitting tenders",
          accent: "slate"
        }
      }
    ]
  },
  accountsSection: {
    sectionTitle: "B2G Target Accounts (By Institution Type)",
    entityDiffNote: "Note: Ministries/Local Gov vs BUMN/BUMD have distinct rules & portals — verify per entity and per package",
    accounts: [
      {
        id: "ministry-agency",
        title: "Ministries & Agencies",
        trackCue: "e-Catalog / Tender [R1–R4]",
        modal: {
          badge: "Institution • Ministries & National Agencies",
          subtitle: "Central Government",
          title: "Kementerian & Badan / Lembaga",
          summary: "Central-level procurement via SIRUP RUP monitoring, Electronic Catalog, or competitive tender.",
          highlights: [
            "Accessed via curated catalog listings or subcontract delivery with qualified Maincons.",
            "Requires strict verification of technical specs, certificates, and APBN payment cycles."
          ],
          footerLabel: "Verification",
          footerValue: "Validate specific unit rules & package compliance per ministry",
          accent: "slate"
        }
      },
      {
        id: "pemda",
        title: "Regional Governments (Pemda)",
        trackCue: "E-Purchasing & Local APBD",
        modal: {
          badge: "Institution • Regional Governments",
          subtitle: "Provincial / Municipal / Regency",
          title: "Pemerintah Daerah (Pemda)",
          summary: "Supplies office endpoints, local agency networking, and IT infrastructure under regional budgets.",
          highlights: [
            "Tracks regional RUP schedules and applicable catalog terms.",
            "Evaluates APBD disbursement timing against working-capital tolerance."
          ],
          footerLabel: "Verification",
          footerValue: "Check local budget schedule & on-site warranty support fit",
          accent: "slate"
        }
      },
      {
        id: "bpd",
        title: "Regional Banks (BPD)",
        trackCue: "Bank-Specific Vendor Rules",
        modal: {
          badge: "Institution • BPD",
          subtitle: "Regional Development Banks",
          title: "Bank Pembangunan Daerah (BPD)",
          summary: "Combines regional banking IT reliability standards with bank-specific internal vendor rules.",
          highlights: [
            "Maintains distinct compliance, warranty, and IT security vetting.",
            "Operates outside standard municipal government agency workflows."
          ],
          footerLabel: "Verification",
          footerValue: "Check individual BPD vendor onboarding & technical specs",
          accent: "slate"
        }
      },
      {
        id: "sudin-upt",
        title: "Badan / Sudin / UPT",
        trackCue: "Operating Technical Units",
        modal: {
          badge: "Institution • Badan / Sudin / UPT",
          subtitle: "Municipal & Technical Units",
          title: "Agencies, Sub-Departments (Sudin) & Technical Units (UPT)",
          summary: "Handles frontline operational hardware, branch networking, and upkeep for municipal units.",
          highlights: [
            "Requires dependable installation turnaround and clear local support SLAs.",
            "Entered selectively via e-purchasing or Maincon partnerships."
          ],
          footerLabel: "Verification",
          footerValue: "Verify package category and eligibility against published RUP",
          accent: "slate"
        }
      },
      {
        id: "rsud-puskesmas",
        title: "RSUD / Puskesmas",
        trackCue: "Public Hospitals / BLUD",
        modal: {
          badge: "Institution • RSUD & Puskesmas",
          subtitle: "Public Healthcare Facilities",
          title: "Public Hospitals (RSUD) & Community Clinics (Puskesmas)",
          summary: "Supports clinical workstations, hospital networks, and non-stop uptime for patient queues.",
          highlights: [
            "Many facilities operate as BLUDs with distinct purchasing authority to verify per site.",
            "Demands reliable spare-part backing and rapid SLA response."
          ],
          footerLabel: "Verification",
          footerValue: "Check BLUD vs agency rules and hospital device specifications",
          accent: "slate"
        }
      },
      {
        id: "bumn-bumd",
        title: "BUMN / BUMD",
        trackCue: "Entity-Specific Corporate Rules",
        modal: {
          badge: "Institution • State & Regional SOEs",
          subtitle: "Corporate Entity Governance",
          title: "BUMN & BUMD Procurement",
          summary: "Follows internal corporate procurement decrees and proprietary vendor portals per SOE.",
          highlights: [
            "Procurement rules differ from government e-Catalog and standard APBN/APBD tenders.",
            "Requires per-entity vendor registration alongside credit and margin screening."
          ],
          footerLabel: "Verification",
          footerValue: "Check each BUMN/BUMD portal and legal checklist separately",
          accent: "slate"
        }
      }
    ]
  },
  caveatFooter:
    "Claim Boundary & Required Data: Never guarantee refurbished hardware eligibility across public procurement (verify per package/category). Prepare legal/KBLI status, product/principal certs, RUP/tender history & Maincon partner lists."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide15Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide15Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 15,
  folder: "15",
  sectionId: 7,
  navTitle: {
    in: "B2G Go-to-Market",
    en: "B2G Go-to-Market"
  },
  headerTitle: {
    in: "B2G Go-to-Market - Jalur Subcon, E-Purchasing, dan Maincon",
    en: "B2G Go-to-Market - Subcon, E-Purchasing & Maincon Path"
  },
  category: {
    in: "IV. Mengaktifkan Mesin Komersial",
    en: "IV. Activating the Commercial Engine"
  },
  section: {
    in: "IV. Mengaktifkan Mesin Komersial",
    en: "IV. Activating the Commercial Engine"
  }
};
