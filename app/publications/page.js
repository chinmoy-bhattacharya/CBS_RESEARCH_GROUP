import getRequest_all from "@/apis/getRequest(all)";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import PublicationCard from "@/components/single-use/publication-card/PublicationCard";
import envConfig from "@/config/envConfig";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import React from "react";
import Publication_banner from "@/public/images/background/Publication_banner.png";

const Publications = async () => {
  const getAllPublications = await getRequest_all(envConfig.publicationsApiUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-12">
      <CommonBanner
        bannerBackgroundImg={Publication_banner}
        headingFirst={"Here are all the"}
        UniqueHeading={"Publication's"}
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
      {getAllPublications &&
        getAllPublications.map((content, index) => (
          <PublicationCard
            key={index}
            publishedAt={content.publishedDate}
            publicationTitle={content.title}
            Contributer={content.contributer}
            publicationThumbnail={content.publicationThumbnail}
            seeDetailsLink={`/publications/${content._id}`}
          />
        ))}
    </main>
  );
};

export default Publications;
