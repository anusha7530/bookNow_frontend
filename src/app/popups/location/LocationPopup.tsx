/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { toast } from 'react-toastify'
const LocationPopup = ({
  setShowLocationPopup,
}: {
  setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cities, setCities] = React.useState<any[]>([]);
  const [selectedCity, setSelectedCity] = React.useState<any>(null)

  const getcities = async () => {
    const indianCities = [
      "Jabalpur",
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Surat",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
      "Bhopal",
      "Visakhapatnam",
      "Pimpri-Chinchwad",
      "Patna",
      "Vadodara",
    ];

    const cities = indianCities.map((city) => {
      return {
        label: city,
        value: city,
      };
    });

    setCities(cities);
  };

  React.useEffect(() => {
    getcities();
  }, []);

  const handleSave = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changeCity`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
          city: selectedCity
      })
  })
      .then((res) => res.json())
      .then((data) => {
          if (data.ok) {
              setShowLocationPopup(false)
              window.location.reload()
          }
          else{
            toast(data.message, {
              type: 'error'
          })
          }
      })
      .catch((err) => {
          toast(err.message, {
              type: 'error'
          })
          console.log(err)
      })
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-blur-md">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[30%] bg-white rounded-lg flex flex-col justify-center items-center gap-5 p-5 text-black  border border-[#b92d14e8]">
        <select className="w-[90%] rounded-full shadow-md border-none outline-none py-2 px-5 text-lg cursor-pointer" onChange={(e) => {
                         setSelectedCity(e.target.value)}}>
          <option value="" disabled selected>
            Select your city
          </option>
          {cities.map((city: any) => (
            <option key={city.value} value={city.value} className="text-lg">
              {city.label}
            </option>
          ))}
        </select>

        <button
          className="bg-[#b92d14e8] text-white rounded-full border-none outline-none py-2 px-6 text-lg cursor-pointer hover:bg-[#573a2de8] transition"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LocationPopup;
