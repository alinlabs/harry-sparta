import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide27ModalPayload {
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

export interface HorizonItem {
  id: string;
  horizonLabel: string;
  title: string;
  scopeTag: string;
  metric: string;
  keyPoints: string[];
  statusCaveat: string;
  modal: Slide27ModalPayload;
}

export interface CorporateGateItem {
  id: string;
  step: string;
  label: string;
  requirement: string;
}

export interface GtmTacticItem {
  id: string;
  tag: string;
  title: string;
  keyPoints: string[];
  guardrail: string;
  modal: Slide27ModalPayload;
}

export interface Slide27Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  horizonsHeading: string;
  horizons: HorizonItem[];
  gatesHeading: string;
  gates: CorporateGateItem[];
  gtmHeading: string;
  gtmIsolationNote: string;
  gtmTactics: GtmTacticItem[];
  claimBoundary: string;
}

export const slideDataId: Slide27Data = {
  eyebrow: 'V. Eksekusi dan Hasil • Visi & Batas Komitmen',
  title: 'Long-Term Strategic Horizon',
  subtitle: 'Memisahkan fondasi komersial Tahun 1 dari jalur mutu ISO 9001 dan aspirasi korporasi jangka panjang.',
  horizonsHeading: 'Peta Jalan Tiga Horizon',
  horizons: [
    {
      id: 'h1',
      horizonLabel: 'HORIZON 1 • 0–12 BULAN',
      title: 'Commercial Foundation',
      scopeTag: 'Komitmen Sales & Marketing Tahun 1',
      metric: 'M1–M12',
      keyPoints: [
        '4 portofolio & segmen terstruktur',
        'Disiplin CRM, SOP & pricing HPP',
        'Baseline KPI, margin & bukti kinerja',
      ],
      statusCaveat: 'Fokus langsung Manager Sales & Marketing',
      modal: {
        badge: 'Horizon 1 • 0–12 Bulan',
        subtitle: 'Komitmen Utama Tahun Pertama',
        title: 'Commercial Foundation: Disiplin Pelanggan, Proses & Margin',
        metric: '0–12 Bln',
        metricLabel: 'Fokus Manager S&M',
        summary: 'Membangun disiplin pelanggan, proses, portofolio, dan bukti kinerja yang menjadi prasyarat kredibel bagi fase skala berikutnya.',
        highlights: [
          'Menjalankan 4 portofolio komersial dan penataan pipeline B2B, Retail, Distribusi, serta kesiapan B2G.',
          'Menetapkan SOP, otoritas harga berbasis HPP/margin, dan pemantauan piutang.',
          'Tanpa fondasi tahun pertama yang sehat, skala jangka panjang tidak punya dasar kinerja.',
        ],
        footerLabel: 'Akuntabilitas',
        footerValue: 'Wilayah Kerja Manager Sales & Marketing',
        accent: 'red',
      },
    },
    {
      id: 'h2',
      horizonLabel: 'HORIZON 2 • 12–36 BULAN',
      title: 'Quality & Scale Readiness (ISO 9001)',
      scopeTag: 'Jalur Manajemen Mutu — Konfirmasi Status Awal',
      metric: 'ISO 9001',
      keyPoints: [
        'Konfirmasi status: belum vs dalam proses',
        'Gap assessment, SOP & document control',
        'Supplier evaluation, komplain & audit',
      ],
      statusCaveat: 'Sertifikasi hanya sah setelah lulus audit lembaga kompeten',
      modal: {
        badge: 'Horizon 2 • 12–36 Bulan',
        subtitle: 'Jalur Manajemen Mutu Terstandar',
        title: 'ISO 9001: Tata Kelola Mutu & Audit Lembaga Sertifikasi',
        metric: 'Status?',
        metricLabel: 'Wajib Konfirmasi Awal',
        summary: 'Membangun kesiapan mutu proses lintas divisi dimulai dari verifikasi status ISO aktual saat ini.',
        highlights: [
          'Langkah wajib awal: konfirmasi apakah perusahaan belum bersertifikat atau sedang berproses.',
          'Cakupan kerja: gap assessment proses, dokumentasi SOP, document control, komplain, dan supplier evaluation.',
          'Dilanjutkan internal audit & management review; sertifikasi tercapai hanya setelah audit lembaga sertifikasi kompeten.',
        ],
        footerLabel: 'Batas Klaim',
        footerValue: 'Status Aktual Wajib Dikonfirmasi Dahulu',
        accent: 'slate',
      },
    },
    {
      id: 'h3',
      horizonLabel: 'HORIZON 3 • LONG-TERM CORPORATE AMBITION',
      title: 'IPO Papan Pengembangan & Data Center Tier III',
      scopeTag: 'Vision Track Terpisah — Level Korporasi & Pemegang Saham',
      metric: 'Vision Track',
      keyPoints: [
        'IPO Papan Pengembangan (bukan target Y1 S&M)',
        'Data center Tier III komersial via IPO/investor',
        'Wajib feasibility study & tata kelola terpisah',
      ],
      statusCaveat: 'Aspirasi korporasi — bukan janji hasil atau komitmen Tahun 1',
      modal: {
        badge: 'Horizon 3 • Aspirasi Korporasi',
        subtitle: 'Bukan Target Manager S&M Tahun Pertama',
        title: 'IPO Papan Pengembangan & Commercial Data Center Tier III',
        metric: '4 Gate',
        metricLabel: 'Prasyarat Mutlak',
        summary: 'Aspirasi besar korporasi yang memerlukan keputusan pemegang saham, tata kelola legal-keuangan, serta kajian kelayakan investasi terpisah.',
        highlights: [
          'IPO butuh kesiapan tata kelola, legal, keuangan, profitabilitas konsisten, audit, dan struktur organisasi.',
          'Data Center Tier III butuh feasibility terpisah: demand, lokasi, listrik, cooling, konektivitas, redundancy, security, capex/opex, financing & risk.',
          'Peran Manager S&M: menyiapkan rekam jejak pendapatan sehat dan disiplin pelanggan yang menunjang kesiapan korporasi.',
        ],
        footerLabel: 'Otoritas Keputusan',
        footerValue: 'Direksi, Pemegang Saham & Investor',
        accent: 'red',
      },
    },
  ],
  gatesHeading: '4 Gate Menuju Horizon 3',
  gates: [
    { id: 'gt-1', step: 'GATE 01', label: 'Feasibility', requirement: 'Demand, lokasi, daya, cooling & capex/opex' },
    { id: 'gt-2', step: 'GATE 02', label: 'Governance', requirement: 'Legal, audit keuangan, kontrol & risiko' },
    { id: 'gt-3', step: 'GATE 03', label: 'Capital', requirement: 'Struktur pendanaan IPO / investor' },
    { id: 'gt-4', step: 'GATE 04', label: 'Operational Readiness', requirement: 'Tim teknis, SLA Tier III & rekam jejak' },
  ],
  gtmHeading: 'Taktik Go-To-Market',
  gtmIsolationNote: 'Taktik akuisisi komersial yang dikendalikan kuota & margin — bukan milestone korporasi.',
  gtmTactics: [
    {
      id: 'gtm-fitd',
      tag: 'TAKTIK ENTRY 01',
      title: 'Foot-in-the-Door',
      keyPoints: [
        'Assessment awal atau refresh skala kecil',
        'Masuk lewat kebutuhan jaringan cabang',
        'Bangun trust & buka ekspansi lanjutan',
      ],
      guardrail: 'Bukan milestone korporasi; pembuka pintu akun potensial',
      modal: {
        badge: 'Taktik Go-To-Market • Entry Offer',
        subtitle: 'Akuisisi Bertahap Berisiko Rendah',
        title: 'Foot-in-the-Door: Pintu Masuk Awal yang Mudah Disepakati',
        summary: 'Menawarkan ruang lingkup awal yang ringkas dan terukur agar pelanggan dapat menguji kualitas pengiriman sebelum proyek lebih besar.',
        highlights: [
          'Contoh pintu masuk: assessment infrastruktur, refresh perangkat skala kecil, atau pengadaan jaringan cabang.',
          'Tujuan utama: membangun kepercayaan eksekusi untuk membuka peluang solusi terintegrasi berikutnya.',
          'Tetap tunduk pada standar QC, SLA, dan pencatatan akun di CRM.',
        ],
        footerLabel: 'Posisi Strategi',
        footerValue: 'Taktik Komersial — Terpisah dari IPO/Tier III',
        accent: 'slate',
      },
    },
    {
      id: 'gtm-ll',
      tag: 'TAKTIK ENTRY 02',
      title: 'Loss Leader Terkendali',
      keyPoints: [
        'Hanya SKU/layanan terpilih yang ditetapkan',
        'Dibatasi ketat: kuantitas, waktu & budget',
        'Wajib hitung total basket & risiko margin',
      ],
      guardrail: 'Dilarang jual di bawah biaya tanpa batas persetujuan',
      modal: {
        badge: 'Taktik Go-To-Market • Kontrol Margin',
        subtitle: 'Pemicu Akuisisi atau Stock Movement',
        title: 'Loss Leader: Pembatasan Ketat Kuota, Waktu, & Profit Basket',
        summary: 'Penggunaan penawaran harga penghela hanya diperbolehkan secara selektif jika tujuan komersial dan batas risikonya disetujui.',
        highlights: [
          'Alasan wajib jelas: akuisisi akun strategis baru atau percepatan perputaran stok menua.',
          'Harus menghitung kontribusi profitabilitas total basket agar tidak menggerus margin perusahaan.',
          'Dilarang dijadikan kebiasaan diskon di bawah biaya tanpa analisis dan approval matrix.',
        ],
        footerLabel: 'Kontrol Wajib',
        footerValue: 'Batas Kuantitas, Periode & Sign-Off Finance/Direksi',
        accent: 'red',
      },
    },
  ],
  claimBoundary:
    'Batas Klaim: Tidak menyatakan perusahaan pasti akan IPO atau membangun Data Center Tier III. Status ISO 9001 (belum tersertifikasi vs sedang dalam proses) wajib dikonfirmasi sebelum diklaim.',
};

