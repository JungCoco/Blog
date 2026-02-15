import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    created_at: string;
}

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('글 목록 불러오기 실패:', error);
            } else {
                setPosts(data || []);
            }
            setLoading(false);
        }

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="text-gray-500">로딩 중...</span>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="text-gray-500">아직 작성된 글이 없습니다.</span>
            </div>
        );
    }

    return (
        <div className="max-w-[1024px] mx-auto w-full px-5 py-10">
            <h1 className="text-3xl font-bold mb-8">Posts</h1>
            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/posts/${post.slug}`}
                        className="block p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
                    >
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        {post.description && (
                            <p className="text-gray-600 mb-3">{post.description}</p>
                        )}
                        <span className="text-sm text-gray-400">
                            {new Date(post.created_at).toLocaleDateString('ko-KR')}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
