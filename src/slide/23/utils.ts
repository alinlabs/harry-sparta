export type CrossFunctionId =
  | 'sales'
  | 'warehouse-purchasing'
  | 'technical'
  | 'finance'
  | 'marketing-creative'
  | 'hr';

export type DecisionId =
  | 'stock-allocation'
  | 'technical-validation'
  | 'discount-exception'
  | 'credit-terms'
  | 'project-handover';

export type RequestCategoryId =
  | 'stock-check'
  | 'tech-sizing'
  | 'discount-request'
  | 'credit-review';

export function getCrossFunctionCount(): number {
  return 6;
}
