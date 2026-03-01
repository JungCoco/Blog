import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CategoryPage, { type CategoryPost } from './category-page';

export default function Craft() {
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .eq('category', 'craft')
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
            title="Craft"
            description="아키텍처 고민, 업무 프로세스, 의사결정 과정을 공유합니다."
            posts={posts}
            loading={loading}
            basePath="/craft"
        />
    );
}
