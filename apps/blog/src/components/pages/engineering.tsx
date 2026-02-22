import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CategoryPage, { type CategoryPost } from './category-page';

export default function Engineering() {
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .eq('category', 'engineering')
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

    return (
        <CategoryPage
            title="Engineering"
            description="개발하며 마주친 기술적 문제와 해결 과정을 기록합니다."
            posts={posts}
            loading={loading}
            basePath="/engineering"
        />
    );
}
