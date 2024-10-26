import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import Publication_banner from "@/public/images/background/Publication_banner.png";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";

const CommonBanner = dynamic(() =>
  import("@/components/multiple-use/common-banner/CommonBanner.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);

const PublicationCard = dynamic(() =>
  import("@/components/single-use/publication-card/PublicationCard.js")
);

const Publications = async () => {
  const getAllPublications = await getRequest_all(envConfig.publicationsApiUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-12">
      <Suspense fallback={<ApplicationSpinner />}>
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
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          customColorHeadig={null}
          Heading={
            "Explore all publications from CBS Research Group since 2013"
          }
          subHeading={
            "Browse the complete collection of publications from CBS Research Group since 2013, reflecting our commitment to advancing knowledge through innovative research. These works encompass a wide range of topics and disciplines, demonstrating the impact and contributions of our researchers to global academic and industry advancements."
          }
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
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
      </Suspense>
    </main>
  );
};

export default Publications;
