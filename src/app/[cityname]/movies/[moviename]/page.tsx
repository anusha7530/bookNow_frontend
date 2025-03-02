"use client";
import React from "react";
import { BsShare } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CelebCard from "@/components/CelebCard/CelebCard";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MoviePage = () => {
  const pathname = usePathname();
  const movie = {
    wideposter:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg",
    portraitposter:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
    title: "Jawan",
    rating: 8.5,
    halls: ["2D", "3D"],
    languages: ["Telugu", "Hindi", "English"],
    duration: "2h 15m",
    type: "Action/Thriller",
    releasedate: "Sep 3, 2023",
    cast: [
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
      {
        _id: "1",
        name: "Shah Rukh Khan",
        role: "Actor",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
      },
    ],
    crew: [
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/atlee-37797-1689670023.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/atlee-37797-1689670023.jpg",
      },
      {
        _id: "1",
        name: "Atlee",
        role: "Director",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/atlee-37797-1689670023.jpg",
      },
    ],
    about:
      "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.",
  };

  return (
    <div className="flex flex-col">
      {/* Poster Section */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.wideposter})` }}
      >
        <div className="min-h-[50vh] bg-gradient-to-r from-black via-transparent to-black p-6 md:p-12 flex justify-between">
          {/* Left Side - Movie Poster & Details */}
          <div className="flex items-center gap-5 flex-wrap">
            <div
              className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] bg-cover bg-center rounded-lg relative"
              style={{ backgroundImage: `url(${movie.portraitposter})` }}
            >
              <p className="absolute bottom-0 w-full bg-black text-white text-center text-sm py-1">
                In cinemas
              </p>
            </div>

            <div className="text-white flex flex-col gap-2">
              <p className="text-2xl md:text-4xl font-semibold">
                {movie.title}
              </p>
              <p className="flex items-center text-lg md:text-2xl font-semibold">
                <BsFillStarFill className="text-yellow-400" />
                &nbsp;&nbsp;{movie.rating}/10
              </p>

              <div className="flex flex-wrap gap-2">
                <p className="bg-white text-black px-3 py-1 rounded-md text-sm font-semibold">
                  {movie.halls.join(" ")}
                </p>
                <p className="bg-white text-black px-3 py-1 rounded-md text-sm font-semibold">
                  {movie.languages.join(" ")}
                </p>
              </div>

              <p className="flex items-center gap-1 text-sm md:text-base">
                <span>{movie.duration}</span>
                <span>•</span>
                <span>{movie.type}</span>
                <span>•</span>
                <span>{movie.releasedate}</span>
              </p>

              <Link href={`${pathname}/buytickets`} className="w-fit">
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-8 rounded-md mt-3">
                  Book Tickets
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Share Button */}
          <div className="relative">
            <button className="absolute right-0 top-0 flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">
              <BsShare className="text-xl" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 md:p-12 flex flex-col gap-5 w-full md:w-[70%]">
        <h1 className="text-xl md:text-2xl font-semibold text-red-600">
          About the Movie
        </h1>
        <p className="text-gray-500 text-base">{movie.about}</p>
        <div className="w-full h-px bg-gray-300 my-5"></div>

        {/* Cast Section */}
        <h1 className="text-xl md:text-2xl font-semibold text-red-600">Cast</h1>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.cast.map((cast, index) => (
              <SwiperSlide key={index}>
                <CelebCard {...cast} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full h-px bg-gray-300 my-5"></div>

        {/* Crew Section */}
        <h1 className="text-xl md:text-2xl font-semibold text-red-600">Crew</h1>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.crew.map((crew, index) => (
              <SwiperSlide key={index}>
                <CelebCard {...crew} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full h-px bg-gray-300 my-5"></div>

        {/* Recommendations Section */}
        <h1 className="text-xl md:text-2xl font-semibold text-red-600">
          You might also like
        </h1>
        <MovieCarousel />
      </div>
    </div>
  );
};

export default MoviePage;
