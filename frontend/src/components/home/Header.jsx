import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const Header = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const path = useLocation().pathname.split('/')[1];

  const navItems = [
    "Resources",
    "Events",
    "Clubs",
    user ? user.name[0] : "Login",
  ];

  return (
    <header className="bg-linear-to-r from-gray-900 to-gray-800 text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold tracking-tight"
            >
              UniConnect
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.length === 1 ? "/profile" : `/${item.toLowerCase()}`}
                className={`${path === `${item.toLowerCase()}` || (item.length === 1 && path === "profile") ? "bg-blue-400" : "bg-blue-100"} text-black flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-300 active:scale-95`}
              >
                <span className="font-semibold text-sm lg:text-base">
                  {item}
                </span>
                {item === "Login" && (
                  <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        <div
          className={`md:hidden fixed right-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.length === 1 ? "profile" : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${path === `${item.toLowerCase()}` || (item.length === 1 && path === "profile") ? "bg-blue-400" : "bg-blue-100"} text-black flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-300 active:scale-95`}
              >
                <span className="font-semibold">{item}</span>
                {item === "Login" && (
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
