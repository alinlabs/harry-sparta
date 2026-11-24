export type RoadmapPhaseId =
  | 'orientasi'
  | 'diagnosa-fondasi'
  | 'sistem-sop'
  | 'akselerasi'
  | 'stabilisasi-skala';

export type RoadmapBarKind = 'core' | 'ongoing' | 'milestone';

export function isMonthInRange(monthNum: number, startMonth: number, endMonth: number): boolean {
  return monthNum >= startMonth && monthNum <= endMonth;
}
