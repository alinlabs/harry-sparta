import { useLanguage } from '@/contexts/LanguageContext';
import type { WorkstreamFilterId, PhaseFilterId, CadenceNatureFilterId } from './utils';

export interface Slide25ModalPayload {
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

export interface GanttActivityRow {
  id: string;
  rowNo: string;
  activity: string;
  periodLabel: string;
  controlOutput: string;
  workstream: Exclude<WorkstreamFilterId, 'ALL'>;
  phase: Exclude<PhaseFilterId, 'ALL'>;
  nature: Exclude<CadenceNatureFilterId, 'ALL'>;
  activeMonths: number[];
  milestoneMonths?: number[];
  continuesAfterM12?: boolean;
  modal: Slide25ModalPayload;
}

export interface Slide25Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  scheduleCaveat: string;
  months: string[];
  filterLabels: {
    workstream: string;
    phase: string;
    nature: string;
  };
  workstreamOptions: Array<{ id: WorkstreamFilterId; label: string }>;
  phaseOptions: Array<{ id: PhaseFilterId; label: string }>;
  natureOptions: Array<{ id: CadenceNatureFilterId; label: string }>;
  tableHeaders: {
    activity: string;
    output: string;
  };
  legend: {
    phased: string;
    recurring: string;
    milestone: string;
    inactive: string;
    note: string;
  };
  rows: GanttActivityRow[];
  evidenceFooter: string;
}

