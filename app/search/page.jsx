'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
    <div className="relative">
      <Image
        src="/image14.png"
        alt="SearchBar Background"
        className="rounded-0"
        width={1920}
        height={332}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[65rem] mx-auto bg-white rounded-full shadow-lg z-10">
        <div className="flex items-center w-full px-4 py-[1rem]">
          <span className="mr-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search your favorite course"
              value={searchTerm}
              onChange={handleChange}
              className={`w-[24rem] bg-transparent outline-none ${
                searchTerm ? 'text-black' : ''
              }`}
            />
          </form>
        </div>
      </div>

      <div className="absolute bottom-[3rem] left-1/2 -translate-x-1/2 mb-4">
        <div className="flex justify-center">
          <button className="px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none">
            Category
          </button>
          <button className="px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none">
            Rating
          </button>
          <button className="px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none">
            A-Z
          </button>
          <button className="px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none">
            Language
          </button>
          <button className="px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none">
            Recents
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
