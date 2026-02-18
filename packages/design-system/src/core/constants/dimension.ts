/**
 * Dimension: All rem-based measurements (치수)
 * Used for font sizes, spacing, line heights, border radius, etc.
 * Index represents pixel value, increments by 2px
 */
export const dimension = {
    0: '0',
    2: '0.125rem',      // 2px
    4: '0.25rem',       // 4px
    6: '0.375rem',      // 6px
    8: '0.5rem',        // 8px
    10: '0.625rem',     // 10px
    12: '0.75rem',      // 12px
    14: '0.875rem',     // 14px
    16: '1rem',         // 16px
    18: '1.125rem',     // 18px
    20: '1.25rem',      // 20px
    22: '1.375rem',     // 22px
    24: '1.5rem',       // 24px
    26: '1.625rem',     // 26px
    28: '1.75rem',      // 28px
    30: '1.875rem',     // 30px
    32: '2rem',         // 32px
    36: '2.25rem',      // 36px
    40: '2.5rem',       // 40px
    48: '3rem',         // 48px
    56: '3.5rem',       // 56px
    64: '4rem',         // 64px
    72: '4.5rem',       // 72px
    80: '5rem',         // 80px
    92: '5.75rem',      // 92px
    96: '6rem',         // 96px
    full: '9999px',
} as const;

/**
 * Weight: Font weight scale
 */
export const weight = {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
} as const;

/**
 * Opacity: Transparency scale
 */
export const opacity = {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
} as const;

/**
 * Stroke: Border width scale
 */
export const stroke = {
    0: '0',
    0.5: '0.5px',
    1: '1px',
    1.5: '1.5px',
    2: '2px',
} as const;

/**
 * Line Height: 텍스트 행간 비율
 */
export const lineHeight = {
    none: '1',          // 100% (행간 없음)
    tight: '1.2',       // 120% (좁은 행간)
    snug: '1.4',        // 140% (약간 좁은 행간)
    normal: '1.6',      // 160% (기본 행간)
    relaxed: '1.8',     // 180% (넓은 행간)
    loose: '2',         // 200% (매우 넓은 행간)
} as const;

export type Dimension = typeof dimension;
export type Weight = typeof weight;
export type Opacity = typeof opacity;
export type Stroke = typeof stroke;
export type LineHeight = typeof lineHeight;
