import { useLanguage } from '@/contexts/LanguageContext';
import type { ReviewDimensionId, PlaceholderMonthlyPoint } from './utils';

export interface Slide22ModalPayload {
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

export interface VarianceRowItem {
  id: string;
  segment: string;
  ytdActual: string;
  ytdTarget: string;
  ytdPriorYear: string;
  achievementPct: string;
  yoyPct: string;
  grossMargin: string;
  keyDriver: string;
  modal: Slide22ModalPayload;
}

export interface ForecastAssumptionCard {
  id: string;
  title: string;
  shortRule: string;
  modal: Slide22ModalPayload;
}

export interface Slide22Data {
  eyebrow: string;
  title: string;
  subtitle: string;
  placeholderCaveat: string;
  appleToAppleRule: string;
  dimensions: Array<{ id: ReviewDimensionId; label: string }>;
  chartSection: {
    mainChartTitle: string;
    mainChartDisclaimer: string;
    marginChartTitle: string;
    legendPrior: string;
    legendTarget: string;
    legendActual: string;
    legendForecast: string;
    legendGp: string;
    legendMarginPct: string;
    monthlyDesignPoints: PlaceholderMonthlyPoint[];
  };
  assumptionsSection: {
    title: string;
    cards: ForecastAssumptionCard[];
  };
  varianceTable: {
    title: string;
    columns: {
      segment: string;
      ytdActual: string;
      ytdTarget: string;
      ytdPrior: string;
      achPct: string;
      yoyPct: string;
      margin: string;
      driver: string;
    };
    rows: VarianceRowItem[];
  };
  evidenceFooter: string;
}

export const slideDataId: Slide22Data = {
  eyebrow: 'Komparasi Periode Setara & Proyeksi Berbasis Bukti',
  title: 'Forecast & Performance Review: YTD, Prior Year, Current Year',
  subtitle:
    'Memisahkan realisasi aktual, target, forecast berisiko-terukur, dan tahun lalu dalam periode cut-off setara agar Direksi membaca arah bisnis secara jernih.',
  placeholderCaveat: 'DESAIN PLACEHOLDER — Data Historis Bulanan Belum Tersedia di PDF',
  appleToAppleRule: 'Prinsip Apple-to-Apple: Periode Setara',
  dimensions: [
    { id: 'segment', label: 'Segment' },
    { id: 'product-family', label: 'Product Family' },
    { id: 'region', label: 'Region' },
    { id: 'sales-owner', label: 'Sales Owner' },
    { id: 'customer-cohort', label: 'Customer Cohort' }
  ],
  chartSection: {
    mainChartTitle: 'Prior Year vs Target vs Actual & Forecast',
    mainChartDisclaimer: 'Visual desain placeholder — bukan angka realisasi aktual perusahaan',
    marginChartTitle: 'Gross Profit vs Margin %',
    legendPrior: 'Prior Year Actual',
    legendTarget: 'Current Target',
    legendActual: 'Current Actual YTD',
    legendForecast: 'Forecast Pasca Cut-Off',
    legendGp: 'Gross Profit',
    legendMarginPct: 'Margin %',
    monthlyDesignPoints: [
      { month: 'Jan', priorYearSim: 52, targetSim: 62, currentActualSim: 55, forecastSim: null, gpIndexSim: 48, marginRatioSim: 20 },
      { month: 'Feb', priorYearSim: 54, targetSim: 64, currentActualSim: 58, forecastSim: null, gpIndexSim: 50, marginRatioSim: 21 },
      { month: 'Mar', priorYearSim: 58, targetSim: 66, currentActualSim: 61, forecastSim: null, gpIndexSim: 53, marginRatioSim: 20 },
      { month: 'Apr', priorYearSim: 55, targetSim: 68, currentActualSim: 62, forecastSim: null, gpIndexSim: 54, marginRatioSim: 21 },
      { month: 'Mei', priorYearSim: 60, targetSim: 70, currentActualSim: 66, forecastSim: null, gpIndexSim: 58, marginRatioSim: 22 },
      { month: 'Jun', priorYearSim: 62, targetSim: 72, currentActualSim: 68, forecastSim: null, gpIndexSim: 60, marginRatioSim: 21 },
      { month: 'Jul', priorYearSim: 59, targetSim: 74, currentActualSim: 67, forecastSim: null, gpIndexSim: 59, marginRatioSim: 22 },
      { month: 'Agu', priorYearSim: 63, targetSim: 76, currentActualSim: 71, forecastSim: null, gpIndexSim: 63, marginRatioSim: 22 },
      { month: 'Sep', priorYearSim: 66, targetSim: 78, currentActualSim: 74, forecastSim: null, gpIndexSim: 66, marginRatioSim: 23 },
      { month: 'Okt', priorYearSim: 68, targetSim: 80, currentActualSim: 76, forecastSim: 76, gpIndexSim: 68, marginRatioSim: 23 },
      { month: 'Nov', priorYearSim: 71, targetSim: 82, currentActualSim: null, forecastSim: 81, gpIndexSim: 71, marginRatioSim: 23 },
      { month: 'Des', priorYearSim: 75, targetSim: 85, currentActualSim: null, forecastSim: 85, gpIndexSim: 75, marginRatioSim: 24 }
    ]
  },
  assumptionsSection: {
    title: '7 Syarat Forecast Berbasis Bukti & Analisis Akar Masalah',
    cards: [
      {
        id: 'assump-pipeline',
        title: '7 Gate Forecast Assumptions',
        shortRule: 'Stage · Probabilitas · Stok · Lead Time · Kredit',
        modal: {
          badge: 'Metodologi Forecast • 01',
          subtitle: 'Bukan Menyalin Target Bulanan',
          title: '7 Parameter Uji Forecast Risk-Adjusted',
          metric: '7 Gate',
          metricLabel: 'Validasi Proyeksi',
          summary:
            'Forecast hanya mengakui peluang yang lolos pemeriksaan kesiapan komersial dan operasional.',
          highlights: [
            '1–3: Pipeline stage terverifikasi, probabilitas berbasis bukti & expected close realistis.',
            '4–5: Ketersediaan stok gudang serta lead time pengadaan vendor.',
            '6–7: Kapasitas delivery/instalasi & kelayakan risiko pembayaran (credit risk).'
          ],
          footerLabel: 'Cut-Off',
          footerValue: 'Konsisten definisi akuntansi & batas tanggal tiap bulan',
          accent: 'slate'
        }
      },
      {
        id: 'assump-variance',
        title: 'Variance & Root Cause',
        shortRule: 'Actual vs Target · YoY · Deviasi Margin',
        modal: {
          badge: 'Analisis Kinerja • 02',
          subtitle: 'Menjelaskan Mengapa Angka Berubah',
          title: 'Variance Analysis, Deviasi Margin & Root Cause',
          metric: '3 Lapisan',
          metricLabel: 'Perbandingan',
          summary:
            'Mengurai selisih performa tidak hanya dari volume omzet, tetapi juga profit kotor dan margin rasio.',
          highlights: [
            'Membandingkan Actual vs Target, Actual vs Prior Year (YTD setara), dan deviasi Gross Margin.',
            'Memisahkan Revenue (Rp) dari Gross Profit (Rp) serta Margin % sebagai rasio terpisah.',
            'Setiap selisih signifikan disertai akar masalah spesifik (stok, harga, siklus, atau konversi).'
          ],
          footerLabel: 'Audit Akuntansi',
          footerValue: 'Retur, diskon & PPN konsisten lintas periode',
          accent: 'red'
        }
      },
      {
        id: 'assump-competitor',
        title: 'Kompetitor & Produk Fokus',
        shortRule: 'Harga Kompetitor & SKU Fokus Periode',
        modal: {
          badge: 'Konteks Pasar • 03',
          subtitle: 'Penyesuaian Taktis Bulanan',
          title: 'Pemantauan Kompetitor & Produk Fokus per Periode',
          metric: 'Bulanan',
          metricLabel: 'Siklus Review',
          summary:
            'Menghubungkan laporan kinerja ke pergerakan harga kompetitor serta penentuan SKU/paket fokus.',
          highlights: [
            'Mengumpulkan bukti harga & strategi kompetitor dari deals won/lost di CRM.',
            'Menentukan produk fokus (termasuk akselerasi stok lama & bundle solusi) tiap kuartal.',
            'Menjaga respon harga tetap terarah lewat approval governance, bukan perang diskon.'
          ],
          footerLabel: 'Tindakan',
          footerValue: 'Update produk fokus & penyesuaian playbook bulanan',
          accent: 'slate'
        }
      }
    ]
  },
  varianceTable: {
    title: 'Variance Analysis per Segmen',
    columns: {
      segment: 'Segment',
      ytdActual: 'YTD Actual',
      ytdTarget: 'YTD Target',
      ytdPrior: 'YTD Prior Year',
      achPct: 'Ach %',
      yoyPct: 'YoY %',
      margin: 'Gross Margin',
      driver: 'Key Driver'
    },
    rows: [
      {
        id: 'var-retail',
        segment: 'Retail (Offline/Online)',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: 'Basis 40% • Mix new/2nd & konversi',
        modal: {
          badge: 'Variance Segmen • Retail',
          subtitle: 'Cut-Off YTD Setara',
          title: 'Kerangka Review Retail Offline & Online',
          summary:
            'Mengukur tren penjualan ritel dibandingkan periode sama tahun lalu beserta realisasi gross margin.',
          highlights: [
            'Kontribusi eksisting 40% menjadi jangkar analisis produktivitas toko & marketplace.',
            'Key driver yang dipantau: traffic, conversion, attachment bundle & stok second.'
          ],
          footerLabel: 'Status Data',
          footerValue: 'Menunggu ekspor bulanan 24 bulan Finance/POS',
          accent: 'slate'
        }
      },
      {
        id: 'var-dist',
        segment: 'Distribution / Channel',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: 'Basis 40% • Repeat reseller & kontrol AR',
        modal: {
          badge: 'Variance Segmen • Distribution',
          subtitle: 'Cut-Off YTD Setara',
          title: 'Kerangka Review Distribution & Reseller Channel',
          summary:
            'Menilai pertumbuhan pembelian ulang mitra sekaligus memastikan kualitas piutang tetap sehat.',
          highlights: [
            'Kontribusi eksisting 40% diuji per tier reseller serta wilayah.',
            'Key driver yang dipantau: mitra aktif, volume order, deviasi diskon & aging AR.'
          ],
          footerLabel: 'Status Data',
          footerValue: 'Menunggu riwayat transaksi reseller & kartu AR',
          accent: 'slate'
        }
      },
      {
        id: 'var-b2b',
        segment: 'B2B (Corporate & SI)',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: 'Basis 20% • Solusi IT & pipeline aktif',
        modal: {
          badge: 'Variance Segmen • B2B',
          subtitle: 'Cut-Off YTD Setara',
          title: 'Kerangka Review B2B Korporat & SI',
          summary:
            'Melacak realisasi solusi & perangkat korporat dengan horizon siklus penjualan multi-minggu.',
          highlights: [
            'Membandingkan realisasi vs forecast tertimbang dari pipeline qualified.',
            'Key driver: rata-rata nilai deal, win rate cohort & ketersediaan dukungan teknis.'
          ],
          footerLabel: 'Status Data',
          footerValue: 'Menunggu histori B2B & pipeline tervalidasi',
          accent: 'slate'
        }
      },
      {
        id: 'var-b2g',
        segment: 'B2G (Sektor Publik)',
        ytdActual: '—',
        ytdTarget: 'Usulan Subcon',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: 'Seleksi Bid/No-Bid • Kepatuhan R1–R4',
        modal: {
          badge: 'Variance Segmen • B2G',
          subtitle: 'Klarifikasi Baseline Wajib',
          title: 'Kerangka Review B2G (Subcon, E-Purchasing & Tender)',
          summary:
            'Baseline historis B2G belum terkonfirmasi sehingga tidak boleh ditampilkan sebagai 0% maupun target fiktif.',
          highlights: [
            'Keikutsertaan awal diprioritaskan melalui jalur subcon/mitra maincon dengan filter Bid/No-Bid.',
            'Pemantauan wajib meliputi kepatuhan aturan [R1–R4], termin bayar & cash flow.'
          ],
          footerLabel: 'Status Data',
          footerValue: 'Menunggu konfirmasi histori & izin Direksi',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Data Diperlukan: Penjualan bulanan minimal 2 tahun, target bulanan, gross profit, retur, kategori, pipeline per stage & expected close date, status stok, lead time pengadaan, serta histori seasonality.'
};

export const slideDataEn: Slide22Data = {
  eyebrow: 'Like-for-Like Comparison & Evidence-Based Forecast',
  title: 'Forecast & Performance Review: YTD, Prior Year, Current Year',
  subtitle:
    'Separating actuals, target, risk-adjusted forecast, and prior year within matching cut-off windows so leadership reads business momentum accurately.',
  placeholderCaveat: 'PLACEHOLDER DESIGN — Monthly Historical Data Not Provided in Source Brief',
  appleToAppleRule: 'Apple-to-Apple Rule: Matching Periods',
  dimensions: [
    { id: 'segment', label: 'Segment' },
    { id: 'product-family', label: 'Product Family' },
    { id: 'region', label: 'Region' },
    { id: 'sales-owner', label: 'Sales Owner' },
    { id: 'customer-cohort', label: 'Customer Cohort' }
  ],
  chartSection: {
    mainChartTitle: 'Prior Year vs Target vs Actual & Forecast',
    mainChartDisclaimer: 'Placeholder wireframe design — not actual company performance',
    marginChartTitle: 'Gross Profit vs Margin %',
    legendPrior: 'Prior Year Actual',
    legendTarget: 'Current Target',
    legendActual: 'Current Actual YTD',
    legendForecast: 'Post Cut-Off Forecast',
    legendGp: 'Gross Profit',
    legendMarginPct: 'Margin %',
    monthlyDesignPoints: [
      { month: 'Jan', priorYearSim: 52, targetSim: 62, currentActualSim: 55, forecastSim: null, gpIndexSim: 48, marginRatioSim: 20 },
      { month: 'Feb', priorYearSim: 54, targetSim: 64, currentActualSim: 58, forecastSim: null, gpIndexSim: 50, marginRatioSim: 21 },
      { month: 'Mar', priorYearSim: 58, targetSim: 66, currentActualSim: 61, forecastSim: null, gpIndexSim: 53, marginRatioSim: 20 },
      { month: 'Apr', priorYearSim: 55, targetSim: 68, currentActualSim: 62, forecastSim: null, gpIndexSim: 54, marginRatioSim: 21 },
      { month: 'May', priorYearSim: 60, targetSim: 70, currentActualSim: 66, forecastSim: null, gpIndexSim: 58, marginRatioSim: 22 },
      { month: 'Jun', priorYearSim: 62, targetSim: 72, currentActualSim: 68, forecastSim: null, gpIndexSim: 60, marginRatioSim: 21 },
      { month: 'Jul', priorYearSim: 59, targetSim: 74, currentActualSim: 67, forecastSim: null, gpIndexSim: 59, marginRatioSim: 22 },
      { month: 'Aug', priorYearSim: 63, targetSim: 76, currentActualSim: 71, forecastSim: null, gpIndexSim: 63, marginRatioSim: 22 },
      { month: 'Sep', priorYearSim: 66, targetSim: 78, currentActualSim: 74, forecastSim: null, gpIndexSim: 66, marginRatioSim: 23 },
      { month: 'Oct', priorYearSim: 68, targetSim: 80, currentActualSim: 76, forecastSim: 76, gpIndexSim: 68, marginRatioSim: 23 },
      { month: 'Nov', priorYearSim: 71, targetSim: 82, currentActualSim: null, forecastSim: 81, gpIndexSim: 71, marginRatioSim: 23 },
      { month: 'Dec', priorYearSim: 75, targetSim: 85, currentActualSim: null, forecastSim: 85, gpIndexSim: 75, marginRatioSim: 24 }
    ]
  },
  assumptionsSection: {
    title: '7 Evidence-Based Forecast Checks & Variance Root-Cause Framework',
    cards: [
      {
        id: 'assump-pipeline',
        title: '7 Forecast Gate Checks',
        shortRule: 'Stage · Probability · Stock · Lead Time · Credit',
        modal: {
          badge: 'Forecast Methodology • 01',
          subtitle: 'Never Copy-Paste Monthly Targets',
          title: '7 Risk-Adjusted Forecast Verification Gates',
          metric: '7 Gates',
          metricLabel: 'Projection Check',
          summary:
            'Forecasts count only opportunities cleared across commercial feasibility and delivery readiness.',
          highlights: [
            '1–3: Verified pipeline stage, evidence-based probability & realistic expected close date.',
            '4–5: Live warehouse stock status & vendor procurement lead time.',
            '6–7: Installation/delivery capacity & customer credit/payment risk.'
          ],
          footerLabel: 'Cut-Off Rule',
          footerValue: 'Consistent accounting basis & monthly cut-off date',
          accent: 'slate'
        }
      },
      {
        id: 'assump-variance',
        title: 'Variance & Root Cause',
        shortRule: 'Actual vs Target · YoY · Margin Drift',
        modal: {
          badge: 'Performance Review • 02',
          subtitle: 'Explaining Why Numbers Moved',
          title: 'Variance Analysis, Margin Deviation & Root Cause',
          metric: '3 Lenses',
          metricLabel: 'Comparisons',
          summary:
            'Breaks down performance variances across top-line volume, gross profit, and margin percentage.',
          highlights: [
            'Evaluates Actual vs Target, Actual vs Prior Year (matching YTD), and Gross Margin drift.',
            'Separates Revenue (Rp) from Gross Profit (Rp) and treats Margin % strictly as a ratio.',
            'Requires explicit root causes behind variances (stock, price pressure, cycle, or conversion).'
          ],
          footerLabel: 'Accounting Hygiene',
          footerValue: 'Consistent treatment of returns, discounts & VAT',
          accent: 'red'
        }
      },
      {
        id: 'assump-competitor',
        title: 'Competitors & Focus SKUs',
        shortRule: 'Competitor Pricing & Focus SKU Mix',
        modal: {
          badge: 'Market Context • 03',
          subtitle: 'Monthly Tactical Calibration',
          title: 'Competitor Tracking & Focus Products per Period',
          metric: 'Monthly',
          metricLabel: 'Review Cycle',
          summary:
            'Links commercial reviews to verified competitor pricing moves and active focus-SKU selections.',
          highlights: [
            'Captures competitor pricing and tactics from won/lost deal evidence in CRM.',
            'Sets monthly/quarterly focus SKUs (including slow-moving stock & solution bundles).',
            'Coordinates pricing responses through governance rather than ad-hoc discounting.'
          ],
          footerLabel: 'Action',
          footerValue: 'Refresh focus SKU list & tactical playbook',
          accent: 'slate'
        }
      }
    ]
  },
  varianceTable: {
    title: 'Segment Variance Analysis',
    columns: {
      segment: 'Segment',
      ytdActual: 'YTD Actual',
      ytdTarget: 'YTD Target',
      ytdPrior: 'YTD Prior Year',
      achPct: 'Ach %',
      yoyPct: 'YoY %',
      margin: 'Gross Margin',
      driver: 'Key Driver'
    },
    rows: [
      {
        id: 'var-retail',
        segment: 'Retail (Offline/Online)',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: '40% base • New/2nd mix & conversion',
        modal: {
          badge: 'Segment Variance • Retail',
          subtitle: 'Like-for-Like YTD Cut-Off',
          title: 'Retail Offline & Online Performance Review Schema',
          summary:
            'Tracks like-for-like YTD retail sales momentum alongside realized gross margin quality.',
          highlights: [
            'Uses the existing 40% contribution share as baseline anchor across store and online.',
            'Key drivers monitored: traffic, conversion rate, bundle attach rate & used-unit stock.'
          ],
          footerLabel: 'Data Status',
          footerValue: 'Awaiting 24-month Finance/POS monthly export',
          accent: 'slate'
        }
      },
      {
        id: 'var-dist',
        segment: 'Distribution / Channel',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: '40% base • Repeat resellers & AR control',
        modal: {
          badge: 'Segment Variance • Distribution',
          subtitle: 'Like-for-Like YTD Cut-Off',
          title: 'Distribution & Reseller Performance Review Schema',
          summary:
            'Evaluates repeat wholesale volume across reseller tiers while guarding receivables health.',
          highlights: [
            'Benchmarks the existing 40% contribution share across active reseller territories.',
            'Key drivers monitored: active accounts, order size, volume discounts & AR aging.'
          ],
          footerLabel: 'Data Status',
          footerValue: 'Awaiting reseller transaction & AR ledger history',
          accent: 'slate'
        }
      },
      {
        id: 'var-b2b',
        segment: 'B2B (Corporate & SI)',
        ytdActual: '—',
        ytdTarget: '—',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: '20% base • IT solutions & active pipeline',
        modal: {
          badge: 'Segment Variance • B2B',
          subtitle: 'Like-for-Like YTD Cut-Off',
          title: 'Corporate B2B & System Integrator Review Schema',
          summary:
            'Tracks solution and enterprise hardware realization across multi-week corporate buying cycles.',
          highlights: [
            'Compares closed revenue against risk-weighted qualified pipeline.',
            'Key drivers: average deal size, cohort win rate & engineering turnaround.'
          ],
          footerLabel: 'Data Status',
          footerValue: 'Awaiting historical B2B & qualified pipeline data',
          accent: 'slate'
        }
      },
      {
        id: 'var-b2g',
        segment: 'B2G (Public Sector)',
        ytdActual: '—',
        ytdTarget: 'Subcon Proposal',
        ytdPriorYear: '—',
        achievementPct: '— %',
        yoyPct: '— %',
        grossMargin: '— %',
        keyDriver: 'Bid/No-Bid gate • R1–R4 compliance',
        modal: {
          badge: 'Segment Variance • B2G',
          subtitle: 'Baseline Confirmation Needed',
          title: 'Public Sector B2G Review Schema (Subcon & E-Purchasing)',
          summary:
            'Historical B2G baseline is unconfirmed and is never displayed as 0% or fabricated revenue.',
          highlights: [
            'Initial entry prioritizes vetted maincon/subcon partnerships with strict Bid/No-Bid gates.',
            'Reviews strictly track [R1–R4] compliance, terms & working-capital exposure.'
          ],
          footerLabel: 'Data Status',
          footerValue: 'Awaiting historical confirmation & Director sign-off',
          accent: 'red'
        }
      }
    ]
  },
  evidenceFooter:
    'Required Data: At least 24 months of monthly revenue, monthly targets, gross profit, returns, categories, pipeline by stage & close date, stock status, vendor lead times & seasonality history.'
};

export const getSlideData = (lang: 'id' | 'in' | 'en' = 'in'): Slide22Data =>
  lang === 'en' ? slideDataEn : slideDataId;

export function useSlideData(): Slide22Data {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 22,
  folder: '22',
  sectionId: 7,
  navTitle: {
    in: 'Forecast & Performance Review',
    en: 'Forecast & Performance Review'
  },
  headerTitle: {
    in: 'Forecast & Performance Review - YTD, Prior Year, Current Year',
    en: 'Forecast & Performance Review - YTD, Prior Year, Current Year'
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
