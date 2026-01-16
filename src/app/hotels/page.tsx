// pawtopia\src\app\hotels\page.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const mockHotels = [
  {
    id: 1,
    name: 'Cozy Cat Inn',
    location: '270 Le Thanh Ton, Ben Thanh Ward, District 1, Ho Chi Minh City',
    description: 'This luxurious cat hotel offers spacious, climate-controlled rooms with premium scratching posts, cozy beds, and daily playtime sessions. Located in the heart of District 1, it provides 24/7 CCTV monitoring and attentive staff to ensure your feline companion feels completely at home during your absence.',
    googleRating: 4.5,
    siteRating: 4.8,
    availability: true,
    price: 500000,
    photo: 'https://pix10.agoda.net/hotelImages/34178181/563283680/61e2fd591b52b1c11a049e7f2001250a.jpg?ce=0&s=414x232',
  },
  {
    id: 2,
    name: 'Purrfect Stay Hotel',
    location: '85 Nguyen Thi Thap, Tan Hung Ward, District 7, Ho Chi Minh City',
    description: 'An affordable yet comfortable boarding option perfect for budget-conscious cat owners, featuring clean enclosures and fresh meals twice daily. The hotel is conveniently located near Phu My Hung with easy access to public transport, making drop-off and pick-up hassle-free.',
    googleRating: 4.2,
    siteRating: 4.5,
    availability: false,
    price: 350000,
    photo: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/298448066.jpg?k=3d8f3593f91a2e88130ecc5f75acdadaa77a6d6a62783189f880c09a1f178c14&o=',
  },
  {
    id: 3,
    name: 'Whiskers Resort',
    location: '83 Truong Dinh, Ward 6, District 3, Ho Chi Minh City',
    description: 'Designed especially for active and playful cats, this resort includes large play areas with tunnels, climbing trees, and interactive toys to keep your pet entertained all day. Guests enjoy personalized attention from experienced handlers and a peaceful environment away from busy streets.',
    googleRating: 4.7,
    siteRating: 4.9,
    availability: true,
    price: 600000,
    photo: 'https://images.squarespace-cdn.com/content/v1/651b1ae5fa3ff4418caec5aa/1696357003701-EPNLPLVJ52OMDZ862VXL/Cat+Boarding+Amenities+-+Cat%27s+Meow+Resort',
  },
  {
    id: 4,
    name: 'Feline Paradise',
    location: '174 Kim Ma Street, Ba Dinh District, Hanoi',
    description: 'A premium cat boarding facility in central Hanoi offering private suites with windows for natural light and soft bedding for ultimate relaxation. The staff provides daily grooming, medication administration if needed, and regular updates with photos so you never miss a moment of your cat’s stay.',
    googleRating: 4.6,
    siteRating: 4.7,
    availability: true,
    price: 450000,
    photo: 'https://www.nycampcanine.com/wp-content/uploads/2022/12/cat-boarding-mage-2-600x500-crop.jpg',
  },
  {
    id: 5,
    name: 'Cat Haven Hanoi',
    location: '32 Ly Thai To Street, Ly Thai To Ward, Hoan Kiem District, Hanoi',
    description: 'This cozy and secure cat hotel is ideal for shy or senior cats, featuring quiet rooms and gentle handling by trained caregivers. Situated near Hoan Kiem Lake, it offers a calm atmosphere and optional add-ons like brushing sessions or special dietary meals.',
    googleRating: 4.1,
    siteRating: 4.3,
    availability: false,
    price: 300000,
    photo: 'https://scratchingpostinn.com/wp-content/uploads/2024/06/Dallas-Fort-Worth-Cat-Boarding-Scratching-Post-Inn-Luxury.jpg',
  },
  {
    id: 6,
    name: 'Paw Palace',
    location: '78 To Ngoc Van, Tay Ho Ward, Tay Ho District, Hanoi',
    description: 'Enjoy luxury cat accommodations with scenic West Lake views, spacious suites, and premium amenities including elevated perches and enrichment toys. The palace-style hotel provides concierge-level service with daily fresh food, playtime, and personalized care reports sent directly to your phone.',
    googleRating: 4.8,
    siteRating: 4.9,
    availability: true,
    price: 700000,
    photo: 'https://cdcssl.ibsrv.net/ibimg/smb/3000x2250_80/webmgr/09/t/f/-min/P1030398-min.jpg.webp?b88bdf69a6cb7a4ca38a405587da2b07',
  },
  {
    id: 7,
    name: 'Beachside Cat Retreat',
    location: '200 To Hien Thanh Street, Phuoc My Ward, Son Tra District, Da Nang',
    description: 'A relaxing beachside cat boarding experience just minutes from My Khe Beach, offering fresh sea air and bright, airy rooms. Cats can enjoy supervised outdoor time in a secure garden area while owners receive daily photo updates and peace of mind from professional staff.',
    googleRating: 4.4,
    siteRating: 4.6,
    availability: true,
    price: 400000,
    photo: 'https://www.rover.com/blog/wp-content/uploads/pet-hotel-in-home-pet-care-cats-boarding.jpg',
  },
  {
    id: 8,
    name: 'Da Nang Kitty Lodge',
    location: '174 Bach Dang Street, Hai Chau District, Da Nang',
    description: 'Modern and well-equipped cat hotel located along the Han River with easy access to the city center and major attractions. The lodge features clean, ventilated rooms, automatic feeders, and attentive staff who provide daily cleaning and interaction to keep your cat happy and healthy.',
    googleRating: 4.3,
    siteRating: 4.4,
    availability: false,
    price: 320000,
    photo: 'https://pix10.agoda.net/hotelImages/412145/-1/80ceda91103de739085700f76efc85b3.jpg?ce=0&s=414x232',
  },
  {
    id: 9,
    name: 'Mountain View Cat Hotel',
    location: '278 Le Dai Hanh Street, Hoa Phat Ward, Cam Le District, Da Nang',
    description: 'This peaceful retreat offers stunning mountain views and a quiet environment perfect for cats who prefer calm surroundings. Spacious enclosures with natural light, soft music, and daily enrichment activities help reduce stress during longer stays.',
    googleRating: 4.9,
    siteRating: 5.0,
    availability: true,
    price: 550000,
    photo: 'https://www.bendkittylodgeoregon.com/images/BKL-Deluxe-Pic-2.jpg',
  },
  {
    id: 10,
    name: 'Urban Cat Oasis',
    location: '10 Tran Nao Street, Binh An Ward, District 2, Ho Chi Minh City',
    description: 'A stylish urban cat hotel in the trendy Thao Dien area, offering modern design, comfortable lounging spaces, and interactive play zones. Ideal for city cats, it provides a safe and fun environment with easy access from central District 1 and nearby expat communities.',
    googleRating: 4.0,
    siteRating: 4.2,
    availability: true,
    price: 380000,
    photo: 'https://cdcssl.ibsrv.net/ibimg/smb/550x309_80/webmgr/09/t/f/Slider/TINK.jpg.webp?0529b8e8d03f0184e5c3f41463b4811b',
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
          <input
            type="text"
            placeholder="Search hotels..."
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

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

          <input
            type="number"
            placeholder="Minimum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          />

          <input
            type="number"
            placeholder="Maximum price (in VND)"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          />

          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />

          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          />

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
                <h2 className="text-xl font-bold">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.location}</p>

                <div className="bg-gray-200 p-2 rounded">
                  <p>{hotel.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="bg-orange-200 p-2 rounded text-sm">
                    Google Map Ratings: {hotel.googleRating}/5
                  </div>

                  <div className="bg-orange-200 p-2 rounded text-sm">
                    Pawtopia Ratings: {hotel.siteRating}/5
                  </div>

                  <div
                    className={`p-2 rounded text-sm ${hotel.availability ? 'bg-green-200' : 'bg-red-200'
                      }`}
                  >
                    {hotel.availability ? 'Available' : 'Not Available'}
                  </div>

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