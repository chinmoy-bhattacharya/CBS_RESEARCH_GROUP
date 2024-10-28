import dynamic from "next/dynamic";
import React from "react";
import membersBackground from "@/public/images/background/members-banner-backgroun.webp";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";

const MembersCard = dynamic(
  () => import("@/components/multiple-use/members-card/MembersCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
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
      <CommonBanner
        bannerBackgroundImg={membersBackground}
        headingFirst={null}
        UniqueHeading={"PhD and MSc Members"}
        headingLast={"Of CBS Research Lab"}
        subHeading={
          "Unlocking the potential of the next generation of researchers, CBS Research Lab fosters a vibrant community of PhD and MSc students. With a focus on collaboration, cutting-edge research, and mentorship, our students are equipped to tackle global challenges and drive advancements in their fields, contributing to impactful solutions for a better future."
        }
      />

      <CommonHeading
        Heading={"Meet Our PhD Scholars.."}
        subHeading={
          "Discover the diverse expertise and innovative projects of our PhD members at CBS Research Lab. Each scholar brings a unique perspective, contributing to groundbreaking research and collaborative initiatives that push the boundaries of knowledge and drive impactful solutions in their respective fields."
        }
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
      />
      {getAllPHdStudents.length == 0 ? (
        <h2 className="text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding members is not available.
        </h2>
      ) : (
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
      )}

      <CommonHeading
        Heading={"Meet Our MSc Scholars.."}
        subHeading={
          "Explore the dynamic talents and research endeavors of our MSc students at CBS Research Lab. Each student contributes fresh ideas and perspectives, engaging in collaborative projects that foster innovation and address real-world challenges, paving the way for a brighter future in their fields."
        }
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
      />
      {getAllProjectStudents.length == 0 ? (
        <h2 className="text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding members is not available.
        </h2>
      ) : (
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
      )}
    </main>
  );
};

export default Members;
