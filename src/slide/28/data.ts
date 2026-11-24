import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide28ModalPayload {
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

export interface CulturePrincipleItem {
  id: string;
  code: string;
  title: string;
  verb: string;
  behavior: string;
  proof: string;
  modal: Slide28ModalPayload;
}

export interface CultureLoopStage {
  id: string;
  step: string;
  label: string;
  mechanism: string;
}

export interface Slide28Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  anchorQuote: string;
  anchorCaption: string;
  behaviorLabel: string;
  proofLabel: string;
  principles: CulturePrincipleItem[];
  loopTitle: string;
  loopStages: CultureLoopStage[];
  claimBoundary: string;
}

export const slideDataId: Slide28Data = {
  eyebrow: 'V. Eksekusi dan Hasil • Sistem Perilaku Kerja',
  title: 'Culture & Operating Principles',
  subtitle: 'Menggeser penjualan berbasis kebiasaan individu menjadi sistem komersial yang terukur dan dapat diulang.',
  anchorQuote: '“Culture is what the team repeats”',
  anchorCaption: 'Terlihat pada cara merespons pelanggan, menjelaskan kondisi barang, menjaga harga, mencatat data & saling membimbing.',
  behaviorLabel: 'Perilaku',
  proofLabel: 'Pembuktian',
  principles: [
    {
      id: 'c1',
      code: '01',
      title: 'Disiplin Proses',
      verb: 'Catat & Ikuti',
      behavior: 'Lead, quotation, approval, order & follow-up sesuai SOP',
      proof: 'CRM activity, approval log & sampling order',
      modal: {
        badge: 'Prinsip 01 • Disiplin Proses',
        subtitle: 'Eksekusi Mengikuti Alur Baku',
        title: 'Disiplin Proses (SOP Discipline)',
        metric: 'Catat & Ikuti',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Setiap lead, quotation, approval, order, dan follow-up dicatat lengkap mengikuti tahapan SOP.',
        highlights: [
          'Contoh perilaku: mengikuti checklist wajib sebelum menerbitkan penawaran atau eskalasi order.',
          'Pembuktian terukur: jejak aktivitas CRM, approval log, dan sampling audit order.',
        ],
        footerLabel: 'Fokus Evaluasi',
        footerValue: 'Kepatuhan Alur Kerja (Bukan Penilaian Personal)',
        accent: 'red',
      },
    },
    {
      id: 'c2',
      code: '02',
      title: 'Kompetensi Produk/Solusi',
      verb: 'Kuasai & Jelaskan',
      behavior: 'Pahami spek, kondisi, batasan, warranty & use case',
      proof: 'Product test, role-play & validasi teknis',
      modal: {
        badge: 'Prinsip 02 • Kompetensi Teknis',
        subtitle: 'Penjualan Berbasis Pemahaman Nyata',
        title: 'Kompetensi Produk & Solusi',
        metric: 'Kuasai & Jelaskan',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Sales menguasai spesifikasi, kondisi unit, batasan teknis, garansi, dan skenario pemakaian pelanggan.',
        highlights: [
          'Contoh perilaku: memberi rekomendasi sesuai kebutuhan nyata dan batasan implementasi.',
          'Pembuktian terukur: hasil product knowledge test, simulasi role-play, dan validasi teknis.',
        ],
        footerLabel: 'Dukungan Sistem',
        footerValue: 'Kurikulum L&D & Role-Play Terjadwal',
        accent: 'slate',
      },
    },
    {
      id: 'c3',
      code: '03',
      title: 'Integritas',
      verb: 'Jujur & Realistis',
      behavior: 'Jelaskan kondisi new/second/refurbished & batas kapasitas',
      proof: 'Checklist QC, quotation & catatan komplain',
      modal: {
        badge: 'Prinsip 03 • Integritas',
        subtitle: 'Kejujuran Kondisi Barang & Kapasitas',
        title: 'Integritas dalam Penjelasan Produk & Layanan',
        metric: 'Jujur & Realistis',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Menjelaskan status new, second, atau refurbished secara transparan tanpa menjanjikan layanan di luar kapasitas.',
        highlights: [
          'Contoh perilaku: menyampaikan grade unit, syarat garansi, dan batasan waktu pengerjaan apa adanya.',
          'Pembuktian terukur: kesesuaian checklist QC gudang, isi quotation tertulis, dan log komplain.',
        ],
        footerLabel: 'Dampak Komersial',
        footerValue: 'Menjaga Kepercayaan & Retensi Jangka Panjang',
        accent: 'red',
      },
    },
    {
      id: 'c4',
      code: '04',
      title: 'Kecepatan Layanan',
      verb: 'Respons Sesuai SLA',
      behavior: 'Merespons, mengeskalasi & memberi update tepat waktu',
      proof: 'Lead response time & kepatuhan SLA',
      modal: {
        badge: 'Prinsip 04 • Kecepatan Layanan',
        subtitle: 'Ketepatan Respons & Eskalasi',
        title: 'Kecepatan Layanan Mengikuti Standar SLA',
        metric: 'Respons SLA',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Merespons pertanyaan awal, melakukan eskalasi lintas divisi, dan memberi pembaruan status sesuai SLA.',
        highlights: [
          'Contoh perilaku: tidak membiarkan permintaan pelanggan menggantung tanpa status tindak lanjut.',
          'Pembuktian terukur: median waktu respons pertama dan persentase kepatuhan SLA.',
        ],
        footerLabel: 'Keterkaitan',
        footerValue: 'Cross-Functional Service Request SLA',
        accent: 'slate',
      },
    },
    {
      id: 'c5',
      code: '05',
      title: 'Konsistensi',
      verb: 'Follow-Up Terjadwal',
      behavior: 'Next action jelas & customer history tersimpan utuh',
      proof: 'Log follow-up CRM & zero overdue task',
      modal: {
        badge: 'Prinsip 05 • Konsistensi',
        subtitle: 'Kontinuitas Pengelolaan Akun',
        title: 'Konsistensi Follow-Up & Histori Pelanggan',
        metric: 'Follow-Up Rutin',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Menjaga follow-up terjadwal dengan next action jelas serta menyimpan riwayat interaksi pelanggan.',
        highlights: [
          'Contoh perilaku: tidak membiarkan peluang aktif stagnan tanpa tanggal tindak lanjut berikutnya.',
          'Pembuktian terukur: log follow-up di CRM dan tingkat task yang melewati tenggat.',
        ],
        footerLabel: 'Fokus Operasional',
        footerValue: 'Pipeline Hygiene Mingguan',
        accent: 'slate',
      },
    },
    {
      id: 'c6',
      code: '06',
      title: 'Akuntabilitas',
      verb: 'Miliki Komitmen',
      behavior: 'Target dimiliki personal; hasil dilihat dalam sistem tim',
      proof: 'Weekly action plan & akurasi forecast',
      modal: {
        badge: 'Prinsip 06 • Akuntabilitas',
        subtitle: 'Kepemilikan Target & Pelaporan Dini',
        title: 'Akuntabilitas Pribadi dalam Sistem Tim',
        metric: 'Miliki Komitmen',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Setiap target dan komitmen dimiliki secara personal, sementara risiko dilaporkan lebih awal di sistem tim.',
        highlights: [
          'Contoh perilaku: memperbarui kendala deal sebelum terlambat di review mingguan.',
          'Pembuktian terukur: rencana aksi mingguan dan rasio keandalan forecast pribadi.',
        ],
        footerLabel: 'Prinsip Tim',
        footerValue: 'Personal Ownership + Team Visibility',
        accent: 'red',
      },
    },
    {
      id: 'c7',
      code: '07',
      title: 'Profit Discipline',
      verb: 'Jaga Kualitas Deal',
      behavior: 'Jaga margin, batas diskon, piutang & kualitas transaksi',
      proof: 'Margin report, price request & aging AR',
      modal: {
        badge: 'Prinsip 07 • Profit Discipline',
        subtitle: 'Pertumbuhan Sehat & Tertib Piutang',
        title: 'Disiplin Margin, Diskon & Penagihan',
        metric: 'Jaga Margin',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Mengutamakan kualitas laba kotor, kepatuhan batas diskon, dan ketertiban piutang — bukan sekadar mengejar omzet.',
        highlights: [
          'Contoh perilaku: meminta approval tertulis sebelum memberi potongan di luar kewenangan.',
          'Pembuktian terukur: margin report aktual, discount compliance, dan rasio overdue AR.',
        ],
        footerLabel: 'Koordinasi Lintas Fungsi',
        footerValue: 'Sinkronisasi Finance & Pricing Matrix',
        accent: 'red',
      },
    },
    {
      id: 'c8',
      code: '08',
      title: 'Data Discipline',
      verb: 'Rujuk Laporan',
      behavior: 'Keputusan berbasis report, bukan ingatan atau persepsi',
      proof: 'CRM completeness & kualitas laporan',
      modal: {
        badge: 'Prinsip 08 • Data Discipline',
        subtitle: 'Fakta Tercatat Menggantikan Persepsi',
        title: 'Pengambilan Keputusan Berbasis Data',
        metric: 'Rujuk Laporan',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Keputusan pipeline, coaching, dan alokasi sumber daya bertumpu pada laporan aktual — bukan ingatan atau kedekatan.',
        highlights: [
          'Contoh perilaku: melengkapi seluruh field wajib sebelum diskusi pipeline atau approval.',
          'Pembuktian terukur: persentase kelengkapan field wajib CRM dan konsistensi laporan.',
        ],
        footerLabel: 'Perubahan Inti',
        footerValue: 'Dari Persepsi ke Bukti Tercatat',
        accent: 'slate',
      },
    },
    {
      id: 'c9',
      code: '09',
      title: 'Learning Culture',
      verb: 'Bimbing & Kembangkan',
      behavior: 'Saling membimbing, berbagi ilmu & siapkan calon leader',
      proof: 'Mentor log, mentee assessment & coaching',
      modal: {
        badge: 'Prinsip 09 • Learning Culture',
        subtitle: 'Kaderisasi & Peningkatan Berkelanjutan',
        title: 'Budaya Belajar & Saling Membimbing',
        metric: 'Bimbing Tim',
        metricLabel: 'Kata Kerja Operasional',
        summary: 'Membangun kebiasaan berbagi praktik terbaik lintas level untuk mencetak calon Supervisor dan Team Leader internal.',
        highlights: [
          'Contoh perilaku: senior mendampingi junior melalui role-play dan bedah studi kasus nyata.',
          'Pembuktian terukur: catatan coaching, log pendampingan, dan progres assessment mentee.',
        ],
        footerLabel: 'Output Jangka Menengah',
        footerValue: 'Kesiapan Kaderisasi Leader Internal',
        accent: 'slate',
      },
    },
  ],
  loopTitle: 'Siklus Budaya',
  loopStages: [
    {
      id: 'lp-1',
      step: '01',
      label: 'SOP',
      mechanism: 'Menetapkan aturan kerja, standar pencatatan, dan batasan perilaku yang jelas.',
    },
    {
      id: 'lp-2',
      step: '02',
      label: 'Practice',
      mechanism: 'Membiasakan perilaku konsisten lewat role-play dan eksekusi harian di lapangan.',
    },
    {
      id: 'lp-3',
      step: '03',
      label: 'Measure',
      mechanism: 'Mengukur kepatuhan proses, SLA, margin, dan kualitas data secara objektif.',
    },
    {
      id: 'lp-4',
      step: '04',
      label: 'Coach',
      mechanism: 'Pendampingan rutin berbasis bukti laporan dan temuan lapangan nyata.',
    },
    {
      id: 'lp-5',
      step: '05',
      label: 'Improve',
      mechanism: 'Memperbarui skrip, SOP, dan kemampuan tim sehingga sistem terus menguat.',
    },
  ],
  claimBoundary:
    'Batas Klaim: KPI budaya hanya menilai perilaku kerja yang relevan dan dapat diamati — bukan mengukur kepribadian atau memberi label personal secara subjektif.',
};

