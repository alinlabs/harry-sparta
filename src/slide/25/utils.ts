export type WorkstreamFilterId = 'ALL' | 'People' | 'Process' | 'Revenue' | 'Data';

export type PhaseFilterId =
  | 'ALL'
  | 'orientasi'
  | 'diagnosa'
  | 'sistem'
  | 'akselerasi'
  | 'stabilisasi';

export type CadenceNatureFilterId = 'ALL' | 'one-time' | 'recurring' | 'milestone';

export function isMonthActive(monthNum: number, months: number[]): boolean {
  return months.includes(monthNum);
}
