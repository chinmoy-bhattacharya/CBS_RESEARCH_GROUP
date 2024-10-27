import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import membersBackground from "@/public/images/background/members-banner-backgroun.png";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";

const MembersCard = dynamic(() =>
  import("@/components/multiple-use/members-card/MembersCard.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const CommonBanner = dynamic(() =>
  import("@/components/multiple-use/common-banner/CommonBanner.js")
);

// Fetch data for the page
const fetchData = async () => {
  const getAllProjectStudents = await getRequest_all(
    envConfig.projectStudentApiUrl
  );
  const getAllPHdStudents = await getRequest_all(envConfig.phdStudentApiUrl);
  return { getAllProjectStudents, getAllPHdStudents };
};

// Set dynamic metadata
export const metadata = {
  title: "Members | CBS Research Group",
  description:
    "Meet the members of the CBS Research Group, an electrochemistry lab at IIEST Shibpur. Our team includes experienced researchers and faculty dedicated to advancing the field of electrochemistry.",
  keywords:
    "members, CBS Research Group, electrochemistry, IIEST Shibpur, research team, Dr. Chinmoy Bhattacharya",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Members of CBS Research Group",
    description:
      "Explore the dedicated team of researchers at CBS Research Group, committed to innovative research in electrochemistry.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/members",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur. Joined as Assistant Professor on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
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
      "Associate Professor, Department of Chemistry, IIEST Shibpur, Howrah, India.",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, specializing in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, focusing on Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description: "Associate Professor, Department of Chemistry, IIEST Shibpur.",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/members",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const Members = async () => {
  const { getAllProjectStudents, getAllPHdStudents } = await fetchData();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-16">
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonBanner
          bannerBackgroundImg={membersBackground}
          headingFirst={"All"}
          UniqueHeading={"Member's"}
          headingLast={"Of CBS Group"}
          subHeading={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          }
        />
      </Suspense>

      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          Heading={"All Doctorate Students"}
          subHeading={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          }
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
        />
      </Suspense>

      <Suspense fallback={<ApplicationSpinner />}>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
          {getAllPHdStudents &&
            getAllPHdStudents.map((data, index) => (
              <MembersCard
                key={index}
                studentType={"PhD Student"}
                currentYear={data.currentYear}
                researchGateHandle={data.researchGateId}
                studentProfilePic={data.profilePicture}
                googlescholarHandle={data.googleScholarId}
                studentName={data.memberName}
                overViewlink={`/members/phd/${data._id}`}
              />
            ))}
        </section>
      </Suspense>

      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          Heading={"All Project Students"}
          subHeading={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          }
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
        />
      </Suspense>

      <Suspense fallback={<ApplicationSpinner />}>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4">
          {getAllProjectStudents &&
            getAllProjectStudents.map((data, index) => (
              <MembersCard
                key={index}
                studentType={"Project Student"}
                currentYear={data.currentYear}
                researchGateHandle={data.researchGateId}
                studentProfilePic={data.profilePicture}
                googlescholarHandle={data.googleScholarId}
                studentName={data.memberName}
                overViewlink={`/members/project/${data._id}`}
              />
            ))}
        </section>
      </Suspense>
    </main>
  );
};

export default Members;
