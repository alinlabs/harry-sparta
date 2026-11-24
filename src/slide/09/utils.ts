export interface AllocationRow {
  allocation: number;
}

export const COMMERCIAL_HEADCOUNT_TOTAL = 15;
export const PORTFOLIO_COUNT = 4;
export const SUPERVISOR_COUNT = 2;

export function sumAllocations(rows: AllocationRow[]): number {
  return rows.reduce((sum, row) => sum + row.allocation, 0);
}
