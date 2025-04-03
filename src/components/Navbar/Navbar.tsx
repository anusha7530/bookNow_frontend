/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../public/logo.png";
import LocationPopup from "@/app/popups/location/LocationPopup";

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] =
    React.useState<boolean>(false);
  const [user, setUser] = React.useState<any>(null);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const getuser = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setUser(response.data);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          window.location.href = "/auth/signin";
        }
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/auth/signin";
      });
  };

  // const checkLogin = async () => {
  //   // let authToken = await getCookie('authToken')
  //   // let refreshToken = await getCookie('refreshToken')

  //   // console.log(authToken, refreshToken)
  //   fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.ok) {
  //         setLoggedIn(true);
  //       } else {
  //         setLoggedIn(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoggedIn(false);
  //     });
  // };

  useEffect(() => {
    // checkLogin();
    getuser();
  }, []);
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-2 bg-gray-800 text-white">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Image src={logo} alt="logo" width={200} height={80} />
        <div className="hidden md:flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
          <BiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search for a Movie"
            className="bg-transparent outline-none placeholder-gray-100 text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <p
          className="flex items-center cursor-pointer"
          onClick={() => setShowLocationPopup(true)}
        >
          {user ? user.city : "Select City"}
          <RiArrowDropDownFill className="text-xl" />
        </p>

        <div className="md:hidden">
          <BiSearch className="text-xl" />
        </div>

        <div className="flex items-center gap-3">
          {
            loggedIn ? 
            <button className="hidden md:inline-block bg-[#b92d14e8] px-4 py-2 rounded-lg" onClick={handleLogout}>
              Logout
            </button>
            :
            <Link
            href="/auth/signin"
            className="hidden md:inline-block bg-[#b92d14e8] px-4 py-2 rounded-lg"
          >
            Login
          </Link>
          }
          <Link href="/" className="flex items-center gap-1">
            <BiUserCircle className="text-2xl" />
          </Link>
        </div>
      </div>
      {showLocationPopup && (
        <LocationPopup setShowLocationPopup={setShowLocationPopup} />
      )}
    </nav>
  );
};

export default Navbar;
