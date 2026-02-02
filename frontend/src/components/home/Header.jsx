import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/useAuth';

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="bg-linear-to-r overflow-auto no-scroll from-gray-900 to-gray-800 text-white">
      <div className="px-2 py-1">
        <div className="flex items-center justify-between py-2">
          
          {/* Left side - Icon/Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <Link to='/' className="text-2xl font-bold tracking-tight">
              UniConnect
            </Link>
          </div>

          {/* Right side - Navigation Tabs */}
          <nav className="flex items-center justify-evenly gap-3">
            {['Resources', 'Events', 'Clubs', (user) ? user.name[0] : 'Login'].map((item, i) => (
              <Link
                key={i}
                to={(item.length == 1) ? 'profile' : item.toLowerCase()}
                className={`bg-gray-100 text-black
                  group flex items-center px-2 py-1 rounded
                  transition-all duration-300 hover:bg-gray-400`}
              >
                <span className="font-semibold px-1">{item}</span>
                {item === 'Login' && (
                  <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
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