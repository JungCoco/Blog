import { palette } from '../constants';

/**
 * Semantic Colors
 * palette의 원시 색상을 의미론적 이름으로 매핑
 */
export const colors = {
    // Base
    white: palette.white,
    black: palette.black,

    // Basic (gray)
    'basic-50': palette.gray[50],
    'basic-100': palette.gray[100],
    'basic-200': palette.gray[200],
    'basic-300': palette.gray[300],
    'basic-400': palette.gray[400],
    'basic-500': palette.gray[500],
    'basic-600': palette.gray[600],
    'basic-700': palette.gray[700],
    'basic-800': palette.gray[800],
    'basic-900': palette.gray[900],

    // Primary (ocean)
    'primary-100': palette.ocean[100],
    'primary-200': palette.ocean[200],
    'primary-300': palette.ocean[300],
    'primary-400': palette.ocean[400],
    'primary-500': palette.ocean[500],

    // Error (red)
    'error-50': palette.red[50],
    'error-100': palette.red[100],
    'error-200': palette.red[200],
    'error-300': palette.red[300],
    'error-400': palette.red[400],
    'error-500': palette.red[500],
    'error-600': palette.red[600],
    'error-700': palette.red[700],

    // Info (blue)
    'info-50': palette.blue[50],
    'info-100': palette.blue[100],
    'info-200': palette.blue[200],
    'info-300': palette.blue[300],
    'info-400': palette.blue[400],
    'info-500': palette.blue[500],
    'info-600': palette.blue[600],
    'info-700': palette.blue[700],
} as const;

export type Colors = typeof colors;
