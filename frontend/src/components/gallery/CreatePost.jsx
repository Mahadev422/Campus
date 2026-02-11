import { useState } from "react";
import ShowHtml from "../home/ShowHtml";
import Editor from "../home/Editor";
import toast from "react-hot-toast";
import { imageLink } from "../../store/useHelper";
import ButtonLoader from "../loaders/ButtonLoader";
import { usePost } from "../../store/usePost";

const CreatePost = ({ name, clubId, eventId }) => {
  const [post, setPost] = useState({description: "", images: [], eventId, clubId});
  const [loading, setLoading] = useState(false);

  const {uploadPost} = usePost();

  const [edit, setEdit] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await uploadPost(post);
    if(ok) setPost({description: "", images: [], eventId, clubId});
  };

  const onSubmit = (text) => {
    setPost({...post, description: text});
    setEdit(false);
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return toast.error("Image required");

    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please select image");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    setLoading(true);
    const previewUrl = await imageLink(file);

    setPost({...post, images: [...post.images, previewUrl]});
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
        Create New Post
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Author name field */}
        <div className="mb-6" title="Not editable">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={name}
            readOnly
            className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
            placeholder="Enter your name"
          />
        </div>

        {/* Description field */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          {edit ? (
            <Editor initialValue={post.description} onSubmit={onSubmit} />
          ) : (
            <div onClick={() => setEdit(true)}>
              {" "}
              <ShowHtml htmlContent={post.description} />
            </div>
          )}
        </div>

        {/* Image upload section */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Image (Optional)
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-blue-400 transition cursor-pointer">
            {loading ? <ButtonLoader /> : <div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image-upload"
                onChange={handleImage}
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Click to upload an image
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Supports JPG, PNG, GIF (Max 5MB)
                  </p>
                </div>
              </label>
            </div>}
          </div>

          <div className="flex flex-wrap gap-4 py-6">
            {post.images.length !== 0 &&
              post.images.map((image, i) => (
                <div key={i} className="min-w-40 flex-1 relative">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt="Preview"
                      className="h-full w-full object-contain"
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`w-full cursor-pointer bg-blue-500 py-4 rounded-xl font-bold text-white transition`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
