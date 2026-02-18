import type { ReactNode, CSSProperties } from 'react';
import { layout } from '../../foundation';

type LayoutKey = keyof typeof layout;

interface CenterProps {
    children: ReactNode;

    /** min-height (px 값) */
    minHeight?: number;

    /** min-width (px 값) */
    minWidth?: number;

    /** gap (px 값) */
    gap?: LayoutKey;

    /** additional className */
    className?: string;

    /** HTML tag (default: div) */
    as?: 'div' | 'section';
}

/**
 * Center: 중앙 정렬 컨테이너
 */
export function Center({
    children,
    minHeight,
    minWidth,
    gap,
    className = '',
    as: Tag = 'div',
}: CenterProps) {
    const centerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(minHeight && { minHeight: `${minHeight}px` }),
        ...(minWidth && { minWidth: `${minWidth}px` }),
        ...(gap && { gap: layout[gap] }),
    };

    return (
        <Tag className={className} style={centerStyle}>
            {children}
        </Tag>
    );
}
