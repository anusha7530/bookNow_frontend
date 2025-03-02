"use client";
import { usePathname } from "next/navigation";
import React from "react";
import DatePicker from "react-horizontal-datepicker";
import Link from "next/link";

const page = () => {
  const pathname = usePathname();
  const movie = {
    moviename: "Jawan",
    screen: "4Dx",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 3",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
    ],
  };

  const selectedDay = (val: string) => {
    console.log(val);
  };
  return (
    <div className="buytickets bg-gray-200 min-h-screen w-full">
      {/* Header Section */}
      <div className="s1 bg-white">
        <div className="head bg-[#b92d14e8] p-5">
          <h1 className="text-white text-3xl font-semibold">
            {movie.moviename} - {movie.language}
          </h1>
          <h3 className="text-gray-300 text-xs font-semibold border border-gray-300 py-1 px-4 rounded-full w-fit mt-2">
            {movie.type}
          </h3>
        </div>

        {/* Date Picker Section */}
        <div className="p-4">
          <DatePicker
            getSelectedDay={selectedDay}
            endDate={100}
            selectDate={new Date()}
            labelFormat={"MMMM"}
            color={"rgb(167 78 52)"}
          />
        </div>
      </div>

      {/* Screens Section */}
      <div className="screens w-[90%] mx-auto mt-5 shadow-lg bg-white p-5 rounded-lg">
        {movie.screens.map((screen, index) => (
          <div
            key={index}
            className="screen flex justify-between items-center p-3 border-b border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-100 last:border-b-0"
          >
            <div>
              <h2 className="text-lg font-semibold">{screen.name}</h2>
              <h3 className="text-sm font-semibold text-gray-500">
                {screen.location}
              </h3>
            </div>
            <Link
              href={`${pathname}/${screen.name}`}
              className="theme_btn1 text-white bg-[#A74E34] py-2 px-5 rounded-md no-underline hover:bg-[#53362d] transition"
            >
              Select
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
