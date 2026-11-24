export type FlywheelStepId =
  | 'brand-awareness'
  | 'content-education'
  | 'lead-capture'
  | 'qualification'
  | 'sales-handover'
  | 'customer-proof'
  | 'referral-retention';

export type ServerFactorId = 'control' | 'latency' | 'workload' | 'security' | 'capex-opex';

export type ContentWeekId = 'cw-1' | 'cw-2' | 'cw-3' | 'cw-4';

export function getFlywheelStepLabel(index: number): string {
  return String(index + 1).padStart(2, '0');
}
