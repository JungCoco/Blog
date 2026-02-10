import { useEditor } from '@tiptap/react';
import { extensions } from '../core/editor-extenstion';

// 에디터 인스턴스 생성
export const editor = useEditor({
    extensions: extensions,
    content: '',
    // 에디터 컨테이너 스타일 적용
    editorProps: {
        attributes: {
            class: 'min-h-[580px] outline-none',
        },
    },
});