import { useState } from 'react';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import { EditorOptions } from './editor-options';

const bodyExtensions = [
    TextStyleKit,
    StarterKit,
    Image.configure({
        inline: false,
        allowBase64: true,
        resize: {
            enabled: true,
            directions: ['top', 'bottom', 'left', 'right'],
            minWidth: 50,
            minHeight: 50,
            alwaysPreserveAspectRatio: true,
        },
    }),
    Dropcursor,
    Placeholder.configure({
        placeholder: '본문을 입력하세요...',
    }),
];

export default function Editor() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const editor = useEditor({
        extensions: bodyExtensions,
        content: '',
        editorProps: {
            attributes: {
                class: 'tiptap',
            },
        },
    });

    return (
        <div className="flex flex-col gap-1.5 max-w-[1024px] mx-auto w-full px-6 py-10">
            {/* 본문 에디터 */}
            <div className="flex flex-col gap-1.5">
                <EditorOptions editor={editor} />
                {/* 제목 입력 */}
                <input
                    type="text"
                    className="flex w-full border rounded-lg px-5 py-4 font-semibold text-2xl"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="flex w-full border rounded-lg px-5 py-4 font-semibold text-2xl"
                    placeholder="요약문을 입력하세요 (글 목록에 표시됩니다)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                />
            </div>

            {/* 본문 입력 */}
            <div className="border overflow-hidden rounded-lg">
                <EditorContent editor={editor} className="w-full min-h-[580px]" />
            </div>

            {/* 저장 버튼 */}
            <div className="flex justify-end">
                <button
                    className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                    rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                    cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-white text-black"
                    // onClick={handleSave}
                    disabled={isSaving}
                >
                    {isSaving ? '저장 중...' : '저장하기'}
                </button>
            </div>
        </div>
    );
}
