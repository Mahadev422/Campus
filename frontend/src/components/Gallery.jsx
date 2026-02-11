import React, { useState, useRef } from 'react';

// Post component with add and display functionality
const Gallery = () => {
  // State for new post form
  const [newPost, setNewPost] = useState({
    description: '',
    image: null,
    imagePreview: null,
    author: '',
  });
  
  // State for existing posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: 'Just visited this beautiful beach today! The weather was perfect.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      author: 'Alex Johnson',
      date: '2023-10-15',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      description: 'Trying out this new recipe for dinner tonight. Wish me luck!',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
      author: 'Sam Rivera',
      date: '2023-10-14',
      likes: 42,
      comments: 12,
    },
    {
      id: 3,
      description: 'Just finished my morning run. Nothing better than starting the day with some exercise!',
      image: null,
      author: 'Taylor Morgan',
      date: '2023-10-13',
      likes: 18,
      comments: 3,
    },
  ]);
  
  // State for form validation
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Ref for file input
  const fileInputRef = useRef(null);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          image: 'Please select a valid image file (JPEG, PNG, GIF)',
        });
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          image: 'Image size should be less than 5MB',
        });
        return;
      }
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      setNewPost({
        ...newPost,
        image: file,
        imagePreview: previewUrl,
      });
      
      // Clear image error
      if (errors.image) {
        setErrors({
          ...errors,
          image: '',
        });
      }
    }
  };
  
  // Remove selected image
  const removeImage = () => {
    setNewPost({
      ...newPost,
      image: null,
      imagePreview: null,
    });
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!newPost.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!newPost.author.trim()) {
      newErrors.author = 'Your name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newPostObj = {
        id: posts.length + 1,
        description: newPost.description,
        image: newPost.imagePreview,
        author: newPost.author,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0,
      };
      
      // Add new post to the beginning of posts array
      setPosts([newPostObj, ...posts]);
      
      // Reset form
      setNewPost({
        description: '',
        image: null,
        imagePreview: null,
        author: '',
      });
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      setErrors({});
      setIsSubmitting(false);
      
      // Show success message
      alert('Post published successfully!');
    }, 800);
  };
  
  // Handle like post
  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };
  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Social Feed
          </h1>
          <p className="text-gray-600">
            Share your thoughts, images, and experiences with the community
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Add new post */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                Create New Post
              </h2>
              
              <form onSubmit={handleSubmit}>
                {/* Author name field */}
                <div className="mb-6">
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={newPost.author}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.author ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                    placeholder="Enter your name"
                  />
                  {errors.author && (
                    <p className="mt-2 text-sm text-red-600">{errors.author}</p>
                  )}
                </div>
                
                {/* Description field */}
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newPost.description}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none`}
                    placeholder="What's on your mind?"
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>
                
                {/* Image upload section */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Image (Optional)
                  </label>
                  
                  {/* Image preview */}
                  {newPost.imagePreview && (
                    <div className="mb-4 relative">
                      <div className="relative h-48 w-full rounded-xl overflow-hidden">
                        <img 
                          src={newPost.imagePreview} 
                          alt="Preview" 
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 text-center">
                        Click the remove button to delete this image
                      </p>
                    </div>
                  )}
                  
                  {/* File upload area */}
                  {!newPost.imagePreview && (
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-blue-400 transition cursor-pointer">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                    </div>
                  )}
                  
                  {errors.image && (
                    <p className="mt-2 text-sm text-red-600">{errors.image}</p>
                  )}
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </div>
                  ) : (
                    'Publish Post'
                  )}
                </button>
              </form>
              
              {/* Tips */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Tips for a great post:
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add a clear description of what you're sharing</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use high-quality images for better engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Be respectful and considerate in your posts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right column - Posts feed */}
          <div className="lg:w-3/5">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Posts
              <span className="ml-2 text-sm font-normal bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {posts.length} posts
              </span>
            </h2>
            
            {/* Posts list */}
            <div className="space-y-6">
              {posts.length === 0 ? (
                <div className="bg-white rounded-2xl shadow p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No posts yet</h3>
                  <p className="text-gray-500">Be the first to create a post!</p>
                </div>
              ) : (
                posts.map(post => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Post header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-gray-800">{post.author}</h3>
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                          
                          <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{post.comments}</span>
                          </button>
                        </div>
                        
                        <button className="text-gray-500 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            This is a React component built with Tailwind CSS. All posts are stored in browser memory and will reset on page refresh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;