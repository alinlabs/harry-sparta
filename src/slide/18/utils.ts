export type SwimlaneId =
  | 'lane-marketing'
  | 'lane-sales'
  | 'lane-manager'
  | 'lane-warehouse-tech'
  | 'lane-finance-delivery';

export type DecisionDiamondId = 'stock-available' | 'margin-authority' | 'credit-approved';

export type DivisionSopId =
  | 'retail-offline'
  | 'retail-online'
  | 'distribution'
  | 'b2b'
  | 'b2g';

export function isApprovalExceptionNode(isApprovalGate: boolean): boolean {
  return isApprovalGate;
}
