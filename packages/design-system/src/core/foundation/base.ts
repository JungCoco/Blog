import { weight, scale, stroke } from '../constants';

/**
 * Font Weight: Define the stroke thickness(weight) of the characters.
 */
export const fontWeight = {
    regular: weight[0],
    semibold: weight[2],
    bold: weight[3],
} as const;

/**
 * Font Size: Define the font size.
 */
export const fontSize = {
    xs: scale[10],
    sm: scale[12],
    base: scale[14],
    md: scale[16],
    lg: scale[18],
    xl: scale[20],
    '2xl': scale[22],
    '3xl': scale[24]
} as const;

/**
 * Line Height: Define the line height (leading).
 */
export const lineHeight = {
    xs: scale[16],
    sm: scale[18],
    base: scale[20],
    md: scale[22],
    lg: scale[24],
    xl: scale[26],
    '2xl': scale[28],
    '3xl': scale[30]
} as const;

/**
 * Layout: Define spacing, padding, margin, gap, radius, etc.
 * Index represents pixel value in multiples of 4
 */
export const layout = {
    0: scale[0],
    2: scale[2],
    4: scale[4],
    6: scale[6],
    8: scale[8],
    10: scale[10],
    12: scale[12],
    14: scale[14],
    16: scale[16],
    18: scale[18],
    20: scale[20],
    22: scale[22],
    24: scale[24],
    26: scale[26],
    28: scale[28],
    30: scale[30],
    32: scale[32],
    34: scale[34],
    36: scale[36],
    38: scale[38],
    40: scale[40],
    42: scale[42],
    44: scale[44],
    46: scale[46],
    48: scale[48],
    50: scale[50],
    52: scale[52],
    54: scale[54],
    56: scale[56],
    58: scale[58],
    60: scale[60],
    62: scale[62],
    64: scale[64],
    66: scale[66],
    68: scale[68],
    70: scale[70],
    72: scale[72],
    74: scale[74],
    76: scale[76],
    78: scale[78],
    80: scale[80],
    82: scale[82],
    84: scale[84],
    86: scale[86],
    88: scale[88],
    90: scale[90],
    92: scale[92],
    94: scale[94],
    96: scale[96],
    98: scale[98],
    100: scale[100],
    120: scale[120],
    128: scale[128],
    280: scale[280],
    full: scale.full,
} as const;

/**
 * Border: Define the border width.
 */
export const border = {
    none: stroke[0],
    thin: stroke[0.5],
    normal: stroke[1],
    regular: stroke[1.5],
    medium: stroke[2],
    thick: stroke[2.5],
    heavy: stroke[3],
} as const;

export type FontWeight = typeof fontWeight;
export type FontSize = typeof fontSize;
export type LineHeight = typeof lineHeight;
export type Layout = typeof layout;
export type Border = typeof border;
