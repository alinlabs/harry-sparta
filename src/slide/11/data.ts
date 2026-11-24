import { useLanguage } from '@/contexts/LanguageContext';

export type AuditStageId =
  | 'stage-data'
  | 'stage-interview'
  | 'stage-observe'
  | 'stage-test'
  | 'stage-findings';

export type CompetencyId =
  | 'hs-product'
  | 'hs-technical'
  | 'hs-quotation'
  | 'hs-hpp'
  | 'hs-crm'
  | 'hs-ecommerce'
  | 'hs-procurement'
  | 'ss-communication'
  | 'ss-negotiation'
  | 'ss-trust'
  | 'ss-discipline'
  | 'ss-integrity'
  | 'ss-teamwork';

export type DeliverableId =
  | 'out-skill-matrix'
  | 'out-process-map'
  | 'out-data-quality'
  | 'out-risk-list'
  | 'out-idp-action';

export type DiagnosticMethod = 'data' | 'interview' | 'observe' | 'test';

export interface Slide11ModalPayload {
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

export interface AuditStageItem {
  id: AuditStageId;
  stepCode: string;
  title: string;
  keywords: string;
  scopeNote: string;
  modal: Slide11ModalPayload;
}

export interface CompetencyItem {
  id: CompetencyId;
  group: 'hard' | 'soft';
  name: string;
  focusKeywords: string;
  primaryMethods: DiagnosticMethod[];
  supportingMethods: DiagnosticMethod[];
  modal: Slide11ModalPayload;
}

export interface DeliverableItem {
  id: DeliverableId;
  tag: string;
  title: string;
  modal: Slide11ModalPayload;
}

export interface Slide11Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  mandateBanner: string;
  funnelSection: {
    sectionTitle: string;
    sequenceLabel: string;
    stages: AuditStageItem[];
  };
  heatmapSection: {
    sectionTitle: string;
    filterLabels: {
      all: string;
      hard: string;
      soft: string;
    };
    methodHeaders: {
      skill: string;
      data: string;
      interview: string;
      observe: string;
      test: string;
    };
    legendPrimary: string;
    legendSupporting: string;
    legendBlank: string;
    competencies: CompetencyItem[];
  };
  deliverablesSection: {
    sectionTitle: string;
    horizonNote: string;
    items: DeliverableItem[];
  };
  caveatFooter: string;
}

