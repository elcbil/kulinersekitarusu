import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Mengimpor Navbar
import Footer from './components/Footer';  // Mengimpor Footer
import Home from './pages/Home';  // Mengimpor halaman Home
import Explore from './pages/Explore';  // Mengimpor halaman Explore
import Feedback from './pages/Review';  // Mengimpor halaman Feedback

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
          <Route path="/review" element={<Feedback />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
