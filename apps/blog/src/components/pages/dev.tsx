import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CategoryPage, { type CategoryPost } from './category-page';

export default function Dev() {
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .eq('category', 'dev')
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
            title="Dev"
            description="기술 구현기, 트러블슈팅, 디자인 시스템, 네트워크 등 개발 과정을 기록합니다."
            posts={posts}
            loading={loading}
            basePath="/development"
        />
    );
}
