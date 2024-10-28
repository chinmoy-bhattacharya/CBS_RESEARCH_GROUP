import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/images/background/HomePage-Banner.webp";
import Link from "next/link";
const LandingBanner = () => {
  return (
    <section className="relative isolate">
      <Image
        src={backgroundImage}
        width={500}
        height={500}
        alt="backgroundImage"
        className="absolute min-h-full inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="blurBackground relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white sm:text-3xl dark:text-gray-300">
              Welcome To{" "}
              <span className="text-yellow-500">
                Chinmoy Bhattacharya&apos;s
              </span>{" "}
              Research Lab
            </h1>
            <p className="mt-6 text-sm md:text-base lg:text-base leading-2 text-gray-200 dark:text-gray-400">
              The main motive of our research group is to build inorganic
              compound based semiconductors that will contribute to a better,
              sustainable and cleaner form of energy as an alternative towards
              the renewable sources of energy. We aim towards the betterment of
              the future in the most green way possible.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
            <div
              className="grid grid-cols-1 gap-x-8 gap-y-6 text-sm md:text-normal lg:text-lg font-semibold leading-7
             text-white sm:grid-cols-2 md:flex lg:gap-x-10"
            >
              {/* Group News */}
              <Link
                href="/news"
                className="transform translate-x hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-300"
              >
                Group News <span aria-hidden="true">&rarr;</span>
              </Link>
              {/* Lab Facilities */}
              <Link
                href="/lab-facilities"
                className="transform translate-x hover:scale-110 hover:text-yellow-400
                 dark:hover:text-yellow-400 dark:text-gray-300"
              >
                Lab Facilities <span aria-hidden="true">&rarr;</span>
              </Link>
              {/* About Us */}
              <Link
                href="/about"
                className="transform translate-x hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-300"
              >
                About Us <span aria-hidden="true">&rarr;</span>
              </Link>
              {/* Contct Us  */}
              <Link
                href="/contact"
                className="transform translate-x hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400 dark:text-gray-300"
              >
                Contct Us <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
