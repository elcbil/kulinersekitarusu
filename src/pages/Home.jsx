import React from 'react';
import { Link } from 'react-router-dom';
import bgHome from '../assets/bg-home.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A222E]">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 34, 46, 0.7), rgba(26, 34, 46, 0.9)), url(${bgHome})`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
                <span className="text-[#C0A062]">Jelajahi</span> Kuliner <br />
                Sekitar Kampus USU
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fadeIn animation-delay-200">
                Temukan berbagai pilihan kuliner lezat dan tempat nongkrong seru
                di sekitar kampus. Dari makanan tradisional hingga modern,
                semua ada di sini!
              </p>
              <Link
                to="/explore"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#C0A062] to-[#A97142] text-white text-xl font-semibold rounded-full 
                transform hover:scale-105 transition-all duration-300 shadow-lg animate-fadeIn animation-delay-400"
              >
                Mulai Jelajahi
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn animation-delay-600">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-[#C0A062] text-4xl font-bold mb-2">3+</div>
                <h3 className="text-white text-xl font-semibold mb-2">Lokasi Strategis</h3>
                <p className="text-gray-300">Jebol, Pajus, dan Dr. Mansyur</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-[#C0A062] text-4xl font-bold mb-2">30+</div>
                <h3 className="text-white text-xl font-semibold mb-2">Toko Makanan</h3>
                <p className="text-gray-300">Berbagai pilihan kuliner</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-[#C0A062] text-4xl font-bold mb-2">100+</div>
                <h3 className="text-white text-xl font-semibold mb-2">Menu Beragam</h3>
                <p className="text-gray-300">Dari makanan berat hingga cemilan</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-[#C0A062] text-4xl font-bold mb-2">4.5</div>
                <h3 className="text-white text-xl font-semibold mb-2">Rating Rata-rata</h3>
                <p className="text-gray-300">Berdasarkan review pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A222E] to-[#2A3441]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Kenapa Memilih <span className="text-[#C0A062]">Kuliner USU</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#C0A062] to-[#A97142] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lokasi Strategis</h3>
              <p className="text-gray-300">Temukan tempat makan favoritmu di lokasi-lokasi strategis sekitar kampus USU</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#C0A062] to-[#A97142] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-3.841 3.545L1.96 8.4A1 1 0 002.8 9.4l.15-.15c.9-.9 2.37-.9 3.27 0l.39.39a2.67 2.67 0 003.77 0l.39-.39c.9-.9 2.37-.9 3.27 0l.39.39a2.67 2.67 0 003.77 0l.39-.39c.9-.9 2.37-.9 3.27 0l.15.15a1 1 0 00.84-1l-.35-2.855A4 4 0 0018.55 2H16a4 4 0 00-4 4v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Menu Beragam</h3>
              <p className="text-gray-300">Pilihan menu yang beragam untuk memenuhi selera dan budget mahasiswa</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#C0A062] to-[#A97142] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Rating & Review</h3>
              <p className="text-gray-300">Lihat rating dan review dari pengunjung lain untuk membantu pilihanmu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A222E]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Siap untuk <span className="text-[#C0A062]">Menjelajah</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Temukan tempat makan favoritmu sekarang dan nikmati berbagai pilihan kuliner lezat di sekitar kampus USU
          </p>
          <Link
            to="/explore"
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#C0A062] to-[#A97142] text-white text-xl font-semibold rounded-full 
            transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;