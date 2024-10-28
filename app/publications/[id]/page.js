import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

const SwiperCarousel = dynamic(
  () => import("@/utils/carousel/SwiperCarousel.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const ReadAbstract = dynamic(
  () => import("@/components/single-use/publication-abstract/ReadAbstract.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "Publication Details | CBS Research Group",
  description:
    "Details about the publication of IIEST Shibpur Chemistry depertment lab (CBS Research Group).",
  keywords:
    "publication, IIEST Shibpur Chemistry depertment lab, CBS Research Group, Doctorate, Masters",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Publication Details | CBS Research Group",
    description:
      "Details about the publication of IIEST Shibpur Chemistry depertment lab (CBS Research Group). The Government of India proposed IIEST in 2007 to address the growing need for qualified personnel in research and development, as well as in the industrial and service sectors. The first college to become an IIEST was IIEST, Shibpur in 2014",
    type: "profile",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/publications",
    image: "/favicon_io/favicon.ico?v=4",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical:
      "https://www.chinmoybhattacharyaelectrochemistry.com/publications",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const SinglePublication = async ({ params }) => {
  const { id } = await params;
  const getPublicationById = await getRequest_single(
    envConfig.publicationsApiUrl,
    id
  );

  const dynamicMetadata = {
    ...metadata,
    title: `${getPublicationById.title} | CBS Research Group`,
    description: `${getPublicationById.aboutPublication}.`,
    author: `${getPublicationById.contributer}`,
    openGraph: {
      ...metadata.openGraph,
      title: `${getPublicationById.title} | CBS Research Group`,
      description: `${getPublicationById.aboutPublication}.`,
      image:
        getPublicationById.publicationThumbnail || metadata.openGraph.image,
    },
  };

  return (
    <>
      <Head>
        <title>{dynamicMetadata.title}</title>
        <meta name="description" content={dynamicMetadata.description} />
        <meta name="keywords" content={dynamicMetadata.keywords} />
        <meta name="author" content={dynamicMetadata.author} />
        <meta name="viewport" content={viewport} />
        <meta property="og:title" content={dynamicMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={dynamicMetadata.openGraph.description}
        />
        <meta property="og:type" content={dynamicMetadata.openGraph.type} />
        <meta property="og:url" content={dynamicMetadata.openGraph.url} />
        <meta property="og:image" content={dynamicMetadata.openGraph.image} />
        <meta
          httpEquiv={dynamicMetadata.additional.httpEquiv}
          content={dynamicMetadata.additional.content}
        />
        <link rel="canonical" href={dynamicMetadata.additional.canonical} />
        <link rel="icon" href={dynamicMetadata.additional.icon} />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-slate-800 py-28">
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-content-center">
          <SwiperCarousel
            imageOne={
              getPublicationById && getPublicationById.publicationThumbnail
            }
            imageTwo={getPublicationById && getPublicationById.firstOverview}
            imageThree={getPublicationById && getPublicationById.secondOverview}
          />

          <div className="p-6 lg:pl-0 lg:pr-24">
            <h1 className="mt-2">
              <span className="text-blue-500 dark:text-yellow-500 font-semibold mr-2">
                Published At:
              </span>
              <time className="text-gray-500 dark:text-gray-300">
                {getPublicationById &&
                  new Date(
                    getPublicationById.publishedDate
                  ).toLocaleDateString()}
              </time>
            </h1>
            <h2 className="text-lg text-start lg:text-xl font-semibold text-gray-700 dark:text-gray-200">
              {getPublicationById && getPublicationById.title}
            </h2>

            <h3 className="text-gray-600 dark:text-gray-300 font-medium my-4 text-sm md:text-base lg:text-base">
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
                    getPublicationById &&
                    `https://${getPublicationById.pdfLink}`
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

        <ReadAbstract
          content={getPublicationById && getPublicationById.aboutPublication}
        />
      </main>{" "}
    </>
  );
};
SinglePublication.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePublication;
