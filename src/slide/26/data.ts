import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide26ModalPayload {
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

export interface NinetyDayActivity {
  id: string;
  label: string;
}

export interface NinetyDayColumn {
  id: 'd30' | 'd60' | 'd90';
  windowLabel: string;
  phaseTitle: string;
  activities: NinetyDayActivity[];
  outputSummary: string;
  doneIndicator: string;
  modal: Slide26ModalPayload;
}

export interface Deliverable90Item {
  id: string;
  code: string;
  title: string;
  window: string;
  modal: Slide26ModalPayload;
}

export interface StakeholderRoleItem {
  id: string;
  role: string;
  focus: string;
}

export interface Slide26Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  mockupLabel: string;
  resetLabel: string;
  statusLabels: {
    not_started: string;
    in_progress: string;
    done: string;
  };
  columnLabels: {
    activities: string;
    output: string;
    doneCriterion: string;
  };
  columns: NinetyDayColumn[];
  deliverablesTitle: string;
  deliverables: Deliverable90Item[];
  stakeholdersTitle: string;
  stakeholders: StakeholderRoleItem[];
  evidenceFooter: string;
}

export const slideDataId: Slide26Data = {
  eyebrow: 'V. Eksekusi dan Hasil • Operasional Hari Pertama',
  title: 'First 90 Days',
  subtitle: 'Dari orientasi lapangan menuju gambaran kondisi yang dapat dipercaya dan sistem minimum yang mulai berjalan.',
  mockupLabel: 'SIMULASI CHECKLIST MOCKUP — BUKAN PROGRES AKTUAL',
  resetLabel: 'Reset',
  statusLabels: {
    not_started: 'Not Started',
    in_progress: 'In Progress',
    done: 'Done',
  },
  columnLabels: {
    activities: 'Aktivitas Utama (klik untuk simulasi status)',
    output: 'Output',
    doneCriterion: 'Indikator Done',
  },
  columns: [
    {
      id: 'd30',
      windowLabel: 'FASE 01 • HARI 1–30',
      phaseTitle: 'Orientasi, Bonding & Current-State',
      activities: [
        { id: 'd30-1', label: 'Belajar portofolio & kualitas produk' },
        { id: 'd30-2', label: 'Observasi gudang & toko operasional' },
        { id: 'd30-3', label: 'Interview stakeholder lintas divisi' },
        { id: 'd30-4', label: 'Review data, current-state & 3–5 quick wins' },
      ],
      outputSummary: 'Diagnostic report & 3–5 quick wins',
      doneIndicator: 'Temuan awal & quick wins divalidasi Sponsor & lintas divisi',
      modal: {
        badge: 'Hari 1–30 • Fase 01',
        subtitle: 'Orientasi Lapangan & Diagnostic Baseline',
        title: 'Bulan 1: Memahami Kondisi Nyata & Quick Wins Awal',
        metric: '3–5',
        metricLabel: 'Quick Wins Disepakati',
        summary: 'Membangun pemahaman faktual atas produk, gudang, alur bisnis, data penjualan historis, dan hubungan lintas divisi.',
        highlights: [
          'Pelajari 4 portofolio komersial dan kondisi riil stok gudang/toko.',
          'Lakukan interview stakeholder lintas divisi dan bonding operasional.',
          'Susun dokumentasi current-state sebagai dasar Diagnostic Report.',
        ],
        footerLabel: 'Fokus Output',
        footerValue: 'Diagnostic Report + 3–5 Quick Wins',
        accent: 'red',
      },
    },
    {
      id: 'd60',
      windowLabel: 'FASE 02 • HARI 31–60',
      phaseTitle: 'Assessment, Mapping & Sistem Minimum',
      activities: [
        { id: 'd60-1', label: 'Assessment sales & pemetaan skill' },
        { id: 'd60-2', label: 'Segment, territory & account mapping' },
        { id: 'd60-3', label: 'Audit HPP/pricing & pipeline hygiene' },
        { id: 'd60-4', label: 'Desain dashboard minimum viable' },
      ],
      outputSummary: 'Org/RACI, baseline KPI, skill matrix & dashboard',
      doneIndicator: 'Struktur, baseline KPI & aturan pricing disepakati untuk uji coba',
      modal: {
        badge: 'Hari 31–60 • Fase 02',
        subtitle: 'Audit Kapabilitas, Pricing & Arsitektur Data',
        title: 'Bulan 2: Audit Tim, HPP/Pricing & Desain Sistem Minimum',
        metric: '5 Output',
        metricLabel: 'Fondasi Kerja Terstruktur',
        summary: 'Melakukan assessment personel dan penataan basis segmentasi, HPP/margin, serta rancangan dashboard monitoring awal.',
        highlights: [
          'Assessment sales personal sebagai dasar pemetaan skill, L&D, dan grade.',
          'Audit struktur harga/HPP bersama Finance dan bersihkan data pipeline.',
          'Susun customer account mapping dan desain prototipe dashboard minimum.',
        ],
        footerLabel: 'Persetujuan',
        footerValue: 'Direksi, Finance & HRD',
        accent: 'slate',
      },
    },
    {
      id: 'd90',
      windowLabel: 'FASE 03 • HARI 61–90',
      phaseTitle: 'Uji SOP, Role-Play & Pilot Eksekusi',
      activities: [
        { id: 'd90-1', label: 'Uji SOP & mekanisme lead allocation' },
        { id: 'd90-2', label: 'Mulai role-play & pricing request sederhana' },
        { id: 'd90-3', label: 'Weekly pipeline review terstruktur' },
        { id: 'd90-4', label: 'Pilot campaign / solution offer & revisi roadmap' },
      ],
      outputSummary: 'Initial SOP, online request & revisi roadmap',
      doneIndicator: 'Sistem minimum mulai terpakai nyata dalam ritme mingguan tim',
      modal: {
        badge: 'Hari 61–90 • Fase 03',
        subtitle: 'Aktivasi Kebiasaan & Uji Sistem Terpadu',
        title: 'Bulan 3: Menjalankan Ritme Mingguan & Pilot Solusi',
        metric: 'Weekly',
        metricLabel: 'Pipeline & SOP Cadence',
        summary: 'Menguji SOP, alur pricing request online, role-play, dan penawaran berbasis solusi agar sistem benar-benar dipakai tim.',
        highlights: [
          'Uji coba SOP lead allocation dan alur permintaan harga lintas Sales–Finance–Gudang.',
          'Mulai role-play terjadwal serta weekly pipeline review berbasis data.',
          'Jalankan pilot campaign dan lakukan revisi roadmap berdasarkan hasil uji 90 hari.',
        ],
        footerLabel: 'Target Akhir 90 Hari',
        footerValue: 'Sistem Minimum Berjalan & Terukur',
        accent: 'red',
      },
    },
  ],
  deliverablesTitle: '8 Deliverable Utama 90 Hari',
  deliverables: [
    {
      id: 'del-1',
      code: '01',
      title: 'Diagnostic Report',
      window: 'Hari 30',
      modal: {
        badge: 'Deliverable 01 • Hari 30',
        subtitle: 'Baseline Diagnostik Kondisi Nyata',
        title: 'Diagnostic Report',
        summary: 'Laporan kondisi objektif hasil audit produk, alur gudang/toko, penjualan historis, dan hambatan lintas divisi.',
        highlights: [
          'Memisahkan fakta terverifikasi dan gap yang perlu keputusan Direksi.',
          'Menjadi rujukan bersama sebelum mengubah target atau struktur.',
        ],
        footerLabel: 'Status Rencana',
        footerValue: 'Target Selesai Bulan 1',
        accent: 'red',
      },
    },
    {
      id: 'del-2',
      code: '02',
      title: 'Proposed Org / RACI',
      window: 'Hari 45',
      modal: {
        badge: 'Deliverable 02 • Hari 45',
        subtitle: 'Kejelasan Peran & Otoritas',
        title: 'Proposed Org / RACI',
        summary: 'Usulan pemisahan fokus Sales vs Marketing serta matriks RACI lintas Sales, Gudang, Finance, Technical, HR, dan Creative.',
        highlights: [
          'Menghindari tumpang tindih eskalasi dan keputusan approval harga.',
          'Status usulan: menunggu persetujuan Owner / Direksi.',
        ],
        footerLabel: 'Keputusan',
        footerValue: 'Review & Sign-Off Direksi',
        accent: 'slate',
      },
    },
    {
      id: 'del-3',
      code: '03',
      title: 'Baseline KPI',
      window: 'Hari 60',
      modal: {
        badge: 'Deliverable 03 • Hari 60',
        subtitle: 'Standar Pengukuran Awal',
        title: 'Baseline KPI',
        summary: 'Penetapan angka dasar aktual per segmen dan definisi KPI yang diselaraskan dengan data Finance.',
        highlights: [
          'Menutup blind spot baseline (termasuk status riil B2G dan margin bersih).',
          'Dipakai sebagai acuan objektif evaluasi performa bulanan.',
        ],
        footerLabel: 'Validasi',
        footerValue: 'Sinkronisasi Data Finance',
        accent: 'slate',
      },
    },
    {
      id: 'del-4',
      code: '04',
      title: 'Priority Account List',
      window: 'Hari 60',
      modal: {
        badge: 'Deliverable 04 • Hari 60',
        subtitle: 'Fokus Akun B2B, B2G & Channel',
        title: 'Priority Account List',
        summary: 'Pemetaan akun prioritas berdasarkan segmen, wilayah, kecocokan portofolio, dan kesiapan dukungan stok/teknis.',
        highlights: [
          'Mengganti prospek acak menjadi daftar target akun yang dapat ditelusuri.',
          'Dasar penugasan lead allocation pada Bulan 3.',
        ],
        footerLabel: 'Cakupan',
        footerValue: 'Retail, Distribusi, B2B & B2G',
        accent: 'slate',
      },
    },
    {
      id: 'del-5',
      code: '05',
      title: 'Initial SOP',
      window: 'Hari 75',
      modal: {
        badge: 'Deliverable 05 • Hari 75',
        subtitle: 'Prosedur Operasional Minimum',
        title: 'Initial SOP & Online Request',
        summary: 'SOP inti lead, quotation, pricing request sederhana, handover teknisi, dan tindak lanjut komplain untuk uji lapangan.',
        highlights: [
          'Memastikan pencatatan proses tidak lagi mengandalkan ingatan individu.',
          'Disempurnakan dari umpan balik uji coba Hari 61–90.',
        ],
        footerLabel: 'Mekanisme',
        footerValue: 'Uji Lapangan & Feedback Lintas Divisi',
        accent: 'red',
      },
    },
    {
      id: 'del-6',
      code: '06',
      title: 'Dashboard Prototype',
      window: 'Hari 60–90',
      modal: {
        badge: 'Deliverable 06 • Hari 60–90',
        subtitle: 'Visibilitas Minimum Viable',
        title: 'Dashboard Prototype',
        summary: 'Prototipe dashboard pemantauan pipeline, status order, stok krusial, dan KPI mingguan.',
        highlights: [
          'Catatan kejujuran sistem: tahap prototipe/mockup sebelum integrasi live penuh.',
          'Menunjang weekly pipeline review dengan data tunggal.',
        ],
        footerLabel: 'Status Sistem',
        footerValue: 'Prototipe Kerja (Bukan Sistem Live Penuh)',
        accent: 'slate',
      },
    },
    {
      id: 'del-7',
      code: '07',
      title: 'Skill Matrix',
      window: 'Hari 60',
      modal: {
        badge: 'Deliverable 07 • Hari 60',
        subtitle: 'Dasar L&D & Sales Grade',
        title: 'Skill Matrix Tim',
        summary: 'Hasil pemetaan kompetensi aktual tim sales berdasarkan assessment lapangan, product knowledge, dan kemampuan negosiasi.',
        highlights: [
          'Menjadi input objektif kurikulum role-play, pelatihan, dan usulan grade.',
          'Disusun berkoordinasi dengan HR untuk penyelarasan jenjang karier.',
        ],
        footerLabel: 'Kolaborasi',
        footerValue: 'Manager S&M & HR',
        accent: 'slate',
      },
    },
    {
      id: 'del-8',
      code: '08',
      title: 'Roadmap Revision',
      window: 'Hari 90',
      modal: {
        badge: 'Deliverable 08 • Hari 90',
        subtitle: 'Kalibrasi Rencana Bulan 4–12',
        title: 'Roadmap Revision (Gate M3)',
        summary: 'Penyesuaian prioritas rencana 12 bulan berdasarkan baseline riil, ketersediaan stok, dan hasil pilot 90 hari pertama.',
        highlights: [
          'Memastikan target dan jadwal Q2–Q4 realistis terhadap kapasitas aktual.',
          'Menjadi bahan keputusan Direksi untuk fase ekspansi berikutnya.',
        ],
        footerLabel: 'Gate Review',
        footerValue: 'Evaluasi Kuartal 1 (M3)',
        accent: 'red',
      },
    },
  ],
  stakeholdersTitle: 'Pemangku Kepentingan (7 Fungsi)',
  stakeholders: [
    { id: 'st-1', role: 'Owner / Director', focus: 'Sponsor, mandat & decision gate' },
    { id: 'st-2', role: 'Sales', focus: 'Assessment, role-play, CRM & pilot' },
    { id: 'st-3', role: 'Warehouse', focus: 'Observasi stok, kondisi & kesiapan unit' },
    { id: 'st-4', role: 'Finance', focus: 'Audit HPP, batas margin & piutang' },
    { id: 'st-5', role: 'Technical', focus: 'Validasi solusi, survey & handover' },
    { id: 'st-6', role: 'HR', focus: 'Skill matrix, L&D & kalibrasi grade' },
    { id: 'st-7', role: 'Creative', focus: 'Materi offer & dukungan pilot campaign' },
  ],
  evidenceFooter:
    'Prasyarat Data & Dukungan Awal: Sponsor project, decision owner, akses dashboard/data, daftar stakeholder, serta dukungan resource teknis & administratif.',
};

