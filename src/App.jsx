import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Mengimpor Navbar
import Footer from './components/Footer';  // Mengimpor Footer
import Home from './pages/Home';  // Mengimpor halaman Home
import Explore from './pages/Explore';  // Mengimpor halaman Explore
import Review from './pages/Review';  // Mengimpor halaman Review
import Menu from './pages/Menu';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Halaman Konten */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/review" element={<Review />} />
          <Route path="/menu/:shopId" element={<Menu />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
