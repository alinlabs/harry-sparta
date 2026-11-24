import { useLanguage } from '@/contexts/LanguageContext';

export type LdModeId = 'training' | 'coaching' | 'mentoring' | 'counselling';
export type WeekClinicId = 'week-1' | 'week-2' | 'week-3' | 'week-4';
export type MatrixRowId = 'gap-product' | 'gap-pipeline' | 'gap-solution' | 'gap-behavior';

export interface Slide12ModalPayload {
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

export interface LdModeItem {
  id: LdModeId;
  cycleTag: string;
  title: string;
  modal: Slide12ModalPayload;
}

export interface WeekClinicItem {
  id: WeekClinicId;
  weekLabel: string;
  title: string;
  modeRef: string;
  focusKeywords: string;
  modal: Slide12ModalPayload;
}

export interface GapMatrixRow {
  id: MatrixRowId;
  gap: string;
  intervention: string;
  evidence: string;
  gradeReadiness: string;
  modal: Slide12ModalPayload;
}

export interface Slide12Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  cycleStrip: {
    label: string;
    steps: string[];
  };
  modesSection: {
    sectionTitle: string;
    modes: LdModeItem[];
  };
  calendarSection: {
    sectionTitle: string;
    simulationLabel: string;
    quarterlyNote: string;
    weeks: WeekClinicItem[];
  };
  matrixSection: {
    sectionTitle: string;
    evidenceRule: string;
    columns: {
      gap: string;
      intervention: string;
      evidence: string;
      readiness: string;
    };
    rows: GapMatrixRow[];
  };
  hrBoundaryFooter: string;
}

