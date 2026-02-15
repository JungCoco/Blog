import { useState } from 'react';
import { EditorContent } from '@tiptap/react';
import '../core/style.css';
import { EditorToolbar } from './tool-bar';
// 코드 블록 구문 강조 테마 (VS Code Dark)
import 'highlight.js/styles/vs2015.css';
import { useEditorInstance } from '../core/editor-instance';
import { supabase } from '@/lib/supabase';

export default function Editor() {
    // 제목, 요약문은 에디터 내에서만 사용되는 상태이므로 로컬 상태로 관리
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const editor = useEditorInstance();

    async function handleSave() {
        if (!editor || !title.trim()) {
            alert('제목을 입력해주세요.');
            return;
        }

        setIsSaving(true);

        try {
            // slug 생성: 제목을 URL-safe하게 변환
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9가-힣\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim();

            const { data, error } = await supabase
                .from('posts')
                .insert({
                    title,
                    category_id: 1,
                    slug: `${slug}-${Date.now()}`, // 중복 방지를 위해 timestamp 추가
                    description,
                    content: editor.getJSON(),
                })
                .select();

            if (error) {
                console.error('저장 실패:', error);
                alert(`저장 실패: ${error.message}`);
                return;
            }

            console.log('저장 성공:', data);
            alert('글이 저장되었습니다!');
        } catch (err) {
            console.error('저장 중 오류:', err);
            alert('저장 중 오류가 발생했습니다.');
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className="flex flex-col gap-1.5 max-w-[1024px] mx-auto w-full px-5 py-10">
            {/* 본문 에디터 */}
            <div className="flex flex-col gap-1.5 mt-4">
                <EditorToolbar editor={editor} />
                {/* 제목 입력 */}
                <input
                    type="text"
                    className="flex w-full border-b border-gray-200 p-4 font-semibold text-2xl shadow-none focus:outline-none"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name="description"
                    className="flex w-full border rounded-lg p-4 text-md"
                    placeholder="글을 간단히 설명할 수 있는 요약문을 입력하세요"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* 본문 입력 */}
            <div className="flex flex-col border overflow-hidden rounded-lg min-h-[580px]">
                <EditorContent editor={editor} className="prose flex-1 w-full p-4" />
            </div>

            {/* 저장 버튼 */}
            <div className="flex justify-end">
                <button
                    className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium 
                    rounded-lg cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-[#14213D] text-white hover:bg-[#14213D]/90"
                    onClick={handleSave}
                    disabled={isSaving}
                >
                    {isSaving ? '저장 중...' : '저장하기'}
                </button>
            </div>
        </div>
    );
}
