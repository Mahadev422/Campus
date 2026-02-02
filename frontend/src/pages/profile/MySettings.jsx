import React, { useState } from 'react';
import { 
  FaSignOutAlt,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaEdit,
  FaSave,
  FaTimes,
  FaDownload,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { useLogout } from '../../store/useAuth';


const MySettings = () => {
  const {handleLogout} = useLogout();
  // State for social media links
  const [socialLinks, setSocialLinks] = useState({
    twitter: 'https://twitter.com/username',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    instagram: 'https://instagram.com/username',
    youtube: '',
    facebook: '',
    website: 'https://myportfolio.com'
  });



  // State for editing mode
  const [editingSocial, setEditingSocial] = useState(false);

  // Handle social media link changes
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      
      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Right Column - Settings Content */}
          <div className="lg:w-3/4">
            {/* Account Settings Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <FaSave className="w-5 h-5" />
                </button>
              </div>

              {/* Social Media Links Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FaLink className="w-5 h-5 text-blue-600" />
                    Social Media Links
                  </h3>
                  <button
                    onClick={() => setEditingSocial(!editingSocial)}
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    {editingSocial ? <FaTimes className="w-4 h-4" /> : <FaEdit className="w-4 h-4" />}
                    <span>{editingSocial ? 'Cancel' : 'Edit Links'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Twitter */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaTwitter className="w-5 h-5 text-blue-400" />
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={socialLinks.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://twitter.com/username"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaLinkedin className="w-5 h-5 text-blue-700" />
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  {/* GitHub */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaGithub className="w-5 h-5 text-gray-800" />
                      GitHub
                    </label>
                    <input
                      type="url"
                      value={socialLinks.github}
                      onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://github.com/username"
                    />
                  </div>

                  {/* Instagram */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaInstagram className="w-5 h-5 text-pink-600" />
                      Instagram
                    </label>
                    <input
                      type="url"
                      value={socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://instagram.com/username"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaGlobe className="w-5 h-5 text-green-600" />
                      Personal Website
                    </label>
                    <input
                      type="url"
                      value={socialLinks.website}
                      onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://myportfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                  Account Actions
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Download Your Data</div>
                      <div className="text-sm text-gray-600">Get a copy of your data</div>
                    </div>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Logout</div>
                      <div className="text-sm text-gray-600">Sign out from your account</div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;