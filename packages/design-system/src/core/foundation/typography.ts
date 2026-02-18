import { fontSize, fontWeight, leading } from './base';

/**
 * Typography: 텍스트 스타일 조합
 */
export const typography = {
    /** 페이지 메인 타이틀, 히어로 섹션 */
    headline1: {
        fontSize: fontSize['3xl'],
        fontWeight: fontWeight.bold,
        lineHeight: leading.tight,
    },

    /** 섹션 타이틀, 포스트 제목 */
    headline2: {
        fontSize: fontSize['2xl'],
        fontWeight: fontWeight.bold,
        lineHeight: leading.tight,
    },

    /** 서브 섹션 타이틀, 카드 제목 */
    headline3: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.semibold,
        lineHeight: leading.snug,
    },

    /** 리스트 아이템 제목, 모달 타이틀 */
    title: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold,
        lineHeight: leading.snug,
    },

    /** 부제목, 강조 텍스트 */
    subtitle: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.medium,
        lineHeight: leading.normal,
    },

    /** 본문 텍스트, 일반 콘텐츠 */
    body: {
        fontSize: fontSize.base,
        fontWeight: fontWeight.regular,
        lineHeight: leading.normal,
    },

    /** 보조 텍스트, 날짜, 메타 정보 */
    caption: {
        fontSize: fontSize.sm,
        fontWeight: fontWeight.regular,
        lineHeight: leading.normal,
    },

    /** 버튼, 태그, 뱃지 */
    label: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.medium,
        lineHeight: leading.normal,
    },
} as const;

export type Typography = typeof typography;
