import { palette } from '../constants';

/**
 * Aliases are used to create meaningful aliases for the colors.
 * This Layer for mapping with Figma Foundation.
 */
export const colors = {

    // [color] semantic: basic
    'grey-01': palette.grey[1],
    'grey-02': palette.grey[2],
    'grey-03': palette.grey[3],
    'grey-04': palette.grey[4],
    'grey-05': palette.grey[5],
    'grey-06': palette.grey[6],
    'grey-07': palette.grey[7],
    'grey-08': palette.grey[8],
    'grey-09': palette.grey[9],
    'grey-10': palette.grey[10],

    // [color] semantic: primary (main)
    'primary-00': palette.blue[0],
    'primary-01': palette.blue[1],
    'primary-02': palette.blue[2],
    'primary-03': palette.blue[3],
    'primary-04': palette.blue[4],
    'primary-05': palette.blue[5],
    'primary-06': palette.blue[6],
    'primary-07': palette.blue[7],

    // [color] semantic: info
    'info-01': palette.cobalt[1],
    'info-02': palette.cobalt[2],
    'info-03': palette.cobalt[3],
    'info-04': palette.cobalt[4],
    'info-05': palette.cobalt[5],
    'info-06': palette.cobalt[6],
    'info-07': palette.cobalt[7],
    'info-08': palette.cobalt[8],

    // [color] semantic: secondary
    'secondary-01': palette.navy[1],

    // [color] semantic: theranova (brand)
    'theranova-01': palette.purple[1],
    'theranova-02': palette.purple[2],
    'theranova-03': palette.purple[3],
    'theranova-04': palette.purple[4],
    'theranova-05': palette.purple[5],

    // [color] semantic: danger (error)
    'danger-01': palette.red[1],
    'danger-02': palette.red[2],
    'danger-03': palette.red[3],
    'danger-04': palette.red[4],
    'danger-05': palette.red[5],
    'danger-06': palette.red[6],
    'danger-07': palette.red[7],
    'danger-08': palette.red[8],

    // [color] semantic: warning (alert)
    'warning-01': palette.yellow[1],
    'warning-02': palette.yellow[2],
    'warning-03': palette.yellow[3],
    'warning-04': palette.yellow[4],
    'warning-05': palette.yellow[5],
    'warning-06': palette.yellow[6],
    'warning-07': palette.yellow[7],
    'warning-08': palette.yellow[8],

    // [color] semantic: success (success)
    'success-01': palette.green[1],
    'success-02': palette.green[2],
    'success-03': palette.green[3],
    'success-04': palette.green[4],
    'success-05': palette.green[5],
    'success-06': palette.green[6],
    'success-07': palette.green[7],
    'success-08': palette.green[8],

    // [color] semantic: background
    'white': palette.white,
    'black': palette.black,

} as const;

export type Colors = typeof colors;
