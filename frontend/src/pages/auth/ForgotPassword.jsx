import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useForgot } from "../../store/useAuth";

const ForgotPassword = ({set}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleForgot} = useForgot();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Reset Password</h3>
            <p className="text-gray-500 text-sm mt-1">
              Enter your email to receive a reset link
            </p>
          </div>
          <button onClick={() => set(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleForgot}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <AiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              disabled={isLoading}
              onClick={() => set(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
