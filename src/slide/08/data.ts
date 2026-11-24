import { useLanguage } from '@/contexts/LanguageContext';

export type MilestoneId = 'm0' | 'm6' | 'm9' | 'm12';
export type EngineId = 'retail-engine' | 'dist-engine' | 'b2b-engine' | 'b2g-engine';
export type GuardrailId = 'gross-margin' | 'overdue-ar' | 'stock-aging' | 'baseline-evidence';

export interface Slide08ModalPayload {
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

export interface RangeBarItem {
  id: 'current' | 'target';
  label: string;
  rangeText: string;
  minBillions: number;
  maxBillions: number;
  note: string;
}

export interface MilestoneItem {
  id: MilestoneId;
  period: string;
  revenueRange: string;
  b2bB2gMix: string;
  modal: Slide08ModalPayload;
}

export interface GrowthEngineItem {
  id: EngineId;
  portfolio: string;
  lever: string;
  note: string;
  modal: Slide08ModalPayload;
}

export interface GuardrailCardItem {
  id: GuardrailId;
  tag: string;
  title: string;
  metricLine: string;
  modal: Slide08ModalPayload;
}

export interface Slide08Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  bridgePanel: {
    sectionTitle: string;
    gapLabel: string;
    gapValue: string;
    midpointNote: string;
    bars: RangeBarItem[];
    axisTicks: string[];
  };
  milestonesSection: {
    sectionTitle: string;
    proposalQualifier: string;
    items: MilestoneItem[];
  };
  guardrailPanel: {
    sectionTitle: string;
    items: GuardrailCardItem[];
  };
  enginesSection: {
    sectionTitle: string;
    nonEqualSplitNote: string;
    items: GrowthEngineItem[];
  };
}

