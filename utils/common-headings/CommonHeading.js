import React from "react";

const CommonHeading = ({ Heading, subHeading }) => {
  return (
    <section className="px-12 py-12 bg-gray-50 dark:bg-slate-800">
      <h2 className="text-2xl font-semibold text-center mb-2 text-gray-700 dark:text-gray-200">
        {Heading}
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-300">
        {subHeading}
      </p>
    </section>
  );
};

export default CommonHeading;
