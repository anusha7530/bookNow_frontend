"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../public/logo.png";
import LocationPopup from "@/app/popups/location/LocationPopup";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

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
        if (response.ok) {
          toast.success("User logged out Successful", {
            position: "top-center",
          });
          window.location.href = "/auth/signin";
        }
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/auth/signin";
      });
  };

  useEffect(() => {
    getuser();
  }, []);
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-2 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" width={200} height={80} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`z-10 flex flex-col lg:flex lg:flex-row gap-6 lg:items-center ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 right-0 bg-gray-900 lg:bg-transparent p-4 lg:p-0`}
        >
          <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
            <BiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search for a Movie"
              className="bg-transparent outline-none placeholder-gray-100 text-white"
            />
          </div>
          <p
            className="flex items-center cursor-pointer px-4 py-2 border-2 border-[#b92d14e8] rounded-lg"
            onClick={() => setShowLocationPopup(true)}
          >
            {user ? user.city : "Select City"}
            <RiArrowDropDownFill className="text-xl" />
          </p>

          <div className="block lg:flex items-center gap-3">
            {loggedIn ? (
              <button
                className="bg-[#b92d14e8] px-4 py-2 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-[#b92d14e8] px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            )}
            {loggedIn && (
              <Link
                href="/profile"
                className="flex flex-row items-center gap-1 lg:p-2 pt-4"
              >
                <BiUserCircle className="text-2xl" />
                <h1>{user.name}</h1>
              </Link>
            )}
          </div>
        </div>
        {showLocationPopup && (
          <LocationPopup setShowLocationPopup={setShowLocationPopup} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
