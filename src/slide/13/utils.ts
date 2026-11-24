export type JourneyStageKey =
  | 'discovery'
  | 'technical-validation'
  | 'solution-design'
  | 'commercial-proposal'
  | 'presentation'
  | 'delivery-handover'
  | 'after-sales';

export type SolutionPackageKey =
  | 'office-umkm'
  | 'server-backup'
  | 'device-refresh'
  | 'branch-connectivity';

export function getJourneyStageNumber(index: number): string {
  return String(index + 1).padStart(2, '0');
}

export function isTechnicalGateStage(stageId: JourneyStageKey): boolean {
  return stageId === 'technical-validation' || stageId === 'delivery-handover';
}
