import dynamic from "next/dynamic";
import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";

const StudentPreview = dynamic(
  () => import("@/components/multiple-use/student-preview/StudentPreview.js"),
  {
    loading: () => <ApplicationSpinner />,
  }
);

export const metadata = {
  title: "Alumni Profile | CBS Research Group",
  description:
    "Details about the alumni of IIEST Shibpur Chemistry depertment lab (CBS Research Group).",
  keywords:
    "alumni, IIEST Shibpur Chemistry depertment lab, CBS Research Group, Doctorate, Masters",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Alumni Profile | CBS Research Group",
    description:
      "Details about the alumni of IIEST Shibpur Chemistry depertment lab (CBS Research Group). The Government of India proposed IIEST in 2007 to address the growing need for qualified personnel in research and development, as well as in the industrial and service sectors. The first college to become an IIEST was IIEST, Shibpur in 2014",
    type: "profile",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com",
    image: "/favicon_io/favicon.ico?v=4",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

async function AlumnusProfile({ params }) {
  const { type, id } = await params;
  const isDoctorate = type === "doctorate";
  const apiUrl = isDoctorate
    ? envConfig.doctorateAlumniApiUrl
    : envConfig.mastersAlumniApiUrl;

  try {
    const alumnusInfo = await getRequest_single(apiUrl, id);

    if (!alumnusInfo || typeof alumnusInfo !== "object") {
      return (
        <div className="py-24">
          <h1>No alumnus data found</h1>
        </div>
      );
    }

    const dynamicMetadata = {
      ...metadata,
      title: `${alumnusInfo.alumniName} | CBS Research Group`,
      description: `Profile of ${alumnusInfo.alumniName}, a distinguished alumnus of CBS Research Group.`,
      openGraph: {
        ...metadata.openGraph,
        title: `${alumnusInfo.alumniName} | CBS Research Group`,
        description: `Profile of ${alumnusInfo.alumniName}, a distinguished alumnus of CBS Research Group.`,
        image: alumnusInfo.profilePicture || metadata.openGraph.image,
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
        <main className="bg-gray-50 dark:bg-slate-800 py-24">
          <StudentPreview
            studentName={alumnusInfo.alumniName}
            profileImageUrl={alumnusInfo.profilePicture}
            previewHeading={
              isDoctorate ? "Doctorate Alumnus" : "Masters Alumnus"
            }
            googleScholarId={alumnusInfo.googleScholarId}
            researchGateId={alumnusInfo.researchGateId}
            emailId={alumnusInfo.emailId}
            phoneNumber={alumnusInfo.phoneNumber}
            bscCollege={alumnusInfo.bscDoneFrom}
            mscCollege={alumnusInfo.mscDoneFrom}
            yearOfPassout={alumnusInfo.yearOfPassout}
            currentYear={null} // Update if necessary
            aboutInfo={alumnusInfo.details}
            goBackLink="/alumni"
          />
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching alumnus data:", error);

    return (
      <div className="py-24">
        <h1>Error fetching alumnus data</h1>
      </div>
    );
  }
}

AlumnusProfile.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlumnusProfile;
