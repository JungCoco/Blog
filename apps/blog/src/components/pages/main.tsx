import { RECENT_POST } from '@/lib/ex-recent-post';
import { Container, Stack, Flex, Center } from '@repo/design-system/components/layout';

export default function MainPage() {
    return (
        <Container as="main">
            <Stack gap={112}>
                {/* 상단 배너: 최신 글 */}
                <Flex gap={36} justify="between">
                    {/* 글 제목 + 글 요약 */}
                    <Flex align="stretch" className="w-full bg-white">
                        <Stack justify="between" align="start" className="h-70 pt-6">
                            <Stack gap={12}>
                                <h2 className="font-bold text-4xl">배너 형태의 가장 최신 글</h2>
                                <span className="font-medium text-medium flex-wrap">
                                    한 줄 ~ 두 줄로 요약된 포스트 엔트리한 줄 ~ 두 줄로 요약된
                                    포스트 엔트리한 줄 ~ 두 줄로 요약된 포스트 엔트리
                                </span>
                            </Stack>
                            <Flex gap={16}>
                                <button className="border rounded-full py-2 px-4 items-center justify-center h-12">
                                    <span className="w-4 h-4"> ＜ </span>
                                </button>
                                <button className="border rounded-full py-2 px-4 items-center justify-center h-12">
                                    <span className="w-4 h-4"> ＞ </span>
                                </button>
                            </Flex>
                        </Stack>
                    </Flex>

                    {/* 썸네일 */}
                    <Flex className="w-full bg-white">
                        <Center className="w-full self-stretch border">이미지</Center>
                    </Flex>
                </Flex>

                {/* 전체 글 목록 + 사이드 컨텐츠 */}
                <Stack gap={112} className="w-full mx-auto bg-white">
                    {/* 전체 글 */}
                    <Flex gap={54}>
                        <Stack gap={36} className="w-full">
                            <h1 className="font-bold text-3xl">모든 포스트</h1>
                            <Stack gap={36}>
                                {RECENT_POST.map((r, index) => (
                                    <Flex key={index} gap={32}>
                                        {/* 포스트 왼쪽 */}
                                        <Stack gap={12} className="bg-white">
                                            {/* 태그 */}
                                            <Flex gap={6}>
                                                {r.tag.map((t, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="rounded-full bg-blue-50 text-blue-500 font-base px-1 py-0.5"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </Flex>

                                            {/* 포스트 제목 + 서브 */}
                                            <Stack>
                                                <h1 className="font-semibold text-2xl text-black">
                                                    {r.Title}
                                                </h1>
                                                <p className="font-medium text-base text-gray-500">
                                                    {r.SubTitle}
                                                </p>
                                            </Stack>
                                        </Stack>

                                        {/* 포스트 오른쪽: 썸네일 */}
                                        <Center className="max-w-57.25 h-32 w-full bg-purple-200 rounded-xl">
                                            <span>여기는 포스트 썸네일</span>
                                        </Center>
                                    </Flex>
                                ))}
                            </Stack>
                        </Stack>

                        {/* 사이드 메뉴 */}
                        <Stack gap={24} justify="between" className="max-w-75 w-full bg-green-100">
                            <Stack className="bg-gray-200 rounded-lg px-8 py-10">
                                <h3>인기 있는 글 섹션</h3>
                                <Flex>
                                    {/* map을 돌려야 할까 여기는? 일단 보류 */}
                                    <p>인기있는 글 1</p>
                                    <p>인기있는 글 2</p>
                                    <p>인기있는 글 3</p>
                                </Flex>
                            </Stack>
                            <Stack className="bg-gray-200 rounded-lg px-8 py-10">
                                <h3>블로그 업데이트 노트</h3>
                                <Flex>
                                    {/* map을 돌려야 할까 여기는? 일단 보류 */}
                                    <p>블로그 업데이트 노트 1</p>
                                    <p>블로그 업데이트 노트 2</p>
                                    <p>블로그 업데이트 노트 3</p>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Flex>

                    {/* 시리즈 글 */}
                    <Stack gap={16} className="bg-pink-200 w-full">
                        <h1 className="font-bold text-xl">시리즈 타이틀</h1>
                        <Flex gap={24}>
                            {/* map을 돌려야 할까 여기는? 일단 보류 */}
                            <p>시리즈 썸네일</p>
                            <p>시리즈 제목</p>
                            <p>시리즈 요약</p>
                        </Flex>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
}
