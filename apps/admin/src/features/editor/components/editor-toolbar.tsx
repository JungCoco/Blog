import type { Editor } from '@tiptap/core';
import { useEditorState } from '@tiptap/react';
import { editorSelector } from '../core/editor-selector';
import {
    Bold,
    Italic,
    Strikethrough,
    Code,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Image,
    SeparatorHorizontal,
    Code2,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
} from 'lucide-react';

export const EditorToolbar = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({
        editor,
        selector: editorSelector,
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="flex bg-gray-50 rounded-lg p-2">
            <div className="flex flex-wrap gap-1">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isBold ? 'is-active' : ''}
                    `}
                >
                    <Bold size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isItalic ? 'is-active' : ''}
                    `}
                >
                    <Italic size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isStrike ? 'is-active' : ''}
                    `}
                >
                    <Strikethrough size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isCode ? 'is-active' : ''}
                    `}
                >
                    <Code size={18} />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading1 ? 'is-active' : ''}
                    `}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading2 ? 'is-active' : ''}
                    `}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading3 ? 'is-active' : ''}
                    `}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading4 ? 'is-active' : ''}
                    `}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading5 ? 'is-active' : ''}
                    `}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isHeading6 ? 'is-active' : ''}
                    `}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isBulletList ? 'is-active' : ''}
                    `}
                >
                    <List size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isOrderedList ? 'is-active' : ''}
                    `}
                >
                    <ListOrdered size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isCodeBlock ? 'is-active' : ''}
                    `}
                >
                    <Code2 size={18} />
                </button>
                {/* 코드 블록 언어 선택 */}
                <select
                    onChange={(e) => {
                        if (e.target.value) {
                            editor.chain().focus().setCodeBlock({ language: e.target.value }).run();
                        }
                    }}
                    value={editorState.codeBlockLanguage || ''}
                    className={`
                        px-2 py-2 text-sm font-medium rounded-md border border-input 
                        bg-white text-black cursor-pointer transition-colors
                        hover:bg-accent hover:text-accent-foreground
                        ${editorState.isCodeBlock ? '' : 'opacity-50'}
                    `}
                    disabled={!editorState.isCodeBlock}
                >
                    <option value="">언어 선택</option>
                    <option value="typescript">TypeScript</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="csharp">C#</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="json">JSON</option>
                    <option value="sql">SQL</option>
                    <option value="bash">Bash</option>
                    <option value="yaml">YAML</option>
                    <option value="markdown">Markdown</option>
                </select>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isBlockquote ? 'is-active' : ''}
                    `}
                >
                    <Quote size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={`
                    flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                    rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                    cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-white text-black
                `}
                >
                    <SeparatorHorizontal size={18} />
                </button>
                {/* 정렬 버튼 */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isAlignLeft ? 'is-active' : ''}
                    `}
                >
                    <AlignLeft size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isAlignCenter ? 'is-active' : ''}
                    `}
                >
                    <AlignCenter size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isAlignRight ? 'is-active' : ''}
                    `}
                >
                    <AlignRight size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isAlignJustify ? 'is-active' : ''}
                    `}
                >
                    <AlignJustify size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editorState.canUndo}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.canUndo ? 'is-active' : ''}
                    `}
                >
                    <Undo size={18} />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editorState.canRedo}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.canRedo ? 'is-active' : ''}
                    `}
                >
                    <Redo size={18} />
                </button>
                <button
                    onClick={() => {
                        const url = window.prompt('이미지 URL을 입력하세요:');
                        if (url) {
                            editor.chain().focus().setImage({ src: url }).run();
                        }
                    }}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                    `}
                >
                    <Image size={18} />
                </button>
            </div>
        </div>
    );
};
