import type { Editor } from '@tiptap/core';
import { useEditorState } from '@tiptap/react';
import { menuBarStateSelector } from './options-state';

export const EditorOptions = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
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
                    Bold
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
                    Italic
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
                    Strike
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
                    Code
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.canClearMarks ? 'is-active' : ''}
                    `}
                >
                    Clear marks
                </button>
                <button
                    onClick={() => editor.chain().focus().clearNodes().run()}
                    className={`
                    flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                    rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                    cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-white text-black
                    ${editorState.canClearMarks ? 'is-active' : ''}
                `}
                >
                    Clear nodes
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`
                        flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                        rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                        cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                        whitespace-nowrap bg-white text-black
                        ${editorState.isParagraph ? 'is-active' : ''}
                    `}
                >
                    Paragraph
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
                    Bullet list
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
                    Ordered list
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
                    Code block
                </button>
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
                    Blockquote
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
                    Horizontal rule
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    className={`
                    flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                    rounded-md border border-input hover:bg-accent hover:text-accent-foreground 
                    cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
                    whitespace-nowrap bg-white text-black
                `}
                >
                    Hard break
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
                    Undo
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
                    Redo
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
                    Image
                </button>
            </div>
        </div>
    );
};
