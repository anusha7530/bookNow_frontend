"use client";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [bookings, setBookings] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const getBookings = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/getuserbookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setBookings(data.data);
        }
      });
  };

  const getUserData = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setUser(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookings();
    getUserData();
  }, []);
  return (
  <div className="profile px-4 py-6 max-w-5xl mx-auto">
  <h1 className="text-3xl font-bold mb-6 text-center text-[#b92d14e8]">Profile</h1>

  <div className="user mb-10">
    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">User Details</h2>
    <div className="details grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="detail bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-medium text-[#b92d14e8]">Name</h3>
        <p className="text-gray-900">{user?.name}</p>
      </div>
      <div className="detail bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-medium text-[#b92d14e8]">Email</h3>
        <p className="text-gray-900 break-all">{user?.email}</p>
      </div>
      <div className="detail bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-medium text-[#b92d14e8]">City</h3>
        <p className="text-gray-900">{user?.city}</p>
      </div>
    </div>
  </div>

  <div className="bookings">
    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Bookings</h2>
    <div className="details flex flex-col gap-6">
      {bookings?.map((booking: any, index: any) => {
        return (
          <div
            className="booking bg-gray-50 border rounded-xl p-4 shadow-sm"
            key={index}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Movie</h3>
                <p className="text-base text-gray-800">{booking.movieId}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Screen</h3>
                <p className="text-base text-gray-800">{booking.screenId}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Seats</h3>
                <p className="text-base text-gray-800 flex flex-wrap gap-1">
                  {booking.seats.map((seat: any) => {
                    return (
                      <span
                        key={seat.seat_id}
                        className="bg-[#eca69ae8] text-[#671608e8] text-sm px-2 py-1 rounded-md"
                      >
                        {seat.row}
                        {seat.col}
                        {seat.seat_id}
                      </span>
                    );
                  })}
                </p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Price</h3>
                <p className="text-base text-gray-800">{booking.totalPrice}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Payment Type</h3>
                <p className="text-base text-gray-800">{booking.paymentType}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Payment Id</h3>
                <p className="text-base text-gray-800 break-all">{booking.paymentId}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Show Date</h3>
                <p className="text-base text-gray-800">{booking.showDate.slice(0, 10)}</p>
              </div>

              <div className="detail">
                <h3 className="text-sm font-medium text-[#b92d14e8]">Show Time</h3>
                <p className="text-base text-gray-800">{booking.showTime}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default ProfilePage;
