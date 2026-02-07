import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function Toolbar({ editor, set }) {
  if (!editor) return null;

  const btn =
    "px-2 py-1.5 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition";

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
      <div className="flex flex-wrap gap-1.5">
        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <strong>B</strong>
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <em>I</em>
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="line-through">S</span>
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </button>

        <button
          className={btn}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          Code
        </button>
      </div>

      <button
        onClick={() => set(false)}
        className="text-gray-400 hover:text-gray-700 transition text-sm"
        aria-label="Close editor"
      >
        ✕
      </button>
    </div>
  );
}

export default function Editor({ onSubmit, initialContent = "", set }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
  });

  const handleSubmit = () => {
    if (!editor) return;

    onSubmit?.({
      html: editor.getHTML(),
      json: editor.getJSON(),
      text: editor.getText(),
    });
  };

  if (!editor) return null;

  return (
    <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <Toolbar editor={editor} set={set} />

      <div className="prose max-w-none min-h-40 text-gray-800">
        <EditorContent editor={editor} />
      </div>

      <div className="flex justify-end mt-4 pt-3 border-t border-gray-100">
        <button
          onClick={handleSubmit}
          className="px-5 py-2 text-sm font-medium bg-black text-white rounded-md hover:opacity-90 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
