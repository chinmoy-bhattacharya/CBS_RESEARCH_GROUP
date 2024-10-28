"use client";
import Image from "next/image";
import React, { useCallback, useRef, useState, useEffect, memo } from "react";
import galleryImage_1 from "@/public/images/gallery/gallery_image_1.webp";
import galleryImage_2 from "@/public/images/gallery/gallery_image_2.webp";
import galleryImage_3 from "@/public/images/gallery/gallery_image_3.webp";
import galleryImage_4 from "@/public/images/gallery/gallery_image_4.webp";
import galleryImage_5 from "@/public/images/gallery/gallery_image_5.webp";
import galleryImage_6 from "@/public/images/gallery/gallery_image_6.webp";
import galleryImage_7 from "@/public/images/gallery/gallery_image_7.webp";
import galleryImage_8 from "@/public/images/gallery/gallery_image_8.webp";
import galleryImage_9 from "@/public/images/gallery/gallery_image_9.webp";
import galleryImage_10 from "@/public/images/gallery/gallery_image_10.webp";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
const PhotoGallery = () => {
  const imageRef = useRef(null);
  const [openFullImage, setOpenFullImage] = useState(false);
  const [images, setImages] = useState({
    path: null,
    height: "",
    width: "",
  });
  const galleryImages = [
    {
      id: 1,
      path: galleryImage_1,
    },
    {
      id: 2,
      path: galleryImage_2,
    },
    {
      id: 3,
      path: galleryImage_3,
    },
    {
      id: 4,
      path: galleryImage_4,
    },
    {
      id: 5,
      path: galleryImage_5,
    },
    {
      id: 6,
      path: galleryImage_6,
    },
    {
      id: 7,
      path: galleryImage_7,
    },
    {
      id: 8,
      path: galleryImage_8,
    },
    {
      id: 9,
      path: galleryImage_9,
    },
    {
      id: 10,
      path: galleryImage_10,
    },
  ];

  const openCloseImage = useCallback((id) => {
    if (id === 1) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_1,
        height: "h-full",
        width: "w-full",
      });
    }
    if (id === 2) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_2,
        height: "h-full",
        width: "w-full",
      });
    }
    if (id === 3) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_3,
        height: "h-full",
        width: "w-full",
      });
    }
    if (id === 4) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_4,
        height: "h-full",
        width: "w-full",
      });
    }
    if (id === 5) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_5,
        height: "h-[300px] mx-auto block",
        width: "w-[500px] mx-auto block mb-20",
      });
    }
    if (id === 6) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_6,
        height: "h-[250px] mx-auto block",
        width: "w-[400px] mx-auto block",
      });
    }
    if (id === 7) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_7,
        height: "h-[300px] mx-auto block",
        width: "w-[500px] mx-auto block",
      });
    }
    if (id === 8) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_8,
        height: "h-[300px] mx-auto block",
        width: "w-[500px] mx-auto block",
      });
    }
    if (id === 9) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_9,
        height: "h-full",
        width: "w-full",
      });
    }
    if (id === 10) {
      setOpenFullImage(true);
      setImages({
        path: galleryImage_10,
        height: "h-full",
        width: "w-full",
      });
    }
  }, []);
  const handleImageClose = useCallback(() => setOpenFullImage(false), []);

  //4. Click outside and close navbar function
  const handleClickOutside = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setOpenFullImage(false);
    }
  };

  //5. Click outside and close navbar event listen
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    if (openFullImage) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openFullImage]);

  return (
    <section className="bg-gray-50 dark:bg-slate-800 pb-0 lg:pb-28 lg:min-h-screen">
      {openFullImage === true && (
        <IoClose
          className="text-4xl font-extrabold cursor-pointer float-end lg:relative lg:top-12 lg:right-6 dark:text-white"
          onClick={handleImageClose}
        />
      )}
      <div className="container mx-auto px-5 py-2  lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2 justify-end">
          {openFullImage === true ? (
            <>
              <div className={`${images.height} ${images.width} `}>
                <Image
                  ref={imageRef}
                  src={images && images.path}
                  quality={100}
                  loading="eager"
                  priority
                  height={images.height}
                  width={images.width}
                  alt="full_image"
                  className="pb-20"
                  data-aos="zoom-in"
                />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 ">
              {galleryImages &&
                galleryImages.map((item, index) => (
                  <div
                    className="w-full p-1 md:p-2"
                    key={index}
                    onClick={() => openCloseImage(item.id)}
                  >
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                      src={item.path}
                      loading="lazy"
                      quality={100}
                      height={500}
                      width={500}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(PhotoGallery);
