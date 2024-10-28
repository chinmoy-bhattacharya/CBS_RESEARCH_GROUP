import React from "react";
import dynamic from "next/dynamic";
import labFacilityBannerBgImg from "@/public/images/background/Lab-equpment-banner.webp";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const LabEquipmentCard = dynamic(
  () =>
    import("@/components/single-use/lab-equipment-card/LabEquipmentCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "Lab Facilities | CBS Research Group",
  description:
    "Explore the state-of-the-art lab facilities of the CBS Research Group at IIEST Shibpur, designed to support advanced research in electrochemistry.",
  keywords:
    "lab facilities, CBS Research Group, electrochemistry lab, IIEST Shibpur, research equipment, Dr. Chinmoy Bhattacharya",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Lab Facilities | CBS Research Group",
    description:
      "Discover the advanced lab facilities at CBS Research Group, providing the necessary equipment and environment for cutting-edge research in electrochemistry.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/lab-facilities",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology. Joined as Assistant Professor on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
    image:
      "https://www.iiests.ac.in/assets/images/faculty/chem-faculty_chinmoy-bhattacharya.jpg",
  },
  googlescholar: {
    card: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology.",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
  },
  researchgate: {
    card: "https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, India.",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology, specializing in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology, focusing on Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology.",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical:
      "https://www.chinmoybhattacharyaelectrochemistry.com/lab-facilities",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";
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
      {getAllEquipmens.length == 0 ? (
        <h2 className="pb-28 text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding lab equipments is not available.
        </h2>
      ) : (
        <section
          className="grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-8"
        >
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
      )}
    </main>
  );
};

export default LabFacilities;
