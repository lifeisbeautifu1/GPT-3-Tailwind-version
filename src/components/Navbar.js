import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full py-8 px-12 md:px-24 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 mr-12 cursor-pointer" />
        <ul className="lg:flex items-center gap-6 text-lg font-medium hidden">
          <li className="">
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#wgpt3" className="hover:text-gray-200">
              What is GPT?
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-200">
              Open AI
            </a>
          </li>
          <li>
            <a href="#possibility" className="hover:text-gray-200">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-200">
              Library
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4 font-medium">
        <div className="hidden md:flex justify-center items-center gap-4">
          <a href="#home">Sign In</a>
          <button
            type="button"
            className="font-primary py-2 px-4 rounded bg-orange-500 hover:bg-orange-600 transition duration-200"
          >
            Sign Up
          </button>
        </div>
        <div className="relative flex justify-between items-center lg:hidden">
          {!isMenuOpen ? (
            <RiMenu3Line
              className="cursor-pointer text-2xl"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <RiCloseLine
              className="cursor-pointer text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          {isMenuOpen && (
            <div className="absolute rounded shadow w-48 top-10 right-0 bg-gray-800 text-white py-10 px-8 font-semibold">
              <ul className="flex flex-col justify-start items-end gap-4">
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#home">Home</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#wgpt3">What is GPT?</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#features">Open AI</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#possibility">Case Studies</a>
                </li>
                <li className="transition duration-200 hover:-translate-y-1">
                  <a href="#blog">Library</a>
                </li>
              </ul>
              <div className="mt-4 flex flex-col justify-start items-end gap-4 md:hidden">
                <a
                  href="#home"
                  className="transition duration-200 hover:-translate-y-1"
                >
                  Sign In
                </a>
                <button
                  type="button"
                  className="font-primary py-2 px-4 rounded bg-orange-500 hover:bg-orange-600 transition duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
