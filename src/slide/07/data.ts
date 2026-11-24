import { useLanguage } from '@/contexts/LanguageContext';

export type ClusterId = 'b2b-cluster' | 'b2g-cluster' | 'retail-pilot-cluster';
export type MacroStatId = 'datacenter-mw' | 'gov-procurement';
export type GovernanceCardId = 'prioritization-mapping' | 'evidence-required';
export type FunnelStepId =
  | 'target-account'
  | 'relevant-need'
  | 'qualified-opportunity'
  | 'win-probability'
  | 'revenue-obtainable';

export interface Slide07ModalPayload {
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

export interface OpportunityCluster {
  id: ClusterId;
  tag: string;
  title: string;
  itemsSummary: string;
  focusLine: string;
  positionClass: string;
  modal: Slide07ModalPayload;
}

export interface MacroStatCard {
  id: MacroStatId;
  sourceRef: string;
  yearLabel: string;
  primaryMetric: string;
  secondaryMetric?: string;
  title: string;
  caveatLine: string;
  modal: Slide07ModalPayload;
}

export interface GovernanceCard {
  id: GovernanceCardId;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide07ModalPayload;
}

export interface FunnelStep {
  id: FunnelStepId;
  stepNumber: string;
  title: string;
  keywords: string;
  modal: Slide07ModalPayload;
}

export interface Slide07Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  matrix: {
    sectionTitle: string;
    unratedNote: string;
    yAxisLabel: string;
    xAxisLabel: string;
    xLowLabel: string;
    xHighLabel: string;
    yLowLabel: string;
    yHighLabel: string;
    clusters: OpportunityCluster[];
  };
  macroSection: {
    sectionTitle: string;
    disclaimerBanner: string;
    stats: MacroStatCard[];
    governanceCards: GovernanceCard[];
  };
  funnelSection: {
    sectionTitle: string;
    methodologyNote: string;
    steps: FunnelStep[];
  };
}