export const slideDataId: Slide08Data = {
  eyebrow: "Jembatan Pertumbuhan",
  title: "Dari Rp2,5–3 Miliar ke Rp4–5 Miliar / Bulan",
  subtitle:
    "Menerjemahkan target omzet perusahaan ke mesin pertumbuhan portofolio dan kontrol profitabilitas.",
  bridgePanel: {
    sectionTitle: "Rentang Omzet & Gap Pertumbuhan Bulanan",
    gapLabel: "Gap Aritmetika",
    gapValue: "+Rp1,5–2,0 M / bln",
    midpointNote:
      "Ilustrasi aritmetika titik tengah: Rp2,75 M → Rp4,5 M (+Rp1,75 M atau ≈63,6%) — BUKAN forecast resmi.",
    bars: [
      {
        id: "current",
        label: "Current (Brief)",
        rangeText: "Rp2,5–3,0 M",
        minBillions: 2.5,
        maxBillions: 3.0,
        note: "Basis saat ini (40/40/20)"
      },
      {
        id: "target",
        label: "Target Perusahaan",
        rangeText: "Rp4,0–5,0 M",
        minBillions: 4.0,
        maxBillions: 5.0,
        note: "Tim 15 org (brief)"
      }
    ],
    axisTicks: ["Rp0", "Rp1 M", "Rp2 M", "Rp3 M", "Rp4 M", "Rp5 M"]
  },
  milestonesSection: {
    sectionTitle: "Milestone Sumber & Usulan Bauran B2B+B2G",
    proposalQualifier:
      "Persentase B2B+B2G adalah usulan kandidat (tunggu data baseline & persetujuan)",
    items: [
      {
        id: "m0",
        period: "M0 • Saat Ini",
        revenueRange: "Rp2,5–3,0 M",
        b2bB2gMix: "B2B 20% • B2G tbd",
        modal: {
          badge: "M0 • Baseline",
          subtitle: "Posisi Awal Saat Ini",
          title: "Baseline Rp2,5–3,0 Miliar / Bulan",
          metric: "Rp2,5–3,0 M",
          metricLabel: "Omzet Brief Saat Ini",
          summary:
            "Menjadi titik awal sebelum penguatan komposisi B2B dan pengembangan akun B2G.",
          highlights: [
            "Komposisi saat ini di brief: Retail 40%, Distribusi 40%, B2B 20%.",
            "Baseline B2G belum tersedia sehingga belum dijumlahkan ke persentase awal.",
            "Perlu verifikasi apakah angka brief bersifat gross/net dan termasuk PPN."
          ],
          footerLabel: "Validasi",
          footerValue: "Butuh data omzet aktual 12–24 bulan per segmen & sales",
          accent: "slate"
        }
      },
      {
        id: "m6",
        period: "M6 • Tahap 1",
        revenueRange: "Rp3,0–3,5 M",
        b2bB2gMix: "Usulan B2B+B2G: 25%",
        modal: {
          badge: "M6 • Milestone Sumber",
          subtitle: "Tahap Awal Ekspansi Terarah",
          title: "Target M6 Rp3,0–3,5 Miliar / Bulan",
          metric: "25%",
          metricLabel: "Usulan B2B+B2G",
          summary:
            "Menaikkan rentang omzet lewat aktivasi pelanggan korporat, SI, dan kesiapan dokumen B2G.",
          highlights: [
            "Milestone omzet M6 bersumber dari brief: Rp3,0–3,5 miliar per bulan.",
            "Target bauran B2B+B2G 25% adalah usulan kandidat, bergantung pada baseline dan stok.",
            "Retail & Distribusi tetap menjaga stabilitas arus kas selama B2B/B2G berkembang."
          ],
          footerLabel: "Status",
          footerValue: "Tunduk pada verifikasi baseline dan persetujuan Direksi",
          accent: "slate"
        }
      },
      {
        id: "m9",
        period: "M9 • Tahap 2",
        revenueRange: "Rp3,5–4,0 M",
        b2bB2gMix: "Usulan B2B+B2G: 30%",
        modal: {
          badge: "M9 • Milestone Sumber",
          subtitle: "Penguatan Konversi Pipeline",
          title: "Target M9 Rp3,5–4,0 Miliar / Bulan",
          metric: "30%",
          metricLabel: "Usulan B2B+B2G",
          summary:
            "Memperkuat repeat order akun B2B serta konversi peluang subcon/e-Catalog yang lolos seleksi.",
          highlights: [
            "Milestone omzet M9 bersumber dari brief: Rp3,5–4,0 miliar per bulan.",
            "Usulan bauran B2B+B2G 30% dievaluasi dari kapasitas tim 15 orang dan daya tahan kas.",
            "Pipeline tetap dikontrol oleh guardrail gross margin dan ketepatan waktu bayar."
          ],
          footerLabel: "Status",
          footerValue: "Usulan kandidat — ditinjau terhadap realisasi M6",
          accent: "slate"
        }
      },
      {
        id: "m12",
        period: "M12 • Target",
        revenueRange: "Rp4,0–5,0 M",
        b2bB2gMix: "Usulan B2B+B2G: 40%",
        modal: {
          badge: "M12 • Target Perusahaan",
          subtitle: "Skala Target Tahun Pertama",
          title: "Target M12 Rp4,0–5,0 Miliar / Bulan",
          metric: "40%",
          metricLabel: "Usulan B2B+B2G",
          summary:
            "Mencapai rentang target Rp4–5 miliar dengan usulan porsi B2B+B2G 40% (~Rp1,6–2,0 miliar bila definisinya sejalan).",
          highlights: [
            "Bila 40% dihitung dari total omzet Rp4–5 miliar, nilainya setara ±Rp1,6–2,0 miliar/bulan.",
            "Perlu konfirmasi definisi metrik 40%: berbasis invoice, penjualan, atau omzet diakui.",
            "Target perusahaan menjadi acuan arah kerja, bukan jaminan pribadi sebelum data baseline sah."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Konfirmasi definisi metrik 40% & kesiapan stok/modal kerja",
          accent: "slate"
        }
      }
    ]
  },
  guardrailPanel: {
    sectionTitle: "Guardrail Pertumbuhan Sehat",
    items: [
      {
        id: "gross-margin",
        tag: "Guardrail 01",
        title: "Gross Margin",
        metricLine: "Jaga margin per segmen — anti kejar omzet tipis",
        modal: {
          badge: "Guardrail 01 • Profitabilitas",
          subtitle: "Kontrol Harga & Biaya Langsung",
          title: "Disiplin Gross Margin per Portofolio",
          summary:
            "Setiap kenaikan penjualan wajib menghasilkan margin kontribusi positif setelah biaya langsung dan retur.",
          highlights: [
            "Mencegah diskon agresif hanya demi mengejar angka omzet bulanan.",
            "Mencatat gross profit, biaya langsung proyek, dan tingkat retur per segmen.",
            "Menjadi syarat wajib sebelum menyetujui penawaran B2B atau tender B2G."
          ],
          footerLabel: "Kontrol",
          footerValue: "Review margin per transaksi besar bersama Finance & Direksi",
          accent: "slate"
        }
      },
      {
        id: "overdue-ar",
        tag: "Guardrail 02",
        title: "Overdue AR / DSO",
        metricLine: "Kualitas pembayaran & cash collection per segmen",
        modal: {
          badge: "Guardrail 02 • Arus Kas",
          subtitle: "Kualitas Piutang Pelanggan",
          title: "Kendali Piutang Jatuh Tempo (Overdue AR / DSO)",
          summary:
            "Pertumbuhan B2B, B2G, dan Distribusi harus terjaga likuiditasnya lewat pengawasan termin dan penagihan.",
          highlights: [
            "Mengawasi piutang jatuh tempo dan DSO agar modal kerja tidak macet.",
            "Penyaluran barang ke reseller atau proyek baru mengikuti kepatuhan bayar.",
            "Menjaga keseimbangan termin panjang B2B/B2G dengan kas cepat Retail."
          ],
          footerLabel: "Kontrol",
          footerValue: "Data aging AR dan cash collection dipantau berkala per segmen",
          accent: "slate"
        }
      },
      {
        id: "stock-aging",
        tag: "Guardrail 03",
        title: "Stock Aging",
        metricLine: "Keselarasan stok unit & pencegahan stok lambat",
        modal: {
          badge: "Guardrail 03 • Inventori",
          subtitle: "Efisiensi Perputaran Barang",
          title: "Kendali Umur Stok (Stock Aging)",
          summary:
            "Pertumbuhan omzet diarahkan untuk memutar stok aktif dan menekan risiko barang menumpuk terlalu lama.",
          highlights: [
            "Menyelaraskan target penjualan tiap portofolio dengan ketersediaan stok aktual.",
            "Mendorong pergerakan stok berumur panjang melalui bundling atau penawaran terarah.",
            "Mengurangi risiko penurunan nilai barang akibat perubahan siklus teknologi."
          ],
          footerLabel: "Kontrol",
          footerValue: "Terhubung langsung ke pelaporan aging dan reorder gudang",
          accent: "slate"
        }
      },
      {
        id: "baseline-evidence",
        tag: "Bukti Wajib",
        title: "Data Baseline & Definisi",
        metricLine: "Omzet 12–24 bln • Gross/Net/PPN • Definisi 40%",
        modal: {
          badge: "Kesiapan Data • Audit Internal",
          subtitle: "Data / Bukti yang Disiapkan",
          title: "Verifikasi Sebelum Memecah Target Segmen",
          summary:
            "Pembagian kontribusi per portofolio baru sah ditetapkan setelah tiga kelompok data historis dan definisi ini dikonfirmasi.",
          highlights: [
            "Omzet aktual 12–24 bulan per bulan, per segmen, per sales (beserta basis gross/net & PPN).",
            "Gross profit/margin, biaya langsung, retur, piutang, dan cash collection per segmen.",
            "Konfirmasi definisi target 40% B2B+B2G (invoice/penjualan/omzet diakui) serta baseline B2G."
          ],
          footerLabel: "Aturan",
          footerValue: "Tidak membagi rata gap Rp1,5–2 M sebelum data tersedia",
          accent: "slate"
        }
      }
    ]
  },
  enginesSection: {
    sectionTitle: "Empat Mesin Pertumbuhan Portofolio",
    nonEqualSplitNote:
      "Kontribusi tiap mesin ditetapkan setelah baseline — gap Rp1,5–2 M TIDAK dibagi rata",
    items: [
      {
        id: "retail-engine",
        portfolio: "Mesin 01 • Retail",
        lever: "Conversion & Basket Size",
        note: "Kontribusi ditetapkan pasca-baseline",
        modal: {
          badge: "Mesin 01 • Retail",
          subtitle: "Showroom, Online & Telesales",
          title: "Meningkatkan Konversi & Basket Size",
          summary:
            "Menangkap permintaan langsung dengan respons leads cepat dan nilai per transaksi yang lebih sehat.",
          highlights: [
            "Fokus pada kecepatan respons leads, konversi showroom/online, dan cross-sell aksesori.",
            "Menjaga peran Retail sebagai penopang perputaran stok cepat dan kas tunai.",
            "Ekspansi area tetap diuji lewat pilot lokasi sebelum membuka banyak titik."
          ],
          footerLabel: "Catatan",
          footerValue: "Porsi kenaikan dihitung dari data transaksi historis Retail",
          accent: "slate"
        }
      },
      {
        id: "dist-engine",
        portfolio: "Mesin 02 • Distribusi",
        lever: "Active Reseller & Repeat",
        note: "Kontribusi ditetapkan pasca-baseline",
        modal: {
          badge: "Mesin 02 • Distribusi",
          subtitle: "Toko Komputer & Partner",
          title: "Memperluas Reseller Aktif & Repeat Order",
          summary:
            "Menumbuhkan volume suplai lewat reaktivasi mitra rutin dan disiplin batas kredit.",
          highlights: [
            "Mengawal jumlah reseller aktif dan frekuensi pembelian ulang tiap bulan.",
            "Memastikan ketersediaan barang reguler dan tier harga yang konsisten.",
            "Volume baru hanya disetujui bila status piutang partner aman."
          ],
          footerLabel: "Catatan",
          footerValue: "Porsi kenaikan menyesuaikan kapasitas stok dan plafon kredit",
          accent: "slate"
        }
      },
      {
        id: "b2b-engine",
        portfolio: "Mesin 03 • B2B",
        lever: "Solution & Project",
        note: "Kontribusi ditetapkan pasca-baseline",
        modal: {
          badge: "Mesin 03 • B2B",
          subtitle: "Korporat & System Integrator",
          title: "Mendorong Penjualan Solusi & Proyek",
          summary:
            "Menggeser transaksi korporat dari jual-putus unit menuju paket server, jaringan, solusi, dan layanan.",
          highlights: [
            "Menggarap end-user 7 sektor dan mitra SI melalui Account Manager wilayah serta KAM.",
            "Mengombinasikan perangkat baru/second dengan instalasi, internet, dan maintenance.",
            "Porsi pertumbuhan diukur dari kapasitas tim, pipeline valid, dan siklus proyek."
          ],
          footerLabel: "Catatan",
          footerValue: "Menunggu data historis margin, siklus jual, dan DSO B2B",
          accent: "slate"
        }
      },
      {
        id: "b2g-engine",
        portfolio: "Mesin 04 • B2G",
        lever: "Qualified Project",
        note: "Kontribusi ditetapkan pasca-baseline",
        modal: {
          badge: "Mesin 04 • B2G",
          subtitle: "Segmen Pengembangan",
          title: "Proyek Sektor Publik yang Lolos Seleksi",
          summary:
            "Membangun pemasukan B2G secara bertahap dimulai dari kemitraan subcon, e-Catalog, dan tender relevan.",
          highlights: [
            "Hanya mengejar paket yang lolos bid/no-bid (kelayakan unit, syarat legal, modal kerja).",
            "Menghindari asumsi kontribusi seragam sebelum ada baseline transaksi terverifikasi.",
            "Rekam jejak awal dibangun tanpa mengganggu likuiditas perusahaan."
          ],
          footerLabel: "Catatan",
          footerValue: "Tidak mencantumkan target angka pasti sebelum baseline B2G jelas",
          accent: "slate"
        }
      }
    ]
  }
};

export const slideDataEn: Slide08Data = {
  eyebrow: "Growth Bridge",
  title: "From Rp2.5–3B to Rp4–5B / Month",
  subtitle:
    "Breaking the company revenue target into portfolio growth engines governed by margin, AR, and stock discipline.",
  bridgePanel: {
    sectionTitle: "Monthly Revenue Interval & Growth Gap",
    gapLabel: "Arithmetic Gap",
    gapValue: "+Rp1.5–2.0B / mo",
    midpointNote:
      "Midpoint arithmetic illustration: Rp2.75B → Rp4.5B (+Rp1.75B or ≈63.6%) — NOT an official forecast.",
    bars: [
      {
        id: "current",
        label: "Current (Brief)",
        rangeText: "Rp2.5–3.0B",
        minBillions: 2.5,
        maxBillions: 3.0,
        note: "Current base (40/40/20)"
      },
      {
        id: "target",
        label: "Company Target",
        rangeText: "Rp4.0–5.0B",
        minBillions: 4.0,
        maxBillions: 5.0,
        note: "15-person team (brief)"
      }
    ],
    axisTicks: ["Rp0", "Rp1B", "Rp2B", "Rp3B", "Rp4B", "Rp5B"]
  },
  milestonesSection: {
    sectionTitle: "Source Milestones & Proposed B2B+B2G Mix",
    proposalQualifier:
      "B2B+B2G percentages are candidate proposals (subject to baseline & approval)",
    items: [
      {
        id: "m0",
        period: "M0 • Current",
        revenueRange: "Rp2.5–3.0B",
        b2bB2gMix: "B2B 20% • B2G tbd",
        modal: {
          badge: "M0 • Baseline",
          subtitle: "Current Starting Point",
          title: "Baseline Rp2.5–3.0 Billion / Month",
          metric: "Rp2.5–3.0B",
          metricLabel: "Current Brief Revenue",
          summary:
            "Establishes the starting point before scaling corporate B2B and developing qualified B2G accounts.",
          highlights: [
            "Brief revenue mix: Retail 40%, Distribution 40%, B2B 20%.",
            "B2G baseline is unavailable and is never added as an assumed share.",
            "Requires confirmation on gross/net basis and VAT inclusion."
          ],
          footerLabel: "Validation",
          footerValue: "Requires 12–24 months actual revenue by segment & rep",
          accent: "slate"
        }
      },
      {
        id: "m6",
        period: "M6 • Phase 1",
        revenueRange: "Rp3.0–3.5B",
        b2bB2gMix: "Proposed B2B+B2G: 25%",
        modal: {
          badge: "M6 • Source Milestone",
          subtitle: "Initial Targeted Expansion",
          title: "M6 Target Rp3.0–3.5 Billion / Month",
          metric: "25%",
          metricLabel: "Proposed B2B+B2G",
          summary:
            "Lifts monthly revenue range through corporate/SI activation and B2G compliance readiness.",
          highlights: [
            "M6 revenue milestone comes from the company brief: Rp3.0–3.5B per month.",
            "The 25% B2B+B2G share is a candidate proposal dependent on baseline and stock.",
            "Retail & Distribution protect cash flow stability while enterprise ramps."
          ],
          footerLabel: "Status",
          footerValue: "Subject to baseline verification and Director approval",
          accent: "slate"
        }
      },
      {
        id: "m9",
        period: "M9 • Phase 2",
        revenueRange: "Rp3.5–4.0B",
        b2bB2gMix: "Proposed B2B+B2G: 30%",
        modal: {
          badge: "M9 • Source Milestone",
          subtitle: "Pipeline Conversion Scale-Up",
          title: "M9 Target Rp3.5–4.0 Billion / Month",
          metric: "30%",
          metricLabel: "Proposed B2B+B2G",
          summary:
            "Expands repeat corporate business and selective subcon/e-Catalog project conversion.",
          highlights: [
            "M9 revenue milestone comes from the company brief: Rp3.5–4.0B per month.",
            "Proposed 30% B2B+B2G share is calibrated against 15-person team bandwidth and cash flow.",
            "Pipeline remains governed by gross margin and payment quality thresholds."
          ],
          footerLabel: "Status",
          footerValue: "Candidate proposal — reviewed against M6 actuals",
          accent: "slate"
        }
      },
      {
        id: "m12",
        period: "M12 • Target",
        revenueRange: "Rp4.0–5.0B",
        b2bB2gMix: "Proposed B2B+B2G: 40%",
        modal: {
          badge: "M12 • Company Target",
          subtitle: "Year-One Target Range",
          title: "M12 Target Rp4.0–5.0 Billion / Month",
          metric: "40%",
          metricLabel: "Proposed B2B+B2G",
          summary:
            "Reaches the Rp4–5B range with a proposed 40% B2B+B2G share (≈Rp1.6–2.0B if measured on the same revenue basis).",
          highlights: [
            "If 40% applies to total Rp4–5B revenue, B2B+B2G represents ≈Rp1.6–2.0B per month.",
            "Requires confirmation whether 40% is measured by invoiced, booked, or recognized revenue.",
            "Company target guides direction — not a personal guarantee prior to baseline proof."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Confirm 40% metric definition & stock/working-capital readiness",
          accent: "slate"
        }
      }
    ]
  },
  guardrailPanel: {
    sectionTitle: "Healthy Growth Guardrails",
    items: [
      {
        id: "gross-margin",
        tag: "Guardrail 01",
        title: "Gross Margin",
        metricLine: "Protect segment margin — reject empty revenue",
        modal: {
          badge: "Guardrail 01 • Profitability",
          subtitle: "Pricing & Direct Cost Control",
          title: "Gross Margin Discipline by Portfolio",
          summary:
            "Every revenue gain must deliver healthy contribution margin net of direct project costs and returns.",
          highlights: [
            "Prevents deep discounting purely to hit monthly top-line volume.",
            "Tracks gross profit, direct costs, and return rates per portfolio.",
            "Acts as a mandatory sign-off gate for B2B deals and B2G bids."
          ],
          footerLabel: "Control",
          footerValue: "Large deal margins reviewed with Finance and Directors",
          accent: "slate"
        }
      },
      {
        id: "overdue-ar",
        tag: "Guardrail 02",
        title: "Overdue AR / DSO",
        metricLine: "Payment terms & cash collection per segment",
        modal: {
          badge: "Guardrail 02 • Cash Flow",
          subtitle: "Receivables Quality",
          title: "Overdue AR & DSO Governance",
          summary:
            "B2B, B2G, and Distribution growth must protect liquidity via strict credit terms and collection tracking.",
          highlights: [
            "Monitors overdue receivables and DSO to prevent working-capital strain.",
            "New credit terms or reseller dispatches depend on payment compliance.",
            "Balances longer project terms with fast cash turns from Retail."
          ],
          footerLabel: "Control",
          footerValue: "AR aging and cash collection tracked regularly per segment",
          accent: "slate"
        }
      },
      {
        id: "stock-aging",
        tag: "Guardrail 03",
        title: "Stock Aging",
        metricLine: "Inventory alignment & slow-moving prevention",
        modal: {
          badge: "Guardrail 03 • Inventory",
          subtitle: "Inventory Turn Efficiency",
          title: "Stock Aging & Turn Control",
          summary:
            "Sales pushes align with actual stock on hand to clear aging inventory and prevent obsolescence.",
          highlights: [
            "Ties portfolio sales focus directly to verified warehouse inventory.",
            "Moves aging hardware through targeted bundling and B2B/Retail campaigns.",
            "Minimizes write-down risk from fast hardware lifecycle shifts."
          ],
          footerLabel: "Control",
          footerValue: "Linked directly to warehouse aging and reorder reports",
          accent: "slate"
        }
      },
      {
        id: "baseline-evidence",
        tag: "Required Proof",
        title: "Baseline & Metric Check",
        metricLine: "12–24m revenue • Gross/Net/VAT • 40% definition",
        modal: {
          badge: "Data Readiness • Internal Audit",
          subtitle: "Evidence Required",
          title: "Verification Before Segment Split",
          summary:
            "Final contribution splits per portfolio require confirming these three historical and accounting datasets.",
          highlights: [
            "12–24 months actual revenue by month, segment, and rep (gross/net & VAT basis).",
            "Gross profit/margin, direct costs, returns, AR, and cash collection per segment.",
            "Clarify the 40% B2B+B2G basis (invoiced, sales, or recognized) plus B2G baseline."
          ],
          footerLabel: "Rule",
          footerValue: "Do not split the Rp1.5–2B gap equally prior to baseline proof",
          accent: "slate"
        }
      }
    ]
  },
  enginesSection: {
    sectionTitle: "Four Portfolio Growth Engines",
    nonEqualSplitNote:
      "Segment shares set post-baseline — the Rp1.5–2B gap is NOT split equally",
    items: [
      {
        id: "retail-engine",
        portfolio: "Engine 01 • Retail",
        lever: "Conversion & Basket Size",
        note: "Share set post-baseline",
        modal: {
          badge: "Engine 01 • Retail",
          subtitle: "Showroom, Online & Telesales",
          title: "Lifting Lead Conversion & Basket Size",
          summary:
            "Captures direct consumer demand with fast lead response and higher order value per transaction.",
          highlights: [
            "Drives lead response speed, showroom/online close rates, and accessory cross-sell.",
            "Preserves Retail's role in fast stock turns and immediate cash generation.",
            "New geographic expansion stays gated behind area pilot economics."
          ],
          footerLabel: "Note",
          footerValue: "Contribution target anchored on historical Retail actuals",
          accent: "slate"
        }
      },
      {
        id: "dist-engine",
        portfolio: "Engine 02 • Distribution",
        lever: "Active Reseller & Repeat",
        note: "Share set post-baseline",
        modal: {
          badge: "Engine 02 • Distribution",
          subtitle: "Computer Stores & Partners",
          title: "Expanding Active Resellers & Repeat Orders",
          summary:
            "Grows volume replenishment via regular partner activation and disciplined credit limits.",
          highlights: [
            "Tracks active buying resellers and monthly reorder frequency.",
            "Maintains steady replenishment stock and transparent pricing tiers.",
            "Volume growth remains gated by partner receivables health."
          ],
          footerLabel: "Note",
          footerValue: "Contribution target scales with stock and credit capacity",
          accent: "slate"
        }
      },
      {
        id: "b2b-engine",
        portfolio: "Engine 03 • B2B",
        lever: "Solution & Project",
        note: "Share set post-baseline",
        modal: {
          badge: "Engine 03 • B2B",
          subtitle: "Corporate & System Integrators",
          title: "Scaling Solution & Project Revenue",
          summary:
            "Shifts corporate deals from standalone boxes to server, network, solution, and maintenance packages.",
          highlights: [
            "Targets 7 corporate verticals and SI partners via regional AMs and KAM.",
            "Bundles new/second hardware with installation, internet, and maintenance.",
            "Target share reflects team capacity, qualified pipeline, and deal cycles."
          ],
          footerLabel: "Note",
          footerValue: "Awaits historical B2B margin, sales cycle, and DSO baseline",
          accent: "slate"
        }
      },
      {
        id: "b2g-engine",
        portfolio: "Engine 04 • B2G",
        lever: "Qualified Project",
        note: "Share set post-baseline",
        modal: {
          badge: "Engine 04 • B2G",
          subtitle: "Development Segment",
          title: "Selective, Compliant Public Projects",
          summary:
            "Builds public-sector revenue step-by-step via subcon partnerships, e-Catalog, and eligible tenders.",
          highlights: [
            "Pursues only bids passing bid/no-bid gates (unit eligibility, legal docs, working capital).",
            "Avoids arbitrary equal share before verified transaction history exists.",
            "Builds track record selectively without straining company liquidity."
          ],
          footerLabel: "Note",
          footerValue: "No fixed revenue share assigned until B2G baseline is verified",
          accent: "slate"
        }
      }
    ]
  }
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide08Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide08Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 8,
  folder: "08",
  sectionId: 5,
  navTitle: {
    in: "Revenue Growth Bridge",
    en: "Revenue Growth Bridge"
  },
  headerTitle: {
    in: "Revenue Growth Bridge - Dari Rp2,5–3 Miliar ke Rp4–5 Miliar",
    en: "Revenue Growth Bridge - From Rp2.5–3B to Rp4–5B"
  },
  category: {
    in: "II. Menentukan Arah Pertumbuhan",
    en: "II. Setting Growth Direction"
  },
  section: {
    in: "II. Menentukan Arah Pertumbuhan",
    en: "II. Setting Growth Direction"
  }
};
