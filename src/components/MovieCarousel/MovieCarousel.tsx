import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MovieCardType } from "@/types/types";
import MovieCard from "./MovieCard";

const MovieCarousel = () => {
  
  const [user, setUser] = useState<any>(null);
  const [movies, setMovies] = useState<MovieCardType[]>([]);

  const getuser = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => {
              return res.json();
          })
          .then((response) => {
              if(response.ok){
                  setUser(response.data)
              }
              else{
                  window.location.href = "/auth/signin"
              }
          })
          .catch((error) => {
              console.log(error)
          })

  }

  const getMovies = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => res.json())
          .then((data) => {
              if(data.ok){
                  setMovies(data.data)
              }
          })
          .catch((err) => {
              console.log(err);
          })
  }

  useEffect(() => {
      getuser()
      getMovies()
  }, [])

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
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie._id}>
                <MovieCard movie={movie} user={user}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };
export default MovieCarousel;
