/**
 * Font Family: Define the font fallback list.
 */
export const family = {
    pretendard: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
} as const;

export type Family = typeof family;
