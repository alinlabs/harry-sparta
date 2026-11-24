export type MockupTaskStatus = 'not_started' | 'in_progress' | 'done';

export function cycleMockupStatus(current: MockupTaskStatus): MockupTaskStatus {
  if (current === 'not_started') return 'in_progress';
  if (current === 'in_progress') return 'done';
  return 'not_started';
}

export function countMockupDone(statuses: Record<string, MockupTaskStatus>): number {
  return Object.values(statuses).filter((s) => s === 'done').length;
}
