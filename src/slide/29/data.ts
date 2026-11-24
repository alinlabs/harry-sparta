import { useLanguage } from '@/contexts/LanguageContext';
import type { AppendixTabId } from './utils';

export interface Slide29ModalPayload {
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

export interface KpiFormulaRef {
  id: string;
  name: string;
  formula: string;
  caution: string;
  modal: Slide29ModalPayload;
}

export interface CadenceRow {
  id: string;
  frequency: string;
  question: string;
  output: string;
}

export interface CockpitPanelItem {
  id: string;
  panel: string;
  fields: string;
  interaction: string;
}

export interface DrillDownExampleItem {
  id: string;
  code: string;
  trigger: string;
  path: string;
  modal: Slide29ModalPayload;
}

export interface DataDomainChecklistItem {
  id: string;
  area: string;
  scope: string;
}

export interface ClarificationItem {
  id: string;
  code: string;
  topic: string;
  question: string;
}

export interface PortfolioCompetencyRef {
  id: string;
  portfolio: string;
  coreTest: string;
}

export interface Slide29Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  mockupLabel: string;
  tabs: Array<{ id: AppendixTabId; label: string }>;
  kpiSectionTitle: string;
  kpiFinanceCaveat: string;
  kpis: KpiFormulaRef[];
  cadenceTitle: string;
  cadences: CadenceRow[];
  cockpitTitle: string;
  cockpitNotice: string;
  cockpitPanels: CockpitPanelItem[];
  individualTitle: string;
  individualBlocks: Array<{ id: string; block: string; scope: string }>;
  drilldownTitle: string;
  drilldowns: DrillDownExampleItem[];
  readinessTitle: string;
  dataDomains: DataDomainChecklistItem[];
  competencyTitle: string;
  portfolioCompetencies: PortfolioCompetencyRef[];
  clarificationsTitle: string;
  clarificationsNote: string;
  clarifications: ClarificationItem[];
  researchNote: string;
}

