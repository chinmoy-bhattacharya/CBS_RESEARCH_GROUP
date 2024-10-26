import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
import dynamic from "next/dynamic";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { Suspense } from "react";

const SwiperCarousel = dynamic(() =>
  import("@/utils/carousel/SwiperCarousel.js")
);
const ReadAbstract = dynamic(() =>
  import("@/components/single-use/publication-abstract/ReadAbstract.js")
);

const SinglePublication = async ({ params }) => {
  const { id } = params;
  const getPublicationById = await getRequest_single(
    envConfig.publicationsApiUrl,
    id
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 py-28">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-content-center">
        <Suspense fallback={<ApplicationSpinner />}>
          <SwiperCarousel
            imageOne={
              getPublicationById && getPublicationById.publicationThumbnail
            }
            imageTwo={getPublicationById && getPublicationById.firstOverview}
            imageThree={getPublicationById && getPublicationById.secondOverview}
          />
        </Suspense>
        <div className="p-12 lg:pl-0 lg:pr-24">
          <h1 className="mt-2">
            <span className="text-blue-500 dark:text-yellow-500 font-semibold mr-2">
              Published At:
            </span>
            <time className="text-gray-500 dark:text-gray-300">
              {getPublicationById &&
                new Date(getPublicationById.publishedDate).toLocaleDateString()}
            </time>
          </h1>
          <h2 className="text-lg text-start lg:text-xl font-semibold text-gray-700 dark:text-gray-200">
            {getPublicationById && getPublicationById.title}
          </h2>

          <h3 className="text-gray-600 dark:text-gray-300 font-medium my-4">
            {getPublicationById && getPublicationById.contributer}
          </h3>
          <div className="flex justify-center items-center pt-4 lg:flex-row lg:justify-normal">
            <div className="shadow-md hover:bg-blue-100 dark:hover:bg-yellow-100 w-28 h-8 rounded-lg flex items-center justify-center mr-4">
              <Link
                href={"/publications"}
                className="text-md font-medium text-blue-500 hover:text-blue-700 dark:text-yellow-500 dark:hover:text-yellow-600 transform translate-x-1 hover:scale-110"
              >
                &larr; Go Back
              </Link>
            </div>
            <div className="shadow-md hover:bg-blue-100 dark:hover:bg-yellow-100 w-32 h-8 rounded-lg flex items-center justify-center">
              <a
                href={
                  getPublicationById && `https://${getPublicationById.pdfLink}`
                }
                target="_blank"
                className="text-md font-medium text-blue-500 hover:text-blue-700 dark:text-yellow-500 dark:hover:text-yellow-600 transform translate-x-1 hover:scale-110"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<ApplicationSpinner />}>
        <ReadAbstract
          content={getPublicationById && getPublicationById.aboutPublication}
        />
      </Suspense>
    </main>
  );
};
SinglePublication.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePublication;
