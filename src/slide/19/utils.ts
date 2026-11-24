export type AccessRoleView = 'sales' | 'approver';

export interface MarginComparisonResult {
  grossMarginPct: number;
  markupPct: number;
}

/**
 * Pure simulation helper showing the exact mathematical difference
 * between Gross Margin % (profit / net selling price) and Markup % (profit / COGS).
 */
export function calculateMarginVsMarkupSimulation(
  hpp: number,
  netSellingPrice: number
): MarginComparisonResult {
  if (hpp <= 0 || netSellingPrice <= 0) {
    return { grossMarginPct: 0, markupPct: 0 };
  }
  const profit = netSellingPrice - hpp;
  return {
    grossMarginPct: Math.round((profit / netSellingPrice) * 100),
    markupPct: Math.round((profit / hpp) * 100),
  };
}
