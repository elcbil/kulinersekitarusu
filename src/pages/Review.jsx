import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const [shops, setShops] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedShop, setSelectedShop] = useState('');
  const [newReview, setNewReview] = useState({
    nama_pengguna: '',
    komentar: '',
    id_toko: ''
  });
  const [editingReview, setEditingReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all shops for dropdown
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shops/all');
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };
    fetchShops();
  }, []);

  // Fetch reviews when selected shop changes
  useEffect(() => {
    const fetchReviews = async () => {
      if (selectedShop) {
        try {
          const response = await axios.get(`http://localhost:5000/api/reviews/${selectedShop}`);
          setReviews(response.data);
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      }
    };
    fetchReviews();
  }, [selectedShop]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (editingReview) {
        // Update existing review
        await axios.put(`http://localhost:5000/api/reviews/${editingReview.id_review}`, {
          ...newReview,
          id_toko: selectedShop
        });
      } else {
        // Create new review
        await axios.post('http://localhost:5000/api/reviews', {
          ...newReview,
          id_toko: selectedShop
        });
      }
      
      // Refresh reviews
      const response = await axios.get(`http://localhost:5000/api/reviews/${selectedShop}`);
      setReviews(response.data);
      
      // Reset form
      setNewReview({
        nama_pengguna: '',
        komentar: '',
        id_toko: ''
      });
      setEditingReview(null);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
    setIsLoading(false);
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setNewReview({
      nama_pengguna: review.nama_pengguna,
      komentar: review.komentar,
      id_toko: review.id_toko
    });
  };

  const handleDelete = async (reviewId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus review ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`);
        setReviews(reviews.filter(review => review.id_review !== reviewId));
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A222E] to-[#2A3441] p-8 pt-40">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Review Kuliner</h1>

        {/* Shop Selection */}
        <div className="mb-12">
          <select
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
            className="w-full p-4 rounded-xl bg-white bg-opacity-10 text-white border border-gray-700 focus:border-[#C0A062] focus:ring-2 focus:ring-[#C0A062] transition-all"
          >
            <option value="">Pilih Toko</option>
            {shops.map(shop => (
              <option key={shop.id_toko} value={shop.id_toko}>
                {shop.nama_toko}
              </option>
            ))}
          </select>
        </div>

        {selectedShop && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Review Form */}
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {editingReview ? 'Edit Review' : 'Tambah Review'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nama</label>
                  <input
                    type="text"
                    name="nama_pengguna"
                    value={newReview.nama_pengguna}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white border border-gray-700 focus:border-[#C0A062] focus:ring-2 focus:ring-[#C0A062]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Review</label>
                  <textarea
                    name="komentar"
                    value={newReview.komentar}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 rounded-lg bg-white bg-opacity-10 text-white border border-gray-700 focus:border-[#C0A062] focus:ring-2 focus:ring-[#C0A062]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-[#C0A062] to-[#A97142] text-white font-semibold rounded-lg 
                  transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Menyimpan...' : editingReview ? 'Update Review' : 'Kirim Review'}
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Semua Review</h2>
              {reviews.length === 0 ? (
                <p className="text-gray-400">Belum ada review untuk toko ini.</p>
              ) : (
                reviews.map(review => (
                  <div key={review.id_review} className="bg-white bg-opacity-10 p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{review.nama_pengguna}</h3>
                        <p className="text-gray-400 text-sm">
                          {new Date(review.waktu_review).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(review)}
                          className="text-[#C0A062] hover:text-[#A97142] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(review.id_review)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300">{review.komentar}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
