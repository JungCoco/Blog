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
    102: '6.375rem',    // 102px
    104: '6.5rem',      // 104px
    106: '6.625rem',    // 106px
    108: '6.75rem',     // 108px
    110: '6.875rem',    // 110px
    112: '7rem',        // 112px
    114: '7.125rem',    // 114px
    116: '7.25rem',     // 116px
    118: '7.375rem',    // 118px
    120: '7.5rem',      // 120px
    122: '7.625rem',    // 122px
    124: '7.75rem',     // 124px
    126: '7.875rem',    // 126px
    128: '8rem',        // 128px
    130: '8.125rem',    // 130px
    132: '8.25rem',     // 132px
    134: '8.375rem',    // 134px
    136: '8.5rem',      // 136px
    138: '8.625rem',    // 138px
    140: '8.75rem',     // 140px
    142: '8.875rem',    // 142px
    144: '9rem',        // 144px
    146: '9.125rem',    // 146px
    148: '9.25rem',     // 148px
    150: '9.375rem',    // 150px
    152: '9.5rem',      // 152px
    154: '9.625rem',    // 154px
    156: '9.75rem',     // 156px
    158: '9.875rem',    // 158px
    160: '10rem',       // 160px
    162: '10.125rem',   // 162px
    164: '10.25rem',    // 164px
    166: '10.375rem',   // 166px
    168: '10.5rem',     // 168px
    170: '10.625rem',   // 170px
    172: '10.75rem',    // 172px
    174: '10.875rem',   // 174px
    176: '11rem',       // 176px
    178: '11.125rem',   // 178px
    180: '11.25rem',    // 180px
    182: '11.375rem',   // 182px
    184: '11.5rem',     // 184px
    186: '11.625rem',   // 186px
    188: '11.75rem',    // 188px
    190: '11.875rem',   // 190px
    192: '12rem',       // 192px
    194: '12.125rem',   // 194px
    196: '12.25rem',    // 196px
    198: '12.375rem',   // 198px
    200: '12.5rem',     // 200px
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