export const slideDataId: Slide12Data = {
  eyebrow: "Pengembangan Kapabilitas Berkelanjutan",
  title: "Learning & Development: Training, Coaching, Mentoring, Counselling",
  subtitle:
    "Mengubah pengembangan tim menjadi sistem terjadwal berbasis bukti kinerja — terhubung langsung dengan kesiapan kenaikan grade.",
  cycleStrip: {
    label: "Siklus L&D Berkelanjutan",
    steps: ["Learn", "Practice", "Review", "Improve"]
  },
  modesSection: {
    sectionTitle: "Empat Pilar Intervensi L&D Berurutan",
    modes: [
      {
        id: "training",
        cycleTag: "Learn",
        title: "Training",
        modal: {
          badge: "Pilar 01 • Training (Learn)",
          subtitle: "Pondasi Pengetahuan & Proses",
          title: "Kelas Produk, Teknis, CRM, Margin & SOP",
          metric: "Terjadwal",
          metricLabel: "Junior & Refresh Tim",
          summary:
            "Membekali seluruh sales dengan pemahaman produk, perbedaan new vs second, sistem CRM, tata cara margin, dan alur tender.",
          highlights: [
            "Materi wajib: perangkat new/second, server/networking, solusi IT, tender B2G, CRM, margin, dan proses.",
            "Staf junior memperoleh training intensif terstruktur dan pendampingan buddy system.",
            "Setiap sesi diakhiri uji pemahaman dan praktik agar tidak berhenti sebatas kehadiran."
          ],
          footerLabel: "Bukti Lulus",
          footerValue: "Skor tes tertulis/lisan & kesiapan masuk sesi praktik",
          accent: "slate"
        }
      },
      {
        id: "mentoring",
        cycleTag: "Practice",
        title: "Mentoring",
        modal: {
          badge: "Pilar 02 • Mentoring (Practice)",
          subtitle: "Pembelajaran di Lapangan Nyata",
          title: "Pendampingan Senior & Manager pada Aktivitas Penjualan",
          metric: "On-the-Job",
          metricLabel: "Buddy & Shadowing",
          summary:
            "Senior dan Manager mendampingi kunjungan klien, presentasi solusi, serta penyusunan account planning secara langsung.",
          highlights: [
            "Mengarahkan tenaga senior menjadi mentor teladan dan calon pemimpin tim.",
            "Menghilangkan kesenjangan teori kelas dengan dinamika negosiasi pelanggan sesungguhnya.",
            "Kinerja mentor turut dievaluasi berdasarkan perkembangan nyata kompetensi mentee."
          ],
          footerLabel: "Bukti Kerja",
          footerValue: "Observed behavior pada kunjungan klien & kualitas account plan",
          accent: "slate"
        }
      },
      {
        id: "coaching",
        cycleTag: "Review",
        title: "Coaching",
        modal: {
          badge: "Pilar 03 • Coaching (Review)",
          subtitle: "Evaluasi Kinerja Terarah",
          title: "Sesi Coaching 1-on-1 Berbasis Data Pipeline & Margin",
          metric: "1-on-1",
          metricLabel: "Berbasis Angka",
          summary:
            "Membahas angka aktivitas, konversi funnel, margin, dan piutang secara spesifik untuk mencari perbaikan taktis per individu.",
          highlights: [
            "Fokus pada opportunity yang macet, penurunan win rate, kebocoran margin, atau AR overdue.",
            "Setiap sesi menghasilkan komitmen tindakan konkret dengan tenggat waktu jelas.",
            "Menghubungkan temuan audit/KPI langsung ke rencana perbaikan mingguan."
          ],
          footerLabel: "Bukti Perubahan",
          footerValue: "Perbaikan angka konversi, margin transaksi & disiplin CRM",
          accent: "slate"
        }
      },
      {
        id: "counselling",
        cycleTag: "Improve",
        title: "Counselling",
        modal: {
          badge: "Pilar 04 • Counselling (Improve)",
          subtitle: "Dukungan Motivasi & Perilaku Kerja",
          title: "Percakapan Rahasia dengan Batas Kewenangan HR",
          metric: "Rahasia",
          metricLabel: "Eskalasi Terkontrol",
          summary:
            "Menangani hambatan personal, penurunan motivasi, atau isu perilaku kerja secara tertutup dan profesional.",
          highlights: [
            "Menjadi ruang dialog rahasia saat dukungan training atau coaching teknis belum memulihkan kinerja.",
            "Tetap menghormati batas kewenangan manajerial — isu ketenagakerjaan atau kebijakan dieskalasi ke HR.",
            "Tidak membuka masalah personal individu di forum tim."
          ],
          footerLabel: "Batas Kewenangan",
          footerValue: "Eskalasi resmi ke HR sesuai kebijakan perusahaan",
          accent: "red"
        }
      }
    ]
  },
  calendarSection: {
    sectionTitle: "Contoh Learning Calendar 4 Minggu",
    simulationLabel: "Simulasi Pola Bulanan (Jadwal & Trainer Dikalibrasi Pasca-Baseline)",
    quarterlyNote: "Ditambah Evaluasi Kompetensi Kuartalan (M3, M6, M9, M12)",
    weeks: [
      {
        id: "week-1",
        weekLabel: "Minggu 1",
        title: "Product Clinic",
        modeRef: "Training",
        focusKeywords: "Perbedaan new/second, server, networking, garansi & use case",
        modal: {
          badge: "Minggu 1 • Simulasi Siklus Bulanan",
          subtitle: "Product Clinic",
          title: "Pendalaman Portofolio Produk & Batasan Kondisi",
          summary:
            "Menyamakan pemahaman seluruh sales atas spesifikasi inti, kondisi unit refurbished, dan kesiapan layanan teknis.",
          highlights: [
            "Membahas perangkat end-user, server/networking, dan skenario bundling solusi.",
            "Melibatkan masukan tim teknis/gudang agar sales tidak menjanjikan spek keliru.",
            "Tanggal pelaksanaan dan pemateri ditetapkan setelah jadwal operasional disahkan."
          ],
          footerLabel: "Output",
          footerValue: "Uji pemahaman singkat & pembaruan catatan produk",
          accent: "slate"
        }
      },
      {
        id: "week-2",
        weekLabel: "Minggu 2",
        title: "CRM & Pricing Clinic",
        modeRef: "Training + Review",
        focusKeywords: "Disiplin funnel CRM, hitung margin vs markup & price request",
        modal: {
          badge: "Minggu 2 • Simulasi Siklus Bulanan",
          subtitle: "CRM & Pricing Clinic",
          title: "Ketertiban Data Funnel & Literasi Gross Margin",
          summary:
            "Melatih ketepatan input data prospek di CRM sekaligus pemahaman batas diskon dan kalkulasi margin sehat.",
          highlights: [
            "Latihan membedakan gross margin dan markup serta pengajuan Online Price Request.",
            "Audit kebersihan tahap funnel agar tidak ada deal aktif tertinggal di chat pribadi.",
            "Tanpa menetapkan angka kompensasi/ambang diskon sebelum disetujui Finance."
          ],
          footerLabel: "Output",
          footerValue: "Kelengkapan field CRM & akurasi simulasi hitungan margin",
          accent: "slate"
        }
      },
      {
        id: "week-3",
        weekLabel: "Minggu 3",
        title: "SOP Role-Play",
        modeRef: "Practice",
        focusKeywords: "Simulasi discovery, penjelasan barang second & handling objection",
        modal: {
          badge: "Minggu 3 • Simulasi Siklus Bulanan",
          subtitle: "SOP Role-Play",
          title: "Simulasi Percakapan Pelanggan Sesuai SOP",
          summary:
            "Menguji praktik langsung cara menggali kebutuhan, menjelaskan barang second secara jujur, dan menutup follow-up.",
          highlights: [
            "Skenario dipisahkan menurut kanal (Retail, Distribusi, B2B, B2G).",
            "Senior/Mentor dan Manager memberi umpan balik objektif menggunakan rubrik SOP.",
            "Standar kelulusan rubrik disahkan bersama setelah baseline awal terkumpul."
          ],
          footerLabel: "Output",
          footerValue: "Evaluasi rubrik role-play & catatan perbaikan individu",
          accent: "slate"
        }
      },
      {
        id: "week-4",
        weekLabel: "Minggu 4",
        title: "1-on-1 Coaching & Review",
        modeRef: "Coaching",
        focusKeywords: "Tinjauan angka pipeline, win rate, AR, buddy check & IDP",
        modal: {
          badge: "Minggu 4 • Simulasi Siklus Bulanan",
          subtitle: "1-on-1 Coaching & Evaluasi",
          title: "Coaching Berbasis Angka & Tindak Lanjut IDP",
          summary:
            "Meninjau perkembangan KPI individu, kemajuan buddy system, serta menentukan fokus perbaikan bulan berikutnya.",
          highlights: [
            "Membahas pipeline coverage, kualitas pembayaran/AR, dan kendala akun utama.",
            "Menghubungkan hasil belajar Minggu 1–3 ke perubahan nyata di lapangan.",
            "Menjadi umpan balik menjelang evaluasi kompetensi kuartalan."
          ],
          footerLabel: "Output",
          footerValue: "Pembaruan rencana tindakan (IDP) & kesiapan review kuartalan",
          accent: "slate"
        }
      }
    ]
  },
  matrixSection: {
    sectionTitle: "Mini-Matrix: Gap Kompetensi → Intervensi → Evidence → Grade Readiness",
    evidenceRule: "Pelatihan tidak diukur dari absensi — wajib ada bukti perubahan perilaku & KPI",
    columns: {
      gap: "Gap Kompetensi",
      intervention: "Intervensi L&D",
      evidence: "Bukti (Evidence)",
      readiness: "Kesiapan Grade"
    },
    rows: [
      {
        id: "gap-product",
        gap: "Produk & Kondisi New/Second",
        intervention: "Training (Product Clinic + Buddy)",
        evidence: "Hasil tes produk & role-play kondisi",
        gradeReadiness: "Prasyarat Grade 1–2",
        modal: {
          badge: "Matrix 01 • Gap Pengetahuan Produk",
          subtitle: "Intervensi ke Kesiapan Grade",
          title: "Dari Product Clinic ke Kesiapan Transaksional",
          summary:
            "Menutup celah penguasaan spesifikasi dan kejujuran penjelasan barang second sebelum menangani volume lebih besar.",
          highlights: [
            "Intervensi: Product Clinic terjadwal dan pendampingan buddy system bagi staf junior.",
            "Bukti wajib: lulus uji pengetahuan produk dan simulasi penanganan keberatan.",
            "Menjadi syarat dasar pada Grade 1 (Retail) dan Grade 2 (Distribusi)."
          ],
          footerLabel: "Prinsip",
          footerValue: "Hubungan formal hasil asesmen ke grade menunggu kebijakan HR",
          accent: "slate"
        }
      },
      {
        id: "gap-pipeline",
        gap: "Konversi Pipeline, Margin & AR",
        intervention: "Coaching 1-on-1 Berbasis Angka",
        evidence: "Perbaikan win rate, margin & disiplin CRM",
        gradeReadiness: "Kesiapan Grade 2–3",
        modal: {
          badge: "Matrix 02 • Gap Eksekusi Pipeline",
          subtitle: "Intervensi ke Kesiapan Grade",
          title: "Dari Coaching Angka ke Kualitas Margin & Piutang",
          summary:
            "Memperbaiki cara menindaklanjuti quote, menjaga batas margin, dan memastikan ketertiban piutang mitra/klien.",
          highlights: [
            "Intervensi: sesi coaching 1-on-1 meninjau deal macet, alasan kalah, dan pola diskon.",
            "Bukti wajib: peningkatan nyata kualitas pipeline, kepatuhan CRM, dan AR sehat.",
            "Menjadi indikator kesiapan menuju negosiasi volume dan proyek B2B."
          ],
          footerLabel: "Prinsip",
          footerValue: "Terbukti dari angka hasil kerja, bukan kehadiran sesi",
          accent: "slate"
        }
      },
      {
        id: "gap-solution",
        gap: "Discovery Solusi & Account Plan",
        intervention: "Mentoring Lapangan + SOP Role-Play",
        evidence: "Observed behavior kunjungan & proposal",
        gradeReadiness: "Kesiapan Grade 3–4 / Leader",
        modal: {
          badge: "Matrix 03 • Gap Penjualan Konsultatif",
          subtitle: "Intervensi ke Kesiapan Grade",
          title: "Dari Mentoring Lapangan ke Konsultan Solusi",
          summary:
            "Membentuk kemampuan discovery kebutuhan teknis, kolaborasi engineer, dan pengelolaan akun strategis maupun B2G.",
          highlights: [
            "Intervensi: pendampingan langsung Senior/Manager pada rapat discovery dan presentasi.",
            "Bukti wajib: perilaku teramati (observed behavior), kualitas proposal, dan rekam mentoring.",
            "Menjadi gerbang menuju Grade 3 (B2B), Grade 4 (B2G), atau jalur People Leader."
          ],
          footerLabel: "Prinsip",
          footerValue: "Kenaikan level memerlukan kebutuhan peran & bukti kompetensi",
          accent: "slate"
        }
      },
      {
        id: "gap-behavior",
        gap: "Hambatan Motivasi / Perilaku",
        intervention: "Counselling Rahasia + Eskalasi HR",
        evidence: "Komitmen perilaku & review berkala",
        gradeReadiness: "Pembinaan / Kelayakan Peran",
        modal: {
          badge: "Matrix 04 • Hambatan Non-Teknis",
          subtitle: "Intervensi & Batas HR",
          title: "Penanganan Hambatan Motivasi atau Zona Nyaman",
          summary:
            "Menyelesaikan hambatan perilaku/disiplin kerja secara tertutup dengan eskalasi terukur ke HR bila diperlukan.",
          highlights: [
            "Intervensi: counselling 1-on-1 yang menjaga kerahasiaan personal staf.",
            "Bukti wajib: perubahan kedisiplinan yang dapat diamati dan kepatuhan proses kerja.",
            "Seluruh tindak lanjut formal ketenagakerjaan mengikuti aturan dan otoritas HR."
          ],
          footerLabel: "Data Wajib",
          footerValue: "Kebijakan training, kriteria kelulusan & aturan HR perlu disiapkan",
          accent: "red"
        }
      }
    ]
  },
  hrBoundaryFooter:
    "Prasyarat Implementasi: Peta kompetensi awal, jadwal trainer/principal & mentor, rubrik role-play, serta hubungan formal hasil asesmen terhadap grade/benefit ditetapkan bersama HR dan Direksi."
};

