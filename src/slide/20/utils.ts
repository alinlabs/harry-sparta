export type CrmFunnelStageId =
  | 'new-lead'
  | 'contacted'
  | 'qualified'
  | 'discovery'
  | 'solution-quote'
  | 'negotiation-po'
  | 'closed-won-lost'
  | 'delivery-retention';

export type CrmSegmentFilter = 'ALL' | 'Retail' | 'Distribution' | 'B2B' | 'B2G';

export function computeCohortWinRate(closedWon: number, closedLost: number): number | null {
  const denominator = closedWon + closedLost;
  if (denominator <= 0) return null;
  return (closedWon / denominator) * 100;
}
