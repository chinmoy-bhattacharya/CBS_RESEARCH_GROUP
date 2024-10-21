import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import React from "react";
import alumni_banner from "@/public/images/background/alumni_banner-background.png";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import AlumniCard from "@/components/multiple-use/alumni-card/AlumniCard";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
const Alumni = async () => {
  const getAllDoctorateAlumni = await getRequest_all(
    envConfig.doctorateAlumniApiUrl
  );
  const getAllMastersAlumni = await getRequest_all(
    envConfig.mastersAlumniApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={alumni_banner}
        headingFirst={"Introducing our "}
        UniqueHeading={"Distinguished Alumni"}
        headingLast={"of CBS Research Group."}
        subHeading={`Discover the achievements and contributions of our distinguished alumni from CBS Research Group, who have made a significant impact in their respective fields. Their dedication, expertise, and innovative work continue to inspire future generations of researchers and professionals.`}
      />

      <CommonHeading
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
        Heading={"Doctorate Alumni"}
        subHeading={
          "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-[1200px]:grid-cols-3 2xl:grid-cols-4 place-content-center">
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

      <CommonHeading
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
        Heading={"Masters Alumni"}
        subHeading={
          "View the profiles of our Doctorate alumni from CBS Research Group, showcasing their academic achievements, research contributions, and the impact they've made in their fields. Learn more about their journeys, and professional growth."
        }
      />

      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-[1200px]:grid-cols-3 2xl:grid-cols-4 place-content-center">
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
    </main>
  );
};

export default Alumni;
