import { TextStyleKit } from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlock from '@tiptap/extension-code-block';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';

const lowlight = createLowlight(common);

/**
 * 에디터 확장 모음
 */
export const extensions = [
    // 텍스트 스타일 확장 (색상, 폰트 크기, 폰트 패밀리 등)
    TextStyleKit,

    // 기본 확장 모음 (Bold, Italic, Strike, Code, Heading, BulletList, OrderedList, Blockquote, CodeBlock, HorizontalRule, HardBreak, History 등)
    StarterKit,

    // 이미지 삽입 및 리사이즈 기능
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

    // 드래그 앤 드롭 시 커서 표시
    Dropcursor,

    // 빈 에디터에 플레이스홀더 텍스트 표시
    Placeholder.configure({
        placeholder: '본문을 입력하세요...',
    }),

    // 텍스트 정렬 기능
    TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'left',
    }),

    CodeBlock.configure({
        languageClassPrefix: 'language-',
        defaultLanguage: 'typescript',
    }),

    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'typescript',
    }),
];
