import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import React from "react";
import projectBannerBgImage from "@/public/images/background/Project-banner-background-image.png";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import ProjectCard from "@/components/single-use/project-card/ProjectCard";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
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
    </main>
  );
};

export default Projects;
