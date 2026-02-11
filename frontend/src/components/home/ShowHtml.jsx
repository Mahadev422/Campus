export default function ShowHtml({ htmlContent }) {
  return (
    <div className={`rich-text-content bg-gray-100 p-4 rounded-xl`}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <style>{`
        .rich-text-content {
          line-height: 1.6;
        }
        .rich-text-content h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        .rich-text-content h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        .rich-text-content h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        .rich-text-content ul,
        .rich-text-content ol {
          margin: 1em 0;
          padding-left: 2em;
        }
        .rich-text-content ul {
          list-style-type: disc;
        }
        .rich-text-content ol {
          list-style-type: decimal;
        }
        .rich-text-content li {
          margin: 0.5em 0;
        }
        .rich-text-content pre {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 1em;
          overflow-x: auto;
          font-family: "Courier New", monospace;
          white-space: pre-wrap;
          margin: 1em 0;
        }
        .rich-text-content code {
          background-color: #f5f5f5;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: "Courier New", monospace;
          font-size: 0.9em;
        }
        .rich-text-content p {
          margin: 1em 0;
        }
        .rich-text-content strong {
          font-weight: bold;
        }
        .rich-text-content em {
          font-style: italic;
        }
        .rich-text-content u {
          text-decoration: underline;
        }
        .rich-text-content a {
          color: #3b82f6;
          text-decoration: underline;
          cursor: pointer;
          transition: all 0.2s;
        }
        .rich-text-content a:hover {
          color: #2563eb;
        }
        .rich-text-content a:visited {
          color: #7c3aed;
        }
      `}</style>
    </div>
  );
}
