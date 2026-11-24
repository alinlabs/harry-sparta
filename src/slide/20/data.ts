import { useLanguage } from '@/contexts/LanguageContext';
import type { CrmFunnelStageId, CrmSegmentFilter } from './utils';

export interface Slide20ModalPayload {
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

export interface FunnelStageItem {
  id: CrmFunnelStageId;
  step: string;
  label: string;
  conversionPlaceholder: string;
  ownerCue: string;
  modal: Slide20ModalPayload;
}

export interface KanbanDealPlaceholder {
  id: string;
  stageLabel: string;
  accountPlaceholder: string;
  segment: Exclude<CrmSegmentFilter, 'ALL'>;
  ownerPlaceholder: string;
  valuePlaceholder: string;
  probabilityRule: string;
  nextActivity: string;
  modal: Slide20ModalPayload;
}

export interface CockpitMetricItem {
  id: string;
  label: string;
  placeholderValue: string;
  ruleCue: string;
  modal: Slide20ModalPayload;
}

export interface Slide20Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  fitGapCaveat: string;
  funnelSection: {
    sectionTitle: string;
    stages: FunnelStageItem[];
  };
  workspaceTabs: {
    kanban: string;
    objects: string;
  };
  kanbanSection: {
    title: string;
    placeholderNotice: string;
    deals: KanbanDealPlaceholder[];
  };
  crmObjectsSection: {
    objectsTitle: string;
    objects: string[];
    fieldsTitle: string;
    mandatoryFields: string[];
    integrationNote: string;
  };
  cockpitSection: {
    title: string;
    mockupLabel: string;
    filterLabels: {
      segment: string;
      source: string;
      period: string;
    };
    segments: Array<{ id: CrmSegmentFilter; label: string }>;
    sources: string[];
    periods: string[];
    metrics: CockpitMetricItem[];
    winRateRuleNote: string;
  };
  evidenceFooter: string;
}