export const slideDataId: Slide11Data = {
  eyebrow: "Diagnostik Operasional & Kompetensi",
  title: "Audit dan Assessment: Baseline Sebelum Perubahan",
  subtitle:
    "Membaca data aktual, mengamati cara kerja nyata, dan memetakan kesiapan lintas fungsi — bukan mencari kesalahan individu.",
  mandateBanner: "Diagnostik Proses Berbasis Mandat Direksi",
  funnelSection: {
    sectionTitle: "Audit Funnel 5 Tahap",
    sequenceLabel: "Data → Interview → Observe → Test/Role-play → Findings",
    stages: [
      {
        id: "stage-data",
        stepCode: "Tahap 01",
        title: "Review Data 6–12 Bulan",
        keywords: "Omzet • Margin • Closing • AR • Pipeline • Repeat • Komplain • Aging",
        scopeNote: "Validasi data aktual",
        modal: {
          badge: "Tahap 01 • Audit Data Historis",
          subtitle: "Diagnostik Kuantitatif 6–12 Bulan",
          title: "Review Data Penjualan, Stok, dan Piutang",
          metric: "6–12 Bln",
          metricLabel: "Jendela Data",
          summary:
            "Membangun baseline objektif atas kinerja penjualan, kesehatan margin, perputaran stok, dan kualitas pembayaran sebelum menyusun target.",
          highlights: [
            "Menelaah omzet aktual, gross margin, closing rate, repeat order, dan nilai pipeline per segmen.",
            "Memeriksa piutang (AR aging), keluhan pelanggan/retur, serta usia stok (stock aging).",
            "Memastikan akses data transaksi, HPP, dan CRM tersedia sesuai otorisasi Direksi dan Finance."
          ],
          footerLabel: "Prasyarat",
          footerValue: "Akses histori transaksi, CRM, stok, piutang & HPP yang sah",
          accent: "slate"
        }
      },
      {
        id: "stage-interview",
        stepCode: "Tahap 02",
        title: "Wawancara 1-on-1",
        keywords: "Motivasi • Hambatan kerja • Kejelasan target • Pemahaman peran",
        scopeNote: "Perspektif tim & lintas divisi",
        modal: {
          badge: "Tahap 02 • Dialog Terstruktur",
          subtitle: "Wawancara 1-on-1 & Pemetaan Lintas Fungsi",
          title: "Menggali Motivasi dan Hambatan Nyata di Lapangan",
          metric: "1-on-1",
          metricLabel: "Format Wawancara",
          summary:
            "Memahami motivasi individu, kendala operasional harian, serta titik gesekan antar-bagian secara konstruktif.",
          highlights: [
            "Menjajaki kejelasan wilayah, target, dukungan produk, dan hambatan penutupan transaksi.",
            "Melibatkan Warehouse, Purchasing, Teknisi, Finance, HRD, dan Digital Creative sesuai jadwal persetujuan.",
            "Menjaga kerahasiaan aspirasi personal staf agar umpan balik terbuka dan objektif."
          ],
          footerLabel: "Etika",
          footerValue: "Bukan interogasi — fokus menggali hambatan proses & kebutuhan dukungan",
          accent: "slate"
        }
      },
      {
        id: "stage-observe",
        stepCode: "Tahap 03",
        title: "Observasi Aktivitas & Alur Order",
        keywords: "Kunjungan • Toko • Proses quote • Handover order ke gudang/teknis",
        scopeNote: "Lead hingga collection",
        modal: {
          badge: "Tahap 03 • Observasi Langsung",
          subtitle: "Alur Kerja Nyata",
          title: "Observasi Aktivitas Sales dan Handover Order",
          metric: "End-to-End",
          metricLabel: "Cakupan Alur",
          summary:
            "Melihat langsung cara tim merespons leads, membuat penawaran, dan menyerahkan order lintas fungsi.",
          highlights: [
            "Mengamati pola kerja showroom/online, kunjungan B2B, serta disiplin pencatatan tindak lanjut.",
            "Menelusuri proses quotation, cek stok ke Warehouse, validasi Teknisi, hingga penagihan Finance.",
            "Mengidentifikasi bottleneck yang membuat respon lambat atau janji ke pelanggan tidak sinkron."
          ],
          footerLabel: "Output",
          footerValue: "Daftar hambatan nyata dari lead masuk hingga collection",
          accent: "slate"
        }
      },
      {
        id: "stage-test",
        stepCode: "Tahap 04",
        title: "Tes Product Knowledge & Role-Play SOP",
        keywords: "New/Second • Server/Net • Discovery • Kondisi • Margin • Follow-up",
        scopeNote: "Uji kecakapan praktis",
        modal: {
          badge: "Tahap 04 • Uji Kompetensi Praktis",
          subtitle: "Product Test & Role-Play SOP",
          title: "Menguji Pemahaman Produk dan Simulasi Penjualan",
          metric: "Praktik",
          metricLabel: "Metode Uji",
          summary:
            "Menguji kesiapan teknis produk dan konsistensi eksekusi SOP dalam skenario percakapan pelanggan yang realistis.",
          highlights: [
            "Tes product knowledge: perangkat new vs second/refurbished, server, networking, internet, dan IT Solution.",
            "Role-play SOP: menggali kebutuhan (discovery), menjelaskan kondisi/garansi secara jujur, menjaga harga/margin.",
            "Menilai cara menangani keberatan (objection handling) serta ketepatan rencana follow-up."
          ],
          footerLabel: "Kerahasiaan",
          footerValue: "Skor individu bersifat rahasia (HR/Manager), tidak dipaparkan terbuka",
          accent: "slate"
        }
      },
      {
        id: "stage-findings",
        stepCode: "Tahap 05",
        title: "Peta Pain Point Lintas Departemen",
        keywords: "Warehouse • Purchasing • Teknisi • Finance • HRD • Digital Creative",
        scopeNote: "Bukti transaksi & owner",
        modal: {
          badge: "Tahap 05 • Sintesis Temuan",
          subtitle: "Diagnostik Lintas Fungsi",
          title: "Peta Pain Point Berbasis Bukti & Owner Proses",
          metric: "6 Divisi",
          metricLabel: "Koordinasi Terkait",
          summary:
            "Merangkum akar masalah proses lintas departemen berdasarkan bukti transaksi aktual, bukan asumsi atau saling menyalahkan.",
          highlights: [
            "Mencakup koordinasi Sales dengan Warehouse, Purchasing, Teknisi, Finance, HRD, dan Digital Creative.",
            "Setiap temuan disertai bukti transaksi/kasus, dampak komersial, serta pemilik proses (process owner).",
            "Menjadi dasar perbaikan SOP bersama dan prioritas kerja 30/60/90 hari yang disetujui Direksi."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Dilaksanakan sebagai diagnostik proses dengan mandat resmi Direksi",
          accent: "red"
        }
      }
    ]
  },
  heatmapSection: {
    sectionTitle: "Competency Heatmap",
    filterLabels: {
      all: "Semua (13)",
      hard: "Hard Skills (7)",
      soft: "Soft Skills (6)"
    },
    methodHeaders: {
      skill: "Kompetensi",
      data: "Data",
      interview: "1-on-1",
      observe: "Observasi",
      test: "Tes/Role"
    },
    legendPrimary: "Uji Utama",
    legendSupporting: "Pendukung",
    legendBlank: "Menunggu Baseline",
    competencies: [
      {
        id: "hs-product",
        group: "hard",
        name: "Produk (New & Second)",
        focusKeywords: "Spek, condition grade, garansi & batasan",
        primaryMethods: ["test"],
        supportingMethods: ["observe"],
        modal: {
          badge: "Hard Skill • Produk",
          subtitle: "Pengetahuan Portofolio",
          title: "Penguasaan Produk New & Second/Refurbished",
          summary:
            "Mengukur pemahaman spesifikasi perangkat end-user, perbedaan kondisi new/refurbished, serta kejujuran menjelaskan garansi.",
          highlights: [
            "Diujikan utama melalui tes tertulis/lisan dan simulasi penjelasan kondisi unit kepada pelanggan.",
            "Diamati langsung saat melayani pertanyaan showroom, chat online, atau presentasi korporat.",
            "Skor hasil uji dipakai menyusun program Product Clinic, bukan dipublikasikan ke forum umum."
          ],
          footerLabel: "Privasi",
          footerValue: "Hasil tes per individu hanya untuk kebutuhan L&D & HR",
          accent: "slate"
        }
      },
      {
        id: "hs-technical",
        group: "hard",
        name: "Teknis (Server/Net/IT Sol)",
        focusKeywords: "Kebutuhan infrastruktur, arsitektur & eskalasi teknisi",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Hard Skill • Solusi Teknis",
          subtitle: "Infrastruktur & Layanan",
          title: "Pemahaman Server, Networking, Internet & IT Solution",
          summary:
            "Menilai kemampuan menggali kebutuhan teknis awal pelanggan dan berkolaborasi tepat dengan tim engineer.",
          highlights: [
            "Fokus pada ketepatan discovery kebutuhan — sales tidak mengarang spesifikasi di luar validasi teknis.",
            "Diukur lewat studi kasus/role-play solusi serta observasi proses handover ke Teknisi.",
            "Menentukan kesiapan menuju segmen B2B dan paket solusi."
          ],
          footerLabel: "Standar",
          footerValue: "Validasi spesifikasi wajib melibatkan tim teknis internal",
          accent: "slate"
        }
      },
      {
        id: "hs-quotation",
        group: "hard",
        name: "Quotation & Administrasi",
        focusKeywords: "Kelengkapan scope, term, garansi & SLA penawaran",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Hard Skill • Quotation",
          subtitle: "Kualitas Penawaran Komersial",
          title: "Penyusunan Quotation & Kelengkapan Scope",
          summary:
            "Mengevaluasi kerapian penawaran tertulis, kejelasan harga, garansi, waktu kirim, dan syarat pembayaran.",
          highlights: [
            "Diaudit dari sampel quotation 6–12 bulan terakhir serta tingkat konversi quote-to-win.",
            "Diamati langsung untuk melihat kecepatan pembuatan penawaran dan koordinasi cek stok.",
            "Mencegah salah janji pengiriman atau syarat pembayaran yang merugikan kas."
          ],
          footerLabel: "Bukti",
          footerValue: "Sampel dokumen penawaran & histori revisi transaksi",
          accent: "slate"
        }
      },
      {
        id: "hs-hpp",
        group: "hard",
        name: "HPP, Harga & Margin",
        focusKeywords: "Beda margin vs markup, kontrol diskon & profit",
        primaryMethods: ["data", "test"],
        supportingMethods: ["observe"],
        modal: {
          badge: "Hard Skill • Profitabilitas",
          subtitle: "Literasi Keuangan Penjualan",
          title: "Pemahaman HPP, Struktur Harga & Gross Margin",
          summary:
            "Memastikan tenaga sales memahami dampak diskon terhadap gross margin dan mematuhi batas kewenangan harga.",
          highlights: [
            "Diperiksa melalui data histori diskon/margin per transaksi dan uji hitung studi kasus harga.",
            "Memisahkan kesadaran margin (dari harga jual bersih) vs markup (dari HPP).",
            "Akses data HPP tetap dibatasi sesuai jenjang peran."
          ],
          footerLabel: "Tata Kelola",
          footerValue: "Menjadi dasar kesiapan implementasi Online Price Request",
          accent: "slate"
        }
      },
      {
        id: "hs-crm",
        group: "hard",
        name: "Disiplin CRM & Funnel",
        focusKeywords: "Pencatatan lead, pipeline, follow-up & histori akun",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Hard Skill • Sistem Data",
          subtitle: "Ketertiban Pipeline",
          title: "Kedisiplinan Penggunaan CRM & Pelacakan Funnel",
          summary:
            "Mengukur kepatuhan mencatat prospek, aktivitas follow-up, dan status deal di sistem bersama — bukan di chat pribadi.",
          highlights: [
            "Diaudit dari kelengkapan field data, umur opportunity macet (stale), dan akurasi tahap pipeline.",
            "Digali dalam 1-on-1 untuk mengetahui alasan resistensi sistem atau hambatan teknis tools.",
            "Menentukan kualitas data forecast perusahaan."
          ],
          footerLabel: "Tujuan",
          footerValue: "Mengidentifikasi celah data-quality sebelum standarisasi CRM",
          accent: "slate"
        }
      },
      {
        id: "hs-ecommerce",
        group: "hard",
        name: "E-Commerce & Digital",
        focusKeywords: "Listing, respons chat, konversi & fulfilment online",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Hard Skill • Kanal Online",
          subtitle: "Marketplace & Web Leads",
          title: "Pengelolaan E-Commerce & Respon Leads Digital",
          summary:
            "Menilai kecepatan merespons pertanyaan online, akurasi stok tayang, dan kelancaran proses fulfilment.",
          highlights: [
            "Ditinjau melalui metrik waktu respons, tingkat konversi chat-to-order, dan komplain online.",
            "Role-play chat menilai kemampuan rekomendasi alternatif bila unit yang dicari kosong.",
            "Relevan utama bagi tim Retail Online & Telemarketing."
          ],
          footerLabel: "Fokus",
          footerValue: "Kecepatan respons dan akurasi informasi produk",
          accent: "slate"
        }
      },
      {
        id: "hs-procurement",
        group: "hard",
        name: "Procurement (B2B/B2G)",
        focusKeywords: "Alur e-proc, e-Catalog, syarat paket & dokumen",
        primaryMethods: ["interview", "test"],
        supportingMethods: ["data"],
        modal: {
          badge: "Hard Skill • Pengadaan",
          subtitle: "Kesiapan B2B & Sektor Publik",
          title: "Pemahaman Proses Procurement Korporat & Pemerintah",
          summary:
            "Mengukur penguasaan alur registrasi vendor e-procurement korporat serta kepatuhan aturan e-Catalog/tender B2G.",
          highlights: [
            "Menguji kesiapan membaca syarat spesifikasi, legalitas, garansi, dan risiko termin pembayaran.",
            "Memetakan siapa di tim existing yang siap diarahkan ke B2B atau B2G setelah pelatihan.",
            "Mengikuti pembaruan regulasi pengadaan 2026 [R1–R4] saat menilai peluang B2G."
          ],
          footerLabel: "Arah",
          footerValue: "Dasar seleksi tim B2B/B2G pasca-asesmen",
          accent: "slate"
        }
      },
      {
        id: "ss-communication",
        group: "soft",
        name: "Komunikasi & Discovery",
        focusKeywords: "Mendengar aktif, menggali kebutuhan & kejelasan",
        primaryMethods: ["observe", "test"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Soft Skill • Komunikasi",
          subtitle: "Interaksi Pelanggan",
          title: "Komunikasi Efektif & Discovery Kebutuhan",
          summary:
            "Menilai kemampuan bertanya secara terstruktur untuk memahami konteks bisnis pelanggan sebelum menawarkan unit.",
          highlights: [
            "Diobservasi saat interaksi showroom, panggilan telepon, maupun rapat discovery B2B.",
            "Diujikan melalui skenario role-play agar tim tidak langsung melempar harga tanpa diagnosa.",
            "Menjadi pilar utama pergeseran dari penjual produk ke konsultan solusi."
          ],
          footerLabel: "Bukti",
          footerValue: "Rubrik role-play discovery & catatan observasi lapangan",
          accent: "slate"
        }
      },
      {
        id: "ss-negotiation",
        group: "soft",
        name: "Negosiasi & Handling Objection",
        focusKeywords: "Menjaga nilai solusi, tempo & batas diskon",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Negosiasi",
          subtitle: "Proteksi Margin & Tempo",
          title: "Negosiasi Nilai, Harga, dan Penanganan Keberatan",
          summary:
            "Mengukur ketangguhan mempertahankan nilai produk/garansi tanpa langsung menyerah pada permintaan diskon atau tempo panjang.",
          highlights: [
            "Diuji melalui role-play keberatan harga dibanding kompetitor atau unit termurah.",
            "Dikorelasikan dengan data histori diskon dan kualitas termin pembayaran di portofolio masing-masing.",
            "Membantu membedakan sales yang kuat di transaksi cepat vs negosiasi kontrak."
          ],
          footerLabel: "Target",
          footerValue: "Menekan diskon tidak terstruktur dan menjaga kualitas AR",
          accent: "slate"
        }
      },
      {
        id: "ss-trust",
        group: "soft",
        name: "Membangun Trust Pelanggan",
        focusKeywords: "Kredibilitas personal, kepastian solusi & relasi",
        primaryMethods: ["observe", "interview"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Kepercayaan",
          subtitle: "Relasi Jangka Panjang",
          title: "Kemampuan Membangun Trust dan Kredibilitas",
          summary:
            "Menilai konsistensi menepati janji, kejelasan tindak lanjut, dan kemampuan merawat hubungan berulang.",
          highlights: [
            "Terlihat dari tingkat repeat order, keluhan pelanggan, serta observasi komunikasi purnajual.",
            "Kunci utama mempertahankan reseller Distribusi dan akun korporat B2B.",
            "Menghindari janji berlebihan di luar kapasitas tim teknis atau pengiriman."
          ],
          footerLabel: "Indikator",
          footerValue: "Tingkat repeat purchase & kepuasan tindak lanjut purnajual",
          accent: "slate"
        }
      },
      {
        id: "ss-discipline",
        group: "soft",
        name: "Disiplin Proses & Follow-Up",
        focusKeywords: "Ketepatan waktu, SLA respon & kepatuhan SOP",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Soft Skill • Disiplin",
          subtitle: "Konsistensi Eksekusi",
          title: "Disiplin Menjalankan SOP, SLA & Follow-Up",
          summary:
            "Mengukur konsistensi menindaklanjuti penawaran terbuka dan keterbukaan terhadap sistem kerja baru.",
          highlights: [
            "Menggali akar resistensi sistem atau zona nyaman pada wawancara 1-on-1 serta data aktivitas.",
            "Diamati melalui ketepatan jadwal follow-up dan kelengkapan serah terima order.",
            "Dinilai dari perilaku kerja yang terukur, bukan persepsi subjektif."
          ],
          footerLabel: "Catatan",
          footerValue: "Fokus pada perilaku kerja yang dapat diamati & dibina",
          accent: "slate"
        }
      },
      {
        id: "ss-integrity",
        group: "soft",
        name: "Integritas & Transparansi",
        focusKeywords: "Jujur jelaskan kondisi new/second, harga & batas",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Integritas",
          subtitle: "Standar Etika Penjualan",
          title: "Kejujuran Menjelaskan Kondisi Barang & Kepatuhan",
          summary:
            "Memastikan seluruh tim jujur menyampaikan kondisi unit second/refurbished, cakupan garansi, dan aturan persetujuan.",
          highlights: [
            "Diuji langsung saat role-play penjelasan barang second agar tidak terjadi salah ekspektasi.",
            "Dievaluasi dari audit sampel retur/komplain serta kepatuhan terhadap approval diskon.",
            "Melindungi reputasi jangka panjang perusahaan di seluruh segmen."
          ],
          footerLabel: "Prinsip",
          footerValue: "Zero tolerance untuk klaim palsu spesifikasi maupun kondisi unit",
          accent: "red"
        }
      },
      {
        id: "ss-teamwork",
        group: "soft",
        name: "Teamwork Lintas Fungsi",
        focusKeywords: "Sinergi ke Warehouse, Teknisi, Finance & Creative",
        primaryMethods: ["interview", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Soft Skill • Kolaborasi",
          subtitle: "Penyatuan Tim & Lintas Divisi",
          title: "Kerja Sama Tim Sales & Koordinasi Lintas Departemen",
          summary:
            "Mengukur kesiapan berbagi informasi, menghindari konflik kepemilikan akun, dan menghormati alur divisi pendukung.",
          highlights: [
            "Menjawab tantangan menyatukan tim senior/junior yang selama ini berjalan sendiri-sendiri.",
            "Mengamati cara komunikasi sales saat meminta cek stok, validasi teknis, dan persetujuan kredit.",
            "Menjadi dasar seleksi calon mentor serta kandidat Team Leader."
          ],
          footerLabel: "Tujuan",
          footerValue: "Membangun tim yang kolaboratif menuju satu sistem komersial",
          accent: "slate"
        }
      }
    ]
  },
  deliverablesSection: {
    sectionTitle: "5 Output Diagnostik & Rencana Aksi 30/60/90 Hari",
    horizonNote: "Hasil asesmen dikonversi ke tindakan terukur 30 / 60 / 90 hari",
    items: [
      {
        id: "out-skill-matrix",
        tag: "Output 01",
        title: "Skill Matrix Individu",
        modal: {
          badge: "Output 01 • Pemetaan Tim",
          subtitle: "Klasifikasi Rahasia Internal",
          title: "Skill Matrix Individu (Tanpa Paparan Skor Publik)",
          summary:
            "Memetakan kekuatan dan celah kompetensi tiap personel untuk penempatan peran yang adil serta pelatihan terarah.",
          highlights: [
            "Mencakup 7 Hard Skills dan 6 Soft Skills yang diuji lintas data, observasi, dan role-play.",
            "Skor personal dijaga kerahasiaannya; hanya ringkasan tren tim yang dilaporkan ke Direksi kecuali ada izin.",
            "Menjadi acuan awal kalibrasi Grade 1–4 bersama HR."
          ],
          footerLabel: "Perlindungan Data",
          footerValue: "Skor personal tidak ditampilkan pada presentasi umum Direksi",
          accent: "slate"
        }
      },
      {
        id: "out-process-map",
        tag: "Output 02",
        title: "Process Map End-to-End",
        modal: {
          badge: "Output 02 • Alur Operasional",
          subtitle: "Pemetaan Lintas Departemen",
          title: "Process Map & Titik Serah Terima Antar-Fungsi",
          summary:
            "Mendokumentasikan alur kerja aktual beserta hambatan koordinasi dengan Warehouse, Purchasing, Teknisi, Finance, HRD, dan Creative.",
          highlights: [
            "Menunjukkan titik tunggu terlama dari lead masuk hingga pengiriman dan penagihan.",
            "Menetapkan process owner yang jelas pada setiap tahapan transaksi.",
            "Menjadi fondasi penyusunan SOP umum dan SOP khusus per divisi."
          ],
          footerLabel: "Tindak Lanjut",
          footerValue: "Quick wins perbaikan alur masuk ke rencana 30–60 hari",
          accent: "slate"
        }
      },
      {
        id: "out-data-quality",
        tag: "Output 03",
        title: "Data-Quality Assessment",
        modal: {
          badge: "Output 03 • Kesiapan Data",
          subtitle: "Audit Integritas Informasi",
          title: "Penilaian Kualitas Data Penjualan, Stok & Keuangan",
          summary:
            "Mengidentifikasi kesenjangan data yang harus dibenahi sebelum dashboard KPI, CRM, dan pricing governance dijalankan penuh.",
          highlights: [
            "Mengecek konsistensi pencatatan customer, histori omzet/margin, basis stok 70/30, serta HPP.",
            "Menilai kelayakan sistem ERP/WMS/POS/CRM yang saat ini sudah digunakan perusahaan.",
            "Mencegah pengambilan keputusan berbasis data yang belum terverifikasi."
          ],
          footerLabel: "Keluaran",
          footerValue: "Daftar gap data wajib dilengkapi lintas Finance, Gudang & Sales",
          accent: "slate"
        }
      },
      {
        id: "out-risk-list",
        tag: "Output 04",
        title: "Daftar Risiko Operasional",
        modal: {
          badge: "Output 04 • Mitigasi Risiko",
          subtitle: "Prioritas Pengamanan",
          title: "Daftar Risiko Komersial & Lintas Departemen",
          summary:
            "Mengurutkan risiko yang paling berdampak terhadap profitabilitas, perputaran stok, dan kepuasan pelanggan.",
          highlights: [
            "Mencakup kebocoran margin dari diskon bebas, stok slow-moving >90 hari, dan piutang macet.",
            "Mencatat risiko resistensi perubahan sistem dari kebiasaan kerja lama.",
            "Menetapkan langkah mitigasi cepat dalam horison 30, 60, dan 90 hari."
          ],
          footerLabel: "Kontrol",
          footerValue: "Setiap risiko memiliki mitigasi dan PIC koordinasi",
          accent: "slate"
        }
      },
      {
        id: "out-idp-action",
        tag: "Output 05",
        title: "IDP & Aksi 30/60/90 Hari",
        modal: {
          badge: "Output 05 • Rencana Tindak Lanjut",
          subtitle: "Individual Development Plan & Eksekusi",
          title: "IDP Tim dan Daftar Aksi 30 / 60 / 90 Hari",
          summary:
            "Mengubah hasil diagnostik menjadi rencana pembinaan individu dan agenda perbaikan proses yang bertahap.",
          highlights: [
            "30 Hari: selesaikan audit data, wawancara 1-on-1, observasi, dan 3–5 quick wins proses.",
            "60 Hari: finalisasi skill matrix, baseline KPI, pemetaan akun, dan desain SOP/dashboard minimum.",
            "90 Hari: jalankan role-play SOP, pricing request terkontrol, dan tinjauan pipeline mingguan."
          ],
          footerLabel: "Mandat",
          footerValue: "Ruang lingkup & prioritas aksi disahkan bersama Direksi",
          accent: "red"
        }
      }
    ]
  },
  caveatFooter:
    "Catatan Batas Klaim: Dijalankan sebagai diagnostik operasional dengan mandat & ruang lingkup yang disetujui Direksi — skor individu dijaga kerahasiaannya dan tidak dipaparkan terbuka."
};

