import { FloatingMenu as EditorFloatingMenu } from '@tiptap/react/menus'
import { editor } from '../core/editor-instance'    

export default function FloatingMenu() {
    return (
        <EditorFloatingMenu editor={editor}>
            <div className="floating-menu" data-testid="floating-menu">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                Bullet list
                </button>
            </div>
        </EditorFloatingMenu>
    )
}