export type ReportCadenceTab = 'daily' | 'weekly' | 'monthly' | 'quarterly';

export type SegmentFilterId = 'ALL' | 'Retail' | 'Distribution' | 'B2B' | 'B2G';

export function getSegmentActivityRule(segment: SegmentFilterId, lang: 'in' | 'en'): string {
  if (lang === 'en') {
    switch (segment) {
      case 'Retail':
        return 'Retail Target Focus: Walk-in handling, chat SLA speed, accessories/bundle cross-sell & fast receipt accuracy.';
      case 'Distribution':
        return 'Distribution Target Focus: Reseller activation, repeat volume cadence, stock allocation & clean AR aging.';
      case 'B2B':
        return 'B2B Target Focus: Account discovery, stakeholder mapping, technical validation quotes & margin quality.';
      case 'B2G':
        return 'B2G Target Focus: Package compliance [R1–R4], catalog curation, Bid/No-Bid filtering & cash-flow review.';
      default:
        return 'Role-Differentiated Targets: Call/visit quotas differ across Retail, Distribution, B2B, and B2G — never uniform.';
    }
  }

  switch (segment) {
    case 'Retail':
      return 'Fokus Target Retail: Layanan walk-in, kecepatan SLA chat, cross-sell bundle & akurasi transaksi cepat.';
    case 'Distribution':
      return 'Fokus Target Distribution: Aktivasi reseller, frekuensi repeat order, alokasi stok & disiplin aging AR.';
    case 'B2B':
      return 'Fokus Target B2B: Discovery kebutuhan akun, pemetaan PIC, validasi teknis penawaran & kualitas margin.';
    case 'B2G':
      return 'Fokus Target B2G: Kepatuhan paket [R1–R4], kurasi katalog, filter Bid/No-Bid & uji arus kas.';
    default:
      return 'Target Dibedakan per Segmen & Role: Jumlah calls/visit tidak disamakan antara Retail, Distribution, B2B, dan B2G.';
  }
}
