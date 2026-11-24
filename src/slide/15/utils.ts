export type LadderLevelId = 'vendor-readiness' | 'subcon-partner' | 'qualified-maincon';

export type DecisionStepId =
  | 'category-check'
  | 'catalog-check'
  | 'method-terms'
  | 'compliance-check'
  | 'bid-no-bid';

export type InstitutionTypeId =
  | 'ministry-agency'
  | 'pemda'
  | 'bpd'
  | 'sudin-upt'
  | 'rsud-puskesmas'
  | 'bumn-bumd';

export function getLadderElevationOffset(index: number): number {
  // Visual ascending step cue from bottom-left to top-right
  return Math.max(0, (2 - index) * 14);
}
