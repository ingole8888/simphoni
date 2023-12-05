import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trendingSearches, setTrendingSearches] = useState([]);

  // Other state variables as needed
  // ...

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Perform backend API call for suggestions
    // Update searchResults state
    // ...
  };

  // Function to handle search selection
  const handleSearchSelection = (selectedItem) => {
    // Navigate to the search page with the selected item
    navigate(`/search?q=${selectedItem}`);
  };

  useEffect(() => {
    // Fetch trending searches from backend API
    // Update trendingSearches state
    // ...
  }, []);
  return (
    <>
    <Navbar/>
    <div className="p-4 flex items-center">
        <div className="flex-grow mt-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
            className="p-2 w-1/2 mb-4 shadow-md"
          />
          <button
            className="bg-teal-500 text-white p-2 rounded mr-2"
            onClick={() => {
              // Handle search icon button click
              // You might want to trigger the search logic here
            }}
          >
            Search <i className="fas fa-search ml-2"></i>
          </button>
          <button
            className="border-teal-500 border rounded p-2 ml-4"
            onClick={() => {
              // Handle Upload button click
              // You might want to trigger the upload logic here
            }}
          >
            Upload
          </button>

          <select className="p-2 mx-2 shadow-md w-1/6">
            <option value="filter">Filter</option>
            {/* Add filter options as needed */}
          </select>

          <select className="p-2 mx-2 shadow-md w-1/6">
            <option value="sort">Sort By</option>
            {/* Add sorting options as needed */}
          </select>

          {/* Render search results */}
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} onClick={() => handleSearchSelection(result.name)}>
                {result.name}
              </li>
            ))}
          </ul>

          {/* Render trending searches */}
          <div>
            <p className="font-bold mb-2">Trending Searches:</p>
            {trendingSearches.map((trendingItem) => (
              <span
                key={trendingItem.id}
                onClick={() => handleSearchSelection(trendingItem.name)}
                className="cursor-pointer mr-2"
              >
                {trendingItem.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    <div>ProductDetails</div>
    </>
  )
}

export default ProductDetails