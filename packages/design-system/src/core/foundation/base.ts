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
    34: dimension[34],
    36: dimension[36],
    38: dimension[38],
    40: dimension[40],
    42: dimension[42],
    44: dimension[44],
    46: dimension[46],
    48: dimension[48],
    50: dimension[50],
    52: dimension[52],
    54: dimension[54],
    56: dimension[56],
    58: dimension[58],
    60: dimension[60],
    62: dimension[62],
    64: dimension[64],
    66: dimension[66],
    68: dimension[68],
    70: dimension[70],
    72: dimension[72],
    74: dimension[74],
    76: dimension[76],
    78: dimension[78],
    80: dimension[80],
    82: dimension[82],
    84: dimension[84],
    86: dimension[86],
    88: dimension[88],
    90: dimension[90],
    92: dimension[92],
    94: dimension[94],
    96: dimension[96],
    98: dimension[98],
    100: dimension[100],
    102: dimension[102],
    104: dimension[104],
    106: dimension[106],
    108: dimension[108],
    110: dimension[110],
    112: dimension[112],
    114: dimension[114],
    116: dimension[116],
    118: dimension[118],
    120: dimension[120],
    122: dimension[122],
    124: dimension[124],
    126: dimension[126],
    128: dimension[128],
    130: dimension[130],
    132: dimension[132],
    134: dimension[134],
    136: dimension[136],
    138: dimension[138],
    140: dimension[140],
    142: dimension[142],
    144: dimension[144],
    146: dimension[146],
    148: dimension[148],
    150: dimension[150],
    152: dimension[152],
    154: dimension[154],
    156: dimension[156],
    158: dimension[158],
    160: dimension[160],
    162: dimension[162],
    164: dimension[164],
    166: dimension[166],
    168: dimension[168],
    170: dimension[170],
    172: dimension[172],
    174: dimension[174],
    176: dimension[176],
    178: dimension[178],
    180: dimension[180],
    182: dimension[182],
    184: dimension[184],
    186: dimension[186],
    188: dimension[188],
    190: dimension[190],
    192: dimension[192],
    194: dimension[194],
    196: dimension[196],
    198: dimension[198],
    200: dimension[200],
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
