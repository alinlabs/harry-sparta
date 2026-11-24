import { useLanguage } from '@/contexts/LanguageContext';
import type { ReportCadenceTab, SegmentFilterId } from './utils';

export interface Slide21ModalPayload {
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

export interface CockpitKpiCard {
  id: string;
  label: string;
  simulationValue: string;
  subCue: string;
  modal: Slide21ModalPayload;
}

export interface FunnelStepMetric {
  id: string;
  stage: string;
  placeholderCount: string;
  conversionLabel: string;
  modal: Slide21ModalPayload;
}

export interface TopDealPlaceholderRow {
  id: string;
  customer: string;
  owner: string;
  stage: string;
  value: string;
  closeDate: string;
  nextStep: string;
  modal: Slide21ModalPayload;
}

export interface RiskItem {
  id: string;
  title: string;
  placeholderCount: string;
  actionCue: string;
  modal: Slide21ModalPayload;
}

export interface CadenceTabInfo {
  id: ReportCadenceTab;
  label: string;
  headline: string;
  focusPoints: string;
  chartLabel: string;
  chartPoints: Array<{ period: string; revenueSim: number; targetSim: number; marginSim: number }>;
}

export interface Slide21Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  simulationWatermark: string;
  filters: {
    dateOptions: string[];
    segments: Array<{ id: SegmentFilterId; label: string }>;
    owners: string[];
    regions: string[];
    families: string[];
  };
  cadenceTabs: CadenceTabInfo[];
  kpiCards: CockpitKpiCard[];
  funnelPanel: {
    title: string;
    activitySummary: string;
    steps: FunnelStepMetric[];
    activityModal: Slide21ModalPayload;
  };
  trendPanel: {
    title: string;
    legendRevenue: string;
    legendTarget: string;
    legendMargin: string;
    disclaimer: string;
  };
  topDealsPanel: {
    title: string;
    columns: {
      customer: string;
      owner: string;
      stage: string;
      value: string;
      closeDate: string;
      nextStep: string;
    };
    rows: TopDealPlaceholderRow[];
  };
  riskPanel: {
    title: string;
    items: RiskItem[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide21Data = {
  eyebrow: 'Dasbor Pengendalian Kinerja & Coaching Manager',
  title: 'KPI & Monitoring: Dashboard Sales Harian hingga Kuartalan',
  subtitle:
    'Memisahkan pemantauan aktivitas, konversi funnel, hasil omzet/margin, dan kualitas kontrol risiko dari briefing harian hingga review kuartalan.',
  simulationWatermark: 'SIMULASI / WIREFRAME COCKPIT — BUKAN DATA LIVE PERUSAHAAN',
  filters: {
    dateOptions: ['Periode: Bulan Berjalan', 'Periode: Minggu Berjalan', 'Periode: YTD Berjalan'],
    segments: [
      { id: 'ALL', label: 'Semua Segmen' },
      { id: 'Retail', label: 'Retail' },
      { id: 'Distribution', label: 'Distribution' },
      { id: 'B2B', label: 'B2B' },
      { id: 'B2G', label: 'B2G' }
    ],
    owners: ['Owner: Semua Sales (15)', 'Owner: Tim Retail & Online', 'Owner: Tim B2B / Distribusi'],
    regions: ['Wilayah: Semua Area', 'Wilayah: Jabodetabek', 'Wilayah: Regional'],
    families: ['Produk: Semua Kategori', 'Laptop & PC (New/2nd)', 'Server & Network', 'Solusi / Service']
  },
  cadenceTabs: [
    {
      id: 'daily',
      label: 'Daily',
      headline: 'Daily Stand-Up — Leads Baru, SLA & Overdue',
      focusPoints: 'Prioritas hari ini: kontak prospek baru, follow-up jatuh tempo & hambatan cepat gudang/harga.',
      chartLabel: 'Pola Aktivitas Harian',
      chartPoints: [
        { period: 'Sen', revenueSim: 45, targetSim: 60, marginSim: 58 },
        { period: 'Sel', revenueSim: 55, targetSim: 60, marginSim: 62 },
        { period: 'Rab', revenueSim: 52, targetSim: 60, marginSim: 60 },
        { period: 'Kam', revenueSim: 64, targetSim: 60, marginSim: 65 },
        { period: 'Jum', revenueSim: 58, targetSim: 60, marginSim: 61 }
      ]
    },
    {
      id: 'weekly',
      label: 'Weekly',
      headline: 'Weekly Pipeline Review — Deal Bergerak & Kualitas Quote',
      focusPoints: 'Audit peluang macet, validasi quote besar, konversi antar-tahap & eskalasi lintas divisi.',
      chartLabel: 'Tren Mingguan',
      chartPoints: [
        { period: 'W1', revenueSim: 48, targetSim: 65, marginSim: 56 },
        { period: 'W2', revenueSim: 58, targetSim: 65, marginSim: 60 },
        { period: 'W3', revenueSim: 62, targetSim: 65, marginSim: 63 },
        { period: 'W4', revenueSim: 70, targetSim: 65, marginSim: 64 }
      ]
    },
    {
      id: 'monthly',
      label: 'Monthly',
      headline: 'Monthly Performance — Omzet, Margin, AR & Stok',
      focusPoints: 'Evaluasi pencapaian omzet vs target Rp4–5 M, margin kotor, piutang jatuh tempo & stock ageing.',
      chartLabel: 'Tren Bulanan',
      chartPoints: [
        { period: 'M1', revenueSim: 50, targetSim: 75, marginSim: 54 },
        { period: 'M2', revenueSim: 56, targetSim: 75, marginSim: 57 },
        { period: 'M3', revenueSim: 64, targetSim: 75, marginSim: 61 },
        { period: 'M4', revenueSim: 68, targetSim: 75, marginSim: 63 },
        { period: 'M5', revenueSim: 74, targetSim: 75, marginSim: 65 },
        { period: 'M6', revenueSim: 79, targetSim: 80, marginSim: 66 }
      ]
    },
    {
      id: 'quarterly',
      label: 'Quarterly',
      headline: 'Quarterly Review — Kompetensi, Coaching & Grade',
      focusPoints: 'Penilaian kompetensi segmen, progres IDP/coaching, disiplin CRM & kesiapan kenaikan grade.',
      chartLabel: 'Evaluasi Kuartalan',
      chartPoints: [
        { period: 'Q1', revenueSim: 52, targetSim: 70, marginSim: 55 },
        { period: 'Q2', revenueSim: 64, targetSim: 75, marginSim: 60 },
        { period: 'Q3', revenueSim: 72, targetSim: 80, marginSim: 64 },
        { period: 'Q4', revenueSim: 84, targetSim: 85, marginSim: 68 }
      ]
    }
  ],
  kpiCards: [
    {
      id: 'rev-target',
      label: 'Revenue vs Target',
      simulationValue: 'Rp2,5–3M → 4–5M',
      subCue: 'Basis saat ini Rp2,5–3 M → Rp4–5 M',
      modal: {
        badge: 'KPI Cockpit 01 • Hasil',
        subtitle: 'Pencapaian Omzet Terverifikasi',
        title: 'Revenue Actual vs Target Segmen & Perusahaan',
        metric: 'Rp2,5–3 M → 4–5 M',
        metricLabel: 'Referensi Brief',
        summary:
          'Membandingkan realisasi invoice/order sah terhadap target bulanan yang disepakati per segmen.',
        highlights: [
          'Dihitung memakai basis akuntansi dan periode cut-off yang sama.',
          'Dapat ditelusuri (drill-down) hingga segmen, owner, dan nomor invoice.',
          'Target Rp4–5 miliar/bulan merupakan target perusahaan — bukan jaminan sepihak.'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'Historis penjualan per segmen & target resmi',
        accent: 'slate'
      }
    },
    {
      id: 'gross-margin',
      label: 'Gross Margin %',
      simulationValue: '(Jual − HPP) / Jual',
      subCue: '(Harga Bersih − HPP) / Harga Bersih',
      modal: {
        badge: 'KPI Cockpit 02 • Profitabilitas',
        subtitle: 'Kualitas Laba Kotor',
        title: 'Realisasi Gross Margin % & Kepatuhan Floor Margin',
        metric: 'Bukan Markup',
        metricLabel: 'Definisi Keuangan',
        summary:
          'Mengawal agar kenaikan omzet benar-benar menghasilkan profit sehat, bukan diskon berlebihan.',
        highlights: [
          'Formula: (Net Selling Price − HPP Resmi) / Net Selling Price × 100%.',
          'Memantau kepatuhan transaksi terhadap floor margin dan approval diskon.',
          'Akses detail HPP tetap dibatasi sesuai peran (role-based).'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'HPP per SKU/kondisi & realisasi net margin Finance',
        accent: 'red'
      }
    },
    {
      id: 'qualified-pipeline',
      label: 'Qualified Pipeline',
      simulationValue: 'Weighted Coverage',
      subCue: 'Weighted coverage sisa target',
      modal: {
        badge: 'KPI Cockpit 03 • Pipeline',
        subtitle: 'Kecukupan Peluang Aktif',
        title: 'Qualified Pipeline Coverage (Nilai Tertimbang)',
        metric: 'Stage Evidence',
        metricLabel: 'Aturan Bobot',
        summary:
          'Mengukur nilai pipeline yang lolos kualifikasi dibanding sisa target periode berjalan.',
        highlights: [
          'Hanya menghitung opportunity yang sudah memenuhi kriteria need, fit & timeline.',
          'Membantu Manager mendeteksi kekurangan lead jauh sebelum akhir bulan.',
          'Dipantau terpisah untuk Retail, Distribution, B2B, dan B2G.'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'Pipeline aktif terverifikasi & definisi stage CRM',
        accent: 'slate'
      }
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      simulationValue: 'Won / (Won + Lost)',
      subCue: 'Won / (Won + Lost) se-cohort',
      modal: {
        badge: 'KPI Cockpit 04 • Konversi',
        subtitle: 'Efektivitas Closing',
        title: 'Win Rate & Alasan Kalah (Loss Reason Tracking)',
        metric: 'Cohort-Based',
        metricLabel: 'Formula',
        summary:
          'Mengukur rasio kemenangan secara konsisten tanpa memasukkan open deals ke denominator.',
        highlights: [
          'Formula: Closed-Won / (Closed-Won + Closed-Lost) × 100%.',
          'Mengidentifikasi apakah kegagalan berasal dari harga, stok, lambat merespons, atau teknis.',
          'Menjadi bahan langsung pelatihan & coaching mingguan tim.'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'Histori Closed-Won, Closed-Lost & Loss Reasons',
        accent: 'slate'
      }
    },
    {
      id: 'overdue-ar',
      label: 'Overdue AR',
      simulationValue: 'Bucket 1–90+ Hari',
      subCue: 'Aging 1–30 / 31–60 / 61–90 / >90 hr',
      modal: {
        badge: 'KPI Cockpit 05 • Kualitas Piutang',
        subtitle: 'Disiplin Kredit & Collection',
        title: 'Overdue AR Ratio & Bucket Umur Piutang',
        metric: 'Credit Gate',
        metricLabel: 'Kontrol',
        summary:
          'Memastikan penjualan tidak berhenti di faktur, melainkan benar-benar tertagih lancar.',
        highlights: [
          'Memisahkan bucket 1–30, 31–60, 61–90, dan >90 hari sesuai kebijakan Finance.',
          'Menahan rilis pengiriman baru bagi akun bermasalah hingga ada clearance.',
          'Terhubung ke evaluasi kualitas sales & insentif berbasis tertagih.'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'Laporan AR aging & status sengketa/collection',
        accent: 'red'
      }
    },
    {
      id: 'inventory-aging',
      label: 'Inventory Aging',
      simulationValue: 'Turn & Aging SKU',
      subCue: 'Stock turn & prioritas stok lama',
      modal: {
        badge: 'KPI Cockpit 06 • Kualitas Stok',
        subtitle: 'Perputaran & Umur Persediaan',
        title: 'Inventory Aging & Stock Turn (~70% Second / ~30% New)',
        metric: 'Cross-Check Gudang',
        metricLabel: 'Aksi',
        summary:
          'Mengawasi barang berumur lama di gudang agar segera diprioritaskan melalui program bundle atau channel.',
        highlights: [
          'Menghubungkan data umur stok gudang ke daftar produk fokus tim sales.',
          'Basis 70% second / 30% baru menunggu konfirmasi satuan (unit, SKU, atau nilai).',
          'Mencegah penurunan nilai stok IT akibat barang tertahan terlalu lama.'
        ],
        footerLabel: 'Data Dibutuhkan',
        footerValue: 'Umur stok per SKU/serial, kondisi QC & stock turn',
        accent: 'slate'
      }
    }
  ],
  funnelPanel: {
    title: 'Konversi & Aktivitas Funnel',
    activitySummary: 'Aktivitas: Leads baru · Calls/Kontak · SLA Respons · Kunjungan/Meeting · Quote · Follow-up',
    steps: [
      {
        id: 'f1',
        stage: 'Lead → Contacted',
        placeholderCount: 'Response SLA',
        conversionLabel: 'Sentuhan Awal',
        modal: {
          badge: 'Konversi & Aktivitas 01',
          subtitle: 'Kecepatan Sentuh Awal',
          title: 'Lead-to-Contacted & First Response Time',
          summary:
            'Mengukur disiplin sales menyentuh lead baru secara cepat dan merata sesuai aturan shift/assignment.',
          highlights: [
            'Pakai median waktu respons & % sesuai SLA (bukan sekadar rata-rata).',
            'Target kontak & telepon disesuaikan per segmen (Retail vs B2B).'
          ],
          footerLabel: 'Metrik Pendukung',
          footerValue: 'New Leads, Contacts & Median Response SLA',
          accent: 'slate'
        }
      },
      {
        id: 'f2',
        stage: 'Qualified → Quote',
        placeholderCount: 'Tech & Stock Check',
        conversionLabel: 'Discovery',
        modal: {
          badge: 'Konversi & Aktivitas 02',
          subtitle: 'Kualitas Discovery & Teknis',
          title: 'Qualified-to-Quotation Conversion',
          summary:
            'Menunjukkan proporsi peluang layak yang berhasil berlanjut ke penawaran resmi tanpa terganjal stok atau spesifikasi.',
          highlights: [
            'Mengukur pertemuan/kunjungan bermakna dan sign-off kebutuhan teknis.',
            'Mengungkap gap kesiapan stok maupun kecepatan review lintas divisi.'
          ],
          footerLabel: 'Metrik Pendukung',
          footerValue: 'Meetings/Visits, Valid Quotations & Tech Check',
          accent: 'slate'
        }
      },
      {
        id: 'f3',
        stage: 'Quote → Closed Won',
        placeholderCount: 'Win / Loss Log',
        conversionLabel: 'Sales Cycle',
        modal: {
          badge: 'Konversi & Aktivitas 03',
          subtitle: 'Efektivitas Negosiasi & Follow-Up',
          title: 'Quote-to-Win, Follow-Up Discipline & Average Cycle',
          summary:
            'Menilai kekuatan nilai penawaran, ketahanan margin selama negosiasi, dan konsistensi tindak lanjut.',
          highlights: [
            'Memisahkan quote kadaluarsa/dibatalkan pelanggan dari kekalahan kompetitif.',
            'Wajib mencatat alasan kalah utama sebagai bahan evaluasi strategi.'
          ],
          footerLabel: 'Metrik Pendukung',
          footerValue: 'Follow-Ups, Quote Conversion & Loss Reasons',
          accent: 'red'
        }
      }
    ],
    activityModal: {
      badge: 'Panel Aktivitas & Kualitas',
      subtitle: 'Standar Target Berbeda per Segmen',
      title: 'Panel Aktivitas, Konversi & Kualitas Eksekusi',
      metric: 'Role-Specific',
      metricLabel: 'Kebijakan Target',
      summary:
        'Setiap portofolio memiliki struktur aktivitas, siklus closing, serta standar kualitas yang berbeda.',
      highlights: [
        'Aktivitas: leads, kontak/calls, response SLA, meeting/visit, quote, follow-up.',
        'Kualitas: margin floor compliance, status bayar, komplain/retur, kelengkapan CRM & stock turn.',
        'Jumlah calls/visit Retail, Distribution, B2B, dan B2G ditetapkan terpisah setelah baseline.'
      ],
      footerLabel: 'Prinsip Audit',
      footerValue: 'Definisi metrik disepakati bersama Finance & HR',
      accent: 'slate'
    }
  },
  trendPanel: {
    title: 'Tren Revenue vs Target & Margin',
    legendRevenue: 'Omzet',
    legendTarget: 'Target',
    legendMargin: 'Margin Index',
    disclaimer: 'Skala indeks wireframe — bukan angka kinerja nyata'
  },
  topDealsPanel: {
    title: 'Tabel Top Deals',
    columns: {
      customer: 'Akun / Segmen',
      owner: 'Owner',
      stage: 'Stage',
      value: 'Nilai',
      closeDate: 'Target Tutup',
      nextStep: 'Next Step'
    },
    rows: [
      {
        id: 'td1',
        customer: 'Akun Korporat B2B',
        owner: 'AM B2B',
        stage: 'Discovery',
        value: 'Pipeline Target',
        closeDate: 'Target Tutup',
        nextStep: 'Validasi teknis & cek stok',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'Templat B2B • Segmen Korporat',
          title: 'Tinjauan Risiko & Tindakan Deal B2B',
          summary:
            'Contoh struktur drill-down mingguan untuk memastikan setiap peluang besar punya pemilik dan next step jelas.',
          highlights: [
            'Mengecek kesesuaian spek Engineer serta margin estimate sebelum quotation.',
            'Tidak diisi nama perusahaan nyata sebelum data CRM internal sah tersedia.'
          ],
          footerLabel: 'Sumber',
          footerValue: 'CRM Opportunity Pipeline',
          accent: 'slate'
        }
      },
      {
        id: 'td2',
        customer: 'Mitra Distribusi',
        owner: 'Sales Channel',
        stage: 'Quotation',
        value: 'Pipeline Target',
        closeDate: 'Target Tutup',
        nextStep: 'Cek tier volume & status AR',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'Templat Distribution • Reseller',
          title: 'Tinjauan Harga Volume & Kelayakan Kredit Mitra',
          summary:
            'Memastikan pengajuan harga grosir tetap di atas batas margin serta aman dari piutang menunggak.',
          highlights: [
            'Verifikasi ketersediaan alokasi stok gudang dan bucket umur AR mitra.',
            'Approval pengecualian harga diproses lewat Price Request.'
          ],
          footerLabel: 'Sumber',
          footerValue: 'Distribution Pipeline & AR Aging',
          accent: 'slate'
        }
      },
      {
        id: 'td3',
        customer: 'Paket B2G / SI',
        owner: 'B2G Lead',
        stage: 'Negotiation',
        value: 'Pipeline Target',
        closeDate: 'Jadwal Paket',
        nextStep: 'Sign-off Bid/No-Bid & termin',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'Templat B2G • Sektor Publik',
          title: 'Kepatuhan Paket Katalog, Subcon & Arus Kas',
          summary:
            'Mengawal komitmen pengadaan publik agar patuh aturan [R1–R4] dan tidak menekan modal kerja.',
          highlights: [
            'Wajib konfirmasi syarat barang baru/refurbished serta kontrak maincon.',
            'Menunggu persetujuan Finance & Direksi sebelum eksekusi order.'
          ],
          footerLabel: 'Sumber',
          footerValue: 'B2G Bid/No-Bid Review',
          accent: 'red'
        }
      }
    ]
  },
  riskPanel: {
    title: 'Risk & Quality Control Panel',
    items: [
      {
        id: 'r1',
        title: 'Stale Deals',
        placeholderCount: 'Aging Alert',
        actionCue: 'Macet di stage',
        modal: {
          badge: 'Risk Panel 01',
          subtitle: 'Pipeline Velocity Alert',
          title: 'Stale Deals — Coaching atau Penutupan Teratur',
          summary:
            'Menyoroti peluang yang tidak bergerak melewati batas waktu wajar agar pipeline tetap sehat.',
          highlights: [
            'Manager melakukan deal coaching mingguan atau mengarahkan penutupan sebagai Lost.',
            'Membantu membersihkan bias over-optimism pada laporan forecast.'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Weekly Pipeline Review',
          accent: 'red'
        }
      },
      {
        id: 'r2',
        title: 'Overdue Follow-Up',
        placeholderCount: 'SLA Alert',
        actionCue: 'Tindak lanjut terlewat',
        modal: {
          badge: 'Risk Panel 02',
          subtitle: 'Response Hygiene Alert',
          title: 'Overdue Follow-Up — Penanganan Prospek Tertunda',
          summary:
            'Mencegah peluang potensial dingin atau direbut kompetitor akibat jeda follow-up.',
          highlights: [
            'Dipantau setiap pagi pada daily stand-up lintas tim penjualan.',
            'Disiplin pengisian CRM menjadi bagian komponen penilaian kualitas sales.'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Daily Stand-Up Check',
          accent: 'red'
        }
      },
      {
        id: 'r3',
        title: 'Overdue AR & Returns',
        placeholderCount: 'AR & Retur',
        actionCue: 'Lewat tempo / komplain',
        modal: {
          badge: 'Risk Panel 03',
          subtitle: 'Quality & Cash Protection',
          title: 'Overdue AR & Return/Complaint Monitoring',
          summary:
            'Menjaga kualitas pertumbuhan agar penjualan selaras dengan kas masuk dan tingkat retensi.',
          highlights: [
            'Menghubungkan data piutang Finance & tiket garansi/retur ke rapor owner.',
            'Mencegah pengiriman kredit baru ke akun yang masih menunggak.'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Sync Finance & After-Sales',
          accent: 'red'
        }
      },
      {
        id: 'r4',
        title: 'Margin Exception & CRM',
        placeholderCount: 'Floor & CRM',
        actionCue: 'Diskon & kelengkapan field',
        modal: {
          badge: 'Risk Panel 04',
          subtitle: 'Governance Compliance',
          title: 'Margin Floor Exception & CRM Completeness',
          summary:
            'Memantau kepatuhan approval diskon dan kelengkapan 11 field wajib CRM sebelum penawaran dirilis.',
          highlights: [
            'Setiap transaksi dengan diskon khusus wajib memiliki jejak approval Manager/Owner.',
            'Kelengkapan CRM memastikan akuntabilitas saat pergantian personel.'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Audit Sampel & Monthly Review',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Data Diperlukan: Historical KPI per sales, definisi resmi tiap metrik, target disetujui Direksi, serta data margin, AR aging, inventory aging, complaint & kepatuhan CRM.'
};

export const slideDataEn: Slide21Data = {
  eyebrow: 'Performance Control & Manager Coaching Cockpit',
  title: 'KPI & Monitoring: Daily-to-Quarterly Sales Dashboard',
  subtitle:
    'Separating daily activities, funnel conversion, revenue/margin outcomes, and quality/risk controls across daily stand-ups to quarterly reviews.',
  simulationWatermark: 'SIMULATION / WIREFRAME COCKPIT — NOT LIVE COMPANY REPORTING',
  filters: {
    dateOptions: ['Period: Current Month', 'Period: Active Week', 'Period: Current YTD'],
    segments: [
      { id: 'ALL', label: 'All Segments' },
      { id: 'Retail', label: 'Retail' },
      { id: 'Distribution', label: 'Distribution' },
      { id: 'B2B', label: 'B2B' },
      { id: 'B2G', label: 'B2G' }
    ],
    owners: ['Owner: All Sales (15)', 'Owner: Retail & Online', 'Owner: B2B / Distribution'],
    regions: ['Region: All Areas', 'Region: Greater Jakarta', 'Region: Regional'],
    families: ['Product: All Families', 'Laptops & PCs (New/2nd)', 'Server & Network', 'Solutions / Services']
  },
  cadenceTabs: [
    {
      id: 'daily',
      label: 'Daily',
      headline: 'Daily Stand-Up — New Leads, SLA & Overdue',
      focusPoints: 'Today priorities: first-touch new leads, due follow-ups & urgent stock/pricing blockers.',
      chartLabel: 'Daily Activity Trend',
      chartPoints: [
        { period: 'Mon', revenueSim: 45, targetSim: 60, marginSim: 58 },
        { period: 'Tue', revenueSim: 55, targetSim: 60, marginSim: 62 },
        { period: 'Wed', revenueSim: 52, targetSim: 60, marginSim: 60 },
        { period: 'Thu', revenueSim: 64, targetSim: 60, marginSim: 65 },
        { period: 'Fri', revenueSim: 58, targetSim: 60, marginSim: 61 }
      ]
    },
    {
      id: 'weekly',
      label: 'Weekly',
      headline: 'Weekly Pipeline Review — Deal Progression & Quote Quality',
      focusPoints: 'Audit stale opportunities, high-value quotes, stage conversion & cross-team escalations.',
      chartLabel: 'Weekly Trend',
      chartPoints: [
        { period: 'W1', revenueSim: 48, targetSim: 65, marginSim: 56 },
        { period: 'W2', revenueSim: 58, targetSim: 65, marginSim: 60 },
        { period: 'W3', revenueSim: 62, targetSim: 65, marginSim: 63 },
        { period: 'W4', revenueSim: 70, targetSim: 65, marginSim: 64 }
      ]
    },
    {
      id: 'monthly',
      label: 'Monthly',
      headline: 'Monthly Performance — Revenue, Margin, AR & Stock',
      focusPoints: 'Evaluate revenue vs Rp4–5 B target, gross margin, overdue AR buckets & stock aging.',
      chartLabel: 'Monthly Trend',
      chartPoints: [
        { period: 'M1', revenueSim: 50, targetSim: 75, marginSim: 54 },
        { period: 'M2', revenueSim: 56, targetSim: 75, marginSim: 57 },
        { period: 'M3', revenueSim: 64, targetSim: 75, marginSim: 61 },
        { period: 'M4', revenueSim: 68, targetSim: 75, marginSim: 63 },
        { period: 'M5', revenueSim: 74, targetSim: 75, marginSim: 65 },
        { period: 'M6', revenueSim: 79, targetSim: 80, marginSim: 66 }
      ]
    },
    {
      id: 'quarterly',
      label: 'Quarterly',
      headline: 'Quarterly Review — Competency, Coaching & Grade',
      focusPoints: 'Assess segment competency, IDP coaching progress, CRM discipline & grade progression readiness.',
      chartLabel: 'Quarterly Evaluation',
      chartPoints: [
        { period: 'Q1', revenueSim: 52, targetSim: 70, marginSim: 55 },
        { period: 'Q2', revenueSim: 64, targetSim: 75, marginSim: 60 },
        { period: 'Q3', revenueSim: 72, targetSim: 80, marginSim: 64 },
        { period: 'Q4', revenueSim: 84, targetSim: 85, marginSim: 68 }
      ]
    }
  ],
  kpiCards: [
    {
      id: 'rev-target',
      label: 'Revenue vs Target',
      simulationValue: 'Rp2.5–3B → 4–5B',
      subCue: 'Current Rp2.5–3 B → Target Rp4–5 B',
      modal: {
        badge: 'KPI Cockpit 01 • Outcome',
        subtitle: 'Verified Revenue Attainment',
        title: 'Revenue Actual vs Segment & Company Target',
        metric: 'Rp2.5–3 B → 4–5 B',
        metricLabel: 'Brief Reference',
        summary:
          'Compares realized invoiced revenue against approved monthly targets across segments.',
        highlights: [
          'Measured strictly on consistent accounting definitions and cut-off windows.',
          'Supports drill-down from total revenue to segment, rep, and invoice level.',
          'Rp4–5 B/mo is a corporate goal, not a unilateral candidate guarantee.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'Historical monthly sales by segment & approved targets',
        accent: 'slate'
      }
    },
    {
      id: 'gross-margin',
      label: 'Gross Margin %',
      simulationValue: '(Price − HPP) / Price',
      subCue: '(Net Price − HPP) / Net Price',
      modal: {
        badge: 'KPI Cockpit 02 • Profitability',
        subtitle: 'Realized Profit Quality',
        title: 'Gross Margin % & Floor Compliance',
        metric: 'Not Markup',
        metricLabel: 'Finance Definition',
        summary:
          'Ensures revenue growth translates into healthy gross profit rather than unmanaged discounting.',
        highlights: [
          'Formula: (Net Selling Price − Verified COGS/HPP) / Net Selling Price × 100%.',
          'Tracks discount floor adherence and Price Request exception volume.',
          'Underlying SKU cost breakdowns stay restricted by user role.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'Verified SKU/condition COGS & Finance net margin reports',
        accent: 'red'
      }
    },
    {
      id: 'qualified-pipeline',
      label: 'Qualified Pipeline',
      simulationValue: 'Weighted Coverage',
      subCue: 'Weighted coverage vs remaining gap',
      modal: {
        badge: 'KPI Cockpit 03 • Pipeline',
        subtitle: 'Forward Coverage Sufficiency',
        title: 'Qualified Pipeline Coverage (Risk-Weighted)',
        metric: 'Stage Evidence',
        metricLabel: 'Weighting Rule',
        summary:
          'Compares qualified active pipeline against remaining period revenue targets.',
        highlights: [
          'Includes only opportunities backed by documented need, fit, and buying timeline.',
          'Alerts managers to lead shortfalls well ahead of month-end.',
          'Tracked separately across Retail, Distribution, B2B, and B2G.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'Verified active pipeline & CRM stage definitions',
        accent: 'slate'
      }
    },
    {
      id: 'win-rate',
      label: 'Win Rate',
      simulationValue: 'Won / (Won + Lost)',
      subCue: 'Won / (Won + Lost) cohort basis',
      modal: {
        badge: 'KPI Cockpit 04 • Conversion',
        subtitle: 'Closing Efficiency',
        title: 'Win Rate & Structured Loss Reason Analysis',
        metric: 'Cohort-Based',
        metricLabel: 'Formula',
        summary:
          'Tracks clean win percentages over fixed cohorts without treating open deals as losses.',
        highlights: [
          'Formula: Closed-Won / (Closed-Won + Closed-Lost) × 100%.',
          'Clarifies whether losses stem from pricing, stock gaps, slow response, or technical fit.',
          'Feeds directly into weekly coaching and enablement priorities.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'Historical Closed-Won, Closed-Lost & Loss Reasons',
        accent: 'slate'
      }
    },
    {
      id: 'overdue-ar',
      label: 'Overdue AR',
      simulationValue: '1–90+ Day Buckets',
      subCue: 'Aging 1–30 / 31–60 / 61–90 / >90d',
      modal: {
        badge: 'KPI Cockpit 05 • Collection Quality',
        subtitle: 'Credit & Receivables Hygiene',
        title: 'Overdue AR Ratio & Aging Buckets',
        metric: 'Credit Gate',
        metricLabel: 'Control',
        summary:
          'Verifies that closed deals convert cleanly into collected cash rather than lingering receivables.',
        highlights: [
          'Separates aging into 1–30, 31–60, 61–90, and >90 day buckets per policy.',
          'Holds new credit releases on past-due accounts pending Finance clearance.',
          'Links collection discipline into sales quality and incentive criteria.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'AR aging schedule & dispute/collection status',
        accent: 'red'
      }
    },
    {
      id: 'inventory-aging',
      label: 'Inventory Aging',
      simulationValue: 'Turn & SKU Age',
      subCue: 'Stock turn & aging SKU priority',
      modal: {
        badge: 'KPI Cockpit 06 • Stock Health',
        subtitle: 'Turnover & Aging Exposure',
        title: 'Inventory Aging & Stock Turn (~70% Second / ~30% New)',
        metric: 'Warehouse Sync',
        metricLabel: 'Action',
        summary:
          'Directs commercial focus toward slow-moving inventory through curated bundles and channel campaigns.',
        highlights: [
          'Feeds aging SKU lists directly into sales focus priorities.',
          'Note: ~70% second / ~30% new split awaits confirmation of unit, SKU, or value basis.',
          'Protects working capital from IT hardware depreciation.'
        ],
        footerLabel: 'Data Required',
        footerValue: 'Stock age by SKU/serial, QC condition & turnover',
        accent: 'slate'
      }
    }
  ],
  funnelPanel: {
    title: 'Funnel Conversion & Activity',
    activitySummary: 'Activity: New Leads · Calls/Contacts · Response SLA · Meetings/Visits · Quotes · Follow-Ups',
    steps: [
      {
        id: 'f1',
        stage: 'Lead → Contacted',
        placeholderCount: 'Response SLA',
        conversionLabel: 'First Touch',
        modal: {
          badge: 'Conversion & Activity 01',
          subtitle: 'Speed to First Touch',
          title: 'Lead-to-Contacted & First Response Time',
          summary:
            'Tracks disciplined, rule-based outreach speed on newly routed inquiries.',
          highlights: [
            'Uses median response time and % within SLA rather than skewed averages.',
            'Daily outreach quotas differ strictly by segment (Retail vs B2B).'
          ],
          footerLabel: 'Supporting Metrics',
          footerValue: 'New Leads, Contacts & Median Response SLA',
          accent: 'slate'
        }
      },
      {
        id: 'f2',
        stage: 'Qualified → Quote',
        placeholderCount: 'Tech & Stock Check',
        conversionLabel: 'Discovery',
        modal: {
          badge: 'Conversion & Activity 02',
          subtitle: 'Discovery & Technical Readiness',
          title: 'Qualified-to-Quotation Conversion',
          summary:
            'Shows how effectively qualified leads convert into validated commercial quotes.',
          highlights: [
            'Tracks structured meetings, technical sizing, and inventory confirmation.',
            'Exposes internal bottlenecks across stock availability or quoting speed.'
          ],
          footerLabel: 'Supporting Metrics',
          footerValue: 'Meetings/Visits, Valid Quotes & Tech Check',
          accent: 'slate'
        }
      },
      {
        id: 'f3',
        stage: 'Quote → Closed Won',
        placeholderCount: 'Win / Loss Log',
        conversionLabel: 'Sales Cycle',
        modal: {
          badge: 'Conversion & Activity 03',
          subtitle: 'Negotiation & Follow-Up Discipline',
          title: 'Quote-to-Win, Follow-Up Rhythm & Sales Cycle',
          summary:
            'Evaluates proposal strength, discount defense, and persistent buyer follow-up.',
          highlights: [
            'Separates expired or withdrawn quotes from genuine competitive losses.',
            'Mandates structured loss reasons to guide competitive playbook updates.'
          ],
          footerLabel: 'Supporting Metrics',
          footerValue: 'Follow-Ups, Quote Conversion & Loss Reasons',
          accent: 'red'
        }
      }
    ],
    activityModal: {
      badge: 'Activity & Quality Governance',
      subtitle: 'Segment-Differentiated Quotas',
      title: 'Activity, Conversion & Quality Control Panels',
      metric: 'Role-Specific',
      metricLabel: 'Target Policy',
      summary:
        'Each portfolio carries distinct sales cycles, call/visit norms, and quality standards.',
      highlights: [
        'Activity: leads, calls/contacts, response SLA, meetings/visits, quotes, follow-ups.',
        'Quality: margin floor compliance, payment status, returns/complaints, CRM completeness & stock turn.',
        'Calls/visits targets never share the same baseline across Retail, Distribution, B2B, and B2G.'
      ],
      footerLabel: 'Governance Rule',
      footerValue: 'Definitions aligned across Finance & HR',
      accent: 'slate'
    }
  },
  trendPanel: {
    title: 'Revenue vs Target & Margin Trend',
    legendRevenue: 'Revenue',
    legendTarget: 'Target',
    legendMargin: 'Margin Index',
    disclaimer: 'Wireframe index scale — not live performance figures'
  },
  topDealsPanel: {
    title: 'Top Deals Table',
    columns: {
      customer: 'Account / Segment',
      owner: 'Owner',
      stage: 'Stage',
      value: 'Value',
      closeDate: 'Target Close',
      nextStep: 'Next Step'
    },
    rows: [
      {
        id: 'td1',
        customer: 'Corporate Account B2B',
        owner: 'B2B AM',
        stage: 'Discovery',
        value: 'Pipeline Target',
        closeDate: 'Target Close',
        nextStep: 'Tech sizing & stock check',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'B2B Template • Corporate',
          title: 'B2B Deal Risk & Action Inspection',
          summary:
            'Weekly drill-down schema ensuring high-value B2B opportunities carry clear owners and dated next steps.',
          highlights: [
            'Confirms technical feasibility and estimated gross margin prior to formal quoting.',
            'Real account identities populate only from verified internal CRM data.'
          ],
          footerLabel: 'Source',
          footerValue: 'CRM Opportunity Pipeline',
          accent: 'slate'
        }
      },
      {
        id: 'td2',
        customer: 'Distribution Partner',
        owner: 'Channel Sales',
        stage: 'Quotation',
        value: 'Pipeline Target',
        closeDate: 'Target Close',
        nextStep: 'Volume tier & AR check',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'Distribution Template • Reseller',
          title: 'Volume-Tier Pricing & Credit Check',
          summary:
            'Keeps wholesale reseller deals compliant with margin floors and clean receivables.',
          highlights: [
            'Checks warehouse allocation and partner AR aging prior to release.',
            'Out-of-tier discount requests route through Price Request.'
          ],
          footerLabel: 'Source',
          footerValue: 'Distribution Pipeline & AR Aging',
          accent: 'slate'
        }
      },
      {
        id: 'td3',
        customer: 'B2G / SI Package',
        owner: 'B2G Lead',
        stage: 'Negotiation',
        value: 'Pipeline Target',
        closeDate: 'Bid Schedule',
        nextStep: 'Bid/No-Bid & terms sign-off',
        modal: {
          badge: 'Top Deal Drill-Down',
          subtitle: 'B2G Template • Public Sector',
          title: 'Catalog Compliance, Subcon Terms & Cash Flow',
          summary:
            'Guards public-sector engagements for regulatory compliance [R1–R4] and working-capital capacity.',
          highlights: [
            'Confirms new/refurbished eligibility and prime contractor terms.',
            'Requires Finance and Director sign-off prior to fulfillment commitments.'
          ],
          footerLabel: 'Source',
          footerValue: 'B2G Bid/No-Bid Review',
          accent: 'red'
        }
      }
    ]
  },
  riskPanel: {
    title: 'Risk & Quality Control Panel',
    items: [
      {
        id: 'r1',
        title: 'Stale Deals',
        placeholderCount: 'Aging Alert',
        actionCue: 'Stalled in stage',
        modal: {
          badge: 'Risk Panel 01',
          subtitle: 'Pipeline Velocity Alert',
          title: 'Stale Deals — Coach Forward or Close Cleanly',
          summary:
            'Flags aging deals without recent buyer progression so pipeline forecasts remain credible.',
          highlights: [
            'Reviewed weekly to re-activate stalled engagements or record structured losses.',
            'Eliminates artificial pipeline inflation.'
          ],
          footerLabel: 'Action',
          footerValue: 'Weekly Pipeline Review',
          accent: 'red'
        }
      },
      {
        id: 'r2',
        title: 'Overdue Follow-Up',
        placeholderCount: 'SLA Alert',
        actionCue: 'Missed follow-up date',
        modal: {
          badge: 'Risk Panel 02',
          subtitle: 'Response Hygiene Alert',
          title: 'Overdue Follow-Up — Missed Scheduled Touchpoints',
          summary:
            'Prevents warm prospects from cooling off or drifting to competitors after quotes.',
          highlights: [
            'Checked every morning during daily sales stand-ups.',
            'CRM update compliance feeds directly into individual quality scores.'
          ],
          footerLabel: 'Action',
          footerValue: 'Daily Stand-Up Check',
          accent: 'red'
        }
      },
      {
        id: 'r3',
        title: 'Overdue AR & Returns',
        placeholderCount: 'AR & Claims',
        actionCue: 'Past-due / claims',
        modal: {
          badge: 'Risk Panel 03',
          subtitle: 'Quality & Cash Protection',
          title: 'Overdue AR & Return/Complaint Control',
          summary:
            'Connects booked revenue to cash collection and post-sale customer satisfaction.',
          highlights: [
            'Integrates Finance aging data and service tickets into owner scorecards.',
            'Freezes new credit dispatches on overdue accounts until cleared.'
          ],
          footerLabel: 'Action',
          footerValue: 'Sync Finance & After-Sales',
          accent: 'red'
        }
      },
      {
        id: 'r4',
        title: 'Margin Exception & CRM',
        placeholderCount: 'Floor & CRM',
        actionCue: 'Discounts & CRM hygiene',
        modal: {
          badge: 'Risk Panel 04',
          subtitle: 'Governance Compliance',
          title: 'Margin Exception & CRM Field Completeness',
          summary:
            'Audits discount approvals and mandatory CRM record completeness before release.',
          highlights: [
            'Every out-of-band discount carries a logged Manager/Owner approval trail.',
            'Complete CRM records safeguard institutional customer continuity.'
          ],
          footerLabel: 'Action',
          footerValue: 'Sample Audit & Monthly Review',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Required Data: Historical KPI per sales rep, official metric definitions, approved targets, plus verified margin, AR aging, inventory aging, complaints & CRM compliance data.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide21Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide21Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 21,
  folder: '21',
  sectionId: 7,
  navTitle: {
    in: 'KPI & Monitoring',
    en: 'KPI & Monitoring'
  },
  headerTitle: {
    in: 'KPI & Monitoring - Contoh Dashboard Sales Harian hingga Kuartalan',
    en: 'KPI & Monitoring - Daily-to-Quarterly Sales Dashboard Example'
  },
  category: {
    in: 'IV. Mengaktifkan Mesin Komersial',
    en: 'IV. Activating the Commercial Engine'
  },
  section: {
    in: 'IV. Mengaktifkan Mesin Komersial',
    en: 'IV. Activating the Commercial Engine'
  }
};