export const slideDataEn: Slide11Data = {
  eyebrow: "Operational & Competency Diagnostics",
  title: "Audit and Assessment: Baseline Before Change",
  subtitle:
    "Reading actual records, observing real workflows, and mapping cross-functional readiness — never a personal fault-finding exercise.",
  mandateBanner: "Process Diagnostics Under Director Mandate",
  funnelSection: {
    sectionTitle: "5-Stage Audit Funnel",
    sequenceLabel: "Data → Interview → Observe → Test/Role-play → Findings",
    stages: [
      {
        id: "stage-data",
        stepCode: "Stage 01",
        title: "6–12 Month Data Review",
        keywords: "Revenue • Margin • Closing • AR • Pipeline • Repeat • Complaints • Aging",
        scopeNote: "Actual record check",
        modal: {
          badge: "Stage 01 • Historical Data Audit",
          subtitle: "6–12 Month Quantitative Baseline",
          title: "Reviewing Sales, Stock & Receivables Records",
          metric: "6–12 Mo",
          metricLabel: "Data Window",
          summary:
            "Establishes an objective baseline on revenue, margin health, stock turns, and payment quality before setting quotas.",
          highlights: [
            "Reviews actual revenue, gross margin, closing rates, repeat orders, and pipeline by segment.",
            "Audits AR aging, customer complaints/returns, and warehouse stock aging.",
            "Confirms authorized access to transaction history, COGS/HPP, and CRM logs."
          ],
          footerLabel: "Prerequisite",
          footerValue: "Verified access to sales, CRM, stock, AR & COGS records",
          accent: "slate"
        }
      },
      {
        id: "stage-interview",
        stepCode: "Stage 02",
        title: "1-on-1 Interviews",
        keywords: "Motivation • Work blockers • Target clarity • Role alignment",
        scopeNote: "Sales & cross-team view",
        modal: {
          badge: "Stage 02 • Structured Dialogue",
          subtitle: "1-on-1 & Cross-Functional Listening",
          title: "Uncovering Motivation and Real Operational Blockers",
          metric: "1-on-1",
          metricLabel: "Interview Format",
          summary:
            "Captures individual motivation, daily execution bottlenecks, and interdepartmental friction constructively.",
          highlights: [
            "Explores territory clarity, product support needs, and barriers to closing deals.",
            "Coordinates scheduled sessions with Warehouse, Purchasing, Technical, Finance, HRD, and Digital Creative.",
            "Protects staff confidentiality so feedback remains candid and actionable."
          ],
          footerLabel: "Principle",
          footerValue: "Diagnostic listening — focused on workflow blockers, not blame",
          accent: "slate"
        }
      },
      {
        id: "stage-observe",
        stepCode: "Stage 03",
        title: "Activity & Order-Flow Observation",
        keywords: "Visits • Showroom • Quoting • Technical & warehouse handover",
        scopeNote: "Lead to collection",
        modal: {
          badge: "Stage 03 • Field Observation",
          subtitle: "Actual Workflow Inspection",
          title: "Observing Sales Activities and Order Handovers",
          metric: "End-to-End",
          metricLabel: "Flow Scope",
          summary:
            "Observes firsthand how reps handle leads, build quotes, and hand off orders across supporting teams.",
          highlights: [
            "Observes showroom/online responses, B2B field visits, and follow-up logging habits.",
            "Traces quoting, Warehouse stock checks, Technical validation, and Finance billing.",
            "Pinpoints bottlenecks causing slow responses or mismatched delivery promises."
          ],
          footerLabel: "Output",
          footerValue: "Verified friction log from lead intake through collection",
          accent: "slate"
        }
      },
      {
        id: "stage-test",
        stepCode: "Stage 04",
        title: "Product Test & SOP Role-Play",
        keywords: "New/Second • Server/Net • Discovery • Condition • Margin • Follow-up",
        scopeNote: "Practical skill check",
        modal: {
          badge: "Stage 04 • Practical Skill Assessment",
          subtitle: "Product Knowledge & SOP Role-Play",
          title: "Testing Product Mastery and Live Selling Execution",
          metric: "Applied",
          metricLabel: "Assessment Mode",
          summary:
            "Evaluates technical product fluency and SOP execution under realistic customer conversation scenarios.",
          highlights: [
            "Product test: new vs second/refurbished hardware, servers, networking, internet, and IT Solutions.",
            "SOP role-play: discovery, honest unit-condition disclosure, pricing/margin discipline, and follow-up.",
            "Evaluates objection handling without resorting to unapproved discounting."
          ],
          footerLabel: "Confidentiality",
          footerValue: "Individual test scores remain private (HR/Manager only)",
          accent: "slate"
        }
      },
      {
        id: "stage-findings",
        stepCode: "Stage 05",
        title: "Cross-Functional Pain-Point Map",
        keywords: "Warehouse • Purchasing • Technical • Finance • HRD • Digital Creative",
        scopeNote: "Transaction proof & owners",
        modal: {
          badge: "Stage 05 • Diagnostic Synthesis",
          subtitle: "Cross-Departmental Findings",
          title: "Evidence-Backed Pain-Point Map & Process Owners",
          metric: "6 Units",
          metricLabel: "Cross-Functional Scope",
          summary:
            "Consolidates cross-departmental bottlenecks grounded in real transaction evidence rather than assumptions.",
          highlights: [
            "Covers coordination with Warehouse, Purchasing, Technical, Finance, HRD, and Digital Creative.",
            "Links every finding to concrete transaction proof, commercial impact, and a clear process owner.",
            "Feeds directly into shared SOP fixes and Director-approved 30/60/90-day priorities."
          ],
          footerLabel: "Boundary",
          footerValue: "Executed as an operational diagnostic under formal Director mandate",
          accent: "red"
        }
      }
    ]
  },
  heatmapSection: {
    sectionTitle: "Competency Heatmap",
    filterLabels: {
      all: "All (13)",
      hard: "Hard Skills (7)",
      soft: "Soft Skills (6)"
    },
    methodHeaders: {
      skill: "Competency",
      data: "Data",
      interview: "1-on-1",
      observe: "Observe",
      test: "Test/Role"
    },
    legendPrimary: "Primary Check",
    legendSupporting: "Supporting",
    legendBlank: "Pending Baseline",
    competencies: [
      {
        id: "hs-product",
        group: "hard",
        name: "Products (New & Second)",
        focusKeywords: "Specs, condition grades, warranty & limits",
        primaryMethods: ["test"],
        supportingMethods: ["observe"],
        modal: {
          badge: "Hard Skill • Product",
          subtitle: "Portfolio Mastery",
          title: "New & Second/Refurbished Product Knowledge",
          summary:
            "Assesses spec fluency, new-vs-refurbished grading, and transparent warranty explanation.",
          highlights: [
            "Tested primarily via structured knowledge tests and condition-disclosure role-plays.",
            "Observed during live showroom inquiries, marketplace chats, and client pitches.",
            "Results guide targeted Product Clinics rather than public individual ranking."
          ],
          footerLabel: "Privacy",
          footerValue: "Individual scores stay restricted to L&D & HR use",
          accent: "slate"
        }
      },
      {
        id: "hs-technical",
        group: "hard",
        name: "Technical (Server/Net/IT Sol)",
        focusKeywords: "Infra needs, solution scope & engineer escalation",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Hard Skill • Technical Solutions",
          subtitle: "Infrastructure & Services",
          title: "Server, Networking, Internet & IT Solution Fluency",
          summary:
            "Evaluates ability to scope client technical needs accurately and partner with engineering teams.",
          highlights: [
            "Focuses on discovery rigor — reps must never invent specs without engineer validation.",
            "Measured via solution role-plays and Technical handover observations.",
            "Determines readiness for B2B consultative and bundled deals."
          ],
          footerLabel: "Standard",
          footerValue: "Technical validation required prior to formal spec commitment",
          accent: "slate"
        }
      },
      {
        id: "hs-quotation",
        group: "hard",
        name: "Quotation & Admin",
        focusKeywords: "Clear scope, terms, warranty & delivery SLA",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Hard Skill • Quotation",
          subtitle: "Commercial Proposal Quality",
          title: "Quotation Accuracy & Scope Completeness",
          summary:
            "Reviews clarity of written quotes regarding pricing, warranty, lead times, and payment terms.",
          highlights: [
            "Audited via 6–12 month quote samples and quote-to-win conversion logs.",
            "Observed in daily workflows for turnaround speed and Warehouse stock verification.",
            "Prevents ambiguous delivery or credit terms that expose cashflow risk."
          ],
          footerLabel: "Evidence",
          footerValue: "Sample commercial quotes & revision history logs",
          accent: "slate"
        }
      },
      {
        id: "hs-hpp",
        group: "hard",
        name: "COGS (HPP), Pricing & Margin",
        focusKeywords: "Margin vs markup, discount limits & profit",
        primaryMethods: ["data", "test"],
        supportingMethods: ["observe"],
        modal: {
          badge: "Hard Skill • Profitability",
          subtitle: "Commercial Financial Literacy",
          title: "COGS (HPP), Pricing & Gross Margin Discipline",
          summary:
            "Verifies that reps understand discount impact on gross margin and respect pricing authority.",
          highlights: [
            "Checked through historical discount/margin logs and pricing case exercises.",
            "Distinguishes gross margin % (on net price) from markup % (on HPP).",
            "Detailed HPP visibility remains gated by role-based access."
          ],
          footerLabel: "Governance",
          footerValue: "Establishes readiness for tiered Online Price Requests",
          accent: "slate"
        }
      },
      {
        id: "hs-crm",
        group: "hard",
        name: "CRM & Funnel Discipline",
        focusKeywords: "Lead logging, pipeline hygiene & account history",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Hard Skill • Data Systems",
          subtitle: "Pipeline Hygiene",
          title: "CRM Discipline & Funnel Tracking",
          summary:
            "Measures consistent logging of leads, follow-ups, and deal stages in shared systems rather than personal chats.",
          highlights: [
            "Audited via mandatory field completeness, stale deal age, and stage accuracy.",
            "Explored in 1-on-1 interviews to uncover system friction or tool gaps.",
            "Directly governs forecast reliability for leadership."
          ],
          footerLabel: "Objective",
          footerValue: "Pinpoints data-quality gaps before standardizing CRM SOPs",
          accent: "slate"
        }
      },
      {
        id: "hs-ecommerce",
        group: "hard",
        name: "E-Commerce & Digital",
        focusKeywords: "Listings, chat response SLA & online fulfilment",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Hard Skill • Digital Channels",
          subtitle: "Marketplace & Web Leads",
          title: "E-Commerce & Digital Inquiry Handling",
          summary:
            "Evaluates online inquiry response speed, stock listing accuracy, and smooth order fulfilment.",
          highlights: [
            "Reviewed through response-time logs, chat-to-order conversion, and online return rates.",
            "Chat role-plays test alternative product recommendations when stock varies.",
            "Primary focus area for Online Retail and Telemarketing seats."
          ],
          footerLabel: "Focus",
          footerValue: "Response speed and accurate online stock representation",
          accent: "slate"
        }
      },
      {
        id: "hs-procurement",
        group: "hard",
        name: "Procurement (B2B/B2G)",
        focusKeywords: "E-proc portals, e-Catalog, compliance & terms",
        primaryMethods: ["interview", "test"],
        supportingMethods: ["data"],
        modal: {
          badge: "Hard Skill • Procurement",
          subtitle: "Enterprise & Public Readiness",
          title: "B2B Corporate & B2G Public Procurement Fluency",
          summary:
            "Assesses mastery of corporate e-proc portals and compliant e-Catalog/tender requirements.",
          highlights: [
            "Tests ability to screen technical specs, legal eligibility, warranties, and payment risks.",
            "Identifies existing reps suited for B2B or B2G tracks following structured training.",
            "Aligns B2G screening with 2026 procurement rules [R1–R4]."
          ],
          footerLabel: "Outcome",
          footerValue: "Informs post-assessment B2B/B2G role placement",
          accent: "slate"
        }
      },
      {
        id: "ss-communication",
        group: "soft",
        name: "Communication & Discovery",
        focusKeywords: "Active listening, needs probing & clarity",
        primaryMethods: ["observe", "test"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Soft Skill • Communication",
          subtitle: "Customer Engagement",
          title: "Structured Discovery & Clear Communication",
          summary:
            "Evaluates ability to ask structured business questions before pitching hardware or prices.",
          highlights: [
            "Observed across showroom interactions, phone calls, and B2B discovery meetings.",
            "Tested in role-plays to shift behavior from reactive quoting to consultative probing.",
            "Foundational skill for transitioning from product seller to IT consultant."
          ],
          footerLabel: "Evidence",
          footerValue: "Role-play discovery rubric & field observation notes",
          accent: "slate"
        }
      },
      {
        id: "ss-negotiation",
        group: "soft",
        name: "Negotiation & Objections",
        focusKeywords: "Value defense, payment terms & discount rigor",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Negotiation",
          subtitle: "Margin & Terms Protection",
          title: "Value Negotiation & Objection Handling",
          summary:
            "Measures resilience in defending solution value and warranty without caving to deep discounts or risky terms.",
          highlights: [
            "Tested via price-objection role-plays against low-cost competitors.",
            "Cross-checked with historical discounting and AR collection patterns.",
            "Differentiates transactional closers from enterprise contract negotiators."
          ],
          footerLabel: "Target",
          footerValue: "Eliminate ad-hoc discounting and protect AR quality",
          accent: "slate"
        }
      },
      {
        id: "ss-trust",
        group: "soft",
        name: "Customer Trust Building",
        focusKeywords: "Credibility, reliable delivery & retention",
        primaryMethods: ["observe", "interview"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Trust",
          subtitle: "Long-Term Account Value",
          title: "Building Customer Credibility & Trust",
          summary:
            "Assesses consistency in keeping commitments, transparent updates, and nurturing repeat business.",
          highlights: [
            "Evidenced by repeat order rates, low complaint ratios, and post-sale check-ins.",
            "Essential for retaining Distribution resellers and recurring B2B accounts.",
            "Discourages over-promising beyond internal delivery or technical capacity."
          ],
          footerLabel: "Indicator",
          footerValue: "Repeat purchase rate & post-delivery satisfaction",
          accent: "slate"
        }
      },
      {
        id: "ss-discipline",
        group: "soft",
        name: "Process & Follow-Up Discipline",
        focusKeywords: "Punctuality, SLA adherence & system openness",
        primaryMethods: ["data", "observe"],
        supportingMethods: ["interview"],
        modal: {
          badge: "Soft Skill • Discipline",
          subtitle: "Execution Consistency",
          title: "SOP Adherence, SLA Speed & Follow-Up Rigor",
          summary:
            "Measures consistent follow-through on open quotes and openness to structured commercial tools.",
          highlights: [
            "Explores root causes of comfort-zone habits or system resistance in 1-on-1 interviews.",
            "Observed via scheduled follow-up execution and clean order handovers.",
            "Evaluates observable work behaviors rather than subjective personality traits."
          ],
          footerLabel: "Note",
          footerValue: "Focused strictly on observable, coachable work habits",
          accent: "slate"
        }
      },
      {
        id: "ss-integrity",
        group: "soft",
        name: "Integrity & Transparency",
        focusKeywords: "Honest new/second disclosure & rule compliance",
        primaryMethods: ["test", "observe"],
        supportingMethods: ["data"],
        modal: {
          badge: "Soft Skill • Integrity",
          subtitle: "Commercial Ethics Standard",
          title: "Honest Condition Disclosure & Pricing Compliance",
          summary:
            "Ensures every rep communicates refurbished unit condition, warranty limits, and pricing rules truthfully.",
          highlights: [
            "Directly tested in second/refurbished sales role-plays to prevent buyer misrepresentation.",
            "Cross-checked via return/complaint sampling and discount-approval audit trails.",
            "Safeguards corporate reputation across Retail, B2B, and public channels."
          ],
          footerLabel: "Principle",
          footerValue: "Zero tolerance for misleading specs or unit condition claims",
          accent: "red"
        }
      },
      {
        id: "ss-teamwork",
        group: "soft",
        name: "Cross-Functional Teamwork",
        focusKeywords: "Synergy with Warehouse, Tech, Finance & Creative",
        primaryMethods: ["interview", "observe"],
        supportingMethods: ["test"],
        modal: {
          badge: "Soft Skill • Collaboration",
          subtitle: "Team & Cross-Unit Alignment",
          title: "Internal Team Unity & Cross-Department Coordination",
          summary:
            "Assesses willingness to share account context, avoid territory clashes, and respect support-team SLAs.",
          highlights: [
            "Addresses the challenge of unifying senior and junior reps into one cohesive commercial unit.",
            "Observes how sales coordinates stock checks, technical scoping, and credit approvals.",
            "Identifies natural mentors and future Team Leader candidates."
          ],
          footerLabel: "Objective",
          footerValue: "Unifying individual habits into a collaborative system",
          accent: "slate"
        }
      }
    ]
  },
  deliverablesSection: {
    sectionTitle: "5 Diagnostic Outputs & 30/60/90-Day Action List",
    horizonNote: "Diagnostic outputs convert directly into 30 / 60 / 90-day execution",
    items: [
      {
        id: "out-skill-matrix",
        tag: "Output 01",
        title: "Individual Skill Matrix",
        modal: {
          badge: "Output 01 • Team Mapping",
          subtitle: "Confidential Internal Record",
          title: "Individual Skill Matrix (No Public Score Exposure)",
          summary:
            "Maps strengths and capability gaps per rep to support fair role placement and targeted training.",
          highlights: [
            "Covers 7 Hard Skills and 6 Soft Skills triangulated across data, observation, and role-play.",
            "Personal scores stay confidential; Directors view aggregated team readiness unless approved.",
            "Anchors Grade 1–4 calibration jointly with HR."
          ],
          footerLabel: "Data Privacy",
          footerValue: "Identifiable scores are excluded from Director-level slides",
          accent: "slate"
        }
      },
      {
        id: "out-process-map",
        tag: "Output 02",
        title: "End-to-End Process Map",
        modal: {
          badge: "Output 02 • Operational Flow",
          subtitle: "Cross-Department Mapping",
          title: "Process Map & Interdepartmental Handoffs",
          summary:
            "Documents real workflows and friction points across Warehouse, Purchasing, Technical, Finance, HRD, and Creative.",
          highlights: [
            "Pinpoints longest wait times from lead intake to physical delivery and invoicing.",
            "Assigns explicit process ownership at every commercial handoff.",
            "Forms the blueprint for general and division-specific SOPs."
          ],
          footerLabel: "Next Step",
          footerValue: "Immediate workflow fixes feed the 30–60 day action plan",
          accent: "slate"
        }
      },
      {
        id: "out-data-quality",
        tag: "Output 03",
        title: "Data-Quality Assessment",
        modal: {
          badge: "Output 03 • System Readiness",
          subtitle: "Information Integrity Audit",
          title: "Sales, Inventory & Financial Data-Quality Check",
          summary:
            "Identifies data gaps that must be resolved before full CRM, KPI cockpit, and pricing governance rollout.",
          highlights: [
            "Audits customer master hygiene, margin records, 70/30 stock metric basis, and HPP accuracy.",
            "Evaluates existing ERP/WMS/POS/CRM tools before proposing new software.",
            "Prevents commercial decisions built on unverified figures."
          ],
          footerLabel: "Output",
          footerValue: "Prioritized data-cleanup checklist across Finance, Warehouse & Sales",
          accent: "slate"
        }
      },
      {
        id: "out-risk-list",
        tag: "Output 04",
        title: "Operational Risk List",
        modal: {
          badge: "Output 04 • Risk Mitigation",
          subtitle: "Priority Safeguards",
          title: "Commercial & Cross-Functional Risk Register",
          summary:
            "Ranks operational risks with highest impact on gross margin, inventory velocity, and payment collection.",
          highlights: [
            "Covers margin erosion from ad-hoc discounts, slow-moving stock >90 days, and overdue AR.",
            "Tracks change-management risk from legacy habits or CRM resistance.",
            "Pairs each risk with concrete 30/60/90-day mitigations."
          ],
          footerLabel: "Control",
          footerValue: "Every risk carries a mitigation step and coordination owner",
          accent: "slate"
        }
      },
      {
        id: "out-idp-action",
        tag: "Output 05",
        title: "IDP & 30/60/90-Day Plan",
        modal: {
          badge: "Output 05 • Action Roadmap",
          subtitle: "Individual Development Plan & Execution",
          title: "IDPs and Phased 30 / 60 / 90-Day Action List",
          summary:
            "Translates diagnostic findings into personalized coaching plans and sequenced operational improvements.",
          highlights: [
            "Days 1–30: complete data audit, 1-on-1s, observations, and 3–5 approved quick wins.",
            "Days 31–60: finalize skill matrix, KPI baselines, account mapping, and MVP dashboard/SOPs.",
            "Days 61–90: run SOP role-plays, structured price requests, and weekly pipeline reviews."
          ],
          footerLabel: "Mandate",
          footerValue: "Diagnostic scope and action priorities approved by Directors",
          accent: "red"
        }
      }
    ]
  },
  caveatFooter:
    "Scope Boundary: Executed as an operational/process diagnostic with Director-approved mandate — individual employee scores remain confidential and are never exposed openly."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide11Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide11Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 11,
  folder: "11",
  sectionId: 6,
  navTitle: {
    in: "Audit & Assessment",
    en: "Audit & Assessment"
  },
  headerTitle: {
    in: "Audit dan Assessment - Baseline Sebelum Perubahan",
    en: "Audit and Assessment - Baseline Before Change"
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