export const slideDataEn: Slide28Data = {
  eyebrow: 'V. Execution & Outcomes • Operating Behavior System',
  title: 'Culture & Operating Principles',
  subtitle: 'Shifting from individual habit-based selling to a measurable, repeatable commercial system.',
  anchorQuote: '“Culture is what the team repeats”',
  anchorCaption: 'Visible in how the team responds to customers, explains product condition, protects margin, logs data & coaches peers.',
  behaviorLabel: 'Behavior',
  proofLabel: 'Evidence',
  principles: [
    {
      id: 'c1',
      code: '01',
      title: 'Process Discipline',
      verb: 'Log & Follow',
      behavior: 'Leads, quotes, approvals, orders & follow-ups follow SOP',
      proof: 'CRM activity, approval log & order audit',
      modal: {
        badge: 'Principle 01 • Process Discipline',
        subtitle: 'Consistent Standard Workflow',
        title: 'SOP & Process Discipline',
        metric: 'Log & Follow',
        metricLabel: 'Operating Verb',
        summary: 'Every lead, quotation, approval, order, and follow-up is logged consistently according to SOP stages.',
        highlights: [
          'Observable behavior: completing mandatory checklists before issuing quotes or escalating orders.',
          'Recorded evidence: CRM logs, discount approval trail, and random order sampling.',
        ],
        footerLabel: 'Evaluation Scope',
        footerValue: 'Workflow Compliance (Not Personality Scoring)',
        accent: 'red',
      },
    },
    {
      id: 'c2',
      code: '02',
      title: 'Product & Solution Mastery',
      verb: 'Master & Advise',
      behavior: 'Knows specs, condition, limits, warranty & use cases',
      proof: 'Product tests, role-play & tech checks',
      modal: {
        badge: 'Principle 02 • Solution Competence',
        subtitle: 'Needs-Based Recommendation',
        title: 'Product & Solution Mastery',
        metric: 'Master & Advise',
        metricLabel: 'Operating Verb',
        summary: 'Sales reps understand product specs, unit condition, technical limits, warranty terms, and real customer use cases.',
        highlights: [
          'Observable behavior: matching solutions to verified needs and technical constraints.',
          'Recorded evidence: product assessment scores, role-play reviews, and technical validation.',
        ],
        footerLabel: 'Enablement',
        footerValue: 'Scheduled L&D & Role-Play Curriculum',
        accent: 'slate',
      },
    },
    {
      id: 'c3',
      code: '03',
      title: 'Integrity',
      verb: 'Disclose Honestly',
      behavior: 'Transparent on new/used/refurbished state & capacity',
      proof: 'QC checklists, quotes & complaint logs',
      modal: {
        badge: 'Principle 03 • Integrity',
        subtitle: 'Honest Disclosure & Realistic Promises',
        title: 'Integrity in Product Condition & Service Limits',
        metric: 'Be Transparent',
        metricLabel: 'Operating Verb',
        summary: 'Explains new, second, or refurbished unit condition honestly and never overpromises beyond service capacity.',
        highlights: [
          'Observable behavior: stating grade, warranty boundaries, and realistic delivery lead times upfront.',
          'Recorded evidence: warehouse QC sign-offs, written quotes, and customer complaint records.',
        ],
        footerLabel: 'Commercial Value',
        footerValue: 'Protects Long-Term Trust & Retention',
        accent: 'red',
      },
    },
    {
      id: 'c4',
      code: '04',
      title: 'Service Speed',
      verb: 'Respond to SLA',
      behavior: 'Responds, escalates & updates customers per SLA',
      proof: 'Lead response time & SLA compliance',
      modal: {
        badge: 'Principle 04 • Service Speed',
        subtitle: 'Timely Updates & Escalation',
        title: 'Response Speed & SLA Reliability',
        metric: 'Hit SLA',
        metricLabel: 'Operating Verb',
        summary: 'Acknowledges inquiries, triggers cross-team escalations, and updates customers within defined SLA windows.',
        highlights: [
          'Observable behavior: never leaving customer requests stranded without status updates.',
          'Recorded evidence: median first-response time and SLA compliance rate.',
        ],
        footerLabel: 'Alignment',
        footerValue: 'Cross-Functional Service Request SLA',
        accent: 'slate',
      },
    },
    {
      id: 'c5',
      code: '05',
      title: 'Consistency',
      verb: 'Schedule Follow-Up',
      behavior: 'Clear next action & complete customer history saved',
      proof: 'CRM follow-up logs & zero overdue tasks',
      modal: {
        badge: 'Principle 05 • Consistency',
        subtitle: 'Continuity of Account Care',
        title: 'Scheduled Follow-Up & Account Memory',
        metric: 'Follow Through',
        metricLabel: 'Operating Verb',
        summary: 'Maintains scheduled follow-ups with explicit next actions and preserves complete customer interaction history.',
        highlights: [
          'Observable behavior: zero active opportunities stagnating without a dated next step.',
          'Recorded evidence: CRM follow-up completion and overdue task rate.',
        ],
        footerLabel: 'Operational Habit',
        footerValue: 'Weekly Pipeline Hygiene',
        accent: 'slate',
      },
    },
    {
      id: 'c6',
      code: '06',
      title: 'Accountability',
      verb: 'Own Commitments',
      behavior: 'Targets owned personally; outcomes tracked in team system',
      proof: 'Weekly action plans & forecast accuracy',
      modal: {
        badge: 'Principle 06 • Accountability',
        subtitle: 'Personal Ownership & Early Risk Escalation',
        title: 'Personal Target Ownership Within Team System',
        metric: 'Own Results',
        metricLabel: 'Operating Verb',
        summary: 'Each rep owns personal targets and commitments while surfacing deal risks early within team reviews.',
        highlights: [
          'Observable behavior: flagging deal blockers ahead of close dates during weekly reviews.',
          'Recorded evidence: weekly action plan delivery and forecast reliability.',
        ],
        footerLabel: 'Team Norm',
        footerValue: 'Personal Ownership + Team Visibility',
        accent: 'red',
      },
    },
    {
      id: 'c7',
      code: '07',
      title: 'Profit Discipline',
      verb: 'Protect Margin',
      behavior: 'Safeguards margin, discounts, AR & deal quality',
      proof: 'Margin reports, price logs & AR aging',
      modal: {
        badge: 'Principle 07 • Profit Discipline',
        subtitle: 'Healthy Revenue & Receivables Quality',
        title: 'Margin, Discount & Collection Discipline',
        metric: 'Protect Profit',
        metricLabel: 'Operating Verb',
        summary: 'Prioritizes gross margin health, discount governance, and AR collection discipline over volume alone.',
        highlights: [
          'Observable behavior: securing documented approval before granting out-of-band pricing.',
          'Recorded evidence: realized gross margin reports, discount compliance, and overdue AR ratio.',
        ],
        footerLabel: 'Cross-Team Link',
        footerValue: 'Aligned with Finance & Approval Matrix',
        accent: 'red',
      },
    },
    {
      id: 'c8',
      code: '08',
      title: 'Data Discipline',
      verb: 'Work From Data',
      behavior: 'Decisions based on reports, not memory or perception',
      proof: 'CRM completeness & report accuracy',
      modal: {
        badge: 'Principle 08 • Data Discipline',
        subtitle: 'Recorded Evidence Over Perception',
        title: 'Data-Driven Daily Decisions',
        metric: 'Use Reports',
        metricLabel: 'Operating Verb',
        summary: 'Pipeline coaching, forecasting, and resource priorities rely on verified reports rather than memory or favoritism.',
        highlights: [
          'Observable behavior: completing all mandatory fields before pipeline or pricing reviews.',
          'Recorded evidence: CRM completeness percentage and reporting quality.',
        ],
        footerLabel: 'Core Shift',
        footerValue: 'From Perception to Auditable Records',
        accent: 'slate',
      },
    },
    {
      id: 'c9',
      code: '09',
      title: 'Learning Culture',
      verb: 'Coach & Grow',
      behavior: 'Peer mentoring, knowledge sharing & leader readiness',
      proof: 'Mentor logs, coaching notes & reviews',
      modal: {
        badge: 'Principle 09 • Learning Culture',
        subtitle: 'Succession & Continuous Skill Building',
        title: 'Peer Mentoring & Internal Leader Pipeline',
        metric: 'Mentor Peers',
        metricLabel: 'Operating Verb',
        summary: 'Instills peer coaching and knowledge sharing across tenure levels to develop future internal leaders.',
        highlights: [
          'Observable behavior: senior reps supporting peers via role-plays and real case debriefs.',
          'Recorded evidence: mentoring logs, coaching notes, and mentee progression reviews.',
        ],
        footerLabel: 'Medium-Term Yield',
        footerValue: 'Internal Supervisor / Leader Readiness',
        accent: 'slate',
      },
    },
  ],
  loopTitle: 'Culture Loop',
  loopStages: [
    {
      id: 'lp-1',
      step: '01',
      label: 'SOP',
      mechanism: 'Defines clear workflow steps, logging standards, and operating guardrails.',
    },
    {
      id: 'lp-2',
      step: '02',
      label: 'Practice',
      mechanism: 'Drives daily execution and structured role-play until behaviors become routine.',
    },
    {
      id: 'lp-3',
      step: '03',
      label: 'Measure',
      mechanism: 'Tracks process compliance, SLA speed, margin discipline, and CRM completeness.',
    },
    {
      id: 'lp-4',
      step: '04',
      label: 'Coach',
      mechanism: 'Delivers targeted feedback grounded in recorded reports and field observation.',
    },
    {
      id: 'lp-5',
      step: '05',
      label: 'Improve',
      mechanism: 'Refines playbooks, SOPs, and team capability for compounding execution quality.',
    },
  ],
  claimBoundary:
    'Claim Boundary: Culture KPIs measure relevant, observable work behaviors only — never personality traits or subjective personal labels.',
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide28Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide28Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 28,
  folder: '28',
  sectionId: 8,
  navTitle: {
    in: 'Culture & Operating Principles',
    en: 'Culture & Operating Principles',
  },
  headerTitle: {
    in: 'Culture & Operating Principles - Perilaku yang Harus Konsisten',
    en: 'Culture & Operating Principles - Consistent Operating Behaviors',
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