export const slideDataId: Slide07Data = {
  eyebrow: "Peluang Pasar",
  title: "Prioritas B2B, B2G, dan Channel Retail",
  subtitle:
    "Alasan arah pasar dan mekanisme validasi berbasis akun — bukan klaim TAM yang belum terukur.",
  matrix: {
    sectionTitle: "Opportunity Map: Potensi Kebutuhan vs Kemudahan Akses",
    unratedNote:
      "Cluster ditempatkan untuk dinilai — bukan rating tinggi/rendah tanpa bukti internal",
    yAxisLabel: "Potensi Kebutuhan",
    xAxisLabel: "Kemudahan Akses",
    xLowLabel: "Akses bertahap",
    xHighLabel: "Akses langsung",
    yLowLabel: "Kebutuhan rutin",
    yHighLabel: "Kebutuhan proyek",
    clusters: [
      {
        id: "b2b-cluster",
        tag: "Cluster B2B • 7 Sektor",
        title: "Korporat & System Integrator",
        itemsSummary:
          "Education • Manufacturing • Financial • Healthcare • Hospitality • ICT • Oil & Gas",
        focusLine: "Server baru/second, networking, IT Solution & internet",
        positionClass: "col-start-2 row-start-1",
        modal: {
          badge: "Cluster B2B • 7 Sektor Industri",
          subtitle: "End-Customer Korporat & SI",
          title: "Prioritas B2B & Aktivasi Jaringan SI",
          metric: "7 Sektor",
          metricLabel: "Kandidat Evaluasi",
          summary:
            "Memanfaatkan jaringan eksisting untuk menawarkan perangkat serta membuka peluang kemitraan proyek sebagai subcon SI.",
          highlights: [
            "Fokus penawaran: server baru/second, networking, IT Solution, dan layanan internet.",
            "7 sektor dievaluasi ulang berdasarkan histori transaksi aktual — tidak langsung diberi skor tanpa bukti.",
            "Market mapping kota/industri memetakan daftar account, SI, maincon, dan siklus upgrade perangkat."
          ],
          footerLabel: "Validasi",
          footerValue: "Dinilai lewat 6 faktor prioritas per akun dan wilayah",
          accent: "slate"
        }
      },
      {
        id: "b2g-cluster",
        tag: "Cluster B2G • Institusi Publik",
        title: "Pemerintah, BUMN & Layanan Publik",
        itemsSummary: "K/L • BUMN • Badan/Lembaga • Pemda • BPD • Sudin/UPT/RSUD/Puskesmas",
        focusLine: "Peluang subcon, e-Catalog & tender relevan",
        positionClass: "col-start-1 row-start-1",
        modal: {
          badge: "Cluster B2G • Sektor Publik",
          subtitle: "Kepatuhan & Kemitraan",
          title: "Masuk Bertahap melalui Subcon & e-Catalog",
          metric: "6 Kelompok",
          metricLabel: "Institusi Publik",
          summary:
            "Menjajaki instansi publik secara selektif dengan memaksimalkan Katalog Elektronik, tender relevan, dan peran subcon.",
          highlights: [
            "Mencakup K/L, BUMN, Badan/Lembaga, Pemda, BPD, hingga unit layanan (Sudin, UPT, RSUD, Puskesmas).",
            "Setiap peluang wajib melewati pemeriksaan kelayakan produk baru vs second serta syarat administrasi.",
            "Rekam jejak dibangun dari paket yang sesuai kapasitas modal kerja dan waktu pembayaran."
          ],
          footerLabel: "Prinsip",
          footerValue: "Selektif pada tender relevan dan kemitraan subcon/maincon",
          accent: "slate"
        }
      },
      {
        id: "retail-pilot-cluster",
        tag: "Channel Retail • Ekspansi Terukur",
        title: "Toko / Cabang Kecil via Pilot Area",
        itemsSummary: "Ekspansi mengikuti kondisi kota/daerah",
        focusLine: "Ukur footfall, penjualan, margin, biaya & payback",
        positionClass: "col-start-2 row-start-2",
        modal: {
          badge: "Channel Retail • Pilot Area",
          subtitle: "Uji Validasi Lokasi",
          title: "Ekspansi Toko/Cabang Kecil Berbasis Pilot",
          metric: "5 Metrik",
          metricLabel: "Gerbang Uji Pilot",
          summary:
            "Retail tetap ditumbuhkan lewat toko/cabang kecil yang diuji satu per satu melalui pilot area sebelum replikasi.",
          highlights: [
            "Menghindari pembukaan banyak cabang secara serentak tanpa validasi pasar daerah.",
            "5 ukuran kelayakan pilot: footfall/leads, penjualan, margin kontribusi, biaya lokasi, dan payback.",
            "Keputusan lanjut atau tutup pilot berbasis angka kontribusi aktual di area uji."
          ],
          footerLabel: "Kendali",
          footerValue: "Replikasi cabang hanya setelah unit economics pilot terbukti",
          accent: "slate"
        }
      }
    ]
  },
  macroSection: {
    sectionTitle: "Konteks Riset Ekosistem Nasional",
    disclaimerBanner:
      "Disclaimer: Angka makro berikut adalah indikator ekosistem nasional — BUKAN TAM atau proyeksi penjualan.",
    stats: [
      {
        id: "datacenter-mw",
        sourceRef: "Sumber [R6] • Komdigi",
        yearLabel: "2025",
        primaryMetric: "±370 MW",
        title: "Kapasitas Data Center Indonesia",
        caveatLine: "Indikator infrastruktur digital — bukan proyeksi penjualan server.",
        modal: {
          badge: "Riset Ekosistem • [R6]",
          subtitle: "Laporan Kinerja Komdigi 2025",
          title: "Kapasitas Data Center & Pengolahan Data Terpusat",
          metric: "±370 MW",
          metricLabel: "Kapasitas Nasional 2025",
          summary:
            "Riset nasional mengindikasikan pertumbuhan kebutuhan penyimpanan dan pengolahan data terpusat pada ekosistem pemerintah dan industri.",
          highlights: [
            "Kapasitas data center Indonesia tercatat sekitar 370 MW pada tahun 2025.",
            "Laporan Komdigi mencatat 404 dari 730 instansi pusat/daerah (55,34%) terhubung PDNS pada 2025.",
            "Dipakai sebatas konteks arah permintaan infrastruktur, bukan angka penjualan server perusahaan."
          ],
          footerLabel: "Rujukan",
          footerValue: "Kementerian Komunikasi dan Digital, Laporan Kinerja 2025 [R6]",
          accent: "slate"
        }
      },
      {
        id: "gov-procurement",
        sourceRef: "Sumber [R5] • LKPP",
        yearLabel: "TA 2026",
        primaryMetric: "Rp911,7 T",
        secondaryMetric: "Rp135,4 T e-Catalog (s.d. 24 Jul 2026)",
        title: "Estimasi Belanja Pengadaan Pemerintah",
        caveatLine: "Skala ekosistem lintas kategori — bukan TAM IT yang otomatis diraih.",
        modal: {
          badge: "Riset Ekosistem • [R5]",
          subtitle: "Siaran Pers LKPP 29 Juli 2026",
          title: "Skala Belanja Pengadaan & Katalog Elektronik",
          metric: "Rp911,7 T",
          metricLabel: "Estimasi Belanja TA 2026",
          summary:
            "Menunjukkan besarnya ekosistem pengadaan pemerintah lintas sektor barang dan jasa, bukan pasar IT yang otomatis dapat dimenangkan.",
          highlights: [
            "Estimasi total belanja pengadaan pemerintah TA 2026 sebesar Rp911,7 triliun lintas kategori.",
            "Transaksi Katalog Elektronik mencapai Rp135,4 triliun hingga 24 Juli 2026 (>1,06 juta transaksi).",
            "Batas klaim: jangan menyebut Rp911,7 T sebagai TAM pasar IT perusahaan."
          ],
          footerLabel: "Rujukan",
          footerValue: "LKPP, Siaran Pers 6/SP-Ses.3/7/2026 (29 Juli 2026) [R5]",
          accent: "slate"
        }
      }
    ],
    governanceCards: [
      {
        id: "prioritization-mapping",
        tag: "6 Faktor & Mapping",
        title: "Scoring & Peta Kota",
        keywords: "Product fit • PIC • Repeat • Margin • Cycle • Risiko bayar",
        modal: {
          badge: "Prioritas & Market Mapping",
          subtitle: "Kriteria Evaluasi Sektor",
          title: "6 Faktor Prioritas & Mapping Kota/Industri",
          metric: "6 Faktor",
          metricLabel: "Kriteria Penilaian",
          summary:
            "Menentukan sektor dan kota prioritas berdasarkan kesiapan produk, akses keputusan, profitabilitas, dan profil risiko.",
          highlights: [
            "6 faktor scoring: product fit, akses PIC/relationship, peluang repeat, potensi gross margin, sales cycle, dan risiko pembayaran.",
            "Market mapping per kota/industri mencatat daftar account, SI, maincon, dan tender relevan.",
            "Menelusuri existing customer serta siklus penggantian/upgrade perangkat di tiap klaster."
          ],
          footerLabel: "Keluaran",
          footerValue: "Daftar target akun terverifikasi per kota dan industri",
          accent: "slate"
        }
      },
      {
        id: "evidence-required",
        tag: "Bukti Wajib",
        title: "Data Validasi Peluang",
        keywords: "Klien aktif • SI/Maincon/e-Catalog • Histori menang/kalah",
        modal: {
          badge: "Kesiapan Data",
          subtitle: "Data / Bukti yang Disiapkan",
          title: "Tiga Kelompok Bukti untuk Menilai Cluster",
          metric: "3 Pilar Data",
          metricLabel: "Validasi Internal",
          summary:
            "Scoring cluster dan sizing akun baru sah dilakukan setelah tiga kelompok data historis dan kanal ini diverifikasi.",
          highlights: [
            "Daftar pelanggan aktif per industri dan kota beserta nilai transaksi, margin, frekuensi, dan repeat order.",
            "Daftar SI, maincon, vendor/principal, portal e-proc korporasi, serta item Katalog Elektronik yang sesuai produk.",
            "Data tender/proyek historis: jumlah peluang, lolos administrasi, penawaran, menang/kalah, nilai kontrak, dan waktu bayar."
          ],
          footerLabel: "Tujuan",
          footerValue: "Mengganti asumsi pasar dengan konversi pipeline berbasis bukti",
          accent: "slate"
        }
      }
    ]
  },
  funnelSection: {
    sectionTitle: "Funnel Market Sizing Bottom-Up",
    methodologyNote: "Dihitung dari akun terjangkau — tanpa angka market share buatan",
    steps: [
      {
        id: "target-account",
        stepNumber: "01",
        title: "Target Account",
        keywords: "Akun terpetakan, SI & maincon",
        modal: {
          badge: "Tahap 01 • Bottom-Up Sizing",
          subtitle: "Basis Akun Terjangkau",
          title: "Target Account Terpetakan",
          summary:
            "Menghimpun daftar akun nyata per kota/industri yang dapat dijangkau tim penjualan dan jaringan relasi.",
          highlights: [
            "Berasal dari daftar pelanggan aktif, prospek korporat 7 sektor, mitra SI/maincon, dan instansi relevan.",
            "Setiap akun memiliki kelengkapan profil wilayah, sektor, dan jalur masuk (direct atau subcon).",
            "Menjadi penyebut awal perhitungan agar tidak memulai dari angka makro nasional."
          ],
          footerLabel: "Basis",
          footerValue: "Daftar akun riil di CRM, bukan estimasi populasi pasar",
          accent: "slate"
        }
      },
      {
        id: "relevant-need",
        stepNumber: "02",
        title: "Kebutuhan Relevan",
        keywords: "Upgrade perangkat, server & solusi",
        modal: {
          badge: "Tahap 02 • Bottom-Up Sizing",
          subtitle: "Kesesuaian Portofolio",
          title: "Kebutuhan yang Cocok dengan Produk",
          summary:
            "Menyaring hanya kebutuhan pengadaan atau upgrade yang benar-benar cocok dengan stok dan kapabilitas produk.",
          highlights: [
            "Mencakup server baru/second, jaringan, perangkat kerja, IT Solution, dan paket maintenance.",
            "Menghilangkan item yang tidak sesuai regulasi segmen (misalnya batas barang baru vs second pada tender tertentu).",
            "Mencatat perkiraan siklus penggantian perangkat pada klien eksisting."
          ],
          footerLabel: "Filter",
          footerValue: "Product fit & kesesuaian kondisi unit (New vs Second)",
          accent: "slate"
        }
      },
      {
        id: "qualified-opportunity",
        stepNumber: "03",
        title: "Qualified Opportunity",
        keywords: "Lolos akses PIC, margin & bayar",
        modal: {
          badge: "Tahap 03 • Bottom-Up Sizing",
          subtitle: "Penyaringan Komersial",
          title: "Peluang Lolos 6 Faktor & Bid/No-Bid",
          summary:
            "Menetapkan peluang aktif hanya jika akses PIC jelas, margin memadai, dan risiko pembayaran terkendali.",
          highlights: [
            "Mengevaluasi product fit, akses pengambil keputusan, peluang repeat, gross margin, dan sales cycle.",
            "Peluang B2G disaring melalui kesiapan dokumen, portal e-proc/e-Catalog, dan kapasitas modal kerja.",
            "Mencegah pipeline penuh oleh prospek berisiko macet atau margin terlalu tipis."
          ],
          footerLabel: "Gerbang",
          footerValue: "Akses PIC tervalidasi & risiko bayar lolos evaluasi",
          accent: "slate"
        }
      },
      {
        id: "win-probability",
        stepNumber: "04",
        title: "Win Probability",
        keywords: "Berbasis histori menang/kalah",
        modal: {
          badge: "Tahap 04 • Bottom-Up Sizing",
          subtitle: "Kalibrasi Peluang Menang",
          title: "Probabilitas Menang Berbasis Rekam Jejak",
          summary:
            "Mengalikan nilai peluang qualified dengan tingkat keberhasilan historis yang realistis per kanal dan tipe paket.",
          highlights: [
            "Mengacu pada rasio historis lolos administrasi, pengajuan penawaran, dan menang/kalah proyek.",
            "Membedakan probabilitas repeat order klien aktif dibanding tender baru atau kerja sama subcon.",
            "Tidak memasang asumsi pangsa pasar statis tanpa data konversi historis."
          ],
          footerLabel: "Kalibrasi",
          footerValue: "Rasio konversi historis per portofolio dan jalur masuk",
          accent: "slate"
        }
      },
      {
        id: "revenue-obtainable",
        stepNumber: "05",
        title: "Revenue Obtainable",
        keywords: "Target realistis sesuai kapasitas",
        modal: {
          badge: "Tahap 05 • Bottom-Up Sizing",
          subtitle: "Output Pendapatan Terukur",
          title: "Proyeksi Pendapatan yang Dapat Diraih",
          summary:
            "Menghasilkan estimasi pendapatan yang selaras dengan ketersediaan stok, tim teknis, dan daya tahan kas.",
          highlights: [
            "Dihitung dari akumulasi nilai kontrak tertimbang probabilitas menang dan jadwal realisasi penagihan.",
            "Menjaga keseimbangan antara pertumbuhan B2B/B2G dan kestabilan kas dari Retail/Distribusi.",
            "Menjadi dasar target realistis per kuartal yang dapat diaudit di CRM."
          ],
          footerLabel: "Kapasitas",
          footerValue: "Selaras dengan stok, tim delivery, dan tempo pembayaran",
          accent: "slate"
        }
      }
    ]
  }
};

