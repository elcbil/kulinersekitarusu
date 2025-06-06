import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [shop, setShop] = useState(null);
  const { shopId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch shop details
    axios.get(`http://localhost:5000/api/shops/detail/${shopId}`)
      .then(response => setShop(response.data))
      .catch(error => console.error('Error fetching shop:', error));

    // Fetch menus for selected shop
    axios.get(`http://localhost:5000/api/menus/${shopId}`)
      .then(response => setMenus(response.data))
      .catch(error => console.error('Error fetching menus:', error));
  }, [shopId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A222E] to-[#2A3441] p-8 pt-40">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-white flex items-center hover:text-[#C0A062] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </button>

      {/* Shop Header */}
      {shop && (
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <img
            src={`/shop-images/${shop.foto_toko}`}
            alt={shop.nama_toko}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{shop.nama_toko}</h1>
            <p className="text-gray-200">{shop.alamat_toko}</p>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6 pl-2 border-l-4 border-[#C0A062]">
          Menu Tersedia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map(menu => (
            <div
              key={menu.id_menu}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={`/menu-images/${menu.foto_menu}`}
                  alt={menu.nama_menu}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium">{menu.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{menu.nama_menu}</h3>
                <p className="text-[#C0A062] font-semibold text-lg">
                  Rp {menu.harga.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 