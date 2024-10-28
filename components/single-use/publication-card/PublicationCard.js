import Image from "next/image";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
const PublicationCard = ({
  publishedAt,
  publicationTitle,
  Contributer,
  seeDetailsLink,
  publicationThumbnail,
}) => {
  return (
    <div
      className="flex h-[500px] lg:h-[300px] xl:h-[300px] w-full items-center py-8
     justify-center overflow-x-hidden overflow-y-scroll
     [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
    >
      <div className="relative bg-white dark:bg-slate-700 flex items-center w-full flex-col lg:flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-full min-h-full lg:w-2/5 shrink-0 rounded-xl rounded-r-none bg-clip-border text-gray-700">
          <Image
            src={publicationThumbnail}
            alt="image"
            width={500}
            height={500}
            className="h-full w-full lg:h-[250px] lg:w-[500px] rounded-lg shadow-lg"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block  text-base font-semibold leading-relaxed tracking-normal text-blue-600 dark:text-yellow-500">
            Published At:{" "}
            <span className="text-gray-600 dark:text-gray-300">
              {new Date(publishedAt).toLocaleDateString()}
            </span>
          </h6>
          <h4 className="mb-2 block  text-lg font-semibold leading-snug tracking-normal text-gray-800 dark:text-gray-300">
            {publicationTitle}
          </h4>
          <hr className="my-2 border border-gray-300 dark:border-gray-800" />
          <p className="mb-8 block text-sm md:text-base lg:text-base font-normal leading-relaxed text-gray-700 dark:text-gray-400">
            {Contributer}
          </p>
          <Link className="inline-block" href={seeDetailsLink}>
            <span className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-blue-600 dark:text-yellow-500 transition-all hover:bg-blue-100 dark:hover:bg-yellow-100 active:bg-blue-100 dark:active:bg-yellow-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Learn More &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

PublicationCard.propTypes = {
  publishedAt: PropTypes.string,
  publicationTitle: PropTypes.string,
  Contributer: PropTypes.string,
  seeDetailsLink: PropTypes.string,
  publicationThumbnail: PropTypes.string,
};

export default PublicationCard;
