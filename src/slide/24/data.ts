import { useLanguage } from '@/contexts/LanguageContext';
import type { RoadmapPhaseId, RoadmapBarKind } from './utils';

export interface Slide24ModalPayload {
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

export interface RoadmapGanttRow {
  id: string;
  phaseId: RoadmapPhaseId;
  activity: string;
  startMonth: number;
  endMonth: number;
  kind: RoadmapBarKind;
  milestoneMonths?: number[];
  modal: Slide24ModalPayload;
}

export interface RoadmapPhaseSummary {
  id: RoadmapPhaseId;
  phase: string;
  window: string;
  outputs: string;
  modal: Slide24ModalPayload;
}

export interface RoadmapMilestoneCard {
  id: string;
  monthCode: string;
  title: string;
  proposedTargetCue: string;
  isProposedRevenueMilestone?: boolean;
  modal: Slide24ModalPayload;
}

export interface Slide24Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  proposalCaveat: string;
  months: string[];
  ganttSection: {
    title: string;
    legendCore: string;
    legendOngoing: string;
    legendMilestone: string;
    rows: RoadmapGanttRow[];
  };
  milestonesSection: {
    title: string;
    cards: RoadmapMilestoneCard[];
  };
  phaseTableSection: {
    title: string;
    columns: {
      phase: string;
      window: string;
      outputs: string;
    };
    rows: RoadmapPhaseSummary[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide24Data = {
  eyebrow: 'Implementasi Bertahap Berbasis Fondasi & Bukti',
  title: 'Roadmap 12 Bulan: Fondasi, Sistem, Akselerasi, Skala',
  subtitle:
    'Menyusun urutan implementasi dari orientasi dan diagnosa baseline menuju sistem SOP/CRM, akselerasi solusi B2B/B2G, hingga stabilisasi skala tahun kedua.',
  proposalCaveat:
    'Target Usulan M6/M9/M12 & Jadwal — Dapat Disesuaikan dengan Baseline, Kondisi Stok, Resource & Keputusan Direksi',
  months: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  ganttSection: {
    title: 'Peta Kerja 12 Bulan',
    legendCore: 'Aktivitas Inti',
    legendOngoing: 'Workstream Berjalan',
    legendMilestone: 'Titik Milestone',
    rows: [
      {
        id: 'r1',
        phaseId: 'orientasi',
        activity: '01. Orientasi Produk, Gudang & Alur Bisnis',
        startMonth: 1,
        endMonth: 1,
        kind: 'core',
        milestoneMonths: [1],
        modal: {
          badge: 'M1 • Orientasi',
          subtitle: 'Bulan 1 • Pemahaman Lapangan',
          title: 'Orientasi Produk di Gudang, Alur Bisnis & Temuan Awal',
          metric: 'M1 Gate',
          metricLabel: 'Laporan Awal',
          summary:
            'Mempelajari kualitas unit baru/second, alur stok gudang, bonding lintas fungsi, dan data penjualan awal.',
          highlights: [
            'Deliverable: Product/process map, temuan awal, daftar data gaps & quick wins.',
            'Owner koordinasi: Kandidat Manager + Gudang, Purchasing & Stakeholder internal.',
            'Risiko yang dicegah: ekspansi membabi-buta sebelum tahu kapasitas riil.'
          ],
          footerLabel: 'Keputusan Dibutuhkan',
          footerValue: 'Mandat Direksi, akses data & ruang quick wins',
          accent: 'slate'
        }
      },
      {
        id: 'r2',
        phaseId: 'diagnosa-fondasi',
        activity: '02. Onboarding & Asesmen 15 Sales',
        startMonth: 2,
        endMonth: 3,
        kind: 'core',
        milestoneMonths: [3],
        modal: {
          badge: 'M2–M3 • Diagnosa & Fondasi',
          subtitle: 'Pemetaan Kapabilitas Tim',
          title: 'Onboarding & Asesmen Kompetensi 15 Sales Eksisting',
          metric: 'Skill Matrix',
          metricLabel: 'Deliverable',
          summary:
            'Memetakan kekuatan tiap anggota per segmen untuk penempatan peran, IDP, dan dasar kalibrasi grade.',
          highlights: [
            'Catatan: jumlah 15 orang menunggu konfirmasi apakah sudah termasuk 2 Supervisor & di luar Manager.',
            'Output langsung menjadi dasar kalibrasi pelatihan serta rencana rekrutmen terarah.'
          ],
          footerLabel: 'Kolaborasi',
          footerValue: 'Sales Manager & HRD',
          accent: 'slate'
        }
      },
      {
        id: 'r3',
        phaseId: 'diagnosa-fondasi',
        activity: '03. Audit HPP, Harga, Diskon & Struktur Tim/KPI',
        startMonth: 2,
        endMonth: 3,
        kind: 'core',
        milestoneMonths: [3],
        modal: {
          badge: 'M2–M3 • Diagnosa & Fondasi',
          subtitle: 'Baseline Finansial & Organisasi',
          title: 'Audit HPP/Harga, Usulan Struktur Tim, Target & KPI',
          metric: 'M3 Review',
          metricLabel: 'Gate Direksi',
          summary:
            'Menyamakan definisi margin, memisahkan peran Sales vs Marketing, dan menetapkan target berbeda per portofolio.',
          highlights: [
            'Deliverable: Org proposal, role target/KPI baseline & pricing audit.',
            'Seluruh kebijakan HPP, margin floor & grade tetap menunggu persetujuan Finance/HR/Direksi.'
          ],
          footerLabel: 'Dependensi',
          footerValue: 'Data HPP aktual, histori penjualan 12–24 bln & AR aging',
          accent: 'red'
        }
      },
      {
        id: 'r4',
        phaseId: 'diagnosa-fondasi',
        activity: '04. Dashboard Harian/Mingguan & CRM Workflow',
        startMonth: 2,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M2–M12 • Workstream Berkelanjutan',
          subtitle: 'Visibilitas Pipeline & Disiplin Data',
          title: 'Reporting Harian/Mingguan/Bulanan & Disiplin CRM',
          metric: 'Ongoing >M12',
          metricLabel: 'Sifat Kerja',
          summary:
            'Menjadikan CRM dan dashboard sebagai sumber kebenaran tunggal mulai bulan ke-2 dan berlanjut pasca tahun pertama.',
          highlights: [
            'Diawali fit-gap aplikasi perusahaan saat ini sebelum membangun atau membeli sistem baru.',
            'Menghilangkan penyimpanan lead dan riwayat pelanggan di chat pribadi.'
          ],
          footerLabel: 'KPI Kontrol',
          footerValue: 'CRM completeness, pipeline hygiene & ketepatan laporan',
          accent: 'slate'
        }
      },
      {
        id: 'r5',
        phaseId: 'sistem-sop',
        activity: '05. Penyusunan SOP Umum & Varian per Divisi',
        startMonth: 3,
        endMonth: 5,
        kind: 'core',
        milestoneMonths: [5],
        modal: {
          badge: 'M3–M5 • Sistem & SOP',
          subtitle: 'Standar Kerja Lintas Segmen',
          title: 'SOP Umum, Varian 5 Divisi & Matrix Approval Harga',
          metric: 'M5 Disahkan',
          metricLabel: 'Target Output',
          summary:
            'Menetapkan 13 langkah kerja standar dan titik eskalasi merah agar tim Retail, Distribution, B2B & B2G bekerja seragam.',
          highlights: [
            'Mencakup SOP assignment lead adil, validasi stok/teknis, dan handover checklist.',
            'Diuji dengan role-play dan sampling transaksi nyata sebelum dikunci permanen.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Buku SOP, Approval Matrix & Price Request Workflow',
          accent: 'red'
        }
      },
      {
        id: 'r6',
        phaseId: 'sistem-sop',
        activity: '06. Price Approval Governance & Margin Discipline',
        startMonth: 3,
        endMonth: 5,
        kind: 'core',
        milestoneMonths: [5],
        modal: {
          badge: 'M3–M5 • Sistem & SOP',
          subtitle: 'Kontrol Diskon & Profit',
          title: 'Implementasi Online Price Request & Batas Kewenangan',
          metric: 'Role-Based',
          metricLabel: 'Akses HPP',
          summary:
            'Menghentikan diskon liar dengan alur pengajuan online terstruktur dan akses HPP berbasis peran.',
          highlights: [
            'Melatih tim membedakan Gross Margin % vs Markup % secara konsisten.',
            'Semua pengecualian harga tercatat di approval log untuk audit Finance/Owner.'
          ],
          footerLabel: 'Kolaborasi',
          footerValue: 'Sales Manager, Finance & Direksi/Owner',
          accent: 'red'
        }
      },
      {
        id: 'r7',
        phaseId: 'sistem-sop',
        activity: '07. Training Calendar, L&D, Coaching & Role-Play',
        startMonth: 2,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M2–M12 • Workstream Berkelanjutan',
          subtitle: 'Peningkatan Kapabilitas Rutin',
          title: 'Learning & Development, Coaching, Mentoring & Role-Play SOP',
          metric: 'Ongoing >M12',
          metricLabel: 'Sifat Kerja',
          summary:
            'Membangun kemampuan consultative selling, pengetahuan produk, dan praktik SOP secara terjadwal.',
          highlights: [
            'Mencakup latihan product knowledge, skenario nego B2B, serta penanganan keluhan retail.',
            'Progres dicatat ke Individual Development Plan (IDP) tiap kuartal.'
          ],
          footerLabel: 'KPI Kontrol',
          footerValue: 'Skor role-play & evaluasi kompetensi M3/M6/M9/M12',
          accent: 'slate'
        }
      },
      {
        id: 'r8',
        phaseId: 'akselerasi',
        activity: '08. Pengembangan Paket Solusi IT (Product-to-Solution)',
        startMonth: 5,
        endMonth: 8,
        kind: 'core',
        milestoneMonths: [6],
        modal: {
          badge: 'M5–M8 • Akselerasi',
          subtitle: 'Nilai Tambah Komersial',
          title: 'Merakit Bundling & Paket Solusi (Hardware + Setup + Maintenance)',
          metric: 'Playbook Solusi',
          metricLabel: 'Deliverable',
          summary:
            'Menggeser percakapan harga unit tunggal menjadi paket solusi terintegrasi bersama Tim Teknis.',
          highlights: [
            'Memanfaatkan kekuatan produk Laptop/PC, Server/Storage, Networking & Jasa Servis.',
            'Seluruh paket melewati validasi kompatibilitas dan batasan SLA Tim Teknis.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Solution Playbook & Paket Layanan B2B/UMKM',
          accent: 'slate'
        }
      },
      {
        id: 'r9',
        phaseId: 'akselerasi',
        activity: '09. Pengembangan Akun B2B, SI & End-User',
        startMonth: 4,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [6, 9, 12],
        modal: {
          badge: 'M4–M12 • Workstream Berkelanjutan',
          subtitle: 'Ekspansi Segmen Korporat',
          title: 'Account Planning, Prospecting B2B & Kemitraan System Integrator',
          metric: 'Ongoing >M12',
          metricLabel: 'Sifat Kerja',
          summary:
            'Memperluas kontribusi segmen B2B dari basis 20% melalui eksekusi account plan dan solusi terstruktur.',
          highlights: [
            'Memakai skema 1 Primary Account Owner per akun prioritas.',
            'Menggerakkan foot-in-the-door offer sebelum proyek infrastruktur bernilai besar.'
          ],
          footerLabel: 'KPI Kontrol',
          footerValue: 'Qualified B2B pipeline, win rate & repeat accounts',
          accent: 'slate'
        }
      },
      {
        id: 'r10',
        phaseId: 'akselerasi',
        activity: '10. Program Akselerasi Stok Lama & Campaign',
        startMonth: 5,
        endMonth: 7,
        kind: 'core',
        modal: {
          badge: 'M5–M7 • Akselerasi',
          subtitle: 'Kesehatan Modal Kerja & Stok',
          title: 'Program Stok Aging (~70% Second Mix) & Insentif Terkendali',
          metric: 'Cash Release',
          metricLabel: 'Tujuan',
          summary:
            'Mengubah stok berumur lama di gudang menjadi kas lewat bundling terarah, prioritas SKU & kampanye.',
          highlights: [
            'Insentif/diskon khusus stok aging wajib memakai batas nilai & persetujuan Finance/Owner.',
            'Transparan dalam menjelaskan kondisi unit second beserta garansinya.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Daftar SKU aging prioritas & paket kampanye',
          accent: 'slate'
        }
      },
      {
        id: 'r11',
        phaseId: 'akselerasi',
        activity: '11. Kesiapan & Uji B2G Subcon / E-Purchasing',
        startMonth: 6,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [6, 9, 12],
        modal: {
          badge: 'M6–M12 • Workstream Berkelanjutan',
          subtitle: 'Ekspansi Sektor Publik Terukur',
          title: 'Uji Masuk B2G via Mitra Maincon/Subcon & Kurasi Katalog',
          metric: 'Gate Bid/No-Bid',
          metricLabel: 'Kontrol Risiko',
          summary:
            'Memasuki peluang B2G secara disiplin sesuai regulasi [R1–R4] tanpa mengorbankan arus kas atau kepatuhan.',
          highlights: [
            'Memvalidasi syarat produk baru vs larangan barang refurbished per paket pengadaan.',
            'Setiap kontrak subcon & pembiayaan termin wajib persetujuan Finance & Direksi.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Legal/katalog checklist & pilot kemitraan B2G',
          accent: 'red'
        }
      },
      {
        id: 'r12',
        phaseId: 'stabilisasi-skala',
        activity: '12. Evaluasi Kuartalan Kompetensi & Grade',
        startMonth: 3,
        endMonth: 12,
        kind: 'milestone',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M3, M6, M9, M12 • Milestone Gate',
          subtitle: 'Kalibrasi Kinerja & Perilaku',
          title: 'Evaluasi Kompetensi Kuartalan & Keputusan Berbasis Bukti',
          metric: '4 Gate / Thn',
          metricLabel: 'Ritme',
          summary:
            'Meninjau pencapaian revenue, margin, piutang, disiplin CRM, dan kompetensi kerja setiap kuartal.',
          highlights: [
            'Menjadi dasar objektif untuk IDP, coaching lanjutan, promosi grade, atau pembinaan.',
            'Mencegah penilaian subjektif berbasis kedekatan personal.'
          ],
          footerLabel: 'Kolaborasi',
          footerValue: 'Sales Manager, HRD & Pimpinan',
          accent: 'red'
        }
      },
      {
        id: 'r13',
        phaseId: 'stabilisasi-skala',
        activity: '13. Kenaikan Grade, Calon Team Leader & Territory Review',
        startMonth: 9,
        endMonth: 12,
        kind: 'core',
        milestoneMonths: [9, 12],
        modal: {
          badge: 'M9–M12 • Stabilisasi & Skala',
          subtitle: 'Kaderisasi Kepemimpinan Internal',
          title: 'Promosi Grade, Seleksi Calon Team Leader & Review Territory',
          metric: 'Leader Bench',
          metricLabel: 'Output',
          summary:
            'Menyiapkan 2 Team Leader / Supervisor internal yang siap memimpin sub-tim Retail/Distribusi dan B2B/B2G.',
          highlights: [
            'Kandidat leader dipilih dari konsistensi hasil, integritas margin & kemampuan membimbing tim.',
            'Meninjau ulang beban wilayah dan potensi cabang/toko secara selektif berbasis data.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Rekomendasi kenaikan grade & struktur Tahun Ke-2',
          accent: 'slate'
        }
      },
      {
        id: 'r14',
        phaseId: 'stabilisasi-skala',
        activity: '14. Konsistensi Margin & Rencana Tahun Ke-2',
        startMonth: 9,
        endMonth: 12,
        kind: 'core',
        milestoneMonths: [12],
        modal: {
          badge: 'M9–M12 • Stabilisasi & Skala',
          subtitle: 'Penutupan Tahun Pertama & Skala Lanjut',
          title: 'Evaluasi Tahun Pertama, Konsistensi Revenue/Margin & Rencana Y2',
          metric: 'Year-2 Plan',
          metricLabel: 'Milestone M12',
          summary:
            'Memastikan sistem komersial berjalan mandiri dan menyusun target skala tahun kedua bersama Direksi.',
          highlights: [
            'Mengukur konsistensi pencapaian ke arah Rp4–5 M/bln dengan kualitas piutang & stok sehat.',
            'Menjadi pijakan kesiapan jangka panjang perusahaan tanpa mencampurkan agenda IPO/Tier III ke KPI Y1.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Annual Performance Review & Year-2 Strategic Plan',
          accent: 'red'
        }
      }
    ]
  },
  milestonesSection: {
    title: '6 Milestone Utama',
    cards: [
      {
        id: 'ms-1',
        monthCode: 'M1',
        title: 'Audit Awal & Peta Proses',
        proposedTargetCue: 'Quick wins & data gaps',
        modal: {
          badge: 'Milestone M1',
          subtitle: 'Akhir Fase Orientasi',
          title: 'Laporan Temuan Awal, Data Gaps & 3–5 Quick Wins',
          summary:
            'Memberikan gambaran kondisi lapangan yang jujur mengenai produk, gudang, alur tim & kendala lintas divisi.',
          highlights: [
            'Menyampaikan daftar data internal yang dibutuhkan untuk kalibrasi target final.',
            'Mengusulkan quick wins yang disetujui pimpinan tanpa merombak sistem secara serampangan.'
          ],
          footerLabel: 'Persetujuan',
          footerValue: 'Sign-off Direksi atas hasil diagnostic awal',
          accent: 'slate'
        }
      },
      {
        id: 'ms-3',
        monthCode: 'M3',
        title: 'Fondasi & Baseline',
        proposedTargetCue: 'Skill map · KPI · Audit HPP',
        modal: {
          badge: 'Milestone M3',
          subtitle: 'Akhir Fase Diagnosa & Fondasi',
          title: 'Skill Matrix 15 Sales, Usulan Struktur & Audit HPP/Harga',
          summary:
            'Menutup fase 90 hari awal dengan kejelasan peran tim, metrik KPI, dan prototipe laporan dasar.',
          highlights: [
            'Menyelaraskan target aktivitas per segmen bersama Finance dan HRD.',
            'Memulai evaluasi kompetensi kuartalan pertama.'
          ],
          footerLabel: 'Persetujuan',
          footerValue: 'Approval Struktur, KPI & Baseline Margin',
          accent: 'slate'
        }
      },
      {
        id: 'ms-5',
        monthCode: 'M5',
        title: 'Sistem & SOP Aktif',
        proposedTargetCue: 'SOP · CRM · Price Matrix',
        modal: {
          badge: 'Milestone M5',
          subtitle: 'Akhir Fase Sistem & SOP',
          title: 'SOP Lintas Divisi, Role-Play, Price Request & CRM Berjalan',
          summary:
            'Memastikan seluruh tim bekerja dengan standar yang sama sebelum melakukan ekspansi B2B/B2G agresif.',
          highlights: [
            'SOP diuji lewat role-play dan sampling transaksi nyata.',
            'Matriks approval harga mulai mengontrol seluruh pengecualian diskon.'
          ],
          footerLabel: 'Persetujuan',
          footerValue: 'SOP & Approval Matrix Resmi',
          accent: 'slate'
        }
      },
      {
        id: 'ms-6',
        monthCode: 'M6',
        title: 'Akselerasi Awal',
        proposedTargetCue: 'Rp3–3,5 M | B2B+B2G ~25%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M6 • Usulan',
          subtitle: 'Tengah Tahun (Target Usulan PDF)',
          title: 'Paket Solusi, Stok Program & Uji Subcon B2G',
          metric: 'Rp3–3,5 M / ~25%',
          metricLabel: 'Target Usulan (Non-Garansi)',
          summary:
            'Arah kenaikan bertahap ke kisaran Rp3–3,5 miliar/bln dengan B2B+B2G sekitar 25% setelah fondasi berjalan.',
          highlights: [
            'Angka merupakan usulan dalam rencana kerja — dapat disesuaikan dengan pasar, stok & keputusan Direksi.',
            'Didorong oleh peluncuran paket solusi IT, program stok lama, dan uji kemitraan B2G.'
          ],
          footerLabel: 'Sifat Angka',
          footerValue: 'Usulan Kalibrasi — Bukan Komitmen Sepihak',
          accent: 'red'
        }
      },
      {
        id: 'ms-9',
        monthCode: 'M9',
        title: 'Skala Lanjutan',
        proposedTargetCue: 'Rp3,5–4 M | B2B+B2G ~30%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M9 • Usulan',
          subtitle: 'Kuartal 3 (Target Usulan PDF)',
          title: 'Ekspansi Pipeline B2B/SI & Kaderisasi Calon Leader',
          metric: 'Rp3,5–4 M / ~30%',
          metricLabel: 'Target Usulan (Non-Garansi)',
          summary:
            'Arah transisi ke Rp3,5–4 miliar/bln dan porsi B2B+B2G sekitar 30% sembari menguji kesiapan calon Team Leader.',
          highlights: [
            'Angka tetap bersifat target usulan yang ditinjau bersama baseline stok, kredit, dan kapasitas teknis.',
            'Disertai review territory dan kualitas piutang.'
          ],
          footerLabel: 'Sifat Angka',
          footerValue: 'Usulan Kalibrasi — Menunggu Baseline',
          accent: 'red'
        }
      },
      {
        id: 'ms-12',
        monthCode: 'M12',
        title: 'Target Penuh & Y2',
        proposedTargetCue: 'Rp4–5 M | Menuju 40%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M12 • Usulan',
          subtitle: 'Akhir Tahun ke-1 (Target Perusahaan)',
          title: 'Konsistensi Sistem Rp4–5 M, Menuju 40% B2B+B2G & Rencana Y2',
          metric: 'Rp4–5 M / →40%',
          metricLabel: 'Target Perusahaan / Usulan',
          summary:
            'Mengunci sistem komersial yang scalable menuju rentang target perusahaan Rp4–5 miliar/bln serta rencana Tahun Ke-2.',
          highlights: [
            'Seluruh target milestone M6/M9/M12 diselaraskan dengan pasar, ketersediaan stok, dan persetujuan Direksi.',
            'Fokus penuh pada kualitas margin, perputaran stok, piutang sehat & retensi pelanggan.'
          ],
          footerLabel: 'Horizon Lanjut',
          footerValue: 'Review Tahunan & Rencana Tahun Ke-2',
          accent: 'red'
        }
      }
    ]
  },
  phaseTableSection: {
    title: 'Ringkasan 5 Fase & Output Terukur',
    columns: {
      phase: 'Fase',
      window: 'Waktu',
      outputs: 'Output yang Harus Terlihat'
    },
    rows: [
      {
        id: 'orientasi',
        phase: 'Orientasi',
        window: 'M1',
        outputs: 'Product/process map; temuan awal; daftar data gaps dan quick wins',
        modal: {
          badge: 'Fase 1 • M1',
          subtitle: 'Orientasi',
          title: 'Orientasi Lapangan & Pemetaan Data Awal',
          summary: 'Memahami alur kerja gudang, kualitas unit, dan kesenjangan data sebelum menyusun perubahan.',
          highlights: ['Deliverable: Product/process map, daftar data gaps & quick wins disepakati.'],
          footerLabel: 'Owner',
          footerValue: 'Kandidat Manager + Gudang & Lintas Fungsi',
          accent: 'slate'
        }
      },
      {
        id: 'diagnosa-fondasi',
        phase: 'Diagnosa & Fondasi',
        window: 'M2–M3',
        outputs: 'Skill map; org proposal; target/KPI; pricing & data audit; report dasar',
        modal: {
          badge: 'Fase 2 • M2–M3',
          subtitle: 'Diagnosa & Fondasi',
          title: 'Asesmen Tim, Audit HPP & Desain KPI Dasar',
          summary: 'Menetapkan baseline kemampuan tim, struktur organisasi, serta laporan pemantauan awal.',
          highlights: ['Deliverable: Skill matrix, org proposal, KPI segmen & pricing audit.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + HRD + Finance',
          accent: 'slate'
        }
      },
      {
        id: 'sistem-sop',
        phase: 'Sistem & SOP',
        window: 'M3–M5',
        outputs: 'SOP, role-play, CRM workflow, approval matrix, training calendar',
        modal: {
          badge: 'Fase 3 • M3–M5',
          subtitle: 'Sistem & SOP',
          title: 'Standardisasi Proses, Approval & Disiplin CRM',
          summary: 'Mengunci aturan kerja harian lintas divisi dan melatih konsistensinya lewat role-play.',
          highlights: ['Deliverable: SOP umum/divisi, CRM workflow, approval matrix & kalender L&D.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + Technical + Warehouse + Finance',
          accent: 'slate'
        }
      },
      {
        id: 'akselerasi',
        phase: 'Akselerasi',
        window: 'M5–M8',
        outputs: 'Solution package, account plan, stock program, B2B pipeline, B2G partner test',
        modal: {
          badge: 'Fase 4 • M5–M8',
          subtitle: 'Akselerasi',
          title: 'Peluncuran Solusi, Program Stok Lama & Uji B2G',
          summary: 'Mengakselerasi pipeline bernilai lebih tinggi di atas fondasi SOP dan margin yang sudah terjaga.',
          highlights: ['Deliverable: Solution playbook, B2B account plan, aging stock program & test subcon B2G.'],
          footerLabel: 'Owner',
          footerValue: 'Tim Sales B2B/B2G + Technical + Creative + Purchasing',
          accent: 'red'
        }
      },
      {
        id: 'stabilisasi-skala',
        phase: 'Stabilisasi & Skala',
        window: 'M9–M12',
        outputs: 'Grade review, team leader candidates, forecast, margin discipline, year-2 plan',
        modal: {
          badge: 'Fase 5 • M9–M12',
          subtitle: 'Stabilisasi & Skala',
          title: 'Kematangan Sistem, Kader Leader & Rencana Tahun ke-2',
          summary: 'Memperkuat disiplin forecast dan menyiapkan regenerasi pemimpin internal menuju tahun kedua.',
          highlights: ['Deliverable: Grade review berbasis bukti, kandidat Team Leader & Year-2 plan.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + HRD + Direksi',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Data Diperlukan & Prasyarat: Baseline data penjualan/margin/stok aktual, ketersediaan resource lintas divisi, serta persetujuan Direksi atas urutan milestone.'
};

export const slideDataEn: Slide24Data = {
  eyebrow: 'Phased Implementation Built on Verified Foundations',
  title: '12-Month Roadmap: Foundation, Systems, Acceleration, Scale',
  subtitle:
    'Sequencing implementation cleanly from field orientation and baseline diagnosis into SOP/CRM discipline, B2B/B2G acceleration, and Year-2 scale readiness.',
  proposalCaveat:
    'Proposed M6/M9/M12 Targets & Timing — Adjustable to Verified Baselines, Stock Readiness, Resources & Director Approval',
  months: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  ganttSection: {
    title: '12-Month Execution Map',
    legendCore: 'Core Activity',
    legendOngoing: 'Continuous Workstream',
    legendMilestone: 'Milestone Gate',
    rows: [
      {
        id: 'r1',
        phaseId: 'orientasi',
        activity: '01. Product, Warehouse & Business Flow Orientation',
        startMonth: 1,
        endMonth: 1,
        kind: 'core',
        milestoneMonths: [1],
        modal: {
          badge: 'M1 • Orientation',
          subtitle: 'Month 1 • Ground-Level Immersion',
          title: 'Warehouse Product Immersion, Business Flow & Initial Findings',
          metric: 'M1 Gate',
          metricLabel: 'Initial Report',
          summary:
            'Assesses physical new/used stock quality, warehouse workflows, cross-team alignment, and baseline data.',
          highlights: [
            'Deliverables: Product/process map, initial findings, data-gap register & quick wins.',
            'Coordination: Candidate Manager with Warehouse, Purchasing & internal stakeholders.',
            'Mitigates the risk of premature expansion prior to capacity verification.'
          ],
          footerLabel: 'Decision Needed',
          footerValue: 'Director mandate, data access & quick-win clearance',
          accent: 'slate'
        }
      },
      {
        id: 'r2',
        phaseId: 'diagnosa-fondasi',
        activity: '02. Onboarding & Assessment of 15 Sales Staff',
        startMonth: 2,
        endMonth: 3,
        kind: 'core',
        milestoneMonths: [3],
        modal: {
          badge: 'M2–M3 • Diagnosis & Foundation',
          subtitle: 'Team Capability Mapping',
          title: 'Onboarding & Competency Assessment of 15 Current Sales Reps',
          metric: 'Skill Matrix',
          metricLabel: 'Deliverable',
          summary:
            'Maps individual strengths across portfolios to guide role fit, IDPs, and objective grade calibration.',
          highlights: [
            'Caveat: Headcount of 15 awaits confirmation on whether 2 Supervisors are included and Manager excluded.',
            'Feeds directly into training tracks and selective hiring priorities.'
          ],
          footerLabel: 'Partner Function',
          footerValue: 'Sales Manager & HRD',
          accent: 'slate'
        }
      },
      {
        id: 'r3',
        phaseId: 'diagnosa-fondasi',
        activity: '03. COGS/Pricing Audit & Team Structure / KPI Design',
        startMonth: 2,
        endMonth: 3,
        kind: 'core',
        milestoneMonths: [3],
        modal: {
          badge: 'M2–M3 • Diagnosis & Foundation',
          subtitle: 'Financial & Org Baseline',
          title: 'HPP/Pricing Audit, Proposed Structure, Targets & KPIs',
          metric: 'M3 Review',
          metricLabel: 'Director Gate',
          summary:
            'Standardizes margin definitions, separates Sales from Marketing execution, and sets portfolio-specific KPIs.',
          highlights: [
            'Deliverables: Org proposal, role KPIs/targets baseline & pricing/discount audit.',
            'All COGS, floor margin, and grade rules remain subject to Finance, HR & Director approval.'
          ],
          footerLabel: 'Dependencies',
          footerValue: 'Actual HPP data, 12–24m sales history & AR aging',
          accent: 'red'
        }
      },
      {
        id: 'r4',
        phaseId: 'diagnosa-fondasi',
        activity: '04. Daily/Weekly Reporting & CRM Discipline',
        startMonth: 2,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M2–M12 • Continuous Workstream',
          subtitle: 'Pipeline Visibility & Data Hygiene',
          title: 'Daily/Weekly/Monthly Reporting & Internal CRM Workflow',
          metric: 'Ongoing >M12',
          metricLabel: 'Cadence',
          summary:
            'Establishes CRM and dashboards as the single source of truth from Month 2 onward beyond Year 1.',
          highlights: [
            'Preceded by fit-gap audit of existing internal tools before any build/buy decision.',
            'Stops customer records and leads from remaining trapped in personal chats.'
          ],
          footerLabel: 'Control KPI',
          footerValue: 'CRM completeness, pipeline hygiene & reporting cadence',
          accent: 'slate'
        }
      },
      {
        id: 'r5',
        phaseId: 'sistem-sop',
        activity: '05. General & Division-Specific SOP Rollout',
        startMonth: 3,
        endMonth: 5,
        kind: 'core',
        milestoneMonths: [5],
        modal: {
          badge: 'M3–M5 • Systems & SOP',
          subtitle: 'Cross-Segment Operating Standard',
          title: 'Core SOP, 5 Division Variants & Handover Standards',
          metric: 'M5 Sign-Off',
          metricLabel: 'Target Output',
          summary:
            'Establishes the 13-step commercial workflow and red escalation gates across Retail, Distribution, B2B & B2G.',
          highlights: [
            'Includes fair rule-based lead assignment, stock/technical checks & handover checklists.',
            'Validated through role-play simulations and live transaction sampling.'
          ],
          footerLabel: 'Deliverables',
          footerValue: 'SOP Playbook, Approval Matrix & Request Flow',
          accent: 'red'
        }
      },
      {
        id: 'r6',
        phaseId: 'sistem-sop',
        activity: '06. Price Approval Governance & Margin Control',
        startMonth: 3,
        endMonth: 5,
        kind: 'core',
        milestoneMonths: [5],
        modal: {
          badge: 'M3–M5 • Systems & SOP',
          subtitle: 'Discount & Profit Guardrails',
          title: 'Online Price Request Workflow & Tiered Authority',
          metric: 'Role-Based',
          metricLabel: 'HPP Access',
          summary:
            'Eliminates ad-hoc discounting via structured online approvals and role-restricted COGS visibility.',
          highlights: [
            'Trains commercial teams to distinguish Gross Margin % from Markup %.',
            'Logs every pricing exception cleanly for Finance and Owner review.'
          ],
          footerLabel: 'Partner Function',
          footerValue: 'Sales Manager, Finance & Director/Owner',
          accent: 'red'
        }
      },
      {
        id: 'r7',
        phaseId: 'sistem-sop',
        activity: '07. Training Calendar, L&D, Coaching & Role-Play',
        startMonth: 2,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M2–M12 • Continuous Workstream',
          subtitle: 'Continuous Capability Building',
          title: 'L&D Curriculum, Coaching, Mentoring & SOP Role-Play',
          metric: 'Ongoing >M12',
          metricLabel: 'Cadence',
          summary:
            'Builds consultative selling skill, technical product fluency, and SOP consistency on a recurring rhythm.',
          highlights: [
            'Covers hardware/solution knowledge, B2B discovery role-plays & retail complaint handling.',
            'Progress logged quarterly inside Individual Development Plans (IDPs).'
          ],
          footerLabel: 'Control KPI',
          footerValue: 'Role-play scores & M3/M6/M9/M12 competency reviews',
          accent: 'slate'
        }
      },
      {
        id: 'r8',
        phaseId: 'akselerasi',
        activity: '08. IT Solution Packaging (Product-to-Solution)',
        startMonth: 5,
        endMonth: 8,
        kind: 'core',
        milestoneMonths: [6],
        modal: {
          badge: 'M5–M8 • Acceleration',
          subtitle: 'Commercial Value Uplift',
          title: 'Bundling & IT Solution Playbooks (Hardware + Setup + SLA)',
          metric: 'Solution Kit',
          metricLabel: 'Deliverable',
          summary:
            'Shifts single-SKU price battles into bundled hardware, deployment, and maintenance solutions with Technical.',
          highlights: [
            'Combines Laptops/PCs, Servers/Storage, Networking & service SLAs.',
            'Every bundle undergoes compatibility and delivery-capacity validation.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Solution Playbook & Packaged SME/Corporate Offers',
          accent: 'slate'
        }
      },
      {
        id: 'r9',
        phaseId: 'akselerasi',
        activity: '09. B2B Account, SI Partner & End-User Expansion',
        startMonth: 4,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [6, 9, 12],
        modal: {
          badge: 'M4–M12 • Continuous Workstream',
          subtitle: 'Corporate Segment Growth',
          title: 'Account Planning, B2B Prospecting & SI Partnerships',
          metric: 'Ongoing >M12',
          metricLabel: 'Cadence',
          summary:
            'Expands B2B contribution above its 20% baseline through disciplined account mapping and solution selling.',
          highlights: [
            'Applies single Primary Account Owner discipline across priority corporate accounts.',
            'Uses Foot-in-the-Door assessments and small deployments to build trust.'
          ],
          footerLabel: 'Control KPI',
          footerValue: 'Qualified B2B pipeline, cohort win rate & repeat orders',
          accent: 'slate'
        }
      },
      {
        id: 'r10',
        phaseId: 'akselerasi',
        activity: '10. Aging-Stock Acceleration Program & Campaigns',
        startMonth: 5,
        endMonth: 7,
        kind: 'core',
        modal: {
          badge: 'M5–M7 • Acceleration',
          subtitle: 'Working-Capital Velocity',
          title: 'Stock Aging Clearance (~70% Second Mix) & Controlled Incentives',
          metric: 'Cash Release',
          metricLabel: 'Objective',
          summary:
            'Converts slow-moving inventory into working capital through curated bundles and channel campaigns.',
          highlights: [
            'Special aging incentives require Finance/Owner approval caps.',
            'Preserves strict transparency regarding second/refurbished condition and warranty.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Priority aging SKU list & targeted campaign offers',
          accent: 'slate'
        }
      },
      {
        id: 'r11',
        phaseId: 'akselerasi',
        activity: '11. B2G Subcon Readiness & Catalog Pilot',
        startMonth: 6,
        endMonth: 12,
        kind: 'ongoing',
        milestoneMonths: [6, 9, 12],
        modal: {
          badge: 'M6–M12 • Continuous Workstream',
          subtitle: 'Disciplined Public-Sector Entry',
          title: 'B2G Subcon Partner Testing & Electronic Catalog Checks',
          metric: 'Bid/No-Bid',
          metricLabel: 'Risk Control',
          summary:
            'Tests public-sector participation conservatively under regulations [R1–R4] without straining working capital.',
          highlights: [
            'Checks catalog category eligibility and new-vs-refurbished restrictions per package.',
            'Subcontracting terms and milestone cash flow require Finance & Director approval.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Compliance checklist & vetted maincon pilot',
          accent: 'red'
        }
      },
      {
        id: 'r12',
        phaseId: 'stabilisasi-skala',
        activity: '12. Quarterly Competency & Grade Gate Reviews',
        startMonth: 3,
        endMonth: 12,
        kind: 'milestone',
        milestoneMonths: [3, 6, 9, 12],
        modal: {
          badge: 'M3, M6, M9, M12 • Milestone Gate',
          subtitle: 'Performance & Behavior Calibration',
          title: 'Quarterly Competency Reviews & Evidence-Based Decisions',
          metric: '4 Gates / Yr',
          metricLabel: 'Cadence',
          summary:
            'Evaluates revenue, margin quality, collection hygiene, CRM discipline, and segment skills each quarter.',
          highlights: [
            'Grounds IDPs, coaching, grade promotions, and performance plans in verified evidence.',
            'Eliminates subjective manager bias.'
          ],
          footerLabel: 'Partner Function',
          footerValue: 'Sales Manager, HRD & Leadership',
          accent: 'red'
        }
      },
      {
        id: 'r13',
        phaseId: 'stabilisasi-skala',
        activity: '13. Grade Progression, Leader Bench & Territory Review',
        startMonth: 9,
        endMonth: 12,
        kind: 'core',
        milestoneMonths: [9, 12],
        modal: {
          badge: 'M9–M12 • Stabilization & Scale',
          subtitle: 'Internal Leadership Pipeline',
          title: 'Grade Promotions, Team Leader Candidates & Territory Review',
          metric: 'Leader Bench',
          metricLabel: 'Output',
          summary:
            'Prepares 2 internal Team Leaders / Supervisors capable of guiding Retail/Distribution and B2B/B2G squads.',
          highlights: [
            'Selects candidates based on sustained results, margin discipline, and coaching capability.',
            'Reviews territorial workloads and evidence-gated branch expansion candidates.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Grade promotion proposals & Year-2 team structure',
          accent: 'slate'
        }
      },
      {
        id: 'r14',
        phaseId: 'stabilisasi-skala',
        activity: '14. Margin Consistency & Year-2 Scale Plan',
        startMonth: 9,
        endMonth: 12,
        kind: 'core',
        milestoneMonths: [12],
        modal: {
          badge: 'M9–M12 • Stabilization & Scale',
          subtitle: 'Year-1 Close & Year-2 Horizon',
          title: 'Annual Review, Margin Discipline & Year-2 Planning',
          metric: 'Year-2 Plan',
          metricLabel: 'M12 Gate',
          summary:
            'Locks repeatable commercial governance and frames Year-2 expansion plans for Director approval.',
          highlights: [
            'Measures sustained progress toward the Rp4–5 B/mo corporate goal with healthy AR and stock.',
            'Builds institutional discipline supporting long-term corporate horizons without conflating Year-1 KPIs.'
          ],
          footerLabel: 'Deliverable',
          footerValue: 'Year-1 Performance Audit & Year-2 Roadmap',
          accent: 'red'
        }
      }
    ]
  },
  milestonesSection: {
    title: '6 Key Milestones',
    cards: [
      {
        id: 'ms-1',
        monthCode: 'M1',
        title: 'Audit & Process Map',
        proposedTargetCue: 'Quick wins & data gaps',
        modal: {
          badge: 'Milestone M1',
          subtitle: 'End of Orientation',
          title: 'Initial Diagnostic Findings, Data Gaps & 3–5 Quick Wins',
          summary:
            'Delivers an objective baseline assessment of inventory quality, sales workflows, and cross-team bottlenecks.',
          highlights: [
            'Lists priority internal data required to calibrate final targets.',
            'Proposes low-risk quick wins aligned with leadership.'
          ],
          footerLabel: 'Approval',
          footerValue: 'Director sign-off on initial diagnostic findings',
          accent: 'slate'
        }
      },
      {
        id: 'ms-3',
        monthCode: 'M3',
        title: 'Foundation & Baseline',
        proposedTargetCue: 'Skill map · KPI · COGS Audit',
        modal: {
          badge: 'Milestone M3',
          subtitle: 'End of Diagnosis & Foundation',
          title: '15-Rep Skill Matrix, Org Proposal & COGS/Price Audit',
          summary:
            'Closes the first 90 days with clear role definitions, segment KPIs, and minimum viable reporting.',
          highlights: [
            'Aligns portfolio-specific activity quotas with Finance and HR.',
            'Conducts first quarterly competency baseline.'
          ],
          footerLabel: 'Approval',
          footerValue: 'Sign-off on Org, KPIs & Margin Baseline',
          accent: 'slate'
        }
      },
      {
        id: 'ms-5',
        monthCode: 'M5',
        title: 'Systems & SOP Live',
        proposedTargetCue: 'SOP · CRM · Price Matrix',
        modal: {
          badge: 'Milestone M5',
          subtitle: 'End of Systems & SOP',
          title: 'Cross-Team SOPs, Role-Play, Price Request & CRM Active',
          summary:
            'Ensures unified commercial execution prior to scaling B2B and B2G outreach.',
          highlights: [
            'Validates SOP adherence via role-play and transaction sampling.',
            'Routes all pricing exceptions through governed approval.'
          ],
          footerLabel: 'Approval',
          footerValue: 'Ratified SOPs & Approval Matrix',
          accent: 'slate'
        }
      },
      {
        id: 'ms-6',
        monthCode: 'M6',
        title: 'Early Acceleration',
        proposedTargetCue: 'Rp3–3.5 B | B2B+B2G ~25%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M6 • Proposed',
          subtitle: 'Mid-Year (Source Proposal)',
          title: 'Solution Packages, Aging Stock Program & B2G Subcon Pilot',
          metric: 'Rp3–3.5 B / ~25%',
          metricLabel: 'Proposed Milestone',
          summary:
            'Proposed progression toward Rp3–3.5 B/mo and ~25% B2B+B2G mix once systems take hold.',
          highlights: [
            'Figures remain proposed targets adjustable to market demand, stock readiness, and Director decisions.',
            'Driven by solution bundles, slow-moving stock clearance, and vetted B2G partner tests.'
          ],
          footerLabel: 'Status',
          footerValue: 'Proposed Benchmark — Non-Guaranteed',
          accent: 'red'
        }
      },
      {
        id: 'ms-9',
        monthCode: 'M9',
        title: 'Scaling Momentum',
        proposedTargetCue: 'Rp3.5–4 B | B2B+B2G ~30%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M9 • Proposed',
          subtitle: 'Q3 Gate (Source Proposal)',
          title: 'B2B/SI Pipeline Expansion & Team Leader Readiness',
          metric: 'Rp3.5–4 B / ~30%',
          metricLabel: 'Proposed Milestone',
          summary:
            'Proposed step toward Rp3.5–4 B/mo and ~30% B2B+B2G contribution while testing future Team Leaders.',
          highlights: [
            'Subject to confirmed baseline, credit capacity, inventory mix, and Director sign-off.',
            'Includes territory optimization and AR quality audit.'
          ],
          footerLabel: 'Status',
          footerValue: 'Proposed Benchmark — Subject to Baseline',
          accent: 'red'
        }
      },
      {
        id: 'ms-12',
        monthCode: 'M12',
        title: 'Full Target & Year 2',
        proposedTargetCue: 'Rp4–5 B | Toward 40%',
        isProposedRevenueMilestone: true,
        modal: {
          badge: 'Milestone M12 • Proposed',
          subtitle: 'Year-1 Close (Corporate Target)',
          title: 'Scalable Rp4–5 B System, Toward 40% B2B+B2G & Y2 Plan',
          metric: 'Rp4–5 B / →40%',
          metricLabel: 'Corporate / Proposed Goal',
          summary:
            'Solidifies repeatable commercial growth toward Rp4–5 B/mo alongside healthy margins and Year-2 planning.',
          highlights: [
            'All M6/M9/M12 milestones remain proposals calibrated to market, stock & Director mandate.',
            'Prioritizes profit quality, turnover, clean receivables & customer retention.'
          ],
          footerLabel: 'Next Horizon',
          footerValue: 'Annual Review & Year-2 Scale Plan',
          accent: 'red'
        }
      }
    ]
  },
  phaseTableSection: {
    title: '5-Phase Summary & Observable Outputs',
    columns: {
      phase: 'Phase',
      window: 'Timing',
      outputs: 'Visible Deliverables Required'
    },
    rows: [
      {
        id: 'orientasi',
        phase: 'Orientation',
        window: 'M1',
        outputs: 'Product/process map; initial findings; data gaps list & quick wins',
        modal: {
          badge: 'Phase 1 • M1',
          subtitle: 'Orientation',
          title: 'Field Orientation & Data-Gap Register',
          summary: 'Establishes grounded visibility into inventory, workflows, and bottlenecks.',
          highlights: ['Deliverables: Product/process map, data-gap register & approved quick wins.'],
          footerLabel: 'Owner',
          footerValue: 'Candidate Manager + Warehouse & Cross-Team Leads',
          accent: 'slate'
        }
      },
      {
        id: 'diagnosa-fondasi',
        phase: 'Diagnosis & Foundation',
        window: 'M2–M3',
        outputs: 'Skill map; org proposal; targets/KPIs; pricing & data audit; basic reports',
        modal: {
          badge: 'Phase 2 • M2–M3',
          subtitle: 'Diagnosis & Foundation',
          title: 'Team Assessment, Pricing Audit & Baseline Reporting',
          summary: 'Sets capability baselines, org proposals, and daily/weekly visibility.',
          highlights: ['Deliverables: Skill matrix, org design, segment KPIs & COGS audit.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + HRD + Finance',
          accent: 'slate'
        }
      },
      {
        id: 'sistem-sop',
        phase: 'Systems & SOP',
        window: 'M3–M5',
        outputs: 'SOPs, role-play, CRM workflow, approval matrix, training calendar',
        modal: {
          badge: 'Phase 3 • M3–M5',
          subtitle: 'Systems & SOP',
          title: 'Standardized Workflows, Governance & Role-Play',
          summary: 'Embeds daily operating discipline and pricing controls across every division.',
          highlights: ['Deliverables: Shared/division SOPs, CRM flow, approval matrix & L&D calendar.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + Technical + Warehouse + Finance',
          accent: 'slate'
        }
      },
      {
        id: 'akselerasi',
        phase: 'Acceleration',
        window: 'M5–M8',
        outputs: 'Solution packages, account plans, stock program, B2B pipeline, B2G partner test',
        modal: {
          badge: 'Phase 4 • M5–M8',
          subtitle: 'Acceleration',
          title: 'Solution Rollout, Aging Stock Action & B2G Pilot',
          summary: 'Scales higher-value B2B/SI and subcon pipelines on top of governed SOPs.',
          highlights: ['Deliverables: Solution playbooks, account plans, aging stock program & B2G pilot.'],
          footerLabel: 'Owner',
          footerValue: 'B2B/B2G Sales + Technical + Creative + Purchasing',
          accent: 'red'
        }
      },
      {
        id: 'stabilisasi-skala',
        phase: 'Stabilization & Scale',
        window: 'M9–M12',
        outputs: 'Grade review, team leader candidates, forecast, margin discipline, year-2 plan',
        modal: {
          badge: 'Phase 5 • M9–M12',
          subtitle: 'Stabilization & Scale',
          title: 'System Maturity, Leader Bench & Year-2 Plan',
          summary: 'Stabilizes forecast accuracy and elevates internal leadership capacity for Year 2.',
          highlights: ['Deliverables: Evidence-based grade review, Team Leader bench & Year-2 roadmap.'],
          footerLabel: 'Owner',
          footerValue: 'Sales Manager + HRD + Directors',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Prerequisites & Required Data: Verified revenue/margin/stock baseline, cross-functional capacity confirmation, and Director approval of milestone sequence.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide24Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide24Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 24,
  folder: '24',
  sectionId: 8,
  navTitle: {
    in: 'Roadmap 12 Bulan',
    en: '12-Month Roadmap'
  },
  headerTitle: {
    in: 'Roadmap 12 Bulan - Fondasi, Sistem, Akselerasi, Skala',
    en: '12-Month Roadmap - Foundation, Systems, Acceleration, Scale'
  },
  category: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes'
  },
  section: {
    in: 'V. Eksekusi dan Hasil',
    en: 'V. Execution and Outcomes'
  }
};
