"use client";
import React, { useState, useRef } from "react";
import axios from "axios";

export default function PickUpAutoComplete({
  pickUpLocation,
  setPickUpLocation,
}) {
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const handleChange = async (e) => {
    const value = e.target.value;
    setPickUpLocation(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          "https://api.radar.io/v1/search/autocomplete",
          {
            params: {
              query: value,
              near: "36.8065,10.1815", // Bias results near Tunis (you can pass dynamic coords)
              limit: 5,
            },
            headers: {
              Authorization: process.env.NEXT_PUBLIC_RADAR_API_KEY,
            },
          }
        );
        setResults(res.data.addresses || []);
      } catch (err) {
        console.error("Radar API error:", err);
      }
    } else {
      setResults([]);
    }
  };

  const handleSelect = (address) => {
    setPickUpLocation(address.formattedAddress);
    setResults([]); // clear dropdown after selection
  };

  return (
    <div>
      <div className="flex flex-col rounded-3xl">
        <label className="text-md">Street</label>
        <input
          className="h-[40px] rounded-md w-full border px-2"
          type="text"
          name="streetAdress"
          ref={inputRef}
          value={pickUpLocation || ""}
          onChange={handleChange}
          required
        />
      </div>

      {results.length > 0 && (
        <ul className="border rounded-md mt-1 bg-white shadow-md max-h-40 overflow-y-auto">
          {results.map((place, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(place)}
            >
              {place.formattedAddress}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
