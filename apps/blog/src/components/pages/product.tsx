import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CategoryPage, { type CategoryPost } from './category-page';

export default function Product() {
    const [posts, setPosts] = useState<CategoryPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, description, created_at')
                .eq('category', 'product')
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
            title="Product"
            description="제품과 서비스를 만들며 고민한 것들을 공유합니다."
            posts={posts}
            loading={loading}
            basePath="/product"
        />
    );
}
