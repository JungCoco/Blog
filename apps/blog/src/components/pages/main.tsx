import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Container, Stack, Flex, Center } from '@repo/design-system/components/layout';

const PAGE_SIZE = 4;

interface Post {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    thumbnail_url: string | null;
    created_at: string;
    category_name: string | null;
    category_slug: string | null;
}

// 임시 데이터: 인기 글
const POPULAR_POSTS = [
    { id: 1, title: '인기 있는 첫 번째 글 제목이 여기에', date: '2026.02.15' },
    { id: 2, title: '두 번째로 인기 있는 글 제목', date: '2026.02.10' },
    { id: 3, title: '세 번째 인기 글의 제목입니다', date: '2026.02.05' },
];

export default function MainPage() {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') ?? '1');

    const [posts, setPosts] = useState<Post[]>([]);
    const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
    const [totalCount, setTotalCount] = useState(0);
    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    useEffect(() => {
        async function fetchPosts() {
            const from = (page - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;

            const { data, count } = await supabase
                .from('posts')
                .select(
                    `
                    id, title, slug, description, thumbnail_url, created_at,
                    categories!inner(category_name, slug)
                `,
                    { count: 'exact' },
                )
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .range(from, to);

            if (data) {
                const mapped: Post[] = data.map((p) => ({
                    id: p.id,
                    title: p.title,
                    slug: p.slug,
                    description: p.description,
                    thumbnail_url: p.thumbnail_url,
                    created_at: p.created_at,
                    category_name:
                        (p.categories as unknown as { category_name: string; slug: string })
                            ?.category_name ?? null,
                    category_slug:
                        (p.categories as unknown as { category_name: string; slug: string })
                            ?.slug ?? null,
                }));
                setPosts(mapped);

                if (page === 1 && mapped.length > 0) {
                    setFeaturedPost(mapped[0]);
                }
            }

            if (count !== null) setTotalCount(count);
        }

        fetchPosts();
    }, [page]);

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    }

    return (
        <main>
            {/* ========== 히어로: 최신 글 ========== */}
            <Container>
                {featuredPost ? (
                    <Link to={`/${featuredPost.category_slug}/${featuredPost.slug}`}>
                        <Flex gap={48} align="center" className="group">
                            <Stack gap={20} className="flex-1">
                                <span
                                    className="text-[#14213D] font-medium"
                                    style={{ fontSize: '13px', lineHeight: '20px' }}
                                >
                                    최신 글
                                </span>
                                <h1
                                    className="font-bold text-[#0B1F3B] group-hover:text-[#14213D] transition-colors"
                                    style={{ fontSize: '36px', lineHeight: '48px' }}
                                >
                                    {featuredPost.title}
                                </h1>
                                {featuredPost.description && (
                                    <p
                                        className="text-[#64748B]"
                                        style={{ fontSize: '17px', lineHeight: '28px' }}
                                    >
                                        {featuredPost.description}
                                    </p>
                                )}
                                <Flex gap={12} align="center">
                                    {featuredPost.category_name && (
                                        <>
                                            <span
                                                className="text-[#14213D] font-medium"
                                                style={{ fontSize: '13px', lineHeight: '20px' }}
                                            >
                                                {featuredPost.category_name}
                                            </span>
                                            <span className="text-[#D1D5DB]">·</span>
                                        </>
                                    )}
                                    <span
                                        className="text-[#9CA3AF]"
                                        style={{ fontSize: '14px', lineHeight: '22px' }}
                                    >
                                        {formatDate(featuredPost.created_at)}
                                    </span>
                                </Flex>
                            </Stack>
                            {featuredPost.thumbnail_url ? (
                                <img
                                    src={featuredPost.thumbnail_url}
                                    alt={featuredPost.title}
                                    className="w-[320px] h-[200px] object-cover rounded-[12px] shrink-0"
                                />
                            ) : (
                                <Center className="w-[320px] h-[200px] bg-[#F3F6FA] rounded-[12px] shrink-0">
                                    <span className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
                                        썸네일
                                    </span>
                                </Center>
                            )}
                        </Flex>
                    </Link>
                ) : (
                    <Center minHeight={200}>
                        <span className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
                            아직 글이 없습니다.
                        </span>
                    </Center>
                )}
            </Container>

            {/* 구분선 */}
            <div className="max-w-[840px] mx-auto">
                <div className="h-px bg-[#E5E7EB]" />
            </div>

            {/* ========== 메인 컨텐츠: 아티클 목록 + 사이드바 ========== */}
            <Container pt={66}>
                <Flex gap={80} align="start">
                    {/* 전체 아티클 목록 */}
                    <Stack gap={48} className="flex-1">
                        <Flex justify="between" align="center">
                            <h2
                                className="font-semibold text-[#0B1F3B]"
                                style={{ fontSize: '15px', lineHeight: '24px' }}
                            >
                                전체 글
                            </h2>
                            <span className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
                                {totalCount}개
                            </span>
                        </Flex>

                        <Stack gap={40}>
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/${post.category_slug}/${post.slug}`}
                                    className="group"
                                >
                                    <Flex gap={24} align="start">
                                        <Stack gap={12} className="flex-1">
                                            <Flex gap={8} align="center">
                                                {post.category_name && (
                                                    <span
                                                        className="text-[#14213D] font-medium"
                                                        style={{
                                                            fontSize: '13px',
                                                            lineHeight: '20px',
                                                        }}
                                                    >
                                                        {post.category_name}
                                                    </span>
                                                )}
                                                {post.category_name && (
                                                    <span className="text-[#D1D5DB]">·</span>
                                                )}
                                                <span
                                                    className="text-[#9CA3AF]"
                                                    style={{
                                                        fontSize: '13px',
                                                        lineHeight: '20px',
                                                    }}
                                                >
                                                    {formatDate(post.created_at)}
                                                </span>
                                            </Flex>
                                            <h3
                                                className="font-semibold text-[#0B1F3B] group-hover:text-[#14213D] transition-colors"
                                                style={{ fontSize: '20px', lineHeight: '32px' }}
                                            >
                                                {post.title}
                                            </h3>
                                            {post.description && (
                                                <p
                                                    className="text-[#64748B]"
                                                    style={{
                                                        fontSize: '15px',
                                                        lineHeight: '24px',
                                                    }}
                                                >
                                                    {post.description}
                                                </p>
                                            )}
                                        </Stack>
                                        {post.thumbnail_url ? (
                                            <img
                                                src={post.thumbnail_url}
                                                alt={post.title}
                                                className="w-[160px] h-[120px] object-cover rounded-[8px] shrink-0"
                                            />
                                        ) : (
                                            <Center className="w-[160px] h-[120px] bg-[#F3F6FA] rounded-[8px] shrink-0">
                                                <span
                                                    className="text-[#9CA3AF]"
                                                    style={{ fontSize: '12px' }}
                                                >
                                                    썸네일
                                                </span>
                                            </Center>
                                        )}
                                    </Flex>
                                </Link>
                            ))}
                        </Stack>

                        {/* 페이지네이션 */}
                        {totalPages > 1 && (
                            <Flex gap={8} justify="center" className="pt-4">
                                {Array.from({ length: totalPages }, (_, i) => {
                                    const pageNum = i + 1;
                                    const isActive = page === pageNum;
                                    return (
                                        <Link
                                            key={pageNum}
                                            to={pageNum === 1 ? '/' : `/?page=${pageNum}`}
                                            className={`w-9 h-9 rounded-lg text-[14px] font-medium transition-colors flex items-center justify-center
                                                ${
                                                    isActive
                                                        ? 'bg-[#14213D] text-white'
                                                        : 'text-[#64748B] hover:bg-[#F3F6FA]'
                                                }`}
                                        >
                                            {pageNum}
                                        </Link>
                                    );
                                })}
                            </Flex>
                        )}
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
