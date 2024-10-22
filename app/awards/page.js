import React from "react";
import bannerBackground from "@/public/images/background/Award_banner_img.png";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import AwardCard from "@/components/multiple-use/award-card/AwardCard";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

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
        {getAllPersonalAwards.length == 0 && (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            Currently awards informations ain&apos;t available.
          </h2>
        )}
        {!getAllPersonalAwards && <ComponentSpinner />}
        {getAllPersonalAwards &&
          getAllPersonalAwards.map((award, index) => (
            <AwardCard
              key={index}
              recivedDate={award.recivedDate}
              awardTitle={award.awardTitle}
              awardOverview={award.recivedFor}
            />
          ))}
      </div>

      <CommonHeading
        Heading="Awards & Recognitions of Our Team Members"
        subHeading="Our dedicated team members have been honored with numerous awards for their exceptional research, innovation, and academic achievements. These accolades highlight their expertise, hard work, and invaluable contributions to the field of chemistry and the broader scientific community."
        customColorHeadig="text-blue-500 dark:text-yellow-500"
      />

      <div className="pb-20">
        {getAllTeamAwards.length == 0 && (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            Currently awards informations ain&apos;t available.
          </h2>
        )}
        {!getAllTeamAwards && <ComponentSpinner />}
        {getAllTeamAwards &&
          getAllTeamAwards.map((award, index) => (
            <AwardCard
              key={index}
              recivedDate={award.recivedDate}
              awardTitle={award.awardTitle}
              awardOverview={award.recivedFor}
            />
          ))}
      </div>
    </main>
  );
};

export default Awards;
