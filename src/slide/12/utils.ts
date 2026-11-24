export type CyclePhase = 'learn' | 'practice' | 'review' | 'improve';

export function getCycleModeMapping(): Record<CyclePhase, string> {
  return {
    learn: 'training',
    practice: 'mentoring',
    review: 'coaching',
    improve: 'counselling',
  };
}