export const slideDataId: Slide29Data = {
  eyebrow: 'V. Eksekusi dan Hasil • Lampiran A–E',
  title: 'Lampiran Operasional',
  subtitle: 'Sintesis kerangka pengukuran, rancangan laporan, daftar cek data internal, dan item terbuka yang belum terverifikasi.',
  mockupLabel: 'KERANGKA REFERENSI & RANCANGAN — BUKAN DATA LIVE',
  tabs: [
    { id: 'kpi', label: 'KPI & Cadence' },
    { id: 'cockpit', label: 'Cockpit & Drill-Down' },
    { id: 'readiness', label: 'Data & Kompetensi' },
    { id: 'clarifications', label: 'Klarifikasi Terbuka' },
  ],
  kpiSectionTitle: '8 Formula KPI Inti',
  kpiFinanceCaveat: 'Definisi akhir wajib diselaraskan dengan Finance sebelum berlaku seragam lintas segmen.',
  kpis: [
    {
      id: 'kpi-rev',
      name: 'Revenue Achievement',
      formula: 'Revenue actual / revenue target × 100%',
      caution: 'Periode & basis akuntansi harus sama',
      modal: {
        badge: 'Lampiran A • KPI 01',
        subtitle: 'Pengukuran Pencapaian Omzet',
        title: 'Revenue Achievement',
        metric: 'Actual / Target',
        metricLabel: 'Rasio Persentase',
        summary: 'Mengukur realisasi pendapatan dibandingkan target pada periode dan basis pengakuan akuntansi yang sama.',
        highlights: [
          'Formula: Revenue actual ÷ Revenue target × 100%.',
          'Catatan: pastikan definisi cut-off (invoice vs cash-in) disepakati Finance.',
        ],
        footerLabel: 'Penyelarasan',
        footerValue: 'Standar Akuntansi Finance',
        accent: 'red',
      },
    },
    {
      id: 'kpi-gm',
      name: 'Gross Margin %',
      formula: '(Net selling price − HPP) / net selling price × 100%',
      caution: 'Bukan Markup; HPP harus disetujui',
      modal: {
        badge: 'Lampiran A • KPI 02',
        subtitle: 'Kualitas Laba Kotor (Bukan Markup)',
        title: 'Gross Margin %',
        metric: '≠ Markup',
        metricLabel: 'Peringatan Definisi',
        summary: 'Mengukur porsi margin kotor dari harga jual bersih setelah memperhitungkan HPP dan biaya yang disetujui.',
        highlights: [
          'Formula: (Net selling price − HPP) ÷ Net selling price × 100%.',
          'Batas definisi: Gross Margin tidak sama dengan Markup dari modal.',
        ],
        footerLabel: 'Penyelarasan',
        footerValue: 'HPP Resmi dari Finance',
        accent: 'red',
      },
    },
    {
      id: 'kpi-win',
      name: 'Win Rate',
      formula: 'Closed-won / (closed-won + closed-lost) × 100%',
      caution: 'Open opportunity tidak masuk pembagi',
      modal: {
        badge: 'Lampiran A • KPI 03',
        subtitle: 'Efektivitas Penutupan Peluang',
        title: 'Win Rate',
        summary: 'Mengukur proporsi peluang selesai yang berhasil dimenangkan pada periode atau cohort tertentu.',
        highlights: [
          'Formula: Closed-won ÷ (Closed-won + Closed-lost) × 100%.',
          'Open opportunity tidak boleh masuk denominator; tentukan periode cohort.',
        ],
        footerLabel: 'Disiplin Funnel',
        footerValue: 'Evaluasi Cohort Terbuka vs Selesai',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-cov',
      name: 'Pipeline Coverage',
      formula: 'Weighted qualified pipeline / remaining target',
      caution: 'Bobot probabilitas berbasis bukti stage',
      modal: {
        badge: 'Lampiran A • KPI 04',
        subtitle: 'Kecukupan Pipa Penjualan',
        title: 'Pipeline Coverage',
        summary: 'Menilai kecukupan peluang terkualifikasi tertimbang terhadap sisa target penjualan berjalan.',
        highlights: [
          'Formula: Weighted qualified pipeline ÷ Remaining target.',
          'Probabilitas stage wajib berdasar bukti terverifikasi, bukan feeling.',
        ],
        footerLabel: 'Validasi',
        footerValue: 'Stage Evidence di CRM',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-age',
      name: 'Stock Aging',
      formula: 'Tanggal laporan − tanggal barang diterima gudang',
      caution: 'Bucket aging disesuaikan kategori',
      modal: {
        badge: 'Lampiran A • KPI 05',
        subtitle: 'Kesehatan Umur Persediaan',
        title: 'Stock Aging',
        summary: 'Mengidentifikasi usia simpan barang sejak diterima gudang guna mencegah penumpukan stok lambat gerak.',
        highlights: [
          'Formula: Tanggal laporan − Tanggal barang diterima gudang.',
          'Gunakan bucket umur yang relevan terhadap karakter produk baru vs second.',
        ],
        footerLabel: 'Tindak Lanjut',
        footerValue: 'Bundling / Akselerasi Channel Terkendali',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-ar',
      name: 'Overdue AR Ratio',
      formula: 'AR overdue / total AR × 100%',
      caution: 'Pisahkan bucket 1–30, 31–60, 61–90, >90 hr',
      modal: {
        badge: 'Lampiran A • KPI 06',
        subtitle: 'Kualitas Penagihan & Kas',
        title: 'Overdue AR Ratio',
        summary: 'Menjaga agar pertumbuhan penjualan tetap diikuti kualitas pembayaran sesuai termin kredit.',
        highlights: [
          'Formula: AR overdue ÷ Total AR × 100%.',
          'Pisahkan bucket aging (1–30, 31–60, 61–90, >90 hari) sesuai kebijakan kredit.',
        ],
        footerLabel: 'Kolaborasi',
        footerValue: 'Finance Collection & Sales Owner',
        accent: 'red',
      },
    },
    {
      id: 'kpi-crm',
      name: 'CRM Completeness',
      formula: 'Opportunity field wajib lengkap / active opps × 100%',
      caution: 'Field wajib mengikuti ketentuan SOP',
      modal: {
        badge: 'Lampiran A • KPI 07',
        subtitle: 'Kepatuhan Data Operasional',
        title: 'CRM Completeness',
        summary: 'Mengukur kepatuhan tim dalam melengkapi field wajib agar forecast dan coaching bertumpu pada data utuh.',
        highlights: [
          'Formula: Active opportunities ber-field wajib lengkap ÷ Total active opportunities × 100%.',
          'Kriteria field wajib mengikuti SOP yang disepakati.',
        ],
        footerLabel: 'Kontrol',
        footerValue: 'Audit Hygiene Pipeline Mingguan',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-disc',
      name: 'Discount Compliance',
      formula: 'Transaksi sesuai matrix / transaksi diskon × 100%',
      caution: 'Audit sampel + simpan approval log',
      modal: {
        badge: 'Lampiran A • KPI 08',
        subtitle: 'Tata Kelola Persetujuan Harga',
        title: 'Discount Compliance',
        summary: 'Memastikan pemberian diskon tidak keluar dari batas kewenangan dan jejak approval tercatat.',
        highlights: [
          'Formula: Transaksi sesuai approval matrix ÷ Total transaksi berdiskon × 100%.',
          'Lakukan sampling audit dan simpan log persetujuan harga.',
        ],
        footerLabel: 'Otoritas',
        footerValue: 'Pricing Governance Matrix',
        accent: 'red',
      },
    },
  ],
  cadenceTitle: 'Cadence Pelaporan Komersial',
  cadences: [
    {
      id: 'cad-d',
      frequency: 'Harian',
      question: 'Prioritas hari ini, lead disentuh & kendala cepat?',
      output: 'Briefing singkat; action owner & due date',
    },
    {
      id: 'cad-w',
      frequency: 'Mingguan',
      question: 'Peluang maju/macet, forecast & hambatan utama?',
      output: 'Pipeline review; deal action plan & eskalasi',
    },
    {
      id: 'cad-m',
      frequency: 'Bulanan',
      question: 'Revenue, margin, collection, stock & target segmen?',
      output: 'Business review; corrective action & revisi forecast',
    },
    {
      id: 'cad-q',
      frequency: 'Kuartalan',
      question: 'Apakah kompetensi, perilaku & hasil sesuai grade?',
      output: 'Competency review; IDP, pembinaan/promosi policy',
    },
  ],
  cockpitTitle: '1. Manager Commercial Cockpit',
  cockpitNotice: 'RANCANGAN / CONTOH STRUKTUR — BUKAN BUKTI DASHBOARD LIVE',
  cockpitPanels: [
    {
      id: 'cp-1',
      panel: 'KPI Cards',
      fields: 'Revenue, achievement, gross margin, pipeline, win rate, overdue AR, slow stock',
      interaction: 'Filter periode, segment, region & sales owner',
    },
    {
      id: 'cp-2',
      panel: 'Sales Funnel',
      fields: 'Lead, contacted, qualified, discovery, quotation, negotiation, won/lost',
      interaction: 'Klik stage untuk lihat opportunity list',
    },
    {
      id: 'cp-3',
      panel: 'Revenue Trend',
      fields: 'Actual vs target vs prior year; forecast pasca bulan aktual',
      interaction: 'Filter bulan, segment & product family',
    },
    {
      id: 'cp-4',
      panel: 'Deal Table',
      fields: 'Account, opportunity, owner, stage, value, close date, margin, next action',
      interaction: 'Sort berdasarkan value, close date & risk',
    },
    {
      id: 'cp-5',
      panel: 'Risk Panel',
      fields: 'Stale opp, follow-up overdue, margin exception, stock kosong, AR overdue',
      interaction: 'Filter per PIC & buka action log',
    },
    {
      id: 'cp-6',
      panel: 'Team Scorecard',
      fields: 'Revenue, margin, activity, conversion, CRM discipline & collection',
      interaction: 'Bandingkan sesuai role/segmen, bukan pukul rata',
    },
  ],
  individualTitle: '2. Sales Individual Report',
  individualBlocks: [
    { id: 'ind-1', block: 'Profile', scope: 'Nama, role, grade, territory & periode (target sesuai peran)' },
    { id: 'ind-2', block: 'Activity', scope: 'New leads, kontak, visit/meeting, quotes & follow-up' },
    { id: 'ind-3', block: 'Result', scope: 'Revenue, gross profit, unit, closed-won & repeat order' },
    { id: 'ind-4', block: 'Funnel', scope: 'Stage, value, age, expected close & bahan coaching' },
    { id: 'ind-5', block: 'Quality', scope: 'Overdue AR, komplain, retur, kepatuhan margin & CRM' },
    { id: 'ind-6', block: 'Action Plan', scope: 'Top 3 opportunities, top 3 risks & komitmen minggu depan' },
  ],
  drilldownTitle: '3. Alur Interactive Drill-Down',
  drilldowns: [
    {
      id: 'dd-1',
      code: 'ALUR 01',
      trigger: 'Klik Revenue Actual',
      path: 'Pilih segment → pilih sales owner → daftar invoice/order pembentuk angka',
      modal: {
        badge: 'Drill-Down 01 • Rancangan',
        subtitle: 'Telusur Pendapatan Hingga Transaksi',
        title: 'Revenue Actual Drill-Down',
        summary: 'Memastikan angka omzet di cockpit dapat ditelusuri langsung ke segmen, pemilik akun, hingga daftar invoice/order.',
        highlights: [
          'Langkah: Revenue Actual → Segment → Sales Owner → Invoice / Order List.',
          'Status: Rancangan alur inspeksi — bergantung pada integrasi data ERP/Finance.',
        ],
        footerLabel: 'Audit Trail',
        footerValue: 'Invoice & Order Verification',
        accent: 'red',
      },
    },
    {
      id: 'dd-2',
      code: 'ALUR 02',
      trigger: 'Klik Pipeline at Risk',
      path: 'Detail opportunity → cek last activity, next action, expected close & blocker',
      modal: {
        badge: 'Drill-Down 02 • Rancangan',
        subtitle: 'Diagnosa Peluang Stagnan',
        title: 'Pipeline at Risk Drill-Down',
        summary: 'Membuka akar hambatan di balik deal yang melambat agar intervensi coaching tepat sasaran.',
        highlights: [
          'Memeriksa last activity, next action tertunda, jadwal close, posisi kompetitor & blocker.',
          'Dipakai langsung pada Weekly Pipeline Review.',
        ],
        footerLabel: 'Tujuan',
        footerValue: 'Intervensi Dini Sebelum Deal Hilang',
        accent: 'slate',
      },
    },
    {
      id: 'dd-3',
      code: 'ALUR 03',
      trigger: 'Klik Margin Exception',
      path: 'Lihat quotation, HPP, requested discount, approver & margin pasca-diskon',
      modal: {
        badge: 'Drill-Down 03 • Rancangan',
        subtitle: 'Kendali Laba & Persetujuan Diskon',
        title: 'Margin Exception Drill-Down',
        summary: 'Menampilkan transparansi penuh antara HPP, potongan yang diminta, pemberi izin, dan dampak margin akhir.',
        highlights: [
          'Mencegah erosi laba akibat diskon berulang tanpa alasan bisnis yang sah.',
          'Terhubung ke Discount Compliance KPI.',
        ],
        footerLabel: 'Kontrol',
        footerValue: 'Audit Approval Matrix',
        accent: 'red',
      },
    },
    {
      id: 'dd-4',
      code: 'ALUR 04',
      trigger: 'Klik Slow-Moving Stock',
      path: 'Lihat SKU, umur stok, cost, kondisi, lokasi gudang & rekomendasi aksi',
      modal: {
        badge: 'Drill-Down 04 • Rancangan',
        subtitle: 'Pengawasan Stok Menua',
        title: 'Slow-Moving Stock Drill-Down',
        summary: 'Menghubungkan data usia stok gudang ke keputusan bundling, alokasi channel, atau promo terkendali.',
        highlights: [
          'Menampilkan SKU, usia simpan, biaya, status QC/kondisi, dan lokasi fisik gudang.',
          'Mendukung keputusan pelepasan stok tanpa merusak struktur harga sehat.',
        ],
        footerLabel: 'Lintas Fungsi',
        footerValue: 'Warehouse + Commercial Alignment',
        accent: 'slate',
      },
    },
    {
      id: 'dd-5',
      code: 'ALUR 05',
      trigger: 'Klik Overdue AR',
      path: 'Lihat account, invoice, due date, nominal, PIC, status dispute & aksi tagih',
      modal: {
        badge: 'Drill-Down 05 • Rancangan',
        subtitle: 'Pengamanan Arus Kas Penjualan',
        title: 'Overdue AR Drill-Down',
        summary: 'Memantau keterlambatan bayar per akun sekaligus memisahkan isu administrasi, sengketa teknis, atau tindak lanjut tagih.',
        highlights: [
          'Menampilkan invoice jatuh tempo, nilai, PIC sales, status dispute & next collection action.',
          'Menjadi bahan langsung saat tinjauan bulanan bersama Finance.',
        ],
        footerLabel: 'Perlindungan Kas',
        footerValue: 'Kualitas Revenue hingga Cash-In',
        accent: 'red',
      },
    },
  ],
  readinessTitle: 'Checklist Data Internal (10 Area)',
  dataDomains: [
    { id: 'dom-1', area: 'Revenue & Profit', scope: '12–24 bln omzet, GP, margin, diskon, retur, PPN & invoice' },
    { id: 'dom-2', area: 'Inventory', scope: 'SOH, SKU/serial, basis unit/nilai, new/used, HPP, aging & QC' },
    { id: 'dom-3', area: 'Customer', scope: 'Master data, industri, region, PIC, konsentrasi, repeat & komplain' },
    { id: 'dom-4', area: 'Sales Pipeline', scope: 'Lead source, stage, quote, win/loss, deal size & sales cycle' },
    { id: 'dom-5', area: 'AR & Credit', scope: 'AR aging, DSO, termin, limit kredit, overdue & status tagih' },
    { id: 'dom-6', area: 'Team & HR', scope: 'Roster, role, salary band, performa, skill, turnover & training' },
    { id: 'dom-7', area: 'B2B / B2G', scope: 'Registrasi vendor, akun e-proc, riwayat tender & daftar partner' },
    { id: 'dom-8', area: 'Marketing', scope: 'Web, marketplace, sosial, campaign, budget, lead & atribusi' },
    { id: 'dom-9', area: 'Operations', scope: 'Lead-time pengadaan, kapasitas instalasi, SLA & layanan garansi' },
    { id: 'dom-10', area: 'Systems', scope: 'ERP/POS/CRM/WMS/accounting, owner data & hak akses laporan' },
  ],
  competencyTitle: 'Uji Kompetensi 4 Portofolio',
  portfolioCompetencies: [
    {
      id: 'pc-1',
      portfolio: 'Retail Offline & Online',
      coreTest: 'Product knowledge new/second, garansi, respons chat, marketplace, up-selling & role-play closing cepat.',
    },
    {
      id: 'pc-2',
      portfolio: 'Distribusi / Channel',
      coreTest: 'Jaringan reseller, harga kuantitas, stok, negosiasi tempo/kredit & simulasi onboarding akun.',
    },
    {
      id: 'pc-3',
      portfolio: 'B2B',
      coreTest: 'Prospecting, stakeholder mapping, discovery teknis/anggaran, proposal solusi & account plan.',
    },
    {
      id: 'pc-4',
      portfolio: 'B2G',
      coreTest: 'Alur pengadaan, review dokumen paket, bid/no-bid, kemitraan maincon/subcon & risiko cash flow.',
    },
  ],
  clarificationsTitle: '9 Klarifikasi Terbuka',
  clarificationsNote: 'Wajib dikonfirmasi data internal — tidak dijawab dengan asumsi.',
  clarifications: [
    { id: 'cl-1', code: 'Q1', topic: 'Headcount', question: 'Apakah 15 orang mencakup 2 Supervisor & Manager di luar hitungan?' },
    { id: 'cl-2', code: 'Q2', topic: 'Basis 40/40/20', question: 'Kontribusi berdasar omzet, margin, invoice, atau transaksi? Periode apa?' },
    { id: 'cl-3', code: 'Q3', topic: 'Basis 70/30', question: 'Komposisi 70% second / 30% baru berdasar unit, SKU, atau nilai stok?' },
    { id: 'cl-4', code: 'Q4', topic: 'Baseline B2G', question: 'Berapa baseline B2G aktual & definisi usulan gabungan B2B+B2G 40%?' },
    { id: 'cl-5', code: 'Q5', topic: 'Tools Eksisting', question: 'Apakah CRM, ERP, WMS, atau approval harga sudah berjalan? Apa sistemnya?' },
    { id: 'cl-6', code: 'Q6', topic: 'Otorisasi', question: 'Produk/jasa mana yang memiliki otorisasi principal, garansi, & sertifikat resmi?' },
    { id: 'cl-7', code: 'Q7', topic: 'Partner “Komitkabe”', question: 'Apa nama entitas sebenarnya & bentuk kolaborasi komersialnya?' },
    { id: 'cl-8', code: 'Q8', topic: 'Status ISO 9001', question: 'Belum tersertifikasi, sedang persiapan, atau sudah memegang sertifikat?' },
    { id: 'cl-9', code: 'Q9', topic: '5 Kota Ekspansi', question: 'Apa lima kota prioritas ekspansi retail/distribusi & dasar pemilihannya?' },
  ],
  researchNote:
    'Rujukan Eksternal [R1]–[R6] (Lampiran D, ditutup 24 Nov 2026): Pengadaan pemerintah & kapasitas data center dipakai hanya sebagai konteks makro/regulasi; tidak tersedia data publik yang cukup untuk menghitung TAM/SAM/SOM sehingga ukuran pasar disusun secara bottom-up dari akun nyata.',
};

export const slideDataEn: Slide29Data = {
  eyebrow: 'V. Execution & Outcomes • Appendices A–E',
  title: 'Operational Appendix',
  subtitle: 'Synthesizing source KPI formulas, cockpit blueprints, internal data checklists, and unresolved confirmation items.',
  mockupLabel: 'REFERENCE FRAMEWORK & BLUEPRINT — NOT LIVE SYSTEM DATA',
  tabs: [
    { id: 'kpi', label: 'KPIs & Cadence' },
    { id: 'cockpit', label: 'Cockpit & Drill-Down' },
    { id: 'readiness', label: 'Data & Competencies' },
    { id: 'clarifications', label: 'Open Clarifications' },
  ],
  kpiSectionTitle: '8 Core KPI Formulas',
  kpiFinanceCaveat: 'Final definitions must be aligned with Finance so every segment uses one consistent basis.',
  kpis: [
    {
      id: 'kpi-rev',
      name: 'Revenue Achievement',
      formula: 'Revenue actual / revenue target × 100%',
      caution: 'Same period & accounting basis required',
      modal: {
        badge: 'Appendix A • KPI 01',
        subtitle: 'Top-Line Attainment Tracking',
        title: 'Revenue Achievement',
        metric: 'Actual / Target',
        metricLabel: 'Percentage Ratio',
        summary: 'Measures actual recognized revenue against target under identical period and accounting cut-off rules.',
        highlights: [
          'Formula: Revenue actual ÷ Revenue target × 100%.',
          'Note: confirm invoice vs cash-in basis with Finance.',
        ],
        footerLabel: 'Alignment',
        footerValue: 'Finance Accounting Standard',
        accent: 'red',
      },
    },
    {
      id: 'kpi-gm',
      name: 'Gross Margin %',
      formula: '(Net selling price − COGS) / net selling price × 100%',
      caution: 'Not Markup; use approved COGS basis',
      modal: {
        badge: 'Appendix A • KPI 02',
        subtitle: 'Profit Quality (Not Markup)',
        title: 'Gross Margin %',
        metric: '≠ Markup',
        metricLabel: 'Formula Caution',
        summary: 'Captures net gross profit share out of net selling price using Finance-approved COGS.',
        highlights: [
          'Formula: (Net selling price − COGS) ÷ Net selling price × 100%.',
          'Explicit guardrail: Gross Margin is not identical to cost Markup.',
        ],
        footerLabel: 'Alignment',
        footerValue: 'Approved Finance COGS Basis',
        accent: 'red',
      },
    },
    {
      id: 'kpi-win',
      name: 'Win Rate',
      formula: 'Closed-won / (closed-won + closed-lost) × 100%',
      caution: 'Exclude open opportunities from denominator',
      modal: {
        badge: 'Appendix A • KPI 03',
        subtitle: 'Closing Effectiveness',
        title: 'Win Rate',
        summary: 'Measures won share across decided opportunities within a defined period or cohort.',
        highlights: [
          'Formula: Closed-won ÷ (Closed-won + Closed-lost) × 100%.',
          'Open opportunities must stay excluded from the denominator.',
        ],
        footerLabel: 'Funnel Rule',
        footerValue: 'Decided Cohort Evaluation',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-cov',
      name: 'Pipeline Coverage',
      formula: 'Weighted qualified pipeline / remaining target',
      caution: 'Probabilities grounded in stage evidence',
      modal: {
        badge: 'Appendix A • KPI 04',
        subtitle: 'Forward Target Coverage',
        title: 'Pipeline Coverage',
        summary: 'Evaluates weighted qualified opportunities against remaining period sales targets.',
        highlights: [
          'Formula: Weighted qualified pipeline ÷ Remaining target.',
          'Stage probabilities must reflect verified evidence, not intuition.',
        ],
        footerLabel: 'Validation',
        footerValue: 'CRM Stage Evidence Gates',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-age',
      name: 'Stock Aging',
      formula: 'Report date − warehouse receipt date',
      caution: 'Aging buckets tailored per product line',
      modal: {
        badge: 'Appendix A • KPI 05',
        subtitle: 'Inventory Shelf-Life Health',
        title: 'Stock Aging',
        summary: 'Tracks days held in warehouse since receipt to flag slow-moving stock early.',
        highlights: [
          'Formula: Report date − Warehouse receipt date.',
          'Apply aging buckets tailored to new vs refurbished/used hardware.',
        ],
        footerLabel: 'Action',
        footerValue: 'Bundling / Controlled Channel Activation',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-ar',
      name: 'Overdue AR Ratio',
      formula: 'Overdue AR / total AR × 100%',
      caution: 'Split 1–30, 31–60, 61–90, >90 day buckets',
      modal: {
        badge: 'Appendix A • KPI 06',
        subtitle: 'Receivables & Cash Discipline',
        title: 'Overdue AR Ratio',
        summary: 'Ensures revenue growth translates into timely customer collections rather than rising bad debt.',
        highlights: [
          'Formula: Overdue AR ÷ Total AR × 100%.',
          'Separate 1–30, 31–60, 61–90, and >90-day buckets per credit policy.',
        ],
        footerLabel: 'Joint Review',
        footerValue: 'Finance Collection & Sales Owner',
        accent: 'red',
      },
    },
    {
      id: 'kpi-crm',
      name: 'CRM Completeness',
      formula: 'Opportunities with mandatory fields / active opps × 100%',
      caution: 'Mandatory fields follow SOP spec',
      modal: {
        badge: 'Appendix A • KPI 07',
        subtitle: 'Operational Data Hygiene',
        title: 'CRM Completeness',
        summary: 'Measures consistent logging of mandatory opportunity fields so forecasts and coaching rely on facts.',
        highlights: [
          'Formula: Complete mandatory-field active opportunities ÷ Total active opportunities × 100%.',
          'Mandatory field list follows agreed Sales & Marketing SOP.',
        ],
        footerLabel: 'Control',
        footerValue: 'Weekly Pipeline Hygiene Check',
        accent: 'slate',
      },
    },
    {
      id: 'kpi-disc',
      name: 'Discount Compliance',
      formula: 'Deals matching approval matrix / discounted deals × 100%',
      caution: 'Sample audit + preserve approval logs',
      modal: {
        badge: 'Appendix A • KPI 08',
        subtitle: 'Pricing Authority Governance',
        title: 'Discount Compliance',
        summary: 'Verifies discounted transactions follow tiered approval authority with documented rationale.',
        highlights: [
          'Formula: Compliant discounted transactions ÷ Total discounted transactions × 100%.',
          'Enforced via sampling audits and preserved approval logs.',
        ],
        footerLabel: 'Authority',
        footerValue: 'Pricing Governance Matrix',
        accent: 'red',
      },
    },
  ],
  cadenceTitle: 'Management Reporting Cadence',
  cadences: [
    {
      id: 'cad-d',
      frequency: 'Daily',
      question: 'Today’s priorities, leads to touch & fast blockers?',
      output: 'Short briefing; action owner & due date',
    },
    {
      id: 'cad-w',
      frequency: 'Weekly',
      question: 'Which deals move or stall, forecast & top bottlenecks?',
      output: 'Pipeline review; deal action plan & escalation',
    },
    {
      id: 'cad-m',
      frequency: 'Monthly',
      question: 'Revenue, margin, collection, stock & segment target?',
      output: 'Business review; corrective action & forecast update',
    },
    {
      id: 'cad-q',
      frequency: 'Quarterly',
      question: 'Do competence, behavior & results match grade?',
      output: 'Competency review; IDP, coaching or policy-based promotion',
    },
  ],
  cockpitTitle: '1. Manager Commercial Cockpit',
  cockpitNotice: 'PROPOSED BLUEPRINT / EXAMPLE — NOT A LIVE DASHBOARD',
  cockpitPanels: [
    {
      id: 'cp-1',
      panel: 'KPI Cards',
      fields: 'Revenue, attainment, gross margin, qualified pipeline, win rate, overdue AR, slow stock',
      interaction: 'Filter period, segment, region & sales owner',
    },
    {
      id: 'cp-2',
      panel: 'Sales Funnel',
      fields: 'Lead, contacted, qualified, discovery, quotation, negotiation, won/lost',
      interaction: 'Click stage to inspect opportunity list',
    },
    {
      id: 'cp-3',
      panel: 'Revenue Trend',
      fields: 'Actual vs target vs prior year; forecast beyond last actual month',
      interaction: 'Filter month, segment & product family',
    },
    {
      id: 'cp-4',
      panel: 'Deal Table',
      fields: 'Account, opportunity, owner, stage, value, expected close, margin, next action',
      interaction: 'Sort by value, close date & risk',
    },
    {
      id: 'cp-5',
      panel: 'Risk Panel',
      fields: 'Stale opps, overdue follow-up, margin exception, stockout, overdue AR',
      interaction: 'Filter by responsible role & open action log',
    },
    {
      id: 'cp-6',
      panel: 'Team Scorecard',
      fields: 'Revenue, margin, activity, conversion, CRM discipline & collection quality',
      interaction: 'Compare by role/segment, never rank blindly',
    },
  ],
  individualTitle: '2. Sales Individual Report',
  individualBlocks: [
    { id: 'ind-1', block: 'Profile', scope: 'Rep name, role, grade, territory & period (role-fit targets)' },
    { id: 'ind-2', block: 'Activity', scope: 'New leads, contacts, visits/meetings, quotes & follow-ups' },
    { id: 'ind-3', block: 'Result', scope: 'Revenue, gross profit, units, closed-won & repeat orders' },
    { id: 'ind-4', block: 'Funnel', scope: 'Stage, value, deal age, expected close & coaching focus' },
    { id: 'ind-5', block: 'Quality', scope: 'Overdue AR, complaints, returns, margin & CRM compliance' },
    { id: 'ind-6', block: 'Action Plan', scope: 'Top 3 opportunities, top 3 risks & next-week commitments' },
  ],
  drilldownTitle: '3. Interactive Drill-Down Paths',
  drilldowns: [
    {
      id: 'dd-1',
      code: 'PATH 01',
      trigger: 'Click Revenue Actual',
      path: 'Select segment → select sales owner → inspect underlying invoice/order list',
      modal: {
        badge: 'Drill-Down 01 • Blueprint',
        subtitle: 'Tracing Top-Line to Invoices',
        title: 'Revenue Actual Drill-Down',
        summary: 'Ensures summary cockpit revenue traces directly down to segment, account owner, and issued invoices/orders.',
        highlights: [
          'Path: Revenue Actual → Segment → Sales Owner → Invoice / Order List.',
          'Status: Proposed reporting design contingent on ERP/Finance data links.',
        ],
        footerLabel: 'Audit Trail',
        footerValue: 'Invoice & Order Verification',
        accent: 'red',
      },
    },
    {
      id: 'dd-2',
      code: 'PATH 02',
      trigger: 'Click Pipeline at Risk',
      path: 'Open opportunity detail → check last activity, next action, expected close & blocker',
      modal: {
        badge: 'Drill-Down 02 • Blueprint',
        subtitle: 'Diagnosing Stalled Opportunities',
        title: 'Pipeline at Risk Drill-Down',
        summary: 'Surfaces root causes behind stalling deals so manager coaching addresses real blockers early.',
        highlights: [
          'Inspects last activity, overdue next step, expected close date, competitor & blocker.',
          'Core workflow for Weekly Pipeline Reviews.',
        ],
        footerLabel: 'Objective',
        footerValue: 'Early Intervention Before Deal Loss',
        accent: 'slate',
      },
    },
    {
      id: 'dd-3',
      code: 'PATH 03',
      trigger: 'Click Margin Exception',
      path: 'Inspect quotation, COGS, requested discount, approver & post-discount margin',
      modal: {
        badge: 'Drill-Down 03 • Blueprint',
        subtitle: 'Margin & Discount Governance',
        title: 'Margin Exception Drill-Down',
        summary: 'Exposes full pricing math across COGS, requested discount, approver authority, and final net margin.',
        highlights: [
          'Prevents silent profit erosion from repeated off-policy discounting.',
          'Linked directly to Discount Compliance KPI.',
        ],
        footerLabel: 'Control',
        footerValue: 'Approval Matrix Auditability',
        accent: 'red',
      },
    },
    {
      id: 'dd-4',
      code: 'PATH 04',
      trigger: 'Click Slow-Moving Stock',
      path: 'Inspect SKU, stock age, cost, condition, warehouse location & action',
      modal: {
        badge: 'Drill-Down 04 • Blueprint',
        subtitle: 'Aged Inventory Visibility',
        title: 'Slow-Moving Stock Drill-Down',
        summary: 'Connects warehouse aging records to targeted bundling, channel push, or capped clearance decisions.',
        highlights: [
          'Displays SKU, shelf age, unit cost, QC condition, and physical location.',
          'Supports structured stock movement without uncontrolled price dumping.',
        ],
        footerLabel: 'Cross-Team Link',
        footerValue: 'Warehouse + Commercial Alignment',
        accent: 'slate',
      },
    },
    {
      id: 'dd-5',
      code: 'PATH 05',
      trigger: 'Click Overdue AR',
      path: 'Inspect account, invoice, due date, amount, owner, dispute & collection action',
      modal: {
        badge: 'Drill-Down 05 • Blueprint',
        subtitle: 'Protecting Cash Collection',
        title: 'Overdue AR Drill-Down',
        summary: 'Tracks past-due balances by account while separating billing admin delays, disputes, and collection steps.',
        highlights: [
          'Shows invoice details, due date, balance, rep owner, dispute status & next action.',
          'Reviewed monthly alongside Finance credit controls.',
        ],
        footerLabel: 'Cash Protection',
        footerValue: 'Revenue Quality Through Cash-In',
        accent: 'red',
      },
    },
  ],
  readinessTitle: 'Internal Data Readiness (10 Domains)',
  dataDomains: [
    { id: 'dom-1', area: 'Revenue & Profit', scope: '12–24 mos revenue, GP, margin, discount, returns, VAT & invoices' },
    { id: 'dom-2', area: 'Inventory', scope: 'SOH, SKU/serial, unit/value basis, new/used, COGS, age & QC' },
    { id: 'dom-3', area: 'Customer', scope: 'Customer master, industry, region, PIC, concentration & complaints' },
    { id: 'dom-4', area: 'Sales Pipeline', scope: 'Lead source, stage, quotes, win/loss, deal size & sales cycle' },
    { id: 'dom-5', area: 'AR & Credit', scope: 'AR aging, DSO, terms, credit limits, overdue & collections' },
    { id: 'dom-6', area: 'Team & HR', scope: 'Roster, role, salary band, performance, skill, turnover & L&D' },
    { id: 'dom-7', area: 'B2B / B2G', scope: 'Vendor registration, e-proc accounts, tender history & partners' },
    { id: 'dom-8', area: 'Marketing', scope: 'Website, marketplace, social, campaigns, budget & attribution' },
    { id: 'dom-9', area: 'Operations', scope: 'Procurement lead-time, install capacity, SLA & warranty service' },
    { id: 'dom-10', area: 'Systems', scope: 'ERP/POS/CRM/WMS/accounting, data owners & access rights' },
  ],
  competencyTitle: 'Portfolio Competency Matrix',
  portfolioCompetencies: [
    {
      id: 'pc-1',
      portfolio: 'Retail Offline & Online',
      coreTest: 'New/used product knowledge, warranty clarity, chat speed, marketplace, up-selling & walk-in closing.',
    },
    {
      id: 'pc-2',
      portfolio: 'Distribution / Channel',
      coreTest: 'Reseller network, volume pricing, stock turns, payment-term negotiation & reseller onboarding.',
    },
    {
      id: 'pc-3',
      portfolio: 'B2B',
      coreTest: 'Prospecting, stakeholder mapping, technical/budget discovery, solution proposals & account planning.',
    },
    {
      id: 'pc-4',
      portfolio: 'B2G',
      coreTest: 'Procurement rules, package document checks, bid/no-bid rigor, maincon teaming & cash-flow risk.',
    },
  ],
  clarificationsTitle: '9 Open Clarifications',
  clarificationsNote: 'Requires internal data verification — never answered via assumptions.',
  clarifications: [
    { id: 'cl-1', code: 'Q1', topic: 'Headcount', question: 'Does the 15-person count include 2 Supervisors and exclude the Manager?' },
    { id: 'cl-2', code: 'Q2', topic: '40/40/20 Basis', question: 'Is segment contribution measured by revenue, margin, invoices, or orders?' },
    { id: 'cl-3', code: 'Q3', topic: '70/30 Mix Basis', question: 'Is 70% second / 30% new based on units, SKUs, or inventory value?' },
    { id: 'cl-4', code: 'Q4', topic: 'B2G Baseline', question: 'What is actual B2G baseline & exact definition of combined 40% B2B+B2G?' },
    { id: 'cl-5', code: 'Q5', topic: 'Existing Tools', question: 'Which CRM, ERP, WMS, or price approval tools are currently in live use?' },
    { id: 'cl-6', code: 'Q6', topic: 'Authorizations', question: 'Which lines hold official principal authorization, warranty & tech teams?' },
    { id: 'cl-7', code: 'Q7', topic: '“Komitkabe” Partner', question: 'What is the verified partner legal name & exact commercial structure?' },
    { id: 'cl-8', code: 'Q8', topic: 'ISO 9001 Status', question: 'Is the firm uncertified, preparing documentation, or already certified?' },
    { id: 'cl-9', code: 'Q9', topic: '5 Priority Cities', question: 'Which five cities are targeted for retail/distribution & on what criteria?' },
  ],
  researchNote:
    'External Research [R1]–[R6] (Appendix D, closed Nov 24, 2026): Public procurement & data-center metrics serve purely as macro/regulatory context; insufficient public data exists for top-down TAM/SAM/SOM, so market sizing relies on bottom-up account mapping.',
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide29Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide29Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 29,
  folder: '29',
  sectionId: 8,
  navTitle: {
    in: 'Lampiran Operasional',
    en: 'Operational Appendix',
  },
  headerTitle: {
    in: 'Lampiran Operasional - Referensi KPI, Cockpit, Data & Klarifikasi',
    en: 'Operational Appendix - KPIs, Cockpit Blueprint, Data & Clarifications',
  },
  category: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes',
  },
  section: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes',
  },
};