export const slideDataEn: Slide26Data = {
  eyebrow: 'V. Execution & Outcomes • Day-One Operations',
  title: 'First 90 Days',
  subtitle: 'Moving from field observation to a trustworthy current-state baseline and live minimum operating systems.',
  mockupLabel: 'CHECKLIST MOCKUP SIMULATION — NOT ACTUAL PROGRESS',
  resetLabel: 'Reset',
  statusLabels: {
    not_started: 'Not Started',
    in_progress: 'In Progress',
    done: 'Done',
  },
  columnLabels: {
    activities: 'Core Activities (click to simulate status)',
    output: 'Output',
    doneCriterion: 'Done Indicator',
  },
  columns: [
    {
      id: 'd30',
      windowLabel: 'PHASE 01 • DAYS 1–30',
      phaseTitle: 'Orientation, Bonding & Current-State',
      activities: [
        { id: 'd30-1', label: 'Learn portfolio & product quality' },
        { id: 'd30-2', label: 'Observe warehouse & retail store flows' },
        { id: 'd30-3', label: 'Interview cross-functional stakeholders' },
        { id: 'd30-4', label: 'Review data, current-state & 3–5 quick wins' },
      ],
      outputSummary: 'Diagnostic report & 3–5 quick wins',
      doneIndicator: 'Initial findings & quick wins validated by Sponsor & divisions',
      modal: {
        badge: 'Days 1–30 • Phase 01',
        subtitle: 'Field Orientation & Diagnostic Baseline',
        title: 'Month 1: Grounded Operational Reality & Early Quick Wins',
        metric: '3–5',
        metricLabel: 'Agreed Quick Wins',
        summary: 'Establishes factual understanding of products, warehouse operations, sales history, and cross-functional workflows.',
        highlights: [
          'Study the four commercial portfolios and actual warehouse/store stock quality.',
          'Conduct cross-departmental stakeholder interviews and operational bonding.',
          'Compile current-state documentation feeding the Diagnostic Report.',
        ],
        footerLabel: 'Output Focus',
        footerValue: 'Diagnostic Report + 3–5 Quick Wins',
        accent: 'red',
      },
    },
    {
      id: 'd60',
      windowLabel: 'PHASE 02 • DAYS 31–60',
      phaseTitle: 'Assessment, Mapping & Minimum System',
      activities: [
        { id: 'd60-1', label: 'Sales assessment & skill mapping' },
        { id: 'd60-2', label: 'Segment, territory & account mapping' },
        { id: 'd60-3', label: 'Audit COGS/pricing & pipeline hygiene' },
        { id: 'd60-4', label: 'Design minimum viable dashboard' },
      ],
      outputSummary: 'Org/RACI, baseline KPI, skill matrix & dashboard',
      doneIndicator: 'Structure, baseline KPIs & pricing rules aligned for trial',
      modal: {
        badge: 'Days 31–60 • Phase 02',
        subtitle: 'Capability Audit, Pricing & Data Architecture',
        title: 'Month 2: Team Audit, COGS/Pricing & Minimum System Design',
        metric: '5 Outputs',
        metricLabel: 'Structured Foundations',
        summary: 'Runs personnel assessment while structuring segment mapping, COGS/margin controls, and minimum monitoring design.',
        highlights: [
          'Assess individual sales capability to ground skill mapping, L&D, and grading.',
          'Audit pricing/COGS structure with Finance and clean pipeline records.',
          'Build customer account mapping and minimum viable dashboard prototype.',
        ],
        footerLabel: 'Approvals',
        footerValue: 'Directors, Finance & HR',
        accent: 'slate',
      },
    },
    {
      id: 'd90',
      windowLabel: 'PHASE 03 • DAYS 61–90',
      phaseTitle: 'SOP Trial, Role-Play & Pilot Execution',
      activities: [
        { id: 'd90-1', label: 'Test SOPs & lead allocation rules' },
        { id: 'd90-2', label: 'Start role-play & simple pricing requests' },
        { id: 'd90-3', label: 'Run structured weekly pipeline review' },
        { id: 'd90-4', label: 'Pilot campaign / solution offer & roadmap revision' },
      ],
      outputSummary: 'Initial SOP, online request & roadmap revision',
      doneIndicator: 'Minimum systems actively used in weekly team cadence',
      modal: {
        badge: 'Days 61–90 • Phase 03',
        subtitle: 'Habit Activation & Integrated System Trial',
        title: 'Month 3: Running Weekly Cadence & Solution Pilot',
        metric: 'Weekly',
        metricLabel: 'Pipeline & SOP Cadence',
        summary: 'Tests SOPs, simple online pricing requests, role-play, and solution offers so minimum systems are genuinely adopted.',
        highlights: [
          'Pilot lead allocation SOP and cross-functional pricing request flow.',
          'Launch scheduled role-plays and data-backed weekly pipeline reviews.',
          'Execute pilot campaign and revise the 12-month roadmap from 90-day learnings.',
        ],
        footerLabel: '90-Day Outcome',
        footerValue: 'Live Minimum System & Measurable Cadence',
        accent: 'red',
      },
    },
  ],
  deliverablesTitle: '8 Core First-90-Day Deliverables',
  deliverables: [
    {
      id: 'del-1',
      code: '01',
      title: 'Diagnostic Report',
      window: 'Day 30',
      modal: {
        badge: 'Deliverable 01 • Day 30',
        subtitle: 'Objective Current-State Baseline',
        title: 'Diagnostic Report',
        summary: 'Objective assessment covering product mix, warehouse/store flow, historical sales, and cross-functional bottlenecks.',
        highlights: [
          'Separates verified facts from gaps requiring Director decisions.',
          'Forms a shared baseline before revising targets or organization.',
        ],
        footerLabel: 'Plan Target',
        footerValue: 'Month 1 Completion Target',
        accent: 'red',
      },
    },
    {
      id: 'del-2',
      code: '02',
      title: 'Proposed Org / RACI',
      window: 'Day 45',
      modal: {
        badge: 'Deliverable 02 • Day 45',
        subtitle: 'Role & Authority Clarity',
        title: 'Proposed Org / RACI',
        summary: 'Proposal separating Sales vs Marketing focus plus cross-functional RACI across Sales, Warehouse, Finance, Technical, HR, and Creative.',
        highlights: [
          'Prevents escalation overlap and unstructured pricing approvals.',
          'Proposed status: subject to Owner / Director approval.',
        ],
        footerLabel: 'Decision',
        footerValue: 'Director Review & Sign-Off',
        accent: 'slate',
      },
    },
    {
      id: 'del-3',
      code: '03',
      title: 'Baseline KPI',
      window: 'Day 60',
      modal: {
        badge: 'Deliverable 03 • Day 60',
        subtitle: 'Initial Measurement Standard',
        title: 'Baseline KPI',
        summary: 'Sets verified segment baselines and KPI definitions aligned directly with Finance data.',
        highlights: [
          'Closes baseline blind spots (including actual B2G share and net margin).',
          'Serves as objective reference for monthly performance reviews.',
        ],
        footerLabel: 'Validation',
        footerValue: 'Aligned with Finance Records',
        accent: 'slate',
      },
    },
    {
      id: 'del-4',
      code: '04',
      title: 'Priority Account List',
      window: 'Day 60',
      modal: {
        badge: 'Deliverable 04 • Day 60',
        subtitle: 'Targeted B2B, B2G & Channel Focus',
        title: 'Priority Account List',
        summary: 'Maps priority accounts by segment, territory, portfolio fit, and stock/technical support readiness.',
        highlights: [
          'Replaces ad-hoc prospecting with a traceable account pipeline.',
          'Feeds Month-3 lead allocation assignments.',
        ],
        footerLabel: 'Coverage',
        footerValue: 'Retail, Distribution, B2B & B2G',
        accent: 'slate',
      },
    },
    {
      id: 'del-5',
      code: '05',
      title: 'Initial SOP',
      window: 'Day 75',
      modal: {
        badge: 'Deliverable 05 • Day 75',
        subtitle: 'Minimum Operating Procedures',
        title: 'Initial SOP & Online Request',
        summary: 'Core SOPs for leads, quotations, simple pricing requests, technical handover, and complaint handling under live trial.',
        highlights: [
          'Ensures process logging no longer relies on individual memory.',
          'Refined using Days 61–90 field trial feedback.',
        ],
        footerLabel: 'Mechanism',
        footerValue: 'Field Trial & Cross-Team Feedback',
        accent: 'red',
      },
    },
    {
      id: 'del-6',
      code: '06',
      title: 'Dashboard Prototype',
      window: 'Days 60–90',
      modal: {
        badge: 'Deliverable 06 • Days 60–90',
        subtitle: 'Minimum Viable Visibility',
        title: 'Dashboard Prototype',
        summary: 'Working prototype tracking pipeline, order status, critical stock availability, and weekly KPIs.',
        highlights: [
          'System honesty label: prototype/mockup stage prior to full live integration.',
          'Supports weekly pipeline reviews using one shared view.',
        ],
        footerLabel: 'System Status',
        footerValue: 'Working Prototype (Not Full Live System)',
        accent: 'slate',
      },
    },
    {
      id: 'del-7',
      code: '07',
      title: 'Skill Matrix',
      window: 'Day 60',
      modal: {
        badge: 'Deliverable 07 • Day 60',
        subtitle: 'Foundation for L&D & Sales Grade',
        title: 'Team Skill Matrix',
        summary: 'Maps actual sales competencies based on field assessment, product knowledge, and commercial negotiation.',
        highlights: [
          'Provides objective input for role-play curricula, training, and grade proposals.',
          'Coordinated with HR for career track alignment.',
        ],
        footerLabel: 'Collaboration',
        footerValue: 'Sales & Marketing Manager & HR',
        accent: 'slate',
      },
    },
    {
      id: 'del-8',
      code: '08',
      title: 'Roadmap Revision',
      window: 'Day 90',
      modal: {
        badge: 'Deliverable 08 • Day 90',
        subtitle: 'Calibrating Months 4–12 Plan',
        title: 'Roadmap Revision (M3 Gate)',
        summary: 'Recalibrates the 12-month plan against verified baselines, stock capacity, and first-90-day pilot findings.',
        highlights: [
          'Keeps Q2–Q4 targets grounded in actual operational capacity.',
          'Provides Director decision input for subsequent expansion phases.',
        ],
        footerLabel: 'Review Gate',
        footerValue: 'Quarter-1 Evaluation (M3)',
        accent: 'red',
      },
    },
  ],
  stakeholdersTitle: '7 Cross-Functional Stakeholders',
  stakeholders: [
    { id: 'st-1', role: 'Owner / Director', focus: 'Sponsor, mandate & decision gates' },
    { id: 'st-2', role: 'Sales', focus: 'Assessment, role-play, CRM & pilot' },
    { id: 'st-3', role: 'Warehouse', focus: 'Stock checks, condition & readiness' },
    { id: 'st-4', role: 'Finance', focus: 'COGS audit, margin guardrails & AR' },
    { id: 'st-5', role: 'Technical', focus: 'Solution validation, survey & handover' },
    { id: 'st-6', role: 'HR', focus: 'Skill matrix, L&D & grade calibration' },
    { id: 'st-7', role: 'Creative', focus: 'Offer collateral & pilot campaign assets' },
  ],
  evidenceFooter:
    'Required Starting Evidence: Project sponsor, decision owner, dashboard/data access, stakeholder directory, and technical/administrative support.',
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide26Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide26Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 26,
  folder: '26',
  sectionId: 8,
  navTitle: {
    in: 'First 90 Days',
    en: 'First 90 Days',
  },
  headerTitle: {
    in: 'First 90 Days - Rencana Kerja yang Konkret',
    en: 'First 90 Days - Concrete Work Plan',
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
