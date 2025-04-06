"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const SelectScreen = () => {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const date = searchParams.get("date");
  const { movieid, cityname, screenid } = params;
  const [screen, setScreen] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [movie, setMovie] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);

  const getschedules = async () => {
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/schedulebymovie/${screenid}/${date}/${movieid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.ok) {
          setScreen(response.data);
          setSelectedTime(response.data.movieSchedulesforDate[0]);
        }
      })
      .catch((err) => console.log(err));
  };

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

  useEffect(() => {
    getschedules();
    getMovie();
  }, []);

  const selectdeselectseat = (seat: any) => {
    const isselected = selectedSeats.find((s: any) => {
      return (
        s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
      );
    });
    if (isselected) {
      setSelectedSeats(
        selectedSeats.filter(
          (s: any) =>
            s.row !== seat.row ||
            s.col !== seat.col ||
            s.seat_id !== seat.seat_id
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const generateSeatLayout = () => {
    const x = screen.movieSchedulesforDate.findIndex(
      (t: any) => t.showTime === selectedTime.showTime
    );

    const notavailableseats = screen.movieSchedulesforDate[x].notAvailableSeats;

    return screen.screen.seats.map((seatType: any, index: number) => (
      <div
        className="overflow-x-auto sm:overflow-visible p-4 bg-white shadow rounded-lg w-full my-3 flex flex-col gap-2 items-center"
        key={index}
      >
        <h2 className="text-sm md:text-base font-medium border border-gray-300 rounded-full px-4 py-1 w-fit">
          {seatType.type.toUpperCase()} - Rs. {seatType.price}
        </h2>
        <div className="flex-col gap-4 mt-3">
          {seatType.rows.map((row: any, rowIndex: number) => (
            <div
              className="flex items-center gap-3 m-2 md:gap-5 min-w-max"
              key={rowIndex}
            >
              {/* Row name bubble */}
              <p className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#b92d14e8] text-white font-bold text-xs md:text-sm">
                {row.rowname}
              </p>

              <div className="flex gap-2 md:gap-4">
                {row.cols.map((col: any, colIndex: number) => (
                  <div className="flex gap-1 md:gap-2" key={colIndex}>
                    {col.seats.map((seat: any, seatIndex: number) => (
                      <div key={seatIndex}>
                        {notavailableseats.find(
                          (s: any) =>
                            s.row === row.rowname &&
                            s.seat_id === seat.seat_id &&
                            s.col === colIndex
                        ) ? (
                          <span className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md shadow bg-gray-300 text-black text-xs md:text-sm font-semibold cursor-not-allowed">
                            {seatIndex + 1}
                          </span>
                        ) : (
                          <span
                            className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md shadow cursor-pointer text-xs md:text-sm font-semibold ${
                              selectedSeats.find(
                                (s: any) =>
                                  s.row === row.rowname &&
                                  s.seat_id === seat.seat_id &&
                                  s.col === colIndex
                              )
                                ? "bg-[#b92d14e8] text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() =>
                              selectdeselectseat({
                                row: row.rowname,
                                col: colIndex,
                                seat_id: seat.seat_id,
                                price: seatType.price,
                              })
                            }
                          >
                            {seatIndex + 1}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const handleBooking = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/bookticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        showTime: selectedTime.showTime,
        showDate: date,
        movieId: movieid,
        screenId: screenid,
        seats: selectedSeats,
        totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
        paymentId: "123456789",
        paymentType: "online",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.ok) {
          toast.success("Booking Successful");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      {movie && screen && (
        <div className="bg-white">
          <div className="bg-[#b92d14e8] p-3">
            <h1 className="text-base md:text-lg font-semibold">
              {movie.title} - {screen?.screen?.name}
            </h1>
            <h3 className="text-white text-xs md:text-sm font-semibold border border-white px-3 py-1 rounded-full w-fit mt-1">
              {movie.genre.join(" / ")}
            </h3>
          </div>
        </div>
      )}

      {/* Main Content */}
      {screen && (
        <div className="bg-white flex flex-col items-center py-5 px-3 md:px-10">
          {/* Time Slots */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-3 md:my-5">
            {screen.movieSchedulesforDate.map((time: any, index: number) => (
              <h3
                key={index}
                className={`cursor-pointer border-2 px-4 py-1 rounded-full text-xs md:text-sm font-normal ${
                  selectedTime?._id === time._id
                    ? "border-[#b92d14e8] text-[#b92d14e8]"
                    : "border-gray-300"
                }`}
                onClick={() => {
                  setSelectedTime(time);
                  setSelectedSeats([]);
                }}
              >
                {time.showTime}
              </h3>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-5">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 rounded-full"></span>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Not available
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="w-4 h-4 md:w-5 md:h-5 border border-gray-400 bg-white rounded-full"></span>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Available
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="w-4 h-4 md:w-5 md:h-5 bg-[#b92d14e8] text-white rounded-full"></span>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Selected
              </p>
            </div>
          </div>

          {/* Seat Layout */}
          <div className="w-full">{generateSeatLayout()}</div>

          {/* Total & Continue */}
          <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-4 py-3 my-5 w-full max-w-xs md:max-w-md">
            <div className="flex items-center gap-2">
              <h2 className="text-xs md:text-sm font-semibold text-gray-500">
                Total
              </h2>
              <h3 className="text-xs md:text-sm font-semibold text-[#b92d14e8]">
                Rs. {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}
              </h3>
            </div>
            <button
              className="text-white bg-[#A74E34] py-2 px-5 rounded-md no-underline hover:bg-[#53362d] transition"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectScreen;
