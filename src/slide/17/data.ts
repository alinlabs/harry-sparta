import { useLanguage } from '@/contexts/LanguageContext';
import type { RetailChannelId, DistLeverId, BranchGateId } from './utils';

export interface Slide17ModalPayload {
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

export interface FlowNodeItem {
  code: string;
  label: string;
}

export interface ChannelActionItem {
  id: RetailChannelId;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide17ModalPayload;
}

export interface DistActionItem {
  id: DistLeverId;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide17ModalPayload;
}

export interface BranchGateItem {
  id: BranchGateId;
  stepCode: string;
  title: string;
  keywords: string;
  modal: Slide17ModalPayload;
}

export interface Slide17Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  combinedShareCue: string;
  retailPanel: {
    sectionTitle: string;
    shareMetric: string;
    shareNote: string;
    teamCue: string;
    funnelTitle: string;
    funnelSteps: FlowNodeItem[];
    channels: ChannelActionItem[];
    bundlingNote: string;
  };
  distributionPanel: {
    sectionTitle: string;
    shareMetric: string;
    shareNote: string;
    teamCue: string;
    lifecycleTitle: string;
    lifecycleSteps: FlowNodeItem[];
    levers: DistActionItem[];
  };
  branchGateSection: {
    sectionTitle: string;
    pilotRuleCue: string;
    gates: BranchGateItem[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide17Data = {
  eyebrow: "Mengoptimalkan Mesin Pendapatan Berjalan",
  title: "Retail & Distribution: Optimasi Kanal Berjalan",
  subtitle:
    "Memperkuat produktivitas kanal Retail (40%) dan Distribusi (40%) sembari menguji ekspansi cabang fisik lewat pilot terukur — tanpa melemahkan fokus B2B/B2G.",
  combinedShareCue: "Basis Saat Ini: Retail 40% + Distribusi 40% = 80% (Basis Metrik Perlu Dikonfirmasi)",
  retailPanel: {
    sectionTitle: "Retail (Offline, Online & Telesales)",
    shareMetric: "40%",
    shareNote: "Kontribusi saat ini (butuh konfirmasi basis omzet/margin)",
    teamCue: "Catatan Tim: 2 Sales Offline • 1 Sales Online • 1 Telemarketing",
    funnelTitle: "Mini-Funnel Retail",
    funnelSteps: [
      { code: "01", label: "Walk-In / Online Lead" },
      { code: "02", label: "Assisted Sale" },
      { code: "03", label: "Transaction" },
      { code: "04", label: "Repeat" }
    ],
    channels: [
      {
        id: "retail-offline",
        tag: "Toko / Showroom",
        title: "Retail Offline",
        keywords: "Conversion • Basket size • Demo & garansi",
        modal: {
          badge: "Retail • Offline & Showroom",
          subtitle: "Produktivitas Penjualan Toko",
          title: "Meningkatkan Konversi, Nilai Keranjang & Kepercayaan Showroom",
          metric: "2 Sales",
          metricLabel: "Catatan Alokasi Awal",
          summary:
            "Memaksimalkan setiap kunjungan walk-in lewat demonstrasi produk, bundling kebutuhan, dan transparansi unit second.",
          highlights: [
            "Meningkatkan closing conversion dan basket size melalui rekomendasi perangkat & aksesori pelengkap.",
            "Melakukan demo produk serta menjelaskan kondisi unit second/refurbished dan garansi secara jujur.",
            "Mengunci kepuasan purnajual agar pembeli kembali untuk upgrade atau servis."
          ],
          footerLabel: "Data Diperlukan",
          footerValue: "Omzet, margin, basket size & conversion per toko",
          accent: "slate"
        }
      },
      {
        id: "retail-online",
        tag: "Marketplace & Web",
        title: "Retail Online",
        keywords: "Listing akurat • Chat SLA • Stok & review",
        modal: {
          badge: "Retail • Online & Marketplace",
          subtitle: "Disiplin Etalase Digital",
          title: "Optimasi Listing, Kecepatan Respons & Kelancaran Fulfilment",
          metric: "1 Sales",
          metricLabel: "Catatan Alokasi Awal",
          summary:
            "Memperbaiki konversi digital dari ketepatan informasi produk, kecepatan membalas chat, hingga ketepatan kirim.",
          highlights: [
            "Menyelaraskan judul listing, foto asli/rapi, deskripsi kondisi new/second, dan pembaruan harga.",
            "Menjaga response time chat serta sinkronisasi stok riil agar tidak terjadi pembatalan order.",
            "Mengelola ulasan (review) dan SLA fulfilment sebagai pemicu pembelian ulang."
          ],
          footerLabel: "Data Diperlukan",
          footerValue: "Response time chat, return rate & performa per marketplace",
          accent: "slate"
        }
      },
      {
        id: "telesales",
        tag: "Outreach Terkelola",
        title: "Telesales & Follow-Up",
        keywords: "Lead tertunda • Quote terbuka • Reaktivasi",
        modal: {
          badge: "Retail • Telesales / Telemarketing",
          subtitle: "Reaktivasi & Penutupan Quote",
          title: "Follow-Up Terstruktur dengan Menghormati Consent & Privasi",
          metric: "1 Staff",
          metricLabel: "Catatan Alokasi Awal",
          summary:
            "Menghubungi kembali prospek hangat, quotation yang belum closing, dan pelanggan lama secara tertib dan etis.",
          highlights: [
            "Memprioritaskan leads masuk, quotation menggantung, serta pelanggan inactive dengan histori jelas.",
            "Mendorong repeat purchase dan upgrade berkala sesuai histori pembelian di CRM.",
            "Seluruh kontak keluar wajib mematuhi ketentuan consent dan privasi data pelanggan."
          ],
          footerLabel: "Prinsip",
          footerValue: "Komunikasi terarah berbasis CRM dengan kepatuhan consent/privacy",
          accent: "slate"
        }
      }
    ],
    bundlingNote: "Bundling new + refurbished diperbolehkan dengan penjelasan kondisi & garansi secara transparan."
  },
  distributionPanel: {
    sectionTitle: "Distribution (Toko & Reseller)",
    shareMetric: "40%",
    shareNote: "Kontribusi saat ini (butuh konfirmasi definisi & periode)",
    teamCue: "Catatan Tim: 1 Sales Reseller / Channel (+ Perlu Review Kapasitas)",
    lifecycleTitle: "Partner Lifecycle",
    lifecycleSteps: [
      { code: "01", label: "Recruit" },
      { code: "02", label: "Activate" },
      { code: "03", label: "Grow" },
      { code: "04", label: "Retain" }
    ],
    levers: [
      {
        id: "reseller-activation",
        tag: "Basis Mitra",
        title: "Aktivasi & Tiering Reseller",
        keywords: "Rekrut toko • Reaktivasi • Tier mitra",
        modal: {
          badge: "Distribusi • Partner Lifecycle",
          subtitle: "Recruit & Activate",
          title: "Aktivasi Reseller Baru & Reaktivasi Mitra Pasif",
          metric: "1 Channel",
          metricLabel: "Catatan Alokasi Awal",
          summary:
            "Memetakan ulang toko komputer dan reseller aktif vs dormant untuk memperluas jangkauan per wilayah.",
          highlights: [
            "Mengelompokkan mitra ke dalam tier jelas sesuai potensi serapan rutin dan sebaran daerah.",
            "Menyelaraskan dukungan stok siap jual agar mitra baru cepat melakukan transaksi awal.",
            "Mengevaluasi beban kelola 1 personel channel terhadap rasio akun aktif."
          ],
          footerLabel: "Data Diperlukan",
          footerValue: "Daftar reseller aktif/dormant, rata-rata beli & peta wilayah",
          accent: "slate"
        }
      },
      {
        id: "volume-loyalty",
        tag: "Ekonomi Channel",
        title: "Price by Volume & Loyalitas",
        keywords: "Harga kuantitas • Loyalitas • Stok rutin",
        modal: {
          badge: "Distribusi • Ekonomi Mitra",
          subtitle: "Grow Partner Share",
          title: "Struktur Harga Berbasis Volume & Program Loyalitas Mitra",
          metric: "Volume",
          metricLabel: "Pendorong Margin",
          summary:
            "Memberi insentif harga berjenjang atas komitmen kuantitas sekaligus menjaga konsistensi margin perusahaan.",
          highlights: [
            "Menetapkan price by volume agar reseller memiliki alasan kuat mengonsolidasikan pembelian.",
            "Merancang program loyalitas berbasis pencapaian volume dan kepatuhan pembayaran.",
            "Menjaga ketersediaan SKU fast-moving maupun bundling new + refurbished yang transparan."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Tingkat diskon & tier volume wajib disahkan Finance/Direksi",
          accent: "slate"
        }
      },
      {
        id: "stock-ar-control",
        tag: "Pengaman Kas",
        title: "Kontrol Stok & Piutang Mitra",
        keywords: "Alokasi barang • Limit kredit • Kontrol AR",
        modal: {
          badge: "Distribusi • Kontrol Risiko",
          subtitle: "Retain Secara Sehat",
          title: "Ketersediaan Stok Andal & Pengendalian Piutang (AR)",
          metric: "Disiplin AR",
          metricLabel: "Syarat Pertumbuhan",
          summary:
            "Memastikan pertumbuhan omzet distribusi diiringi perputaran kas sehat dan batas kredit terkendali.",
          highlights: [
            "Menghubungkan batas kredit dan fasilitas tempo reseller dengan riwayat ketepatan bayar.",
            "Memantau piutang jatuh tempo bersama Finance sebelum membuka pengiriman order baru.",
            "Membaca pola permintaan pasar daerah untuk menjaga relevansi stok lintas wilayah."
          ],
          footerLabel: "Data Diperlukan",
          footerValue: "Margin reseller, aging piutang & riwayat kredit per mitra",
          accent: "red"
        }
      }
    ]
  },
  branchGateSection: {
    sectionTitle: "Decision Gate Ekspansi Cabang",
    pilotRuleCue: "Lokasi Kota = Placeholder Menunggu Data Konfirmasi 5 Kota Prioritas",
    gates: [
      {
        id: "demand-evidence",
        stepCode: "Gate 01",
        title: "Demand Evidence",
        keywords: "Catchment area • Pembeli lokal",
        modal: {
          badge: "Gate 01 • Bukti Permintaan",
          subtitle: "Syarat Lokasi Pilot",
          title: "Validasi Catchment Area & Bukti Permintaan Lokal",
          metric: "Placeholder",
          metricLabel: "Status Lokasi Kota",
          summary:
            "Menetapkan calon kota pilot hanya berdasarkan bukti permintaan lokal nyata, bukan asumsi lokasi acak.",
          highlights: [
            "Mengukur kepadatan pelanggan retail/reseller, histori order area, dan kompetisi setempat.",
            "Contoh lokasi bersifat placeholder sampai daftar 5 kota prioritas dan dasarnya dikonfirmasi internal."
          ],
          footerLabel: "Klarifikasi",
          footerValue: "Menunggu data 5 kota prioritas & basis pemilihannya",
          accent: "slate"
        }
      },
      {
        id: "unit-economics",
        stepCode: "Gate 02",
        title: "Unit Economics",
        keywords: "Biaya tetap • Margin & payback period",
        modal: {
          badge: "Gate 02 • Kelayakan Finansial",
          subtitle: "Model Ekonomi Cabang",
          title: "Perhitungan Biaya Tetap, Target Omzet/Margin & Payback Period",
          metric: "Payback",
          metricLabel: "Uji Finansial",
          summary:
            "Setiap cabang kecil harus membuktikan kemampuan menutup biaya tetap dan mencapai balik modal yang wajar.",
          highlights: [
            "Menghitung sewa tempat, gaji tenaga kerja, utilitas, dan logistik pengiriman stok.",
            "Menetapkan target omzet dan gross margin minimum bulanan serta estimasi payback period bersama Finance."
          ],
          footerLabel: "Data Diperlukan",
          footerValue: "Rincian biaya sewa, tenaga kerja, utilitas & logistik calon area",
          accent: "red"
        }
      },
      {
        id: "ops-readiness",
        stepCode: "Gate 03",
        title: "Operations Readiness",
        keywords: "Suplai stok • Staffing • POS & QC",
        modal: {
          badge: "Gate 03 • Kesiapan Operasional",
          subtitle: "Supply & SDM",
          title: "Kesiapan Supply Chain, Staffing & Kontrol Operasional",
          metric: "Siap Jalan",
          metricLabel: "Pra-Peluncuran",
          summary:
            "Memastikan pasokan unit baru/refurbished, tim terlatih, sistem kasir, dan kontrol stok aman sebelum buka.",
          highlights: [
            "Menjamin jalur suplai rutin dari gudang pusat tanpa mengosongkan stok kanal utama.",
            "Menyiapkan staf yang lulus pelatihan produk, kejujuran unit second, dan disiplin SOP."
          ],
          footerLabel: "Ketergantungan",
          footerValue: "Sinkron dengan Warehouse, Purchasing, HRD & Finance",
          accent: "slate"
        }
      },
      {
        id: "mgmt-approval",
        stepCode: "Gate 04",
        title: "Management Approval",
        keywords: "Izin pilot Direksi • Evaluasi berkala",
        modal: {
          badge: "Gate 04 • Otorisasi Pimpinan",
          subtitle: "Keputusan Bertahap",
          title: "Izin Pilot Direksi & Evaluasi Sebelum Replikasi",
          metric: "Pilot Pertama",
          metricLabel: "Keputusan",
          summary:
            "Ekspansi fisik diawali satu pilot terukur dengan izin Direksi, bukan pembukaan serentak banyak lokasi.",
          highlights: [
            "Pilot dievaluasi berkala terhadap pencapaian omzet, margin, perputaran stok, dan payback aktual.",
            "Ekspansi kota berikutnya hanya disetujui bila hasil pilot pertama terbukti sehat."
          ],
          footerLabel: "Tata Kelola",
          footerValue: "Pembukaan cabang baru merupakan keputusan investasi Direksi",
          accent: "red"
        }
      }
    ]
  },
  evidenceFooter:
    "Data Diperlukan & Batas Klaim: Revenue/margin per toko & marketplace, basket size, conversion, return rate, daftar reseller aktif/dormant, piutang, biaya tetap & estimasi payback — tanpa angka kota/cabang rekaan."
};

export const slideDataEn: Slide17Data = {
  eyebrow: "Growing From an Established Revenue Base",
  title: "Retail & Distribution: Core Channel Growth",
  subtitle:
    "Boosting productivity across Retail (40%) and Distribution (40%) while testing physical store expansion via controlled pilots — without eroding core cash engines.",
  combinedShareCue: "Current Share: Retail 40% + Distribution 40% = 80% (Basis Pending Confirmation)",
  retailPanel: {
    sectionTitle: "Retail (Offline, Online & Telesales)",
    shareMetric: "40%",
    shareNote: "Stated current contribution (metric basis pending verification)",
    teamCue: "Team Note: 2 Offline Sales • 1 Online Sales • 1 Telemarketing",
    funnelTitle: "Retail Funnel",
    funnelSteps: [
      { code: "01", label: "Walk-In / Online Lead" },
      { code: "02", label: "Assisted Sale" },
      { code: "03", label: "Transaction" },
      { code: "04", label: "Repeat" }
    ],
    channels: [
      {
        id: "retail-offline",
        tag: "Store / Showroom",
        title: "Retail Offline",
        keywords: "Conversion • Basket size • Demo & warranty",
        modal: {
          badge: "Retail • Offline & Showroom",
          subtitle: "In-Store Productivity",
          title: "Lifting Walk-In Conversion, Basket Size & Showroom Trust",
          metric: "2 Reps",
          metricLabel: "Initial Allocation Note",
          summary:
            "Converts more showroom foot traffic via live demos, thoughtful add-on bundling, and honest second-hand explanations.",
          highlights: [
            "Drives conversion and average basket size through practical accessory and service attach.",
            "Demonstrates hardware live while clearly explaining refurbished conditions and warranties.",
            "Delivers dependable after-sales follow-through to turn walk-ins into repeat buyers."
          ],
          footerLabel: "Data Needed",
          footerValue: "Revenue, margin, basket size & conversion by store",
          accent: "slate"
        }
      },
      {
        id: "retail-online",
        tag: "Marketplace & Web",
        title: "Retail Online",
        keywords: "Accurate listings • Chat SLA • Stock & reviews",
        modal: {
          badge: "Retail • Online & Marketplaces",
          subtitle: "Digital Storefront Hygiene",
          title: "Sharper Listings, Faster Chat SLA & Reliable Fulfilment",
          metric: "1 Rep",
          metricLabel: "Initial Allocation Note",
          summary:
            "Improves online conversion by pairing accurate product listings with fast inquiry replies and smooth fulfilment.",
          highlights: [
            "Upgrades titles, photos, transparent new/second specs, and price consistency across channels.",
            "Improves chat response times and live stock accuracy to minimize cancelled orders.",
            "Tracks seller reviews and fulfilment SLAs to fuel recurring marketplace traffic."
          ],
          footerLabel: "Data Needed",
          footerValue: "Chat response speed, return rate & revenue per marketplace",
          accent: "slate"
        }
      },
      {
        id: "telesales",
        tag: "Consent-Led Outreach",
        title: "Telesales & Follow-Up",
        keywords: "Open leads • Unclosed quotes • Reactivation",
        modal: {
          badge: "Retail • Telesales / Telemarketing",
          subtitle: "Reactivation & Quote Recovery",
          title: "Structured Follow-Ups Within Privacy & Consent Rules",
          metric: "1 Rep",
          metricLabel: "Initial Allocation Note",
          summary:
            "Follows up on stalled leads, open quotations, and dormant buyers systematically while honoring customer privacy.",
          highlights: [
            "Works overdue inquiries, unclosed quotes, and inactive customers recorded in CRM.",
            "Prompts timely repeat purchases and workstation upgrades matched to past orders.",
            "Operates strictly within customer consent and privacy boundaries."
          ],
          footerLabel: "Principle",
          footerValue: "CRM-tracked outreach adhering to consent and privacy rules",
          accent: "slate"
        }
      }
    ],
    bundlingNote: "New + refurbished bundling is encouraged when unit condition and warranty terms are stated transparently."
  },
  distributionPanel: {
    sectionTitle: "Distribution (Stores & Resellers)",
    shareMetric: "40%",
    shareNote: "Stated current contribution (definition & period pending confirmation)",
    teamCue: "Team Note: 1 Reseller / Channel Sales (+ Capacity Review Needed)",
    lifecycleTitle: "Partner Lifecycle",
    lifecycleSteps: [
      { code: "01", label: "Recruit" },
      { code: "02", label: "Activate" },
      { code: "03", label: "Grow" },
      { code: "04", label: "Retain" }
    ],
    levers: [
      {
        id: "reseller-activation",
        tag: "Channel Base",
        title: "Reseller Activation & Tiering",
        keywords: "Onboard stores • Reactivate • Partner tiers",
        modal: {
          badge: "Distribution • Partner Lifecycle",
          subtitle: "Recruit & Activate",
          title: "Activating New Resellers & Re-Engaging Dormant Accounts",
          metric: "1 Channel",
          metricLabel: "Initial Allocation Note",
          summary:
            "Audits active versus dormant computer shops and resellers to prioritize onboarding and regional coverage.",
          highlights: [
            "Organizes channel partners into clear tiers aligned with recurring purchase volume and geography.",
            "Supports fast first orders with dependable core hardware stock availability.",
            "Assesses account load capacity for the dedicated channel seat."
          ],
          footerLabel: "Data Needed",
          footerValue: "Active/dormant reseller list, average order size & regions",
          accent: "slate"
        }
      },
      {
        id: "volume-loyalty",
        tag: "Channel Economics",
        title: "Volume Pricing & Loyalty",
        keywords: "Quantity tiers • Loyalty perks • Steady stock",
        modal: {
          badge: "Distribution • Partner Economics",
          subtitle: "Grow Partner Share",
          title: "Structured Volume Pricing Tiers & Loyalty Programs",
          metric: "Volume",
          metricLabel: "Share-of-Wallet Lever",
          summary:
            "Rewards reseller volume commitments systematically without sacrificing internal margin floors.",
          highlights: [
            "Uses price-by-volume bands so computer stores consolidate repeat orders with us.",
            "Ties loyalty perks to consistent volume and clean payment behavior.",
            "Maintains steady stock on fast-moving SKUs and transparent new + refurbished bundles."
          ],
          footerLabel: "Boundary",
          footerValue: "Volume discount tiers require Finance and Director sign-off",
          accent: "slate"
        }
      },
      {
        id: "stock-ar-control",
        tag: "Cash Protection",
        title: "Stock Supply & AR Control",
        keywords: "Fulfillment • Credit limits • AR monitoring",
        modal: {
          badge: "Distribution • Risk Control",
          subtitle: "Healthy Retention",
          title: "Reliable Inventory Allocation & Accounts Receivable Control",
          metric: "Clean AR",
          metricLabel: "Growth Guardrail",
          summary:
            "Ensures distribution volume growth converts cleanly into cash through strict credit and AR monitoring.",
          highlights: [
            "Ties reseller credit limits and payment terms directly to documented collection discipline.",
            "Checks overdue AR balances with Finance before releasing repeat shipments.",
            "Monitors regional market demand shifts to keep stock aligned across territories."
          ],
          footerLabel: "Data Needed",
          footerValue: "Reseller margins, AR aging & individual credit histories",
          accent: "red"
        }
      }
    ]
  },
  branchGateSection: {
    sectionTitle: "Branch Expansion Decision Gates",
    pilotRuleCue: "City Locations = Placeholders Pending Confirmation of 5 Priority Cities",
    gates: [
      {
        id: "demand-evidence",
        stepCode: "Gate 01",
        title: "Demand Evidence",
        keywords: "Catchment area • Local buyer base",
        modal: {
          badge: "Gate 01 • Demand Proof",
          subtitle: "Site Selection Criteria",
          title: "Catchment Area & Verified Local Demand Validation",
          metric: "Placeholder",
          metricLabel: "City Status",
          summary:
            "Treats candidate cities strictly as placeholders until catchment demand and selection criteria are verified.",
          highlights: [
            "Assesses local retail/reseller density, historical shipping demand, and competitive landscape.",
            "Awaits internal confirmation on the 5 priority cities and underlying selection data."
          ],
          footerLabel: "Clarification",
          footerValue: "Pending verification of the 5 target cities and selection basis",
          accent: "slate"
        }
      },
      {
        id: "unit-economics",
        stepCode: "Gate 02",
        title: "Unit Economics",
        keywords: "Fixed costs • Margin & payback period",
        modal: {
          badge: "Gate 02 • Financial Viability",
          subtitle: "Store Economics Model",
          title: "Fixed Costs, Revenue/Margin Targets & Payback Period",
          metric: "Payback",
          metricLabel: "Financial Gate",
          summary:
            "Every small store pilot must clear fixed-cost coverage, margin targets, and an acceptable payback horizon.",
          highlights: [
            "Models rent, staffing, utilities, and inbound logistics overhead upfront.",
            "Sets target monthly revenue, floor gross margin, and payback window with Finance."
          ],
          footerLabel: "Data Needed",
          footerValue: "Local rent, payroll, utilities & logistics cost estimates",
          accent: "red"
        }
      },
      {
        id: "ops-readiness",
        stepCode: "Gate 03",
        title: "Operations Readiness",
        keywords: "Stock supply • Trained staff • POS & QC",
        modal: {
          badge: "Gate 03 • Operational Readiness",
          subtitle: "Supply & Staffing",
          title: "Supply Chain Continuity, Staffing & Store Controls",
          metric: "Launch Ready",
          metricLabel: "Pre-Opening Check",
          summary:
            "Verifies steady stock replenishment, trained sales staff, and POS/QC controls before opening.",
          highlights: [
            "Ensures branch supply never starves core warehouse fulfillment.",
            "Deploys staff trained on new/second product grading and SOP compliance."
          ],
          footerLabel: "Dependencies",
          footerValue: "Aligned across Warehouse, Purchasing, HRD & Finance",
          accent: "slate"
        }
      },
      {
        id: "mgmt-approval",
        stepCode: "Gate 04",
        title: "Management Approval",
        keywords: "Director pilot sign-off • Periodic review",
        modal: {
          badge: "Gate 04 • Executive Sign-Off",
          subtitle: "Staged Rollout",
          title: "Director Pilot Authorization & Post-Pilot Gate",
          metric: "Pilot First",
          metricLabel: "Governance",
          summary:
            "Tests physical expansion with one measured pilot approved by Directors rather than simultaneous multi-city openings.",
          highlights: [
            "Evaluates actual revenue, margin, inventory turn, and payback against pilot benchmarks.",
            "Further store openings proceed only after the pilot meets financial thresholds."
          ],
          footerLabel: "Governance",
          footerValue: "Physical store capex remains an executive Director decision",
          accent: "red"
        }
      }
    ]
  },
  evidenceFooter:
    "Required Data & Claim Boundary: Store/marketplace revenue & margin, basket size, conversion, return rates, active/dormant reseller lists, AR aging, fixed costs & payback estimates — zero invented city counts or store forecasts."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide17Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide17Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 17,
  folder: "17",
  sectionId: 7,
  navTitle: {
    in: "Retail & Distribution",
    en: "Retail & Distribution"
  },
  headerTitle: {
    in: "Retail & Distribution - Pertumbuhan dari Basis yang Sudah Kuat",
    en: "Retail & Distribution - Growth From a Strong Foundation"
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
