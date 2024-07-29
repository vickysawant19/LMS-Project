import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBook,
  FaUserCircle,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-10 top-0 px-4 py-2 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-700 rounded-full transition-colors duration-300 p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="text-white text-2xl">LMS</div>
          </div>
          <div className="text-white flex items-center gap-4">
            <FaUserCircle size={24} />
            {/* Add other profile options here if needed */}
          </div>
        </div>
      </nav>

      <div
        className={`h-screen fixed  top-14 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:-translate-x-48"
        }`}
      >
        <div
          className={`bg-gray-800 w-64 h-full shadow-lg  flex flex-col ${
            isOpen ? "p-4" : ""
          }`}
        >
          <ul className={`${isOpen ? "space-y-4" : ""}`}>
            <li>
              <Link
                to="/"
                className={`text-white flex items-center rounded-md gap-2 text-xl space-x-2  ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaHome />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`text-white flex items-center  space-x-2  rounded-md gap-2 text-xl ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaSignInAlt />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>Login</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={`text-white flex items-center  space-x-2  rounded-md gap-2 text-xl ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaUserPlus />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>Signup</span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`text-white flex items-center  space-x-2  rounded-md gap-2 text-xl ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaBook />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/assignments"
                className={`text-white flex   space-x-2  rounded-md gap-2 text-xl ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaClipboardList />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>
                  Assignments
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-white flex items-center gap-2  space-x-2  rounded-md text-xl ${
                  isOpen ? "hover:bg-gray-700 p-2" : "justify-end p-3"
                }`}
              >
                <div
                  className={`${
                    isOpen
                      ? ""
                      : "text-white text-2xl p-2 hover:bg-gray-600 rounded-full"
                  }`}
                >
                  <FaEnvelope />
                </div>
                <span className={`${isOpen ? "" : "md:hidden"}`}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
