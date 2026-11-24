export type RetailChannelId = 'retail-offline' | 'retail-online' | 'telesales';
export type DistLeverId = 'reseller-activation' | 'volume-loyalty' | 'stock-ar-control';
export type BranchGateId = 'demand-evidence' | 'unit-economics' | 'ops-readiness' | 'mgmt-approval';

export function getCombinedBaseSharePercent(): number {
  // Stated source contribution: Retail 40% + Distribution 40% = 80%
  return 80;
}
