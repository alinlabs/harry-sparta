import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide30ModalPayload {
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

export interface TransformationRow {
  id: string;
  dimension: string;
  fromState: string;
  toState: string;
  qualifier?: string;
}

export interface ClosingPillarItem {
  id: string;
  name: string;
  summary: string;
}

export interface FirstDecisionCard {
  id: string;
  code: string;
  title: string;
  scope: string;
  modal: Slide30ModalPayload;
}

export interface Slide30Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  tableTitle: string;
  dimensionLabel: string;
  fromLabel: string;
  toLabel: string;
  rows: TransformationRow[];
  pillarsTitle: string;
  pillars: ClosingPillarItem[];
  decisionsTitle: string;
  decisions: FirstDecisionCard[];
  closingStatement: string;
  presenterName: string;
  presenterRole: string;
}

export const slideDataId: Slide30Data = {
  eyebrow: 'Penutup • Keputusan Awal Eksekusi',
  title: 'Closing — Menuju Scalable Commercial System',
  subtitle: 'Menyatukan pembenahan organisasi, SOP, data, portofolio, dan tata kelola menuju sistem pertumbuhan yang dapat diulang.',
  tableTitle: 'Pergeseran Utama (From → To)',
  dimensionLabel: 'Dimensi',
  fromLabel: 'Kondisi Saat Ini',
  toLabel: 'Sistem Sasaran',
  rows: [
    {
      id: 'tr-1',
      dimension: 'Cara Kerja',
      fromState: 'Penjualan berbasis kebiasaan',
      toState: 'Sistem komersial terstruktur',
    },
    {
      id: 'tr-2',
      dimension: 'Evaluasi',
      fromState: 'Penilaian berbasis perasaan',
      toState: 'Keputusan berbasis data & report',
    },
    {
      id: 'tr-3',
      dimension: 'Harga',
      fromState: 'Tidak terstruktur',
      toState: 'Berbasis HPP, margin & approval matrix',
    },
    {
      id: 'tr-4',
      dimension: 'Pendekatan',
      fromState: 'Penjual produk satuan',
      toState: 'Konsultan solusi sesuai portofolio',
    },
    {
      id: 'tr-5',
      dimension: 'Bauran Segmen',
      fromState: 'Dominasi retail & distribusi',
      toState: 'Pertumbuhan B2B & kesiapan B2G',
      qualifier: 'Usulan bertahap',
    },
    {
      id: 'tr-6',
      dimension: 'Skala Omzet',
      fromState: 'Rp2,5–3 miliar / bulan',
      toState: 'Target Rp4–5 miliar / bulan',
      qualifier: 'Target perusahaan (bukan jaminan personal)',
    },
  ],
  pillarsTitle: '5 Pilar Sistem Komersial',
  pillars: [
    {
      id: 'pil-people',
      name: 'People',
      summary: 'Role jelas, grade, kompetensi & calon leader',
    },
    {
      id: 'pil-process',
      name: 'Process',
      summary: 'SOP, pricing authority, lead assignment & handover',
    },
    {
      id: 'pil-data',
      name: 'Data',
      summary: 'CRM, inventory, report, forecast & margin',
    },
    {
      id: 'pil-market',
      name: 'Market',
      summary: '4 portofolio: Retail, Distribusi, B2B & B2G',
    },
    {
      id: 'pil-growth',
      name: 'Growth',
      summary: 'Omzet tumbuh dengan margin, piutang & stok sehat',
    },
  ],
  decisionsTitle: '4 Keputusan Awal Eksekusi',
  decisions: [
    {
      id: 'dec-1',
      code: '01',
      title: 'Mandate & Access',
      scope: 'Sponsor Direksi & akses data lintas divisi',
      modal: {
        badge: 'Keputusan 01 • Mandate & Access',
        subtitle: 'Sponsor Resmi & Visibilitas Sistem',
        title: 'Mandat Sponsor Direksi & Akses Data',
        summary: 'Memastikan diagnostic 30 hari pertama berjalan dengan sponsor Direksi serta akses data historis yang sah.',
        highlights: [
          'Mencakup data omzet, HPP/margin, aging piutang, stok gudang, dan alur approval eksisting.',
          'Menetapkan batasan otoritas agar eksekusi awal tidak terhambat silo antarbagian.',
        ],
        footerLabel: 'Kebutuhan Waktu',
        footerValue: 'Hari 1–7 Onboarding',
        accent: 'red',
      },
    },
    {
      id: 'dec-2',
      code: '02',
      title: 'Data Baseline',
      scope: 'Persetujuan diagnostic 30 hari & verifikasi angka awal',
      modal: {
        badge: 'Keputusan 02 • Data Baseline',
        subtitle: 'Menutup Blind Spot Angka Awal',
        title: 'Persetujuan Diagnostic 30 Hari & Baseline',
        summary: 'Menjadwalkan audit awal selama 30 hari untuk memverifikasi baseline segmen, stok 70/30, dan hitungan personel.',
        highlights: [
          'Menghasilkan Diagnostic Report sebagai rujukan bersama sebelum menetapkan KPI final.',
          'Menyepakati definisi pengukuran konsisten bersama Finance.',
        ],
        footerLabel: 'Output Kunci',
        footerValue: 'Diagnostic Report (Hari 30)',
        accent: 'slate',
      },
    },
    {
      id: 'dec-3',
      code: '03',
      title: 'Process Owners',
      scope: 'Penunjukan pemilik proses lintas fungsi (RACI)',
      modal: {
        badge: 'Keputusan 03 • Process Owners',
        subtitle: 'Koordinasi Lintas Divisi',
        title: 'Penunjukan Process Owner Lintas Fungsi',
        summary: 'Menetapkan PIC tetap di Finance, Warehouse, Technical, HR, dan Creative untuk alur Service Request & SLA.',
        highlights: [
          'Menjelaskan batas Manager S&M sebagai koordinator komersial yang tidak mengambil alih fungsi lain.',
          'Mengunci waktu respons quotation, cek stok, dan handover implementasi.',
        ],
        footerLabel: 'Struktur',
        footerValue: 'Mini RACI & SLA Lintas Fungsi',
        accent: 'slate',
      },
    },
    {
      id: 'dec-4',
      code: '04',
      title: 'Pilot Approvals',
      scope: 'Izin menguji quick wins & sistem minimum',
      modal: {
        badge: 'Keputusan 04 • Pilot Approvals',
        subtitle: 'Uji Lapangan 90 Hari',
        title: 'Ruang Uji Quick Wins & Pilot Sistem Minimum',
        summary: 'Memberi izin uji coba 3–5 quick wins, SOP awal, pricing request sederhana, dan pilot campaign dalam 90 hari pertama.',
        highlights: [
          'Berbasis skenario terkendali dengan tinjauan hasil di Gate Bulan 3 (M3).',
          'Menjadi dasar revisi roadmap Bulan 4–12 sesuai kapasitas nyata tim.',
        ],
        footerLabel: 'Evaluasi',
        footerValue: 'Gate M3 (Hari 90)',
        accent: 'red',
      },
    },
  ],
  closingStatement:
    'Sistem yang membuat tim tetap berjalan, pelanggan tetap terkelola, dan pertumbuhan dapat diulang dengan disiplin.',
  presenterName: 'Harry Gultom',
  presenterRole: 'Kandidat Manager Sales & Marketing',
};

