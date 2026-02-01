/**
 * Scale: All rem-based measurements (치수)
 * Used for font sizes, spacing, line heights, etc.
 * Index represents pixel value, increments by 2px
 */
export const scale = {
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
    34: '2.125rem',     // 34px
    36: '2.25rem',      // 36px
    38: '2.375rem',     // 38px
    40: '2.5rem',       // 40px
    42: '2.625rem',     // 42px
    44: '2.75rem',      // 44px
    46: '2.875rem',     // 46px
    48: '3rem',         // 48px
    50: '3.125rem',     // 50px
    52: '3.25rem',      // 52px
    54: '3.375rem',     // 54px
    56: '3.5rem',       // 56px
    58: '3.625rem',     // 58px
    60: '3.75rem',      // 60px
    62: '3.875rem',     // 62px
    64: '4rem',         // 64px
    66: '4.125rem',     // 66px
    68: '4.25rem',      // 68px
    70: '4.375rem',     // 70px
    72: '4.5rem',       // 72px
    74: '4.625rem',     // 74px
    76: '4.75rem',      // 76px
    78: '4.875rem',     // 78px
    80: '5rem',         // 80px
    82: '5.125rem',     // 82px
    84: '5.25rem',      // 84px
    86: '5.375rem',     // 86px
    88: '5.5rem',       // 88px
    90: '5.625rem',     // 90px
    92: '5.75rem',      // 92px
    94: '5.875rem',     // 94px
    96: '6rem',         // 96px
    98: '6.125rem',     // 98px
    100: '6.25rem',     // 100px
    120: '7.5rem',      // 120px
    128: '8rem',        // 128px
    280: '17.5rem',     // 280px
    full: '9999px',
} as const;

/**
 * Weight is used to create a scale of font weights.
 */
export const weight = {
    0: '400',
    1: '500',
    2: '600',
    3: '700',
} as const;

/**
 * Opacity is used to create a scale of opacities.
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
 * Stroke is used to create a scale of stroke widths.
 */
export const stroke = {
    0: '0',
    0.5: '0.5px',
    1: '1px',
    1.5: '1.5px',
    2: '2px',
    2.5: '2.5px',
    3: '3px'
} as const;

export type Scale = typeof scale;
export type Weight = typeof weight;
export type Opacity = typeof opacity;
export type Stroke = typeof stroke;
