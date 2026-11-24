import { useLanguage } from '@/contexts/LanguageContext';

export interface Slide19ModalPayload {
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

export interface PriceRequestFieldItem {
  key: string;
  label: string;
  salesValue: string;
  approverValue: string;
  isRestrictedForSales?: boolean;
}

export interface ApprovalStageItem {
  id: string;
  step: string;
  role: string;
  ruleCue: string;
  modal: Slide19ModalPayload;
}

export interface GovernancePolicyCard {
  id: string;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide19ModalPayload;
}

export interface Slide19Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  accessRuleCue: string;
  mockupSection: {
    sectionTitle: string;
    simulationLabel: string;
    roleToggleLabel: string;
    roleLabels: {
      sales: string;
      approver: string;
    };
    hppPolicyNote: string;
    fields: PriceRequestFieldItem[];
    mockupModal: Slide19ModalPayload;
  };
  approvalSection: {
    sectionTitle: string;
    thresholdCaveat: string;
    stages: ApprovalStageItem[];
  };
  formulaSection: {
    sectionTitle: string;
    marginTitle: string;
    marginFormula: string;
    markupTitle: string;
    markupFormula: string;
    simExampleLabel: string;
    simHpp: number;
    simPrice: number;
    simWarning: string;
    formulaModal: Slide19ModalPayload;
  };
  policyCards: GovernancePolicyCard[];
  evidenceFooter: string;
}

