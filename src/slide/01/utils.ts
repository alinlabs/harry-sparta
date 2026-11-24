import type { CoverNodeId } from './data';

export const COVER_NODE_ORDER: CoverNodeId[] = [
  'people',
  'process',
  'product',
  'data',
  'growth',
];

export function getSlideHighlights(): string[] {
  return ['People', 'Process', 'Product', 'Data', 'Growth'];
}

