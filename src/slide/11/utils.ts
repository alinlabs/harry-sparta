export type SkillGroup = 'all' | 'hard' | 'soft';

export interface CompetencyMatrixItem {
  group: 'hard' | 'soft';
  methods: ('data' | 'interview' | 'observe' | 'test')[];
}

export function countCompetenciesByGroup(
  items: CompetencyMatrixItem[],
  group: SkillGroup
): number {
  if (group === 'all') return items.length;
  return items.filter((item) => item.group === group).length;
}

export function getFunnelWidthPercent(stageIndex: number, totalStages: number): number {
  if (totalStages <= 1) return 100;
  const minWidth = 78;
  const step = (100 - minWidth) / (totalStages - 1);
  return Math.round(100 - stageIndex * step);
}
