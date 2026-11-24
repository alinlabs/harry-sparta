import { useLanguage } from '@/contexts/LanguageContext';
import type { CrossFunctionId, DecisionId, RequestCategoryId } from './utils';

export interface Slide23ModalPayload {
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

export interface FunctionLaneItem {
  id: CrossFunctionId;
  department: string;
  roleScope: string;
  handoffCue: string;
  modal: Slide23ModalPayload;
}

export interface RequestSampleCategory {
  id: RequestCategoryId;
  label: string;
  requestId: string;
  ownerDept: string;
  priority: string;
  status: string;
  approvalPath: string;
  resolutionCue: string;
}

export interface RaciDecisionRow {
  id: DecisionId;
  decision: string;
  sales: string;
  warehousePurch: string;
  technical: string;
  finance: string;
  managerDirector: string;
  modal: Slide23ModalPayload;
}

export interface Slide23Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  authorityCaveat: string;
  functionsSection: {
    title: string;
    lanes: FunctionLaneItem[];
  };
  ticketSection: {
    title: string;
    mockupLabel: string;
    fieldsTitle: string;
    fieldLabels: {
      requestId: string;
      category: string;
      requester: string;
      customerDeal: string;
      priority: string;
      ownerDept: string;
      dueDate: string;
      attachments: string;
      status: string;
      approval: string;
      resolution: string;
    };
    staticPlaceholders: {
      requester: string;
      customerDeal: string;
      dueDate: string;
      attachments: string;
    };
    categories: RequestSampleCategory[];
    ticketModal: Slide23ModalPayload;
  };
  raciSection: {
    title: string;
    legend: string;
    columns: {
      decision: string;
      sales: string;
      whPurch: string;
      tech: string;
      finance: string;
      mgrDir: string;
    };
    rows: RaciDecisionRow[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide23Data = {
  eyebrow: 'Koordinasi Lintas Departemen & Service Request',
  title: 'Cross-Functional Operating Model',
  subtitle:
    'Memastikan kebutuhan pelanggan berubah menjadi keputusan lintas fungsi yang terukur — mulai dari inquiry, validasi teknis, hingga penagihan.',
  authorityCaveat:
    'Batas Kewenangan: Manager Sales & Marketing memimpin koordinasi & mengusulkan perbaikan — tidak mengambil alih otoritas departemen lain tanpa mandat Direksi.',
  functionsSection: {
    title: '6 Pilar Fungsi Lintas Departemen',
    lanes: [
      {
        id: 'sales',
        department: 'Sales',
        roleScope: 'Discovery · Account · Pipeline · Commercial Terms',
        handoffCue: 'Buka request sebelum janji spek/harga',
        modal: {
          badge: 'Fungsi 01 • Sales',
          subtitle: 'Garda Depan Kebutuhan Pelanggan',
          title: 'Customer Discovery, Account Ownership & Commercial Terms',
          summary:
            'Memegang kepemilikan akun dan merangkum kebutuhan pelanggan menjadi permintaan lintas fungsi yang lengkap.',
          highlights: [
            'Menggali kebutuhan, anggaran, timeline & syarat komersial pelanggan.',
            'Dilarang menjanjikan ketersediaan unit, spek server/solusi, atau tempo tanpa approval.',
            'Menyerahkan deal menang via checklist handover ke tim pelaksana.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Kelengkapan Request & Handover Checklist',
          accent: 'slate'
        }
      },
      {
        id: 'warehouse-purchasing',
        department: 'Warehouse / Purchasing',
        roleScope: 'Stok · Kondisi QC · Lead Time · Aging · Update HPP',
        handoffCue: 'Konfirmasi stok siap jual & estimasi beli',
        modal: {
          badge: 'Fungsi 02 • Warehouse & Purchasing',
          subtitle: 'Ketersediaan Unit & Biaya Pengadaan',
          title: 'Stock Availability, Kondisi New/Second, Stock Ageing & Cost Update',
          summary:
            'Menjadi sumber kebenaran status fisik barang, kualitas QC, umur stok, serta lead time pengadaan vendor.',
          highlights: [
            'Memberi status real unit baru/second/refurbished beserta hasil uji fungsi.',
            'Menandai SKU aging/slow-moving agar diprioritaskan pada kampanye penjualan.',
            'Memasok pembaruan biaya beli/refurbish ke Finance sebagai input harga.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Alokasi Stok & Lead Time Pengadaan',
          accent: 'slate'
        }
      },
      {
        id: 'technical',
        department: 'Technical',
        roleScope: 'Validasi Solusi · Kompatibilitas · Scope · SLA · Garansi',
        handoffCue: 'Sign-off teknis Laptop, PC & Server',
        modal: {
          badge: 'Fungsi 03 • Tim Teknisi',
          subtitle: 'Keandalan Solusi & Purnajual',
          title: 'Solution Validation, Compatibility, Implementation Scope & Handover',
          summary:
            'Menjamin konfigurasi laptop, PC, server, jaringan, dan SLA purnajual benar-benar layak secara teknis.',
          highlights: [
            'Melakukan review kompatibilitas & scoping sebelum proposal B2B/B2G dikirim.',
            'Menetapkan batasan implementasi, garansi, serta jadwal instalasi.',
            'Melaksanakan handover teknis dan dokumentasi serah terima bersama pelanggan.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Technical Sign-Off & BAST Implementasi',
          accent: 'slate'
        }
      },
      {
        id: 'finance',
        department: 'Finance',
        roleScope: 'HPP · Pricing · Margin · Credit Approval · AR & Collection',
        handoffCue: 'Penjaga margin & keamanan piutang',
        modal: {
          badge: 'Fungsi 04 • Finance & Accounting',
          subtitle: 'Tata Kelola Profit & Arus Kas',
          title: 'HPP Governance, Margin Control, Credit Limit, Invoice & Collection',
          summary:
            'Mengawal validitas HPP, pengecualian diskon, risiko kredit pelanggan, hingga pelunasan piutang.',
          highlights: [
            'Menjaga akses rincian HPP berbasis peran (role-based access).',
            'Memberikan persetujuan kredit/tempo atau menahan pengiriman bila AR overdue.',
            'Menyelaraskan formula insentif berbasis gross margin dan penagihan.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Margin & Credit Approval Trail',
          accent: 'red'
        }
      },
      {
        id: 'marketing-creative',
        department: 'Marketing / Creative',
        roleScope: 'Positioning · Aset Kampanye · Lead Attribution · Customer Proof',
        handoffCue: 'Branding terpadu & demand generation',
        modal: {
          badge: 'Fungsi 05 • Marketing & Digital Creative',
          subtitle: 'Produksi Aset & Atribusi Prospek',
          title: 'Positioning, Campaign Assets, Lead Attribution & Customer Proof',
          summary:
            'Menyediakan materi kampanye, halaman landing/katalog, bukti solusi, dan pelacakan asal prospek.',
          highlights: [
            'Menyiapkan company profile, proposal template & konten edukasi produk/solusi.',
            'Mengukur konversi tiap kanal sehingga marketing terikat langsung ke pipeline.',
            'Berkoordinasi erat dengan Tim Teknis dan Sales untuk studi kasus yang sah.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Aset Kampanye & Lead Attribution',
          accent: 'slate'
        }
      },
      {
        id: 'hr',
        department: 'HR',
        roleScope: 'Rekrutmen · Onboarding · Grade · Insentif · Training · Evaluasi',
        handoffCue: 'Standar SDM, IDP & penilaian kuartalan',
        modal: {
          badge: 'Fungsi 06 • HRD',
          subtitle: 'Arsitektur Kapabilitas & Karier Tim',
          title: 'Recruitment, Onboarding, Grade, Incentive, Training & Performance',
          summary:
            'Menyokong kesiapan talenta komersial dari rekrutmen, kalibrasi grade, hingga sistem pelatihan terukur.',
          highlights: [
            'Menyelaraskan deskripsi peran, jenjang grade, dan kerangka evaluasi kinerja.',
            'Memformalkan program onboarding 15 sales eksisting dan rekrutmen baru.',
            'Mendukung tata kelola IDP dan jalur penyiapan calon Team Leader.'
          ],
          footerLabel: 'Fokus Handoff',
          footerValue: 'Grade, Training & Performance Records',
          accent: 'slate'
        }
      }
    ]
  },
  ticketSection: {
    title: 'Alur Service Request / Online Escalation Matrix (Tandem Manager / Owner)',
    mockupLabel: 'SIMULASI WORKFLOW TICKET',
    fieldsTitle: '11 Field Request Lintas Fungsi',
    fieldLabels: {
      requestId: 'Request ID',
      category: 'Category',
      requester: 'Requester',
      customerDeal: 'Customer / Deal',
      priority: 'Priority',
      ownerDept: 'Owner Dept',
      dueDate: 'Due Date',
      attachments: 'Attachments',
      status: 'Status',
      approval: 'Approval',
      resolution: 'Resolution'
    },
    staticPlaceholders: {
      requester: 'Nama Sales / Pemohon',
      customerDeal: 'Akun / ID Deal CRM',
      dueDate: 'Sesuai SLA',
      attachments: 'Spek / Quote / QC'
    },
    categories: [
      {
        id: 'stock-check',
        label: 'Stock Allocation',
        requestId: 'REQ-SIM-01',
        ownerDept: 'Warehouse / Purchasing',
        priority: 'Normal / Urgent Quote',
        status: 'Verifikasi Fisik',
        approval: 'Gudang + Purchasing',
        resolution: 'Kunci stok atau beri lead time pengadaan',
        resolutionCue: 'Cegah penjualan unit kosong'
      },
      {
        id: 'tech-sizing',
        label: 'Technical Validation',
        requestId: 'REQ-SIM-02',
        ownerDept: 'Technical Team',
        priority: 'Project / B2B',
        status: 'Review Spesifikasi',
        approval: 'Lead Teknisi / Engineer',
        resolution: 'Sign-off kompatibilitas & SLA garansi',
        resolutionCue: 'Wajib sebelum kirim proposal B2B'
      },
      {
        id: 'discount-request',
        label: 'Discount Exception',
        requestId: 'REQ-SIM-03',
        ownerDept: 'Manager / Finance / Owner',
        priority: 'Price Governance',
        status: 'Proses Approval',
        approval: 'Sales → Supv → Mgr → Owner/Fin',
        resolution: 'Setujui / tolak disertai audit margin',
        resolutionCue: 'Jejak tertulis di Online Price Request'
      },
      {
        id: 'credit-review',
        label: 'Credit Terms',
        requestId: 'REQ-SIM-04',
        ownerDept: 'Finance / Accounting',
        priority: 'Before Dispatch',
        status: 'Cek Limit & AR',
        approval: 'Finance + Direksi (Jika Over-limit)',
        resolution: 'Rilis DO atau wajib DP/COD',
        resolutionCue: 'Amankan arus kas sebelum kirim barang'
      }
    ].map((c) => ({
      id: c.id as RequestCategoryId,
      label: c.label,
      requestId: c.requestId,
      ownerDept: c.ownerDept,
      priority: c.priority,
      status: c.status,
      approvalPath: c.approval,
      resolutionCue: c.resolution
    })),
    ticketModal: {
      badge: 'Service Request & Audit Pain Point',
      subtitle: 'Audit Lintas Departemen 30 Hari Awal',
      title: 'Mengapa Online Request Matrix Diperlukan?',
      metric: '11 Field',
      metricLabel: 'Standar Ticket',
      summary:
        'Mengganti eskalasi lisan/chat yang sering hilang menjadi tiket terstruktur dengan pemilik, bukti, dan jejak persetujuan.',
      highlights: [
        'Menghilangkan saling lempar tanggung jawab antara Sales, Gudang, Teknisi, dan Finance.',
        'Merekam hambatan paling sering (pain point audit) untuk dasar perbaikan SOP nyata.',
        'SLA tiap kategori disepakati bersama kepala fungsi setelah audit waktu proses aktual.'
      ],
      footerLabel: 'Catatan Kewenangan',
      footerValue: 'Tandem Manager–Owner tanpa melangkahi otoritas departemen lain',
      accent: 'red'
    }
  },
  raciSection: {
    title: 'RACI Mini — 5 Keputusan Utama Lintas Fungsi',
    legend: 'R: Eksekusi · A: Pemutus · C: Masukan · I: Info',
    columns: {
      decision: 'Keputusan Utama',
      sales: 'Sales',
      whPurch: 'WH / Purch',
      tech: 'Technical',
      finance: 'Finance',
      mgrDir: 'Mgr / Direksi'
    },
    rows: [
      {
        id: 'stock-allocation',
        decision: '1. Stock Allocation',
        sales: 'R / I',
        warehousePurch: 'A / R',
        technical: 'C',
        finance: 'I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Keputusan 01',
          subtitle: 'Ketersediaan & Kunci Stok',
          title: 'Stock Allocation — Kewenangan Warehouse & Purchasing',
          summary:
            'Sales mengajukan kebutuhan alokasi; Warehouse/Purchasing memegang otoritas konfirmasi stok fisik, kondisi QC, dan pengadaan.',
          highlights: [
            'Mencegah dua sales mengklaim stok unit second yang sama.',
            'Purchasing dilibatkan jika stok kosong dan butuh lead time pengadaan.'
          ],
          footerLabel: 'Pemilik Keputusan (A)',
          footerValue: 'Warehouse / Purchasing Head',
          accent: 'slate'
        }
      },
      {
        id: 'technical-validation',
        decision: '2. Technical Validation',
        sales: 'C / I',
        warehousePurch: 'C',
        technical: 'A / R',
        finance: 'I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Keputusan 02',
          subtitle: 'Kelayakan Solusi & Infrastruktur',
          title: 'Technical Validation — Kewenangan Tim Teknisi',
          summary:
            'Teknisi memvalidasi kompatibilitas hardware, server, instalasi, serta ruang lingkup garansi sebelum proposal keluar.',
          highlights: [
            'Wajib untuk penawaran solusi B2B maupun paket pengadaan B2G.',
            'Menghindari risiko klaim SLA yang tidak mampu dipenuhi operasional.'
          ],
          footerLabel: 'Pemilik Keputusan (A)',
          footerValue: 'Technical Lead / Senior Engineer',
          accent: 'slate'
        }
      },
      {
        id: 'discount-exception',
        decision: '3. Discount Exception',
        sales: 'R',
        warehousePurch: 'C',
        technical: 'I',
        finance: 'C / A',
        managerDirector: 'A',
        modal: {
          badge: 'RACI Keputusan 03',
          subtitle: 'Kontrol Margin & Harga Jual',
          title: 'Discount Exception — Berjenjang Manager, Finance & Direksi',
          summary:
            'Penurunan harga di bawah kewenangan standar sales harus melewati review margin Finance/Manager atau persetujuan Owner.',
          highlights: [
            'Setiap pengecualian memakai form Online Price Request dan audit log.',
            'Sales tidak memegang rincian penuh struktur HPP internal.'
          ],
          footerLabel: 'Pemilik Keputusan (A)',
          footerValue: 'Manager / Finance / Owner sesuai tier',
          accent: 'red'
        }
      },
      {
        id: 'credit-terms',
        decision: '4. Credit Terms',
        sales: 'R',
        warehousePurch: 'I',
        technical: 'I',
        finance: 'A / R',
        managerDirector: 'A',
        modal: {
          badge: 'RACI Keputusan 04',
          subtitle: 'Risiko Piutang & Tempo',
          title: 'Credit Terms — Otoritas Finance & Direksi',
          summary:
            'Finance menilai riwayat bayar, limit kredit, serta status AR overdue sebelum barang diizinkan keluar gudang.',
          highlights: [
            'Order berisiko tinggi dialihkan ke skema DP/COD atau menunggu persetujuan Direksi.',
            'Melindungi arus kas perusahaan saat mengejar target omzet.'
          ],
          footerLabel: 'Pemilik Keputusan (A)',
          footerValue: 'Finance (dan Direksi untuk pengecualian)',
          accent: 'red'
        }
      },
      {
        id: 'project-handover',
        decision: '5. Project Handover',
        sales: 'R',
        warehousePurch: 'R',
        technical: 'R / A',
        finance: 'C / I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Keputusan 05',
          subtitle: 'Transisi Closing ke Implementasi',
          title: 'Project Handover — Checklist Terstandar Lintas Fungsi',
          summary:
            'Memastikan detail kontrak, jadwal kirim, instalasi teknis, dan termin penagihan tersampaikan lengkap setelah PO diterima.',
          highlights: [
            'Menggunakan handover checklist tertulis sebelum tim teknis dan gudang bergerak.',
            'Menutup celah miskomunikasi ekspektasi klien antara pre-sales dan delivery.'
          ],
          footerLabel: 'Pemilik Keputusan (A)',
          footerValue: 'Technical / Operations Lead sesuai scope',
          accent: 'slate'
        }
      }
    ]
  },
  evidenceFooter:
    'Data Diperlukan: SOP dan waktu proses aktual antar-departemen, audit pain point penyebab keterlambatan, sistem ticketing/request eksisting, approval matrix & daftar pihak berwenang.'
};

export const slideDataEn: Slide23Data = {
  eyebrow: 'Interdepartmental Coordination & Service Request',
  title: 'Cross-Functional Operating Model',
  subtitle:
    'Ensuring customer promises turn into accountable cross-functional decisions — from initial inquiry and technical sign-off through collection.',
  authorityCaveat:
    'Authority Boundary: Sales & Marketing Manager leads coordination and proposes fixes — never overrides another department’s operational authority without Director mandate.',
  functionsSection: {
    title: '6 Cross-Functional Pillars',
    lanes: [
      {
        id: 'sales',
        department: 'Sales',
        roleScope: 'Discovery · Account · Pipeline · Commercial Terms',
        handoffCue: 'Submit request before spec/price promises',
        modal: {
          badge: 'Function 01 • Sales',
          subtitle: 'Frontline Customer Interface',
          title: 'Customer Discovery, Account Ownership & Commercial Terms',
          summary:
            'Owns account relationships and translates client needs into complete cross-functional requests.',
          highlights: [
            'Captures real business needs, budget, timeline, and commercial terms.',
            'Prohibited from promising stock, server specs, or credit without clearance.',
            'Transfers won deals via written handover checklist to delivery teams.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Complete Request Brief & Handover Checklist',
          accent: 'slate'
        }
      },
      {
        id: 'warehouse-purchasing',
        department: 'Warehouse / Purchasing',
        roleScope: 'Stock · QC Grade · Lead Time · Aging · Cost Updates',
        handoffCue: 'Confirm sellable stock & procurement ETA',
        modal: {
          badge: 'Function 02 • Warehouse & Purchasing',
          subtitle: 'Physical Inventory & Sourcing Lead Time',
          title: 'Stock Availability, New/Second QC, Stock Aging & Cost Updates',
          summary:
            'Serves as the single truth for physical stock status, QC grading, inventory age, and supplier lead times.',
          highlights: [
            'Confirms exact new/second/refurbished condition and QC readiness.',
            'Flags slow-moving aging SKUs for coordinated commercial campaigns.',
            'Feeds updated purchase and refurbishment costs to Finance.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Stock Allocation & Sourcing Lead Times',
          accent: 'slate'
        }
      },
      {
        id: 'technical',
        department: 'Technical',
        roleScope: 'Solution Check · Compatibility · Scope · SLA · Warranty',
        handoffCue: 'Technical sign-off on Laptop, PC & Server',
        modal: {
          badge: 'Function 03 • Technical Team',
          subtitle: 'Solution Feasibility & After-Sales',
          title: 'Solution Validation, Compatibility, Implementation Scope & Handover',
          summary:
            'Validates that proposed laptops, PCs, servers, networking, and SLAs are technically deliverable.',
          highlights: [
            'Runs compatibility and sizing checks prior to releasing B2B/B2G proposals.',
            'Defines implementation scope, warranty coverage, and installation schedule.',
            'Executes technical handover and formal client acceptance sign-off.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Technical Sign-Off & Acceptance Records',
          accent: 'slate'
        }
      },
      {
        id: 'finance',
        department: 'Finance',
        roleScope: 'COGS/HPP · Pricing · Margin · Credit Approval · AR',
        handoffCue: 'Guardian of margin floors & receivables',
        modal: {
          badge: 'Function 04 • Finance & Accounting',
          subtitle: 'Profitability & Working-Capital Control',
          title: 'HPP Governance, Margin Control, Credit Limit, Billing & Collection',
          summary:
            'Safeguards cost integrity, discount exceptions, customer credit limits, and timely collection.',
          highlights: [
            'Maintains role-based access control over detailed SKU cost structures.',
            'Approves credit terms or places dispatch holds on overdue accounts.',
            'Aligns sales incentive calculations to net margin and collected cash.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Margin & Credit Approval Trail',
          accent: 'red'
        }
      },
      {
        id: 'marketing-creative',
        department: 'Marketing / Creative',
        roleScope: 'Positioning · Campaign Assets · Attribution · Proof',
        handoffCue: 'Cohesive branding & demand generation',
        modal: {
          badge: 'Function 05 • Marketing & Digital Creative',
          subtitle: 'Collateral Production & Attribution',
          title: 'Positioning, Campaign Assets, Lead Attribution & Customer Proof',
          summary:
            'Produces cohesive collateral, digital campaigns, solution proof points, and measurable lead tracking.',
          highlights: [
            'Builds company profiles, solution brochures, and digital campaign assets.',
            'Tracks lead attribution so creative effort links directly to sales pipeline.',
            'Coordinates with Technical and Sales to publish verified solution stories.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Campaign Assets & Lead Attribution',
          accent: 'slate'
        }
      },
      {
        id: 'hr',
        department: 'HR',
        roleScope: 'Hiring · Onboarding · Grade · Incentives · Training · Review',
        handoffCue: 'People architecture, IDP & quarterly reviews',
        modal: {
          badge: 'Function 06 • HRD',
          subtitle: 'Talent Capability & Career Architecture',
          title: 'Recruitment, Onboarding, Grade, Incentive, Training & Performance',
          summary:
            'Supports hiring, role grading, onboarding discipline, training calendars, and quarterly reviews.',
          highlights: [
            'Aligns formal role scorecards, grade frameworks, and performance policies.',
            'Structures onboarding for the 15 current reps and upcoming hires.',
            'Co-governs IDP tracking and future Team Leader progression.'
          ],
          footerLabel: 'Handoff Focus',
          footerValue: 'Grade, Training & Performance Records',
          accent: 'slate'
        }
      }
    ]
  },
  ticketSection: {
    title: 'Service Request / Online Escalation Matrix (Manager / Owner Tandem)',
    mockupLabel: 'WORKFLOW TICKET MOCKUP',
    fieldsTitle: '11 Cross-Functional Request Fields',
    fieldLabels: {
      requestId: 'Request ID',
      category: 'Category',
      requester: 'Requester',
      customerDeal: 'Customer / Deal',
      priority: 'Priority',
      ownerDept: 'Owner Dept',
      dueDate: 'Due Date',
      attachments: 'Attachments',
      status: 'Status',
      approval: 'Approval',
      resolution: 'Resolution'
    },
    staticPlaceholders: {
      requester: 'Sales Rep / Requester',
      customerDeal: 'Account / CRM Deal ID',
      dueDate: 'Per Dept SLA',
      attachments: 'Specs / Quote / QC'
    },
    categories: [
      {
        id: 'stock-check',
        label: 'Stock Allocation',
        requestId: 'REQ-SIM-01',
        ownerDept: 'Warehouse / Purchasing',
        priority: 'Normal / Urgent Quote',
        status: 'Stock Check',
        approval: 'Warehouse + Purchasing',
        resolution: 'Lock unit or confirm vendor lead time',
        resolutionCue: 'Prevents selling out-of-stock SKUs'
      },
      {
        id: 'tech-sizing',
        label: 'Technical Validation',
        requestId: 'REQ-SIM-02',
        ownerDept: 'Technical Team',
        priority: 'Project / B2B',
        status: 'Spec Review',
        approval: 'Technical Lead / Engineer',
        resolution: 'Sign off compatibility & warranty SLA',
        resolutionCue: 'Mandatory prior to B2B quotes'
      },
      {
        id: 'discount-request',
        label: 'Discount Exception',
        requestId: 'REQ-SIM-03',
        ownerDept: 'Manager / Finance / Owner',
        priority: 'Price Governance',
        status: 'Pending Approval',
        approval: 'Sales → Supv → Mgr → Owner/Fin',
        resolution: 'Approve/reject with margin audit log',
        resolutionCue: 'Recorded via Online Price Request'
      },
      {
        id: 'credit-review',
        label: 'Credit Terms',
        requestId: 'REQ-SIM-04',
        ownerDept: 'Finance / Accounting',
        priority: 'Before Dispatch',
        status: 'AR & Limit Check',
        approval: 'Finance + Director (Over-Limit)',
        resolution: 'Release DO or enforce DP/COD',
        resolutionCue: 'Protects cash prior to dispatch'
      }
    ].map((c) => ({
      id: c.id as RequestCategoryId,
      label: c.label,
      requestId: c.requestId,
      ownerDept: c.ownerDept,
      priority: c.priority,
      status: c.status,
      approvalPath: c.approval,
      resolutionCue: c.resolution
    })),
    ticketModal: {
      badge: 'Service Request & Pain-Point Audit',
      subtitle: 'First-30-Day Cross-Department Audit',
      title: 'Why a Structured Online Request Workflow?',
      metric: '11 Fields',
      metricLabel: 'Ticket Standard',
      summary:
        'Replaces informal chat escalations with traceable tickets carrying clear owners, due dates, evidence, and approval trails.',
      highlights: [
        'Eliminates finger-pointing across Sales, Warehouse, Technical, and Finance.',
        'Surfaces recurring bottleneck pain points for evidence-based SOP fixes.',
        'Category SLAs are agreed jointly with functional heads after measuring actual baselines.'
      ],
      footerLabel: 'Authority Note',
      footerValue: 'Manager–Owner tandem without bypassing departmental authority',
      accent: 'red'
    }
  },
  raciSection: {
    title: 'Mini RACI — 5 Core Cross-Functional Decisions',
    legend: 'R: Exec · A: Approver · C: Consult · I: Info',
    columns: {
      decision: 'Core Decision',
      sales: 'Sales',
      whPurch: 'WH / Purch',
      tech: 'Technical',
      finance: 'Finance',
      mgrDir: 'Mgr / Director'
    },
    rows: [
      {
        id: 'stock-allocation',
        decision: '1. Stock Allocation',
        sales: 'R / I',
        warehousePurch: 'A / R',
        technical: 'C',
        finance: 'I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Decision 01',
          subtitle: 'Availability & Reservation',
          title: 'Stock Allocation — Warehouse & Purchasing Authority',
          summary:
            'Sales requests allocation; Warehouse/Purchasing owns physical stock confirmation, QC grade, and sourcing ETA.',
          highlights: [
            'Stops overlapping sales claims on scarce refurbished units.',
            'Brings Purchasing in early whenever replenishment lead times apply.'
          ],
          footerLabel: 'Decision Owner (A)',
          footerValue: 'Warehouse / Purchasing Lead',
          accent: 'slate'
        }
      },
      {
        id: 'technical-validation',
        decision: '2. Technical Validation',
        sales: 'C / I',
        warehousePurch: 'C',
        technical: 'A / R',
        finance: 'I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Decision 02',
          subtitle: 'Solution & Infrastructure Fit',
          title: 'Technical Validation — Engineering Sign-Off',
          summary:
            'Engineers confirm hardware compatibility, server sizing, implementation effort, and SLA scope prior to quoting.',
          highlights: [
            'Mandatory gate for B2B architecture quotes and B2G tenders.',
            'Prevents signing unfeasible SLA or warranty commitments.'
          ],
          footerLabel: 'Decision Owner (A)',
          footerValue: 'Technical Lead / Senior Engineer',
          accent: 'slate'
        }
      },
      {
        id: 'discount-exception',
        decision: '3. Discount Exception',
        sales: 'R',
        warehousePurch: 'C',
        technical: 'I',
        finance: 'C / A',
        managerDirector: 'A',
        modal: {
          badge: 'RACI Decision 03',
          subtitle: 'Margin Floor Governance',
          title: 'Discount Exception — Tiered Manager, Finance & Owner Approval',
          summary:
            'Any price concession below sales authority routes through Finance/Manager margin review or Director sign-off.',
          highlights: [
            'Logged via Online Price Request with competitive rationale.',
            'Keeps full underlying COGS structures restricted by role.'
          ],
          footerLabel: 'Decision Owner (A)',
          footerValue: 'Manager / Finance / Owner per authority matrix',
          accent: 'red'
        }
      },
      {
        id: 'credit-terms',
        decision: '4. Credit Terms',
        sales: 'R',
        warehousePurch: 'I',
        technical: 'I',
        finance: 'A / R',
        managerDirector: 'A',
        modal: {
          badge: 'RACI Decision 04',
          subtitle: 'Receivables & Payment Risk',
          title: 'Credit Terms — Finance & Director Clearance',
          summary:
            'Finance evaluates payment history, credit caps, and overdue AR status before authorizing dispatch.',
          highlights: [
            'Shifts high-risk accounts to upfront DP/COD or escalates to Director approval.',
            'Safeguards working capital alongside revenue expansion.'
          ],
          footerLabel: 'Decision Owner (A)',
          footerValue: 'Finance (and Director for exceptions)',
          accent: 'red'
        }
      },
      {
        id: 'project-handover',
        decision: '5. Project Handover',
        sales: 'R',
        warehousePurch: 'R',
        technical: 'R / A',
        finance: 'C / I',
        managerDirector: 'I',
        modal: {
          badge: 'RACI Decision 05',
          subtitle: 'Closed-Won to Fulfillment',
          title: 'Project Handover — Standardized Multi-Team Checklist',
          summary:
            'Transfers exact PO scope, delivery timing, installation plan, and billing milestones cleanly post-close.',
          highlights: [
            'Uses a written handover checklist before engineering or warehouse mobilization.',
            'Eliminates scope drift between sales promises and delivery teams.'
          ],
          footerLabel: 'Decision Owner (A)',
          footerValue: 'Technical / Operations Lead per project scope',
          accent: 'slate'
        }
      }
    ]
  },
  evidenceFooter:
    'Required Data: Current cross-department SOPs & actual turnaround times, primary delay pain-point audit, existing ticketing/request tools, approval matrix & authorized signers.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide23Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide23Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 23,
  folder: '23',
  sectionId: 7,
  navTitle: {
    in: 'Cross-Functional Operating Model',
    en: 'Cross-Functional Operating Model'
  },
  headerTitle: {
    in: 'Cross-Functional Operating Model - Sales, Warehouse, Purchasing, Finance, Technical, HR, Creative',
    en: 'Cross-Functional Operating Model - Sales, Warehouse, Purchasing, Finance, Technical, HR, Creative'
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