export const slideDataId: Slide19Data = {
  eyebrow: "Disiplin Profitabilitas & Kendali Diskon",
  title: "Pricing Governance: HPP, Harga Jual, Margin, dan Approval",
  subtitle:
    "Menata harga berdasarkan HPP konsisten, segmen, kondisi barang, dan otoritas berjenjang agar pertumbuhan volume tidak menggerus margin.",
  accessRuleCue: "Akses HPP Terbatas per Peran (Role-Based Access + Audit Log)",
  mockupSection: {
    sectionTitle: "Form Online Price Request",
    simulationLabel: "SIMULASI RANCANGAN FORM (Bukan Sistem Live • Tanpa Angka Riil)",
    roleToggleLabel: "Simulasi Akses:",
    roleLabels: {
      sales: "View: Sales",
      approver: "View: Manager / Finance / Owner"
    },
    hppPolicyNote: "HPP mencakup harga beli + refurbish/servis + transport/handling + biaya pendukung konsisten",
    fields: [
      { key: "req-id", label: "Request ID", salesValue: "PR-001", approverValue: "PR-001" },
      { key: "owner", label: "Sales Owner", salesValue: "Nama Sales / Segmen", approverValue: "Nama Sales / Segmen" },
      { key: "cust", label: "Customer / Segment", salesValue: "B2B / Reseller", approverValue: "B2B / Reseller" },
      { key: "sku", label: "SKU / Serial & Condition", salesValue: "Unit + Grade / Garansi", approverValue: "Unit + Grade / Garansi" },
      {
        key: "hpp",
        label: "HPP Breakdown",
        salesValue: "Terbatas (Role-Gated)",
        approverValue: "Beli + Refurbish + Transport",
        isRestrictedForSales: true
      },
      { key: "list", label: "List Price", salesValue: "Harga List Segmen", approverValue: "Harga List Segmen" },
      { key: "proposed", label: "Proposed Price", salesValue: "Harga Usulan", approverValue: "Harga Usulan" },
      {
        key: "margin",
        label: "Gross Margin %",
        salesValue: "Status Approval",
        approverValue: "Cek Floor Margin Aktual",
        isRestrictedForSales: true
      },
      { key: "discount", label: "Requested Discount", salesValue: "% Diskon Diajukan", approverValue: "% Diskon Diajukan" },
      { key: "stock-age", label: "Stock Age", salesValue: "Usia Stok Gudang", approverValue: "Usia Stok Gudang" },
      { key: "reason", label: "Reason / Competitor", salesValue: "Justifikasi Tertulis", approverValue: "Justifikasi & Bukti" },
      { key: "valid", label: "Valid-Until & History", salesValue: "Masa Berlaku Quote", approverValue: "Masa Berlaku + Audit Log" }
    ],
    mockupModal: {
      badge: "Simulasi Sistem • Online Price Request",
      subtitle: "Rancangan Tata Kelola Permintaan Harga",
      title: "12 Field Wajib Request Harga dengan Akses HPP Berjenjang",
      metric: "Simulasi",
      metricLabel: "Rancangan Usulan",
      summary:
        "Menggantikan persetujuan harga lisan/chat menjadi alur terstruktur yang menampilkan komponen HPP hanya kepada pihak berwenang.",
      highlights: [
        "Menghitung HPP secara konsisten dari harga beli, biaya refurbish/servis, transport/handling, dan biaya pendukung.",
        "Membatasi visibilitas HPP mentah pada peran Sales biasa sambil tetap menampilkan status kelayakan approval.",
        "Mencatat setiap pengajuan, alasan kompetitor, batas masa berlaku, dan riwayat persetujuan."
      ],
      footerLabel: "Status",
      footerValue: "Rancangan simulasi — dikalibrasi dengan struktur Finance & sistem aktif",
      accent: "slate"
    }
  },
  approvalSection: {
    sectionTitle: "Alur Approval Harga",
    thresholdCaveat: "Ambang Diskon & Floor Margin Ditetapkan Bersama Finance & Direksi (Tanpa Angka Rekaan)",
    stages: [
      {
        id: "app-sales",
        step: "01",
        role: "Sales",
        ruleCue: "Ajukan form + justifikasi",
        modal: {
          badge: "Level 01 • Sales",
          subtitle: "Inisiasi Pengajuan Harga",
          title: "Pengajuan Harga Sesuai Segmen, Kondisi & Alasan Tertulis",
          summary:
            "Sales mengajukan usulan harga dengan melengkapi segmen, SKU/kondisi, usia stok, dan bukti justifikasi.",
          highlights: [
            "Mengikuti harga list segmen (Retail, Distribusi, B2B, B2G) bila tidak ada deviasi.",
            "Menyerahkan konteks kompetitor atau kebutuhan volume bila mengajukan potongan."
          ],
          footerLabel: "Batas",
          footerValue: "Dilarang menjanjikan diskon di luar kewenangan sebelum disetujui",
          accent: "slate"
        }
      },
      {
        id: "app-spv",
        step: "02",
        role: "Supervisor",
        ruleCue: "Cek kelengkapan & tier awal",
        modal: {
          badge: "Level 02 • Supervisor",
          subtitle: "Verifikasi Awal",
          title: "Pemeriksaan Kelengkapan Alasan & Batas Kewenangan Awal",
          summary:
            "Memastikan pengajuan memiliki dasar kebutuhan jelas dan berada dalam koridor kebijakan dasar.",
          highlights: [
            "Menyaring permintaan diskon tanpa data pembanding atau alasan komersial yang kuat.",
            "Meneruskan eskalasi ke Manager bila melewati batas kewenangan Supervisor."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Ambang kewenangan menunggu ketetapan resmi Finance",
          accent: "slate"
        }
      },
      {
        id: "app-mgr",
        step: "03",
        role: "Manager",
        ruleCue: "Evaluasi margin & solusi",
        modal: {
          badge: "Level 03 • Manager Sales & Marketing",
          subtitle: "Tinjauan Margin & Nilai Akun",
          title: "Evaluasi Gross Margin, Bundling & Strategi Akun",
          summary:
            "Menilai apakah harga usulan menjaga kesehatan margin serta opsi alternatif seperti bundling atau penyesuaian scope.",
          highlights: [
            "Melihat breakdown HPP, gross margin setelah diskon, dan histori pembelian akun.",
            "Meneruskan ke Owner/Finance bila melampaui floor margin yang diizinkan."
          ],
          footerLabel: "Kontrol",
          footerValue: "Tercatat otomatis dalam audit log persetujuan",
          accent: "slate"
        }
      },
      {
        id: "app-owner",
        step: "04",
        role: "Owner / Finance",
        ruleCue: "Bila melewati batas floor",
        modal: {
          badge: "Level 04 • Owner / Finance",
          subtitle: "Otorisasi Pengecualian (Exception)",
          title: "Keputusan Strategis di Luar Floor Margin atau Termin Khusus",
          summary:
            "Mengambil keputusan akhir atas harga strategis, tender besar, atau penyesuaian khusus yang melampaui ambang normal.",
          highlights: [
            "Memastikan pertimbangan arus kas, credit limit, dan dampak laba bersih sudah diuji Finance.",
            "Memberi keputusan tertulis berbatas waktu berlaku (valid-until)."
          ],
          footerLabel: "Prinsip",
          footerValue: "Setiap exception tercatat beserta alasan & batas waktu",
          accent: "red"
        }
      }
    ]
  },
  formulaSection: {
    sectionTitle: "Rumus Margin vs Markup",
    marginTitle: "Gross Margin %",
    marginFormula: "(Harga Jual Bersih - HPP) / Harga Jual Bersih",
    markupTitle: "Markup %",
    markupFormula: "(Harga Jual Bersih - HPP) / HPP",
    simExampleLabel: "Simulasi: HPP 100 → Jual 125",
    simHpp: 100,
    simPrice: 125,
    simWarning: "Selalu lebih rendah dari Markup % — salah rumus menggerus profit riil",
    formulaModal: {
      badge: "Literasi Margin • Jangan Tertukar",
      subtitle: "Perbandingan Gross Margin % vs Markup %",
      title: "Mengapa Markup % Tidak Boleh Disamakan dengan Gross Margin %",
      metric: "20% vs 25%",
      metricLabel: "Simulasi (100 → 125)",
      summary:
        "Gross Margin dihitung dari harga jual bersih (pendapatan), sedangkan Markup dihitung dari HPP (biaya modal).",
      highlights: [
        "Rumus Gross Margin % = (Harga Jual Bersih - HPP) / Harga Jual Bersih.",
        "Rumus Markup % = (Harga Jual Bersih - HPP) / HPP.",
        "Contoh simulasi: HPP 100 dijual 125 menghasilkan Markup 25%, namun Gross Margin riilnya hanya 20% — diskon 20% langsung menihilkan margin."
      ],
      footerLabel: "Disiplin",
      footerValue: "Semua batas kewenangan harga menggunakan acuan Gross Margin %",
      accent: "red"
    }
  },
  policyCards: [
    {
      id: "old-stock-pricing",
      tag: "Stok Menua",
      title: "Kontrol Harga Stok Lama",
      keywords: "Bundling • Channel khusus • Campaign terbatas",
      modal: {
        badge: "Kebijakan • Harga Stok Lama",
        subtitle: "Pemulihan Nilai Persediaan",
        title: "Alternatif Terkendali Selain Langsung Banting Harga",
        metric: "4 Opsi",
        metricLabel: "Jalur Penyaluran",
        summary:
          "Stok berumur tua ditangani dengan paket nilai tambah dan kanal terarah agar tidak merusak pasar harga utama.",
        highlights: [
          "Memanfaatkan bundling new + refurbished atau paket aksesori untuk menjaga nilai jual.",
          "Menyalurkan lewat channel khusus atau campaign berdurasi terbatas atas persetujuan pimpinan.",
          "Penyesuaian harga turun dilakukan terkontrol berbasis audit stok dan persetujuan Finance."
        ],
        footerLabel: "Aturan",
        footerValue: "Hindari pemotongan harga massal tanpa justifikasi umur stok",
        accent: "slate"
      }
    },
    {
      id: "margin-incentive",
      tag: "Selaras Profit",
      title: "Insentif Berbasis Margin & AR",
      keywords: "Gross profit • Kepatuhan harga • Kualitas bayar",
      modal: {
        badge: "Kebijakan • Skema Insentif",
        subtitle: "Menjaga Kualitas Penjualan",
        title: "Menghubungkan Komisi ke Gross Profit, Kepatuhan Harga & Pembayaran",
        metric: "Finance + HR",
        metricLabel: "Penetapan Final",
        summary:
          "Mendorong perilaku jual bernilai dengan menimbang laba kotor, disiplin harga, dan pelunasan piutang pelanggan.",
        highlights: [
          "Tidak hanya mengejar omzet kotor yang berisiko memicu diskon agresif dan piutang macet.",
          "Menghargai kepatuhan atas harga standar dan kualitas penagihan aktual.",
          "Formula insentif/komisi final ditetapkan bersama Finance, HR, dan Direksi."
        ],
        footerLabel: "Batas Klaim",
        footerValue: "Formula komisi final belum ditetapkan — menunggu persetujuan Finance & HR",
        accent: "red"
      }
    }
  ],
  evidenceFooter:
    "Data Diperlukan: HPP aktual per SKU/condition, biaya refurbish/handling, harga jual historis, kebijakan diskon & approval aktif, credit limit, tempo pembayaran, serta kebijakan komisi Finance/HR."
};

export const slideDataEn: Slide19Data = {
  eyebrow: "Profitability Discipline & Discount Control",
  title: "Pricing Governance: COGS (HPP), Pricing, Margin & Approval",
  subtitle:
    "Structuring prices around consistent HPP, customer segment, unit condition, and tiered approvals so revenue growth never erodes margin.",
  accessRuleCue: "Role-Based COGS (HPP) Visibility + Full Approval Audit Log",
  mockupSection: {
    sectionTitle: "Online Price Request Form",
    simulationLabel: "PROPOSED FORM SIMULATION (Not Live System • No Invented Figures)",
    roleToggleLabel: "Access Simulation:",
    roleLabels: {
      sales: "View: Sales",
      approver: "View: Manager / Finance / Owner"
    },
    hppPolicyNote: "COGS (HPP) includes purchase cost + refurbish/service + transport/handling + consistent direct costs",
    fields: [
      { key: "req-id", label: "Request ID", salesValue: "PR-001", approverValue: "PR-001" },
      { key: "owner", label: "Sales Owner", salesValue: "Rep Name / Segment", approverValue: "Rep Name / Segment" },
      { key: "cust", label: "Customer / Segment", salesValue: "B2B / Reseller", approverValue: "B2B / Reseller" },
      { key: "sku", label: "SKU / Serial & Condition", salesValue: "Unit + Grade / Warranty", approverValue: "Unit + Grade / Warranty" },
      {
        key: "hpp",
        label: "HPP Breakdown",
        salesValue: "Restricted (Role-Gated)",
        approverValue: "Buy Cost + Refurb + Freight",
        isRestrictedForSales: true
      },
      { key: "list", label: "List Price", salesValue: "Segment List Price", approverValue: "Segment List Price" },
      { key: "proposed", label: "Proposed Price", salesValue: "Proposed Price", approverValue: "Proposed Price" },
      {
        key: "margin",
        label: "Gross Margin %",
        salesValue: "Approval Status",
        approverValue: "Actual Post-Discount Margin",
        isRestrictedForSales: true
      },
      { key: "discount", label: "Requested Discount", salesValue: "Requested % Discount", approverValue: "Requested % Discount" },
      { key: "stock-age", label: "Stock Age", salesValue: "Warehouse Aging Tier", approverValue: "Warehouse Aging Tier" },
      { key: "reason", label: "Reason / Competitor", salesValue: "Written Rationale", approverValue: "Rationale & Proof" },
      { key: "valid", label: "Valid-Until & History", salesValue: "Quote Expiry Date", approverValue: "Expiry + Audit Log" }
    ],
    mockupModal: {
      badge: "System Simulation • Online Price Request",
      subtitle: "Proposed Governance Workflow",
      title: "12 Mandatory Request Fields With Tiered COGS Access",
      metric: "Simulation",
      metricLabel: "Proposed Mockup",
      summary:
        "Replaces ad-hoc chat discounts with a traceable request workflow that keeps raw COGS gated by role.",
      highlights: [
        "Builds HPP consistently from purchase price, refurbishing/service, handling/transport, and direct costs.",
        "Hides raw HPP breakdowns from standard sales views while showing clear approval routing.",
        "Captures justification, expiry date, and full approval decisions in an immutable audit log."
      ],
      footerLabel: "Status",
      footerValue: "Design mockup — calibrated alongside Finance policy & active tools",
      accent: "slate"
    }
  },
  approvalSection: {
    sectionTitle: "Price Approval Flow",
    thresholdCaveat: "Discount Thresholds & Margin Floors Are Set Jointly With Finance & Directors (Never Assumed)",
    stages: [
      {
        id: "app-sales",
        step: "01",
        role: "Sales",
        ruleCue: "Submit form + rationale",
        modal: {
          badge: "Level 01 • Sales",
          subtitle: "Price Request Initiation",
          title: "Segment-Aligned Quote & Written Exception Rationale",
          summary:
            "Reps submit price requests with customer segment, unit condition, stock age, and commercial rationale.",
          highlights: [
            "Quotes within published list prices proceed without escalation.",
            "Discount requests must attach clear competitive or volume context."
          ],
          footerLabel: "Guardrail",
          footerValue: "Never promise below-floor discounts prior to written sign-off",
          accent: "slate"
        }
      },
      {
        id: "app-spv",
        step: "02",
        role: "Supervisor",
        ruleCue: "Verify case & first tier",
        modal: {
          badge: "Level 02 • Supervisor",
          subtitle: "First-Line Screening",
          title: "Rationale Check & Entry-Tier Authority",
          summary:
            "Screens out unsubstantiated discount requests and verifies initial approval boundaries.",
          highlights: [
            "Ensures competitive claims or volume deals carry documented evidence.",
            "Escalates out-of-band requests upward to Manager."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Exact numeric bands await Finance policy sign-off",
          accent: "slate"
        }
      },
      {
        id: "app-mgr",
        step: "03",
        role: "Manager",
        ruleCue: "Review margin & bundle",
        modal: {
          badge: "Level 03 • Sales & Marketing Manager",
          subtitle: "Margin & Account Review",
          title: "Gross Margin Defense, Bundling & Account Trade-Offs",
          summary:
            "Evaluates post-discount margin and alternative structures such as bundling or revised hardware mix.",
          highlights: [
            "Inspects full HPP breakdown, post-discount margin, and customer order history.",
            "Routes exceptions below approved margin floors upward to Owner/Finance."
          ],
          footerLabel: "Control",
          footerValue: "Every decision logged in the approval history trail",
          accent: "slate"
        }
      },
      {
        id: "app-owner",
        step: "04",
        role: "Owner / Finance",
        ruleCue: "When breaching floor",
        modal: {
          badge: "Level 04 • Owner / Finance",
          subtitle: "Exception Sign-Off",
          title: "Executive Sign-Off on Below-Floor or Special-Term Deals",
          summary:
            "Provides final approval on strategic discounts, major bids, or custom payment terms beyond floor limits.",
          highlights: [
            "Verifies working-capital impact, credit exposure, and net contribution with Finance.",
            "Issues time-bound approval valid strictly until the specified expiry date."
          ],
          footerLabel: "Principle",
          footerValue: "All exceptions carry written justification and expiry control",
          accent: "red"
        }
      }
    ]
  },
  formulaSection: {
    sectionTitle: "Gross Margin % vs Markup %",
    marginTitle: "Gross Margin %",
    marginFormula: "(Net Selling Price - HPP) / Net Selling Price",
    markupTitle: "Markup %",
    markupFormula: "(Net Selling Price - HPP) / HPP",
    simExampleLabel: "Simulation: COGS 100 → Price 125",
    simHpp: 100,
    simPrice: 125,
    simWarning: "Always lower than Markup % — mixing formulas silently destroys profit",
    formulaModal: {
      badge: "Margin Literacy • Zero Confusion",
      subtitle: "Gross Margin % vs Markup %",
      title: "Why Markup % Must Never Be Treated as Gross Margin %",
      metric: "20% vs 25%",
      metricLabel: "Simulation (100 → 125)",
      summary:
        "Gross Margin measures profit over net selling price (revenue), whereas Markup measures profit over cost (HPP).",
      highlights: [
        "Gross Margin % = (Net Selling Price - HPP) / Net Selling Price.",
        "Markup % = (Net Selling Price - HPP) / HPP.",
        "Simulation example: HPP 100 sold at 125 equals a 25% Markup, yet only a 20% Gross Margin — a 20% discount wipes out all profit."
      ],
      footerLabel: "Discipline",
      footerValue: "All pricing authority floors must be governed in Gross Margin %",
      accent: "red"
    }
  },
  policyCards: [
    {
      id: "old-stock-pricing",
      tag: "Aging Stock",
      title: "Aging-Inventory Price Control",
      keywords: "Bundling • Niche channels • Timed campaigns",
      modal: {
        badge: "Policy • Aging Stock Pricing",
        subtitle: "Value Recovery",
        title: "Controlled Stock-Clearance Alternatives Beyond Deep Discounts",
        metric: "4 Levers",
        metricLabel: "Controlled Options",
        summary:
          "Moves aging hardware via structured value bundles and targeted channels without undermining core list prices.",
        highlights: [
          "Bundles new + refurbished hardware or accessories to preserve perceived deal value.",
          "Uses dedicated clearance channels or time-boxed campaigns under leadership approval.",
          "Applies downward price adjustments only via controlled stock audits and Finance sign-off."
        ],
        footerLabel: "Rule",
        footerValue: "Avoid across-the-board discounting without aging audit proof",
        accent: "slate"
      }
    },
    {
      id: "margin-incentive",
      tag: "Profit Aligned",
      title: "Margin & AR-Linked Incentives",
      keywords: "Gross profit • Price discipline • Payment quality",
      modal: {
        badge: "Policy • Incentive Alignment",
        subtitle: "Rewarding Healthy Deals",
        title: "Linking Commissions to Gross Profit, Compliance & Payment Quality",
        metric: "Finance + HR",
        metricLabel: "Final Authority",
        summary:
          "Aligns sales incentives with gross margin, pricing discipline, and clean receivables rather than top-line volume alone.",
        highlights: [
          "Discourages reckless discounting and high-risk credit extensions chased purely for revenue quota.",
          "Rewards adherence to list prices and timely invoice collection.",
          "Final commission formulas require formal joint design by Finance and HR."
        ],
        footerLabel: "Boundary",
        footerValue: "Final incentive formulas remain subject to Finance & HR approval",
        accent: "red"
      }
    }
  ],
  evidenceFooter:
    "Required Data: Actual HPP by SKU/condition, refurbishing & handling costs, historical selling prices, active discount/approval rules, credit limits, payment terms & Finance/HR commission policy."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide19Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide19Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 19,
  folder: "19",
  sectionId: 7,
  navTitle: {
    in: "Pricing Governance",
    en: "Pricing Governance"
  },
  headerTitle: {
    in: "Pricing Governance - HPP, Harga Jual, Margin, dan Approval",
    en: "Pricing Governance - COGS (HPP), Pricing, Margin & Approval"
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
