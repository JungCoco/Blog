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
    Code2,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Palette,
} from 'lucide-react';

// 색상 팔레트 (디자인 룰 기반 + 기본 색상)
const COLOR_PALETTE = [
    { name: '기본', value: '#1F2937' },
    { name: '빨강', value: '#EF4444' },
    { name: '주황', value: '#F97316' },
    { name: '노랑', value: '#EAB308' },
    { name: '초록', value: '#22C55E' },
    { name: '파랑', value: '#3B82F6' },
    { name: '보라', value: '#8B5CF6' },
    { name: '회색', value: '#64748B' },
];

const Separator = () => <div className="w-px h-6 bg-gray-300 mx-1 self-center" />;

const ToolbarButton = ({
    onClick,
    disabled,
    isActive,
    children,
}: {
    onClick: () => void;
    disabled?: boolean;
    isActive?: boolean;
    children: React.ReactNode;
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
            rounded-[8px] border border-gray-200 hover:bg-gray-100
            cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 
            whitespace-nowrap bg-white text-[#1F2937]
            ${isActive ? 'bg-gray-200' : ''}
        `}
    >
        {children}
    </button>
);

export const EditorToolbar = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({
        editor,
        selector: editorSelector,
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="flex max-w-[1024px] mx-auto w-full bg-[#F3F6FA] rounded-[8px] p-2">
            <div className="flex flex-wrap gap-1 items-center">
                {/* 텍스트 서식: Bold, Italic, Strike, Code */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    isActive={editorState.isBold}
                >
                    <Bold size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    isActive={editorState.isItalic}
                >
                    <Italic size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    isActive={editorState.isStrike}
                >
                    <Strikethrough size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    isActive={editorState.isCode}
                >
                    <Code size={18} />
                </ToolbarButton>

                {/* 텍스트 색상 */}
                <div className="relative group">
                    <button
                        className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium 
                            rounded-[8px] border border-gray-200 hover:bg-gray-100
                            cursor-pointer transition-colors bg-white text-[#1F2937]"
                    >
                        <Palette size={18} />
                    </button>
                    <div className="absolute top-full left-0 mt-1 hidden group-hover:flex flex-wrap gap-1 p-2 bg-white rounded-[8px] shadow-lg border border-gray-200 w-[140px] z-10">
                        {COLOR_PALETTE.map((color) => (
                            <button
                                key={color.value}
                                onClick={() => editor.chain().focus().setColor(color.value).run()}
                                className="w-6 h-6 rounded-[4px] border border-gray-200 hover:scale-110 transition-transform"
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                            />
                        ))}
                        <button
                            onClick={() => editor.chain().focus().unsetColor().run()}
                            className="w-full mt-1 px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-[4px]"
                        >
                            색상 제거
                        </button>
                    </div>
                </div>

                <Separator />

                {/* 제목: H1 ~ H4 */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={editorState.isHeading1}
                >
                    H1
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editorState.isHeading2}
                >
                    H2
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editorState.isHeading3}
                >
                    H3
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    isActive={editorState.isHeading4}
                >
                    H4
                </ToolbarButton>

                <Separator />

                {/* 리스트 & 블록: BulletList, OrderedList, CodeBlock, Blockquote, HR */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editorState.isBulletList}
                >
                    <List size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editorState.isOrderedList}
                >
                    <ListOrdered size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    isActive={editorState.isCodeBlock}
                >
                    <Code2 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={editorState.isBlockquote}
                >
                    <Quote size={18} />
                </ToolbarButton>
                {/* <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <SeparatorHorizontal size={18} />
                </ToolbarButton> */}

                <Separator />

                {/* 정렬: Left, Center, Right, Justify */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    isActive={editorState.isAlignLeft}
                >
                    <AlignLeft size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    isActive={editorState.isAlignCenter}
                >
                    <AlignCenter size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    isActive={editorState.isAlignRight}
                >
                    <AlignRight size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    isActive={editorState.isAlignJustify}
                >
                    <AlignJustify size={18} />
                </ToolbarButton>

                <Separator />

                {/* 히스토리: Undo, Redo */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editorState.canUndo}
                >
                    <Undo size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editorState.canRedo}
                >
                    <Redo size={18} />
                </ToolbarButton>

                <Separator />

                {/* 미디어: Image */}
                <ToolbarButton
                    onClick={() => {
                        const url = window.prompt('이미지 URL을 입력하세요:');
                        if (url) {
                            editor.chain().focus().setImage({ src: url }).run();
                        }
                    }}
                >
                    <Image size={18} />
                </ToolbarButton>
            </div>
        </div>
    );
};
