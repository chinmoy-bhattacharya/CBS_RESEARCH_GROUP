import PropTypes from "prop-types";
import React from "react";

const NewsCard = ({ createAt, newsTitle, newsDescription }) => {
  return (
    <section
      className="my-8 block rounded-lg bg-white
       dark:bg-slate-700 text-surface
     dark:bg-surface-dark dark:text-white shadow-lg mx-2"
    >
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
        <span className="text-blue-500 dark:text-yellow-500 font-medium mr-2">
          Posted:
        </span>
        <span className="text-gray-600 dark:text-gray-300 font-normal">
          {new Date(createAt).toLocaleDateString()}
        </span>
      </div>
      <div className="p-6">
        <blockquote>
          <p className="text-xl">{newsTitle}.</p>
        </blockquote>
        <figcaption className="text-md text-blue-500 dark:text-yellow-500">
          - From CBS Research Group{" "}
          <cite
            title="Source Title"
            className="text-gray-600 dark:text-gray-300 text-sm md:text-normal lg:text-normal"
          >
            {newsDescription}
          </cite>
        </figcaption>
      </div>
    </section>
  );
};

NewsCard.propTypes = {
  createAt: PropTypes.string,
  newsTitle: PropTypes.string,
  newsDescription: PropTypes.string,
};

export default NewsCard;
