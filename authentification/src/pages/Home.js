import React, { useState } from 'react'
import Nav from '../components/Nav'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <a href="/">MyShop</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300 transition duration-200">Home</a></li>
            <li><a href="/products" className="hover:text-gray-300 transition duration-200">Products</a></li>
            <li><a href="/categories" className="hover:text-gray-300 transition duration-200">Categories</a></li>
          </ul>
          <ul className="flex space-x-4 items-center border-l border-gray-700 pl-6">
            <li><a href="/search" className="hover:text-gray-300 transition duration-200">Search</a></li>
            <li><a href="/cart" className="hover:text-gray-300 transition duration-200">Cart</a></li>
            <li><a href="/account" className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition duration-200">Account</a></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="/" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Home</a></li>
            <li><a href="/products" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Products</a></li>
            <li><a href="/categories" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Categories</a></li>
          </ul>
          <ul className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-700">
            <li><a href="/search" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Search</a></li>
            <li><a href="/cart" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Cart</a></li>
            <li><a href="/account" className="block px-2 py-1 hover:bg-gray-700 rounded transition duration-200">Account</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Home
