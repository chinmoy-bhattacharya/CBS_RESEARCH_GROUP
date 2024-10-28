import React from "react";
import dynamic from "next/dynamic";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import Publication_banner from "@/public/images/background/Publication_banner.webp";
import Head from "next/head";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

const PublicationCard = dynamic(
  () => import("@/components/single-use/publication-card/PublicationCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "Publications | CBS Research Group",
  description:
    "Details about the publications of IIEST Shibpur Chemistry depertment lab (CBS Research Group).",
  keywords:
    "publications, IIEST Shibpur Chemistry depertment lab, CBS Research Group, Doctorate, Masters",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Publications | CBS Research Group",
    description:
      "Details about the publications of IIEST Shibpur Chemistry depertment lab (CBS Research Group). The Government of India proposed IIEST in 2007 to address the growing need for qualified personnel in research and development, as well as in the industrial and service sectors. The first college to become an IIEST was IIEST, Shibpur in 2014",
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

const Publications = async () => {
  const getAllPublications = await getRequest_all(envConfig.publicationsApiUrl);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-12">
      {getAllPublications.map((item, index) => (
        <Head key={index}>
          <title>{item.title}</title>
          <meta name="description" content={item.aboutPublication} />
          <meta name="keywords" content={item.title} />
          <meta name="author" content={item.contributer} />
          <meta name="viewport" content={viewport} />
          <meta property="og:title" content={item.title} />
          <meta property="og:description" content={item.aboutPublication} />
          <link rel="canonical" href={metadata.additional.canonical} />
          <link rel="icon" href={metadata.additional.icon} />
        </Head>
      ))}

      <CommonBanner
        bannerBackgroundImg={Publication_banner}
        headingFirst={"Here are all the"}
        UniqueHeading={"Publications"}
        headingLast={"from CBS Research Group."}
        subHeading={`Our research work mainly focusses on different synthetic routes of
              various photocatalysts or semiconductors that are basically oxides
              of inorganic compound. Using these, we check their
              photoelectrochemical and photocatalytic activity so that they can
              be useful in the modern world. Additionally, our research group
              also works in the field of Corrosion Chemistry. All the published
              papers till date has been provided here, you can freely access
              them and get a thorough understanding about the research work of
              our lab.`}
      />

      <CommonHeading
        customColorHeadig={null}
        Heading={"Explore all publications from CBS Research Group since 2013"}
        subHeading={
          "Browse the complete collection of publications from CBS Research Group since 2013, reflecting our commitment to advancing knowledge through innovative research. These works encompass a wide range of topics and disciplines, demonstrating the impact and contributions of our researchers to global academic and industry advancements."
        }
      />
      {getAllPublications.length == 0 ? (
        <h2 className="text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding publications is not available.
        </h2>
      ) : (
        getAllPublications &&
        getAllPublications.map((content, index) => (
          <PublicationCard
            key={index}
            publishedAt={content.publishedDate}
            publicationTitle={content.title}
            Contributer={content.contributer}
            publicationThumbnail={content.publicationThumbnail}
            seeDetailsLink={`/publications/${content._id}`}
          />
        ))
      )}
    </main>
  );
};

export default Publications;
