import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAuth } from "../../store/useAuth";
import CreatePost from "../../components/gallery/CreatePost";
import { useClubById } from "../../store/useClub";

// Post component with add and display functionality
const ClubGallery = () => {
  // State for existing posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      description:
        "Just visited this beautiful beach today! The weather was perfect.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      author: "Alex Johnson",
      date: "2023-10-15",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      description:
        "Trying out this new recipe for dinner tonight. Wish me luck!",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
      author: "Sam Rivera",
      date: "2023-10-14",
      likes: 42,
      comments: 12,
    },
    {
      id: 3,
      description:
        "Just finished my morning run. Nothing better than starting the day with some exercise!",
      image: null,
      author: "Taylor Morgan",
      date: "2023-10-13",
      likes: 18,
      comments: 3,
    },
  ]);

  // Handle like post
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }),
    );
  };
  const [addPost, setAddPost] = useState(false);

  const { user } = useAuth();
  const {clubData} = useClubById();
  return (
    <div className="min-h-screen bg-linear-to-br">
      <header className="bg-white flex justify-between p-4 mb-3 rounded">
        <span className="text-2xl font-bold">Post</span>
        <button onClick={() => setAddPost(!addPost)}>
          <FaPlus />
        </button>
      </header>

      <div className="grid gap-8">
        {/* Left column - Add new post */}
        {addPost ? (
          <CreatePost clubId={clubData._id} name={user.name} />
        ) : (
          <div className="space-y-6">
            {posts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No posts yet
                </h3>
                <p className="text-gray-500">Be the first to create a post!</p>
              </div>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Post header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-bold text-gray-800">
                          {post.author}
                        </h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>

                    {/* Post description */}
                    <p className="text-gray-700 mb-4">{post.description}</p>

                    {/* Post image */}
                    {post.image && (
                      <div className="mt-4 rounded-xl overflow-hidden">
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>

                  {/* Post actions */}
                  <div className="px-6 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center text-gray-600 hover:text-red-500 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>{post.likes}</span>
                        </button>

                        <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>{post.comments}</span>
                        </button>
                      </div>

                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubGallery;
