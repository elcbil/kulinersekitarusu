import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-transparent p-4 absolute top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center mt-10">        
        <div className="space-x-10 text-2xl ml-30">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/explore" className="text-white hover:text-gray-300">Explore</Link>
          <Link to="/review" className="text-white hover:text-gray-300">Review</Link>
        </div>
        <h1 className="text-white text-2xl font-bold mr-30">KulinerSekitarUSU</h1>
      </div>
    </nav>
  );
}

export default Navbar;