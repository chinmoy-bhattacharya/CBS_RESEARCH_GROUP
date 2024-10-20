import Image from "next/image";
import React from "react";
import Publication_banner from "@/public/images/background/Publication_banner.png";

const PublicationBanner = () => {
  return (
    <section className="relative isolate">
      <Image
        src={Publication_banner}
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl dark:text-gray-300">
              Here Are All{" "}
              <span className="text-yellow-500">Publication&apos;s</span> Of CBS
              Research Group
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200 dark:text-gray-400">
              Our research work mainly focusses on different synthetic routes of
              various photocatalysts or semiconductors that are basically oxides
              of inorganic compound. Using these, we check their
              photoelectrochemical and photocatalytic activity so that they can
              be useful in the modern world. Additionally, our research group
              also works in the field of Corrosion Chemistry. All the published
              papers till date has been provided here, you can freely access
              them and get a thorough understanding about the research work of
              our lab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationBanner;
