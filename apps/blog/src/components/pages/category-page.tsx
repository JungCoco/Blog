import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Container, Stack, Center } from '@repo/design-system/components/layout';

interface CategoryPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    created_at: string;
}

interface CategoryInfo {
    id: number;
    category_name: string;
    slug: string;
}

export default function CategoryPage() {
    const { category } = useParams<{ category: string }>();
    const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function fetchCategoryAndPosts() {
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

            // 대분류에 속하는 중분류 카테고리 id 목록 조회
            const { data: subCategories } = await supabase
                .from('categories')
                .select('id')
                .eq('parent_id', cat.id)
                .eq('is_active', true);

            // 대분류 자체 + 중분류 id들을 합쳐서 조회
            const categoryIds = [cat.id, ...(subCategories || []).map((sc) => sc.id)];

            const { data: postData } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .in('category_id', categoryIds)
                .eq('is_active', true)
                .order('created_at', { ascending: false });

            setPosts(postData || []);
        }

        if (category) fetchCategoryAndPosts();
    }, [category]);

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

    if (posts.length === 0) {
        return (
            <Container>
                <Stack gap={24}>
                    <h1 className="text-[32px] leading-[44px] font-bold text-[#0B1F3B]">
                        {categoryInfo?.category_name}
                    </h1>
                    <Center minHeight={200}>
                        <span className="text-[#64748B] text-[14px] leading-[22px]">
                            아직 작성된 글이 없습니다.
                        </span>
                    </Center>
                </Stack>
            </Container>
        );
    }

    return (
        <Container>
            <Stack gap={24}>
                <Stack gap={8}>
                    <h1 className="text-[32px] leading-[44px] font-bold text-[#0B1F3B]">
                        {categoryInfo?.category_name}
                    </h1>
                    <span className="text-[#64748B] text-[13px] leading-[20px]">
                        {posts.length}개의 글
                    </span>
                </Stack>
                <Stack gap={12}>
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/${category}/${post.slug}`}
                            className="block p-[24px] border border-gray-200 rounded-[8px] hover:border-[#14213D] transition-colors"
                        >
                            <h2 className="text-[20px] leading-[32px] font-semibold text-[#0B1F3B] mb-[8px]">
                                {post.title}
                            </h2>
                            {post.description && (
                                <p className="text-[#334155] text-[15px] leading-[24px] mb-[12px]">
                                    {post.description}
                                </p>
                            )}
                            <span className="text-[13px] leading-[20px] text-[#64748B]">
                                {new Date(post.created_at).toLocaleDateString('ko-KR')}
                            </span>
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
}
