import { useLanguage } from '@/contexts/LanguageContext';
import type { SwimlaneId, DecisionDiamondId, DivisionSopId } from './utils';

export interface Slide18ModalPayload {
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

export interface SwimlaneNodeItem {
  id: string;
  stepCode: string;
  title: string;
  isApprovalException?: boolean;
  diamondId?: DecisionDiamondId;
  diamondQuestion?: string;
}

export interface SwimlaneRowItem {
  id: SwimlaneId;
  laneTitle: string;
  laneRole: string;
  nodes: SwimlaneNodeItem[];
  modal: Slide18ModalPayload;
}

export interface DivisionSopRow {
  id: DivisionSopId;
  division: string;
  leadRule: string;
  keyChecklist: string;
  escalationGate: string;
  crmProof: string;
  modal: Slide18ModalPayload;
}

export interface Slide18Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  slaBoundaryCue: string;
  swimlaneSection: {
    sectionTitle: string;
    colorLegendNormal: string;
    colorLegendException: string;
    sharedFlowStrip: string;
    lanes: SwimlaneRowItem[];
  };
  governanceStrip: {
    assignmentRule: string;
    testingRule: string;
  };
  divisionTableSection: {
    sectionTitle: string;
    columns: {
      division: string;
      leadRule: string;
      checklist: string;
      escalation: string;
      crmProof: string;
    };
    rows: DivisionSopRow[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide18Data = {
  eyebrow: "Standar Kerja Lintas Divisi & Akuntabilitas",
  title: "SOP Sales & Marketing: Satu Standar, Varian per Divisi",
  subtitle:
    "Memastikan setiap tim memahami langkah kerja berikutnya, pemilik proses, bukti CRM, dan titik eskalasi — diuji lewat role-play serta sampling transaksi.",
  slaBoundaryCue: "Angka SLA Per Tahapan Disahkan Setelah Volume & Kapasitas Diketahui",
  swimlaneSection: {
    sectionTitle: "Alur Lintas Peran (Lead → Closure)",
    colorLegendNormal: "Proses Standar",
    colorLegendException: "Titik Approval",
    sharedFlowStrip:
      "Lead Capture → Assignment → Discovery → Qualification → Stock/Tech Check → Quote → Approval → Negotiation → Order → Payment/Credit → Delivery → After-Sales → CRM Closure",
    lanes: [
      {
        id: "lane-marketing",
        laneTitle: "01. Marketing / Lead Desk",
        laneRole: "Intake, Tracking & Distribusi Adil",
        nodes: [
          { id: "n1", stepCode: "01", title: "Lead Capture" },
          { id: "n2", stepCode: "02", title: "Lead Assignment" }
        ],
        modal: {
          badge: "Lane 01 • Marketing / Lead Desk",
          subtitle: "Lead Intake & Routing SOP",
          title: "Lead Capture & Distribusi Lead Berbasis Aturan (Bukan Like/Dislike)",
          metric: "Audit Trail",
          metricLabel: "Syarat Reassignment",
          summary:
            "Setiap prospek dicatat sumbernya dan dibagi otomatis secara adil dengan alasan tertulis jika dipindahkan.",
          highlights: [
            "Metode distribusi: round-robin, wilayah (territory), atau keahlian (skill-based).",
            "Aturan prioritas: existing account ke owner lama, inbound/proyek teknis/key account sesuai SOP.",
            "Setiap reassignment wajib mencantumkan alasan jelas dan tercatat pada audit trail CRM."
          ],
          footerLabel: "Bukti CRM",
          footerValue: "Log sumber lead, timestamp penerimaan & histori PIC pertama",
          accent: "slate"
        }
      },
      {
        id: "lane-sales",
        laneTitle: "02. Sales Owner",
        laneRole: "Discovery, Quote, Negosiasi & Tutup CRM",
        nodes: [
          { id: "n3", stepCode: "03", title: "Contact & Discovery" },
          { id: "n4", stepCode: "04", title: "Qualification" },
          { id: "n6", stepCode: "06", title: "Quotation" },
          { id: "n8", stepCode: "08", title: "Negotiation & Order" },
          { id: "n12", stepCode: "12–13", title: "After-Sales & CRM Closure" }
        ],
        modal: {
          badge: "Lane 02 • Sales Owner",
          subtitle: "Ujung Tombak Terpandu SOP",
          title: "Eksekusi Discovery, Penawaran, Follow-Up & Penutupan di CRM",
          metric: "1 Owner",
          metricLabel: "Akuntabilitas",
          summary:
            "Sales Owner bertanggung jawab menggali kebutuhan sebelum melempar harga, menjaga follow-up, dan menutup siklus di CRM.",
          highlights: [
            "Wajib cek stok/teknis sebelum menjanjikan ketersediaan maupun spesifikasi ke pelanggan.",
            "Menyerahkan rincian order lengkap ke Delivery & Finance memakai checklist serah terima.",
            "Menutup setiap deal (Won/Lost) disertai alasan kalah atau jadwal tindak lanjut purnajual."
          ],
          footerLabel: "Bukti CRM",
          footerValue: "Catatan discovery, dokumen quotation, log follow-up & status akhir",
          accent: "slate"
        }
      },
      {
        id: "lane-warehouse-tech",
        laneTitle: "03. Warehouse / Technical",
        laneRole: "Validasi Stok, Kondisi & Kelayakan Teknis",
        nodes: [
          {
            id: "n5",
            stepCode: "05",
            title: "Stock / Tech Check",
            isApprovalException: true,
            diamondId: "stock-available",
            diamondQuestion: "Stock Available?"
          }
        ],
        modal: {
          badge: "Lane 03 • Warehouse & Technical Gate",
          subtitle: "Titik Keputusan: Stock Available?",
          title: "Validasi Ketersediaan Stok, Kondisi QC & Kelayakan Teknis",
          metric: "♦ Gate 01",
          metricLabel: "Decision Diamond",
          summary:
            "Menjawab apakah unit tersedia siap jual (beserta kondisi new/second & QC) atau butuh pengadaan/validasi engineer.",
          highlights: [
            "Stock Available = Ya: kunci alokasi unit beserta status kondisi dan garansi tertulis.",
            "Exception (Kosong / Proyek Teknis): eskalasi Purchasing untuk lead time atau validasi Engineer.",
            "Mencegah penjualan unit kosong atau janji spesifikasi tanpa dasar teknis."
          ],
          footerLabel: "Dokumen Wajib",
          footerValue: "Konfirmasi status stok/QC & sign-off kelayakan teknis",
          accent: "red"
        }
      },
      {
        id: "lane-manager",
        laneTitle: "04. Manager / Approver",
        laneRole: "Kontrol Harga, Margin & Eskalasi Pengecualian",
        nodes: [
          {
            id: "n7",
            stepCode: "07",
            title: "Margin & Price Check",
            isApprovalException: true,
            diamondId: "margin-authority",
            diamondQuestion: "Margin Within Authority?"
          }
        ],
        modal: {
          badge: "Lane 04 • Manager / Owner Approval Gate",
          subtitle: "Titik Keputusan: Margin Within Authority?",
          title: "Persetujuan Harga, Batas Diskon & Eskalasi Pengecualian",
          metric: "♦ Gate 02",
          metricLabel: "Decision Diamond",
          summary:
            "Memastikan tidak ada quotation dengan diskon di luar batas kewenangan keluar ke pelanggan tanpa persetujuan.",
          highlights: [
            "Margin Within Authority = Ya: quotation dapat diterbitkan sesuai batas kewenangan peran.",
            "Exception (Melewati Batas): eskalasi melalui Online Price Request ke Manager atau Owner/Finance.",
            "Semua persetujuan maupun penolakan diskon tercatat lengkap di approval log."
          ],
          footerLabel: "Dokumen Wajib",
          footerValue: "Approval log harga/diskon & justifikasi kompetitor tertulis",
          accent: "red"
        }
      },
      {
        id: "lane-finance-delivery",
        laneTitle: "05. Finance / Delivery",
        laneRole: "Verifikasi Kredit, Pengiriman & Penagihan",
        nodes: [
          {
            id: "n10",
            stepCode: "10",
            title: "Payment / Credit Review",
            isApprovalException: true,
            diamondId: "credit-approved",
            diamondQuestion: "Credit Approved?"
          },
          { id: "n11", stepCode: "11", title: "Delivery, Invoice & Retur/Garansi" }
        ],
        modal: {
          badge: "Lane 05 • Finance & Delivery Gate",
          subtitle: "Titik Keputusan: Credit Approved?",
          title: "Uji Risiko Kredit, Penagihan, Pengiriman & Penanganan Retur/Garansi",
          metric: "♦ Gate 03",
          metricLabel: "Decision Diamond",
          summary:
            "Mengamankan pembayaran/limit kredit sebelum barang dikirim serta menuntaskan klaim retur/garansi sesuai policy.",
          highlights: [
            "Credit Approved = Ya: rilis Delivery Order, penjadwalan instalasi, serta penerbitan invoice.",
            "Exception (Overdue / Over-limit): tahan rilis kredit, eskalasi DP/COD atau approval pimpinan.",
            "Komplain, retur, dan garansi diproses memakai alur terstandar dengan catatan bukti QC."
          ],
          footerLabel: "Dokumen Wajib",
          footerValue: "Verifikasi kredit, BAST/DO, faktur & tiket garansi/retur",
          accent: "red"
        }
      }
    ]
  },
  governanceStrip: {
    assignmentRule: "Lead Assignment: Round-Robin / Territory / Skill + Prioritas Akun (Audit Trail Reassignment)",
    testingRule: "Uji SOP: Wajib Diuji Role-Play & Sampling Transaksi — Revisi Bila Proses Nyata Tidak Sesuai"
  },
  divisionTableSection: {
    sectionTitle: "Varian SOP per Divisi",
    columns: {
      division: "Divisi",
      leadRule: "Aturan Lead",
      checklist: "Checklist Wajib",
      escalation: "Titik Eskalasi",
      crmProof: "Bukti CRM"
    },
    rows: [
      {
        id: "retail-offline",
        division: "Retail Offline",
        leadRule: "Antrean walk-in & piket toko",
        keyChecklist: "Demo, cek stok & kondisi second",
        escalationGate: "Diskon di luar batas toko",
        crmProof: "Nota, garansi & kontak izin",
        modal: {
          badge: "SOP Divisi 01 • Retail Offline",
          subtitle: "Varian Showroom / Toko",
          title: "Standar Layanan Walk-In, Transparansi Kondisi & Closing Cepat",
          summary:
            "Menjaga kecepatan layanan tatap muka tanpa melewatkan kejujuran kondisi unit second maupun batas diskon.",
          highlights: [
            "Wajib cek ketersediaan unit & fisik bersama Gudang/QC sebelum pembayaran.",
            "Penjelasan unit second harus menyebut grade kondisi, masa garansi, serta batasannya.",
            "Sampling transaksi rutin memastikan tidak ada potongan harga tanpa approval."
          ],
          footerLabel: "SLA",
          footerValue: "Standar waktu layanan toko dikonfirmasi setelah audit volume",
          accent: "slate"
        }
      },
      {
        id: "retail-online",
        division: "Retail Online",
        leadRule: "Antrean chat per shift",
        keyChecklist: "Stok tayang, alternatif & packing",
        escalationGate: "Stok kosong / klaim retur",
        crmProof: "Log chat, resi & tiket klaim",
        modal: {
          badge: "SOP Divisi 02 • Retail Online",
          subtitle: "Varian Marketplace & Digital",
          title: "Kecepatan Respon Chat, Akurasi Stok & Resolusi Retur Online",
          summary:
            "Mencegah pembatalan otomatis dan ulasan buruk dengan sinkronisasi stok riil serta standar respon chat.",
          highlights: [
            "Follow-up prospek chat dengan rekomendasi alternatif yang tersedia bila unit utama habis.",
            "Komplain atau permintaan retur segera dieskalasi ke QC/Gudang sesuai policy resmi.",
            "Angka SLA balasan chat ditetapkan pasca-baseline beban shift online."
          ],
          footerLabel: "SLA",
          footerValue: "Target response time online dikalibrasi setelah baseline data",
          accent: "slate"
        }
      },
      {
        id: "distribution",
        division: "Distribution",
        leadRule: "Wilayah & tier reseller",
        keyChecklist: "Volume pricing, stok & status AR",
        escalationGate: "Tempo panjang, AR / harga khusus",
        crmProof: "Histori order, AR & kredit",
        modal: {
          badge: "SOP Divisi 03 • Distribution",
          subtitle: "Varian Toko Komputer & Reseller",
          title: "Disiplin Tier Harga Kuantitas, Alokasi Stok & Gate Kredit AR",
          summary:
            "Melindungi kelancaran repeat order mitra sembari memastikan setiap termin pembayaran lolos pemeriksaan Finance.",
          highlights: [
            "Wajib verifikasi status piutang jatuh tempo sebelum menyetujui pengiriman order berikutnya.",
            "Harga khusus berbasis volume memerlukan konfirmasi batas margin yang berlaku.",
            "Aktivitas kunjungan/penawaran ke reseller dicatat pada CRM akun mitra."
          ],
          footerLabel: "SLA",
          footerValue: "Siklus approval kredit & pengiriman disepakati bersama Finance/Gudang",
          accent: "slate"
        }
      },
      {
        id: "b2b",
        division: "B2B",
        leadRule: "1 Account Owner per akun",
        keyChecklist: "Discovery, sign-off & handover",
        escalationGate: "Spek teknis, margin & kredit",
        crmProof: "Account plan, quote & handover",
        modal: {
          badge: "SOP Divisi 04 • B2B Korporat & SI",
          subtitle: "Varian Penjualan Konsultatif",
          title: "SOP Akun Tunggal, Validasi Teknis Wajib & Handover Proyek",
          summary:
            "Menghilangkan bentrok antar-sales pada akun korporat serta memastikan spesifikasi dan margin terjaga penuh.",
          highlights: [
            "Setiap deal proyek wajib melewati tahap validasi tim teknis sebelum proposal dikirim.",
            "Serah terima order ke Project/Technical/Warehouse/Finance wajib memakai checklist tertulis.",
            "Setiap pengalihan kepemilikan akun memerlukan alasan dan approval Manager."
          ],
          footerLabel: "SLA",
          footerValue: "Waktu turnaround validasi teknis & proposal disahkan lintas divisi",
          accent: "slate"
        }
      },
      {
        id: "b2g",
        division: "B2G",
        leadRule: "PIC pengadaan terlatih",
        keyChecklist: "Kategori RUP, legal & cash flow",
        escalationGate: "Bid/No-Bid, kontrak & termin",
        crmProof: "Lembar Bid/No-Bid & evaluasi",
        modal: {
          badge: "SOP Divisi 05 • B2G Sektor Publik",
          subtitle: "Varian E-Purchasing, Subcon & Tender",
          title: "Kepatuhan Paket, Filter Bid/No-Bid & Proteksi Arus Kas Publik",
          summary:
            "Menjamin keikutsertaan B2G selalu patuh regulasi [R1–R4] tanpa mengorbankan legalitas, margin, atau arus kas.",
          highlights: [
            "Wajib mengecek kecocokan kategori Katalog Elektronik serta larangan/syarat barang refurbished per paket.",
            "Semua klausul subcon/maincon dan termin APBN/APBD wajib disetujui Finance & Direksi.",
            "Histori hasil tender (menang/kalah) wajib diarsipkan sebagai bahan pembelajaran."
          ],
          footerLabel: "SLA",
          footerValue: "Jadwal review paket mengikuti batas waktu resmi pengadaan",
          accent: "red"
        }
      }
    ]
  },
  evidenceFooter:
    "Data Diperlukan: Alur transaksi saat ini dari lead hingga collection, form quotation/order, policy retur/garansi, credit policy, aturan distribusi lead eksisting, serta kebutuhan audit/approval log."
};

export const slideDataEn: Slide18Data = {
  eyebrow: "Cross-Division Operating Standard & Accountability",
  title: "Sales & Marketing SOP: One Standard, Division Variants",
  subtitle:
    "Making next steps, process owners, CRM evidence, and escalation points crystal clear — validated via role-play and transaction sampling.",
  slaBoundaryCue: "Stage-Level SLA Numbers Are Approved Only After Volume & Capacity Baselines",
  swimlaneSection: {
    sectionTitle: "Cross-Role Flow (Lead → Closure)",
    colorLegendNormal: "Standard Process",
    colorLegendException: "Approval Gate",
    sharedFlowStrip:
      "Lead Capture → Assignment → Discovery → Qualification → Stock/Tech Check → Quote → Approval → Negotiation → Order → Payment/Credit → Delivery → After-Sales → CRM Closure",
    lanes: [
      {
        id: "lane-marketing",
        laneTitle: "01. Marketing / Lead Desk",
        laneRole: "Intake, Source Tagging & Fair Routing",
        nodes: [
          { id: "n1", stepCode: "01", title: "Lead Capture" },
          { id: "n2", stepCode: "02", title: "Lead Assignment" }
        ],
        modal: {
          badge: "Lane 01 • Marketing / Lead Desk",
          subtitle: "Lead Intake & Routing SOP",
          title: "Rule-Based Lead Assignment (Never By Personal Preference)",
          metric: "Audit Trail",
          metricLabel: "Reassignment Rule",
          summary:
            "Logs every incoming lead source and routes leads transparently, requiring logged reasons for any transfer.",
          highlights: [
            "Routing modes: round-robin, territory coverage, or skill-based assignment.",
            "Priority rules honor existing account owners, technical project leads, and key accounts.",
            "Every reassignment requires a documented justification and CRM audit trail."
          ],
          footerLabel: "CRM Proof",
          footerValue: "Logged lead source, intake timestamp & initial assignee trail",
          accent: "slate"
        }
      },
      {
        id: "lane-sales",
        laneTitle: "02. Sales Owner",
        laneRole: "Discovery, Quoting, Negotiation & Closure",
        nodes: [
          { id: "n3", stepCode: "03", title: "Contact & Discovery" },
          { id: "n4", stepCode: "04", title: "Qualification" },
          { id: "n6", stepCode: "06", title: "Quotation" },
          { id: "n8", stepCode: "08", title: "Negotiation & Order" },
          { id: "n12", stepCode: "12–13", title: "After-Sales & CRM Closure" }
        ],
        modal: {
          badge: "Lane 02 • Sales Owner",
          subtitle: "SOP-Guided Frontline Execution",
          title: "Discovery, Quoting, Disciplined Follow-Up & CRM Closure",
          metric: "1 Owner",
          metricLabel: "Accountability",
          summary:
            "Owns structured needs discovery prior to quoting, maintains follow-up rhythm, and closes records cleanly in CRM.",
          highlights: [
            "Must run stock/technical verification before promising availability or specifications.",
            "Hands over won orders to Delivery and Finance via standardized checklists.",
            "Closes every opportunity (Won/Lost) with verified loss codes or after-sales follow-up."
          ],
          footerLabel: "CRM Proof",
          footerValue: "Discovery notes, issued quote, follow-up logs & final closure",
          accent: "slate"
        }
      },
      {
        id: "lane-warehouse-tech",
        laneTitle: "03. Warehouse / Technical",
        laneRole: "Stock Check, QC Condition & Spec Validation",
        nodes: [
          {
            id: "n5",
            stepCode: "05",
            title: "Stock / Tech Check",
            isApprovalException: true,
            diamondId: "stock-available",
            diamondQuestion: "Stock Available?"
          }
        ],
        modal: {
          badge: "Lane 03 • Warehouse & Technical Gate",
          subtitle: "Decision Diamond: Stock Available?",
          title: "Stock Availability, QC Condition & Engineering Validation",
          metric: "♦ Gate 01",
          metricLabel: "Decision Diamond",
          summary:
            "Confirms sellable inventory, accurate new/second condition grading, and engineering feasibility before quoting.",
          highlights: [
            "Stock Available = Yes: reserves unit status with accurate condition and warranty terms.",
            "Exception (Out-of-Stock / Custom Infra): escalates to Purchasing for lead time or Engineering review.",
            "Stops unverified spec promises and accidental backorders."
          ],
          footerLabel: "Mandatory Record",
          footerValue: "Confirmed inventory/QC status & written technical sign-off",
          accent: "red"
        }
      },
      {
        id: "lane-manager",
        laneTitle: "04. Manager / Approver",
        laneRole: "Pricing Governance, Margin Floor & Exceptions",
        nodes: [
          {
            id: "n7",
            stepCode: "07",
            title: "Margin & Price Check",
            isApprovalException: true,
            diamondId: "margin-authority",
            diamondQuestion: "Margin Within Authority?"
          }
        ],
        modal: {
          badge: "Lane 04 • Manager / Owner Approval Gate",
          subtitle: "Decision Diamond: Margin Within Authority?",
          title: "Pricing Authority, Floor Margin & Discount Exception Escalation",
          metric: "♦ Gate 02",
          metricLabel: "Decision Diamond",
          summary:
            "Prevents unauthorized discounting by routing out-of-band quote requests through structured approval.",
          highlights: [
            "Margin Within Authority = Yes: standard quote clears immediately within role authority.",
            "Exception (Below Floor / High Discount): escalates via Online Price Request to Manager or Owner/Finance.",
            "Every discount approval or rejection stays permanently recorded in the audit log."
          ],
          footerLabel: "Mandatory Record",
          footerValue: "Price-request approval log & documented competitive rationale",
          accent: "red"
        }
      },
      {
        id: "lane-finance-delivery",
        laneTitle: "05. Finance / Delivery",
        laneRole: "Credit Approval, Dispatch & Claims",
        nodes: [
          {
            id: "n10",
            stepCode: "10",
            title: "Payment / Credit Review",
            isApprovalException: true,
            diamondId: "credit-approved",
            diamondQuestion: "Credit Approved?"
          },
          { id: "n11", stepCode: "11", title: "Delivery, Invoice & Returns/Warranty" }
        ],
        modal: {
          badge: "Lane 05 • Finance & Delivery Gate",
          subtitle: "Decision Diamond: Credit Approved?",
          title: "Credit Verification, Fulfillment, Billing & Warranty Handling",
          metric: "♦ Gate 03",
          metricLabel: "Decision Diamond",
          summary:
            "Clears credit risk prior to dispatch while governing invoicing, returns, complaints, and warranty service.",
          highlights: [
            "Credit Approved = Yes: authorizes Delivery Order release, installation scheduling, and billing.",
            "Exception (Overdue / Over Limit): pauses dispatch; escalates for upfront payment or executive sign-off.",
            "Handles returns and warranty claims under policy backed by QC documentation."
          ],
          footerLabel: "Mandatory Record",
          footerValue: "Credit clearance, signed delivery receipt, invoice & warranty log",
          accent: "red"
        }
      }
    ]
  },
  governanceStrip: {
    assignmentRule: "Lead Assignment: Round-Robin / Territory / Skill + Account Priority (Mandatory Audit Trail)",
    testingRule: "SOP Validation: Tested via Role-Play & Transaction Sampling — Revised Whenever Practice Diverges"
  },
  divisionTableSection: {
    sectionTitle: "Division SOP Variants",
    columns: {
      division: "Division",
      leadRule: "Lead Rule",
      checklist: "Mandatory Checks",
      escalation: "Escalation Gate",
      crmProof: "CRM Proof"
    },
    rows: [
      {
        id: "retail-offline",
        division: "Retail Offline",
        leadRule: "Walk-in queue & store rota",
        keyChecklist: "Demo, stock check & second terms",
        escalationGate: "Discounts above store limit",
        crmProof: "Receipt, warranty & consent log",
        modal: {
          badge: "Division SOP 01 • Retail Offline",
          subtitle: "Showroom / Store Variant",
          title: "Fast Walk-In Service, Honest Condition Pitch & Floor Discipline",
          summary:
            "Keeps counter service responsive without compromising honest second-hand disclosure or discount limits.",
          highlights: [
            "Confirms physical stock and QC grade with Warehouse before taking payment.",
            "Requires clear explanation of refurbished grading, warranty length, and limits.",
            "Random transaction sampling ensures zero unapproved counter discounts."
          ],
          footerLabel: "SLA",
          footerValue: "Counter response benchmarks set after store volume baseline",
          accent: "slate"
        }
      },
      {
        id: "retail-online",
        division: "Retail Online",
        leadRule: "Shift chat queue",
        keyChecklist: "Live stock, alternatives & packing",
        escalationGate: "Post-order stock-out / returns",
        crmProof: "Chat log, tracking & claim ticket",
        modal: {
          badge: "Division SOP 02 • Retail Online",
          subtitle: "Marketplace & Digital Variant",
          title: "Chat Speed, Live Inventory Accuracy & Online Returns Control",
          summary:
            "Protects seller ratings and fulfillment reliability through real-time stock sync and prompt chat handling.",
          highlights: [
            "Offers vetted alternative SKUs immediately if requested stock runs low.",
            "Escalates defects or return claims rapidly to QC/Warehouse under policy.",
            "Numeric response SLAs are calibrated once chat volume baselines are measured."
          ],
          footerLabel: "SLA",
          footerValue: "Online reply-time SLAs calibrated post-baseline measurement",
          accent: "slate"
        }
      },
      {
        id: "distribution",
        division: "Distribution",
        leadRule: "Territory & reseller tier",
        keyChecklist: "Volume tiers, stock & AR check",
        escalationGate: "Long terms, AR / custom price",
        crmProof: "Order log, AR & credit approval",
        modal: {
          badge: "Division SOP 03 • Distribution",
          subtitle: "Computer Store & Reseller Variant",
          title: "Volume-Tier Pricing Discipline, Stock Allocation & AR Gate",
          summary:
            "Supports smooth repeat reseller ordering while gating shipments behind clean receivables checks.",
          highlights: [
            "Requires AR aging clearance before releasing new credit orders.",
            "Custom volume pricing beyond published tiers routes through Manager/Finance.",
            "All reseller visits and follow-ups remain logged in CRM partner accounts."
          ],
          footerLabel: "SLA",
          footerValue: "Credit-check and dispatch cadence aligned with Finance/Warehouse",
          accent: "slate"
        }
      },
      {
        id: "b2b",
        division: "B2B",
        leadRule: "1 Primary Account Owner",
        keyChecklist: "Discovery, tech sign-off & handover",
        escalationGate: "Tech spec, margin & credit limit",
        crmProof: "Account plan, quote & handover",
        modal: {
          badge: "Division SOP 04 • Corporate B2B & SI",
          subtitle: "Consultative Selling Variant",
          title: "Single-Owner Hygiene, Mandatory Technical Gate & Project Handover",
          summary:
            "Eliminates multi-rep account conflicts while safeguarding spec feasibility and gross margins.",
          highlights: [
            "All solution proposals require engineering validation before release.",
            "Won deals transition to Project/Tech/Warehouse/Finance via signed checklist.",
            "Account transfers require written justification and Manager approval."
          ],
          footerLabel: "SLA",
          footerValue: "Technical sizing & quote turnaround aligned across functions",
          accent: "slate"
        }
      },
      {
        id: "b2g",
        division: "B2G",
        leadRule: "Procurement-trained PIC",
        keyChecklist: "RUP catalog, legal & cash test",
        escalationGate: "Bid/No-Bid, contract & terms",
        crmProof: "Bid sheet & outcome debrief",
        modal: {
          badge: "Division SOP 05 • Public Sector B2G",
          subtitle: "E-Purchasing, Subcon & Tender Variant",
          title: "Package Compliance, Bid/No-Bid Control & Cash-Flow Protection",
          summary:
            "Keeps public-sector bids strictly compliant with regulations [R1–R4] and working-capital limits.",
          highlights: [
            "Verifies catalog curation and new-vs-refurbished eligibility per tender package.",
            "Subcontract or prime contract terms require Finance and Director sign-off.",
            "Documents every tender outcome to sharpen future bid selection."
          ],
          footerLabel: "SLA",
          footerValue: "Review schedule governed by official procurement deadlines",
          accent: "red"
        }
      }
    ]
  },
  evidenceFooter:
    "Required Data: Current end-to-end flow from lead to collection, quote/order forms, return/warranty policy, credit policy, active lead-routing rules & CRM/approval log specs."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide18Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide18Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 18,
  folder: "18",
  sectionId: 7,
  navTitle: {
    in: "SOP Sales & Marketing",
    en: "Sales & Marketing SOP"
  },
  headerTitle: {
    in: "SOP Sales & Marketing - Satu Standar, Varian per Divisi",
    en: "Sales & Marketing SOP - One Standard, Division Variants"
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
