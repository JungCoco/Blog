import type { ReactNode, CSSProperties } from 'react';
import { layout } from '../../foundation';

type LayoutKey = keyof typeof layout;
type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface FlexProps {
    children: ReactNode;

    /** gap (px 값) */
    gap?: LayoutKey;

    /** align-items */
    align?: AlignItems;

    /** justify-content */
    justify?: JustifyContent;

    /** flex-direction (default: row) */
    direction?: FlexDirection;

    /** flex-wrap */
    wrap?: FlexWrap;

    /** flex: 1 (자식 공간 채우기) */
    flex?: boolean | number;

    /** additional className */
    className?: string;

    /** HTML tag (default: div) */
    as?: 'div' | 'section' | 'article' | 'nav' | 'ul' | 'ol';
}

const alignMap: Record<AlignItems, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
};

const justifyMap: Record<JustifyContent, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};

/**
 * Flex: 수평/수직 방향 flex 컨테이너
 */
export function Flex({
    children,
    gap = 0,
    align,
    justify,
    direction = 'row',
    wrap,
    flex,
    className = '',
    as: Tag = 'div',
}: FlexProps) {
    const flexStyle: CSSProperties = {
        display: 'flex',
        flexDirection: direction,
        gap: layout[gap],
        ...(align && { alignItems: alignMap[align] }),
        ...(justify && { justifyContent: justifyMap[justify] }),
        ...(wrap && { flexWrap: wrap }),
        ...(flex === true && { flex: 1 }),
        ...(typeof flex === 'number' && { flex }),
    };

    return (
        <Tag className={className} style={flexStyle}>
            {children}
        </Tag>
    );
}
