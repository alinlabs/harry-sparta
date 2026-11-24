export type TerritoryId = 'jakarta' | 'west-corridor' | 'east-corridor' | 'kam-overlay';

export type VerticalId =
  | 'education'
  | 'manufacturing'
  | 'financial'
  | 'healthcare'
  | 'hospitality'
  | 'ict'
  | 'oil-gas';

export type B2BFunnelStageId =
  | 'discovery'
  | 'technical-validation'
  | 'solution'
  | 'proposal'
  | 'negotiation'
  | 'procurement'
  | 'won-lost';

export function getB2BFunnelBarPercent(index: number, total: number): number {
  if (total <= 1) return 100;
  return Math.round(100 - (index * 36) / (total - 1));
}
