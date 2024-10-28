import dynamic from "next/dynamic";
import getRequest_all from "@/apis/getRequestAll.js";
import React from "react";
import alumni_banner from "@/public/images/background/alumni_banner-background.webp";
import envConfig from "@/config/envConfig.js";
import Head from "next/head";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const AlumniCard = dynamic(
  () => import("@/components/multiple-use/alumni-card/AlumniCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "Alumni | CBS Research Group",
  description:
    "Explore the alumni of the CBS Research Group at IIEST Shibpur, featuring their contributions and achievements in the field of electrochemistry.",
  keywords:
    "alumni, CBS Research Group, IIEST Shibpur, electrochemistry, researchers, achievements",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Alumni | CBS Research Group",
    description:
      "Discover the contributions of alumni from the CBS Research Group, Indian Institute of Engineering Science and Technology.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/alumni",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology. Joined on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
    image:
      "https://www.iiests.ac.in/assets/images/faculty/chem-faculty_chinmoy-bhattacharya.jpg",
  },
  googlescholar: {
    card: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology.",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
  },
  researchgate: {
    card: "https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, Howrah, India. Researcher in Chemistry.",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur. Specializing in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur. Focused on Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur. Committed to advancing research in Chemistry.",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/alumni",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const Alumni = async () => {
  const getAllDoctorateAlumni = await getRequest_all(
    envConfig.doctorateAlumniApiUrl
  );
  const getAllMastersAlumni = await getRequest_all(
    envConfig.mastersAlumniApiUrl
  );

  const alumniDetails = [...getAllDoctorateAlumni, ...getAllMastersAlumni];

  const firstAlumni = alumniDetails[0] || {};

  const dynamicMetadata = {
    ...metadata,
    title: `${firstAlumni.alumniName} | CBS Research Group`,
    description: `Profile of ${firstAlumni.alumniName}, a distinguished alumni of CBS Research Group.`,
    openGraph: {
      ...metadata.openGraph,
      title: `${firstAlumni.alumniName} | CBS Research Group`,
      description: `Profile of ${firstAlumni.alumniName}, a distinguished alumni of CBS Research Group.`,
      image: firstAlumni.profilePicture || metadata.openGraph.image,
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
        <meta name="iiest:card" content={dynamicMetadata.iiest.card} />
        <meta name="iiest:title" content={dynamicMetadata.iiest.title} />
        <meta
          name="iiest:description"
          content={dynamicMetadata.iiest.description}
        />
        <meta name="iiest:image" content={dynamicMetadata.iiest.image} />
        <meta
          name="googlescholar:card"
          content={dynamicMetadata.googlescholar.card}
        />
        <meta
          name="googlescholar:title"
          content={dynamicMetadata.googlescholar.title}
        />
        <meta
          name="googlescholar:description"
          content={dynamicMetadata.googlescholar.description}
        />
        <meta
          name="googlescholar:image"
          content={dynamicMetadata.googlescholar.image}
        />
        <meta
          name="researchgate:card"
          content={dynamicMetadata.researchgate.card}
        />
        <meta
          name="researchgate:title"
          content={dynamicMetadata.researchgate.title}
        />
        <meta
          name="researchgate:description"
          content={dynamicMetadata.researchgate.description}
        />
        <meta name="orcid:card" content={dynamicMetadata.orcid.card} />
        <meta name="orcid:title" content={dynamicMetadata.orcid.title} />
        <meta
          name="orcid:description"
          content={dynamicMetadata.orcid.description}
        />
        <meta name="orcid:image" content={dynamicMetadata.orcid.image} />
        <meta name="scopus:card" content={dynamicMetadata.scopus.card} />
        <meta name="scopus:title" content={dynamicMetadata.scopus.title} />
        <meta
          name="scopus:description"
          content={dynamicMetadata.scopus.description}
        />
        <meta name="vidyan:card" content={dynamicMetadata.vidyan.card} />
        <meta name="vidyan:title" content={dynamicMetadata.vidyan.title} />
        <meta
          name="vidyan:description"
          content={dynamicMetadata.vidyan.description}
        />
        <meta name="vidyan:image" content={dynamicMetadata.vidyan.image} />
        <meta
          httpEquiv={dynamicMetadata.additional.httpEquiv}
          content={dynamicMetadata.additional.content}
        />
        <link rel="canonical" href={dynamicMetadata.additional.canonical} />
        <link rel="icon" href={dynamicMetadata.additional.icon} />
      </Head>
      <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
        <CommonBanner
          bannerBackgroundImg={alumni_banner}
          headingFirst={"Introducing our "}
          UniqueHeading={"Distinguished Alumni"}
          headingLast={"of CBS Research Group."}
          subHeading={`Discover the achievements and contributions of our distinguished alumni from CBS Research Group, who have made a significant impact in their respective fields. Their dedication, expertise, and innovative work continue to inspire future generations of researchers and professionals.`}
        />

        <CommonHeading
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
          Heading={"Meet Our Doctorate Alumni.."}
          subHeading={
            "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
          }
        />
        {getAllDoctorateAlumni.length == 0 ? (
          <h2 className="text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
            At this time, information regarding alumni is not available.
          </h2>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-content-center"
          >
            {getAllDoctorateAlumni &&
              getAllDoctorateAlumni.map((alumnus, index) => (
                <AlumniCard
                  key={index}
                  alumnusImage={alumnus.profilePicture}
                  googleScholarId={alumnus.googleScholarId}
                  researchGateId={alumnus.researchGateId}
                  alumnusName={alumnus.alumniName}
                  emailId={alumnus.emailId}
                  phoneNumber={alumnus.phoneNumber}
                  alumnusProfileLink={`/alumni/doctorate/${alumnus._id}`}
                />
              ))}
          </div>
        )}
        <CommonHeading
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
          Heading={"Meet Our Masters Alumni.."}
          subHeading={
            "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
          }
        />
        {getAllMastersAlumni.length == 0 ? (
          <h2 className="pt-16 pb-28 text-xl font-semibold text-center mx-0 lg:mx-10 text-gray-600 dark:text-gray-300">
            At this time, information regarding alumni is not available.
          </h2>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-content-center"
          >
            {getAllMastersAlumni &&
              getAllMastersAlumni.map((alumnus, index) => (
                <AlumniCard
                  key={index}
                  alumnusImage={alumnus.profilePicture}
                  googleScholarId={alumnus.googleScholarId}
                  researchGateId={alumnus.researchGateId}
                  alumnusName={alumnus.alumniName}
                  emailId={alumnus.emailId}
                  phoneNumber={alumnus.phoneNumber}
                  alumnusProfileLink={`/alumni/masters/${alumnus._id}`}
                />
              ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Alumni;
