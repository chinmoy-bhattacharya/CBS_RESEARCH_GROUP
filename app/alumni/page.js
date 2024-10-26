import dynamic from "next/dynamic";
import getRequest_all from "@/apis/getRequestAll.js";
import React, { Suspense } from "react";
import alumni_banner from "@/public/images/background/alumni_banner-background.png";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
const CommonBanner = dynamic(() =>
  import("@/components/multiple-use/common-banner/CommonBanner.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const AlumniCard = dynamic(() =>
  import("@/components/multiple-use/alumni-card/AlumniCard.js")
);

const Alumni = async () => {
  const getAllDoctorateAlumni = await getRequest_all(
    envConfig.doctorateAlumniApiUrl
  );
  const getAllMastersAlumni = await getRequest_all(
    envConfig.mastersAlumniApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonBanner
          bannerBackgroundImg={alumni_banner}
          headingFirst={"Introducing our "}
          UniqueHeading={"Distinguished Alumni"}
          headingLast={"of CBS Research Group."}
          subHeading={`Discover the achievements and contributions of our distinguished alumni from CBS Research Group, who have made a significant impact in their respective fields. Their dedication, expertise, and innovative work continue to inspire future generations of researchers and professionals.`}
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
          Heading={"Doctorate Alumni"}
          subHeading={
            "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
          }
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-content-center"
        >
          {getAllDoctorateAlumni &&
            getAllDoctorateAlumni.map((alumnus, index) => (
              <AlumniCard
                key={index}
                alumnusImage={alumnus.profilePicture}
                googleScholarId={alumnus.googleScholarId}
                researchGateId={alumnus.researchGateId}
                alumnusName={alumnus.alumniName}
                emailId={alumnus.emailId}
                phoneNumber={alumnus.phoneNumber}
                alumnusProfileLink={`/alumni/doctorate/${alumnus._id}`}
              />
            ))}
        </div>
      </Suspense>

      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          customColorHeadig={"text-blue-500 dark:text-yellow-500"}
          Heading={"Masters Alumni"}
          subHeading={
            "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
          }
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-content-center"
        >
          {getAllMastersAlumni &&
            getAllMastersAlumni.map((alumnus, index) => (
              <AlumniCard
                key={index}
                alumnusImage={alumnus.profilePicture}
                googleScholarId={alumnus.googleScholarId}
                researchGateId={alumnus.researchGateId}
                alumnusName={alumnus.alumniName}
                emailId={alumnus.emailId}
                phoneNumber={alumnus.phoneNumber}
                alumnusProfileLink={`/alumni/masters/${alumnus._id}`}
              />
            ))}
        </div>
      </Suspense>
    </main>
  );
};

export default Alumni;
