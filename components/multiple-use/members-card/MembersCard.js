import React from "react";
import Image from "next/image";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import Link from "next/link";
import PropTypes from "prop-types";
import style from "./memberCard.module.css";
const MembersCard = ({
  studentType,
  currentYear,
  studentProfilePic,
  researchGateHandle,
  googlescholarHandle,
  studentName,
  overViewlink,
}) => {
  return (
    <section className="flex items-center justify-center">
      <div
        className={`relative bg-white dark:bg-slate-700 py-6 px-6 rounded-3xl 
      w-72 h-72 transform -translate-full hover:scale-110 duration-200 ${style.card} my-4 shadow-xl`}
      >
        <div
          className=" text-white flex items-center absolute rounded-full py-1 px-1 shadow-xl
           bg-blue-500 dark:bg-yellow-500 left-4 top-3"
        >
          <Image
            className="object-cover h-14 w-14 rounded-full shadow-xl"
            src={studentProfilePic}
            width={500}
            height={500}
            alt={`${studentName}'s Image`}
          />
        </div>
        <div className="mt-16 z-1">
          <p className="text-xl font-semibold my-2 dark:text-gray-200">
            {studentName}
          </p>
          <div className="flex space-x-2 text-gray-500 text-sm dark:text-gray-300">
            <PiStudentFill className="text-2xl text-gray-500 dark:text-gray-300" />
            <p>{studentType}</p>
          </div>
          <div className="flex space-x-2 text-gray-500 text-sm my-3 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>{currentYear}</p>
          </div>
          <div className="border-t-2 dark:border-gray-600"></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2 text-blue-400 inline-flex">
                <a
                  title="Google Scholar"
                  href={`https://${googlescholarHandle}`}
                  target="_blank"
                  className="transform translate-1 hover:scale-110 mr-3"
                >
                  <FaGoogleScholar className="text-2xl text-blue-500" />
                </a>

                <a
                  title="Research Gate"
                  href={`https://${researchGateHandle}`}
                  target="_blank"
                  className="transform translate-1 hover:scale-110"
                >
                  <FaResearchgate className="text-2xl text-orange-400 rounded-full" />
                </a>
              </p>
              <div className="flex space-x-2"></div>
            </div>
            <div className="my-2 transform translate-1 hover:scale-110">
              <Link
                href={overViewlink}
                className="font-semibold text-base mb-2 text-blue-600 hover:text-slate-800 dark:text-yellow-500"
              >
                About &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MembersCard.propTypes = {
  studentType: PropTypes.string,
  currentYear: PropTypes.string,
  studentProfilePic: PropTypes.string,
  researchGateHandle: PropTypes.string,
  googlescholarHandle: PropTypes.string,
  studentName: PropTypes.string,
  overViewlink: PropTypes.string,
};

export default MembersCard;
