import { useLanguage } from '@/contexts/LanguageContext';
import type { FlywheelStepId, ServerFactorId, ContentWeekId } from './utils';

export interface Slide16ModalPayload {
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

export interface FlywheelStepItem {
  id: FlywheelStepId;
  stepCode: string;
  title: string;
  shortCue: string;
  kpiCue: string;
  modal: Slide16ModalPayload;
}

export interface ServerFactorItem {
  id: ServerFactorId;
  label: string;
  onPremCue: string;
  cloudCue: string;
}

export interface ContentWeekItem {
  id: ContentWeekId;
  weekLabel: string;
  themeTitle: string;
  channelCue: string;
  trackCue: string;
  modal: Slide16ModalPayload;
}

export interface Slide16Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  orgCollaborationCue: string;
  flywheelSection: {
    sectionTitle: string;
    narrativeFormula: string;
    steps: FlywheelStepItem[];
  };
  campaignSection: {
    sectionTitle: string;
    hypothesisBadgeLabel: string;
    centralQuestion: string;
    balanceRule: string;
    priorityListCue: string;
    columnHeaders: {
      factor: string;
      onPrem: string;
      cloud: string;
    };
    factors: ServerFactorItem[];
    campaignModal: Slide16ModalPayload;
  };
  calendarSection: {
    sectionTitle: string;
    simulationLabel: string;
    weeks: ContentWeekItem[];
  };
  partnerRuleCard: {
    code: string;
    title: string;
    keywords: string;
    modal: Slide16ModalPayload;
  };
  evidenceFooter: string;
}

