import { useLanguage } from '@/contexts/LanguageContext';
import type { TerritoryId, VerticalId, B2BFunnelStageId } from './utils';

export interface Slide14ModalPayload {
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

export interface TerritoryItem {
  id: TerritoryId;
  code: string;
  title: string;
  roleLabel: string;
  keywords: string;
  modal: Slide14ModalPayload;
}

export interface GovernancePillItem {
  id: string;
  code: string;
  title: string;
  keywords: string;
  modal: Slide14ModalPayload;
}

export interface VerticalRowItem {
  id: VerticalId;
  sector: string;
  useCase: string;
  productFit: string;
  buyerPic: string;
  salesProof: string;
  modal: Slide14ModalPayload;
}

export interface B2BFunnelStageItem {
  id: B2BFunnelStageId;
  step: string;
  title: string;
  cue: string;
  modal: Slide14ModalPayload;
}

export interface Slide14Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  scopeNote: string;
  territorySection: {
    sectionTitle: string;
    ruleCue: string;
    corridorLabels: {
      west: string;
      center: string;
      east: string;
      overlay: string;
    };
    territories: TerritoryItem[];
  };
  governanceItems: GovernancePillItem[];
  funnelSection: {
    sectionTitle: string;
    motionNote: string;
    stages: B2BFunnelStageItem[];
  };
  verticalSection: {
    sectionTitle: string;
    priorityCaveat: string;
    columns: {
      sector: string;
      useCase: string;
      fit: string;
      buyer: string;
      proof: string;
    };
    rows: VerticalRowItem[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide14Data = {
  eyebrow: "Strategi Akuisisi & Pengembangan Akun B2B",
  title: "B2B Go-to-Market: Vertical Industry dan Account Ownership",
  subtitle:
    "Menyasar System Integrator (SI) dan korporasi untuk server baru/second, networking, IT Solution, dan internet lewat kepemilikan akun tunggal yang terukur.",
  scopeNote: "Produk Fokus: Server Baru/Second • Networking • IT Solution • Internet",
  territorySection: {
    sectionTitle: "Peta Wilayah Jabodetabek & KAM Overlay",
    ruleCue: "Satu Akun = Satu Primary Owner (Anti-Bentrok Tim)",
    corridorLabels: {
      west: "Tangerang / Tangsel / Cilegon",
      center: "Jakarta",
      east: "Bekasi / Cikarang / Karawang",
      overlay: "KAM Overlay Lintas Wilayah & Spesialisasi Sektor"
    },
    territories: [
      {
        id: "jakarta",
        code: "Wilayah 01",
        title: "Jakarta",
        roleLabel: "AM Regional • Pusat Korporat & SI",
        keywords: "Headquarter korporasi • System Integrator • E-proc vendor",
        modal: {
          badge: "Wilayah 01 • Jakarta",
          subtitle: "Account Manager Regional",
          title: "Kepemilikan Operasional Korporat & System Integrator Jakarta",
          metric: "1 Owner",
          metricLabel: "Prinsip Akun",
          summary:
            "Menggarap kantor pusat korporasi, lembaga keuangan, rumah sakit, dan System Integrator di area Jakarta.",
          highlights: [
            "AM Jakarta memegang kendali operasional harian atas akun berdomisili Jakarta.",
            "Mengelola pendaftaran vendor pada portal corporate e-procurement tiap grup usaha.",
            "Berkoordinasi dengan KAM bila akun memiliki cabang lintas wilayah industri."
          ],
          footerLabel: "Aturan Utama",
          footerValue: "Dilarang dua sales mendekati akun yang sama tanpa koordinasi CRM",
          accent: "slate"
        }
      },
      {
        id: "west-corridor",
        code: "Wilayah 02",
        title: "Tangerang / Tangsel / Cilegon",
        roleLabel: "AM Regional • Koridor Barat",
        keywords: "Kawasan industri • Edukasi BSD/Tangsel • Logistik & pabrik",
        modal: {
          badge: "Wilayah 02 • Koridor Barat",
          subtitle: "Account Manager Regional",
          title: "Ekspansi Akun Tangerang, Tangerang Selatan & Cilegon",
          metric: "Koridor Barat",
          metricLabel: "Cakupan Teritorial",
          summary:
            "Menghubungkan klaster kampus, rumah sakit, perkantoran Tangsel, serta industri manufaktur hingga Cilegon.",
          highlights: [
            "Fokus pada kebutuhan perangkat kantor, jaringan antar-site, internet, dan refresh PC.",
            "Memetakan existing account, dormant account, serta target account di sepanjang koridor barat.",
            "Pendekatan bertahap berbasis kedekatan akses PIC dan kapasitas implementasi teknis."
          ],
          footerLabel: "Tata Kelola",
          footerValue: "Pendaftaran portal vendor korporat dipisahkan dari e-Katalog B2G",
          accent: "slate"
        }
      },
      {
        id: "east-corridor",
        code: "Wilayah 03",
        title: "Bekasi / Cikarang / Karawang",
        roleLabel: "AM Regional • Koridor Manufaktur",
        keywords: "Pabrik & kawasan industri • Networking • Server & support",
        modal: {
          badge: "Wilayah 03 • Koridor Timur",
          subtitle: "Account Manager Regional",
          title: "Penetrasi Kawasan Industri Bekasi, Cikarang & Karawang",
          metric: "Koridor Timur",
          metricLabel: "Fokus Industri",
          summary:
            "Menangkap kebutuhan infrastruktur IT pabrik, gudang logistik, dan perkantoran di koridor manufaktur timur.",
          highlights: [
            "Menggarap kebutuhan networking pabrik, refresh workstation, internet cabang, dan layanan support.",
            "Spesialisasi manufaktur dapat hadir sebagai overlay tanpa mengganti primary account owner.",
            "Memanfaatkan jaringan referral partner dan System Integrator setempat."
          ],
          footerLabel: "Prioritas",
          footerValue: "Seleksi akun berdasarkan margin, repeat potential & risiko bayar",
          accent: "slate"
        }
      },
      {
        id: "kam-overlay",
        code: "Overlay",
        title: "Key Account Manager (KAM)",
        roleLabel: "Akun Strategis Lintas Wilayah",
        keywords: "Multi-site grup • Koordinasi SI • Overlay vertikal",
        modal: {
          badge: "Overlay • Key Account Manager",
          subtitle: "Orkestrasi Akun Strategis",
          title: "Peran KAM & Spesialisasi Industri Sebagai Overlay",
          metric: "Lintas Wilayah",
          metricLabel: "Mandat Strategis",
          summary:
            "KAM memimpin strategi akun grup multi-cabang sementara AM regional tetap menjadi pelaksana operasional wilayah.",
          highlights: [
            "Mencegah bentrok internal ketika satu grup korporat beroperasi di Jakarta sekaligus Cikarang/Tangerang.",
            "Spesialis industri (misal Manufacturing atau Healthcare) mendampingi presentasi solusi sebagai overlay.",
            "Setiap akun tetap tercatat satu primary owner jelas di CRM."
          ],
          footerLabel: "Prinsip",
          footerValue: "Akun terkelola lewat account plan, bukan sekadar penjualan ad-hoc",
          accent: "red"
        }
      }
    ]
  },
  governanceItems: [
    {
      id: "universe-scoring",
      code: "Prioritas",
      title: "Account Universe & 6 Kriteria Scoring",
      keywords: "Existing • Dormant • Target • SI • Referral | Fit, PIC, Margin, Risiko",
      modal: {
        badge: "Tata Kelola • Account Scoring",
        subtitle: "Pemetaan & Seleksi Awal",
        title: "Pengelompokan Universe Akun & 6 Parameter Scoring",
        metric: "6 Kriteria",
        metricLabel: "Filter Prioritas",
        summary:
            "Memetakan seluruh akun per wilayah/industri agar tim fokus pada peluang dengan kecocokan dan kesehatan kas terbaik.",
        highlights: [
          "5 Kelompok: Existing account, Dormant account, Target account, System Integrator, dan Referral partner.",
          "6 Scoring: kebutuhan infrastruktur, akses PIC, kemampuan teknis, potensi margin, repeat potential, dan payment risk.",
          "Menghindari pengejaran proyek berisiko pembayaran tinggi atau di luar kapasitas tim."
        ],
        footerLabel: "Basis Data",
        footerValue: "Membutuhkan daftar top customer, histori beli & pipeline eksisting",
        accent: "slate"
      }
    },
    {
      id: "account-plan-eproc",
      code: "Mekanisme",
      title: "Account Plan & Corporate E-Procurement",
      keywords: "Stakeholder • Installed base • Incumbent • Tender window • Non-B2G Portal",
      modal: {
        badge: "Mekanisme • Account Plan",
        subtitle: "Disiplin Akun Korporat",
        title: "Standar Account Plan & Pemisahan Portal E-Proc Korporasi",
        metric: "6 Elemen",
        metricLabel: "Isi Account Plan",
        summary:
          "Setiap akun prioritas memiliki peta stakeholder dan jadwal pembaharuan, disertai jalur vendor korporat yang terpisah dari B2G.",
        highlights: [
          "Isi Account Plan: struktur stakeholder, installed base, kebutuhan 12 bulan, incumbent, tender window & next action.",
          "Mendaftar pada portal corporate e-procurement sesuai syarat masing-masing perusahaan.",
          "Dipisahkan secara tegas dari tata kelola Katalog Elektronik pemerintah (B2G)."
        ],
        footerLabel: "Prasyarat",
        footerValue: "Menyiapkan dokumen registrasi vendor & daftar portal e-proc klien",
        accent: "slate"
      }
    }
  ],
  funnelSection: {
    sectionTitle: "B2B Project Pipeline Funnel",
    motionNote: "Account-Based Motion di CRM",
    stages: [
      {
        id: "discovery",
        step: "01",
        title: "Discovery",
        cue: "Kebutuhan & peta PIC",
        modal: {
          badge: "Stage 01 • Discovery",
          subtitle: "Pipeline Proyek B2B",
          title: "Penggalian Kebutuhan Bisnis & Stakeholder Map",
          summary: "Memastikan kebutuhan nyata, jadwal anggaran, dan pengambil keputusan sebelum masuk tahap desain.",
          highlights: [
            "Mengidentifikasi installed base, pain point IT, serta proyeksi 12 bulan ke depan.",
            "Wajib dicatat pemilik akun tunggal di CRM."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "Konteks kebutuhan, timeline & akses PIC terkonfirmasi",
          accent: "slate"
        }
      },
      {
        id: "technical-validation",
        step: "02",
        title: "Technical Validation",
        cue: "Uji kelayakan engineer",
        modal: {
          badge: "Stage 02 • Technical Validation",
          subtitle: "Pipeline Proyek B2B",
          title: "Validasi Spesifikasi Bersama Tim Teknis",
          summary: "Memeriksa kelayakan server, networking, atau solusi IT sebelum memberikan komitmen apa pun.",
          highlights: [
            "Sales dilarang mengarang spesifikasi atau menjanjikan performa di luar persetujuan teknis.",
            "Menentukan perlu/tidaknya survei lokasi atau dukungan prinsipal."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "Sign-off kelayakan arsitektur oleh tim teknis",
          accent: "red"
        }
      },
      {
        id: "solution",
        step: "03",
        title: "Solution",
        cue: "Paket perangkat & jasa",
        modal: {
          badge: "Stage 03 • Solution Design",
          subtitle: "Pipeline Proyek B2B",
          title: "Perancangan Paket Perangkat, Konektivitas & Jasa",
          summary: "Menyusun kombinasi server/end-user new atau second tervalidasi dengan instalasi dan SLA.",
          highlights: [
            "Mengecek kesiapan stok gudang, lead time pengadaan, serta opsi sewa/refresh bila relevan.",
            "Melibatkan partner/SI bila cakupan memerlukan kolaborasi pelengkap."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "Konfirmasi stok, estimasi HPP & kapasitas pengerjaan",
          accent: "slate"
        }
      },
      {
        id: "proposal",
        step: "04",
        title: "Proposal",
        cue: "Quote, margin & SLA",
        modal: {
          badge: "Stage 04 • Proposal",
          subtitle: "Pipeline Proyek B2B",
          title: "Penyusunan Proposal Komersial & Kontrol Margin",
          summary: "Menerbitkan penawaran tertulis lengkap dengan scope, garansi, syarat pembayaran, dan persetujuan margin.",
          highlights: [
            "Harga & diskon melewati mekanisme approval sesuai batas kewenangan.",
            "Mencantumkan asumsi implementasi dan syarat pengiriman secara jelas."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "Quotation resmi disetujui Finance/Manager",
          accent: "slate"
        }
      },
      {
        id: "negotiation",
        step: "05",
        title: "Negotiation",
        cue: "Harga, tempo & SLA",
        modal: {
          badge: "Stage 05 • Negotiation",
          subtitle: "Pipeline Proyek B2B",
          title: "Negosiasi Nilai Solusi & Kualitas Termin Pembayaran",
          summary: "Mempertahankan margin dan menjaga syarat pembayaran aman saat berhadapan dengan Procurement.",
          highlights: [
            "Menilai ulang trade-off bila klien meminta penyesuaian spesifikasi atau termin kredit.",
            "Risiko kredit diverifikasi bersama Finance sebelum persetujuan akhir."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "Kesepakatan harga bersih, margin & syarat pembayaran",
          accent: "slate"
        }
      },
      {
        id: "procurement",
        step: "06",
        title: "Procurement",
        cue: "Portal e-proc / PO",
        modal: {
          badge: "Stage 06 • Corporate Procurement",
          subtitle: "Pipeline Proyek B2B",
          title: "Administrasi Vendor & Portal Corporate E-Procurement",
          summary: "Menuntaskan kelengkapan registrasi vendor, verifikasi dokumen, dan proses penerbitan PO perusahaan.",
          highlights: [
            "Mengikuti alur portal e-procurement khusus korporasi (terpisah dari Katalog Elektronik pemerintah).",
            "Memantau jadwal tanda tangan kontrak hingga PO resmi diterima."
          ],
          footerLabel: "Syarat Lanjut",
          footerValue: "PO/kontrak sah & verifikasi kredit selesai",
          accent: "slate"
        }
      },
      {
        id: "won-lost",
        step: "07",
        title: "Won / Lost",
        cue: "Handover atau evaluasi",
        modal: {
          badge: "Stage 07 • Won / Lost",
          subtitle: "Penutupan Pipeline B2B",
          title: "Serah Terima Proyek Menang & Analisis Kalah",
          summary: "Deal menang masuk ke checklist handover operasional; deal kalah wajib dicatat alasan nyatanya.",
          highlights: [
            "Won: handover lengkap ke Project/Technical/Warehouse/Finance beserta jadwal follow-up account plan.",
            "Lost: mencatat kompetitor/incumbent dan faktor kalah untuk kalibrasi harga maupun penawaran berikutnya."
          ],
          footerLabel: "Disiplin",
          footerValue: "Setiap hasil pipeline terdokumentasi di CRM untuk pembelajaran tim",
          accent: "red"
        }
      }
    ]
  },
  verticalSection: {
    sectionTitle: "Vertical Industry Matrix (7 Sektor Catatan)",
    priorityCaveat: "Catatan Prioritas: Mulai bertahap dari sektor dengan akses relasi, product fit, margin & kapasitas terbaik — tidak menjanjikan semua sektor digarap serentak.",
    columns: {
      sector: "Vertikal",
      useCase: "Use Case Umum",
      fit: "Products / Services Fit",
      buyer: "Buyer / PIC",
      proof: "Sales Proof Diperlukan"
    },
    rows: [
      {
        id: "education",
        sector: "Education",
        useCase: "Lab komputer, WiFi kampus & perangkat pengajar",
        productFit: "PC/laptop new & refurbished, networking, internet",
        buyerPic: "Kepala IT, Sarpras / Pengadaan Yayasan",
        salesProof: "Garansi unit, QC & studi kasus sekolah/kampus",
        modal: {
          badge: "Vertikal • Education",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Pendidikan (Sekolah, Kampus & Lembaga Pelatihan)",
          summary: "Memerlukan pengadaan perangkat belajar efisien dengan jaringan kampus yang stabil dan garansi jelas.",
          highlights: [
            "Product fit: batch PC/laptop (opsi refurbished bergaransi), switching/WiFi, serta layanan internet.",
            "Bukti jual: daftar referensi proyek pendidikan yang boleh dibagikan & kejelasan SLA purnajual."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Tanpa daftar prospek/target omzet sebelum data akun dikonfirmasi",
          accent: "slate"
        }
      },
      {
        id: "manufacturing",
        sector: "Manufacturing",
        useCase: "Konektivitas pabrik/gudang, workstation & server lokal",
        productFit: "Networking, server on-premise, PC/refresh, internet",
        buyerPic: "IT Manager, Plant Ops & Procurement",
        salesProof: "Kesiapan engineer, SLA cepat & riwayat proyek pabrik",
        modal: {
          badge: "Vertikal • Manufacturing",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Manufaktur (Pabrik, Gudang & Kawasan Industri)",
          summary: "Menuntut keandalan jaringan area produksi/gudang serta dukungan support yang responsif.",
          highlights: [
            "Product fit: perangkat jaringan, server lokal tervalidasi, refresh PC administrasi, internet cabang.",
            "Dapat didukung overlay spesialis industri sambil tetap menjaga satu primary owner di koridor industri."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Membutuhkan account universe kawasan Bekasi/Cikarang/Karawang & Tangerang",
          accent: "slate"
        }
      },
      {
        id: "financial",
        sector: "Financial",
        useCase: "Kepatuhan perangkat cabang, jaringan aman & backup",
        productFit: "Server/backup tervalidasi, networking, device refresh",
        buyerPic: "IT Infra, Security/Compliance & Vendor Mgmt",
        salesProof: "Registrasi vendor portal, kepatuhan garansi & SLA",
        modal: {
          badge: "Vertikal • Financial",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Jasa Keuangan",
          summary: "Proses seleksi vendor ketat dengan penekanan pada legalitas, SLA purnajual, dan ketertiban administrasi.",
          highlights: [
            "Product fit: peremajaan endpoint terstandar, perangkat jaringan cabang, serta solusi server/backup.",
            "Wajib melewati kelengkapan registrasi vendor e-procurement dan validasi teknis menyeluruh."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Menunggu konfirmasi syarat vendor & dukungan prinsipal",
          accent: "slate"
        }
      },
      {
        id: "healthcare",
        sector: "Healthcare",
        useCase: "Operasional RS/klinik, sistem antrean & server SIMRS",
        productFit: "PC/terminal kerja, networking, server, internet & support",
        buyerPic: "Kepala SIMRS / IT RS, Manajemen Penunjang",
        salesProof: "Stabilitas support, ketersediaan sparepart & SLA",
        modal: {
          badge: "Vertikal • Healthcare",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Kesehatan (RS Swasta & Jaringan Klinik)",
          summary: "Operasional layanan pasien bergantung pada jaringan stabil dan ketersediaan perangkat kerja tanpa henti.",
          highlights: [
            "Product fit: workstation front/back office, networking terkelola, serta infrastruktur server/backup.",
            "RSUD/Puskesmas milik pemerintah dikelola pada jalur kepatuhan B2G terpisah."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Kapasitas support & ketersediaan sparepart harus terverifikasi",
          accent: "slate"
        }
      },
      {
        id: "hospitality",
        sector: "Hospitality",
        useCase: "WiFi tamu, jaringan back-office & perangkat kamar/lobi",
        productFit: "Networking/WiFi, internet, IT Solution & display",
        buyerPic: "IT Hotel, Purchasing & General Manager",
        salesProof: "Stabilitas jaringan multi-titik & dukungan maintenance",
        modal: {
          badge: "Vertikal • Hospitality",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Perhotelan & Properti Komersial",
          summary: "Kualitas konektivitas WiFi dan keandalan perangkat lobi/operasional langsung memengaruhi pengalaman tamu.",
          highlights: [
            "Product fit: switching/access point jaringan hotel, layanan internet, dan maintenance berkala.",
            "Peluang repeat order suku cadang serta perluasan cabang grup perhotelan."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Menunggu histori klien eksisting di segmen properti/hospitality",
          accent: "slate"
        }
      },
      {
        id: "ict",
        sector: "ICT",
        useCase: "Pemenuhan komponen proyek SI & ekspansi infrastruktur",
        productFit: "Server baru/second, networking, unit refresh & internet",
        buyerPic: "Partner Director, PM System Integrator, Procurement",
        salesProof: "Kecepatan stok, harga kompetitif & integritas garansi",
        modal: {
          badge: "Vertikal • ICT & System Integrator",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor ICT & Mitra System Integrator (SI)",
          summary: "System Integrator menjadi mitra pengganda jangkauan proyek untuk kebutuhan perangkat baru maupun refurbished.",
          highlights: [
            "Product fit: supply hardware multi-unit, perangkat server/networking, serta dukungan teknis pendukung.",
            "Penting menjaga aturan koordinasi agar tidak terjadi bentrok penawaran pada klien akhir yang sama."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Perlu daftar referensi SI aktif & syarat harga reseller/mitra",
          accent: "slate"
        }
      },
      {
        id: "oil-gas",
        sector: "Oil & Gas",
        useCase: "Standar vendor ketat, workstation & infrastruktur site",
        productFit: "Server/networking tervalidasi, device & layanan support",
        buyerPic: "SCM / Procurement, IT Ops & User Departemen",
        salesProof: "Legalitas lengkap, dokumen teknis & kepatuhan K3/vendor",
        modal: {
          badge: "Vertikal • Oil & Gas",
          subtitle: "Matriks Sektor Catatan",
          title: "Sektor Energi, Minyak & Gas",
          summary: "Memerlukan proses registrasi vendor panjang dengan standar kepatuhan, dokumentasi, dan garansi tinggi.",
          highlights: [
            "Masuk hanya bila persyaratan registrasi portal korporat, legalitas, dan kapasitas pemenuhan kontrak siap.",
            "Cocok digarap bersama overlay KAM atau melalui kemitraan System Integrator terdaftar."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Dipilih hanya jika skor akses PIC & kesiapan dokumen memenuhi syarat",
          accent: "slate"
        }
      }
    ]
  },
  evidenceFooter:
    "Data / Bukti Diperlukan: Daftar top customer & konsentrasi omzet, account list per wilayah/industri, histori beli, pipeline eksisting, referensi SI/prinsipal, serta syarat registrasi portal corporate e-procurement."
};

export const slideDataEn: Slide14Data = {
  eyebrow: "B2B Account Acquisition & Growth",
  title: "B2B Go-to-Market: Vertical Industry & Account Ownership",
  subtitle:
    "Targeting System Integrators (SIs) and corporate end-clients for new/second servers, networking, IT solutions, and internet under clear single-owner governance.",
  scopeNote: "Product Focus: New/Second Servers • Networking • IT Solutions • Internet",
  territorySection: {
    sectionTitle: "Jabodetabek Territory Map & KAM Overlay",
    ruleCue: "One Account = One Primary Owner (No Overlap)",
    corridorLabels: {
      west: "Tangerang / Tangsel / Cilegon",
      center: "Jakarta",
      east: "Bekasi / Cikarang / Karawang",
      overlay: "Cross-Territory KAM & Industry Specialist Overlay"
    },
    territories: [
      {
        id: "jakarta",
        code: "Territory 01",
        title: "Jakarta",
        roleLabel: "Regional AM • Corporate HQ & SI Hub",
        keywords: "Corporate headquarters • System Integrators • E-proc portals",
        modal: {
          badge: "Territory 01 • Jakarta",
          subtitle: "Regional Account Manager",
          title: "Operational Ownership for Jakarta Corporates & System Integrators",
          metric: "1 Owner",
          metricLabel: "Ownership Rule",
          summary:
            "Covers corporate head offices, financial institutions, healthcare groups, and System Integrators across Jakarta.",
          highlights: [
            "Regional AM acts as single operational owner for Jakarta-based accounts.",
            "Manages vendor registration on client-specific corporate e-procurement portals.",
            "Coordinates seamlessly with KAM when client groups span surrounding industrial corridors."
          ],
          footerLabel: "Governance Rule",
          footerValue: "Two reps must never pitch the same account without coordination",
          accent: "slate"
        }
      },
      {
        id: "west-corridor",
        code: "Territory 02",
        title: "Tangerang / Tangsel / Cilegon",
        roleLabel: "Regional AM • Western Corridor",
        keywords: "Industrial estates • BSD/Tangsel campuses • Logistics & plants",
        modal: {
          badge: "Territory 02 • Western Corridor",
          subtitle: "Regional Account Manager",
          title: "Account Coverage Across Tangerang, Tangsel & Cilegon",
          metric: "West Corridor",
          metricLabel: "Territory Scope",
          summary:
            "Connects BSD/Tangsel education, healthcare, and office clusters with manufacturing and industrial sites toward Cilegon.",
          highlights: [
            "Targets office infrastructure, multi-site networking, business internet, and device refresh.",
            "Segments existing, dormant, and net-new target accounts across the corridor.",
            "Prioritizes sectors matched to verified PIC access and delivery bandwidth."
          ],
          footerLabel: "Governance",
          footerValue: "Corporate vendor portals stay strictly separate from B2G e-Catalog",
          accent: "slate"
        }
      },
      {
        id: "east-corridor",
        code: "Territory 03",
        title: "Bekasi / Cikarang / Karawang",
        roleLabel: "Regional AM • Manufacturing Corridor",
        keywords: "Factories & industrial parks • Networking • Servers & support",
        modal: {
          badge: "Territory 03 • Eastern Corridor",
          subtitle: "Regional Account Manager",
          title: "Industrial Zone Penetration in Bekasi, Cikarang & Karawang",
          metric: "East Corridor",
          metricLabel: "Industrial Focus",
          summary:
            "Addresses IT infrastructure, plant networking, workstation refresh, and connectivity needs across eastern manufacturing zones.",
          highlights: [
            "Delivers industrial networking, validated servers, branch internet, and maintenance.",
            "Industry specialists can join as overlay support while keeping one primary account owner.",
            "Leverages System Integrators and referral partners active in industrial estates."
          ],
          footerLabel: "Priority Gate",
          footerValue: "Accounts selected by margin potential, repeat fit & payment risk",
          accent: "slate"
        }
      },
      {
        id: "kam-overlay",
        code: "Overlay",
        title: "Key Account Manager (KAM)",
        roleLabel: "Cross-Territory Strategic Accounts",
        keywords: "Multi-site groups • SI orchestration • Industry overlay",
        modal: {
          badge: "Overlay • Key Account Manager",
          subtitle: "Strategic Account Orchestration",
          title: "KAM & Vertical Specialist Overlay Without Splitting Ownership",
          metric: "Cross-Region",
          metricLabel: "Strategic Mandate",
          summary:
            "KAM guides multi-site group strategy while Regional AMs execute day-to-day operational ownership in each territory.",
          highlights: [
            "Eliminates internal collision when corporate groups span Jakarta, Tangerang, and Bekasi/Karawang.",
            "Vertical specialists (e.g., Manufacturing or Healthcare) overlay technical pitches without taking over account ownership.",
            "Every account keeps exactly one primary owner logged in CRM."
          ],
          footerLabel: "Principle",
          footerValue: "Structured account plans replace fragmented ad-hoc selling",
          accent: "red"
        }
      }
    ]
  },
  governanceItems: [
    {
      id: "universe-scoring",
      code: "Prioritization",
      title: "Account Universe & 6 Scoring Criteria",
      keywords: "Existing • Dormant • Target • SI • Referral | Fit, PIC, Margin, Risk",
      modal: {
        badge: "Governance • Account Scoring",
        subtitle: "Mapping & Initial Triage",
        title: "Account Universe Grouping & 6 Scoring Criteria",
        metric: "6 Criteria",
        metricLabel: "Priority Filter",
        summary:
          "Structures all accounts per territory and vertical so reps focus effort on qualified, healthy-margin deals.",
        highlights: [
          "5 Buckets: Existing, Dormant, Target accounts, System Integrators, and Referral partners.",
          "6 Scores: hardware/infra need, PIC access, technical fit, margin potential, repeat rate, and payment risk.",
          "Filters out high-risk receivables or engagements beyond implementation capacity."
        ],
        footerLabel: "Data Needed",
        footerValue: "Requires top customer list, order history & active B2B pipeline",
        accent: "slate"
      }
    },
    {
      id: "account-plan-eproc",
      code: "Execution",
      title: "Account Plan & Corporate E-Procurement",
      keywords: "Stakeholders • Installed base • Incumbent • Renewal window • Private Portals",
      modal: {
        badge: "Execution • Account Plan",
        subtitle: "Enterprise Account Discipline",
        title: "Standard Account Plans & Private E-Procurement Separation",
        metric: "6 Elements",
        metricLabel: "Plan Components",
        summary:
          "Priority accounts maintain stakeholder maps and renewal schedules while registering cleanly on private corporate portals.",
        highlights: [
          "Account Plan covers stakeholders, installed base, 12-month needs, incumbent, renewal window & next action.",
          "Registers on each corporate client's private e-procurement portal per vendor requirements.",
          "Kept structurally distinct from government Electronic Catalog (B2G) workflows."
        ],
        footerLabel: "Prerequisite",
        footerValue: "Collect corporate e-proc portal lists & required vendor packets",
        accent: "slate"
      }
    }
  ],
  funnelSection: {
    sectionTitle: "B2B Project Pipeline Funnel",
    motionNote: "CRM Account-Based Motion",
    stages: [
      {
        id: "discovery",
        step: "01",
        title: "Discovery",
        cue: "Needs & PIC map",
        modal: {
          badge: "Stage 01 • Discovery",
          subtitle: "B2B Project Pipeline",
          title: "Business Need & Stakeholder Discovery",
          summary: "Confirms operational needs, budget cycle, and decision makers prior to solution design.",
          highlights: [
            "Maps installed base, IT pain points, and 12-month refresh/expansion windows.",
            "Logged in CRM under a single assigned account owner."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Verified needs, timeline & active PIC access",
          accent: "slate"
        }
      },
      {
        id: "technical-validation",
        step: "02",
        title: "Technical Validation",
        cue: "Engineer feasibility",
        modal: {
          badge: "Stage 02 • Technical Validation",
          subtitle: "B2B Project Pipeline",
          title: "Engineering Review & Feasibility Gate",
          summary: "Validates server, network, or IT solution sizing before making external commitments.",
          highlights: [
            "Reps must never invent specifications or promise unverified compatibility.",
            "Determines whether site survey or principal support is required."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Written technical sign-off from internal engineering team",
          accent: "red"
        }
      },
      {
        id: "solution",
        step: "03",
        title: "Solution",
        cue: "Hardware & service mix",
        modal: {
          badge: "Stage 03 • Solution Design",
          subtitle: "B2B Project Pipeline",
          title: "Bundling Validated Gear, Connectivity & Services",
          summary: "Aligns new/second hardware options with stock readiness, installation, and maintenance SLAs.",
          highlights: [
            "Verifies inventory on hand, procurement lead time, and optional refresh structure.",
            "Coordinates System Integrator or complementary partners when needed."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Confirmed stock/supply path & engineer capacity",
          accent: "slate"
        }
      },
      {
        id: "proposal",
        step: "04",
        title: "Proposal",
        cue: "Quote, margin & SLA",
        modal: {
          badge: "Stage 04 • Proposal",
          subtitle: "B2B Project Pipeline",
          title: "Commercial Quote & Margin Approval",
          summary: "Issues formal pricing covering scope, warranty, SLA, payment terms, and governed margins.",
          highlights: [
            "Pricing and discounts pass tiered approval limits before client release.",
            "States delivery assumptions and support boundaries clearly."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Approved formal quotation delivered to buyer",
          accent: "slate"
        }
      },
      {
        id: "negotiation",
        step: "05",
        title: "Negotiation",
        cue: "Value, terms & margin",
        modal: {
          badge: "Stage 05 • Negotiation",
          subtitle: "B2B Project Pipeline",
          title: "Value Defense & Payment-Term Alignment",
          summary: "Protects net margin and credit discipline throughout procurement negotiations.",
          highlights: [
            "Re-evaluates scope trade-offs rather than giving unapproved price cuts.",
            "Finance reviews credit terms and payment risk prior to commitment."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Agreed net price, margin floor & credit terms",
          accent: "slate"
        }
      },
      {
        id: "procurement",
        step: "06",
        title: "Procurement",
        cue: "Private e-proc / PO",
        modal: {
          badge: "Stage 06 • Corporate Procurement",
          subtitle: "B2B Project Pipeline",
          title: "Vendor Onboarding & Private E-Procurement",
          summary: "Completes corporate vendor compliance, portal bidding, and formal Purchase Order issuance.",
          highlights: [
            "Follows private corporate portal rules separately from government e-Catalog.",
            "Tracks compliance checkpoints until signed PO or contract arrives."
          ],
          footerLabel: "Exit Criteria",
          footerValue: "Valid corporate PO/contract & cleared credit check",
          accent: "slate"
        }
      },
      {
        id: "won-lost",
        step: "07",
        title: "Won / Lost",
        cue: "Handover or loss review",
        modal: {
          badge: "Stage 07 • Won / Lost",
          subtitle: "Pipeline Closure",
          title: "Controlled Operational Handover or Loss Analysis",
          summary: "Closed-won projects hand off via checklist; closed-lost deals record true root causes.",
          highlights: [
            "Won: structured handover to Project, Technical, Warehouse & Finance plus account growth plan.",
            "Lost: logs incumbent competitor and loss factors to sharpen future pricing."
          ],
          footerLabel: "Discipline",
          footerValue: "100% pipeline outcomes captured in CRM for team learning",
          accent: "red"
        }
      }
    ]
  },
  verticalSection: {
    sectionTitle: "Vertical Industry Matrix (7 Target Sectors)",
    priorityCaveat: "Prioritization Guardrail: Start selectively with sectors combining strong PIC access, product fit, healthy margin & delivery readiness — never claim simultaneous rollout across all 7.",
    columns: {
      sector: "Vertical",
      useCase: "Typical Use Case",
      fit: "Products / Services Fit",
      buyer: "Buyer / PIC",
      proof: "Required Sales Proof"
    },
    rows: [
      {
        id: "education",
        sector: "Education",
        useCase: "Campus labs, WiFi & faculty workstation fleet",
        productFit: "New/refurbished PCs, networking, business internet",
        buyerPic: "IT Head, Facilities / Foundation Procurement",
        salesProof: "Clear unit warranty, QC & school project references",
        modal: {
          badge: "Vertical • Education",
          subtitle: "Vertical Matrix Note",
          title: "Education Sector (Schools, Universities & Training Centers)",
          summary: "Requires budget-efficient lab and faculty hardware backed by stable campus connectivity.",
          highlights: [
            "Product fit: warranted refurbished or new PC fleets, campus WiFi/switching, internet.",
            "Sales proof: shareable education project cases and dependable warranty turnaround."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "No prospect names or revenue quotas until account data is verified",
          accent: "slate"
        }
      },
      {
        id: "manufacturing",
        sector: "Manufacturing",
        useCase: "Plant/warehouse networks, workstations & local servers",
        productFit: "Networking, validated on-prem servers, PC refresh, internet",
        buyerPic: "IT Manager, Plant Ops & Procurement",
        salesProof: "Engineer readiness, fast SLA & industrial references",
        modal: {
          badge: "Vertical • Manufacturing",
          subtitle: "Vertical Matrix Note",
          title: "Manufacturing Sector (Plants, Warehouses & Industrial Estates)",
          summary: "Demands rugged factory/warehouse connectivity and responsive technical support.",
          highlights: [
            "Product fit: industrial switching, validated servers, office PC refresh, branch links.",
            "Supported by industry overlay while keeping a single regional account owner."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Requires account mapping across Bekasi/Cikarang/Karawang & Tangerang",
          accent: "slate"
        }
      },
      {
        id: "financial",
        sector: "Financial",
        useCase: "Branch endpoint compliance, secure links & backup",
        productFit: "Validated server/backup, networking, device refresh",
        buyerPic: "IT Infra, Security/Compliance & Vendor Mgmt",
        salesProof: "E-proc vendor compliance, strict warranty & SLA",
        modal: {
          badge: "Vertical • Financial",
          subtitle: "Vertical Matrix Note",
          title: "Financial Services Sector",
          summary: "Strict vendor onboarding requiring complete compliance, SLA clarity, and audit-ready admin.",
          highlights: [
            "Product fit: standardized endpoint refresh, branch networking, validated server/backup.",
            "Must satisfy corporate e-procurement documentation and engineering review."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Pending verification of vendor compliance & principal backing",
          accent: "slate"
        }
      },
      {
        id: "healthcare",
        sector: "Healthcare",
        useCase: "Clinic/hospital uptime, queues & SIMRS server infra",
        productFit: "Workstations, managed network, servers & SLA support",
        buyerPic: "SIMRS / Hospital IT Head, Support Operations",
        salesProof: "Support stability, spare parts & response SLA",
        modal: {
          badge: "Vertical • Healthcare",
          subtitle: "Vertical Matrix Note",
          title: "Healthcare Sector (Private Hospitals & Clinic Chains)",
          summary: "Patient workflows depend on zero-friction connectivity and well-supported terminal hardware.",
          highlights: [
            "Product fit: clinical workstations, managed network links, and validated servers.",
            "Public RSUD/Puskesmas facilities follow separate B2G procurement tracks."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Support bandwidth and spare-part readiness must be confirmed",
          accent: "slate"
        }
      },
      {
        id: "hospitality",
        sector: "Hospitality",
        useCase: "Guest WiFi, back-office gear & lobby/room displays",
        productFit: "WiFi/networking, business internet & maintenance",
        buyerPic: "Hotel IT, Purchasing & General Manager",
        salesProof: "Multi-floor WiFi stability & preventive maintenance",
        modal: {
          badge: "Vertical • Hospitality",
          subtitle: "Vertical Matrix Note",
          title: "Hospitality & Commercial Property Sector",
          summary: "Guest satisfaction hinges on reliable multi-floor WiFi and well-maintained property systems.",
          highlights: [
            "Product fit: access-point networks, business internet, and ongoing maintenance contracts.",
            "Creates repeat demand across sister properties and multi-site hospitality groups."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Pending review of existing hospitality client history",
          accent: "slate"
        }
      },
      {
        id: "ict",
        sector: "ICT",
        useCase: "Project hardware supply for System Integrators",
        productFit: "New/second servers, networking, refresh units & internet",
        buyerPic: "SI Partner Director, Project Manager, Procurement",
        salesProof: "Fast stock turns, reseller margin & warranty integrity",
        modal: {
          badge: "Vertical • ICT & System Integrators",
          subtitle: "Vertical Matrix Note",
          title: "ICT & System Integrator (SI) Ecosystem",
          summary: "System Integrators multiply project reach for both new and warranted refurbished hardware.",
          highlights: [
            "Product fit: multi-unit hardware fulfillment, servers/networking, and technical support.",
            "Strict channel coordination ensures no direct pricing collision on shared end-clients."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Requires verified SI roster & structured partner pricing rules",
          accent: "slate"
        }
      },
      {
        id: "oil-gas",
        sector: "Oil & Gas",
        useCase: "Strict vendor onboarding, workstations & site links",
        productFit: "Validated server/network gear, endpoints & support",
        buyerPic: "SCM / Procurement, IT Ops & Department Users",
        salesProof: "Full legal docs, HSE/vendor compliance & specs",
        modal: {
          badge: "Vertical • Oil & Gas",
          subtitle: "Vertical Matrix Note",
          title: "Oil, Gas & Energy Sector",
          summary: "Long corporate vendor qualification cycles demanding complete compliance and technical rigor.",
          highlights: [
            "Pursued selectively when vendor portal docs, financing, and technical capacity align.",
            "Often entered via KAM coordination or registered System Integrator partnerships."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Engaged only when PIC access and compliance readiness score high",
          accent: "slate"
        }
      }
    ]
  },
  evidenceFooter:
    "Required Data / Proof: Top customers & revenue concentration, territory/industry account lists, purchase history, active pipeline, SI/principal references, and corporate e-procurement registration rules."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide14Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide14Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 14,
  folder: "14",
  sectionId: 7,
  navTitle: {
    in: "B2B Go-to-Market",
    en: "B2B Go-to-Market"
  },
  headerTitle: {
    in: "B2B Go-to-Market - Vertical Industry dan Account Ownership",
    en: "B2B Go-to-Market - Vertical Industry & Account Ownership"
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