export const slideDataEn: Slide07Data = {
  eyebrow: "Market Opportunity",
  title: "B2B, B2G & Retail Channel Priorities",
  subtitle:
    "Explaining market direction and account-based validation — without claiming unverified TAM.",
  matrix: {
    sectionTitle: "Opportunity Map: Need Potential vs Access Feasibility",
    unratedNote:
      "Clusters placed for assessment — no unverified High/Low rating assigned without internal proof",
    yAxisLabel: "Need Potential",
    xAxisLabel: "Access Feasibility",
    xLowLabel: "Phased access",
    xHighLabel: "Direct access",
    yLowLabel: "Routine demand",
    yHighLabel: "Project demand",
    clusters: [
      {
        id: "b2b-cluster",
        tag: "B2B Cluster • 7 Verticals",
        title: "Corporate End-Users & System Integrators",
        itemsSummary:
          "Education • Manufacturing • Financial • Healthcare • Hospitality • ICT • Oil & Gas",
        focusLine: "New/second servers, networking, IT Solutions & internet",
        positionClass: "col-start-2 row-start-1",
        modal: {
          badge: "B2B Cluster • 7 Industry Verticals",
          subtitle: "Corporate & SI Accounts",
          title: "B2B Priorities & SI Network Outreach",
          metric: "7 Sectors",
          metricLabel: "Under Evaluation",
          summary:
            "Leverages existing networks to introduce capabilities and win project participation as an SI subcontractor.",
          highlights: [
            "Core focus: new/second servers, networking, IT Solutions, and connectivity services.",
            "All 7 industry verticals await internal transaction scoring rather than guessed priority labels.",
            "City/industry mapping compiles target accounts, SIs, maincons, and hardware refresh cycles."
          ],
          footerLabel: "Validation",
          footerValue: "Scored via 6 prioritization factors per city and account",
          accent: "slate"
        }
      },
      {
        id: "b2g-cluster",
        tag: "B2G Cluster • Public Sector",
        title: "Ministries, SOEs & Public Units",
        itemsSummary:
          "Ministries/Agencies • SOEs • Regional Gov • Regional Banks • Municipal/Health Units",
        focusLine: "Subcon entry, e-Catalog & eligible tenders",
        positionClass: "col-start-1 row-start-1",
        modal: {
          badge: "B2G Cluster • Public Institutions",
          subtitle: "Compliance & Partnerships",
          title: "Phased Entry via Subcon & e-Catalog",
          metric: "6 Groups",
          metricLabel: "Public Institutions",
          summary:
            "Pursues public-sector opportunities selectively through e-Catalog listings, eligible bids, and subcon partnerships.",
          highlights: [
            "Spans Ministries (K/L), SOEs (BUMN), agencies, Regional Gov (Pemda), BPDs, and local health/service units.",
            "Every bid passes new-vs-refurbished eligibility checks and administrative readiness gates.",
            "Track record is built selectively within working-capital and payment-term limits."
          ],
          footerLabel: "Principle",
          footerValue: "Selective participation via subcon/maincon partners and e-Catalog",
          accent: "slate"
        }
      },
      {
        id: "retail-pilot-cluster",
        tag: "Retail Channel • Measured Growth",
        title: "Small Stores / Branches via Area Pilots",
        itemsSummary: "Sized to local city and regional conditions",
        focusLine: "Track footfall, sales, margin, rent cost & payback",
        positionClass: "col-start-2 row-start-2",
        modal: {
          badge: "Retail Channel • Area Pilot",
          subtitle: "Location Validation Gate",
          title: "Validating Small Branches via Area Pilots",
          metric: "5 Metrics",
          metricLabel: "Pilot Scorecard",
          summary:
            "Continues retail expansion through small local branches tested one area at a time rather than mass rollout.",
          highlights: [
            "Avoids opening multiple outlets before proving regional unit economics.",
            "5 pilot metrics tracked: footfall/leads, sales volume, contribution margin, location cost, and payback.",
            "Scale-up or exit decisions follow actual pilot contribution data."
          ],
          footerLabel: "Discipline",
          footerValue: "Branch replication occurs only after pilot payback is proven",
          accent: "slate"
        }
      }
    ]
  },
  macroSection: {
    sectionTitle: "National Ecosystem Research Context",
    disclaimerBanner:
      "Disclaimer: Macro figures provide national ecosystem context ONLY — NOT company TAM or sales forecast.",
    stats: [
      {
        id: "datacenter-mw",
        sourceRef: "Source [R6] • Komdigi",
        yearLabel: "2025",
        primaryMetric: "±370 MW",
        title: "Indonesia Data Center Capacity",
        caveatLine: "Infrastructure indicator only — not a server sales forecast.",
        modal: {
          badge: "Ecosystem Research • [R6]",
          subtitle: "Komdigi 2025 Performance Report",
          title: "Data Center Capacity & Centralized Public Data",
          metric: "±370 MW",
          metricLabel: "National Capacity 2025",
          summary:
            "National infrastructure reporting confirms rising demand for centralized storage and compute across public and enterprise ecosystems.",
          highlights: [
            "Indonesia's data center capacity reached approximately 370 MW in 2025.",
            "Komdigi reported 404 of 730 central/regional institutions (55.34%) connected to PDNS in 2025.",
            "Used purely as directional infrastructure context — never as a hardware revenue projection."
          ],
          footerLabel: "Citation",
          footerValue: "Ministry of Communication & Digital (Komdigi), 2025 Performance Report [R6]",
          accent: "slate"
        }
      },
      {
        id: "gov-procurement",
        sourceRef: "Source [R5] • LKPP",
        yearLabel: "FY 2026",
        primaryMetric: "Rp911.7 T",
        secondaryMetric: "Rp135.4 T e-Catalog (through 24 Jul 2026)",
        title: "Estimated Gov Procurement Spending",
        caveatLine: "Cross-category ecosystem scale — not automatically winnable IT TAM.",
        modal: {
          badge: "Ecosystem Research • [R5]",
          subtitle: "LKPP Press Release 29 July 2026",
          title: "Government Procurement & e-Catalog Scale",
          metric: "Rp911.7 T",
          metricLabel: "FY2026 Est. Spending",
          summary:
            "Illustrates total cross-category public procurement volume rather than IT spend automatically addressable or winnable.",
          highlights: [
            "Estimated FY2026 government procurement totals Rp911.7 trillion across all goods and services.",
            "Electronic Catalog transactions reached Rp135.4 trillion by 24 July 2026 (>1.06M transactions).",
            "Claim boundary: never present Rp911.7 T as addressable IT market size."
          ],
          footerLabel: "Citation",
          footerValue: "LKPP Press Release 6/SP-Ses.3/7/2026 (29 July 2026) [R5]",
          accent: "slate"
        }
      }
    ],
    governanceCards: [
      {
        id: "prioritization-mapping",
        tag: "6 Factors & Mapping",
        title: "Scoring & City Map",
        keywords: "Product fit • PIC • Repeat • Margin • Cycle • Payment risk",
        modal: {
          badge: "Prioritization & Market Mapping",
          subtitle: "Sector Evaluation Criteria",
          title: "6 Priority Factors & City/Industry Mapping",
          metric: "6 Factors",
          metricLabel: "Scoring Matrix",
          summary:
            "Prioritizes sectors and cities by product readiness, buyer access, gross margin quality, and payment risk.",
          highlights: [
            "6 scoring criteria: product fit, PIC access, repeat potential, gross margin, sales cycle, and payment risk.",
            "City/industry mapping tracks target accounts, SIs, maincons, and relevant open tenders.",
            "Maps existing customers alongside device replacement and upgrade cycles."
          ],
          footerLabel: "Output",
          footerValue: "Verified target account roster by city and vertical",
          accent: "slate"
        }
      },
      {
        id: "evidence-required",
        tag: "Required Proof",
        title: "Validation Evidence Data",
        keywords: "Active clients • SI/e-Catalog • Historical win/loss",
        modal: {
          badge: "Data Readiness",
          subtitle: "Evidence Required",
          title: "Three Proof Pillars Before Cluster Scoring",
          metric: "3 Data Pillars",
          metricLabel: "Internal Validation",
          summary:
            "Final cluster prioritization and bottom-up sizing require validating these three internal and channel datasets.",
          highlights: [
            "Active customer roster per industry/city with transaction value, margin, frequency, and repeat orders.",
            "Directory of SIs, maincons, principals, corporate e-proc portals, and eligible e-Catalog listings.",
            "Historical bid/project logs: opportunities, admin pass rate, quotes, win/loss, contract value, and DSO."
          ],
          footerLabel: "Purpose",
          footerValue: "Replaces broad market assumptions with evidence-backed conversion",
          accent: "slate"
        }
      }
    ]
  },
  funnelSection: {
    sectionTitle: "Bottom-Up Market Sizing Funnel",
    methodologyNote: "Sized from reachable accounts — zero fabricated market-share claims",
    steps: [
      {
        id: "target-account",
        stepNumber: "01",
        title: "Target Account",
        keywords: "Mapped accounts, SIs & maincons",
        modal: {
          badge: "Stage 01 • Bottom-Up Sizing",
          subtitle: "Reachable Account Base",
          title: "Mapped Target Accounts",
          summary:
            "Starts from real accounts per city and sector reachable via direct sales teams and partner networks.",
          highlights: [
            "Combines active clients, 7-sector corporate prospects, SI/maincon partners, and eligible public units.",
            "Records city coverage, industry profile, and entry path (direct vs subcon).",
            "Grounds sizing in concrete CRM records instead of top-down national totals."
          ],
          footerLabel: "Baseline",
          footerValue: "Verified CRM account roster, not macro population guesses",
          accent: "slate"
        }
      },
      {
        id: "relevant-need",
        stepNumber: "02",
        title: "Relevant Need",
        keywords: "Hardware refresh, servers & solutions",
        modal: {
          badge: "Stage 02 • Bottom-Up Sizing",
          subtitle: "Portfolio Match",
          title: "Verified Hardware & Solution Needs",
          summary:
            "Filters for actual procurement or refresh demand matching available inventory and technical capabilities.",
          highlights: [
            "Covers new/second servers, networking, client devices, IT Solutions, and maintenance.",
            "Excludes packages incompatible with new-vs-refurbished eligibility rules.",
            "Captures recurring device upgrade cycles across active accounts."
          ],
          footerLabel: "Filter",
          footerValue: "Product fit & condition eligibility (New vs Second)",
          accent: "slate"
        }
      },
      {
        id: "qualified-opportunity",
        stepNumber: "03",
        title: "Qualified Opportunity",
        keywords: "PIC access, margin & risk screened",
        modal: {
          badge: "Stage 03 • Bottom-Up Sizing",
          subtitle: "Commercial Screening",
          title: "Opportunities Passing 6-Factor Gate",
          summary:
            "Qualifies active deals only where buyer access, margin threshold, and payment risk pass review.",
          highlights: [
            "Evaluates product fit, PIC relationship, repeat potential, gross margin, and sales cycle.",
            "Public tenders pass administrative readiness, portal access, and working-capital checks.",
            "Prevents inflating pipeline with low-margin or high-default prospects."
          ],
          footerLabel: "Gate",
          footerValue: "Verified decision-maker access & credit-risk clearance",
          accent: "slate"
        }
      },
      {
        id: "win-probability",
        stepNumber: "04",
        title: "Win Probability",
        keywords: "Anchored on win/loss history",
        modal: {
          badge: "Stage 04 • Bottom-Up Sizing",
          subtitle: "Conversion Calibration",
          title: "Evidence-Based Win Probability",
          summary:
            "Applies realistic historical close rates segmented by sales channel, client type, and bid complexity.",
          highlights: [
            "Derived from historical admin qualification, quote conversion, and tender win/loss rates.",
            "Separates higher-probability repeat accounts from cold bids or subcon scopes.",
            "Avoids arbitrary market-share percentages unsupported by past performance."
          ],
          footerLabel: "Calibration",
          footerValue: "Historical close rates per portfolio and sales motion",
          accent: "slate"
        }
      },
      {
        id: "revenue-obtainable",
        stepNumber: "05",
        title: "Revenue Obtainable",
        keywords: "Realistic target within capacity",
        modal: {
          badge: "Stage 05 • Bottom-Up Sizing",
          subtitle: "Executable Revenue Output",
          title: "Realistic Obtainable Revenue",
          summary:
            "Outputs an executable revenue forecast aligned with stock availability, technical delivery, and cash capacity.",
          highlights: [
            "Aggregates probability-weighted deal values and realistic billing schedules.",
            "Balances B2B/B2G growth against steady cash flow from Retail and Distribution.",
            "Forms an auditable quarterly quota baseline inside CRM."
          ],
          footerLabel: "Constraint",
          footerValue: "Aligned with inventory, delivery bandwidth, and payment cycles",
          accent: "slate"
        }
      }
    ]
  }
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide07Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide07Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 7,
  folder: "07",
  sectionId: 5,
  navTitle: {
    in: "Peluang Pasar",
    en: "Market Opportunity"
  },
  headerTitle: {
    in: "Market Opportunity - Prioritas B2B, B2G, dan Channel Retail",
    en: "Market Opportunity - B2B, B2G & Retail Channel Priorities"
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
