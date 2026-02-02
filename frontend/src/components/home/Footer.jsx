import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FaGraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">UniConnect</span>
          </div>

          <div className="flex space-x-6">
            {["About", "Features", "Contact", "Privacy", "Terms"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © 2024 UniConnect. All rights reserved. Made with ❤️ for students
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
