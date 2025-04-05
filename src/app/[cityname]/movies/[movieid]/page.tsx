"use client";
import React, { useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CelebCard from "@/components/CelebCard/CelebCard";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { CelebrityCardType } from "@/types/types";

const MoviePage = () => {
  const pathname = usePathname();
  const { movieid } = useParams();
  const [movie, setMovie] = useState<any>(null);
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
    getMovie();
  }, []);

  return (
    <>
      {movie && (
        <div className="flex flex-col">
          {/* Poster Section */}
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${movie.landscapeImgUrl})` }}
          >
            <div className="min-h-[50vh] bg-gradient-to-r from-black via-transparent to-black p-6 md:p-12 flex justify-between">
              {/* Left Side - Movie Poster & Details */}
              <div className="flex items-center gap-5 flex-wrap">
                <div
                  className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] bg-cover bg-center rounded-lg relative"
                  style={{ backgroundImage: `url(${movie.portraitImgUrl})` }}
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

                  <p className="flex items-center gap-1 text-sm md:text-base">
                    <span>{movie.duration}mins</span>
                    <span>•</span>
                    <span>{movie.genre.join(",")}</span>
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
            <p className="text-gray-500 text-base">{movie.description}</p>

            {/* Cast Section */}
            {movie.cast.length > 0 && (
              <div>
                <div className="w-full h-px bg-gray-300 my-5"></div>
                <h1 className="text-xl md:text-2xl font-semibold text-red-600">
                  Cast
                </h1>
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
                    {movie.cast.map(
                      (
                        cast: React.JSX.IntrinsicAttributes & CelebrityCardType,
                        index: React.Key | null | undefined
                      ) => {
                        return (
                          <SwiperSlide key={index}>
                            <CelebCard {...cast} />
                          </SwiperSlide>
                        );
                      }
                    )}
                  </Swiper>
                </div>
              </div>
            )}

            {/* Crew Section */}
            {movie.crew.length > 0 && (
              <div>
                <div className="w-full h-px bg-gray-300 my-5"></div>
                <h1 className="text-xl md:text-2xl font-semibold text-red-600">
                  Crew
                </h1>
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
                    {movie.crew.map(
                      (
                        crew: React.JSX.IntrinsicAttributes & CelebrityCardType,
                        index: React.Key | null | undefined
                      ) => (
                        <SwiperSlide key={index}>
                          <CelebCard {...crew} />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
              </div>
            )}

            <div className="w-full h-px bg-gray-300 my-5"></div>

            {/* Recommendations Section */}
            <h1 className="text-xl md:text-2xl font-semibold text-red-600">
              You might also like
            </h1>
            <MovieCarousel />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
