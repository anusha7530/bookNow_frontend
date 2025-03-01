import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MovieCardType } from "@/types/types";
import MovieCard from "./MovieCard";

const MovieCarousel = () => {
  const Movies: MovieCardType[] = [
    {
      title: "Inception",
      portraitImgUrl:
        "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      landscapeImgUrl:
        "https://image.tmdb.org/t/p/w780/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
      _id: "movie-1",
      rating: 8.8,
      genre: ["Sci-Fi", "Thriller", "Action"],
    },
    {
      title: "Interstellar",
      portraitImgUrl:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      landscapeImgUrl:
        "https://image.tmdb.org/t/p/w780/rAiYTfKGqDCRIIqoNMqzTPqU0vV.jpg",
      _id: "movie-2",
      rating: 8.6,
      genre: ["Sci-Fi", "Drama", "Adventure"],
    },
    {
      title: "Parasite",
      portraitImgUrl:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      landscapeImgUrl:
        "https://image.tmdb.org/t/p/w780/yzGxFt7ggbE0A4S3fX0uvRsZy5b.jpg",
      _id: "movie-3",
      rating: 8.5,
      genre: ["Thriller", "Drama"],
    },
    {
      title: "The Dark Knight",
      portraitImgUrl:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      landscapeImgUrl:
        "https://image.tmdb.org/t/p/w780/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      _id: "movie-4",
      rating: 9.0,
      genre: ["Action", "Crime", "Drama"],
    },
    {
      title: "La La Land",
      portraitImgUrl:
        "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      landscapeImgUrl:
        "https://image.tmdb.org/t/p/w780/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg",
      _id: "movie-5",
      rating: 8.0,
      genre: ["Musical", "Romance", "Drama"],
    },
  ];

  return (
    <div className="sliderout">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Movies.map((Movie) => {
          return (
            <SwiperSlide key={Movie._id}>
              <MovieCard {...Movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
