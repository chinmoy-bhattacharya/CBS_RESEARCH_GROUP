import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner.js";
const ProfProfile = dynamic(() =>
  import("@/components/single-use/professor-profile/ProfProfile.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const AwardCard = dynamic(() =>
  import("@/components/multiple-use/award-card/AwardCard.js")
);
const About = async () => {
  const getPersonalAwards = await getRequest_all(
    envConfig.personalAwardsApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <Suspense fallback={<ApplicationSpinner />}>
        <ProfProfile />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          customColorHeadig={null}
          Heading={
            "Honoring Excellence: Professional Recognition and Fellowship Achievements"
          }
          subHeading={
            "A Journey of Recognition and Fellowship Awards that Highlight Exceptional Contributions and Commitment to Excellence in the Field. These accolades not only reflect individual dedication but also inspire ongoing growth and innovation within the community, fostering a culture of achievement and collaboration."
          }
        />
      </Suspense>
      <div className="pb-20">
        {getPersonalAwards.length == 0 && (
          <h2 className="text-xl font-semibold text-center mx-10 my-20 text-gray-600 dark:text-gray-300">
            Currently awards informations ain&apos;t available.
          </h2>
        )}
        <Suspense fallback={<ApplicationSpinner />}>
          {getPersonalAwards &&
            getPersonalAwards.map((award, index) => (
              <AwardCard
                key={index}
                recivedDate={award.recivedDate}
                awardTitle={award.awardTitle}
                awardOverview={award.recivedFor}
              />
            ))}
        </Suspense>
      </div>
    </main>
  );
};

export default About;
