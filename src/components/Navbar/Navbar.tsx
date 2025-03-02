import React from "react";
import Link from "next/link";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-2 bg-gray-800 text-white">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={80}
        />
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
        <p className="flex items-center cursor-pointer">
          Mumbai <RiArrowDropDownFill className="text-xl" />
        </p>

        <div className="md:hidden">
          <BiSearch className="text-xl" />
        </div>

        <div className="flex items-center gap-3">
          <Link href="/" className="hidden md:inline-block bg-[#b92d14e8] px-4 py-2 rounded-lg">
            Logout
          </Link>
          <Link href="/" className="flex items-center gap-1">
            <BiUserCircle className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
