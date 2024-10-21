import getRequest_all from "@/apis/getRequest(all)";
import PersonalAwardCard from "@/components/multiple-use/award-card/personal-award-card/PersonalAwardCard";
import ProfProfile from "@/components/single-use/professor-profile/ProfProfile";
import envConfig from "@/config/envConfig";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";
import React from "react";

const About = async () => {
  const getPersonalAwards = await getRequest_all(
    envConfig.personalAwardsApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <ProfProfile />
      <CommonHeading
        customColorHeadig={null}
        Heading={
          "Honoring Excellence: Professional Recognition and Fellowship Achievements"
        }
        subHeading={
          "A Journey of Recognition and Fellowship Awards that Highlight Exceptional Contributions and Commitment to Excellence in the Field. These accolades not only reflect individual dedication but also inspire ongoing growth and innovation within the community, fostering a culture of achievement and collaboration."
        }
      />
      <div className="pb-20">
        {getPersonalAwards.length == 0 && (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            Currently awards informations ain&apos;t available.
          </h2>
        )}
        {!getPersonalAwards && <ComponentSpinner />}
        {getPersonalAwards &&
          getPersonalAwards.map((award, index) => (
            <PersonalAwardCard
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

export default About;
