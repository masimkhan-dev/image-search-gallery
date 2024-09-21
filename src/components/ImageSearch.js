import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ImageSearch = ({ setTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <label htmlFor="search" className="sr-only">
        Search for images
      </label>
      <div className="relative">
        <input
          type="text"
          id="search"
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for images..."
          className="w-full pl-4 pr-12 py-2 outline-none border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default ImageSearch;