import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10 pl-20 w-full -z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; 2024 LMS. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">Designed by Vitthal Sawant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
