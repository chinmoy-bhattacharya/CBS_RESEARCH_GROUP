import React from "react";
import dynamic from "next/dynamic";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";
import CommonHeading from "@/utils/common-headings/CommonHeading.js";
const PhotoGallery = dynamic(
  () => import("@/components/single-use/photo-gallery/PhotoGallery.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "Gallery | CBS Research Group",
  description:
    "Explore the gallery of the CBS Research Group at IIEST Shibpur, showcasing images and highlights of our research activities, team events, and achievements in electrochemistry.",
  keywords:
    "gallery, CBS Research Group, IIEST Shibpur, electrochemistry, research activities, team events, Dr. Chinmoy Bhattacharya",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Gallery | CBS Research Group",
    description:
      "Discover the visual highlights of the CBS Research Group, featuring our research activities and team events.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/gallery",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology. Joined the Institute as Assistant Professor on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
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
      "Associate Professor, Department of Chemistry, IIEST Shibpur, Howrah, India.",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, specializing in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, focusing on Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description: "Associate Professor, Department of Chemistry, IIEST Shibpur.",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/gallery",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";
const Gallery = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pt-12">
      <CommonHeading
        customColorHeadig={null}
        Heading="Gallery Of Our Lab"
        subHeading="Images speak volumes about our work and our team. As you explore this section, take a moment to immerse yourself in the visual journey of the CBS Research Group. Discover the faces behind our research and get a glimpse into our collaborative spirit and innovative projects."
      />

      <PhotoGallery />
    </main>
  );
};

export default Gallery;
