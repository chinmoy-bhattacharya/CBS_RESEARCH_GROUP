import React from "react";
import PropTypes from "prop-types";

const CommonHeading = ({ Heading, subHeading, customColorHeadig }) => {
  return (
    <section className="px-12 py-12 bg-gray-50 dark:bg-slate-800">
      <h2
        className={`${
          customColorHeadig
            ? customColorHeadig
            : "text-gray-700 dark:text-gray-200"
        } text-2xl font-semibold text-center mb-2`}
      >
        {Heading}
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-300">
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
