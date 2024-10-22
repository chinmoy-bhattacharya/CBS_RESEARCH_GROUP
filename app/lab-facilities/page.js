import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import React from "react";
import labFacilityBannerBgImg from "@/public/images/background/Lab-equpment-banner.png";
import LabEquipmentCard from "@/components/single-use/lab-equipment-card/LabEquipmentCard";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
import CommonHeading from "@/utils/common-headings/CommonHeading";

const LabFacilities = async () => {
  const getAllEquipmens = await getRequest_all(envConfig.labEquipmentsApiUrl);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={labFacilityBannerBgImg}
        headingFirst={null}
        UniqueHeading="All Lab Equipments of"
        headingLast="CBS Research Group"
        subHeading="Explore the advanced tools and instruments utilized in our electrochemistry lab at CBS Research Group. From potentiostats to electrochemical cells, our state-of-the-art equipment supports innovative research in energy storage, corrosion studies, and material characterization. Discover how each device contributes to our mission of advancing electrochemical science and technology."
      />

      <CommonHeading
        Heading="All Lab Equipments of"
        subHeading="Explore the advanced tools and instruments utilized in our electrochemistry lab at CBS Research Group. From potentiostats to electrochemical cells, our state-of-the-art equipment supports innovative research in energy storage, corrosion studies, and material characterization."
        customColorHeadig={null}
      />

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
    </main>
  );
};

export default LabFacilities;