export const slideDataEn: Slide27Data = {
  eyebrow: 'V. Execution & Outcomes • Vision & Claim Boundaries',
  title: 'Long-Term Strategic Horizon',
  subtitle: 'Separating Year-1 commercial foundations from ISO 9001 quality readiness and long-term corporate ambitions.',
  horizonsHeading: 'Three-Horizon Roadmap',
  horizons: [
    {
      id: 'h1',
      horizonLabel: 'HORIZON 1 • 0–12 MONTHS',
      title: 'Commercial Foundation',
      scopeTag: 'Year-1 Sales & Marketing Commitment',
      metric: 'M1–M12',
      keyPoints: [
        '4 structured commercial portfolios',
        'CRM, SOP & COGS-based pricing control',
        'Verified KPI baseline, margin & track record',
      ],
      statusCaveat: 'Direct scope of the Sales & Marketing Manager',
      modal: {
        badge: 'Horizon 1 • 0–12 Months',
        subtitle: 'Primary Year-One Mandate',
        title: 'Commercial Foundation: Customer, Process & Margin Discipline',
        metric: '0–12 Mos',
        metricLabel: 'S&M Manager Focus',
        summary: 'Builds customer discipline, clear processes, portfolio focus, and auditable performance required before scaling.',
        highlights: [
          'Operationalizes four commercial portfolios across Retail, Distribution, B2B, and B2G readiness.',
          'Establishes SOPs, COGS/margin pricing authority, and receivables tracking.',
          'Without sound Year-1 execution, long-term scaling lacks commercial credibility.',
        ],
        footerLabel: 'Accountability',
        footerValue: 'Sales & Marketing Manager Scope',
        accent: 'red',
      },
    },
    {
      id: 'h2',
      horizonLabel: 'HORIZON 2 • 12–36 MONTHS',
      title: 'Quality & Scale Readiness (ISO 9001)',
      scopeTag: 'Quality Management Track — Confirm Current Status First',
      metric: 'ISO 9001',
      keyPoints: [
        'Verify status: uncertified vs in progress',
        'Process gap assessment & document control',
        'Supplier checks, complaints & internal audit',
      ],
      statusCaveat: 'Certification earned only after passing competent body audit',
      modal: {
        badge: 'Horizon 2 • 12–36 Months',
        subtitle: 'Standardized Quality Management Path',
        title: 'ISO 9001: Quality Systems & Accredited Certification Audit',
        metric: 'Status?',
        metricLabel: 'Confirm Current State',
        summary: 'Develops cross-functional quality readiness beginning with formal confirmation of current ISO 9001 status.',
        highlights: [
          'First step: confirm whether the company is currently uncertified or already in certification process.',
          'Scope: process gap assessment, SOP & document control, complaint handling, and supplier evaluation.',
          'Followed by internal audits & management reviews; achieved only after accredited external audit.',
        ],
        footerLabel: 'Claim Boundary',
        footerValue: 'Actual Current Status Requires Verification',
        accent: 'slate',
      },
    },
    {
      id: 'h3',
      horizonLabel: 'HORIZON 3 • LONG-TERM CORPORATE AMBITION',
      title: 'Development Board IPO & Tier III Data Center',
      scopeTag: 'Separate Vision Track — Corporate & Shareholder Decisions',
      metric: 'Vision Track',
      keyPoints: [
        'Development Board IPO (not Year-1 S&M KPI)',
        'Commercial Tier III DC via IPO/investor capital',
        'Requires standalone feasibility & governance',
      ],
      statusCaveat: 'Corporate aspiration — not promised outcomes or Year-1 targets',
      modal: {
        badge: 'Horizon 3 • Corporate Ambition',
        subtitle: 'Not a Year-One S&M Manager Target',
        title: 'Development Board IPO & Commercial Tier III Data Center',
        metric: '4 Gates',
        metricLabel: 'Mandatory Prerequisites',
        summary: 'Major corporate ambitions contingent on shareholder mandates, financial-legal governance, and dedicated feasibility studies.',
        highlights: [
          'IPO requires governance, legal, financial audit readiness, sustained profitability, and organizational maturity.',
          'Tier III Data Center requires dedicated feasibility: demand, site, power, cooling, connectivity, redundancy, security, capex/opex & risk.',
          'S&M Manager contributes by building durable customer discipline, margin quality, and verifiable revenue records.',
        ],
        footerLabel: 'Decision Authority',
        footerValue: 'Board of Directors, Shareholders & Investors',
        accent: 'red',
      },
    },
  ],
  gatesHeading: '4 Gates Before Horizon 3',
  gates: [
    { id: 'gt-1', step: 'GATE 01', label: 'Feasibility', requirement: 'Demand, site, power, cooling & capex/opex' },
    { id: 'gt-2', step: 'GATE 02', label: 'Governance', requirement: 'Legal, audit, internal control & risk' },
    { id: 'gt-3', step: 'GATE 03', label: 'Capital', requirement: 'IPO / investor capital plan' },
    { id: 'gt-4', step: 'GATE 04', label: 'Operational Readiness', requirement: 'Technical capability, Tier III SLA & track record' },
  ],
  gtmHeading: 'Go-To-Market Tactics',
  gtmIsolationNote: 'Controlled entry tactics governed by caps and basket margin — not corporate milestones.',
  gtmTactics: [
    {
      id: 'gtm-fitd',
      tag: 'ENTRY TACTIC 01',
      title: 'Foot-in-the-Door',
      keyPoints: [
        'Initial assessment or compact hardware refresh',
        'Entry via branch network deployment',
        'Build delivery trust to unlock follow-on scope',
      ],
      guardrail: 'Commercial entry tactic, not a corporate milestone',
      modal: {
        badge: 'Go-To-Market Tactic • Entry Offer',
        subtitle: 'Low-Friction Account Acquisition',
        title: 'Foot-in-the-Door: Practical Initial Scope to Earn Trust',
        summary: 'Offers an easily approved entry engagement so clients can validate execution reliability before committing to larger projects.',
        highlights: [
          'Examples: site assessment, focused device refresh, or branch connectivity scope.',
          'Objective: establish delivery credibility to expand into multi-portfolio solutions.',
          'Subject to standard QC, SLA adherence, and CRM account tracking.',
        ],
        footerLabel: 'Strategic Role',
        footerValue: 'Commercial Tactic — Separate from IPO/Tier III',
        accent: 'slate',
      },
    },
    {
      id: 'gtm-ll',
      tag: 'ENTRY TACTIC 02',
      title: 'Controlled Loss Leader',
      keyPoints: [
        'Applies only to pre-selected SKUs/services',
        'Strictly capped by qty, duration & budget',
        'Evaluated on total basket margin & risk',
      ],
      guardrail: 'Never price below cost without approval limits & profit analysis',
      modal: {
        badge: 'Go-To-Market Tactic • Margin Control',
        subtitle: 'Targeted Acquisition or Stock Movement Only',
        title: 'Controlled Loss Leader: Strict Caps & Total-Basket Math',
        summary: 'Selective price-lead items permitted only when backed by clear acquisition or slow-stock rationale and formal approval.',
        highlights: [
          'Must justify purpose: strategic account entry or clearing aged stock.',
          'Total basket profit contribution and margin erosion risk must be calculated upfront.',
          'Strictly prohibited as unapproved below-cost discounting.',
        ],
        footerLabel: 'Mandatory Control',
        footerValue: 'Qty/Time/Budget Cap + Finance/Director Sign-Off',
        accent: 'red',
      },
    },
  ],
  claimBoundary:
    'Claim Boundary: Neither IPO execution nor Tier III Data Center construction is presented as a certainty. Current ISO 9001 status (uncertified vs in progress) must be confirmed prior to any claim.',
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide27Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide27Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 27,
  folder: '27',
  sectionId: 8,
  navTitle: {
    in: 'Long-Term Strategic Horizon',
    en: 'Long-Term Strategic Horizon',
  },
  headerTitle: {
    in: 'Long-Term Strategic Horizon - ISO 9001, IPO, Data Center Tier III',
    en: 'Long-Term Strategic Horizon - ISO 9001, IPO, Data Center Tier III',
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