export const slideDataId: Slide16Data = {
  eyebrow: "Permintaan Pasar & Diferensiasi Komersial",
  title: "Marketing Engine: Personal Brand, Demand Generation, dan Partner",
  subtitle:
    "Membangun mesin permintaan yang relevan bersama Digital Creative, Analytics/CRM, Owner voice (bila disetujui), dan mitra produk komplementer.",
  orgCollaborationCue: "Fokus Metrik: Lead Quality • CPL • MQL→SQL • Revenue Attribution",
  flywheelSection: {
    sectionTitle: "Marketing Flywheel (7 Tahap Tertutup)",
    narrativeFormula: "Narasi: Who We Serve • Problem • Proof • Why Us (Perusahaan Tetap Brand Utama)",
    steps: [
      {
        id: "brand-awareness",
        stepCode: "01",
        title: "Brand Awareness",
        shortCue: "Identitas & voice resmi",
        kpiCue: "Brand guideline",
        modal: {
          badge: "Flywheel 01 • Brand Awareness",
          subtitle: "Posisi & Narasi Brand",
          title: "Brand Utama Perusahaan & Personal Brand Owner (Dengan Izin)",
          metric: "4 Pilar",
          metricLabel: "Formula Narasi",
          summary:
            "Menyampaikan siapa yang dilayani, masalah bisnis yang diselesaikan, bukti kerja, dan alasan memilih perusahaan.",
          highlights: [
            "Perusahaan tetap menjadi brand utama dalam seluruh komunikasi publik.",
            "Owner tampil sebagai suara/wajah edukasi publik hanya apabila disetujui serta sesuai brand guideline."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Brand guideline & persetujuan aset komunikasi Owner",
          accent: "slate"
        }
      },
      {
        id: "content-education",
        stepCode: "02",
        title: "Content / Education",
        shortCue: "Artikel, video & webinar",
        kpiCue: "Digital Creative",
        modal: {
          badge: "Flywheel 02 • Content & Education",
          subtitle: "Edukasi Kebutuhan Pasar",
          title: "Konten Edukasi Produk, Solusi IT & Studi Kasus",
          metric: "5 Fokus",
          metricLabel: "Topik Kampanye",
          summary:
            "Memproduksi konten praktis tentang server on-premise, networking, device refresh, refurbished bergaransi, dan IT service.",
          highlights: [
            "Dikerjakan erat bersama tim Digital Creative melalui artikel, video singkat, infografis, dan webinar.",
            "Asumsi permintaan konten diuji langsung melalui respons audiens, bukan dianggap fakta baku."
          ],
          footerLabel: "Tujuan",
          footerValue: "Mempercepat pemahaman calon klien sebelum percakapan sales",
          accent: "slate"
        }
      },
      {
        id: "lead-capture",
        stepCode: "03",
        title: "Lead Capture",
        shortCue: "Landing page, form & market",
        kpiCue: "Source tracking",
        modal: {
          badge: "Flywheel 03 • Lead Capture",
          subtitle: "Kanal Penangkapan Prospek",
          title: "Landing Page, Form Kebutuhan, Marketplace, Referral & Partner",
          metric: "Multi-Kanal",
          metricLabel: "Pintu Masuk Lead",
          summary:
            "Menangkap prospek dengan value proposition jelas, CTA terarah, dan pelacakan sumber kampanye yang rapi.",
          highlights: [
            "Menghubungkan landing page, form kebutuhan, optimasi marketplace, event/webinar, serta rujukan partner.",
            "Setiap kampanye wajib mencatat target audience, budget, CTA, dan source tracking."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Data baseline traffic web, marketplace & cost per lead historis",
          accent: "slate"
        }
      },
      {
        id: "qualification",
        stepCode: "04",
        title: "Qualification",
        shortCue: "Screening MQL → SQL",
        kpiCue: "Cost/Qualified Lead",
        modal: {
          badge: "Flywheel 04 • Qualification",
          subtitle: "Kualitas Lebih Utama dari Reach",
          title: "Kualifikasi MQL ke SQL & Pengukuran Cost per Qualified Lead",
          metric: "MQL → SQL",
          metricLabel: "Filter Kualitas",
          summary:
            "Menyaring kecocokan kebutuhan, anggaran, dan jadwal prospek sebelum diserahkan sebagai peluang Sales.",
          highlights: [
            "Mengukur kualitas lead, rasio konversi MQL ke SQL, dan biaya per qualified lead.",
            "Memastikan tim Sales tidak terbebani prospek di luar lingkup layanan."
          ],
          footerLabel: "Standar",
          footerValue: "Definisi kriteria MQL & SQL disepakati bersama Sales & Analytics",
          accent: "red"
        }
      },
      {
        id: "sales-handover",
        stepCode: "05",
        title: "Sales Handover",
        shortCue: "Distribusi adil di CRM",
        kpiCue: "SLA respon",
        modal: {
          badge: "Flywheel 05 • Sales Handover",
          subtitle: "Integrasi Marketing ke Sales",
          title: "Serah Terima Lead Terukur Berdasarkan SOP Assignment",
          metric: "Terlacak",
          metricLabel: "Integrasi CRM",
          summary:
            "Mengirimkan lead terkualifikasi lengkap dengan riwayat interaksi kampanye langsung ke pemilik akun di CRM.",
          highlights: [
            "Pembagian lead mengikuti aturan SOP (wilayah/segmen/keahlian), bukan preferensi pribadi.",
            "Menghubungkan sumber kampanye awal hingga status pipeline dan kontribusi omzet."
          ],
          footerLabel: "Keterkaitan",
          footerValue: "Dipantau lewat dashboard Analytics & CRM",
          accent: "slate"
        }
      },
      {
        id: "customer-proof",
        stepCode: "06",
        title: "Customer Proof",
        shortCue: "Studi kasus sah",
        kpiCue: "Tanpa data rahasia",
        modal: {
          badge: "Flywheel 06 • Customer Proof",
          subtitle: "Bukti Nyata Implementasi",
          title: "Konversi Keberhasilan Proyek Menjadi Aset Kepercayaan",
          metric: "Terverifikasi",
          metricLabel: "Bukti Komersial",
          summary:
            "Mendokumentasikan penyelesaian masalah pelanggan sebagai studi kasus yang dapat ditampilkan secara etis.",
          highlights: [
            "Wajib menjaga kerahasiaan data pelanggan — tidak menampilkan nama/dokumen sensitif tanpa izin.",
            "Memperkuat kredibilitas saat tim Sales mempresentasikan solusi ke prospek baru."
          ],
          footerLabel: "Aturan",
          footerValue: "Gunakan studi kasus teranonimisasi atau berizin tertulis",
          accent: "slate"
        }
      },
      {
        id: "referral-retention",
        stepCode: "07",
        title: "Referral / Retention",
        shortCue: "Atribusi & repeat order",
        kpiCue: "Revenue attribution",
        modal: {
          badge: "Flywheel 07 • Referral & Retention",
          subtitle: "Data & Retention Loop",
          title: "Atribusi Pendapatan, Retensi Pelanggan & Program Rujukan",
          metric: "Loop Penuh",
          metricLabel: "Dampak Bisnis",
          summary:
            "Mengukur kontribusi nyata kampanye terhadap omzet dan menjaga hubungan pelanggan untuk pembelian ulang.",
          highlights: [
            "Melacak revenue attribution per sumber kampanye bersama fungsi Analytics & CRM/Data.",
            "Mengaktifkan program referral pelanggan puas dan retensi kontrak dukungan/refresh."
          ],
          footerLabel: "Ukuran Akhir",
          footerValue: "Kontribusi pipeline, omzet tercapai & tingkat retensi akun",
          accent: "red"
        }
      }
    ]
  },
  campaignSection: {
    sectionTitle: "Konsep Kampanye Server (Hipotesis Uji Pasar)",
    hypothesisBadgeLabel: "Hipotesis Uji — Bukan Klaim Pasar Beralih ke Satu Model Saja",
    centralQuestion: "Tema: “On-premise vs Cloud: kapan setiap model lebih tepat?”",
    balanceRule: "Menguji kebutuhan server fisik/on-premise secara objektif berdampingan dengan opsi cloud",
    priorityListCue: "Kampanye Lain: Networking • Device Refresh • Refurbished Terjamin • IT Service",
    columnHeaders: {
      factor: "Faktor Evaluasi",
      onPrem: "Lebih Condong On-Premise",
      cloud: "Lebih Condong Cloud / Hybrid"
    },
    factors: [
      {
        id: "control",
        label: "Control",
        onPremCue: "Kendali penuh perangkat & lokasi fisik",
        cloudCue: "Pengelolaan infrastruktur diserahkan ke vendor"
      },
      {
        id: "latency",
        label: "Latency",
        onPremCue: "Akses LAN internal cepat tanpa jeda WAN",
        cloudCue: "Akses tersebar lintas kota/cabang internet"
      },
      {
        id: "workload",
        label: "Workload",
        onPremCue: "Beban komputasi harian stabil & terprediksi",
        cloudCue: "Lonjakan kapasitas musiman/elastis"
      },
      {
        id: "security",
        label: "Security",
        onPremCue: "Kebijakan isolasi data di jaringan lokal",
        cloudCue: "Standar kepatuhan & enkripsi multi-region"
      },
      {
        id: "capex-opex",
        label: "Capex / Opex",
        onPremCue: "Investasi aset (new/second) biaya rutin terkendali",
        cloudCue: "Belanja langganan bulanan fleksibel tanpa Capex awal"
      }
    ],
    campaignModal: {
      badge: "Konsep Kampanye • Server & Infrastruktur",
      subtitle: "Pendekatan Edukatif & Objektif",
      title: "Uji Hipotesis: “On-Premise vs Cloud: Kapan Setiap Model Lebih Tepat?”",
      metric: "Hipotesis Uji",
      metricLabel: "Status Kampanye",
      summary:
        "Menguji respons pasar terhadap penawaran server fisik/on-premise tanpa mengeklaim seluruh pasar meninggalkan atau beralih ke satu model.",
      highlights: [
        "Membantu tim IT klien membandingkan 5 parameter nyata: Control, Latency, Workload, Security, dan Capex/Opex.",
        "Mengaitkan CTA kampanye ke sesi asesmen awal bersama Sales & Engineer yang terukur di CRM.",
        "Berjalan paralel dengan kampanye Networking, Device Refresh, Refurbished terjamin, dan IT Service."
      ],
      footerLabel: "Validasi",
      footerValue: "Evaluasi dilakukan lewat CPL, jumlah SQL & konversi permintaan harga",
      accent: "red"
    }
  },
  calendarSection: {
    sectionTitle: "Mini Content Calendar (4 Minggu)",
    simulationLabel: "Simulasi Pola Bulanan (Budget & Target Dikalibrasi Pasca-Baseline)",
    weeks: [
      {
        id: "cw-1",
        weekLabel: "Minggu 1",
        themeTitle: "On-Premise vs Cloud",
        channelCue: "Artikel & Form Konsultasi",
        trackCue: "UTM + MQL Server",
        modal: {
          badge: "Content Calendar • Minggu 1",
          subtitle: "Simulasi Siklus Bulanan",
          title: "Konten Edukasi: On-Premise vs Cloud Decision Guide",
          summary:
            "Memancing diskusi kebutuhan infrastruktur IT dari sudut pandang kontrol, latensi, keamanan, dan Capex/Opex.",
          highlights: [
            "CTA menuju form asesmen kebutuhan pada landing page.",
            "Diukur dari jumlah form masuk dan rasio kualifikasi MQL."
          ],
          footerLabel: "Kampanye",
          footerValue: "Server Fisik / On-Premise & Sizing Engineer",
          accent: "slate"
        }
      },
      {
        id: "cw-2",
        weekLabel: "Minggu 2",
        themeTitle: "Device Refresh Bergaransi",
        channelCue: "Marketplace & Video QC",
        trackCue: "Chat-to-Lead",
        modal: {
          badge: "Content Calendar • Minggu 2",
          subtitle: "Simulasi Siklus Bulanan",
          title: "Transparansi Unit Refurbished Teruji & Efisiensi Refresh",
          summary:
            "Menunjukkan standar QC, kejujuran grade kondisi, dan garansi unit untuk pengadaan kantor/UMKM maupun sekolah.",
          highlights: [
            "Konten visual perbandingan unit layak pakai beserta cakupan garansi.",
            "Mengarahkan trafik ke listing marketplace dan permintaan kuotasi batch."
          ],
          footerLabel: "Kampanye",
          footerValue: "Device Refresh & Refurbished Terjamin",
          accent: "slate"
        }
      },
      {
        id: "cw-3",
        weekLabel: "Minggu 3",
        themeTitle: "Branch Network & Service",
        channelCue: "Infografis & Checklist IT",
        trackCue: "Landing Page",
        modal: {
          badge: "Content Calendar • Minggu 3",
          subtitle: "Simulasi Siklus Bulanan",
          title: "Checklist Konektivitas Cabang & Layanan Pemeliharaan",
          summary:
            "Menjawab masalah downtime antar-cabang dengan paket router/switch, internet, dan kontrak IT support.",
          highlights: [
            "Menggunakan studi kasus instalasi teranonimisasi tanpa membuka rahasia klien.",
            "Mengarahkan prospek B2B ke penjadwalan discovery call."
          ],
          footerLabel: "Kampanye",
          footerValue: "Networking, Branch Connectivity & IT Service",
          accent: "slate"
        }
      },
      {
        id: "cw-4",
        weekLabel: "Minggu 4",
        themeTitle: "Webinar / Co-Marketing",
        channelCue: "Event & Referral Mitra",
        trackCue: "SQL Attribution",
        modal: {
          badge: "Content Calendar • Minggu 4",
          subtitle: "Simulasi Siklus Bulanan",
          title: "Event / Webinar Pelanggan & Kolaborasi Partner Komplementer",
          summary:
            "Menggabungkan edukasi interaktif bersama partner pelengkap dan peninjauan atribusi hasil kampanye bulanan.",
          highlights: [
            "Kolaborasi hanya dijalankan bila scope, kepemilikan lead, dan margin sudah jelas.",
            "Menutup siklus bulanan dengan evaluasi CPL, SQL, dan kontribusi pipeline."
          ],
          footerLabel: "Kampanye",
          footerValue: "Partner Co-Marketing & Referral Engine",
          accent: "slate"
        }
      }
    ]
  },
  partnerRuleCard: {
    code: "Tata Kelola Partner",
    title: "Aturan Kolaborasi Mitra Produk Komplementer",
    keywords: "Scope • Lead Ownership • Margin • Delivery • Aturan Brand",
    modal: {
      badge: "Tata Kelola • Partner Co-Marketing",
      subtitle: "Kolaborasi Lintas Produk Pelengkap",
      title: "5 Aturan Wajib Sebelum Aktivasi Partner & Co-Marketing",
      metric: "5 Syarat",
      metricLabel: "Kontrak Kerja Sama",
      summary:
        "Setiap kemitraan produk komplementer wajib memiliki aturan main komersial tertulis sebelum kampanye bersama berjalan.",
      highlights: [
        "Wajib menetapkan scope produk/jasa masing-masing pihak serta batas tanggung jawab delivery.",
        "Menentukan aturan lead ownership agar tidak terjadi sengketa prospek, plus pembagian margin dan izin penggunaan brand.",
        "Entitas partner yang belum terverifikasi ejaan & identitasnya di brief internal tidak dipublikasikan sebelum konfirmasi resmi."
      ],
      footerLabel: "Klarifikasi Internal",
      footerValue: "Daftar resmi partner komplementer menunggu verifikasi manajemen",
      accent: "red"
    }
  },
  evidenceFooter:
    "Data Diperlukan & Batas Klaim: Performa marketplace, traffic web, CPL, konversi, brand guideline, izin asset Owner & daftar resmi partner (nama mitra yang belum terkonfirmasi di brief tetap menjadi item klarifikasi internal, tidak dipublikasikan di slide)."
};

export const slideDataEn: Slide16Data = {
  eyebrow: "Market Demand & Commercial Differentiation",
  title: "Marketing Engine: Personal Brand, Demand Generation & Partners",
  subtitle:
    "Building a relevant demand engine alongside Digital Creative, Analytics/CRM, approved Owner voice, and complementary product partners.",
  orgCollaborationCue: "Core Metrics: Lead Quality • CPL • MQL→SQL • Revenue Attribution",
  flywheelSection: {
    sectionTitle: "Closed-Loop Marketing Flywheel (7 Stages)",
    narrativeFormula: "Narrative: Who We Serve • Problem • Proof • Why Us (Company Brand Remains Primary)",
    steps: [
      {
        id: "brand-awareness",
        stepCode: "01",
        title: "Brand Awareness",
        shortCue: "Positioning & voice rules",
        kpiCue: "Brand guideline",
        modal: {
          badge: "Flywheel 01 • Brand Awareness",
          subtitle: "Brand Narrative & Voice",
          title: "Primary Corporate Brand & Approved Owner Public Voice",
          metric: "4 Elements",
          metricLabel: "Narrative Core",
          summary:
            "Communicates who we serve, which business problem we solve, verified proof, and why buyers choose us.",
          highlights: [
            "The company remains the primary commercial brand across all outward channels.",
            "Owner acts as public educational voice/face only with explicit approval and clear brand guidelines."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Written brand guidelines & approved Owner media assets",
          accent: "slate"
        }
      },
      {
        id: "content-education",
        stepCode: "02",
        title: "Content / Education",
        shortCue: "Guides, video & webinars",
        kpiCue: "Digital Creative",
        modal: {
          badge: "Flywheel 02 • Content & Education",
          subtitle: "Problem-Led Market Education",
          title: "Educational Content on Servers, Refresh & IT Solutions",
          metric: "5 Focuses",
          metricLabel: "Campaign Tracks",
          summary:
            "Publishes practical guidance on on-premise servers, networking, device refresh, warranted refurbished gear, and IT services.",
          highlights: [
            "Co-produced with Digital Creative via articles, short explainers, infographics, and webinars.",
            "Campaign premises are tested as market hypotheses rather than assumed facts."
          ],
          footerLabel: "Purpose",
          footerValue: "Educates buyers before entering consultative sales calls",
          accent: "slate"
        }
      },
      {
        id: "lead-capture",
        stepCode: "03",
        title: "Lead Capture",
        shortCue: "Landing pages, forms & market",
        kpiCue: "Source tracking",
        modal: {
          badge: "Flywheel 03 • Lead Capture",
          subtitle: "Inbound & Partner Entry",
          title: "Landing Pages, Needs Forms, Marketplaces, Referrals & Partners",
          metric: "Multi-Channel",
          metricLabel: "Lead Intake",
          summary:
            "Captures inquiries through focused landing pages, clear CTAs, and strict campaign source tracking.",
          highlights: [
            "Unifies web landing forms, optimized marketplace listings, webinars, referrals, and co-marketing.",
            "Every campaign enforces defined audience, value prop, CTA, budget, and UTM/source tags."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Baseline web traffic, marketplace & historical CPL records",
          accent: "slate"
        }
      },
      {
        id: "qualification",
        stepCode: "04",
        title: "Qualification",
        shortCue: "Screening MQL → SQL",
        kpiCue: "Cost/Qualified Lead",
        modal: {
          badge: "Flywheel 04 • Qualification",
          subtitle: "Quality Over Vanity Reach",
          title: "MQL-to-SQL Filtering & Cost-per-Qualified-Lead Tracking",
          metric: "MQL → SQL",
          metricLabel: "Quality Gate",
          summary:
            "Screens buyer fit, technical scope, budget, and timeline before handing leads over as active Sales opportunities.",
          highlights: [
            "Measures lead quality, MQL-to-SQL conversion rate, and cost per qualified lead (CPL).",
            "Keeps Sales reps focused on real commercial demand rather than unverified clicks."
          ],
          footerLabel: "Standard",
          footerValue: "Shared MQL/SQL definitions aligned across Marketing & Sales",
          accent: "red"
        }
      },
      {
        id: "sales-handover",
        stepCode: "05",
        title: "Sales Handover",
        shortCue: "Fair CRM routing",
        kpiCue: "Response SLA",
        modal: {
          badge: "Flywheel 05 • Sales Handover",
          subtitle: "Marketing-to-Sales Sync",
          title: "SOP-Governed Lead Routing & Context Transfer in CRM",
          metric: "Tracked",
          metricLabel: "CRM Integration",
          summary:
            "Passes qualified leads with campaign context directly to the assigned account or territory owner in CRM.",
          highlights: [
            "Follows objective lead-assignment SOPs rather than ad-hoc preferences.",
            "Preserves source-to-revenue traceability from first touch through closed deal."
          ],
          footerLabel: "Visibility",
          footerValue: "Monitored via shared Analytics & CRM dashboards",
          accent: "slate"
        }
      },
      {
        id: "customer-proof",
        stepCode: "06",
        title: "Customer Proof",
        shortCue: "Verified case studies",
        kpiCue: "Confidentiality safe",
        modal: {
          badge: "Flywheel 06 • Customer Proof",
          subtitle: "Evidence-Backed Credibility",
          title: "Turning Completed Projects Into Compliant Case Proof",
          metric: "Verified",
          metricLabel: "Sales Asset",
          summary:
            "Packages real project outcomes into credible sales proof without exposing confidential client details.",
          highlights: [
            "Strictly avoids naming accounts or revealing sensitive specs without written client permission.",
            "Feeds directly back into B2B pitches and future educational campaigns."
          ],
          footerLabel: "Rule",
          footerValue: "Use anonymized or explicitly approved project references only",
          accent: "slate"
        }
      },
      {
        id: "referral-retention",
        stepCode: "07",
        title: "Referral / Retention",
        shortCue: "Attribution & repeat growth",
        kpiCue: "Revenue attribution",
        modal: {
          badge: "Flywheel 07 • Referral & Retention",
          subtitle: "Analytics & Retention Loop",
          title: "Revenue Attribution, Customer Retention & Referral Programs",
          metric: "Closed Loop",
          metricLabel: "Commercial Impact",
          summary:
            "Ties campaign spend to actual revenue contribution while nurturing existing clients for repeat orders and referrals.",
          highlights: [
            "Tracks pipeline contribution, revenue attribution, and retention alongside Analytics & CRM/Data.",
            "Activates structured customer referrals and periodic refresh check-ins."
          ],
          footerLabel: "End Metric",
          footerValue: "Pipeline contribution, attributed revenue & account retention",
          accent: "red"
        }
      }
    ]
  },
  campaignSection: {
    sectionTitle: "Server Campaign Concept (Market-Test Hypothesis)",
    hypothesisBadgeLabel: "Testable Hypothesis — Never Claim the Market Shifts to One Model Only",
    centralQuestion: "Theme: “On-premise vs Cloud: when is each model the right fit?”",
    balanceRule: "Tests on-premise physical server demand objectively alongside cloud/hybrid models",
    priorityListCue: "Other Priority Tracks: Networking • Device Refresh • Warranted Refurbished • IT Service",
    columnHeaders: {
      factor: "Decision Factor",
      onPrem: "Favors On-Premise",
      cloud: "Favors Cloud / Hybrid"
    },
    factors: [
      {
        id: "control",
        label: "Control",
        onPremCue: "Direct physical hardware & data control",
        cloudCue: "Infra maintenance offloaded to provider"
      },
      {
        id: "latency",
        label: "Latency",
        onPremCue: "Low-latency local LAN access on site",
        cloudCue: "Distributed multi-city access via internet"
      },
      {
        id: "workload",
        label: "Workload",
        onPremCue: "Steady, predictable daily compute loads",
        cloudCue: "Spiky, seasonal or elastic capacity swings"
      },
      {
        id: "security",
        label: "Security",
        onPremCue: "Strict local network isolation policies",
        cloudCue: "Managed cloud compliance & multi-region backups"
      },
      {
        id: "capex-opex",
        label: "Capex / Opex",
        onPremCue: "Upfront asset (new/second) with predictable TCO",
        cloudCue: "Flexible monthly Opex subscription model"
      }
    ],
    campaignModal: {
      badge: "Campaign Concept • Server & Infrastructure",
      subtitle: "Objective & Hypothesis-Led",
      title: "Market Test: “On-Premise vs Cloud: When Each Model Fits Best”",
      metric: "Hypothesis",
      metricLabel: "Campaign Status",
      summary:
        "Tests market appetite for physical/on-premise server solutions without claiming buyers are moving exclusively to one model.",
      highlights: [
        "Frames buyer evaluation around 5 real trade-offs: Control, Latency, Workload, Security, and Capex/Opex.",
        "Routes inquiries into structured discovery with Sales & Engineering, tracked end-to-end in CRM.",
        "Runs alongside Networking, Device Refresh, Warranted Refurbished, and IT Service campaigns."
      ],
      footerLabel: "Validation",
      footerValue: "Evaluated by CPL, SQL volume & qualified quote conversion",
      accent: "red"
    }
  },
  calendarSection: {
    sectionTitle: "Mini 4-Week Content Calendar",
    simulationLabel: "Monthly Pattern Sample (Budgets & Targets Calibrated Post-Baseline)",
    weeks: [
      {
        id: "cw-1",
        weekLabel: "Week 1",
        themeTitle: "On-Premise vs Cloud",
        channelCue: "Guide & Needs Form",
        trackCue: "UTM + Server MQL",
        modal: {
          badge: "Content Calendar • Week 1",
          subtitle: "Monthly Cadence Sample",
          title: "Educational Guide: On-Premise vs Cloud Decision Framework",
          summary:
            "Engages IT buyers on control, latency, workload, security, and Capex/Opex trade-offs.",
          highlights: [
            "Drives clicks to a structured landing page assessment form.",
            "Measured by qualified lead submissions and cost per lead."
          ],
          footerLabel: "Campaign",
          footerValue: "Physical / On-Premise Servers & Engineer Sizing",
          accent: "slate"
        }
      },
      {
        id: "cw-2",
        weekLabel: "Week 2",
        themeTitle: "Warranted Device Refresh",
        channelCue: "Marketplace & QC Video",
        trackCue: "Chat-to-Lead",
        modal: {
          badge: "Content Calendar • Week 2",
          subtitle: "Monthly Cadence Sample",
          title: "Transparent Refurbished QC Standards & Fleet Refresh Value",
          summary:
            "Highlights physical QC grading, clear warranty coverage, and cost-effective office/school refresh packs.",
          highlights: [
            "Features visual inspection proof alongside honest condition disclaimers.",
            "Channels inquiries into marketplace chats and batch quote requests."
          ],
          footerLabel: "Campaign",
          footerValue: "Device Refresh & Warranted Refurbished Hardware",
          accent: "slate"
        }
      },
      {
        id: "cw-3",
        weekLabel: "Week 3",
        themeTitle: "Branch Network & Service",
        channelCue: "Checklist & Case Brief",
        trackCue: "Landing Page",
        modal: {
          badge: "Content Calendar • Week 3",
          subtitle: "Monthly Cadence Sample",
          title: "Multi-Branch Connectivity Checklist & Support Coverage",
          summary:
            "Addresses branch uptime bottlenecks with bundled networking gear, internet links, and maintenance SLAs.",
          highlights: [
            "Shares anonymized deployment proof without revealing private customer data.",
            "Routes B2B prospects directly to discovery call booking."
          ],
          footerLabel: "Campaign",
          footerValue: "Networking, Branch Connectivity & IT Service",
          accent: "slate"
        }
      },
      {
        id: "cw-4",
        weekLabel: "Week 4",
        themeTitle: "Webinar / Co-Marketing",
        channelCue: "Event & Partner Referral",
        trackCue: "SQL Attribution",
        modal: {
          badge: "Content Calendar • Week 4",
          subtitle: "Monthly Cadence Sample",
          title: "Client Webinar & Complementary Partner Co-Marketing",
          summary:
            "Combines live solution Q&A with vetted complementary partners and monthly attribution review.",
          highlights: [
            "Partner co-marketing launches only after lead ownership, margin, and delivery rules are signed.",
            "Closes the month with CPL, SQL rate, and pipeline attribution audit."
          ],
          footerLabel: "Campaign",
          footerValue: "Partner Co-Marketing & Referral Engine",
          accent: "slate"
        }
      }
    ]
  },
  partnerRuleCard: {
    code: "Partner Governance",
    title: "Complementary Product Partner Rules",
    keywords: "Scope • Lead Ownership • Margin • Delivery • Brand Usage",
    modal: {
      badge: "Governance • Partner Co-Marketing",
      subtitle: "Complementary Ecosystem Rules",
      title: "5 Mandatory Rules Before Activating Partner Co-Marketing",
      metric: "5 Rules",
      metricLabel: "Agreement Gate",
      summary:
        "Every complementary partner collaboration requires written rules on leads, economics, and execution before launch.",
      highlights: [
        "Defines clear product/service scope and delivery responsibility across both parties.",
        "Locks in lead ownership, margin sharing, and approved brand usage guidelines.",
        "Any unclear entity referenced in early source notes stays internal for verification and is not published."
      ],
      footerLabel: "Internal Check",
      footerValue: "Verified complementary partner roster awaits management confirmation",
      accent: "red"
    }
  },
  evidenceFooter:
    "Required Data & Boundary: Historical marketplace metrics, web traffic, CPL, conversion rates, brand guidelines, approved Owner assets & verified partner roster (unverified entity names remain strictly off-slide pending internal clarification)."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide16Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide16Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 16,
  folder: "16",
  sectionId: 7,
  navTitle: {
    in: "Marketing Engine",
    en: "Marketing Engine"
  },
  headerTitle: {
    in: "Marketing Engine - Personal Brand, Demand Generation, dan Partner",
    en: "Marketing Engine - Personal Brand, Demand Generation & Partners"
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
