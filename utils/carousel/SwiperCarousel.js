"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "@/app/globals.css";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import PropTypes from "prop-types";

const SwiperCarousel = ({ imageOne, imageTwo, imageThree }) => {
  // Ensure images are defined and not causing hydration issues
  const images = [imageOne, imageTwo, imageThree].filter(Boolean);

  return (
    <div className="flex justify-center items-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper flex justify-center items-center"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center shadow-lg bg-white dark:bg-slate-700 h-64"
          >
            <Image
              src={src}
              alt={`Publication Graphics ${index + 1}`}
              height={500}
              width={500}
              priority
              loading="eager"
              quality={70}
              className="rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SwiperCarousel.propTypes = {
  imageOne: PropTypes.string,
  imageTwo: PropTypes.string,
  imageThree: PropTypes.string,
};

export default SwiperCarousel;
