import getRequest_all from "@/apis/getRequest(all)";
import PublicationBanner from "@/components/single-use/publication-banner/PublicationBanner";
import PublicationCard from "@/components/single-use/publication-card/PublicationCard";
import envConfig from "@/config/envConfig";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
import React from "react";

const Publications = async () => {
  const getAllPublications = await getRequest_all(envConfig.publicationsApiUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-12">
      <PublicationBanner />
      <CommonHeading
        Heading={"Welcome To Our Publication Page"}
        subHeading={
          "Our research work mainly focusses on different synthetic routes of various photocatalysts or semiconductors that are basically oxides of inorganic compound. Using these, we check their photoelectrochemical and photocatalytic activity so that t"
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
