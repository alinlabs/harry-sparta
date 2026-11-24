export type ReviewDimensionId =
  | 'segment'
  | 'product-family'
  | 'region'
  | 'sales-owner'
  | 'customer-cohort';

export interface PlaceholderMonthlyPoint {
  month: string;
  priorYearSim: number;
  targetSim: number;
  currentActualSim: number | null;
  forecastSim: number | null;
  gpIndexSim: number;
  marginRatioSim: number;
}

export function isCutOffPostActual(monthIndex: number, lastActualIdx: number = 9): boolean {
  return monthIndex > lastActualIdx;
}
