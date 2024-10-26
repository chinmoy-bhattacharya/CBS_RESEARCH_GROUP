import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import projectBannerBgImage from "@/public/images/background/Project-banner-background-image.png";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";

const ProjectCard = dynamic(() =>
  import("@/components/single-use/project-card/ProjectCard.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const CommonBanner = dynamic(() =>
  import("@/components/multiple-use/common-banner/CommonBanner.js")
);

const Projects = async () => {
  const getAllProjects = await getRequest_all(envConfig.projectsApiUrl);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonBanner
          bannerBackgroundImg={projectBannerBgImage}
          headingFirst="Electrochemistry Innovations:"
          UniqueHeading=" Research Lab Projects"
          headingLast={null}
          subHeading="Explore the forefront of electrochemistry with our diverse research projects, focusing on sustainable energy solutions, advanced materials, and novel electrochemical techniques. Our lab is dedicated to pushing the boundaries of knowledge and technology, driving innovations in batteries, fuel cells, sensors, and corrosion science. Join us in advancing the future of energy and materials science!"
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          Heading="Research Lab Projects"
          subHeading="Explore the forefront of electrochemistry with our diverse research projects, focusing on sustainable energy solutions, advanced materials, and novel electrochemical techniques. Our lab is dedicated to pushing the boundaries of knowledge and technology, driving innovations in batteries, fuel cells, sensors, and corrosion science. Join us in advancing the future of energy and materials science"
          customColorHeadig={null}
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
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
      </Suspense>
    </main>
  );
};

export default Projects;
