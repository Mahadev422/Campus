import { useEffect, useRef, useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaCode,
  FaUndo,
  FaRedo,
  FaLink,
  FaUnlink,
} from "react-icons/fa";

const RichTextEditor = ({ initialValue = "", onSubmit }) => {
  const editorRef = useRef(null);
  const savedRange = useRef(null);

  const [html, setHtml] = useState(initialValue);
  const [showLink, setShowLink] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (editorRef.current && initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue]);

  const exec = (cmd, value = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
    updateHtml();
  };

  const updateHtml = () => {
    setHtml(editorRef.current?.innerHTML || "");
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRange.current = sel.getRangeAt(0);
    }
  };

  const restoreSelection = () => {
    const sel = window.getSelection();
    if (savedRange.current && sel) {
      sel.removeAllRanges();
      sel.addRange(savedRange.current);
    }
  };

  const insertLink = () => {
    if (!url) return;

    restoreSelection();
    exec(
      "insertHTML",
      `<a href="${url.startsWith("http") ? url : `https://${url}`}"
         target="_blank" rel="noopener noreferrer">${url}</a>`,
    );

    setShowLink(false);
    setUrl("");
  };

  const buttons = [
    { icon: FaBold, action: () => exec("bold") },
    { icon: FaItalic, action: () => exec("italic") },
    { icon: FaUnderline, action: () => exec("underline") },
    { icon: FaListUl, action: () => exec("insertUnorderedList") },
    { icon: FaListOl, action: () => exec("insertOrderedList") },
    { icon: FaCode, action: () => exec("formatBlock", "pre") },
    {
      icon: FaLink,
      action: () => {
        saveSelection();
        setShowLink(true);
      },
    },
    { icon: FaUnlink, action: () => exec("unlink") },
    { icon: FaUndo, action: () => exec("undo") },
    { icon: FaRedo, action: () => exec("redo") },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-100">
        {buttons.map((b, i) => (
          <button
            key={i}
            type="button"
            onClick={b.action}
            className="p-2 rounded hover:bg-gray-200"
          >
            <b.icon size={16} />
          </button>
        ))}

        <select
          className="ml-2 border rounded px-2"
          onChange={(e) => exec("formatBlock", e.target.value)}
        >
          <option value="p">Paragraph</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
        </select>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={updateHtml}
        className="min-h-55 p-4 outline-none prose max-w-none"
      />

      {/* Footer */}
      <div className="flex justify-between items-center p-3 border-t bg-gray-50">
        <span className="text-sm text-gray-500">
          {html.replace(/<[^>]*>/g, "").length} characters
        </span>
        <button
          onClick={() => onSubmit?.(html)}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Submit
        </button>
      </div>

      {/* Link Modal */}
      {showLink && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-5 rounded w-[320px]">
            <h3 className="font-semibold mb-3">Insert Link</h3>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <div className="flex gap-2">
              <button
                onClick={insertLink}
                className="flex-1 bg-blue-600 text-white py-2 rounded"
              >
                Insert
              </button>
              <button
                onClick={() => setShowLink(false)}
                className="flex-1 bg-gray-200 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Styles */}
      <style>
        {`
          .prose ul { list-style: disc; padding-left: 1.5rem; }
          .prose ol { list-style: decimal; padding-left: 1.5rem; }
          .prose pre {
            background:#f5f5f5;
            padding:1rem;
            border-radius:6px;
            overflow:auto;
          }
          .prose a {
            color:#2563eb;
            text-decoration:underline;
          }
        `}
      </style>
    </div>
  );
};

export default RichTextEditor;
