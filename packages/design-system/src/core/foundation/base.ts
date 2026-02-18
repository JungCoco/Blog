import { dimension, weight, stroke, lineHeight } from '../constants';

/**
 * Layout: spacing, padding, margin, gap, radius, width, height 등에 사용
 * Key = pixel value
 */
export const layout = {
    0: dimension[0],
    2: dimension[2],
    4: dimension[4],
    6: dimension[6],
    8: dimension[8],
    10: dimension[10],
    12: dimension[12],
    14: dimension[14],
    16: dimension[16],
    18: dimension[18],
    20: dimension[20],
    22: dimension[22],
    24: dimension[24],
    26: dimension[26],
    28: dimension[28],
    30: dimension[30],
    32: dimension[32],
    36: dimension[36],
    40: dimension[40],
    48: dimension[48],
    56: dimension[56],
    64: dimension[64],
    72: dimension[72],
    80: dimension[80],
    92: dimension[92],
    96: dimension[96],
    full: dimension.full,
} as const;

/**
 * Font Size: 텍스트 크기
 */
export const fontSize = {
    xs: dimension[10],      // 10px
    sm: dimension[12],      // 12px
    base: dimension[14],    // 14px
    md: dimension[16],      // 16px
    lg: dimension[18],      // 18px
    xl: dimension[20],      // 20px
    '2xl': dimension[24],   // 24px
    '3xl': dimension[32],   // 32px
} as const;

/**
 * Font Weight: 텍스트 굵기
 */
export const fontWeight = {
    regular: weight.regular,
    medium: weight.medium,
    semibold: weight.semibold,
    bold: weight.bold,
} as const;

/**
 * Leading: 텍스트 행간
 */
export const leading = {
    none: lineHeight.none,
    tight: lineHeight.tight,
    snug: lineHeight.snug,
    normal: lineHeight.normal,
    relaxed: lineHeight.relaxed,
    loose: lineHeight.loose,
} as const;

/**
 * Border: 테두리 두께
 */
export const border = {
    none: stroke[0],
    thin: stroke[0.5],
    normal: stroke[1],
    medium: stroke[1.5],
    thick: stroke[2],
} as const;

export type Layout = typeof layout;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type Leading = typeof leading;
export type Border = typeof border;
