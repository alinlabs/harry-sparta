export const COMMERCIAL_PORTFOLIO_COUNT = 4;
export const ACCOUNT_UNIVERSE_LAYER_COUNT = 3;

export const KNOWN_PORTFOLIO_MIX = {
  retail: 40,
  distribution: 40,
  b2b: 20,
} as const;

export function getKnownMixTotal(): number {
  return KNOWN_PORTFOLIO_MIX.retail + KNOWN_PORTFOLIO_MIX.distribution + KNOWN_PORTFOLIO_MIX.b2b;
}
