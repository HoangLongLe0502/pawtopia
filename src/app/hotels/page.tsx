"use client";

import { useState } from "react";
import "./hotels.css";

type Hotel = {
  id: number;
  name: string;
  priceVND: number;
  location: string;
  rating: number;
  available: boolean;
  short: string;
  photo?: string;
};

const sampleHotels: Hotel[] = [
  {
    id: 1,
    name: "Cozy Paws Hotel",
    priceVND: 250000,
    location: "District 1, HCM",
    rating: 4.6,
    available: true,
    short: "Indoor play area, grooming, 24/7 staff",
    photo: "/images/hotel1.jpg",
  },
  {
    id: 2,
    name: "Sunny Whiskers",
    priceVND: 180000,
    location: "District 3, HCM",
    rating: 4.2,
    available: false,
    short: "Private suites, vet on call",
    photo: "/images/hotel2.jpg",
  },
  {
    id: 3,
    name: "The Cat Retreat",
    priceVND: 320000,
    location: "Thao Dien, HCM",
    rating: 4.9,
    available: true,
    short: "Luxury suites, webcam access",
    photo: "/images/hotel3.jpg",
  },
];

export default function HotelsPage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filtered = sampleHotels.filter((h) => {
    if (query && !h.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (city && !h.location.toLowerCase().includes(city.toLowerCase())) return false;
    if (minPrice && h.priceVND < minPrice) return false;
    if (maxPrice && maxPrice > 0 && h.priceVND > maxPrice) return false;
    if (minRating && h.rating < minRating) return false;
    if (onlyAvailable && !h.available) return false;
    // Note: start/end date checks would query backend in real app
    return true;
  });

  return (
    <div className="hotels-root">
      <header className="hotels-header">
        <h1 className="hotels-title">Cat Hotels</h1>
        <p className="hotels-sub">Find, book and manage cozy stays for your cat</p>
      </header>

      <div className="hotels-content">
        <aside className="hotels-sidebar">
          <div className="filters vertical">
            <input
              className="search"
              placeholder="Search hotels"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select className="city" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">All cities</option>
              <option value="District 1">District 1</option>
              <option value="District 3">District 3</option>
              <option value="Thao Dien">Thao Dien</option>
            </select>

            <input
              className="price"
              type="number"
              placeholder="Min price (VND)"
              value={minPrice || ""}
              onChange={(e) => setMinPrice(Number(e.target.value || 0))}
            />

            <input
              className="price"
              type="number"
              placeholder="Max price (VND)"
              value={maxPrice || ""}
              onChange={(e) => setMaxPrice(Number(e.target.value || 0))}
            />

            <select className="rating" value={String(minRating)} onChange={(e) => setMinRating(Number(e.target.value))}>
              <option value={0}>Any rating</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
              <option value={4.5}>4.5+</option>
            </select>

            <label className="avail">
              <input type="checkbox" checked={onlyAvailable} onChange={(e) => setOnlyAvailable(e.target.checked)} /> Available
            </label>

            <input className="date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input className="date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

            <button className="apply">Apply filter</button>
          </div>
        </aside>

        <div className="hotels-main">
          <div className="hotels-list">
            {filtered.map((h) => (
              <article key={h.id} className="hotel-card">
                <div className="hotel-photo">
                  <img src={h.photo ?? "/images/hotel-placeholder.png"} alt={h.name} />
                </div>
                <div className="hotel-body">
                  <div className="hotel-row">
                    <h2 className="hotel-name">{h.name}</h2>
                    <div className="hotel-price">{h.priceVND.toLocaleString()} VND</div>
                  </div>
                  <div className="hotel-row muted">
                    <div className="hotel-location">{h.location}</div>
                    <div className="hotel-rating">⭐ {h.rating.toFixed(1)}</div>
                  </div>
                  <p className="hotel-short">{h.short}</p>
                  <div className="hotel-footer">
                    <div className={`availability ${h.available ? "in" : "out"}`}>{h.available ? "Available" : "Full"}</div>
                    <button className="book">Book</button>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && <p className="no-results">No hotels match your filters.</p>}
          </div>

          <aside className="hotels-map">
            <div className="map-box">Map / Map view placeholder</div>
          </aside>
        </div>
      </div>
    </div>
  );
}
