import { useState } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";
import { imageLink } from "../../store/useHelper";
import toast from "react-hot-toast";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export default function ImageUpload({ set, onUpload }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async (file) => {
    setLoading(true);
    const image = await imageLink(file);
    if(!image) toast.error('Failed to load image');
    else setPreview(image);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close */}
        <button
          onClick={() => set(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="mb-4 text-xl font-semibold">Upload Image</h2>

        {/* Upload Area */}
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6 transition hover:border-black">
          <FaUpload className="mb-2 text-2xl text-gray-500" />
          <span className="text-sm text-gray-600">
            Click to upload or drag & drop
          </span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files[0])}
          />
        </label>

        {loading && <p className="mt-3 text-sm text-blue-600">Uploading...</p>}

        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 h-40 w-full rounded-xl object-contain"
          />
        )}
        <center>
          {preview && <button disabled={loading} onClick={() => onUpload(preview, set)} className="bg-green-400 py-2 px-4 my-2 rounded hover:rounded-full">
            Upload
          </button>}
        </center>
      </div>
    </div>
  );
}
