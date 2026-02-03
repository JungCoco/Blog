import { fontSize, lineHeight } from "./base";

/**
 * Typography: Define the typography of the elements.
 */
export const typography = {

    headline1: {
        fontSize: fontSize['3xl'],
        lineHeight: lineHeight['3xl'],
    },

    headline2: {
        fontSize: fontSize['2xl'],
        lineHeight: lineHeight['2xl'],
    },

    headline3: {
        fontSize: fontSize['xl'],
        lineHeight: lineHeight['xl'],
    },

    title: {
        fontSize: fontSize['lg'],
        lineHeight: lineHeight['lg'],
    },

    subtitle: {
        fontSize: fontSize['md'],
        lineHeight: lineHeight['md'],
    },

    body: {
        fontSize: fontSize['base'],
        lineHeight: lineHeight['base'],
    },

    caption: {
        fontSize: fontSize['sm'],
        lineHeight: lineHeight['sm'],
    },

    label: {
        fontSize: fontSize['xs'],
        lineHeight: lineHeight['xs'],
    },
} as const;

export type Typography = typeof typography;
