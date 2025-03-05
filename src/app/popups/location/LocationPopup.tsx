/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
const LocationPopup = ({
  setShowLocationPopup,
}: {
  setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cities, setCities] = React.useState<any[]>([]);

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
    setShowLocationPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-blur-md">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[30%] bg-white rounded-lg flex flex-col justify-center items-center gap-5 p-5 text-black  border border-[#b92d14e8]">
        <select className="w-[90%] rounded-full shadow-md border-none outline-none py-2 px-5 text-lg cursor-pointer">
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
