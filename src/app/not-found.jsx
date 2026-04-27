import Link from 'next/link';
import React from 'react';

const NotPagePage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center px-4">
          {/* 404 নম্বর */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 dark:text-gray-700 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-32 h-32 md:w-40 md:h-40 animate-pulse text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* মেসেজ */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mt-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>

          {/* হোম বাটন */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-content rounded-lg hover:bg-primary-focus transition-all duration-200 font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>

          {/* হেল্পফুল লিংক */}
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Need help? Try these pages:</p>
            <div className="flex gap-4 justify-center mt-2">
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
              <Link href="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotPagePage;