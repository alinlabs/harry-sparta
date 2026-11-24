import { useLanguage } from '@/contexts/LanguageContext';
import type { JourneyStageKey, SolutionPackageKey } from './utils';

export interface Slide13ModalPayload {
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

export interface JourneyStageItem {
  id: JourneyStageKey;
  stepCode: string;
  title: string;
  shortCue: string;
  ownerCue: string;
  modal: Slide13ModalPayload;
}

export interface SolutionPackageItem {
  id: SolutionPackageKey;
  title: string;
  statusTag: string;
  painPoint: string;
  bundle: string;
  serviceAttach: string;
  proofAssumption: string;
  modal: Slide13ModalPayload;
}

export interface Slide13Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  roleShiftCue: string;
  journeySection: {
    sectionTitle: string;
    guardrailNote: string;
    stages: JourneyStageItem[];
  };
  packagesSection: {
    sectionTitle: string;
    exampleNote: string;
    rowLabels: {
      painPoint: string;
      bundle: string;
      serviceAttach: string;
      proofAssumption: string;
    };
    packages: SolutionPackageItem[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide13Data = {
  eyebrow: "Transformasi Pola Penjualan",
  title: "Product-to-Solution: Sales sebagai Konsultan IT",
  subtitle:
    "Berubah dari menjual unit satuan menjadi mengorkestrasi solusi bisnis bersama tim teknis, marketing, dan branding dengan janji yang realistis.",
  roleShiftCue: "Unit Satuan → Solusi Terintegrasi",
  journeySection: {
    sectionTitle: "Consultative Sales Journey (7 Tahap)",
    guardrailNote: "Aturan Inti: Sales dilarang mengarang spesifikasi — wajib validasi tim teknis",
    stages: [
      {
        id: "discovery",
        stepCode: "01",
        title: "Discovery",
        shortCue: "Kebutuhan & budget",
        ownerCue: "Sales + Klien",
        modal: {
          badge: "Tahap 01 • Consultative Discovery",
          subtitle: "Menggali Konteks Sebelum Menawar",
          title: "Discovery Proses Bisnis, Lingkungan IT & Anggaran",
          metric: "8 Elemen",
          metricLabel: "Cek Discovery",
          summary:
            "Mengumpulkan konteks lengkap pelanggan sebelum memilih perangkat agar solusi tepat guna dan realistis secara anggaran.",
          highlights: [
            "Menggali proses bisnis, pain point operasional, jumlah pengguna, dan kondisi lingkungan IT aktual.",
            "Memastikan pagu anggaran, target timeline implementasi, standar teknis, serta struktur decision maker."
          ],
          footerLabel: "Keluaran",
          footerValue: "Brief kebutuhan lengkap sebagai dasar diskusi bersama tim teknis",
          accent: "slate"
        }
      },
      {
        id: "technical-validation",
        stepCode: "02",
        title: "Technical Validation",
        shortCue: "Cek kelayakan engineer",
        ownerCue: "Sales + Engineer",
        modal: {
          badge: "Tahap 02 • Validasi Teknis Wajib",
          subtitle: "Gerbang Kendali Spesifikasi",
          title: "Analisis & Validasi Bersama Tim Teknis / Engineer",
          metric: "Wajib",
          metricLabel: "Sign-off Teknis",
          summary:
            "Sales tidak mengarang spesifikasi atau menjanjikan kompatibilitas tanpa validasi tertulis dari tim teknis/engineer.",
          highlights: [
            "Memeriksa kelayakan topologi, kapasitas, kompatibilitas perangkat new/second, serta kesiapan instalasi.",
            "Menghindari salah janji spesifikasi dan beban komplain purnajual saat proyek berjalan."
          ],
          footerLabel: "Batas Peran",
          footerValue: "Komitmen spesifikasi hanya sah setelah disetujui tim teknis",
          accent: "red"
        }
      },
      {
        id: "solution-design",
        stepCode: "03",
        title: "Solution Design",
        shortCue: "Paket perangkat & jasa",
        ownerCue: "Sales + Teknis + Gudang",
        modal: {
          badge: "Tahap 03 • Desain Solusi",
          subtitle: "Orkestrasi Perangkat & Layanan",
          title: "Menyusun Arsitektur Solusi yang Siap Dieksekusi",
          metric: "Terukur",
          metricLabel: "Opsi Realistis",
          summary:
            "Menggabungkan perangkat keras, konektivitas, dan layanan purnajual menjadi rancangan solusi yang selaras dengan stok dan kapabilitas.",
          highlights: [
            "Mengonfirmasi ketersediaan stok new/refurbished bergaransi bersama Warehouse & Purchasing.",
            "Menyusun opsi alternatif apabila terdapat batas anggaran atau waktu kirim."
          ],
          footerLabel: "Sinergi",
          footerValue: "Selaras antara kebutuhan klien, stok gudang, dan kapasitas engineer",
          accent: "slate"
        }
      },
      {
        id: "commercial-proposal",
        stepCode: "04",
        title: "Commercial Proposal",
        shortCue: "Scope, SLA & harga",
        ownerCue: "Sales + Finance",
        modal: {
          badge: "Tahap 04 • Proposal Komersial",
          subtitle: "Penawaran Tertulis Terstruktur",
          title: "Komponen Wajib Proposal Solusi & Kontrol Margin",
          metric: "9 Komponen",
          metricLabel: "Struktur Proposal",
          summary:
            "Setiap penawaran solusi mencantumkan rincian teknis, layanan, ketentuan garansi, harga, serta asumsi secara transparan.",
          highlights: [
            "Memuat scope kerja, spesifikasi tervalidasi, opsi perangkat, jasa instalasi, SLA, dan garansi.",
            "Menjelaskan timeline, struktur harga sesuai kontrol margin, dan asumsi/batasan yang disepakati."
          ],
          footerLabel: "Tata Kelola",
          footerValue: "Mencegah biaya tersembunyi dan melindungi gross margin perusahaan",
          accent: "slate"
        }
      },
      {
        id: "presentation",
        stepCode: "05",
        title: "Presentation",
        shortCue: "Nilai bisnis & dukungan",
        ownerCue: "Sales + Teknis + Marketing",
        modal: {
          badge: "Tahap 05 • Presentasi Klien",
          subtitle: "Menjual Nilai & Kepercayaan",
          title: "Memaparkan Dampak Bisnis, Opsi & Kesiapan Support",
          metric: "Konsultatif",
          metricLabel: "Gaya Paparan",
          summary:
            "Menjelaskan bagaimana solusi menjawab masalah operasional klien beserta kesiapan tim implementasi dan purnajual.",
          highlights: [
            "Didukung materi pemasaran & branding yang profesional serta pendampingan teknis bila diperlukan.",
            "Menunjukkan studi kasus relevan tanpa membuka data rahasia pelanggan lain."
          ],
          footerLabel: "Fokus",
          footerValue: "Keandalan solusi, kepastian garansi, dan rencana implementasi",
          accent: "slate"
        }
      },
      {
        id: "delivery-handover",
        stepCode: "06",
        title: "Delivery & Handover",
        shortCue: "Checklist lintas divisi",
        ownerCue: "Project / Tech / Warehouse / Fin",
        modal: {
          badge: "Tahap 06 • Serah Terima Order",
          subtitle: "Eksekusi Terkendali",
          title: "Handover Resmi Sales ke Project, Technical, Warehouse & Finance",
          metric: "Checklist",
          metricLabel: "Standar Serah Terima",
          summary:
            "Memastikan seluruh janji proposal berpindah mulus ke tim pelaksana dan penagihan dengan checklist tertulis.",
          highlights: [
            "Menyerahkan rincian scope, daftar unit tervalidasi, jadwal instalasi, SLA, dan termin pembayaran.",
            "Menghilangkan celah informasi antara ekspektasi pelanggan dan tim eksekusi lapangan."
          ],
          footerLabel: "Kontrol",
          footerValue: "Order diproses dengan dokumen serah terima yang terverifikasi",
          accent: "red"
        }
      },
      {
        id: "after-sales",
        stepCode: "07",
        title: "After-Sales",
        shortCue: "Support & repeat",
        ownerCue: "Sales + Support",
        modal: {
          badge: "Tahap 07 • Layanan Purnajual",
          subtitle: "Retensi & Ekspansi Akun",
          title: "Support, Maintenance, Upgrade, Sparepart & Review Berkala",
          metric: "Berulang",
          metricLabel: "Pertumbuhan Akun",
          summary:
            "Menjaga kinerja sistem setelah go-live sekaligus membuka peluang pemeliharaan, suku cadang, dan ekspansi berikutnya.",
          highlights: [
            "Menjalankan dukungan support, maintenance rutin, penyediaan sparepart, dan opsi upgrade.",
            "Melakukan review kebutuhan berkala sebagai pintu masuk kontrak berulang dan referensi."
          ],
          footerLabel: "Dampak",
          footerValue: "Membangun kepercayaan jangka panjang dan repeat business B2B",
          accent: "slate"
        }
      }
    ]
  },
  packagesSection: {
    sectionTitle: "Empat Contoh Paket Solusi (Struktur Konsisten)",
    exampleNote: "Contoh Ilustrasi — Paket layak jual, SLA & spek menunggu validasi tim teknis",
    rowLabels: {
      painPoint: "Pain Point",
      bundle: "Bundle",
      serviceAttach: "Service Attach",
      proofAssumption: "Proof / Asumsi"
    },
    packages: [
      {
        id: "office-umkm",
        title: "Office / UMKM",
        statusTag: "Paket Kerja Kantor",
        painPoint: "Pengadaan perangkat & jaringan kantor terpisah tanpa dukungan satu pintu",
        bundle: "PC / laptop + perangkat network + layanan internet",
        serviceAttach: "Setup awal, instalasi jaringan & maintenance berkala",
        proofAssumption: "Asumsi: daftar paket layak jual, SLA & garansi difinalisasi bersama teknis",
        modal: {
          badge: "Contoh Paket 01 • Office / UMKM",
          subtitle: "Solusi Ruang Kerja Terintegrasi",
          title: "Paket Office / UMKM (Perangkat, Jaringan & Maintenance)",
          metric: "Contoh",
          metricLabel: "Status Paket",
          summary:
            "Membantu kantor baru atau UMKM mendapatkan perangkat kerja, jaringan lokal, internet, dan dukungan pemeliharaan dalam satu penawaran.",
          highlights: [
            "Pain point: klien harus mengurus vendor perangkat, router, internet, dan teknisi secara terpisah.",
            "Bundle & jasa: PC/laptop + network + internet disertai instalasi awal dan maintenance.",
            "Asumsi: paket layak jual, SLA respons, serta cakupan garansi harus disahkan tim terkait."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Validasi kesiapan unit, stok & ruang lingkup maintenance",
          accent: "slate"
        }
      },
      {
        id: "server-backup",
        title: "Server & Backup",
        statusTag: "Wajib Validasi Engineer",
        painPoint: "Risiko downtime operasional, kapasitas server & ketiadaan cadangan data",
        bundle: "Server baru/second tervalidasi + network (+ opsi storage/backup)",
        serviceAttach: "Sizing bersama engineer, instalasi, garansi & kontrak support",
        proofAssumption: "Tanpa merek/spek tertentu sebelum disetujui technical team",
        modal: {
          badge: "Contoh Paket 02 • Server & Backup",
          subtitle: "Infrastruktur Tervalidasi Teknis",
          title: "Paket Server & Backup (Tanpa Spek/Brand Sebelum Sign-Off)",
          metric: "Gate Teknis",
          metricLabel: "Syarat Wajib",
          summary:
            "Menjawab kebutuhan infrastruktur komputasi dan ketahanan data secara realistis dengan pengawasan penuh tim engineer.",
          highlights: [
            "Pain point: gangguan server menghentikan operasi bisnis dan berisiko kehilangan data.",
            "Bundle & jasa: opsi server baru/second + network (+ storage/backup bila tersedia) + instalasi/support.",
            "Batas klaim: dilarang menyebut merek, tipe, atau spesifikasi server sebelum disetujui technical team."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Kompetensi engineer, garansi & SLA wajib dikonfirmasi terlebih dahulu",
          accent: "red"
        }
      },
      {
        id: "device-refresh",
        title: "Device Refresh",
        statusTag: "Refurbished Bergaransi",
        painPoint: "Kebutuhan peremajaan armada PC/laptop dengan efisiensi belanja modal",
        bundle: "Unit PC / laptop refurbished bergaransi sesuai kebutuhan divisi",
        serviceAttach: "QC kondisi fisik/fungsi, garansi tertulis & ketersediaan sparepart",
        proofAssumption: "Asumsi: penjelasan kondisi jujur, masa garansi & stok tersedia terkonfirmasi",
        modal: {
          badge: "Contoh Paket 03 • Device Refresh",
          subtitle: "Peremajaan Armada Terkendali",
          title: "Paket Device Refresh Berbasis Refurbished Bergaransi",
          metric: "Refurbished",
          metricLabel: "Transparan & Teruji",
          summary:
            "Memanfaatkan kekuatan inventori perangkat second/refurbished untuk program refresh perusahaan dengan kejelasan garansi.",
          highlights: [
            "Pain point: perangkat kerja lama melambat sementara anggaran pengadaan unit baru terbatas.",
            "Bundle & jasa: batch PC/laptop refurbished + QC teknis + garansi & support penggantian.",
            "Asumsi: sales wajib transparan atas kondisi unit serta batas garansi dan dukungan suku cadang."
          ],
          footerLabel: "Etika Jual",
          footerValue: "Transparansi kondisi refurbished dan cakupan garansi tertulis",
          accent: "slate"
        }
      },
      {
        id: "branch-connectivity",
        title: "Branch Connectivity",
        statusTag: "Jaringan & Internet Cabang",
        painPoint: "Konektivitas antar-kantor/cabang tidak stabil & pemantauan jaringan minim",
        bundle: "Router / switch / perangkat network + layanan internet bisnis",
        serviceAttach: "Validasi kebutuhan teknis, instalasi lokasi & dukungan support SLA",
        proofAssumption: "Asumsi: kesiapan cakupan jaringan, kompetensi instalasi & SLA terverifikasi",
        modal: {
          badge: "Contoh Paket 04 • Branch Connectivity",
          subtitle: "Konektivitas Bisnis Multi-Titik",
          title: "Paket Branch Connectivity (Networking + Internet + Support)",
          metric: "Konektivitas",
          metricLabel: "Fokus Layanan",
          summary:
            "Menghubungkan operasional kantor pusat dan cabang melalui kombinasi perangkat jaringan, internet, dan instalasi terkelola.",
          highlights: [
            "Pain point: putus koneksi mengganggu transaksi cabang dan sulit melacak sumber gangguan.",
            "Bundle & jasa: perangkat networking + layanan internet + instalasi dan support purnajual.",
            "Asumsi: jangkauan area internet, kesiapan perangkat, dan SLA support perlu diverifikasi bersama."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Konfirmasi kesiapan teknis & cakupan layanan sebelum penawaran",
          accent: "slate"
        }
      }
    ]
  },
  evidenceFooter:
    "Data / Bukti Diperlukan: Daftar paket produk & layanan layak jual, peta kompetensi engineer, standar SLA, garansi, cakupan instalasi & support, serta studi kasus proyek tanpa membuka data rahasia pelanggan."
};

export const slideDataEn: Slide13Data = {
  eyebrow: "Sales Motion Transformation",
  title: "Product-to-Solution: Sales as IT Consultant",
  subtitle:
    "Shifting from single-unit selling to orchestrating realistic business solutions with technical, marketing, and branding teams.",
  roleShiftCue: "Single Units → Integrated Solutions",
  journeySection: {
    sectionTitle: "7-Stage Consultative Sales Journey",
    guardrailNote: "Core Rule: Sales must never invent specs — technical team validation is mandatory",
    stages: [
      {
        id: "discovery",
        stepCode: "01",
        title: "Discovery",
        shortCue: "Needs & budget",
        ownerCue: "Sales + Client",
        modal: {
          badge: "Stage 01 • Consultative Discovery",
          subtitle: "Diagnose Before Quoting",
          title: "Discovering Business Process, IT Environment & Budget",
          metric: "8 Factors",
          metricLabel: "Discovery Scope",
          summary:
            "Captures full operational context before proposing hardware so recommendations remain fit-for-purpose and viable.",
          highlights: [
            "Probes business workflow, pain points, user count, and current IT environment.",
            "Confirms budget envelope, delivery timeline, technical standards, and decision makers."
          ],
          footerLabel: "Output",
          footerValue: "Structured requirement brief handed to the technical team",
          accent: "slate"
        }
      },
      {
        id: "technical-validation",
        stepCode: "02",
        title: "Technical Validation",
        shortCue: "Engineer feasibility",
        ownerCue: "Sales + Engineer",
        modal: {
          badge: "Stage 02 • Mandatory Technical Gate",
          subtitle: "Specification Safeguard",
          title: "Joint Analysis & Validation with Technical / Engineering",
          metric: "Mandatory",
          metricLabel: "Technical Sign-Off",
          summary:
            "Sales reps never invent technical specifications or compatibility claims without formal engineering review.",
          highlights: [
            "Validates topology, capacity, new/refurbished compatibility, and installation feasibility.",
            "Prevents unrealistic commitments and post-delivery customer disputes."
          ],
          footerLabel: "Role Guardrail",
          footerValue: "Spec commitments are valid only after technical sign-off",
          accent: "red"
        }
      },
      {
        id: "solution-design",
        stepCode: "03",
        title: "Solution Design",
        shortCue: "Hardware & service",
        ownerCue: "Sales + Tech + Warehouse",
        modal: {
          badge: "Stage 03 • Solution Design",
          subtitle: "Hardware & Service Orchestration",
          title: "Designing Deliverable Hardware, Network & Service Bundles",
          metric: "Feasible",
          metricLabel: "Validated Options",
          summary:
            "Combines hardware, connectivity, and services into realistic options aligned with live inventory and team capacity.",
          highlights: [
            "Verifies new or warranted refurbished stock availability with Warehouse & Purchasing.",
            "Prepares tiered options when client budget or lead-time constraints apply."
          ],
          footerLabel: "Alignment",
          footerValue: "Balanced across client needs, stock readiness & engineer bandwidth",
          accent: "slate"
        }
      },
      {
        id: "commercial-proposal",
        stepCode: "04",
        title: "Commercial Proposal",
        shortCue: "Scope, SLA & price",
        ownerCue: "Sales + Finance",
        modal: {
          badge: "Stage 04 • Commercial Proposal",
          subtitle: "Structured Written Offer",
          title: "Complete Solution Quote & Margin Governance",
          metric: "9 Elements",
          metricLabel: "Proposal Checklist",
          summary:
            "Every solution proposal states scope, validated specs, hardware options, services, warranty, pricing, and assumptions.",
          highlights: [
            "Covers work scope, approved specs, device options, installation services, SLA, and warranty.",
            "Documents timeline, margin-governed pricing, and explicit commercial assumptions."
          ],
          footerLabel: "Governance",
          footerValue: "Prevents hidden costs and protects commercial gross margin",
          accent: "slate"
        }
      },
      {
        id: "presentation",
        stepCode: "05",
        title: "Presentation",
        shortCue: "Business value & support",
        ownerCue: "Sales + Tech + Marketing",
        modal: {
          badge: "Stage 05 • Client Presentation",
          subtitle: "Presenting Value & Reliability",
          title: "Communicating Business Impact, Options & Support Readiness",
          metric: "Consultative",
          metricLabel: "Pitch Approach",
          summary:
            "Demonstrates how the bundled solution solves operational bottlenecks with backed installation and support.",
          highlights: [
            "Supported by cohesive marketing/branding collateral and engineering participation when needed.",
            "References relevant project cases without disclosing confidential client data."
          ],
          footerLabel: "Focus",
          footerValue: "Operational reliability, clear warranty & execution confidence",
          accent: "slate"
        }
      },
      {
        id: "delivery-handover",
        stepCode: "06",
        title: "Delivery & Handover",
        shortCue: "Cross-team checklist",
        ownerCue: "Project / Tech / Warehouse / Fin",
        modal: {
          badge: "Stage 06 • Order Handover",
          subtitle: "Controlled Execution",
          title: "Formal Handover from Sales to Project, Technical, Warehouse & Finance",
          metric: "Checklist",
          metricLabel: "Handover Standard",
          summary:
            "Transfers approved commitments smoothly to fulfillment, engineering, and billing using a standardized checklist.",
          highlights: [
            "Passes verified scope, approved unit list, installation timeline, SLA, and billing terms.",
            "Eliminates gaps between what was promised in sales and delivered on site."
          ],
          footerLabel: "Control",
          footerValue: "Fulfillment starts only with a complete handover checklist",
          accent: "red"
        }
      },
      {
        id: "after-sales",
        stepCode: "07",
        title: "After-Sales",
        shortCue: "Support & repeat",
        ownerCue: "Sales + Support",
        modal: {
          badge: "Stage 07 • After-Sales Care",
          subtitle: "Retention & Account Growth",
          title: "Support, Maintenance, Upgrades, Spare Parts & Next-Need Review",
          metric: "Recurring",
          metricLabel: "Account Growth",
          summary:
            "Protects post-deployment uptime while unlocking maintenance renewals, spare parts, and follow-on upgrades.",
          highlights: [
            "Delivers ongoing support, scheduled maintenance, spare parts supply, and upgrade paths.",
            "Conducts periodic account reviews to surface expansion and repeat opportunities."
          ],
          footerLabel: "Impact",
          footerValue: "Builds long-term B2B trust and recurring commercial momentum",
          accent: "slate"
        }
      }
    ]
  },
  packagesSection: {
    sectionTitle: "Four Example Solution Packages (Consistent Structure)",
    exampleNote: "Illustrative Examples — Sellable bundles, SLAs & specs require technical sign-off",
    rowLabels: {
      painPoint: "Pain Point",
      bundle: "Bundle",
      serviceAttach: "Service Attach",
      proofAssumption: "Proof / Assumption"
    },
    packages: [
      {
        id: "office-umkm",
        title: "Office / UMKM",
        statusTag: "Workplace Bundle",
        painPoint: "Fragmented office hardware, network & internet setup across vendors",
        bundle: "PCs / laptops + networking gear + business internet",
        serviceAttach: "Initial setup, network installation & scheduled maintenance",
        proofAssumption: "Assumption: sellable bundles, SLA & warranty terms confirmed internally",
        modal: {
          badge: "Example Package 01 • Office / UMKM",
          subtitle: "Integrated Workplace Setup",
          title: "Office / UMKM Package (Devices, Network & Maintenance)",
          metric: "Example",
          metricLabel: "Package Status",
          summary:
            "Gives offices and SMEs a single point of delivery for endpoints, local networking, internet, and maintenance.",
          highlights: [
            "Pain point: buyers otherwise coordinate device sellers, ISPs, and technicians separately.",
            "Bundle & attach: PC/laptop + network + internet backed by setup and maintenance.",
            "Assumption: final bundle scope, response SLAs, and warranty require internal approval."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Confirmed stock availability & maintenance coverage boundaries",
          accent: "slate"
        }
      },
      {
        id: "server-backup",
        title: "Server & Backup",
        statusTag: "Engineer Sign-Off Required",
        painPoint: "Operational downtime risk, server sizing & lack of data recovery",
        bundle: "Validated new/second server + network (+ storage/backup if available)",
        serviceAttach: "Engineer sizing validation, installation, warranty & support",
        proofAssumption: "No unapproved server brands/specs prior to technical team sign-off",
        modal: {
          badge: "Example Package 02 • Server & Backup",
          subtitle: "Engineer-Validated Infrastructure",
          title: "Server & Backup Package (No Brand/Spec Claims Before Approval)",
          metric: "Tech Gate",
          metricLabel: "Mandatory Check",
          summary:
            "Addresses compute reliability and backup resilience strictly under engineering sizing and approval.",
          highlights: [
            "Pain point: server outages halt daily operations and expose critical business data.",
            "Bundle & attach: validated new/second server + network (+ storage/backup) + install/support.",
            "Guardrail: never quote specific server brands or specs before technical team sign-off."
          ],
          footerLabel: "Claim Boundary",
          footerValue: "Engineer competence, warranty & SLA terms must be verified first",
          accent: "red"
        }
      },
      {
        id: "device-refresh",
        title: "Device Refresh",
        statusTag: "Warranted Refurbished",
        painPoint: "Fleet refresh stalled by full new-hardware CapEx constraints",
        bundle: "Warranted refurbished PC / laptop batches matched to role needs",
        serviceAttach: "Pre-delivery QC, written warranty & spare-part backing",
        proofAssumption: "Assumption: transparent unit grading, warranty scope & stock confirmed",
        modal: {
          badge: "Example Package 03 • Device Refresh",
          subtitle: "Cost-Effective Fleet Upgrade",
          title: "Device Refresh Package Based on Warranted Refurbished Units",
          metric: "Refurbished",
          metricLabel: "Clear Grading",
          summary:
            "Turns existing refurbished hardware capabilities into structured corporate refresh offers with clear warranties.",
          highlights: [
            "Pain point: aging workstations slow teams down while new-device budgets are tight.",
            "Bundle & attach: warranted refurbished PC/laptop fleet + QC + replacement support.",
            "Assumption: reps must disclose refurbished condition, warranty terms, and limits honestly."
          ],
          footerLabel: "Sales Ethics",
          footerValue: "Transparent refurbished condition grading & written warranty",
          accent: "slate"
        }
      },
      {
        id: "branch-connectivity",
        title: "Branch Connectivity",
        statusTag: "Network & Internet",
        painPoint: "Unstable multi-branch connectivity & fragmented network upkeep",
        bundle: "Routers / switches / network gear + business internet service",
        serviceAttach: "Technical site check, deployment & SLA-backed support",
        proofAssumption: "Assumption: coverage readiness, install capacity & SLA verified",
        modal: {
          badge: "Example Package 04 • Branch Connectivity",
          subtitle: "Multi-Site Business Links",
          title: "Branch Connectivity Package (Networking + Internet + Support)",
          metric: "Connectivity",
          metricLabel: "Service Focus",
          summary:
            "Stabilizes headquarters-to-branch links by combining networking hardware, internet access, and ongoing support.",
          highlights: [
            "Pain point: link drops disrupt branch transactions and lack single-point troubleshooting.",
            "Bundle & attach: networking hardware + internet service + installation and SLA support.",
            "Assumption: service area availability, gear readiness, and SLAs require verification."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Verify technical feasibility & coverage prior to commitment",
          accent: "slate"
        }
      }
    ]
  },
  evidenceFooter:
    "Required Data / Proof: Sellable product & service catalog, engineer competence roster, SLA & warranty terms, installation/support scope, and anonymized project case studies."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide13Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide13Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 13,
  folder: "13",
  sectionId: 6,
  navTitle: {
    in: "Product-to-Solution",
    en: "Product-to-Solution"
  },
  headerTitle: {
    in: "Product-to-Solution - Sales sebagai Konsultan IT",
    en: "Product-to-Solution - Sales as IT Consultant"
  },
  category: {
    in: "III. Membangun Organisasi dan Kemampuan",
    en: "III. Building Organization & Capabilities"
  },
  section: {
    in: "III. Membangun Organisasi dan Kemampuan",
    en: "III. Building Organization & Capabilities"
  }
};
