import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import labFacilityBannerBgImg from "@/public/images/background/Lab-equpment-banner.png";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
const CommonBanner = dynamic(() =>
  import("@/components/multiple-use/common-banner/CommonBanner.js")
);
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const LabEquipmentCard = dynamic(() =>
  import("@/components/single-use/lab-equipment-card/LabEquipmentCard.js")
);

const LabFacilities = async () => {
  const getAllEquipmens = await getRequest_all(envConfig.labEquipmentsApiUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonBanner
          bannerBackgroundImg={labFacilityBannerBgImg}
          headingFirst={null}
          UniqueHeading="All Lab Equipments of"
          headingLast="CBS Research Group"
          subHeading="Explore the advanced tools and instruments utilized in our electrochemistry lab at CBS Research Group. From potentiostats to electrochemical cells, our state-of-the-art equipment supports innovative research in energy storage, corrosion studies, and material characterization. Discover how each device contributes to our mission of advancing electrochemical science and technology."
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          Heading="All Lab Equipments of"
          subHeading="Explore the advanced tools and instruments utilized in our electrochemistry lab at CBS Research Group. From potentiostats to electrochemical cells, our state-of-the-art equipment supports innovative research in energy storage, corrosion studies, and material characterization."
          customColorHeadig={null}
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <section className="grid py-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-y-4">
          {getAllEquipmens &&
            getAllEquipmens.map((equipment, index) => (
              <LabEquipmentCard
                key={index}
                equipmentImage={equipment.instrumentImage}
                equipmentName={equipment.instrumentName}
                equipmentDetails={equipment.description}
              />
            ))}
        </section>
      </Suspense>
    </main>
  );
};

export default LabFacilities;
