import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import React from "react";
import membersBackground from "@/public/images/background/members-banner-backgroun.png";
import MembersCard from "@/components/multiple-use/members-card/MembersCard";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
import CommonHeading from "@/utils/common-headings/CommonHeading";

const Members = async () => {
  const getAllProjectStudents = await getRequest_all(
    envConfig.projectStudentApiUrl
  );

  const getAllPHdStudents = await getRequest_all(envConfig.phdStudentApiUrl);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pb-16">
      <CommonBanner
        bannerBackgroundImg={membersBackground}
        headingFirst={"All"}
        UniqueHeading={"Member's"}
        headingLast={"Of Cbs Group"}
        subHeading={
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rele"
        }
      />

      <CommonHeading
        Heading={"All Doctorate Student"}
        subHeading={
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        }
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {getAllPHdStudents &&
          getAllPHdStudents.map((data, index) => (
            <MembersCard
              key={index}
              studentType={"PHd Student"}
              currentYear={data.currentYear}
              researchGateHandle={data.researchGateId}
              studentProfilePic={data.profilePicture}
              googlescholarHandle={data.googleScholarId}
              studentName={data.memberName}
              overViewlink={`/members/phd/${data._id}`}
            />
          ))}
      </section>

      <CommonHeading
        Heading={"All Project Student"}
        subHeading={
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        }
        customColorHeadig={"text-blue-500 dark:text-yellow-500"}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4">
        {getAllProjectStudents &&
          getAllProjectStudents.map((data, index) => (
            <MembersCard
              key={index}
              studentType={"Project Student"}
              currentYear={data.currentYear}
              researchGateHandle={data.researchGateId}
              studentProfilePic={data.profilePicture}
              googlescholarHandle={data.googleScholarId}
              studentName={data.memberName}
              overViewlink={`/members/project/${data._id}`}
            />
          ))}
      </section>
    </main>
  );
};

export default Members;
