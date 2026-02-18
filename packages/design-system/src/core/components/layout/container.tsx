import type { ReactNode, CSSProperties } from 'react';
import { layout } from '../../foundation';

type LayoutKey = keyof typeof layout;

interface ContainerProps {
    children: ReactNode;

    /** max-width (default: 1024px) */
    maxWidth?: number;

    /** padding-x (px 값) */
    px?: LayoutKey;

    /** padding-y (px 값) */
    py?: LayoutKey;

    /** padding-top (px 값) */
    pt?: LayoutKey;

    /** padding-bottom (px 값) */
    pb?: LayoutKey;

    /** additional className */
    className?: string;

    /** HTML tag (default: div) */
    as?: 'div' | 'main' | 'section' | 'article';
}

/**
 * Container: 페이지 너비 제한 + 중앙 정렬
 */
export function Container({
    children,
    maxWidth = 1148,
    px = 60,
    py,
    pt = 40,
    pb = 160,
    className = '',
    as: Tag = 'div',
}: ContainerProps) {
    // container style
    const containerStyle: CSSProperties = {
        maxWidth: `${maxWidth}px`,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: layout[px],
        paddingRight: layout[px],
        ...(py && { paddingTop: layout[py], paddingBottom: layout[py] }),
        ...(pt && { paddingTop: layout[pt] }),
        ...(pb && { paddingBottom: layout[pb] }),
    };

    return (
        <Tag className={className} style={containerStyle}>
            {children}
        </Tag>
    );
}
