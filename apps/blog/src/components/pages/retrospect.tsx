import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CategoryPage, { type CategoryPost } from './category-page';

export default function Retrospect() {
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .eq('category', 'retrospect')
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
            title="Retrospect"
            description="프로젝트 회고, 기술 선택 회고, 성장 기록을 남깁니다."
            posts={posts}
            loading={loading}
            basePath="/retrospect"
        />
    );
}
