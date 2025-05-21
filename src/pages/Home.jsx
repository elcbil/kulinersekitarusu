import React from 'react';
import { Link } from 'react-router-dom';  // Menggunakan Link dari React Router untuk navigasi

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Selamat Datang di Culinary Explorer</h1>

      {/* Deskripsi Aplikasi */}
      <p className="text-xl text-center text-gray-700 mb-6">
        Temukan tempat makan terbaik, jelajahi menu yang menarik, dan berikan ulasan untuk membantu orang lain menemukan pilihan makan yang sempurna!
      </p>

      {/* Tombol Navigasi */}
      <div className="flex justify-center space-x-4">
        {/* Tombol untuk menuju halaman Explore */}
        <Link to="/explore">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Cari Tempat Makan
          </button>
        </Link>

        {/* Tombol untuk menuju halaman Feedback */}
        <Link to="/feedback">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
            Berikan Ulasan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
