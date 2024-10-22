import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const CommonBanner = ({
  bannerBackgroundImg,
  headingFirst,
  UniqueHeading,
  headingLast,
  subHeading,
}) => {
  return (
    <section className="relative isolate">
      <Image
        src={bannerBackgroundImg}
        alt="backgroundImage"
        className="absolute min-h-full inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="extraBlurBackground relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10
           sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr 
          from-[#ff4694] to-[#776fff] opacity-20"
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex justify-center item-center ">
          <div className="mx-auto max-w-full lg:mx-0 ">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl dark:text-gray-300">
              {headingFirst}
              <span className="text-yellow-500 mx-2">{UniqueHeading}</span>
              {headingLast}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200 dark:text-gray-400">
              {subHeading}
            </p>
          </div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl
           sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694]
           to-[#776fff] opacity-20"
          ></div>
        </div>
      </div>
    </section>
  );
};

CommonBanner.propType = {
  bannerBackgroundImg: PropTypes.string,
  headingFirst: PropTypes.string || null,
  UniqueHeading: PropTypes.string || null,
  headingLast: PropTypes.string || null,
  subHeading: PropTypes.string,
};

export default CommonBanner;
