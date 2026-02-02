import { useEffect, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import ForgotPassword from "./ForgotPassword";
import { useAuth, useLogin } from "../../store/useAuth";
import { Navigate } from "react-router-dom";
import CirclesLoader from '../../components/loaders/CirclesLoader';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { handleLogin, isLoading, error } = useLogin();

  const {user, loading, checkLogin} = useAuth();
  useEffect(() => {
    checkLogin();
  },[0])

if(loading) return <CirclesLoader />
  if (user) return <Navigate to={"/"} />;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-30"></div>

        {/* Login Card */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-100/50 border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-10 pb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaLock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} action="#" className="space-y-5">
              {/* Username/Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="relative mt-2">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="Enter your email or username"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    disabled={isLoading}
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Error */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                    disabled={isLoading}
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                  <MdErrorOutline className="w-5 h-5 text-red-500 shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Forgot Password Modal */}
        {showForgotPassword && <ForgotPassword set={setShowForgotPassword} />}
      </div>
    </div>
  );
};

export default Login;
