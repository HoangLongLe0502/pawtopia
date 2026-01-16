// pawtopia\src\app\hotels\page.tsx

import React from 'react';

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
    photo: '/placeholder-hotel.jpg', // Assume a placeholder image
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
    photo: '/placeholder-hotel.jpg',
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
    photo: '/placeholder-hotel.jpg',
  },
];

export default function HotelsPage() {
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
          />

          {/* Filter for City */}
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Filter for city</option>
            <option>Ho Chi Minh City</option>
            <option>Hanoi</option>
            {/* Add more options as needed */}
          </select>

          {/* Filter for Ratings */}
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Filter for ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
          </select>

          {/* Minimum Price */}
          <input
            type="number"
            placeholder="Minimum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Maximum Price */}
          <input
            type="number"
            placeholder="Maximum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Start Date */}
          <input
            type="date"
            placeholder="Start date"
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* End Date */}
          <input
            type="date"
            placeholder="End date"
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Availability Toggle */}
          <div className="flex items-center">
            <input type="checkbox" id="availability" className="mr-2" />
            <label htmlFor="availability">Availability</label>
          </div>

          {/* Apply Filter Button */}
          <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
            Apply filter
          </button>
        </aside>

        {/* Right Side: Hotel Cards */}
        <main className="w-full md:w-3/4 space-y-8">
          {mockHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex flex-col md:flex-row bg-blue-200 p-4 rounded-lg shadow-md"
            >
              {/* Photo of Hotel */}
              <div className="w-full md:w-1/4 bg-yellow-200 flex items-center justify-center">
                <img
                  src={hotel.photo}
                  alt={hotel.name}
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