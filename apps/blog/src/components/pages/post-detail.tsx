import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import 'highlight.js/styles/vs2015.css';
import { Container, Stack } from '@repo/design-system/components/layout';

const lowlight = createLowlight(common);

// HTML 생성용 확장 설정
const extensions = [
    StarterKit.configure({
        codeBlock: false,
    }),
    Image,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    CodeBlockLowlight.configure({
        lowlight,
    }),
];

interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: object;
    created_at: string;
}

export default function PostDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        async function fetchPost() {
            if (!slug) return;

            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) {
                console.error('글 불러오기 실패:', error);
            } else if (data) {
                setPost(data);
                // Tiptap JSON을 HTML로 변환
                const html = generateHTML(data.content, extensions);
                console.log(html);
                setHtmlContent(html);
            }
        }

        fetchPost();
    }, [slug]);

    return (
        <Container as="article" py={40} px={180}>
            {/* 헤더 */}
            <Stack gap={16} className="mb-8 pb-8 border-b border-gray-200">
                <h1 className="text-4xl font-bold">{post?.title}</h1>
                {post?.description && <p className="text-xl text-gray-600">{post?.description}</p>}
                <span className="text-sm text-gray-400">
                    {new Date(post?.created_at || '').toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </Stack>

            {/* 본문 */}
            <div className="article" dangerouslySetInnerHTML={{ __html: htmlContent }} />

            {/* 목록으로 돌아가기 */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/posts" className="text-gray-500 hover:text-gray-700 transition-colors">
                    ← 목록으로 돌아가기
                </Link>
            </div> */}
        </Container>
    );
}
