import { Link } from 'react-router-dom';
import { Container, Stack, Center } from '@repo/design-system/components/layout';

export interface CategoryPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    created_at: string;
}

interface CategoryPageProps {
    title: string;
    description?: string;
    posts: CategoryPost[];
    loading: boolean;
    basePath: string;
}

export default function CategoryPage({ title, description, posts, basePath }: CategoryPageProps) {
    if (posts.length === 0) {
        return (
            <Container>
                <Stack gap={24}>
                    <Stack gap={8}>
                        <h1 className="text-[32px] leading-[44px] font-bold text-[#0B1F3B]">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-[#64748B] text-[15px] leading-[24px]">
                                {description}
                            </p>
                        )}
                    </Stack>
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
                    <h1 className="text-[32px] leading-[44px] font-bold text-[#0B1F3B]">{title}</h1>
                    {description && (
                        <p className="text-[#64748B] text-[15px] leading-[24px]">{description}</p>
                    )}
                    <span className="text-[#64748B] text-[13px] leading-[20px]">
                        {posts.length}개의 글
                    </span>
                </Stack>
                <Stack gap={12}>
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`${basePath}/${post.slug}`}
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
