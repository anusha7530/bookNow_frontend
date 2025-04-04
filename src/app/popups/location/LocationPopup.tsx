/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const LocationPopup = ({
  setShowLocationPopup,
}: {
  setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cities, setCities] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const getcities = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_CITY_API_KEY;
      const headers = new Headers();
      headers.append("X-CSCAPI-KEY", `${apiKey}`);

      const requestOptions: RequestInit = {
        method: "GET",
        headers,
        redirect: "follow",
      };

      const response = await fetch(
        "https://api.countrystatecity.in/v1/countries/IN/cities",
        requestOptions
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setCities(data);
    } catch (err) {
      toast((err as Error).message, {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getcities();
  }, []);
  const handleSave = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changeCity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        city: selectedCity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setShowLocationPopup(false);
          window.location.reload();
        } else {
          toast(data.message, {
            type: "error",
          });
        }
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
        });
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-blur-md">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[30%] bg-white rounded-lg flex flex-col justify-center items-center gap-5 p-5 text-black  border border-[#b92d14e8]">
        <select
          className="w-[90%] rounded-full shadow-md border-none outline-none py-2 px-5 text-lg cursor-pointer"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your city
          </option>
          {cities.map((city: any) => (
            <option key={city.id} value={city.name} className="text-lg">
              {city.name}
            </option>
          ))}
        </select>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            className="bg-[#b92d14e8] text-white rounded-full border-none outline-none py-2 px-6 text-lg cursor-pointer hover:bg-[#573a2de8] transition"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-[#b92d14e8] text-white rounded-full border-none outline-none py-2 px-6 text-lg cursor-pointer hover:bg-[#573a2de8] transition"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
