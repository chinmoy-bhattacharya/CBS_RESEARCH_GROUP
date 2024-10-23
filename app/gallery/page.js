import React from "react";

import PhotoGallery from "@/components/single-use/photo-gallery/PhotoGallery";
import CommonHeading from "@/utils/common-headings/CommonHeading";
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
