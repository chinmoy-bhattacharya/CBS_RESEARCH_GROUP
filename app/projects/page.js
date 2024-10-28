import React from "react";
import dynamic from "next/dynamic";
import projectBannerBgImage from "@/public/images/background/Project-banner-background-image.webp";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";
const ProjectCard = dynamic(
  () => import("@/components/single-use/project-card/ProjectCard.js"),
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

export const metadata = {
  title: "Projects | CBS Research Group",
  description:
    "Explore the various projects undertaken by CBS Research Group, an electrochemistry lab at the Indian Institute of Engineering Science and Technology. Our research focuses on advancements in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  keywords:
    "CBS Research Group, projects, electrochemistry, Photoelectrochemistry, research, Dr. Chinmoy Bhattacharya, IIEST Shibpur",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Projects | CBS Research Group",
    description:
      "Discover the innovative projects at CBS Research Group, dedicated to advancements in electrochemistry.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/projects",
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
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/projects",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const Projects = async () => {
  const getAllProjects = await getRequest_all(envConfig.projectsApiUrl);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={projectBannerBgImage}
        headingFirst="Electrochemistry Innovations:"
        UniqueHeading=" Research Lab Projects"
        headingLast={null}
        subHeading="Explore the forefront of electrochemistry with our diverse research projects, focusing on sustainable energy solutions, advanced materials, and novel electrochemical techniques. Our lab is dedicated to pushing the boundaries of knowledge and technology, driving innovations in batteries, fuel cells, sensors, and corrosion science. Join us in advancing the future of energy and materials science!"
      />

      <CommonHeading
        Heading="Research Lab Projects"
        subHeading="Explore the forefront of electrochemistry with our diverse research projects, focusing on sustainable energy solutions, advanced materials, and novel electrochemical techniques. Our lab is dedicated to pushing the boundaries of knowledge and technology, driving innovations in batteries, fuel cells, sensors, and corrosion science. Join us in advancing the future of energy and materials science"
        customColorHeadig={null}
      />

      {getAllProjects.length == 0 ? (
        <h2 className="pb-24 text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding projects is not available.
        </h2>
      ) : (
        <section className="pb-24">
          {getAllProjects &&
            getAllProjects.map((project, index) => (
              <ProjectCard
                key={index}
                projectTitle={project.projectName}
                status={project.projectStatus}
                projectDetails={project.description}
              />
            ))}
        </section>
      )}
    </main>
  );
};

export default Projects;
