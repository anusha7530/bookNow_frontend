import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img2 from "../../../public/slider/img3.jpg";
import img3 from "../../../public/slider/img2.png";

const HomeSlider = () => {
  const banners = [
    {
      imgUrl: img3,
    },
    {
      imgUrl: img2,
    }
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper bg-gray-800 max-h-96"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt="ads"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