export const slideDataId: Slide20Data = {
  eyebrow: 'Arsitektur Data & Pipeline Terintegrasi',
  title: 'CRM Internal & Sales Funnel: Sumber Data Tunggal',
  subtitle:
    'Menghubungkan leads, aktivitas, quotation, pipeline, closing, delivery, penagihan, dan retensi — menghilangkan ketergantungan pada chat pribadi atau spreadsheet terpisah.',
  fitGapCaveat: 'Mockup / Placeholder • Lakukan Fit-Gap Tools Eksisting Sebelum Build / Buy / Integrate',
  funnelSection: {
    sectionTitle: 'Sales Funnel 8 Tahap',
    stages: [
      {
        id: 'new-lead',
        step: '01',
        label: 'New Lead',
        conversionPlaceholder: '— %',
        ownerCue: 'Lead Desk',
        modal: {
          badge: 'Stage 01 • Intake',
          subtitle: 'Lead Capture & Source Tagging',
          title: 'New Lead — Masuk Sistem Secara Otomatis & Terlacak',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Setiap prospek dari marketplace, web, inbound call, atau canvassing langsung masuk CRM dengan sumber yang jelas.',
          highlights: [
            'Lead assignment mengikuti SOP resmi — dilarang berhenti di chat pribadi sales.',
            'Field wajib awal: source, segment kandidat, kontak/PIC, dan timestamp.',
            'Angka conversion diisi setelah baseline historis tersedia.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Lead, Contact/PIC & Partner Source',
          accent: 'slate'
        }
      },
      {
        id: 'contacted',
        step: '02',
        label: 'Contacted',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales Owner',
        modal: {
          badge: 'Stage 02 • Respons Awal',
          subtitle: 'First Response & Routing Hygiene',
          title: 'Contacted — Tindak Lanjut Pertama Tercatat di CRM',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Memastikan setiap lead tersentuh tepat waktu dan seluruh riwayat interaksi terekam pada akun.',
          highlights: [
            'Mencatat kanal kontak, hasil komunikasi pertama, dan jadwal next activity.',
            'Menjaga akuntabilitas lintas shift maupun pergantian personel.',
            'Response-time aktual diukur dari timestamp lead hingga kontak pertama.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Lead & Activity Log',
          accent: 'slate'
        }
      },
      {
        id: 'qualified',
        step: '03',
        label: 'Qualified',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales Owner',
        modal: {
          badge: 'Stage 03 • Kualifikasi',
          subtitle: 'Filter Kelayakan Peluang',
          title: 'Qualified — Konversi Menjadi Opportunity dengan Bukti Dasar',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Menyaring prospek yang memiliki kebutuhan nyata, kecocokan portofolio, estimasi nilai, dan jalur keputusan.',
          highlights: [
            'Wajib melengkapi owner, segment, source, estimasi nilai, dan expected close.',
            'Mencegah pipeline dipenuhi peluang semu tanpa bukti kebutuhan.',
            'Peluang tidak layak ditutup dini disertai reason terstruktur.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Account/Company, Contact & Opportunity',
          accent: 'slate'
        }
      },
      {
        id: 'discovery',
        step: '04',
        label: 'Discovery',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales + Tech',
        modal: {
          badge: 'Stage 04 • Pendalaman',
          subtitle: 'Kebutuhan Teknis & Spesifikasi',
          title: 'Discovery — Gali Kebutuhan, Kondisi Stok & Peta Kompetitor',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Menggali kebutuhan operasional klien dan mengecek kesesuaian stok new/second maupun dukungan teknis.',
          highlights: [
            'Wajib memvalidasi ketersediaan stok Gudang serta kelayakan Engineer (untuk solusi IT/B2B).',
            'Mencatat kompetitor aktif serta batas kewajaran jadwal implementasi.',
            'Menjadi prasyarat sebelum menyusun penawaran harga formal.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Opportunity, Activity & Product/Stock',
          accent: 'slate'
        }
      },
      {
        id: 'solution-quote',
        step: '05',
        label: 'Solution / Quote',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales + Approver',
        modal: {
          badge: 'Stage 05 • Penawaran',
          subtitle: 'Quotation & Price Governance',
          title: 'Solution & Quotation — Penawaran Terhubung dengan Estimasi Margin',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Setiap quotation terhubung ke stok nyata dan melewati approval margin apabila diskon melewati batas.',
          highlights: [
            'Menampilkan margin estimate dan status persetujuan Price Request.',
            'Integrasi data dengan modul inventory dan price approval perusahaan.',
            'Probability naik hanya jika penawaran valid telah diterima pengambil keputusan.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Quotation, Product/Stock & Price Request',
          accent: 'red'
        }
      },
      {
        id: 'negotiation-po',
        step: '06',
        label: 'Negotiation / PO',
        conversionPlaceholder: '— %',
        ownerCue: 'Manager + Finance',
        modal: {
          badge: 'Stage 06 • Komitmen',
          subtitle: 'Negosiasi Komersial & Pengadaan',
          title: 'Negotiation & Procurement / PO — Validasi Termin, Legal & Margin Akhir',
          metric: 'Data Internal',
          metricLabel: 'Conversion %',
          summary:
            'Mengunci syarat pembayaran, batas kredit/AR, ketentuan subcon/maincon B2G, serta kesiapan PO resmi.',
          highlights: [
            'Memastikan tidak ada komitmen harga atau SLA sepihak tanpa sign-off.',
            'Terhubung ke pengecekan limit kredit Accounting/Finance sebelum rilis order.',
            'Next activity wajib memiliki tanggal tindak lanjut spesifik.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Quotation, Order & Credit Review',
          accent: 'red'
        }
      },
      {
        id: 'closed-won-lost',
        step: '07',
        label: 'Closed Won / Lost',
        conversionPlaceholder: 'Cohort %',
        ownerCue: 'Sales + Manager',
        modal: {
          badge: 'Stage 07 • Keputusan Akhir',
          subtitle: 'Formula Win Rate Konsisten Cohort',
          title: 'Closed Won / Lost — Dasar Perhitungan Win Rate Tanpa Distorsi',
          metric: 'Won / (Won+Lost)',
          metricLabel: 'Formula Win Rate',
          summary:
            'Mengukur efektivitas penutupan pada periode dan cohort yang sama tanpa mencampur open opportunity.',
          highlights: [
            'Rumus: Closed-Won / (Closed-Won + Closed-Lost) × 100% pada cohort sama.',
            'Open deals tidak pernah dimasukkan sebagai denominator Lost.',
            'Setiap Closed-Lost wajib mencatat loss reason dan kompetitor pemenang.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Opportunity Closure & Order',
          accent: 'red'
        }
      },
      {
        id: 'delivery-retention',
        step: '08',
        label: 'Delivery → Retention',
        conversionPlaceholder: 'Repeat %',
        ownerCue: 'Ops + Finance + Sales',
        modal: {
          badge: 'Stage 08 • Pemenuhan & Retensi',
          subtitle: 'Delivery, Collection, Complaint & Repeat',
          title: 'Delivery, Collection & Retention — Menutup Siklus Komersial Utuh',
          metric: 'Data Internal',
          metricLabel: 'Repeat / AR',
          summary:
            'Memastikan barang/solusi terkirim baik, piutang tertagih tuntas, keluhan selesai, dan peluang repeat order terbuka.',
          highlights: [
            'Terintegrasi dengan status Invoice/AR dan tiket Complaint/Warranty.',
            'Sales tetap memantau pelunasan serta kepuasan purnajual untuk repeat business.',
            'Histori pelanggan aman tersimpan meski terjadi rotasi/absensi sales.'
          ],
          footerLabel: 'Objek Terkait',
          footerValue: 'Order, Invoice/AR, Complaint & Account',
          accent: 'slate'
        }
      }
    ]
  },
  workspaceTabs: {
    kanban: 'Kanban Opportunity',
    objects: '11 Objek & Field Wajib CRM'
  },
  kanbanSection: {
    title: 'Kanban Opportunity per Stage',
    placeholderNotice: 'Simulasi struktur record — nilai aktual & nama akun diisi dari data internal sah',
    deals: [
      {
        id: 'deal-ph-1',
        stageLabel: 'Discovery',
        accountPlaceholder: 'Akun Korporat (B2B)',
        segment: 'B2B',
        ownerPlaceholder: 'Owner: AM / B2B Sales',
        valuePlaceholder: 'Nilai: Target Pipeline',
        probabilityRule: 'Probabilitas: Evidence-Based',
        nextActivity: 'Next: Validasi Teknis & Stok',
        modal: {
          badge: 'Templat Record Opportunity',
          subtitle: 'Tahap Discovery • B2B',
          title: 'Kelengkapan 11 Field Wajib Opportunity B2B',
          metric: 'Evidence-Based',
          metricLabel: 'Aturan Probabilitas',
          summary:
            'Peluang korporat hanya boleh maju ke Quotation setelah kebutuhan teknis, stok, dan kompetitor terdokumentasi.',
          highlights: [
            'Field terisi: Owner, Segment, Value, Expected Close, Stage, Probability, Source.',
            'Bukti tahap: Next Activity terjadwal, nama Competitor, serta Margin Estimate awal.',
            'Jika gagal lanjut, wajib mengisi Loss Reason secara objektif.'
          ],
          footerLabel: 'Aturan Sistem',
          footerValue: 'Dilarang simpan progres hanya di chat pribadi',
          accent: 'slate'
        }
      },
      {
        id: 'deal-ph-2',
        stageLabel: 'Solution / Quote',
        accountPlaceholder: 'Mitra Channel (Distribusi)',
        segment: 'Distribution',
        ownerPlaceholder: 'Owner: Distribution Sales',
        valuePlaceholder: 'Nilai: Target Pipeline',
        probabilityRule: 'Probabilitas: Evidence-Based',
        nextActivity: 'Next: Price Request & Volume',
        modal: {
          badge: 'Templat Record Opportunity',
          subtitle: 'Tahap Solution / Quote • Distribution',
          title: 'Integrasi Penawaran Channel dengan Stok & Margin',
          metric: 'Price Sync',
          metricLabel: 'Integrasi Sistem',
          summary:
            'Penawaran reseller terhubung ke ketersediaan alokasi stok dan pengecekan margin estimate.',
          highlights: [
            'Mencegah penawaran volume price keluar tanpa batas kewenangan Manager/Finance.',
            'Terhubung ke riwayat repeat order serta status AR mitra eksisting.',
            'Source & Expected Close Date dipantau dalam pipeline mingguan.'
          ],
          footerLabel: 'Aturan Sistem',
          footerValue: 'Terkait ke Inventory & Price Request',
          accent: 'red'
        }
      },
      {
        id: 'deal-ph-3',
        stageLabel: 'Negotiation / PO',
        accountPlaceholder: 'Paket Pengadaan (B2G)',
        segment: 'B2G',
        ownerPlaceholder: 'Owner: B2G / Partner Lead',
        valuePlaceholder: 'Nilai: Target Pipeline',
        probabilityRule: 'Probabilitas: Evidence-Based',
        nextActivity: 'Next: Sign-Off Termin & Kontrak',
        modal: {
          badge: 'Templat Record Opportunity',
          subtitle: 'Tahap Negotiation / PO • B2G',
          title: 'Kontrol Syarat Katalog, Subcon & Risiko Arus Kas',
          metric: 'Gate Review',
          metricLabel: 'Persetujuan',
          summary:
            'Mengunci kepatuhan syarat pengadaan [R1–R4], status partner maincon/SI, dan kapasitas pembiayaan.',
          highlights: [
            'Mencatat Partner terkait, margin bersih estimasi, serta jadwal termin.',
            'Terhubung ke persetujuan kredit & legal sebelum komitmen pengiriman diterbitkan.',
            'Semua dokumen paket diarsipkan langsung pada objek Order/Opportunity.'
          ],
          footerLabel: 'Aturan Sistem',
          footerValue: 'Sinkron ke Accounting/Finance & Partner',
          accent: 'red'
        }
      }
    ]
  },
  crmObjectsSection: {
    objectsTitle: '11 Objek Utama CRM Internal',
    objects: [
      'Account / Company',
      'Contact / PIC',
      'Lead',
      'Opportunity / Deal',
      'Activity',
      'Quotation',
      'Product / Stock',
      'Order',
      'Invoice / AR',
      'Complaint',
      'Partner'
    ],
    fieldsTitle: '11 Field Wajib Setiap Opportunity',
    mandatoryFields: [
      'Owner',
      'Segment',
      'Deal Value',
      'Expected Close Date',
      'Stage',
      'Probability Rule',
      'Next Activity',
      'Competitor',
      'Loss Reason',
      'Margin Estimate',
      'Source'
    ],
    integrationNote:
      'Integrasi Sistem: Pertukaran data dengan Inventory, Price Request, Accounting/Finance & Reporting — diawali Fit-Gap tools eksisting sebelum build/buy/integrate.'
  },
  cockpitSection: {
    title: 'Manager Cockpit',
    mockupLabel: 'SIMULASI TAMPILAN COCKPIT',
    filterLabels: {
      segment: 'Segmen',
      source: 'Source',
      period: 'Bulan / Wilayah'
    },
    segments: [
      { id: 'ALL', label: 'Semua' },
      { id: 'Retail', label: 'Retail' },
      { id: 'Distribution', label: 'Distribution' },
      { id: 'B2B', label: 'B2B' },
      { id: 'B2G', label: 'B2G' }
    ],
    sources: ['Semua Source', 'Inbound Web/Chat', 'Outbound / Account', 'Partner / Maincon'],
    periods: ['Periode Aktif • Semua Wilayah', 'Bulan Berjalan • Jabodetabek', 'Kuartal Aktif • Regional'],
    metrics: [
      {
        id: 'pipeline-value',
        label: 'Pipeline Value',
        placeholderValue: 'Open Pipeline',
        ruleCue: 'Total peluang aktif lolos kualifikasi',
        modal: {
          badge: 'Manager Cockpit • 01',
          subtitle: 'Total Nilai Peluang Aktif',
          title: 'Pipeline Value (Gross Open Opportunities)',
          metric: 'Data Internal',
          metricLabel: 'Nilai Saat Ini',
          summary:
            'Menjumlahkan seluruh nilai opportunity aktif yang valid sesuai segment, owner, dan periode filter.',
          highlights: [
            'Hanya menghitung opportunity yang sudah melewati tahap kualifikasi dasar.',
            'Harus dapat di-drill-down hingga level deal per sales owner.',
            'Tidak diisi angka fiktif sebelum ekspor CRM/spreadsheet terverifikasi.'
          ],
          footerLabel: 'Sumber Data',
          footerValue: 'Opportunity Value × Active Stage',
          accent: 'slate'
        }
      },
      {
        id: 'weighted-pipeline',
        label: 'Weighted Pipeline',
        placeholderValue: 'Stage-Weighted',
        ruleCue: 'Bobot probabilitas berbasis bukti',
        modal: {
          badge: 'Manager Cockpit • 02',
          subtitle: 'Nilai Tertimbang Realistis',
          title: 'Weighted Pipeline (Evidence-Based Probability)',
          metric: 'Stage-Driven',
          metricLabel: 'Metode Bobot',
          summary:
            'Menghitung ekspektasi nilai penutupan berdasarkan bobot probabilitas objektif setiap tahap.',
          highlights: [
            'Probabilitas terikat pada bukti nyata (validasi teknis, quote, PO), bukan perasaan sales.',
            'Dipakai sebagai input utama proyeksi forecast bulanan & kuartalan.',
            'Menjaga akurasi ekspektasi manajemen terhadap target bulanan.'
          ],
          footerLabel: 'Sumber Data',
          footerValue: 'Deal Value × Evidence Probability Rule',
          accent: 'slate'
        }
      },
      {
        id: 'deals-at-risk',
        label: 'Deals at Risk',
        placeholderValue: 'Stok / Kredit / Margin',
        ruleCue: 'Deteksi dini hambatan closing',
        modal: {
          badge: 'Manager Cockpit • 03',
          subtitle: 'Deteksi Dini Hambatan Closing',
          title: 'Deals at Risk (Stok, Margin, atau Limit Kredit)',
          metric: 'Action Queue',
          metricLabel: 'Fungsi',
          summary:
            'Menandai peluang bernilai signifikan yang terhambat isu teknis, ketersediaan stok, diskon, atau AR.',
          highlights: [
            'Memicu intervensi cepat Manager dan lintas fungsi sebelum tanggal tutup terlewat.',
            'Membantu membedakan hambatan produk vs kelayakan kredit pelanggan.',
            'Dipantau dalam weekly pipeline review.'
          ],
          footerLabel: 'Eskalasi',
          footerValue: 'Review Mingguan Lintas Divisi',
          accent: 'red'
        }
      },
      {
        id: 'stale-opps',
        label: 'Stale Opportunities',
        placeholderValue: 'Stagnan di Stage',
        ruleCue: 'Audit kebersihan pipeline',
        modal: {
          badge: 'Manager Cockpit • 04',
          subtitle: 'Kebersihan & Kecepatan Pipeline',
          title: 'Stale Opportunities (Pipeline Macet)',
          metric: 'Stage Aging',
          metricLabel: 'Indikator',
          summary:
            'Mengidentifikasi peluang yang terlalu lama tertahan di satu stage tanpa kemajuan nyata.',
          highlights: [
            'Menjadi agenda coaching: lanjut dengan langkah konkret atau tutup sebagai Lost.',
            'Mencegah penumpukan pipeline semu yang mengaburkan forecast.',
            'Ambang batas hari stale disesuaikan per segmen (Retail vs B2B/B2G).'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Re-qualify atau Close Out',
          accent: 'red'
        }
      },
      {
        id: 'overdue-followup',
        label: 'Overdue Follow-Up',
        placeholderValue: 'Follow-Up Terlewat',
        ruleCue: 'Aktivitas melewati jadwal',
        modal: {
          badge: 'Manager Cockpit • 05',
          subtitle: 'Disiplin Eksekusi Harian',
          title: 'Overdue Follow-Up (Aktivitas Terlewat)',
          metric: 'Activity Hygiene',
          metricLabel: 'Fokus',
          summary:
            'Menampilkan jumlah opportunity aktif yang melewati tanggal rencana next activity tanpa pembaruan.',
          highlights: [
            'Melindungi pelanggan dari keterlambatan respons setelah penawaran dikirim.',
            'Menjadi metrik utama briefing harian bersama Sales Owner.',
            'Wajib dilengkapi tanggal tindak lanjut baru pasca setiap kontak.'
          ],
          footerLabel: 'Ritme',
          footerValue: 'Pantauan Daily Stand-Up',
          accent: 'red'
        }
      },
      {
        id: 'win-rate',
        label: 'Win Rate (Cohort)',
        placeholderValue: 'Won / (Won + Lost)',
        ruleCue: 'Tanpa open deals',
        modal: {
          badge: 'Manager Cockpit • 06',
          subtitle: 'Efektivitas Penutupan Bersih',
          title: 'Cohort Win Rate — Formula Konsisten Tanpa Bias Open Deals',
          metric: 'Won / (Won+Lost)',
          metricLabel: 'Formula Baku',
          summary:
            'Mengukur rasio kemenangan secara adil untuk periode dan cohort yang sama.',
          highlights: [
            'Formula resmi: Closed-Won / (Closed-Won + Closed-Lost) × 100%.',
            'Open deals tidak boleh dimasukkan ke penyebut (bukan Lost).',
            'Dianalisis bersama loss reasons & data kompetitor tiap akhir bulan.'
          ],
          footerLabel: 'Validasi',
          footerValue: 'Kohort & Periode Konsisten',
          accent: 'slate'
        }
      },
      {
        id: 'avg-cycle',
        label: 'Avg Sales Cycle',
        placeholderValue: 'Qualified → Won',
        ruleCue: 'Median hari per segmen',
        modal: {
          badge: 'Manager Cockpit • 07',
          subtitle: 'Kecepatan Konversi per Segmen',
          title: 'Average Sales Cycle (Median Waktu Tutup)',
          metric: 'Per Segmen',
          metricLabel: 'Segmentasi',
          summary:
            'Mengukur durasi rata-rata/median dari qualified hingga closed-won secara terpisah per portofolio.',
          highlights: [
            'Siklus Retail, Distribution, B2B, dan B2G diukur terpisah karena pola belinya berbeda.',
            'Membantu mendeteksi tahap mana yang paling lama menahan closing.',
            'Dasar penentuan target coverage pipeline lintas kuartal.'
          ],
          footerLabel: 'Satuan',
          footerValue: 'Hari Kalender (Median per Segmen)',
          accent: 'slate'
        }
      },
      {
        id: 'margin-est',
        label: 'Margin Estimate',
        placeholderValue: 'Net Margin %',
        ruleCue: 'Kualitas profit pipeline',
        modal: {
          badge: 'Manager Cockpit • 08',
          subtitle: 'Kualitas Margin Pipeline',
          title: 'Margin Estimate (Proyeksi Laba Kotor Pipeline)',
          metric: 'Profit Check',
          metricLabel: 'Prinsip',
          summary:
            'Memastikan pipeline besar juga sehat dari sisi margin sebelum transaksi disetujui.',
          highlights: [
            'Mengacu pada harga jual bersih terhadap HPP resmi (bukan markup).',
            'Menyoroti peluang bervolume besar namun berisiko melanggar floor margin.',
            'Terhubung ke Price Request bila butuh eskalasi Manager/Owner.'
          ],
          footerLabel: 'Proteksi',
          footerValue: 'Role-Based HPP Access',
          accent: 'slate'
        }
      }
    ],
    winRateRuleNote: 'Win Rate = Closed-Won / (Closed-Won + Closed-Lost) — cohort sama; open deals tidak masuk denominator.'
  },
  evidenceFooter:
    'Data Diperlukan: Data customer & contact sah, histori transaksi, quote, pipeline, sales activities, stage definitions, serta audit aplikasi/lisensi/akses/pemilik sistem internal eksisting.'
};

export const slideDataEn: Slide20Data = {
  eyebrow: 'Integrated Data Architecture & Pipeline',
  title: 'Internal CRM & Sales Funnel: Single Source of Truth',
  subtitle:
    'Connecting leads, activities, quotes, pipeline, closing, delivery, billing, and retention — eliminating reliance on personal chats or scattered spreadsheets.',
  fitGapCaveat: 'Mockup / Placeholder • Run Fit-Gap on Existing Tools Prior to Build / Buy / Integrate',
  funnelSection: {
    sectionTitle: '8-Stage Sales Funnel',
    stages: [
      {
        id: 'new-lead',
        step: '01',
        label: 'New Lead',
        conversionPlaceholder: '— %',
        ownerCue: 'Lead Desk',
        modal: {
          badge: 'Stage 01 • Intake',
          subtitle: 'Lead Capture & Source Tagging',
          title: 'New Lead — Logged Centrally with Attributable Source',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Captures every prospect from marketplace, web, inbound inquiries, or outreach inside CRM with traceable origin.',
          highlights: [
            'Lead assignment follows formal SOP rules — never stalls inside personal chat threads.',
            'Initial mandatory attributes: source, target segment, contact/PIC, and intake timestamp.',
            'Actual conversion rates are populated once verified historical data is loaded.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Lead, Contact/PIC & Partner Source',
          accent: 'slate'
        }
      },
      {
        id: 'contacted',
        step: '02',
        label: 'Contacted',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales Owner',
        modal: {
          badge: 'Stage 02 • First Touch',
          subtitle: 'First Response & Routing Hygiene',
          title: 'Contacted — Verified First Outreach Logged in CRM',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Ensures timely first outreach and preserves a shared interaction history across shifts or personnel.',
          highlights: [
            'Records contact channel, summary notes, and scheduled next activity.',
            'Prevents prospect loss if a sales rep is absent or reassigned.',
            'Measured from intake timestamp to verified first contact.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Lead & Activity Log',
          accent: 'slate'
        }
      },
      {
        id: 'qualified',
        step: '03',
        label: 'Qualified',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales Owner',
        modal: {
          badge: 'Stage 03 • Qualification',
          subtitle: 'Opportunity Readiness Gate',
          title: 'Qualified — Converted into Structured Opportunity Record',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Filters genuine opportunities with clear need, portfolio fit, estimated deal value, and buying path.',
          highlights: [
            'Requires owner, segment, source, estimated value, and target close date.',
            'Keeps speculative inquiries from inflating active pipeline forecasts.',
            'Disqualified leads exit early with structured closure reasons.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Account/Company, Contact & Opportunity',
          accent: 'slate'
        }
      },
      {
        id: 'discovery',
        step: '04',
        label: 'Discovery',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales + Tech',
        modal: {
          badge: 'Stage 04 • Discovery',
          subtitle: 'Technical Needs & Stock Check',
          title: 'Discovery — Needs Sizing, Inventory Check & Competitor Mapping',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Maps customer technical constraints, validates new/second inventory readiness, and logs competing offers.',
          highlights: [
            'Checks real Warehouse availability and Engineer sign-off for B2B/infra solutions.',
            'Captures active competitors and realistic delivery timelines.',
            'Required gate prior to issuing formal commercial quotations.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Opportunity, Activity & Product/Stock',
          accent: 'slate'
        }
      },
      {
        id: 'solution-quote',
        step: '05',
        label: 'Solution / Quote',
        conversionPlaceholder: '— %',
        ownerCue: 'Sales + Approver',
        modal: {
          badge: 'Stage 05 • Proposal',
          subtitle: 'Quotation & Price Governance',
          title: 'Solution & Quotation — Linked to Stock & Margin Floor Rules',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Ties every quote to verified inventory status and routes out-of-band discounts through Price Request approval.',
          highlights: [
            'Captures margin estimate and formal pricing approval status.',
            'Exchanges data with inventory and pricing governance workflows.',
            'Stage probability advances only upon verified proposal delivery.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Quotation, Product/Stock & Price Request',
          accent: 'red'
        }
      },
      {
        id: 'negotiation-po',
        step: '06',
        label: 'Negotiation / PO',
        conversionPlaceholder: '— %',
        ownerCue: 'Manager + Finance',
        modal: {
          badge: 'Stage 06 • Commitment',
          subtitle: 'Commercial Terms & Credit Check',
          title: 'Negotiation & Procurement / PO — Terms, Credit & Final Margin Gate',
          metric: 'Internal Data',
          metricLabel: 'Conversion %',
          summary:
            'Locks payment terms, credit limits, B2G maincon/subcon obligations, and verified PO confirmation.',
          highlights: [
            'Blocks unapproved price concessions or SLA promises.',
            'Syncs with Accounting/Finance credit clearance prior to dispatch.',
            'Requires a concrete dated next activity on every active deal.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Quotation, Order & Credit Review',
          accent: 'red'
        }
      },
      {
        id: 'closed-won-lost',
        step: '07',
        label: 'Closed Won / Lost',
        conversionPlaceholder: 'Cohort %',
        ownerCue: 'Sales + Manager',
        modal: {
          badge: 'Stage 07 • Outcome',
          subtitle: 'Cohort-Consistent Win Rate Formula',
          title: 'Closed Won / Lost — Unbiased Win Rate Measurement',
          metric: 'Won / (Won+Lost)',
          metricLabel: 'Win Rate Formula',
          summary:
            'Measures true closing conversion over consistent periods and cohorts without counting open deals as losses.',
          highlights: [
            'Formula: Closed-Won / (Closed-Won + Closed-Lost) × 100% within same cohort.',
            'Open opportunities are strictly excluded from the denominator.',
            'Every Closed-Lost record mandates a structured loss reason and competitor entry.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Opportunity Closure & Order',
          accent: 'red'
        }
      },
      {
        id: 'delivery-retention',
        step: '08',
        label: 'Delivery → Retention',
        conversionPlaceholder: 'Repeat %',
        ownerCue: 'Ops + Finance + Sales',
        modal: {
          badge: 'Stage 08 • Fulfillment & Retention',
          subtitle: 'Delivery, Collection, Complaint & Repeat',
          title: 'Delivery, Collection & Retention — Full Commercial Loop Closure',
          metric: 'Internal Data',
          metricLabel: 'Repeat / AR',
          summary:
            'Tracks fulfillment, invoice collection, warranty/complaint resolution, and recurring account expansion.',
          highlights: [
            'Connects Order status with Invoice/AR aging and Complaint/Warranty logs.',
            'Keeps sales accountable through collection and post-sale repeat follow-up.',
            'Preserves full institutional account memory independent of individual turnover.'
          ],
          footerLabel: 'Linked Objects',
          footerValue: 'Order, Invoice/AR, Complaint & Account',
          accent: 'slate'
        }
      }
    ]
  },
  workspaceTabs: {
    kanban: 'Opportunity Kanban',
    objects: '11 CRM Objects & Mandatory Fields'
  },
  kanbanSection: {
    title: 'Opportunity Kanban by Stage',
    placeholderNotice: 'Record schema simulation — actual account names & values populate from verified internal data',
    deals: [
      {
        id: 'deal-ph-1',
        stageLabel: 'Discovery',
        accountPlaceholder: 'Corporate Account (B2B)',
        segment: 'B2B',
        ownerPlaceholder: 'Owner: AM / B2B Sales',
        valuePlaceholder: 'Value: Pipeline Target',
        probabilityRule: 'Probability: Evidence-Based',
        nextActivity: 'Next: Tech Check & Stock Sync',
        modal: {
          badge: 'Opportunity Record Template',
          subtitle: 'Discovery Stage • B2B',
          title: '11 Mandatory Fields Enforcement — Corporate Opportunity',
          metric: 'Evidence-Based',
          metricLabel: 'Probability Rule',
          summary:
            'Corporate opportunities advance to Quotation only after technical needs, stock fit, and competitors are logged.',
          highlights: [
            'Core fields: Owner, Segment, Value, Expected Close, Stage, Probability, Source.',
            'Stage evidence: Scheduled Next Activity, active Competitor, and Margin Estimate.',
            'Structured Loss Reason required if deal closes without order.'
          ],
          footerLabel: 'System Rule',
          footerValue: 'No deal tracking confined to personal chat',
          accent: 'slate'
        }
      },
      {
        id: 'deal-ph-2',
        stageLabel: 'Solution / Quote',
        accountPlaceholder: 'Channel Partner (Distribusi)',
        segment: 'Distribution',
        ownerPlaceholder: 'Owner: Distribution Sales',
        valuePlaceholder: 'Value: Pipeline Target',
        probabilityRule: 'Probability: Evidence-Based',
        nextActivity: 'Next: Price Request & Volume',
        modal: {
          badge: 'Opportunity Record Template',
          subtitle: 'Solution / Quote Stage • Distribution',
          title: 'Channel Quote Synced with Inventory Allocation & Margin',
          metric: 'Price Sync',
          metricLabel: 'Integration',
          summary:
            'Reseller quotes link directly to stock allocation and floor-margin protection rules.',
          highlights: [
            'Routes out-of-band volume discounts through Manager/Finance approval.',
            'Surfaces existing partner AR aging prior to new order approval.',
            'Tracks deal Source and Expected Close inside weekly pipeline reviews.'
          ],
          footerLabel: 'System Rule',
          footerValue: 'Linked to Inventory & Price Request',
          accent: 'red'
        }
      },
      {
        id: 'deal-ph-3',
        stageLabel: 'Negotiation / PO',
        accountPlaceholder: 'Procurement Package (B2G)',
        segment: 'B2G',
        ownerPlaceholder: 'Owner: B2G / Partner Lead',
        valuePlaceholder: 'Value: Pipeline Target',
        probabilityRule: 'Probability: Evidence-Based',
        nextActivity: 'Next: Terms & Contract Sign-Off',
        modal: {
          badge: 'Opportunity Record Template',
          subtitle: 'Negotiation / PO Stage • B2G',
          title: 'Catalog Compliance, Subcon Partner & Cash-Flow Clearance',
          metric: 'Gate Review',
          metricLabel: 'Sign-Off',
          summary:
            'Verifies procurement compliance [R1–R4], maincon/SI partner terms, and working-capital exposure.',
          highlights: [
            'Links Partner record, estimated net margin, and scheduled payment milestones.',
            'Requires Finance & Director clearance before binding delivery commitments.',
            'Archives package records cleanly under Opportunity & Order objects.'
          ],
          footerLabel: 'System Rule',
          footerValue: 'Synced with Accounting/Finance & Partner',
          accent: 'red'
        }
      }
    ]
  },
  crmObjectsSection: {
    objectsTitle: '11 Core Internal CRM Objects',
    objects: [
      'Account / Company',
      'Contact / PIC',
      'Lead',
      'Opportunity / Deal',
      'Activity',
      'Quotation',
      'Product / Stock',
      'Order',
      'Invoice / AR',
      'Complaint',
      'Partner'
    ],
    fieldsTitle: '11 Mandatory Fields per Opportunity',
    mandatoryFields: [
      'Owner',
      'Segment',
      'Deal Value',
      'Expected Close Date',
      'Stage',
      'Probability Rule',
      'Next Activity',
      'Competitor',
      'Loss Reason',
      'Margin Estimate',
      'Source'
    ],
    integrationNote:
      'System Integration: Connects with Inventory, Price Request, Accounting/Finance & Reporting — conduct Fit-Gap on existing tools before deciding build/buy/integrate.'
  },
  cockpitSection: {
    title: 'Manager Cockpit',
    mockupLabel: 'COCKPIT UI MOCKUP',
    filterLabels: {
      segment: 'Segment',
      source: 'Source',
      period: 'Month / Region'
    },
    segments: [
      { id: 'ALL', label: 'All' },
      { id: 'Retail', label: 'Retail' },
      { id: 'Distribution', label: 'Distribution' },
      { id: 'B2B', label: 'B2B' },
      { id: 'B2G', label: 'B2G' }
    ],
    sources: ['All Sources', 'Inbound Web/Chat', 'Outbound / Account', 'Partner / Maincon'],
    periods: ['Active Period • All Regions', 'Current Month • Greater Jakarta', 'Active Quarter • Regional'],
    metrics: [
      {
        id: 'pipeline-value',
        label: 'Pipeline Value',
        placeholderValue: 'Open Pipeline',
        ruleCue: 'Gross active qualified pipeline',
        modal: {
          badge: 'Manager Cockpit • 01',
          subtitle: 'Total Active Opportunity Value',
          title: 'Pipeline Value (Qualified Open Deals)',
          metric: 'Internal Data',
          metricLabel: 'Current Figure',
          summary:
            'Sums active qualified opportunities across selected segment, owner, region, and source filters.',
          highlights: [
            'Excludes unverified inquiries lacking basic qualification.',
            'Drill-down links directly to individual sales owner deal lists.',
            'Left blank/placeholder until live CRM or verified export data is connected.'
          ],
          footerLabel: 'Source Logic',
          footerValue: 'Opportunity Value × Active Stage',
          accent: 'slate'
        }
      },
      {
        id: 'weighted-pipeline',
        label: 'Weighted Pipeline',
        placeholderValue: 'Stage-Weighted',
        ruleCue: 'Evidence-based stage probability',
        modal: {
          badge: 'Manager Cockpit • 02',
          subtitle: 'Risk-Adjusted Pipeline',
          title: 'Weighted Pipeline (Evidence-Based Probability)',
          metric: 'Stage-Driven',
          metricLabel: 'Weighting Method',
          summary:
            'Calculates realistic expected closure value tied strictly to verifiable stage milestones.',
          highlights: [
            'Probability reflects concrete buyer actions rather than subjective optimism.',
            'Feeds directly into monthly and quarterly revenue forecast models.',
            'Highlights true pipeline coverage gaps early.'
          ],
          footerLabel: 'Source Logic',
          footerValue: 'Deal Value × Evidence Probability Rule',
          accent: 'slate'
        }
      },
      {
        id: 'deals-at-risk',
        label: 'Deals at Risk',
        placeholderValue: 'Stock / Credit / Margin',
        ruleCue: 'Early blocker detection',
        modal: {
          badge: 'Manager Cockpit • 03',
          subtitle: 'Early Blocker Detection',
          title: 'Deals at Risk (Stock, Margin, or Credit Constraints)',
          metric: 'Action Queue',
          metricLabel: 'Purpose',
          summary:
            'Flags high-priority opportunities stalled by technical scope, inventory shortage, pricing, or credit risk.',
          highlights: [
            'Triggers timely cross-functional support before expected close dates slip.',
            'Separates product availability bottlenecks from customer credit issues.',
            'Reviewed systematically during weekly pipeline reviews.'
          ],
          footerLabel: 'Escalation',
          footerValue: 'Weekly Cross-Functional Review',
          accent: 'red'
        }
      },
      {
        id: 'stale-opps',
        label: 'Stale Opportunities',
        placeholderValue: 'Stalled in Stage',
        ruleCue: 'Pipeline velocity hygiene',
        modal: {
          badge: 'Manager Cockpit • 04',
          subtitle: 'Pipeline Velocity Hygiene',
          title: 'Stale Opportunities (Stalled Stage Aging)',
          metric: 'Stage Aging',
          metricLabel: 'Indicator',
          summary:
            'Surfaces deals sitting idle past segment aging thresholds with no verifiable buyer advancement.',
          highlights: [
            'Drives clear coaching decisions: re-engage with concrete step or close out.',
            'Prevents dead deals from distorting pipeline coverage ratios.',
            'Aging thresholds differ by segment cycle (Retail vs B2B/B2G).'
          ],
          footerLabel: 'Action',
          footerValue: 'Re-Qualify or Close Lost',
          accent: 'red'
        }
      },
      {
        id: 'overdue-followup',
        label: 'Overdue Follow-Up',
        placeholderValue: 'Missed Follow-Up',
        ruleCue: 'Next activity past due date',
        modal: {
          badge: 'Manager Cockpit • 05',
          subtitle: 'Daily Execution Discipline',
          title: 'Overdue Follow-Up (Missed Next Actions)',
          metric: 'Activity Hygiene',
          metricLabel: 'Focus',
          summary:
            'Highlights open opportunities whose scheduled next activity date has passed without logged follow-up.',
          highlights: [
            'Protects response discipline after quotes or technical meetings.',
            'Primary operational check during daily sales stand-ups.',
            'Enforces mandatory dated next steps on every active deal.'
          ],
          footerLabel: 'Cadence',
          footerValue: 'Daily Stand-Up Check',
          accent: 'red'
        }
      },
      {
        id: 'win-rate',
        label: 'Win Rate (Cohort)',
        placeholderValue: 'Won / (Won + Lost)',
        ruleCue: 'Excludes open deals',
        modal: {
          badge: 'Manager Cockpit • 06',
          subtitle: 'Clean Closing Conversion',
          title: 'Cohort Win Rate — Excluding Open Deals',
          metric: 'Won / (Won+Lost)',
          metricLabel: 'Official Formula',
          summary:
            'Measures true win effectiveness across consistent periods and cohorts.',
          highlights: [
            'Formula: Closed-Won / (Closed-Won + Closed-Lost) × 100% for matching cohort.',
            'Open deals are never treated as lost inside the denominator.',
            'Reviewed alongside loss reasons and competitor insights monthly.'
          ],
          footerLabel: 'Validation',
          footerValue: 'Cohort & Period Consistency',
          accent: 'slate'
        }
      },
      {
        id: 'avg-cycle',
        label: 'Avg Sales Cycle',
        placeholderValue: 'Qualified → Won',
        ruleCue: 'Median days by segment',
        modal: {
          badge: 'Manager Cockpit • 07',
          subtitle: 'Conversion Speed by Segment',
          title: 'Average Sales Cycle (Median Days to Close)',
          metric: 'Per Segment',
          metricLabel: 'Breakdown',
          summary:
            'Tracks duration from qualification to won order separately across each commercial portfolio.',
          highlights: [
            'Measured separately for Retail, Distribution, B2B, and B2G cycles.',
            'Pinpoints which funnel stage creates the longest approval or buyer delay.',
            'Informs realistic pipeline coverage planning across quarters.'
          ],
          footerLabel: 'Unit',
          footerValue: 'Calendar Days (Median by Segment)',
          accent: 'slate'
        }
      },
      {
        id: 'margin-est',
        label: 'Margin Estimate',
        placeholderValue: 'Net Margin %',
        ruleCue: 'Open pipeline profit quality',
        modal: {
          badge: 'Manager Cockpit • 08',
          subtitle: 'Pipeline Margin Health',
          title: 'Margin Estimate (Projected Gross Profit)',
          metric: 'Profit Check',
          metricLabel: 'Principle',
          summary:
            'Ensures high-value pipeline opportunities also satisfy gross margin quality floors prior to closing.',
          highlights: [
            'Calculated against net selling price and verified COGS/HPP (never markup).',
            'Flags large deals drifting near floor limits for early commercial review.',
            'Connects directly to Price Request approval thresholds.'
          ],
          footerLabel: 'Protection',
          footerValue: 'Role-Based HPP Access',
          accent: 'slate'
        }
      }
    ],
    winRateRuleNote: 'Win Rate = Closed-Won / (Closed-Won + Closed-Lost) — same cohort; open deals excluded.'
  },
  evidenceFooter:
    'Required Data: Verified customer/contact records, transaction history, quotes, pipeline, sales activities, stage definitions, plus audit of existing internal apps, licenses, access & owners.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide20Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide20Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 20,
  folder: '20',
  sectionId: 7,
  navTitle: {
    in: 'CRM Internal & Sales Funnel',
    en: 'Internal CRM & Sales Funnel'
  },
  headerTitle: {
    in: 'CRM Internal & Sales Funnel - Sumber Data Tunggal',
    en: 'Internal CRM & Sales Funnel - Single Source of Truth'
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
