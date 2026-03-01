import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Container, Stack, Flex, Center } from '@repo/design-system/components/layout';

const PAGE_SIZE = 5;

interface Post {
    id: number;
    uuid: string;
    title: string;
    description: string | null;
    thumbnail_url: string | null;
    created_at: string;
    sub_category_name: string | null;
}

interface CategoryInfo {
    id: number;
    category_name: string;
    slug: string;
}

interface SubCategory {
    id: number;
    category_name: string;
    slug: string;
}

export default function CategoryPage() {
    const { category } = useParams<{ category: string }>();
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') ?? '1');
    const activeFilter = searchParams.get('sub');

    const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [notFound, setNotFound] = useState(false);

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    useEffect(() => {
        async function fetchCategory() {
            setNotFound(false);

            const { data: cat } = await supabase
                .from('categories')
                .select('id, category_name, slug')
                .eq('slug', category)
                .is('parent_id', null)
                .eq('is_active', true)
                .single();

            if (!cat) {
                setNotFound(true);
                return;
            }

            setCategoryInfo(cat);

            const { data: subs } = await supabase
                .from('categories')
                .select('id, category_name, slug')
                .eq('parent_id', cat.id)
                .eq('is_active', true)
                .order('id');

            setSubCategories(subs ?? []);
        }

        if (category) fetchCategory();
    }, [category]);

    useEffect(() => {
        async function fetchPosts() {
            if (!categoryInfo) return;

            let categoryIds: number[];

            if (activeFilter) {
                const matched = subCategories.find((sc) => sc.slug === activeFilter);
                categoryIds = matched ? [matched.id] : [categoryInfo.id];
            } else {
                categoryIds = [categoryInfo.id, ...subCategories.map((sc) => sc.id)];
            }

            const from = (page - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;

            const { data, count } = await supabase
                .from('posts')
                .select(
                    `id, uuid, title, description, thumbnail_url, created_at,
                    categories!inner(category_name)`,
                    { count: 'exact' },
                )
                .in('category_id', categoryIds)
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .range(from, to);

            if (data) {
                setPosts(
                    data.map((p) => ({
                        id: p.id,
                        uuid: p.uuid,
                        title: p.title,
                        description: p.description,
                        thumbnail_url: p.thumbnail_url,
                        created_at: p.created_at,
                        sub_category_name:
                            (p.categories as unknown as { category_name: string })?.category_name ??
                            null,
                    })),
                );
            }

            if (count !== null) setTotalCount(count);
        }

        fetchPosts();
    }, [categoryInfo, subCategories, activeFilter, page]);

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    }

    function buildFilterUrl(subSlug: string | null, targetPage?: number) {
        const params = new URLSearchParams();
        if (subSlug) params.set('sub', subSlug);
        if (targetPage && targetPage > 1) params.set('page', String(targetPage));
        const qs = params.toString();
        return `/${category}${qs ? `?${qs}` : ''}`;
    }

    if (notFound) {
        return (
            <Center minHeight={400}>
                <Stack gap={12} align="center">
                    <span className="text-[#1F2937] text-[16px] font-medium">
                        존재하지 않는 카테고리입니다.
                    </span>
                    <Link to="/" className="text-[#14213D] text-[14px] hover:underline">
                        홈으로 돌아가기
                    </Link>
                </Stack>
            </Center>
        );
    }

    return (
        <main>
            {/* ========== 히어로: 카테고리 타이틀 ========== */}
            <Container pt={80} pb={60}>
                <Stack gap={16}>
                    <h1
                        className="font-bold text-[#0B1F3B]"
                        style={{ fontSize: '40px', lineHeight: '52px' }}
                    >
                        {categoryInfo?.category_name}
                    </h1>
                    <p className="text-[#64748B]" style={{ fontSize: '17px', lineHeight: '28px' }}>
                        {categoryInfo?.category_name} 관련 글을 모아봤습니다.
                    </p>
                </Stack>
            </Container>

            {/* 구분선 */}
            <div className="max-w-[1024px] mx-auto px-[40px]">
                <div className="h-px bg-[#E5E7EB]" />
            </div>

            {/* ========== 컨텐츠: 아티클 + 사이드바 ========== */}
            <Container pt={48}>
                <Flex gap={80} align="start">
                    {/* 아티클 목록 */}
                    <Stack gap={40} className="flex-1">
                        {posts.length === 0 ? (
                            <Center minHeight={200}>
                                <span className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
                                    아직 작성된 글이 없습니다.
                                </span>
                            </Center>
                        ) : (
                            <Stack gap={40}>
                                {posts.map((post) => (
                                    <Link
                                        key={post.id}
                                        to={`/${category}/${post.uuid}`}
                                        className="group"
                                    >
                                        <Flex gap={24} align="start">
                                            <Stack gap={12} className="flex-1">
                                                <Flex gap={8} align="center">
                                                    {post.sub_category_name && (
                                                        <span
                                                            className="text-[#14213D] font-medium"
                                                            style={{
                                                                fontSize: '13px',
                                                                lineHeight: '20px',
                                                            }}
                                                        >
                                                            {post.sub_category_name}
                                                        </span>
                                                    )}
                                                    {post.sub_category_name && (
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
                        )}

                        {/* 페이지네이션 */}
                        {totalPages > 1 && (
                            <Flex gap={8} justify="center" className="pt-4">
                                {Array.from({ length: totalPages }, (_, i) => {
                                    const pageNum = i + 1;
                                    const isActive = page === pageNum;
                                    return (
                                        <Link
                                            key={pageNum}
                                            to={buildFilterUrl(activeFilter ?? null, pageNum)}
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

                    {/* ========== 사이드바: 중분류 필터 ========== */}
                    {subCategories.length > 0 && (
                        <aside className="w-[200px] shrink-0">
                            <Stack gap={20}>
                                <h3
                                    className="font-semibold text-[#0B1F3B]"
                                    style={{ fontSize: '15px', lineHeight: '24px' }}
                                >
                                    카테고리
                                </h3>
                                <Stack gap={8}>
                                    <Link
                                        to={buildFilterUrl(null)}
                                        className={`text-[14px] leading-[22px] transition-colors
                                            ${
                                                !activeFilter
                                                    ? 'text-[#0B1F3B] font-semibold'
                                                    : 'text-[#64748B] hover:text-[#1F2937]'
                                            }`}
                                    >
                                        전체
                                    </Link>
                                    {subCategories.map((sub) => (
                                        <Link
                                            key={sub.id}
                                            to={buildFilterUrl(sub.slug)}
                                            className={`text-[14px] leading-[22px] transition-colors
                                                ${
                                                    activeFilter === sub.slug
                                                        ? 'text-[#0B1F3B] font-semibold'
                                                        : 'text-[#64748B] hover:text-[#1F2937]'
                                                }`}
                                        >
                                            {sub.category_name}
                                        </Link>
                                    ))}
                                </Stack>
                            </Stack>
                        </aside>
                    )}
                </Flex>
            </Container>
        </main>
    );
}
