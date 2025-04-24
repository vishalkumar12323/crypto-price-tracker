/**
 * Format a number as currency
 * @param value  - The number to format
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Format large numbers with abbreviations (K, M, B, T)
 * @param {number} value - The number to format
 * @returns {string} The formatted number with appropriate suffix
 */
export const formatLargeNumber = (value: number): string => {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`;
  }
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  }
  if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  }
  if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
};

/**
 * Format a number with commas as thousand separators
 * @param {number} value - The number to format
 * @returns {string} The formatted number with commas
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US").format(value);
};
