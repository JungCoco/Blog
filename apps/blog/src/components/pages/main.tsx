import { RECENT_POST } from '@/lib/ex-recent-post';
import { Container, Stack, Flex, Center } from '@repo/design-system/components/layout';

// 임시 데이터: 인기 글
const POPULAR_POSTS = [
    { id: 1, title: '인기 있는 첫 번째 글 제목이 여기에', date: '2026.02.15' },
    { id: 2, title: '두 번째로 인기 있는 글 제목', date: '2026.02.10' },
    { id: 3, title: '세 번째 인기 글의 제목입니다', date: '2026.02.05' },
];

export default function MainPage() {
    return (
        <main>
            {/* ========== 히어로: 텍스트 + 썸네일 ========== */}
            <Container>
                <Flex gap={48} align="center">
                    {/* 텍스트 영역 */}
                    <Stack gap={20} className="flex-1">
                        {/* 라벨: 13/20 */}
                        <span
                            className="text-[#14213D] font-medium"
                            style={{ fontSize: '13px', lineHeight: '20px' }}
                        >
                            최신 글
                        </span>

                        {/* 메인 타이틀: 36/48 */}
                        <h1
                            className="font-bold text-[#0B1F3B] cursor-pointer hover:text-[#14213D] transition-colors"
                            style={{ fontSize: '36px', lineHeight: '48px' }}
                        >
                            배너 형태의 가장 최신 글 제목이 여기에 들어갑니다
                        </h1>

                        {/* 요약: 17/28 */}
                        <p className="text-[#64748B]" style={{ fontSize: '17px', lineHeight: '28px' }}>
                            한 줄에서 두 줄 정도로 요약된 포스트 엔트리입니다. 이 글에서는 흥미로운 주제에 대해 다룹니다.
                        </p>

                        {/* 메타: 14/22 */}
                        <span
                            className="text-[#9CA3AF]"
                            style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                            2026.02.19
                        </span>
                    </Stack>

                    {/* 썸네일 */}
                    <Center className="w-[320px] h-[200px] bg-[#F3F6FA] rounded-[12px] shrink-0">
                        <span className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
                            썸네일
                        </span>
                    </Center>
                </Flex>
            </Container>

            {/* 구분선 */}
            <div className="max-w-[720px] mx-auto">
                <div className="h-px bg-[#E5E7EB] " />
            </div>

            {/* ========== 메인 컨텐츠: 아티클 목록 + 사이드바 ========== */}
            <Container pt={66}>
                <Flex gap={80} align="start">
                    {/* 전체 아티클 목록 */}
                    <Stack gap={48} className="flex-1">
                        {/* 섹션 타이틀: 15/24 */}
                        <h2
                            className="font-semibold text-[#0B1F3B]"
                            style={{ fontSize: '15px', lineHeight: '24px' }}
                        >
                            전체 글
                        </h2>

                        {/* 아티클 리스트 */}
                        <Stack gap={40}>
                            {RECENT_POST.map((post, index) => (
                                <article key={index} className="group cursor-pointer">
                                    <Flex gap={24} align="start">
                                        {/* 텍스트 영역 */}
                                        <Stack gap={12} className="flex-1">
                                            {/* 카테고리: 13/20 */}
                                            <Flex gap={8}>
                                                {post.tag.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-[#14213D] font-medium"
                                                        style={{ fontSize: '13px', lineHeight: '20px' }}
                                                    >
                                                        {tag}
                                                        {tagIndex < post.tag.length - 1 && (
                                                            <span className="text-[#D1D5DB] ml-2">·</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </Flex>

                                            {/* 제목: 20/32 */}
                                            <h3
                                                className="font-semibold text-[#0B1F3B] group-hover:text-[#14213D] transition-colors"
                                                style={{ fontSize: '20px', lineHeight: '32px' }}
                                            >
                                                {post.Title}
                                            </h3>

                                            {/* 요약: 15/24 */}
                                            <p
                                                className="text-[#64748B]"
                                                style={{ fontSize: '15px', lineHeight: '24px' }}
                                            >
                                                {post.SubTitle}
                                            </p>

                                            {/* 날짜: 13/20 */}
                                            <span
                                                className="text-[#9CA3AF]"
                                                style={{ fontSize: '13px', lineHeight: '20px' }}
                                            >
                                                2026.02.{19 - index}
                                            </span>
                                        </Stack>

                                        {/* 썸네일 */}
                                        <Center className="w-[160px] h-[120px] bg-[#F3F6FA] rounded-[8px] shrink-0">
                                            <span className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>
                                                썸네일
                                            </span>
                                        </Center>
                                    </Flex>
                                </article>
                            ))}
                        </Stack>
                    </Stack>

                    {/* ========== 사이드바 ========== */}
                    <aside className="w-[280px] shrink-0">
                        <Stack gap={48}>
                            {/* 인기 글 */}
                            <Stack gap={24}>
                                <h3
                                    className="font-semibold text-[#0B1F3B]"
                                    style={{ fontSize: '15px', lineHeight: '24px' }}
                                >
                                    인기 글
                                </h3>
                                <Stack gap={20}>
                                    {POPULAR_POSTS.map((post) => (
                                        <article key={post.id} className="cursor-pointer group">
                                            <Stack gap={6}>
                                                <span
                                                    className="font-medium text-[#1F2937] group-hover:text-[#14213D] transition-colors"
                                                    style={{ fontSize: '15px', lineHeight: '24px' }}
                                                >
                                                    {post.title}
                                                </span>
                                                <span
                                                    className="text-[#9CA3AF]"
                                                    style={{ fontSize: '13px', lineHeight: '20px' }}
                                                >
                                                    {post.date}
                                                </span>
                                            </Stack>
                                        </article>
                                    ))}
                                </Stack>
                            </Stack>

                            {/* 구분선 */}
                            <div className="h-px bg-[#E5E7EB]" />

                            {/* 업데이트 노트 */}
                            <Stack gap={24}>
                                <h3
                                    className="font-semibold text-[#0B1F3B]"
                                    style={{ fontSize: '15px', lineHeight: '24px' }}
                                >
                                    업데이트
                                </h3>
                                <Stack gap={16}>
                                    <Stack gap={4}>
                                        <span
                                            className="font-medium text-[#1F2937]"
                                            style={{ fontSize: '14px', lineHeight: '22px' }}
                                        >
                                            v1.0.0
                                        </span>
                                        <span
                                            className="text-[#9CA3AF]"
                                            style={{ fontSize: '13px', lineHeight: '20px' }}
                                        >
                                            블로그 오픈
                                        </span>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </aside>
                </Flex>
            </Container>
        </main>
    );
}
