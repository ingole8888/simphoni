import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ item }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trendingSearches, setTrendingSearches] = useState([]);

  console.log(item)
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
      <Navbar />
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
      <div className="flex">
        <div className="w-1/2">
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4">
              {/* Your product details */}
              <div className="h-1/2">
                <img src="data:image/jpeg;base64,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" alt='' className="w-full h-full object-cover" />

              </div>
              <div className="flex-none h-1/3 mb-2">
                <p className="text-lg font-bold mb-2">{item.name}</p>
                <p>{item.sku}</p>
                <h4 className="text-l font-bold mb-2">${item.pricing.customerPrice.unitPrice.value}/each</h4>
                <p className="text-sm font-bold mb-2 text-teal-500">Saving : {item.customer_reviews.average_rating_value}%</p>
                <p className="text-sm font-bold mb-2">Supplier : {item.manufacturer.name}</p>
                {item.shipping.messages && item.shipping.messages.length > 1 ? (
                  <p className="text-sm font-bold mb-2">{item.shipping.messages[1].text}</p>
                ) : (
                  <p className="text-sm font-bold mb-2">NA</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails