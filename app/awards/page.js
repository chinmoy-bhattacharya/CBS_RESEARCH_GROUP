import React from "react";
import dynamic from "next/dynamic";
import bannerBackground from "@/public/images/background/Award_banner_img.webp";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner.js";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";

const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const AwardCard = dynamic(
  () => import("@/components/multiple-use/award-card/AwardCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "All Awards | CBS Research Group",
  description:
    "Explore the awards and recognitions received by the CBS Research Group at IIEST Shibpur, showcasing our contributions to electrochemistry research.",
  keywords:
    "awards, CBS Research Group, IIEST Shibpur, electrochemistry, recognitions, Dr. Chinmoy Bhattacharya, research achievements",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "All Awards | CBS Research Group",
    description:
      "Discover the accolades and honors received by the CBS Research Group, highlighting significant achievements in electrochemistry.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/awards",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology. Joined the institute as Assistant Professor on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
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
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/awards",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};
export const viewport = "width=device-width, initial-scale=1.0";
const Awards = async () => {
  const getAllPersonalAwards = await getRequest_all(
    envConfig.personalAwardsApiUrl
  );
  const getAllTeamAwards = await getRequest_all(envConfig.teamAwardsApiUrl);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={bannerBackground}
        headingFirst={"All "}
        UniqueHeading={"Honors & Awards"}
        headingLast="Of Our lab"
        subHeading={
          "Our chemistry lab has consistently been at the forefront of scientific innovation and discovery. These awards recognize our commitment to excellence in research, groundbreaking experiments, and contributions to the global scientific community. Each award underscores the dedication and passion of our team"
        }
      />

      <CommonHeading
        Heading="Awards Received  By Our Professor"
        subHeading="Our professor’s exceptional contributions to the field of chemistry have been recognized with numerous prestigious awards. These accolades reflect a commitment to groundbreaking research, mentorship, and innovation, further solidifying their impact on both the academic and scientific communities."
        customColorHeadig="text-blue-500 dark:text-yellow-500"
      />

      <div className="pb-20">
        {getAllPersonalAwards.length == 0 ? (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            At this time, information regarding awards is not available.
          </h2>
        ) : (
          getAllPersonalAwards &&
          getAllPersonalAwards.map((award, index) => (
            <AwardCard
              key={index}
              recivedDate={award.recivedDate}
              awardTitle={award.awardTitle}
              awardOverview={award.recivedFor}
            />
          ))
        )}
      </div>

      <CommonHeading
        Heading="Awards & Recognitions of Our Team Members"
        subHeading="Our dedicated team members have been honored with numerous awards for their exceptional research, innovation, and academic achievements. These accolades highlight their expertise, hard work, and invaluable contributions to the field of chemistry and the broader scientific community."
        customColorHeadig="text-blue-500 dark:text-yellow-500"
      />

      <div className="pb-20">
        {getAllTeamAwards.length == 0 ? (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            At this time, information regarding awards is not available.
          </h2>
        ) : (
          getAllTeamAwards &&
          getAllTeamAwards.map((award, index) => (
            <AwardCard
              key={index}
              recivedDate={award.recivedDate}
              awardTitle={award.awardTitle}
              awardOverview={award.recivedFor}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Awards;
