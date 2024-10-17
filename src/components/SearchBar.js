import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/userSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setLocalSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    dispatch(setSearchQuery(query)); 
  };

  return (
    <form className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search users..."
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
