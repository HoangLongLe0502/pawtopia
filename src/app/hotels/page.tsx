// pawtopia\src\app\hotels\page.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const mockHotels = [
  {
    id: 1,
    name: 'Cozy Cat Inn',
    location: 'District 1, Ho Chi Minh City',
    description: 'A luxurious cat hotel with premium amenities and caring staff.',
    googleRating: 4.5,
    siteRating: 4.8,
    availability: true,
    price: 500000,
    photo: 'https://pix10.agoda.net/hotelImages/34178181/563283680/61e2fd591b52b1c11a049e7f2001250a.jpg?ce=0&s=414x232', // Cat Hotel Ben Thành style, HCMC
  },
  {
    id: 2,
    name: 'Purrfect Stay Hotel',
    location: 'District 7, Ho Chi Minh City',
    description: 'Affordable and comfortable boarding for your feline friends.',
    googleRating: 4.2,
    siteRating: 4.5,
    availability: false,
    price: 350000,
    photo: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/298448066.jpg?k=3d8f3593f91a2e88130ecc5f75acdadaa77a6d6a62783189f880c09a1f178c14&o=', // Bầu Cat Hotel, HCMC
  },
  {
    id: 3,
    name: 'Whiskers Resort',
    location: 'District 3, Ho Chi Minh City',
    description: 'Spacious rooms and play areas for active cats.',
    googleRating: 4.7,
    siteRating: 4.9,
    availability: true,
    price: 600000,
    photo: 'https://images.squarespace-cdn.com/content/v1/651b1ae5fa3ff4418caec5aa/1696357003701-EPNLPLVJ52OMDZ862VXL/Cat+Boarding+Amenities+-+Cat%27s+Meow+Resort', // Luxury cat boarding room with amenities
  },
  {
    id: 4,
    name: 'Feline Paradise',
    location: 'Ba Dinh District, Hanoi',
    description: 'Top-notch care in the heart of Hanoi.',
    googleRating: 4.6,
    siteRating: 4.7,
    availability: true,
    price: 450000,
    photo: 'https://www.nycampcanine.com/wp-content/uploads/2022/12/cat-boarding-mage-2-600x500-crop.jpg', // Cozy cat boarding interior
  },
  {
    id: 5,
    name: 'Cat Haven Hanoi',
    location: 'Hoan Kiem District, Hanoi',
    description: 'Cozy and secure environment for cats.',
    googleRating: 4.1,
    siteRating: 4.3,
    availability: false,
    price: 300000,
    photo: 'https://scratchingpostinn.com/wp-content/uploads/2024/06/Dallas-Fort-Worth-Cat-Boarding-Scratching-Post-Inn-Luxury.jpg', // Luxury with scratching posts
  },
  {
    id: 6,
    name: 'Paw Palace',
    location: 'Tay Ho District, Hanoi',
    description: 'Luxury accommodations with scenic views.',
    googleRating: 4.8,
    siteRating: 4.9,
    availability: true,
    price: 700000,
    photo: 'https://cdcssl.ibsrv.net/ibimg/smb/3000x2250_80/webmgr/09/t/f/-min/P1030398-min.jpg.webp?b88bdf69a6cb7a4ca38a405587da2b07', // Upscale cat hotel suite
  },
  {
    id: 7,
    name: 'Beachside Cat Retreat',
    location: 'Son Tra District, Da Nang',
    description: 'Relaxing stay near the beach for cats.',
    googleRating: 4.4,
    siteRating: 4.6,
    availability: true,
    price: 400000,
    photo: 'https://www.rover.com/blog/wp-content/uploads/pet-hotel-in-home-pet-care-cats-boarding.jpg', // Nice cat boarding setup
  },
  {
    id: 8,
    name: 'Da Nang Kitty Lodge',
    location: 'Hai Chau District, Da Nang',
    description: 'Modern facilities and attentive service.',
    googleRating: 4.3,
    siteRating: 4.4,
    availability: false,
    price: 320000,
    photo: 'https://pix10.agoda.net/hotelImages/412145/-1/80ceda91103de739085700f76efc85b3.jpg?ce=0&s=414x232', // Cozy cat hotel room example
  },
  {
    id: 9,
    name: 'Mountain View Cat Hotel',
    location: 'Cam Le District, Da Nang',
    description: 'Peaceful retreat with mountain views.',
    googleRating: 4.9,
    siteRating: 5.0,
    availability: true,
    price: 550000,
    photo: 'https://www.bendkittylodgeoregon.com/images/BKL-Deluxe-Pic-2.jpg', // Deluxe cat room
  },
  {
    id: 10,
    name: 'Urban Cat Oasis',
    location: 'District 2, Ho Chi Minh City',
    description: 'Stylish urban hotel for city cats.',
    googleRating: 4.0,
    siteRating: 4.2,
    availability: true,
    price: 380000,
    photo: 'https://cdcssl.ibsrv.net/ibimg/smb/550x309_80/webmgr/09/t/f/Slider/TINK.jpg.webp?0529b8e8d03f0184e5c3f41463b4811b', // Modern cat boarding
  },
];

