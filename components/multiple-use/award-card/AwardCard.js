import PropTypes from "prop-types";
import React from "react";

const AwardCard = ({ recivedDate, awardTitle, awardOverview }) => {
  return (
    <section
      className="my-8 block rounded-lg bg-white
    dark:bg-slate-700 text-surface
  dark:bg-surface-dark dark:text-white shadow-lg p-10 mx-2"
    >
      <div className="divide-y-2 divide-gray-200 dark:divide-gray-500">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 inline-flex items-center pb-2">
          <span className="font-semibold title-font text-gray-700 dark:text-gray-300 mr-2">
            Recived At:
          </span>
          <span className="mt-1 text-gray-500 dark:text-gray-200 text-sm">
            {recivedDate}
          </span>
        </div>
        <div className="md:flex-grow pt-2">
          <h2 className="text-lg lg:text-xl font-medium text-gray-600 dark:text-gray-300 title-font mb-2">
            {awardTitle}
          </h2>
          <p className="text-sm md:text-base lg:text-base leading-2 text-gray-500 dark:text-gray-300">
            {awardOverview}
          </p>
        </div>
      </div>
    </section>
  );
};
AwardCard.propTypes = {
  recivedDate: PropTypes.any,
  awardTitle: PropTypes.string,
  awardOverview: PropTypes.string,
};

export default AwardCard;
