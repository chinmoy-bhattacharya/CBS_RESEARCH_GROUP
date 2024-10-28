"use client";
import PropTypes from "prop-types";
import { useState } from "react";

const ReadAbstract = ({ content }) => {
  const [showHideContent, setShowHideContent] = useState(false);
  const handleContentShowHide = () => setShowHideContent((prev) => !prev);
  return (
    <section className="text-center pt-12">
      {showHideContent === true && (
        <>
          <h4 className="text-gray-700 dark:text-gray-200 text-center font-semibold text-xl">
            Abstract
          </h4>
          <article
            className="px-4 md:px-10 text-gray-600
               dark:text-gray-300 pt-6 text-sm md:text-base lg:text-base leading-2"
          >
            {content}
          </article>
        </>
      )}
      <button
        onClick={handleContentShowHide}
        className="text-blue-500 font-semibold hover:text-blue-600
        mt-8 dark:text-yellow-500 dark:hover:text-yellow-600"
      >
        {showHideContent === false ? "Read abstract..." : "Hide abstract..."}
      </button>
    </section>
  );
};

ReadAbstract.propTypes = {
  content: PropTypes.string,
};

export default ReadAbstract;
