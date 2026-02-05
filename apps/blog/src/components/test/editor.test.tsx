// src/Tiptap.tsx
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'

function Toolbar({ editor }: { editor: any }) {
  if (!editor) return null

  const btnBase =
    'inline-flex items-center justify-center rounded-md border px-2 py-1 text-sm leading-none transition hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent'

  const isActive = (active: boolean) =>
    active ? ' bg-gray-900 text-white hover:bg-gray-800 border-gray-900' : ''

  return (
    <div className="flex flex-wrap items-center gap-2 border-b bg-white px-3 py-2 sticky top-0 z-10">
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('bold'))}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        aria-label="Bold"
      >
        B
      </button>
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('italic'))}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        aria-label="Italic"
      >
        I
      </button>
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('strike'))}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        aria-label="Strike"
      >
        S
      </button>

      <span className="mx-1 h-5 w-px bg-gray-200" />

      <button
        type="button"
        className={btnBase + isActive(editor.isActive('heading', { level: 1 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        aria-label="Heading 1"
      >
        H1
      </button>
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('heading', { level: 2 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-label="Heading 2"
      >
        H2
      </button>

      <span className="mx-1 h-5 w-px bg-gray-200" />

      <button
        type="button"
        className={btnBase + isActive(editor.isActive('bulletList'))}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        aria-label="Bullet list"
      >
        • List
      </button>
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('orderedList'))}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        aria-label="Ordered list"
      >
        1. List
      </button>

      <span className="mx-1 h-5 w-px bg-gray-200" />

      <button
        type="button"
        className={btnBase + isActive(editor.isActive('blockquote'))}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        aria-label="Blockquote"
      >
        ❝
      </button>
      <button
        type="button"
        className={btnBase + isActive(editor.isActive('codeBlock'))}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        aria-label="Code block"
      >
        {'</>'}
      </button>

      <span className="mx-1 h-5 w-px bg-gray-200" />

      <button
        type="button"
        className={btnBase}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        aria-label="Undo"
      >
        ↶
      </button>
      <button
        type="button"
        className={btnBase}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        aria-label="Redo"
      >
        ↷
      </button>

      <span className="flex-1" />

      <button
        type="button"
        className={btnBase}
        onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
        aria-label="Clear formatting"
      >
        Clear
      </button>
    </div>
  )
}

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose lg:prose-lg focus:outline-none max-w-none min-h-[320px] px-4 py-4',
      },
    },
  })

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl w-full mx-auto px-4">
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <Toolbar editor={editor} />

          {/* Selection-based mini toolbar */}
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 150 }}
            className="flex items-center gap-1 rounded-lg border bg-white p-1 shadow"
          >
            <button
              type="button"
              className={
                'rounded-md px-2 py-1 text-sm hover:bg-gray-100' +
                (editor?.isActive('bold') ? ' bg-gray-900 text-white hover:bg-gray-800' : '')
              }
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              B
            </button>
            <button
              type="button"
              className={
                'rounded-md px-2 py-1 text-sm hover:bg-gray-100' +
                (editor?.isActive('italic') ? ' bg-gray-900 text-white hover:bg-gray-800' : '')
              }
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              I
            </button>
            <button
              type="button"
              className={
                'rounded-md px-2 py-1 text-sm hover:bg-gray-100' +
                (editor?.isActive('strike') ? ' bg-gray-900 text-white hover:bg-gray-800' : '')
              }
              onClick={() => editor?.chain().focus().toggleStrike().run()}
            >
              S
            </button>
          </BubbleMenu>

          {/* Empty-line quick actions */}
          <FloatingMenu
            editor={editor}
            tippyOptions={{ duration: 150 }}
            className="flex items-center gap-1 rounded-lg border bg-white p-1 shadow"
          >
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm hover:bg-gray-100"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
            >
              H2
            </button>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm hover:bg-gray-100"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
            >
              • List
            </button>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm hover:bg-gray-100"
              onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            >
              {'</>'}
            </button>
          </FloatingMenu>

          <div className="bg-white">
            <EditorContent editor={editor} />
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          단축키: Cmd/Ctrl + B(굵게), Cmd/Ctrl + I(기울임), Cmd/Ctrl + Z(되돌리기)
        </p>
      </div>
    </div>
  )
}

export default Tiptap