export const slideDataEn: Slide12Data = {
  eyebrow: "Continuous Capability Development",
  title: "Learning & Development: Training, Coaching, Mentoring, Counselling",
  subtitle:
    "Turning sales development into a scheduled, evidence-based system directly linked to competency grade readiness.",
  cycleStrip: {
    label: "Continuous L&D Cycle",
    steps: ["Learn", "Practice", "Review", "Improve"]
  },
  modesSection: {
    sectionTitle: "Four Sequential L&D Intervention Modes",
    modes: [
      {
        id: "training",
        cycleTag: "Learn",
        title: "Training",
        modal: {
          badge: "Mode 01 • Training (Learn)",
          subtitle: "Knowledge & Process Foundation",
          title: "Product, Technical, CRM, Margin & SOP Classes",
          metric: "Scheduled",
          metricLabel: "Junior & Team Refresh",
          summary:
            "Equips every sales rep with product mastery, new-vs-second rules, CRM habits, margin math, and tender workflows.",
          highlights: [
            "Core curriculum: new/second devices, servers/networking, IT solutions, tenders, CRM, margin, and SOPs.",
            "Junior reps receive intensive onboarding training backed by a structured buddy system.",
            "Every session ends with practical checks rather than passive attendance tracking."
          ],
          footerLabel: "Pass Proof",
          footerValue: "Knowledge test results & readiness for live practice sessions",
          accent: "slate"
        }
      },
      {
        id: "mentoring",
        cycleTag: "Practice",
        title: "Mentoring",
        modal: {
          badge: "Mode 02 • Mentoring (Practice)",
          subtitle: "Applied Field Guidance",
          title: "Senior & Manager Accompaniment on Live Sales Calls",
          metric: "On-the-Job",
          metricLabel: "Buddy & Shadowing",
          summary:
            "Seniors and the Manager join client visits, solution pitches, and account planning to coach execution firsthand.",
          highlights: [
            "Channels experienced senior reps into structured mentor and future leader roles.",
            "Bridges classroom concepts with real customer objections and multi-stakeholder dynamics.",
            "Mentors are also evaluated on the measurable progress of their assigned mentees."
          ],
          footerLabel: "Work Proof",
          footerValue: "Observed behavior on client visits & account plan quality",
          accent: "slate"
        }
      },
      {
        id: "coaching",
        cycleTag: "Review",
        title: "Coaching",
        modal: {
          badge: "Mode 03 • Coaching (Review)",
          subtitle: "Targeted Performance Review",
          title: "1-on-1 Coaching Grounded in Pipeline & Margin Figures",
          metric: "1-on-1",
          metricLabel: "Metric-Driven",
          summary:
            "Reviews individual activity, funnel conversion, gross margin, and receivables to unlock specific tactical fixes.",
          highlights: [
            "Pinpoints stalled opportunities, weak win rates, margin leakage, or overdue AR.",
            "Concludes every session with concrete next actions and clear follow-up dates.",
            "Connects diagnostic findings and weekly KPIs straight into skill-building."
          ],
          footerLabel: "Outcome Proof",
          footerValue: "Measurable improvement in conversion, margin & CRM discipline",
          accent: "slate"
        }
      },
      {
        id: "counselling",
        cycleTag: "Improve",
        title: "Counselling",
        modal: {
          badge: "Mode 04 • Counselling (Improve)",
          subtitle: "Motivation & Behavioral Support",
          title: "Confidential Conversations Within HR Authority Boundaries",
          metric: "Private",
          metricLabel: "Controlled Escalation",
          summary:
            "Addresses personal blockers, motivation drops, or behavioral friction privately and professionally.",
          highlights: [
            "Provides a confidential channel when training or numeric coaching alone cannot resolve performance.",
            "Respects managerial scope — formal employment or disciplinary matters escalate to HR.",
            "Protects individual privacy from open team discussions."
          ],
          footerLabel: "Authority",
          footerValue: "Formal escalation aligned with HR policies and limits",
          accent: "red"
        }
      }
    ]
  },
  calendarSection: {
    sectionTitle: "Sample 4-Week Learning Calendar",
    simulationLabel: "Monthly Cadence Sample (Dates & Trainers Calibrated Post-Baseline)",
    quarterlyNote: "Paired with Quarterly Competency Reviews (M3, M6, M9, M12)",
    weeks: [
      {
        id: "week-1",
        weekLabel: "Week 1",
        title: "Product Clinic",
        modeRef: "Training",
        focusKeywords: "New/second distinctions, servers, networking, warranty & use cases",
        modal: {
          badge: "Week 1 • Sample Monthly Cycle",
          subtitle: "Product Clinic",
          title: "Portfolio Mastery & Condition Disclosure Standards",
          summary:
            "Aligns all sales reps on core product specs, refurbished condition grades, and realistic technical limits.",
          highlights: [
            "Covers end-user devices, enterprise servers/networking, and solution bundles.",
            "Incorporates Technical and Warehouse input to prevent over-promising.",
            "Actual session dates and trainers are finalized once operations approve."
          ],
          footerLabel: "Output",
          footerValue: "Short comprehension check & updated product notes",
          accent: "slate"
        }
      },
      {
        id: "week-2",
        weekLabel: "Week 2",
        title: "CRM & Pricing Clinic",
        modeRef: "Training + Review",
        focusKeywords: "CRM funnel hygiene, margin vs markup math & price requests",
        modal: {
          badge: "Week 2 • Sample Monthly Cycle",
          subtitle: "CRM & Pricing Clinic",
          title: "Pipeline Data Hygiene & Gross Margin Literacy",
          summary:
            "Builds accuracy in CRM opportunity logging alongside margin math and tiered price-request workflows.",
          highlights: [
            "Drills the difference between gross margin % and markup % in real quote scenarios.",
            "Audits active deals so prospect context never stays trapped in personal chats.",
            "No discount thresholds or pay terms are set without Finance/Director sign-off."
          ],
          footerLabel: "Output",
          footerValue: "CRM field completeness & accurate margin-calculation drills",
          accent: "slate"
        }
      },
      {
        id: "week-3",
        weekLabel: "Week 3",
        title: "SOP Role-Play",
        modeRef: "Practice",
        focusKeywords: "Discovery drills, second-hand disclosure & objection handling",
        modal: {
          badge: "Week 3 • Sample Monthly Cycle",
          subtitle: "SOP Role-Play",
          title: "Live Customer Simulation Under SOP Rubrics",
          summary:
            "Practices structured discovery, honest second/refurbished explanations, and disciplined follow-up.",
          highlights: [
            "Scenarios tailored by channel (Retail, Distribution, B2B, and B2G).",
            "Mentors and Manager score observed behaviors against objective SOP rubrics.",
            "Passing standards are calibrated after the initial baseline audit."
          ],
          footerLabel: "Output",
          footerValue: "Role-play rubric evaluation & targeted coaching notes",
          accent: "slate"
        }
      },
      {
        id: "week-4",
        weekLabel: "Week 4",
        title: "1-on-1 Coaching & Review",
        modeRef: "Coaching",
        focusKeywords: "Pipeline, win rate, AR quality, buddy check & IDP update",
        modal: {
          badge: "Week 4 • Sample Monthly Cycle",
          subtitle: "1-on-1 Coaching & Review",
          title: "Metric-Based Coaching & IDP Progress Check",
          summary:
            "Reviews individual KPI trends, buddy-system progress, and next-month development priorities.",
          highlights: [
            "Examines pipeline coverage, payment/AR discipline, and stalled key deals.",
            "Verifies whether Week 1–3 training translated into observable field execution.",
            "Feeds documented evidence into quarterly competency and grade reviews."
          ],
          footerLabel: "Output",
          footerValue: "Updated Individual Development Plan (IDP) & quarterly readiness",
          accent: "slate"
        }
      }
    ]
  },
  matrixSection: {
    sectionTitle: "Mini-Matrix: Competency Gap → Intervention → Evidence → Grade Readiness",
    evidenceRule: "Never measured by attendance alone — requires behavior & KPI proof",
    columns: {
      gap: "Competency Gap",
      intervention: "L&D Intervention",
      evidence: "Required Evidence",
      readiness: "Grade Readiness"
    },
    rows: [
      {
        id: "gap-product",
        gap: "Product & New/Second Fluency",
        intervention: "Training (Product Clinic + Buddy)",
        evidence: "Product test & condition role-play",
        gradeReadiness: "Grade 1–2 Baseline",
        modal: {
          badge: "Matrix 01 • Product Knowledge Gap",
          subtitle: "Intervention to Grade Readiness",
          title: "From Product Clinic to Transactional Readiness",
          summary:
            "Closes product-spec and refurbished-disclosure gaps before expanding volume or account responsibility.",
          highlights: [
            "Intervention: scheduled Product Clinics paired with buddy support for junior reps.",
            "Proof required: passing product quizzes and live objection role-plays.",
            "Anchors core competence at Grade 1 (Retail) and Grade 2 (Distribution)."
          ],
          footerLabel: "Principle",
          footerValue: "Formal link between assessment scores and pay awaits HR policy",
          accent: "slate"
        }
      },
      {
        id: "gap-pipeline",
        gap: "Pipeline Conversion, Margin & AR",
        intervention: "Numbers-Led 1-on-1 Coaching",
        evidence: "Win rate, margin & CRM uplift",
        gradeReadiness: "Grade 2–3 Readiness",
        modal: {
          badge: "Matrix 02 • Pipeline Execution Gap",
          subtitle: "Intervention to Grade Readiness",
          title: "From Metric Coaching to Healthy Margin & AR",
          summary:
            "Sharpens quote follow-through, floor-margin defense, and partner credit discipline.",
          highlights: [
            "Intervention: 1-on-1 coaching dissecting stalled quotes, loss reasons, and discounts.",
            "Proof required: sustained gains in pipeline quality, CRM logs, and clean AR.",
            "Demonstrates readiness for volume accounts and B2B deal management."
          ],
          footerLabel: "Principle",
          footerValue: "Measured by commercial outcomes rather than class attendance",
          accent: "slate"
        }
      },
      {
        id: "gap-solution",
        gap: "Solution Discovery & Account Plan",
        intervention: "Field Mentoring + SOP Role-Play",
        evidence: "Observed visits & proposal quality",
        gradeReadiness: "Grade 3–4 / Leader Gate",
        modal: {
          badge: "Matrix 03 • Consultative Selling Gap",
          subtitle: "Intervention to Grade Readiness",
          title: "From Field Mentoring to IT Solution Consultant",
          summary:
            "Develops technical discovery rigor, engineering collaboration, and strategic B2B/B2G account ownership.",
          highlights: [
            "Intervention: joint Senior/Manager field visits, discovery calls, and pitch reviews.",
            "Proof required: observed client behaviors, sound proposals, and mentoring logs.",
            "Gates progression into Grade 3 (B2B), Grade 4 (B2G), or People Leader tracks."
          ],
          footerLabel: "Principle",
          footerValue: "Advancement requires both proven competence and role need",
          accent: "slate"
        }
      },
      {
        id: "gap-behavior",
        gap: "Motivation / Behavioral Blockers",
        intervention: "Confidential Counselling + HR",
        evidence: "Behavior commitment & periodic check",
        gradeReadiness: "Coaching / Role Fit Review",
        modal: {
          badge: "Matrix 04 • Non-Technical Blockers",
          subtitle: "Intervention & HR Boundaries",
          title: "Addressing Motivation or Comfort-Zone Friction",
          summary:
            "Resolves work-habit or motivation challenges privately, escalating to HR whenever formal policy applies.",
          highlights: [
            "Intervention: confidential 1-on-1 counselling focused on actionable support.",
            "Proof required: observable improvement in SOP discipline and responsiveness.",
            "All formal employment actions remain under HR authority and policy."
          ],
          footerLabel: "Required Data",
          footerValue: "Training policy, pass rubrics & HR grade links need alignment",
          accent: "red"
        }
      }
    ]
  },
  hrBoundaryFooter:
    "Implementation Prerequisites: Initial competency map, trainer/principal & mentor schedule, role-play rubrics, and formal assessment-to-grade/benefit rules aligned with HR and Directors."
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide12Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide12Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 12,
  folder: "12",
  sectionId: 6,
  navTitle: {
    in: "Learning & Development",
    en: "Learning & Development"
  },
  headerTitle: {
    in: "Learning & Development - Training, Coaching, Mentoring, Counselling",
    en: "Learning & Development - Training, Coaching, Mentoring, Counselling"
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
