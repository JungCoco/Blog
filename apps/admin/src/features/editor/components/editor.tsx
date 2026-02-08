import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { extensions } from '../core/editor-extenstion';
import '../core/style.css';
import { EditorToolbar } from './editor-toolbar';
// 코드 블록 구문 강조 테마 (VS Code Dark)
import 'highlight.js/styles/vs2015.css';

export default function Editor() {
    // 제목, 요약문은 에디터 내에서만 사용되는 상태이므로 로컬 상태로 관리
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // 에디터 인스턴스 생성
    const editor = useEditor({
        extensions: extensions,
        content: '',
        // 에디터 컨테이너 스타일 적용
        editorProps: {
            attributes: {
                class: 'min-h-[580px] outline-none',
            },
        },
    });

    return (
        <div className="flex flex-col gap-1.5 max-w-[1024px] mx-auto w-full px-5 py-10">
            {/* 본문 에디터 */}
            <div className="flex flex-col gap-1.5">
                <EditorToolbar editor={editor} />
                {/* 제목 입력 */}
                <input
                    type="text"
                    className="flex w-full border rounded-lg p-4 font-semibold text-2xl"
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
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                    rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                    cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-white text-black"
                    onClick={() => {
                        console.log(editor?.getJSON());
                    }}
                >
                    저장하기
                </button>
            </div>
        </div>
    );
}
