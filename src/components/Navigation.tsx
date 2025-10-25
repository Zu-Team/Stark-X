'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import StyledButton from './StyledButton';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Stark X Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Stark X</h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium border-b-2 border-blue-600"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side - Theme toggle and User section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">User</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Log In
                </button>
                <button className="relative group overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-[2px] rounded-full">
                  <div className="relative bg-white dark:bg-gray-900 rounded-full px-6 py-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 group-hover:scale-105">
                    <span className="relative z-10">Sign Up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Sign Up
                    </span>
                  </div>
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a
                href="#"
                className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium border-b-2 border-blue-600"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