export const slideDataId: Slide25Data = {
  eyebrow: 'Urutan Eksekusi Bulanan & Prasyarat Aktivitas',
  title: 'Monthly Execution Timeline: Gantt 12 Bulan',
  subtitle:
    'Menerjemahkan lima fase roadmap menjadi 15 baris kerja bulanan yang membedakan tugas berjangka, pekerjaan rutin berulang pasca M12, dan gate evaluasi kuartalan.',
  scheduleCaveat:
    'Rentang Bulan Mengikuti Gantt PDF Hal. 14 • Jadwal Final Disesuaikan Baseline, Resource & Keputusan Direksi',
  months: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'],
  filterLabels: {
    workstream: 'Workstream',
    phase: 'Fase',
    nature: 'Status/Sifat'
  },
  workstreamOptions: [
    { id: 'ALL', label: 'Semua Workstream' },
    { id: 'People', label: 'People' },
    { id: 'Process', label: 'Process' },
    { id: 'Revenue', label: 'Revenue' },
    { id: 'Data', label: 'Data' }
  ],
  phaseOptions: [
    { id: 'ALL', label: 'Semua Fase' },
    { id: 'orientasi', label: 'Orientasi (M1)' },
    { id: 'diagnosa', label: 'Diagnosa & Fondasi (M2–M3)' },
    { id: 'sistem', label: 'Sistem & SOP (M3–M5)' },
    { id: 'akselerasi', label: 'Akselerasi (M5–M8)' },
    { id: 'stabilisasi', label: 'Stabilisasi & Skala (M9–M12)' }
  ],
  natureOptions: [
    { id: 'ALL', label: 'Semua Sifat' },
    { id: 'one-time', label: 'Berjangka / Sekali Jalan' },
    { id: 'recurring', label: 'Berulang (Lanjut >M12)' },
    { id: 'milestone', label: 'Milestone Evaluasi' }
  ],
  tableHeaders: {
    activity: '15 Aktivitas Utama',
    output: 'Output Kontrol'
  },
  legend: {
    phased: 'Fase Aktif',
    recurring: 'Berulang (>M12)',
    milestone: 'Milestone Gate',
    inactive: 'Non-Aktif',
    note: 'Kotak berwarna = bulan kegiatan berjalan; pekerjaan rutin (Report/CRM, L&D, Role-Play, B2B, B2G) berlanjut setelah M12 sebagai standar operasi.'
  },
  rows: [
    {
      id: 'g1',
      rowNo: '01',
      activity: 'Orientasi & pelatihan produk',
      periodLabel: 'M1',
      controlOutput: 'Product/process map',
      workstream: 'People',
      phase: 'orientasi',
      nature: 'one-time',
      activeMonths: [1],
      modal: {
        badge: 'Aktivitas 01 • M1',
        subtitle: 'Workstream: People • Berjangka',
        title: 'Orientasi & Pelatihan Produk di Gudang',
        metric: 'M1',
        metricLabel: 'Periode Gantt',
        summary:
          'Mempelajari stok baru/second, alur gudang, bonding lintas fungsi, dan data dasar pada bulan pertama.',
        highlights: [
          'Output kontrol: Product/process map & daftar temuan awal.',
          'Dependensi: akses gudang, stakeholder lintas divisi & sampel katalog stok.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan Bulan 1 (Prasyarat Fase Diagnosa)',
        accent: 'slate'
      }
    },
    {
      id: 'g2',
      rowNo: '02',
      activity: 'Onboarding & asesmen sales',
      periodLabel: 'M2–M3',
      controlOutput: 'Skill matrix',
      workstream: 'People',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3],
      milestoneMonths: [3],
      modal: {
        badge: 'Aktivitas 02 • M2–M3',
        subtitle: 'Workstream: People • Berjangka',
        title: 'Onboarding & Asesmen Kompetensi Tim Sales',
        metric: 'M2–M3',
        metricLabel: 'Periode Gantt',
        summary:
          'Menilai penguasaan produk, konsultasi, dan kedisiplinan proses tim eksisting (15 orang menunggu konfirmasi cakupan).',
        highlights: [
          'Output kontrol: Skill matrix awal & pemetaan gap individu.',
          'Dependensi: daftar roster aktif HR & hasil observasi M1.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M2–M3 (Menjadi dasar IDP & grade)',
        accent: 'slate'
      }
    },
    {
      id: 'g3',
      rowNo: '03',
      activity: 'Struktur tim, target & KPI',
      periodLabel: 'M2–M3',
      controlOutput: 'Role & target map',
      workstream: 'Process',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3],
      milestoneMonths: [3],
      modal: {
        badge: 'Aktivitas 03 • M2–M3',
        subtitle: 'Workstream: Process • Berjangka',
        title: 'Penyusunan Struktur Tim, Target & KPI per Segmen',
        metric: 'M2–M3',
        metricLabel: 'Periode Gantt',
        summary:
          'Memisahkan peran Sales vs Marketing dan membedakan beban KPI antara Retail, Distribution, B2B & B2G.',
        highlights: [
          'Output kontrol: Role & target map disetujui Direksi/HR.',
          'Dependensi: data historis penjualan 12–24 bulan & konfirmasi headcount.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M2–M3 (Menunggu Sign-Off Direksi)',
        accent: 'slate'
      }
    },
    {
      id: 'g4',
      rowNo: '04',
      activity: 'Audit HPP, harga, diskon',
      periodLabel: 'M2–M4',
      controlOutput: 'Approval baseline',
      workstream: 'Data',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3, 4],
      modal: {
        badge: 'Aktivitas 04 • M2–M4',
        subtitle: 'Workstream: Data • Berjangka',
        title: 'Audit HPP, Struktur Harga Jual & Batas Diskon',
        metric: 'M2–M4',
        metricLabel: 'Periode Gantt',
        summary:
          'Menghimpun data HPP aktual, biaya refurbish, diskon historis & margin untuk menetapkan floor margin resmi.',
        highlights: [
          'Output kontrol: Approval baseline & aturan kewenangan diskon berjenjang.',
          'Dependensi: data HPP Finance & update biaya Purchasing/Gudang.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M2–M4 (Prasyarat Price Request)',
        accent: 'red'
      }
    },
    {
      id: 'g5',
      rowNo: '05',
      activity: 'Report & CRM',
      periodLabel: 'M2–M12',
      controlOutput: 'Dashboard rutin (>M12)',
      workstream: 'Data',
      phase: 'diagnosa',
      nature: 'recurring',
      activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Aktivitas 05 • M2–M12 (Rutin >M12)',
        subtitle: 'Workstream: Data • Berulang',
        title: 'Report Harian/Mingguan/Bulanan & Disiplin CRM',
        metric: 'M2–M12+',
        metricLabel: 'Berulang Terus',
        summary:
          'Mengoperasikan pelaporan terstruktur dan CRM sebagai sumber data tunggal berkelanjutan hingga setelah M12.',
        highlights: [
          'Output kontrol: Dashboard rutin & kelengkapan 11 field wajib opportunity.',
          'Prasyarat: fit-gap tools eksisting sebelum membangun atau membeli sistem.'
        ],
        footerLabel: 'Status Operasi',
        footerValue: 'Pekerjaan Berulang — Berlanjut Setelah M12',
        accent: 'slate'
      }
    },
    {
      id: 'g6',
      rowNo: '06',
      activity: 'Penyusunan SOP umum/divisi',
      periodLabel: 'M3–M5',
      controlOutput: 'SOP disahkan',
      workstream: 'Process',
      phase: 'sistem',
      nature: 'one-time',
      activeMonths: [3, 4, 5],
      milestoneMonths: [5],
      modal: {
        badge: 'Aktivitas 06 • M3–M5',
        subtitle: 'Workstream: Process • Berjangka',
        title: 'Penyusunan & Pengesahan SOP Umum + Varian 5 Divisi',
        metric: 'M3–M5',
        metricLabel: 'Periode Gantt',
        summary:
          'Mendokumentasikan 13 langkah kerja, aturan assignment lead adil, handover, serta eskalasi merah lintas fungsi.',
        highlights: [
          'Output kontrol: SOP disahkan lintas fungsi.',
          'Dependensi: audit pain point antar-departemen & matriks otorisasi Finance.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M3–M5 (Gate Milestone M5)',
        accent: 'red'
      }
    },
    {
      id: 'g7',
      rowNo: '07',
      activity: 'Role-play SOP',
      periodLabel: 'M4–M12',
      controlOutput: 'Skor praktik (>M12)',
      workstream: 'Process',
      phase: 'sistem',
      nature: 'recurring',
      activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Aktivitas 07 • M4–M12 (Rutin >M12)',
        subtitle: 'Workstream: Process • Berulang',
        title: 'Simulasi Role-Play SOP & Sampling Transaksi',
        metric: 'M4–M12+',
        metricLabel: 'Berulang Terus',
        summary:
          'Menguji apakah SOP benar-benar dijalankan di lapangan melalui role-play dan pemeriksaan sampel transaksi.',
        highlights: [
          'Output kontrol: Skor praktik & revisi SOP bila alur nyata menyimpang.',
          'Berlanjut setelah M12 sebagai mekanisme jaga mutu standar operasional.'
        ],
        footerLabel: 'Status Operasi',
        footerValue: 'Pekerjaan Berulang — Berlanjut Setelah M12',
        accent: 'slate'
      }
    },
    {
      id: 'g8',
      rowNo: '08',
      activity: 'Training/coaching/mentoring',
      periodLabel: 'M2–M12',
      controlOutput: 'IDP & progres (>M12)',
      workstream: 'People',
      phase: 'diagnosa',
      nature: 'recurring',
      activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Aktivitas 08 • M2–M12 (Rutin >M12)',
        subtitle: 'Workstream: People • Berulang',
        title: 'Training, Coaching, Mentoring & Counselling Terjadwal',
        metric: 'M2–M12+',
        metricLabel: 'Berulang Terus',
        summary:
          'Meningkatkan kompetensi segmen secara konsisten lewat kalender L&D, coaching lapangan, dan IDP individu.',
        highlights: [
          'Output kontrol: IDP aktif & bukti progres kompetensi per kuartal.',
          'Berlanjut setelah M12 sebagai budaya saling membimbing di tim.'
        ],
        footerLabel: 'Status Operasi',
        footerValue: 'Pekerjaan Berulang — Berlanjut Setelah M12',
        accent: 'slate'
      }
    },
    {
      id: 'g9',
      rowNo: '09',
      activity: 'Pengembangan B2B',
      periodLabel: 'M4–M12',
      controlOutput: 'Qualified pipeline (>M12)',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'recurring',
      activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Aktivitas 09 • M4–M12 (Rutin >M12)',
        subtitle: 'Workstream: Revenue • Berulang',
        title: 'Pengembangan Akun B2B, SI Partner & Korporat',
        metric: 'M4–M12+',
        metricLabel: 'Berulang Terus',
        summary:
          'Membangun account mapping dan pipeline korporat tervalidasi untuk mengangkat kontribusi B2B di atas 20%.',
        highlights: [
          'Output kontrol: Qualified B2B pipeline & account plan 1 Primary Owner.',
          'Berjalan paralel dengan kesiapan solusi IT & validasi teknis.'
        ],
        footerLabel: 'Status Operasi',
        footerValue: 'Pekerjaan Berulang — Berlanjut Setelah M12',
        accent: 'slate'
      }
    },
    {
      id: 'g10',
      rowNo: '10',
      activity: 'Paket solusi IT',
      periodLabel: 'M5–M8',
      controlOutput: 'Solution playbook',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'one-time',
      activeMonths: [5, 6, 7, 8],
      modal: {
        badge: 'Aktivitas 10 • M5–M8',
        subtitle: 'Workstream: Revenue • Berjangka',
        title: 'Penyusunan Paket Solusi IT (Product-to-Solution)',
        metric: 'M5–M8',
        metricLabel: 'Periode Gantt',
        summary:
          'Merumuskan paket hardware + setup + garansi/SLA sebagai standar penawaran bernilai tambah bagi B2B dan UMKM.',
        highlights: [
          'Output kontrol: Solution playbook tervalidasi Tim Teknis.',
          'Dependensi: kejelasan batas SLA, garansi, & daftar produk/otorisasi prinsipal.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M5–M8 (Pendorong M6–M9)',
        accent: 'slate'
      }
    },
    {
      id: 'g11',
      rowNo: '11',
      activity: 'Program stok lama & insentif',
      periodLabel: 'M5–M7',
      controlOutput: 'Stock ageing action',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'one-time',
      activeMonths: [5, 6, 7],
      modal: {
        badge: 'Aktivitas 11 • M5–M7',
        subtitle: 'Workstream: Revenue • Berjangka',
        title: 'Program Akselerasi Stok Lama & Insentif Terkontrol',
        metric: 'M5–M7',
        metricLabel: 'Periode Gantt',
        summary:
          'Menurunkan umur stok di gudang melalui bundling terarah dan skema insentif yang disetujui Finance/HR.',
        highlights: [
          'Output kontrol: Stock ageing action plan & pelepasan kas.',
          'Dependensi: daftar umur stok per SKU/serial & batas margin Finance.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M5–M7 (Dengan Approval Margin)',
        accent: 'slate'
      }
    },
    {
      id: 'g12',
      rowNo: '12',
      activity: 'B2G sebagai subcon',
      periodLabel: 'M6–M12',
      controlOutput: 'Partner readiness (>M12)',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'recurring',
      activeMonths: [6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Aktivitas 12 • M6–M12 (Rutin >M12)',
        subtitle: 'Workstream: Revenue • Berulang',
        title: 'Masuk B2G Sebagai Subcon & Kesiapan Kemitraan',
        metric: 'M6–M12+',
        metricLabel: 'Berulang Terus',
        summary:
          'Menguji peluang sektor publik melalui mitra maincon terverifikasi dengan filter Bid/No-Bid yang ketat.',
        highlights: [
          'Output kontrol: Partner/project readiness & kepatuhan [R1–R4].',
          'Dependensi: konfirmasi legalitas, larangan barang refurbished per paket & cash flow Finance.'
        ],
        footerLabel: 'Status Operasi',
        footerValue: 'Pekerjaan Berulang — Berlanjut Setelah M12',
        accent: 'red'
      }
    },
    {
      id: 'g13',
      rowNo: '13',
      activity: 'Evaluasi kompetensi',
      periodLabel: 'M3, M6, M9, M12',
      controlOutput: 'Quarterly gate review',
      workstream: 'People',
      phase: 'stabilisasi',
      nature: 'milestone',
      activeMonths: [3, 6, 9, 12],
      milestoneMonths: [3, 6, 9, 12],
      modal: {
        badge: 'Aktivitas 13 • M3, M6, M9, M12',
        subtitle: 'Workstream: People • Milestone Gate',
        title: 'Evaluasi Kompetensi Kuartalan (Quarterly Gate Review)',
        metric: 'Q1–Q4',
        metricLabel: 'Milestone Wajib',
        summary:
          'Titik pemeriksaan resmi tiap kuartal atas kompetensi segmen, kedisiplinan SOP/CRM, dan kualitas hasil.',
        highlights: [
          'Output kontrol: Quarterly gate review bersama HRD & pimpinan.',
          'Menentukan kebutuhan coaching, penyesuaian target, atau kelayakan promosi.'
        ],
        footerLabel: 'Tipe Gate',
        footerValue: 'Milestone Evaluasi & Approval Kuartalan',
        accent: 'red'
      }
    },
    {
      id: 'g14',
      rowNo: '14',
      activity: 'Kenaikan grade & calon leader',
      periodLabel: 'M9–M12',
      controlOutput: 'Evidence-based decision',
      workstream: 'People',
      phase: 'stabilisasi',
      nature: 'one-time',
      activeMonths: [9, 10, 11, 12],
      milestoneMonths: [12],
      modal: {
        badge: 'Aktivitas 14 • M9–M12',
        subtitle: 'Workstream: People • Berjangka',
        title: 'Kenaikan Grade & Kaderisasi Calon Team Leader',
        metric: 'M9–M12',
        metricLabel: 'Periode Gantt',
        summary:
          'Mempromosikan anggota berprestasi dan menyiapkan calon Supervisor/Team Leader berdasarkan rekam bukti.',
        highlights: [
          'Output kontrol: Evidence-based decision untuk struktur Tahun Ke-2.',
          'Dependensi: hasil evaluasi kompetensi M3–M9 & persetujuan HRD/Direksi.'
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Usulan M9–M12 (Mengacu Rekam Kinerja)',
        accent: 'slate'
      }
    },
    {
      id: 'g15',
      rowNo: '15',
      activity: 'Evaluasi tahunan',
      periodLabel: 'M12',
      controlOutput: 'Rencana tahun ke-2',
      workstream: 'Data',
      phase: 'stabilisasi',
      nature: 'milestone',
      activeMonths: [12],
      milestoneMonths: [12],
      modal: {
        badge: 'Aktivitas 15 • M12',
        subtitle: 'Workstream: Data • Milestone Gate',
        title: 'Evaluasi Tahun Pertama & Rencana Strategis Tahun Ke-2',
        metric: 'M12 Gate',
        metricLabel: 'Tutup Tahun Ke-1',
        summary:
          'Menilai pencapaian seluruh 15 program kerja tahun pertama dan menetapkan sasaran ekspansi tahun kedua.',
        highlights: [
          'Output kontrol: Rencana Tahun Ke-2 bersama Direksi.',
          'Pekerjaan rutin (CRM, L&D, Role-Play, B2B & B2G) berlanjut otomatis ke Tahun Ke-2.'
        ],
        footerLabel: 'Tipe Gate',
        footerValue: 'Milestone Akhir Tahun Ke-1',
        accent: 'red'
      }
    }
  ],
  evidenceFooter:
    'Batas Klaim: Rentang bulan mengikuti visual Gantt PDF hal. 14; jadwal final disesuaikan baseline, ketersediaan resource, dan keputusan Direksi. Pekerjaan rutin berlanjut pasca M12.'
};

export const slideDataEn: Slide25Data = {
  eyebrow: 'Monthly Execution Cadence & Activity Dependencies',
  title: 'Monthly Execution Timeline: 12-Month Gantt',
  subtitle:
    'Translating the five roadmap phases into 15 monthly execution tracks — separating finite tasks, ongoing routines beyond M12, and quarterly review gates.',
  scheduleCaveat:
    'Month Spans Follow PDF p.14 Gantt Visual • Final Schedule Adjustable to Baselines, Resources & Director Decisions',
  months: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  filterLabels: {
    workstream: 'Workstream',
    phase: 'Phase',
    nature: 'Status/Type'
  },
  workstreamOptions: [
    { id: 'ALL', label: 'All Workstreams' },
    { id: 'People', label: 'People' },
    { id: 'Process', label: 'Process' },
    { id: 'Revenue', label: 'Revenue' },
    { id: 'Data', label: 'Data' }
  ],
  phaseOptions: [
    { id: 'ALL', label: 'All Phases' },
    { id: 'orientasi', label: 'Orientation (M1)' },
    { id: 'diagnosa', label: 'Diagnosis & Foundation (M2–M3)' },
    { id: 'sistem', label: 'Systems & SOP (M3–M5)' },
    { id: 'akselerasi', label: 'Acceleration (M5–M8)' },
    { id: 'stabilisasi', label: 'Stabilization & Scale (M9–M12)' }
  ],
  natureOptions: [
    { id: 'ALL', label: 'All Types' },
    { id: 'one-time', label: 'Finite / One-Time Task' },
    { id: 'recurring', label: 'Recurring (Continues >M12)' },
    { id: 'milestone', label: 'Evaluation Milestone' }
  ],
  tableHeaders: {
    activity: '15 Core Activities',
    output: 'Control Output'
  },
  legend: {
    phased: 'Active Phase',
    recurring: 'Recurring (>M12)',
    milestone: 'Milestone Gate',
    inactive: 'Inactive',
    note: 'Shaded cells = active execution months; routine tracks (Report/CRM, L&D, Role-Play, B2B, B2G) continue post-M12 as standing standards.'
  },
  rows: [
    {
      id: 'g1',
      rowNo: '01',
      activity: 'Product orientation & training',
      periodLabel: 'M1',
      controlOutput: 'Product/process map',
      workstream: 'People',
      phase: 'orientasi',
      nature: 'one-time',
      activeMonths: [1],
      modal: {
        badge: 'Activity 01 • M1',
        subtitle: 'Workstream: People • Finite',
        title: 'Warehouse Product Orientation & Business Immersion',
        metric: 'M1',
        metricLabel: 'Gantt Window',
        summary:
          'Studies new/second product quality, warehouse flows, cross-team relationships, and baseline data in Month 1.',
        highlights: [
          'Control output: Product/process map & initial findings log.',
          'Dependency: warehouse access, internal stakeholder interviews & stock catalog.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed Month 1 (Prerequisite to Diagnosis)',
        accent: 'slate'
      }
    },
    {
      id: 'g2',
      rowNo: '02',
      activity: 'Sales onboarding & assessment',
      periodLabel: 'M2–M3',
      controlOutput: 'Skill matrix',
      workstream: 'People',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3],
      milestoneMonths: [3],
      modal: {
        badge: 'Activity 02 • M2–M3',
        subtitle: 'Workstream: People • Finite',
        title: 'Sales Onboarding & Competency Assessment',
        metric: 'M2–M3',
        metricLabel: 'Gantt Window',
        summary:
          'Evaluates product knowledge, consultative selling, and SOP discipline across current reps (15-person scope pending confirmation).',
        highlights: [
          'Control output: Verified Skill Matrix & individual capability gaps.',
          'Dependency: official HR roster & Month-1 observation baselines.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M2–M3 (Feeds IDP & Grade Plan)',
        accent: 'slate'
      }
    },
    {
      id: 'g3',
      rowNo: '03',
      activity: 'Team structure, targets & KPIs',
      periodLabel: 'M2–M3',
      controlOutput: 'Role & target map',
      workstream: 'Process',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3],
      milestoneMonths: [3],
      modal: {
        badge: 'Activity 03 • M2–M3',
        subtitle: 'Workstream: Process • Finite',
        title: 'Team Structure, Portfolio Targets & KPI Design',
        metric: 'M2–M3',
        metricLabel: 'Gantt Window',
        summary:
          'Separates Sales from Marketing roles and differentiates KPIs across Retail, Distribution, B2B & B2G.',
        highlights: [
          'Control output: Role & target map approved by Directors/HR.',
          'Dependency: 12–24 months historical revenue & confirmed headcount.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M2–M3 (Pending Director Sign-Off)',
        accent: 'slate'
      }
    },
    {
      id: 'g4',
      rowNo: '04',
      activity: 'COGS (HPP), price & discount audit',
      periodLabel: 'M2–M4',
      controlOutput: 'Approval baseline',
      workstream: 'Data',
      phase: 'diagnosa',
      nature: 'one-time',
      activeMonths: [2, 3, 4],
      modal: {
        badge: 'Activity 04 • M2–M4',
        subtitle: 'Workstream: Data • Finite',
        title: 'COGS (HPP), Selling Price & Discount Authority Audit',
        metric: 'M2–M4',
        metricLabel: 'Gantt Window',
        summary:
          'Audits unit costs, refurbishment overhead, historical discounting & margins to set formal floor thresholds.',
        highlights: [
          'Control output: Approval baseline & tiered discounting matrix.',
          'Dependency: verified Finance HPP records & Purchasing cost updates.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M2–M4 (Prerequisite to Price Request)',
        accent: 'red'
      }
    },
    {
      id: 'g5',
      rowNo: '05',
      activity: 'Reporting & CRM discipline',
      periodLabel: 'M2–M12',
      controlOutput: 'Routine dashboard (>M12)',
      workstream: 'Data',
      phase: 'diagnosa',
      nature: 'recurring',
      activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Activity 05 • M2–M12 (Recurring >M12)',
        subtitle: 'Workstream: Data • Ongoing Routine',
        title: 'Daily/Weekly/Monthly Reporting & Internal CRM Workflow',
        metric: 'M2–M12+',
        metricLabel: 'Continuous',
        summary:
          'Operates structured reporting and internal CRM as the single data truth continuing past Month 12.',
        highlights: [
          'Control output: Standing dashboard & 11-field opportunity completeness.',
          'Prerequisite: fit-gap of existing tools prior to any build/buy decision.'
        ],
        footerLabel: 'Operating Status',
        footerValue: 'Recurring Routine — Continues Beyond M12',
        accent: 'slate'
      }
    },
    {
      id: 'g6',
      rowNo: '06',
      activity: 'General & division SOP rollout',
      periodLabel: 'M3–M5',
      controlOutput: 'Ratified SOPs',
      workstream: 'Process',
      phase: 'sistem',
      nature: 'one-time',
      activeMonths: [3, 4, 5],
      milestoneMonths: [5],
      modal: {
        badge: 'Activity 06 • M3–M5',
        subtitle: 'Workstream: Process • Finite',
        title: 'Core SOP & 5-Division Variants Ratification',
        metric: 'M3–M5',
        metricLabel: 'Gantt Window',
        summary:
          'Documents the 13-step commercial flow, fair lead assignment, handover checklists, and cross-team escalation gates.',
        highlights: [
          'Control output: Cross-department ratified SOP playbook.',
          'Dependency: interdepartmental pain-point audit & Finance credit policy.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M3–M5 (M5 Milestone Gate)',
        accent: 'red'
      }
    },
    {
      id: 'g7',
      rowNo: '07',
      activity: 'SOP role-play & sampling',
      periodLabel: 'M4–M12',
      controlOutput: 'Practice score (>M12)',
      workstream: 'Process',
      phase: 'sistem',
      nature: 'recurring',
      activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Activity 07 • M4–M12 (Recurring >M12)',
        subtitle: 'Workstream: Process • Ongoing Routine',
        title: 'SOP Role-Play & Live Transaction Sampling',
        metric: 'M4–M12+',
        metricLabel: 'Continuous',
        summary:
          'Verifies daily SOP compliance through scenario role-plays and random transaction audits.',
        highlights: [
          'Control output: Practical scores & SOP revisions whenever reality diverges.',
          'Continues beyond M12 as ongoing operational quality control.'
        ],
        footerLabel: 'Operating Status',
        footerValue: 'Recurring Routine — Continues Beyond M12',
        accent: 'slate'
      }
    },
    {
      id: 'g8',
      rowNo: '08',
      activity: 'Training/coaching/mentoring',
      periodLabel: 'M2–M12',
      controlOutput: 'IDP & progress (>M12)',
      workstream: 'People',
      phase: 'diagnosa',
      nature: 'recurring',
      activeMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Activity 08 • M2–M12 (Recurring >M12)',
        subtitle: 'Workstream: People • Ongoing Routine',
        title: 'Scheduled Training, Coaching, Mentoring & Counselling',
        metric: 'M2–M12+',
        metricLabel: 'Continuous',
        summary:
          'Builds segment fluency continuously via structured L&D sessions, field coaching, and Individual Development Plans.',
        highlights: [
          'Control output: Active IDPs & quarterly competency progress logs.',
          'Continues beyond M12 as permanent coaching culture.'
        ],
        footerLabel: 'Operating Status',
        footerValue: 'Recurring Routine — Continues Beyond M12',
        accent: 'slate'
      }
    },
    {
      id: 'g9',
      rowNo: '09',
      activity: 'B2B account development',
      periodLabel: 'M4–M12',
      controlOutput: 'Qualified pipeline (>M12)',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'recurring',
      activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Activity 09 • M4–M12 (Recurring >M12)',
        subtitle: 'Workstream: Revenue • Ongoing Routine',
        title: 'B2B Account Planning, SI Channels & Corporate Pipeline',
        metric: 'M4–M12+',
        metricLabel: 'Continuous',
        summary:
          'Grows verified corporate pipeline and repeat accounts to lift B2B contribution above its 20% base.',
        highlights: [
          'Control output: Qualified B2B pipeline & single-owner account plans.',
          'Runs in parallel with IT solution packaging and engineering sign-offs.'
        ],
        footerLabel: 'Operating Status',
        footerValue: 'Recurring Routine — Continues Beyond M12',
        accent: 'slate'
      }
    },
    {
      id: 'g10',
      rowNo: '10',
      activity: 'IT solution packages',
      periodLabel: 'M5–M8',
      controlOutput: 'Solution playbook',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'one-time',
      activeMonths: [5, 6, 7, 8],
      modal: {
        badge: 'Activity 10 • M5–M8',
        subtitle: 'Workstream: Revenue • Finite',
        title: 'IT Solution Packaging (Product-to-Solution)',
        metric: 'M5–M8',
        metricLabel: 'Gantt Window',
        summary:
          'Packages hardware + deployment + SLA maintenance into standardized offers for SME and corporate clients.',
        highlights: [
          'Control output: Technically vetted Solution Playbook.',
          'Dependency: clear SLA boundaries, warranty scope & principal authorization check.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M5–M8 (Supports M6–M9 Uplift)',
        accent: 'slate'
      }
    },
    {
      id: 'g11',
      rowNo: '11',
      activity: 'Aging-stock & incentive program',
      periodLabel: 'M5–M7',
      controlOutput: 'Stock aging action',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'one-time',
      activeMonths: [5, 6, 7],
      modal: {
        badge: 'Activity 11 • M5–M7',
        subtitle: 'Workstream: Revenue • Finite',
        title: 'Slow-Moving Stock Clearance & Governed Incentives',
        metric: 'M5–M7',
        metricLabel: 'Gantt Window',
        summary:
          'Accelerates aging warehouse stock turnover via targeted bundles and Finance/HR-approved incentive tiers.',
        highlights: [
          'Control output: Priority aging SKU action & working-capital release.',
          'Dependency: SKU-level aging report & approved margin floors.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M5–M7 (With Margin Approval)',
        accent: 'slate'
      }
    },
    {
      id: 'g12',
      rowNo: '12',
      activity: 'B2G entry as subcontractor',
      periodLabel: 'M6–M12',
      controlOutput: 'Partner readiness (>M12)',
      workstream: 'Revenue',
      phase: 'akselerasi',
      nature: 'recurring',
      activeMonths: [6, 7, 8, 9, 10, 11, 12],
      continuesAfterM12: true,
      modal: {
        badge: 'Activity 12 • M6–M12 (Recurring >M12)',
        subtitle: 'Workstream: Revenue • Ongoing Routine',
        title: 'B2G Entry via Subcon & Maincon Partnerships',
        metric: 'M6–M12+',
        metricLabel: 'Continuous',
        summary:
          'Tests public-sector opportunities conservatively through vetted maincon partners under strict Bid/No-Bid gates.',
        highlights: [
          'Control output: Partner/project readiness & regulatory compliance [R1–R4].',
          'Dependency: legal clearance, new-vs-refurbished rules & Finance cash-flow sign-off.'
        ],
        footerLabel: 'Operating Status',
        footerValue: 'Recurring Routine — Continues Beyond M12',
        accent: 'red'
      }
    },
    {
      id: 'g13',
      rowNo: '13',
      activity: 'Competency evaluation',
      periodLabel: 'M3, M6, M9, M12',
      controlOutput: 'Quarterly gate review',
      workstream: 'People',
      phase: 'stabilisasi',
      nature: 'milestone',
      activeMonths: [3, 6, 9, 12],
      milestoneMonths: [3, 6, 9, 12],
      modal: {
        badge: 'Activity 13 • M3, M6, M9, M12',
        subtitle: 'Workstream: People • Milestone Gate',
        title: 'Quarterly Competency Evaluation (Gate Review)',
        metric: 'Q1–Q4',
        metricLabel: 'Mandatory Gate',
        summary:
          'Formal quarterly checkpoint reviewing segment skills, SOP/CRM compliance, and margin/collection quality.',
        highlights: [
          'Control output: Quarterly gate review jointly with HRD and leadership.',
          'Drives coaching focus, IDP updates, and fair promotion eligibility.'
        ],
        footerLabel: 'Gate Type',
        footerValue: 'Quarterly Evaluation & Approval Gate',
        accent: 'red'
      }
    },
    {
      id: 'g14',
      rowNo: '14',
      activity: 'Grade progression & leader bench',
      periodLabel: 'M9–M12',
      controlOutput: 'Evidence-based decision',
      workstream: 'People',
      phase: 'stabilisasi',
      nature: 'one-time',
      activeMonths: [9, 10, 11, 12],
      milestoneMonths: [12],
      modal: {
        badge: 'Activity 14 • M9–M12',
        subtitle: 'Workstream: People • Finite',
        title: 'Grade Promotions & Team Leader Candidate Selection',
        metric: 'M9–M12',
        metricLabel: 'Gantt Window',
        summary:
          'Advances proven performers and prepares internal Supervisor / Team Leader candidates backed by verified records.',
        highlights: [
          'Control output: Evidence-based readiness decisions for Year-2 organization.',
          'Dependency: M3–M9 competency scores & HR/Director sign-off.'
        ],
        footerLabel: 'Plan Status',
        footerValue: 'Proposed M9–M12 (Record-Backed)',
        accent: 'slate'
      }
    },
    {
      id: 'g15',
      rowNo: '15',
      activity: 'Annual performance evaluation',
      periodLabel: 'M12',
      controlOutput: 'Year-2 plan',
      workstream: 'Data',
      phase: 'stabilisasi',
      nature: 'milestone',
      activeMonths: [12],
      milestoneMonths: [12],
      modal: {
        badge: 'Activity 15 • M12',
        subtitle: 'Workstream: Data • Milestone Gate',
        title: 'Year-1 Comprehensive Evaluation & Year-2 Plan',
        metric: 'M12 Gate',
        metricLabel: 'Year-1 Close',
        summary:
          'Reviews all 15 execution tracks at Year-1 close and locks Year-2 expansion priorities with Directors.',
        highlights: [
          'Control output: Approved Year-2 Commercial Plan.',
          'Standing routines (CRM, L&D, Role-Play, B2B & B2G) carry forward automatically.'
        ],
        footerLabel: 'Gate Type',
        footerValue: 'Year-End Evaluation Milestone',
        accent: 'red'
      }
    }
  ],
  evidenceFooter:
    'Claim Boundary: Month ranges follow PDF p.14 Gantt; final timeline adapts to verified baselines, team capacity & Director decisions. Standing routines continue past M12.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide25Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide25Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 25,
  folder: '25',
  sectionId: 8,
  navTitle: {
    in: 'Monthly Execution Timeline',
    en: 'Monthly Execution Timeline'
  },
  headerTitle: {
    in: 'Monthly Execution Timeline - Gantt 12 Bulan',
    en: 'Monthly Execution Timeline - 12-Month Gantt'
  },
  category: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes'
  },
  section: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes'
  }
};