export default function HotelsPage() {
  const [filters, setFilters] = useState({
    search: '',
    city: '',
    minRating: 0,
    minPrice: '',
    maxPrice: '',
    startDate: '',
    endDate: '',
    available: false,
  });

  const [filteredHotels, setFilteredHotels] = useState(mockHotels);

  const applyFilters = () => {
    let filtered = mockHotels;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(searchLower) ||
          h.location.toLowerCase().includes(searchLower) ||
          h.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters.city) {
      filtered = filtered.filter((h) => h.location.includes(filters.city));
    }

    if (filters.minRating > 0) {
      filtered = filtered.filter((h) => h.googleRating >= filters.minRating);
    }

    if (filters.minPrice) {
      const minP = parseInt(filters.minPrice);
      if (!isNaN(minP)) {
        filtered = filtered.filter((h) => h.price >= minP);
      }
    }

    if (filters.maxPrice) {
      const maxP = parseInt(filters.maxPrice);
      if (!isNaN(maxP)) {
        filtered = filtered.filter((h) => h.price <= maxP);
      }
    }

    if (filters.available || (filters.startDate && filters.endDate)) {
      filtered = filtered.filter((h) => h.availability);
    }

    setFilteredHotels(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-purple-200 p-4 text-center">
        <span className="text-lg font-semibold">Pawtopia Navigation Bar</span>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Sidebar: Filters */}
        <aside className="w-full md:w-1/4 space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search hotels..."
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

          {/* Filter for City */}
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          >
            <option value="">All Cities</option>
            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            <option value="Hanoi">Hanoi</option>
            <option value="Da Nang">Da Nang</option>
          </select>

          {/* Filter for Ratings */}
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.minRating}
            onChange={(e) => setFilters({ ...filters, minRating: parseFloat(e.target.value) })}
          >
            <option value={0}>Any Rating</option>
            <option value={4.5}>4.5+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={3.5}>3.5+ Stars</option>
            <option value={3}>3+ Stars</option>
          </select>

          {/* Minimum Price */}
          <input
            type="number"
            placeholder="Minimum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />

          {/* Maximum Price */}
          <input
            type="number"
            placeholder="Maximum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />

          {/* Start Date */}
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />

          {/* End Date */}
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          />

          {/* Availability Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="availability"
              className="mr-2"
              checked={filters.available}
              onChange={(e) => setFilters({ ...filters, available: e.target.checked })}
            />
            <label htmlFor="availability">Show only available</label>
          </div>

          {/* Apply Filter Button */}
          <button
            className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
            onClick={applyFilters}
          >
            Apply filter
          </button>
        </aside>

        {/* Right Side: Hotel Cards */}
        <main className="w-full md:w-3/4 space-y-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex flex-col md:flex-row bg-blue-200 p-4 rounded-lg shadow-md"
            >
              {/* Photo of Hotel */}
              <div className="w-full md:w-1/4 flex items-center justify-center">
                <Image
                  src={hotel.photo}
                  alt={`${hotel.name} - Cat Hotel Room`}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Hotel Details */}
              <div className="w-full md:w-3/4 pl-4 space-y-2">
                {/* Name */}
                <h2 className="text-xl font-bold">{hotel.name}</h2>

                {/* Location */}
                <p className="text-gray-600">{hotel.location}</p>

                {/* Short Description */}
                <div className="bg-gray-200 p-2 rounded">
                  <p>{hotel.description}</p>
                </div>

                {/* Bottom Row: Ratings, Availability, Price */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {/* Google Map Ratings */}
                  <div className="bg-orange-200 p-2 rounded text-sm">
                    Google Map Ratings: {hotel.googleRating}/5
                  </div>

                  {/* Hotel Ratings (from website) */}
                  <div className="bg-orange-200 p-2 rounded text-sm">
                    Hotel Ratings (from my website): {hotel.siteRating}/5
                  </div>

                  {/* Availability Information */}
                  <div
                    className={`p-2 rounded text-sm ${hotel.availability ? 'bg-green-200' : 'bg-red-200'
                      }`}
                  >
                    {hotel.availability ? 'Available' : 'Not Available'}
                  </div>

                  {/* Price */}
                  <div className="bg-green-200 p-2 rounded text-sm">
                    Price: {hotel.price.toLocaleString()} VND
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}