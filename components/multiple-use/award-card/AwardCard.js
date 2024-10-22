import PropTypes from "prop-types";
import React from "react";

const AwardCard = ({ recivedDate, awardTitle, awardOverview }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden my-4">
      <div className="container w-full py-2 mx-auto bg-white dark:bg-slate-700 dark:text-gray-300 shadow-xl rounded-md px-4">
        <div className="divide-y-2 divide-gray-100">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 dark:text-gray-300">
                Recived At:
              </span>
              <span className="mt-1 text-gray-500 dark:text-gray-200 text-sm">
                {recivedDate}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 title-font mb-2">
                {awardTitle}
              </h2>
              <p className="leading-relaxed text-md">{awardOverview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
AwardCard.propType = {
  recivedDate: PropTypes.any,
  awardTitle: PropTypes.string,
  awardOverview: PropTypes.string,
};

export default AwardCard;
