"use client";
import { usePathname, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import Link from "next/link";

const Buytickets = () => {
  const pathname = usePathname();
  const params = useParams();
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const { movieid, cityname } = params;
  const [movie, setMovie] = useState<any>(null);
  const [theatres, setTheatres] = useState<any>(null);

  const getMovie = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setMovie(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTheatres = async (date: string) => {
    const movieId = movieid;
    const city = cityname;

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screensbymovieschedule/${city}/${date}/${movieId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) setTheatres(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getTheatres(selectedDate);
  }, [selectedDate]);

  const selectedDay = (val: string) => {
    console.log(val);
  };
  return (
    <>
      {movie && (
        <div className="bg-gray-200 min-h-screen w-full">
          {/* Header Section */}
          <div className="s1 bg-white">
            <div className="head bg-[#b92d14e8] p-5">
              <h1 className="text-white text-3xl font-semibold">
                {movie.title} - {movie.language}
              </h1>
              <h3 className="text-gray-300 text-xs font-semibold border border-gray-300 py-1 px-4 rounded-full w-fit mt-2">
                {movie.genre.join(",")}
              </h3>
            </div>

            {/* Date Picker Section */}
            <div className="p-4">
              <DatePicker
                getSelectedDay={
                  (date: any) => {
                      setSelectedDate(date)
                  }
              }
                endDate={100}
                selectDate={selectedDate}
                labelFormat={"MMMM"}
                color={"rgb(167 78 52)"}
              />
            </div>
          </div>

          {/* Screens Section */}
          {
            theatres && theatres.length > 0 ?
            <div className="w-[90%] mx-auto mt-5 shadow-lg bg-white p-5 rounded-lg">
            {theatres.map((screen:any, index:any) =>{
                const screenid = screen._id
            return (
              <div
                key={index}
                className="flex justify-between items-center p-3 border-b border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-100 last:border-b-0"
              >
                <div>
                  <h2 className="text-lg font-semibold">{screen.name}</h2>
                  <h3 className="text-sm font-semibold text-gray-500">
                    {screen.location}
                  </h3>
                </div>
                <Link
                  href={`${pathname}/${screenid}?date=${selectedDate}`}
                  className="text-white bg-[#A74E34] py-2 px-5 rounded-md no-underline hover:bg-[#53362d] transition"
                >
                  Select
                </Link>
              </div>
            )})}
          </div>
          :
          <div className="w-[90%] mx-auto mt-5 shadow-lg bg-white p-5 rounded-lg">
            <h1>No shows available</h1>
          </div>
          }
        </div>
      )}
    </>
  );
};

export default Buytickets;
