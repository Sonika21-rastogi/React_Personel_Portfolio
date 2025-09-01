import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="shadow-md bg-gray-200 p-4 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          MyPortfolio
        </a>

        {/* Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-700 focus:outline-none"
        >
          {/* Open Icon */}
          <svg
            className={`w-8 h-8 ${menuOpen ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>

          {/* Close Icon */}
          <svg
            className={`w-8 h-8 ${menuOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden  lg:flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 text-xl text-dark hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 text-xl text-dark  hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="text-gray-700 text-xl text-dark hover:text-gray-500">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-700 text-xl text-dark  hover:text-gray-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 text-xl text-dark  hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 text-xl text-dark hover:text-gray-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" className="text-gray-700 text-xl text-dark hover:text-gray-500">
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white  mt-2 p-4 space-y-2 rounded-lg shadow-md lg:hidden">
          <a href="#home" className="block text-gray-700 hover:text-rose-500">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:text-gray-500">
            About
          </a>
          <a
            href="#education"
            className="block text-gray-700 hover:text-gray-500"
          >
            Education
          </a>
          <a href="#skills" className="block text-gray-700 hover:text-gray-500">
            Skills
          </a>
          <a
            href="#projects"
            className="block text-gray-700 hover:text-gray-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-500"
          >
            Contact
          </a>
          <a
            href="#resume"
            className="block text-gray-700 hover:text-blue-500"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
