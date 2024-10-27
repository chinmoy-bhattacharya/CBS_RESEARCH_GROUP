import PropTypes from "prop-types";
import React from "react";

const ProjectCard = ({ projectTitle, status, projectDetails }) => {
  return (
    <section className="bg-white dark:bg-slate-700 mt-12 p-6 rounded-lg shadow-lg relative">
      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-200">
        {projectTitle}
      </h3>
      <p className="text-sm mb-4 text-gray-500 dark:text-gray-300">
        By CBS Research Group
      </p>

      <div className="flex space-x-2 mb-4">
        {status == "completed" ? (
          <span className="bg-blue-100 dark:bg-slate-500 dark:text-blue-200 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
            Completed
          </span>
        ) : (
          <span className="bg-green-100 dark:bg-slate-500 dark:text-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            On Going
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-base leading-2 mb-6">
        {projectDetails}
      </p>
    </section>
  );
};

ProjectCard.propTypes = {
  projectTitle: PropTypes.string,
  status: PropTypes.string,
  projectDetails: PropTypes.string,
};
export default ProjectCard;
