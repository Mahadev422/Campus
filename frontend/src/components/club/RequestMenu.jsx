import { useState, useRef, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function RequestMenu({ options = ['Accept', 'Reject'] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleClick = (opt) => {
    console.log(opt);
  }
  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Three dot button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full p-2 hover:bg-gray-200 transition"
      >
        <FiMoreVertical className="text-lg" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg overflow-hidden bg-white shadow-lg border z-50">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleClick(opt);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
            >
              {opt.icon && <span>{opt}</span>}
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
