export const GROWTH_ENGINE_COUNT = 4;
export const GUARDRAIL_COUNT = 3;
export const MILESTONE_COUNT = 4;

export const SCALE_MAX_BILLIONS = 5.0;

/**
 * Converts a revenue value in IDR billions (0..5.0) to a percentage position along the range chart axis.
 */
export function toRangePercent(billions: number, scaleMax = SCALE_MAX_BILLIONS): number {
  const clamped = Math.max(0, Math.min(scaleMax, billions));
  return Number(((clamped / scaleMax) * 100).toFixed(2));
}
