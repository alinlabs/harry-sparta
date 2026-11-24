import { useLanguage } from '@/contexts/LanguageContext';

export type GradeId = 'grade-1' | 'grade-2' | 'grade-3' | 'grade-4';
export type PathwayCardId = 'specialist-track' | 'leader-track' | 'hr-evidence';

export interface Slide10ModalPayload {
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

export interface GradeRowItem {
  id: GradeId;
  gradeLabel: string;
  portfolioName: string;
  scope: string;
  competencies: string;
  kpi: string;
  evidence: string;
  gate: string;
  modal: Slide10ModalPayload;
}

export interface PathwayCardItem {
  id: PathwayCardId;
  tag: string;
  title: string;
  keywords: string;
  modal: Slide10ModalPayload;
}

export interface Slide10Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  ladderSection: {
    sectionTitle: string;
    principleNote: string;
    columns: {
      grade: string;
      scope: string;
      competencies: string;
      kpi: string;
      evidence: string;
      gate: string;
    };
    grades: GradeRowItem[];
  };
  pathwaysSection: {
    sectionTitle: string;
    ruleNote: string;
    items: PathwayCardItem[];
  };
  compensationFooter: string;
}

export const slideDataId: Slide10Data = {
  eyebrow: "Arsitektur Karier & Grade",
  title: "Kompetensi & Hasil Nyata, Bukan Senioritas",
  subtitle:
    "Mengganti label senior/junior dengan prinsip job grading berbasis kompetensi, kualitas proses, dan kebutuhan organisasi.",
  ladderSection: {
    sectionTitle: "Career Ladder Empat Tingkat (Grade 1–4)",
    principleNote:
      "Masa kerja adalah konteks pengalaman — bukan penentu tunggal level maupun kompensasi",
    columns: {
      grade: "Grade & Kanal",
      scope: "Scope",
      competencies: "Kompetensi Wajib",
      kpi: "Indikator Kinerja",
      evidence: "Bukti Kerja",
      gate: "Gerbang Naik Level"
    },
    grades: [
      {
        id: "grade-1",
        gradeLabel: "Grade 1",
        portfolioName: "Retail",
        scope: "Konsumen langsung (offline, online, tele)",
        competencies: "Product knowledge, pelayanan, closing cepat, CRM, akurasi stok",
        kpi: "Respons leads, konversi & basket size",
        evidence: "Log CRM lengkap & akurasi transaksi stok",
        gate: "Konsistensi hasil & lulus uji produk/SOP",
        modal: {
          badge: "Grade 1 • Retail",
          subtitle: "Jalur Penjualan Transaksional",
          title: "Grade 1 — Penjualan Langsung & Showroom/Online",
          metric: "Grade 1",
          metricLabel: "Fondasi Komersial",
          summary:
            "Menilai penguasaan dasar produk new/second, ketertiban pencatatan CRM, serta kecepatan layanan konsumen.",
          highlights: [
            "Kompetensi wajib: product knowledge, pelayanan, closing cepat, disiplin CRM, dan akurasi stok.",
            "Menghilangkan zona nyaman atau penolakan sistem lewat standar eksekusi yang sama bagi semua staf.",
            "Kenaikan ke tingkat berikutnya membutuhkan bukti kinerja konsisten dan ketersediaan formasi."
          ],
          footerLabel: "Prinsip",
          footerValue: "Dinilai dari hasil dan ketertiban SOP, bukan masa kerja",
          accent: "slate"
        }
      },
      {
        id: "grade-2",
        gradeLabel: "Grade 2",
        portfolioName: "Distribution / Channel",
        scope: "Toko komputer & mitra reseller volume",
        competencies: "Negosiasi volume, active reseller, margin, kontrol tempo/AR",
        kpi: "Reseller aktif, repeat order & kelancaran bayar",
        evidence: "Histori repeat mitra & kepatuhan batas kredit",
        gate: "Portofolio reseller sehat & disiplin piutang",
        modal: {
          badge: "Grade 2 • Distribution / Channel",
          subtitle: "Pengelolaan Mitra & Volume",
          title: "Grade 2 — Negosiasi Channel & Disiplin Kredit",
          metric: "Grade 2",
          metricLabel: "Skala Reseller",
          summary:
            "Menguji kemampuan menjaga jaringan toko komputer agar melakukan pengulangan order secara menguntungkan dan aman secara piutang.",
          highlights: [
            "Kompetensi wajib: negosiasi volume, aktivasi reseller, penjagaan margin, dan kontrol tempo/AR.",
            "Menilai keseimbangan antara mengejar kuantitas unit dan menjaga kualitas pembayaran mitra.",
            "Perpindahan dari Grade 1 ke Grade 2 didasari asesmen kemampuan negosiasi serta kebutuhan channel."
          ],
          footerLabel: "Prinsip",
          footerValue: "Kualitas margin dan keteraturan piutang menjadi bukti utama",
          accent: "slate"
        }
      },
      {
        id: "grade-3",
        gradeLabel: "Grade 3",
        portfolioName: "B2B",
        scope: "Korporat & System Integrator (SI)",
        competencies: "Discovery, solusi teknis, proposal, presentasi, project sales & AM",
        kpi: "Qualified pipeline, gross margin & retensi akun",
        evidence: "Account Planning Note, proposal & rekam proyek",
        gate: "Lulus review solusi teknis & margin konsisten",
        modal: {
          badge: "Grade 3 • B2B Solution",
          subtitle: "Penjualan Konsultatif & Proyek",
          title: "Grade 3 — Solusi Enterprise & Account Management",
          metric: "Grade 3",
          metricLabel: "Kompleksitas Solusi",
          summary:
            "Menuntut kemampuan menggali kebutuhan teknis klien, menyusun proposal solusi, dan mengelola hubungan jangka panjang.",
          highlights: [
            "Kompetensi wajib: discovery, solusi teknis, penyusunan proposal, presentasi, project sales, dan AM.",
            "Mencakup penjualan server baru/second, networking, IT Solution, dan kontrak layanan berkelanjutan.",
            "Tidak menggantikan penghargaan masa kerja secara otomatis — harus terbukti melalui kualitas deal."
          ],
          footerLabel: "Prinsip",
          footerValue: "Tidak semua staf harus dipaksa pindah segmen tanpa bukti kecakapan",
          accent: "slate"
        }
      },
      {
        id: "grade-4",
        gradeLabel: "Grade 4",
        portfolioName: "B2G",
        scope: "Instansi pemerintah, BUMN & layanan publik",
        competencies: "Pengadaan publik, dokumen, subcon/maincon, kontrak & kepatuhan",
        kpi: "Lolos syarat, seleksi bid/no-bid & kepatuhan",
        evidence: "Kelengkapan dokumen tender & serah terima bersih",
        gate: "Kebutuhan posisi B2G & verifikasi kepatuhan penuh",
        modal: {
          badge: "Grade 4 • B2G Compliance",
          subtitle: "Pengadaan Publik & Kemitraan",
          title: "Grade 4 — Pengadaan Sektor Publik & Kepatuhan",
          metric: "Grade 4",
          metricLabel: "Kepatuhan Regulasi",
          summary:
            "Fokus pada kompleksitas regulasi pengadaan pemerintah, kerja sama subcon/maincon, serta pengendalian kontrak.",
          highlights: [
            "Kompetensi wajib: tata cara pengadaan publik, verifikasi dokumen, kemitraan subcon/maincon, dan kepatuhan kontrak.",
            "Tidak semua tenaga sales dipaksa menjadi B2G — perpindahan mensyaratkan kebutuhan organisasi dan sertifikasi internal.",
            "Menjamin batas kelayakan barang baru vs refurbished dipatuhi tanpa celah."
          ],
          footerLabel: "Prinsip",
          footerValue: "Kepatuhan dan akurasi kontrak lebih utama daripada jumlah penawaran",
          accent: "slate"
        }
      }
    ]
  },
  pathwaysSection: {
    sectionTitle: "Dua Jalur Pengembangan Karier & Kesiapan Data",
    ruleNote:
      "Tidak semua sales dipaksa masuk B2G — kenaikan memerlukan bukti kompetensi & kebutuhan peran",
    items: [
      {
        id: "specialist-track",
        tag: "Jalur 01 • Karier Spesialis",
        title: "Individual Contributor / Specialist",
        keywords: "Ahli kanal/sektor • Kontribusi proyek & akun besar",
        modal: {
          badge: "Jalur 01 • Individual Contributor",
          subtitle: "Pertumbuhan Keahlian Tanpa Pindah Struktural",
          title: "Jalur Spesialis / Kontributor Individu",
          summary:
            "Memungkinkan tenaga sales unggulan bertumbuh secara keahlian, cakupan akun strategis, dan tanggung jawab tanpa harus menjadi manajer.",
          highlights: [
            "Menghindari pemaksaan penjual berkinerja tinggi menjadi supervisor bila kekuatannya pada eksekusi langsung.",
            "Berfokus pada pendalaman sektor B2B, penguasaan solusi teknis, atau penanganan key account.",
            "Dampak kompensasi atau insentif mengikuti struktur grade yang disetujui HR."
          ],
          footerLabel: "Arah",
          footerValue: "Kedalaman keahlian kanal & portofolio akun bernilai tinggi",
          accent: "slate"
        }
      },
      {
        id: "leader-track",
        tag: "Jalur 02 • Karier Kepemimpinan",
        title: "People Leader",
        keywords: "Coaching tim • Supervisi KPI, SOP & pipeline",
        modal: {
          badge: "Jalur 02 • People Leader",
          subtitle: "Supervisi & Pengembang Tim",
          title: "Jalur Kepemimpinan (Supervisor / Team Leader)",
          summary:
            "Diperuntukkan bagi kandidat yang lolos asesmen pembinaan tim, penegakan SOP, dan pengelolaan kinerja kolektif.",
          highlights: [
            "Menilai kemampuan coaching 1-on-1, review pipeline mingguan, dan penyelesaian hambatan lintas tim.",
            "Tidak diangkat hanya karena lama bekerja atau pencapaian individu semata.",
            "Membutuhkan kesiapan peran organisasi serta evaluasi jabatan formal."
          ],
          footerLabel: "Arah",
          footerValue: "Mengalikan produktivitas tim melalui supervisi terstruktur",
          accent: "slate"
        }
      },
      {
        id: "hr-evidence",
        tag: "Bukti & Penyelarasan",
        title: "Data HR & Kinerja Wajib",
        keywords: "Job desc & payroll berlaku • Kinerja 6–12 bln • Asesmen",
        modal: {
          badge: "Data Wajib • HR & Kinerja",
          subtitle: "Data / Bukti yang Disiapkan",
          title: "Prasyarat Implementasi Job Grading",
          summary:
            "Arsitektur grade ini adalah kerangka prinsip yang wajib diselaraskan bersama HR dan Direksi sebelum diterapkan.",
          highlights: [
            "Job description dan struktur salary/benefit yang berlaku saat ini beserta kriteria promosi dan kebijakan HR.",
            "Rekaman kinerja 6–12 bulan per tenaga sales serta hasil asesmen kompetensi objektif.",
            "Tidak menjanjikan skema gaji baru sebelum evaluasi jabatan dan kemampuan finansial perusahaan disetujui."
          ],
          footerLabel: "Batas Klaim",
          footerValue: "Prinsip job grading diselaraskan dengan kebijakan HR & Direksi",
          accent: "slate"
        }
      }
    ]
  },
  compensationFooter:
    "Compensation mapping is subject to HR policy and job evaluation — kenaikan grade mempertimbangkan kebijakan HR dan kemampuan finansial perusahaan."
};

