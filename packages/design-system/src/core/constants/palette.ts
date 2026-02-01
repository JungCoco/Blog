/**
 * Palette is used to create a palette of colors.
 */
export const palette = {

    // [palette] black
    black: '#000000',
    white: '#FFFFFF',

    // [palette] grey
    grey: {
        1: '#262736',
        2: '#364153',
        3: '#465467',
        4: '#687389',
        5: '#9DA8BA',
        6: '#C4CEDD',
        7: '#DFE6F0',
        8: '#E6EBF3',
        9: '#EEF2F9',
        10: '#F8FAFF',
    },

    // [palette] blue (Figma: primary)
    blue: {
        0: '#2B467C',
        1: '#3A76F6',
        2: '#6697FF',
        3: '#9CC3FF',
        4: '#BDD9FF',
        5: '#D0E4FF',
        6: '#E6F1FF',
        7: '#F0F7FF',
    },

    // [palette] cobalt (Figma: info)
    cobalt: {
        1: '#3A70E2',
        2: '#3B82F6',
        3: '#4BA1FF',
        4: '#93C8FF',
        5: '#BDDDFF',
        6: '#E4F2FF',
        7: '#F1F8FF',
        8: '#F8FCFF',
    },

    // [palette] navy (Figma: secondary)
    navy: {
        1: '#2B467C'
    },

    // [palette] purple (Figma: theranova)
    purple: {
        1: '#5C59DE',
        2: '#7A76FF',
        3: '#898FFF',
        4: '#A6AAFF',
        5: '#C4C7FF',
    },

    // [palette] red (Figma: danger)
    red: {
        1: '#EC2D30',
        2: '#F64C4C',
        3: '#EB6F70',
        4: '#F49898',
        5: '#FFCCD2',
        6: '#FFEBEE',
        7: '#FEF2F2',
        8: '#FFFBFB',
    },

    // [palette] yellow (Figma: warning)
    yellow: {
        1: '#FE9B0E',
        2: '#FFAD0D',
        3: '#FFC62B',
        4: '#FFDD82',
        5: '#FFEAB3',
        6: '#FFF7E1',
        7: '#FFF9EE',
        8: '#FFFDFA',
    },

    // [palette] green (Figma: success)
    green: {
        1: '#0C9D61',
        2: '#47B881',
        3: '#6BC497',
        4: '#97D4B4',
        5: '#C0E5D1',
        6: '#E5F5EC',
        7: '#F2FAF6',
        8: '#FBFEFC',
    }

} as const;

export type Palette = typeof palette;
