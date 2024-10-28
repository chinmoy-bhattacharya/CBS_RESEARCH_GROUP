import Image from "next/image";
import React from "react";
import profProfileImg from "@/public/images/client/professor_profile-image.webp";
import Readmore from "./Readmore.js";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";
import { FaOrcid } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
const ProfProfile = () => {
  return (
    <div>
      <div className="w-full p-0 lg:p-16">
        <div className="p-8 bg-white dark:bg-slate-700 shadow-lg rounded-md mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            {/* Citations, h-index, i10-index */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center
             order-last md:order-first mt-20 md:mt-0"
            >
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                  1290
                </p>{" "}
                <p className="text-gray-400">Citations</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                  22
                </p>{" "}
                <p className="text-gray-400">h-index</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                  33
                </p>{" "}
                <p className="text-gray-400">i10-index</p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Prof Image  */}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <Image
                  src={profProfileImg}
                  alt="Prof. Chinmoy Bhattacharya"
                  quality={100}
                  loading="eager"
                  priority
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>{" "}
            </div>{" "}
            {/* Journal Articles, Conference Proceedings, Projects */}
            <div className="flex items-center mt-32 md:mt-0 md:justify-center">
              <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-10 text-center order-last md:order-first mt-20 md:mt-0">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                    55
                  </p>{" "}
                  <p className="text-gray-400">Journal Articles</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                    2
                  </p>{" "}
                  <p className="text-gray-400">Conference Proceedings</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 dark:text-gray-300 text-xl">
                    8
                  </p>{" "}
                  <p className="text-gray-400">Projects </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b dark:border-gray-600 pb-8">
            {" "}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Dr. Chinmoy Bhattacharya
            </h1>{" "}
            <p className="font-normal text-gray-600 dark:text-gray-200 mt-3">
              IIEST Shibpur
            </p>{" "}
            <p className="mt-8 text-gray-500 dark:text-gray-300">
              Associate Professor, Department of Chemistry
            </p>{" "}
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Indian Institute of Engineering Science & Technology
            </p>{" "}
            <section className="w-full md:w-4/6 lg:w-2/5 xl:1/3 2xl:1/4 mx-auto my-4 text-gray-500 dark:text-gray-300">
              <div className="flex flex-col md:flex-row justify-around items-center">
                <h2 className="font-medium text-md">
                  PhD Students Guided: <span>08 </span>
                </h2>
                <h2 className="font-medium text-md">
                  PhD Students Working: <span>04</span>
                </h2>
              </div>
            </section>
            <section className="w-full xs:w-3/4 sm:w-3/5 lg:w-1/3 xl:w-1/4 mx-auto mt-6">
              <div className="flex flex-row justify-around item-center">
                <a
                  href="https://scholar.google.com/citations?user=7Be7e7IAAAAJ&hl=en"
                  title="Google Scholar"
                  target="_blank"
                >
                  <FaGoogleScholar className="text-2xl text-blue-500 transform translate-x hover:scale-110" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2"
                  title="Research Gate"
                  target="_blank"
                >
                  <FaResearchgate className="text-2xl text-orange-500 transform translate-x hover:scale-110" />
                </a>

                <a
                  href="https://orcid.org/0000-0003-2370-7108"
                  target="_blank"
                  title="Orcid"
                >
                  <FaOrcid className="text-2xl text-lime-500 transform translate-x hover:scale-110" />
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=7006023691"
                  title="Scopus"
                  target="_blank"
                >
                  <SiScopus className="text-2xl text-orange-500 transform translate-x hover:scale-110" />
                </a>
                <a
                  href="https://vidwan.inflibnet.ac.in/profile/93345"
                  target="_blank"
                  title="Vidyan"
                >
                  <GiLightBulb className="text-2xl text-blue-500 transform translate-x hover:scale-110" />
                </a>
              </div>
            </section>
          </div>{" "}
          <Readmore />
        </div>
      </div>
    </div>
  );
};

export default ProfProfile;