export const slideDataEn: Slide10Data = {
  eyebrow: "Career & Grade Architecture",
  title: "Competence & Proven Results Over Tenure",
  subtitle:
    "Replacing tenure-based Senior/Junior labels with competency job grading anchored on process quality and business need.",
  ladderSection: {
    sectionTitle: "Four-Tier Career Ladder (Grade 1–4)",
    principleNote:
      "Tenure serves as experience context only — never the sole determinant of level or pay",
    columns: {
      grade: "Grade & Channel",
      scope: "Scope",
      competencies: "Required Competencies",
      kpi: "Performance KPIs",
      evidence: "Work Evidence",
      gate: "Advancement Gate"
    },
    grades: [
      {
        id: "grade-1",
        gradeLabel: "Grade 1",
        portfolioName: "Retail",
        scope: "Direct buyers (offline, online, tele)",
        competencies: "Product knowledge, service, fast closing, CRM, stock accuracy",
        kpi: "Lead response, conversion & basket size",
        evidence: "Complete CRM logs & stock transaction accuracy",
        gate: "Consistent results & product/SOP test pass",
        modal: {
          badge: "Grade 1 • Retail",
          subtitle: "Transactional Sales Foundation",
          title: "Grade 1 — Direct Consumer & Showroom/Online",
          metric: "Grade 1",
          metricLabel: "Commercial Baseline",
          summary:
            "Assesses new/refurbished product mastery, CRM discipline, and speed in converting direct customer inquiries.",
          highlights: [
            "Required competencies: product knowledge, customer care, fast closing, CRM usage, and stock accuracy.",
            "Eliminates comfort-zone habits or system resistance through shared execution standards.",
            "Moving up requires sustained performance proof and an approved organizational opening."
          ],
          footerLabel: "Principle",
          footerValue: "Evaluated strictly by execution and SOP rigor, not tenure",
          accent: "slate"
        }
      },
      {
        id: "grade-2",
        gradeLabel: "Grade 2",
        portfolioName: "Distribution / Channel",
        scope: "Computer stores & volume resellers",
        competencies: "Volume negotiation, active resellers, margin, AR/terms control",
        kpi: "Active resellers, repeat orders & collections",
        evidence: "Partner repeat history & credit-limit compliance",
        gate: "Healthy reseller book & zero term breaches",
        modal: {
          badge: "Grade 2 • Distribution / Channel",
          subtitle: "Partner & Volume Management",
          title: "Grade 2 — Channel Negotiation & Credit Rigor",
          metric: "Grade 2",
          metricLabel: "Reseller Scale",
          summary:
            "Measures ability to grow recurring computer-store restocks while protecting margin and receivables health.",
          highlights: [
            "Required competencies: volume negotiation, reseller activation, margin protection, and AR/term control.",
            "Balances unit throughput against partner credit quality and timely collection.",
            "Progression from Grade 1 follows verified negotiation readiness and channel capacity needs."
          ],
          footerLabel: "Principle",
          footerValue: "Margin quality and receivables discipline serve as primary proof",
          accent: "slate"
        }
      },
      {
        id: "grade-3",
        gradeLabel: "Grade 3",
        portfolioName: "B2B",
        scope: "Corporate end-users & System Integrators",
        competencies: "Discovery, tech solutions, proposals, pitching, project sales & AM",
        kpi: "Qualified pipeline, gross margin & retention",
        evidence: "Account Planning Notes, proposals & project logs",
        gate: "Technical solution review pass & healthy margin",
        modal: {
          badge: "Grade 3 • B2B Solution",
          subtitle: "Consultative & Project Selling",
          title: "Grade 3 — Enterprise Solutions & Account Management",
          metric: "Grade 3",
          metricLabel: "Solution Complexity",
          summary:
            "Requires diagnosing technical requirements, building solution proposals, and managing multi-stakeholder accounts.",
          highlights: [
            "Required competencies: discovery, technical solutions, proposal writing, pitching, project sales, and AM.",
            "Covers new/second servers, networking, IT Solutions, connectivity, and maintenance contracts.",
            "Not granted by years of service — earned through verified deal execution and margin discipline."
          ],
          footerLabel: "Principle",
          footerValue: "Reps are never forced across segments without verified readiness",
          accent: "slate"
        }
      },
      {
        id: "grade-4",
        gradeLabel: "Grade 4",
        portfolioName: "B2G",
        scope: "Ministries, SOEs & public institutions",
        competencies: "Public procurement, docs, subcon/maincon teaming, contracts & compliance",
        kpi: "Admin pass rate, bid/no-bid rigor & compliance",
        evidence: "Verified bid packets & clean contract handovers",
        gate: "Approved B2G seat need & full compliance check",
        modal: {
          badge: "Grade 4 • B2G Compliance",
          subtitle: "Public Procurement & Partnerships",
          title: "Grade 4 — Public Procurement & Regulatory Rigor",
          metric: "Grade 4",
          metricLabel: "Compliance Focus",
          summary:
            "Handles public-procurement regulations, subcon/maincon teaming, and strict contractual execution.",
          highlights: [
            "Required competencies: public procurement rules, tender documentation, subcon/maincon teaming, and compliance.",
            "Not every sales rep needs to enter B2G — transition depends on organization need and readiness.",
            "Enforces strict eligibility boundaries for new vs refurbished units across packages."
          ],
          footerLabel: "Principle",
          footerValue: "Compliance and execution accuracy outweigh raw bid volume",
          accent: "slate"
        }
      }
    ]
  },
  pathwaysSection: {
    sectionTitle: "Dual Career Pathways & HR Readiness",
    ruleNote:
      "Not everyone must move to B2G — advancement requires competence proof & business need",
    items: [
      {
        id: "specialist-track",
        tag: "Track 01 • Specialist Path",
        title: "Individual Contributor / Specialist",
        keywords: "Sector/channel expert • Complex deals & key accounts",
        modal: {
          badge: "Track 01 • Individual Contributor",
          subtitle: "Deep Expertise Without People Management",
          title: "Specialist / Individual Contributor Pathway",
          summary:
            "Allows top performers to grow in technical breadth, strategic account scope, and grade without forcing managerial duties.",
          highlights: [
            "Avoids turning strong individual closers into reluctant supervisors purely for progression.",
            "Focuses on vertical specialization, solution architecture, or strategic Key Account ownership.",
            "Grade progression aligns with HR evaluation and company financial capacity."
          ],
          footerLabel: "Direction",
          footerValue: "Deep channel mastery & higher-value account ownership",
          accent: "slate"
        }
      },
      {
        id: "leader-track",
        tag: "Track 02 • Leadership Path",
        title: "People Leader",
        keywords: "Team coaching • KPI, SOP & pipeline governance",
        modal: {
          badge: "Track 02 • People Leader",
          subtitle: "Supervision & Team Capability Building",
          title: "People Leader Pathway (Supervisor / Team Leader)",
          summary:
            "Designed for candidates who pass coaching, SOP enforcement, and collective team performance assessments.",
          highlights: [
            "Evaluates 1-on-1 coaching, weekly pipeline reviews, and cross-functional escalation skills.",
            "Never awarded solely for tenure or individual personal sales quota.",
            "Requires an approved organizational seat and formal job evaluation."
          ],
          footerLabel: "Direction",
          footerValue: "Multiplies team output through structured supervision",
          accent: "slate"
        }
      },
      {
        id: "hr-evidence",
        tag: "Proof & Alignment",
        title: "Required HR & Performance Data",
        keywords: "Current job desc & pay • 6–12m KPIs • Assessments",
        modal: {
          badge: "Required Evidence • HR & Performance",
          subtitle: "Prerequisites Before Rollout",
          title: "Data Required for Job Grading Alignment",
          summary:
            "This architecture establishes grading principles to be jointly calibrated with HR and Directors prior to implementation.",
          highlights: [
            "Existing job descriptions, current salary/benefit structure, promotion criteria, and HR policies.",
            "6–12 months of individual sales performance records plus objective competency assessment results.",
            "No new pay promise is made prior to formal job evaluation and company financial sign-off."
          ],
          footerLabel: "Boundary",
          footerValue: "Job grading principles subject to HR & Director approval",
          accent: "slate"
        }
      }
    ]
  },
  compensationFooter:
    "Compensation mapping is subject to HR policy and job evaluation — grade changes depend on HR policy and financial capacity."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide10Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide10Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 10,
  folder: "10",
  sectionId: 6,
  navTitle: {
    in: "Sales Grade & Career",
    en: "Sales Grade & Career"
  },
  headerTitle: {
    in: "Sales Grade & Career Architecture - Kompetensi, Bukan Senioritas",
    en: "Sales Grade & Career Architecture - Competence Over Tenure"
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