export const slideDataEn: Slide30Data = {
  eyebrow: 'Closing • Starting Decisions',
  title: 'Closing — Toward a Scalable Commercial System',
  subtitle: 'Uniting organization, SOPs, data, four portfolios, and governance into a repeatable growth system.',
  tableTitle: 'Core Transformation (From → To)',
  dimensionLabel: 'Dimension',
  fromLabel: 'Current State',
  toLabel: 'Target System',
  rows: [
    {
      id: 'tr-1',
      dimension: 'Operating Mode',
      fromState: 'Habit-driven selling',
      toState: 'Structured commercial system',
    },
    {
      id: 'tr-2',
      dimension: 'Evaluation',
      fromState: 'Gut-feel review',
      toState: 'Data & report-driven decisions',
    },
    {
      id: 'tr-3',
      dimension: 'Pricing',
      fromState: 'Unstructured pricing',
      toState: 'COGS, margin & approval governance',
    },
    {
      id: 'tr-4',
      dimension: 'Selling Style',
      fromState: 'Single-product seller',
      toState: 'Solution consultant across portfolios',
    },
    {
      id: 'tr-5',
      dimension: 'Segment Mix',
      fromState: 'Retail & distribution heavy',
      toState: 'B2B growth & B2G readiness',
      qualifier: 'Phased proposal',
    },
    {
      id: 'tr-6',
      dimension: 'Revenue Scale',
      fromState: 'IDR 2.5–3B / month',
      toState: 'Target IDR 4–5B / month',
      qualifier: 'Company target (not personal guarantee)',
    },
  ],
  pillarsTitle: '5 Commercial System Pillars',
  pillars: [
    {
      id: 'pil-people',
      name: 'People',
      summary: 'Clear roles, grades, competence & future leaders',
    },
    {
      id: 'pil-process',
      name: 'Process',
      summary: 'SOPs, pricing authority, lead assignment & handover',
    },
    {
      id: 'pil-data',
      name: 'Data',
      summary: 'CRM, inventory, reporting, forecast & margin',
    },
    {
      id: 'pil-market',
      name: 'Market',
      summary: '4 portfolios: Retail, Distribution, B2B & B2G',
    },
    {
      id: 'pil-growth',
      name: 'Growth',
      summary: 'Revenue growth with healthy margin, AR & stock',
    },
  ],
  decisionsTitle: '4 Starting Decisions',
  decisions: [
    {
      id: 'dec-1',
      code: '01',
      title: 'Mandate & Access',
      scope: 'Director sponsor & cross-team data access',
      modal: {
        badge: 'Decision 01 • Mandate & Access',
        subtitle: 'Executive Sponsorship & System Visibility',
        title: 'Director Sponsor Mandate & Data Access',
        summary: 'Secures executive sponsorship and authorized access to historical commercial and stock records from Day 1.',
        highlights: [
          'Covers historical revenue, COGS/margin, AR aging, warehouse stock, and approval flows.',
          'Removes cross-functional bottlenecks during early diagnostic work.',
        ],
        footerLabel: 'Timing',
        footerValue: 'Onboarding Days 1–7',
        accent: 'red',
      },
    },
    {
      id: 'dec-2',
      code: '02',
      title: 'Data Baseline',
      scope: '30-day diagnostic & initial baseline verification',
      modal: {
        badge: 'Decision 02 • Data Baseline',
        subtitle: 'Closing Initial Blind Spots',
        title: '30-Day Diagnostic Approval & Baseline Verification',
        summary: 'Mandates a structured 30-day diagnostic to confirm segment baselines, 70/30 stock basis, and team roster counts.',
        highlights: [
          'Produces the Diagnostic Report prior to locking final KPI targets.',
          'Aligns measurement formulas jointly with Finance.',
        ],
        footerLabel: 'Key Output',
        footerValue: 'Diagnostic Report (Day 30)',
        accent: 'slate',
      },
    },
    {
      id: 'dec-3',
      code: '03',
      title: 'Process Owners',
      scope: 'Cross-functional RACI & SLA counterparts',
      modal: {
        badge: 'Decision 03 • Process Owners',
        subtitle: 'Cross-Department Coordination',
        title: 'Cross-Functional Process Owner Designation',
        summary: 'Confirms named counterparts in Finance, Warehouse, Technical, HR, and Creative for service requests and SLAs.',
        highlights: [
          'Respects authority boundaries: S&M Manager coordinates without overriding division heads.',
          'Establishes response SLAs for quotes, stock checks, and project handovers.',
        ],
        footerLabel: 'Governance',
        footerValue: 'Cross-Functional Mini RACI & SLA',
        accent: 'slate',
      },
    },
    {
      id: 'dec-4',
      code: '04',
      title: 'Pilot Approvals',
      scope: 'Room to test quick wins & minimum systems',
      modal: {
        badge: 'Decision 04 • Pilot Approvals',
        subtitle: 'Controlled 90-Day Trial',
        title: 'Quick Wins & Minimum System Pilot Approval',
        summary: 'Grants space to test 3–5 quick wins, initial SOPs, simple pricing requests, and pilot offers in Days 1–90.',
        highlights: [
          'Executed under controlled guardrails and reviewed at the Month-3 (M3) Gate.',
          'Calibrates the Months 4–12 roadmap to verified team capacity.',
        ],
        footerLabel: 'Review Gate',
        footerValue: 'M3 Gate (Day 90)',
        accent: 'red',
      },
    },
  ],
  closingStatement:
    'A system where the team keeps running, customers remain well-managed, and growth repeats with discipline.',
  presenterName: 'Harry Gultom',
  presenterRole: 'Sales & Marketing Manager Candidate',
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide30Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide30Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 30,
  folder: '30',
  sectionId: 4,
  navTitle: {
    in: 'Closing: Commercial System',
    en: 'Closing: Commercial System',
  },
  headerTitle: {
    in: 'Closing — Dari Kondisi Saat Ini ke Commercial System yang Scalable',
    en: 'Closing — From Current State to a Scalable Commercial System',
  },
  category: {
    in: 'Penutup',
    en: 'Closing',
  },
  section: {
    in: 'Penutup',
    en: 'Closing',
  },
};
