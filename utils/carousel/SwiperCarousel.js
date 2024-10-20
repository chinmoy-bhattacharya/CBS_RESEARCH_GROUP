"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "@/app/globals.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const SwiperCarousel = ({ imageOne, imageTwo, imageThree }) => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-lg bg-white dark:bg-slate-700">
          <Image
            src={imageOne}
            alt={"First Publication Graphics"}
            height={500}
            width={500}
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg bg-white dark:bg-slate-700">
          <Image
            src={imageTwo}
            alt={"Second Publication Graphics"}
            height={500}
            width={500}
          />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg bg-white dark:bg-slate-700">
          <Image
            src={imageThree}
            alt={"Third Publication Graphics"}
            height={500}
            width={500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
