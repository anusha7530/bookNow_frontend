import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const HomeSlider = () => {

  const [banners, setBanners] = useState([
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1740735555492_cinepolisweb.jpg'
    },
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1740748451000_marlolla1240x300.jpg'
    }
])

const width = window.innerWidth;
const height = window.innerHeight;
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt="ads"
              width={width} height={height / 2}
              className="object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
