import React from 'react';
import { Link } from 'react-router-dom';  // Mengimpor Link dari React Router

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Culinary Explorer</h1>
        <div className="space-x-4">
          {/* Menambahkan link navigasi */}
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/explore" className="text-white hover:text-gray-300">Explore</Link>
          <Link to="/feedback" className="text-white hover:text-gray-300">Feedback</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
