import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4 text-white flex flex-wrap justify-between items-center">
        <Link to="/" className="text-xl font-bold mb-4 md:mb-0">Your App Name</Link>
        <div className="flex">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/product-listing" className="mx-2">Product Listing</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar