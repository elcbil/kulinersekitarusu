import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  // Fetch locations and initial shops
  useEffect(() => {
    // Fetch locations from backend
    axios.get('http://localhost:5000/api/locations')
      .then(response => {
        setLocations(response.data);
        // If locations exist, select the first one and fetch its shops
        if (response.data.length > 0) {
          const firstLocation = response.data[0];
          setSelectedLocation(firstLocation.id_tempat);
          // Fetch shops for the first location
          return axios.get(`http://localhost:5000/api/shops/${firstLocation.id_tempat}`);
        }
      })
      .then(shopsResponse => {
        if (shopsResponse) {
          setShops(shopsResponse.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLocationClick = (locationId) => {
    setSelectedLocation(locationId);
    // Fetch shops for selected location
    axios.get(`http://localhost:5000/api/shops/${locationId}`)
      .then(response => setShops(response.data))
      .catch(error => console.error('Error fetching shops:', error));
  };

  const handleShopClick = (shopId) => {
    navigate(`/menu/${shopId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A222E] to-[#2A3441] p-8 pt-40">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Jelajahi Kuliner</h1>
        <p className="text-gray-300 text-lg">Temukan berbagai pilihan kuliner lezat di sekitar kampus USU</p>
      </div>

      {/* Locations Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6 pl-2 border-l-4 border-[#C0A062]">Pilih Lokasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map(location => (
            <button
              key={location.id_tempat}
              onClick={() => handleLocationClick(location.id_tempat)}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedLocation === location.id_tempat
                  ? 'bg-gradient-to-r from-[#C0A062] to-[#A97142] text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-semibold">{location.nama_tempat}</h3>
            </button>
          ))}
        </div>
      </div>

      {/* Shops Section */}
      <div className="mb-16 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-white mb-6 pl-2 border-l-4 border-[#C0A062]">
          {selectedLocation ? 'Pilih Toko' : 'Memuat Toko...'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map(shop => (
            <button
              key={shop.id_toko}
              onClick={() => handleShopClick(shop.id_toko)}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Shop Image */}
              <div className="relative h-48">
                <img
                  src={`/shop-images/${shop.foto_toko}`}
                  alt={shop.nama_toko}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
              </div>

              {/* Shop Info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{shop.nama_toko}</h3>
                <p className="text-sm text-gray-600">{shop.alamat_toko}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
