import React from "react";
import PropTypes from "prop-types";

const CommonHeading = ({ Heading, subHeading, customColorHeadig }) => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800">
      <h2
        className={`${
          customColorHeadig
            ? customColorHeadig
            : "text-gray-700 dark:text-gray-200"
        } text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-2 px-12`}
      >
        {Heading}
      </h2>
      <p className="text-center px-2 md:px-6 text-sm md:text-base lg:text-base leading-2 text-gray-500 dark:text-gray-300">
        {subHeading}
      </p>
    </section>
  );
};
CommonHeading.propTypes = {
  Heading: PropTypes.string,
  subHeading: PropTypes.string,
  customColorHeadig: PropTypes.string || null,
};

export default CommonHeading;
