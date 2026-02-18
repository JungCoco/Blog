import type { ReactNode, CSSProperties } from 'react';
import { layout } from '../../foundation';

type LayoutKey = keyof typeof layout;
type AlignItems = 'start' | 'center' | 'end' | 'stretch';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';

interface StackProps {
    children: ReactNode;

    /** gap (px 값) */
    gap?: LayoutKey;

    /** align-items */
    align?: AlignItems;

    /** justify-content */
    justify?: JustifyContent;

    /** additional className */
    className?: string;

    /** HTML tag (default: div) */
    as?: 'div' | 'section' | 'article' | 'ul' | 'ol';
}

const alignMap: Record<AlignItems, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
};

const justifyMap: Record<JustifyContent, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
};

/**
 * Stack: 수직 방향 flex + gap
 */
export function Stack({
    children,
    gap = 0,
    align,
    justify,
    className = '',
    as: Tag = 'div',
}: StackProps) {
    const stackStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: layout[gap],
        ...(align && { alignItems: alignMap[align] }),
        ...(justify && { justifyContent: justifyMap[justify] }),
    };

    return (
        <Tag className={className} style={stackStyle}>
            {children}
        </Tag>
    );
}
