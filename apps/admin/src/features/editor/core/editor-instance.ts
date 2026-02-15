import { useEditor } from '@tiptap/react';
import { extensions } from '../core/editor-extenstion';

// 에디터 훅 - 컴포넌트 내부에서 호출해야 함
export function useEditorInstance() {
    return useEditor({
        extensions: extensions,
        content: '',
        // 에디터 컨테이너 스타일 적용
        editorProps: {
            attributes: {
                class: 'min-h-[580px] outline-none',
            },
        },
    });
}
