import PropTypes from "prop-types";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const ContentDisplayer = ({
  courseTitle,
  courseCode,
  classess,
  colseModel,
}) => {
  return (
    <section className="fixed inset-0 p-4 flex flex-wrap justify-center items-center blurBackground w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 relative">
        <div className="flex items-start border-b border-gray-300 dark:border-gray-600 pb-4">
          <div className="flex-1">
            <h3 className="text-gray-800 dark:text-gray-200 text-xl font-bold">
              Course Details
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              See a detailed summary of course to login as a student.
            </p>
          </div>
          <IoCloseSharp
            className="text-2xl cursor-pointer transform translate-x hover:scale-110 hover:text-red-600"
            onClick={colseModel}
          />
        </div>

        <div className="my-8">
          <ul className="text-gray-800 text-left dark:text-gray-300 space-y-4">
            {/* Course Name: */}
            <li className=" text-sm font-bold">
              Course Name:
              <span className="ml-3 font-normal">{courseTitle}</span>
            </li>
            {/* Course Code: */}
            <li className=" text-sm font-bold">
              Course Code:
              <span className="ml-3 font-normal">{courseCode}</span>
            </li>
            {/* Classes */}
            <li className=" text-sm font-bold">
              Classes:
              <span className="ml-3 font-normal"> {classess}</span>
            </li>
          </ul>
        </div>

        <div className="flex max-sm:flex-col items-center gap-4 mt-8">
          <button
            onClick={colseModel}
            type="button"
            className="text-sm px-4 py-2.5 w-full tracking-wide bg-transparent
             hover:bg-gray-50 dark:hover:bg-gray-950 dark:text-gray-300 text-gray-800 border
              border-gray-300 dark:border-gray-600 rounded-lg max-sm:order-1"
          >
            Cancel
          </button>
          <a
            href="https://www.iiests.ac.in/IIEST/StudentLogin"
            target="_blank"
            className="text-sm px-4 py-2.5 w-full tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center"
          >
            Student Login
          </a>
        </div>
      </div>
    </section>
  );
};

ContentDisplayer.proptypes = {
  courseTitle: PropTypes.string,
  courseCode: PropTypes.string,
  classess: PropTypes.string,
  colseModel: PropTypes.func,
};

export default ContentDisplayer;
