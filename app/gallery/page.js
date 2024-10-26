import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
const CommonHeading = dynamic(() =>
  import("@/utils/common-headings/CommonHeading.js")
);
const PhotoGallery = dynamic(() =>
  import("@/components/single-use/photo-gallery/PhotoGallery.js")
);
const Gallery = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pt-12">
      <Suspense fallback={<ApplicationSpinner />}>
        <CommonHeading
          customColorHeadig={null}
          Heading="Gallery Of Our Lab"
          subHeading="Images speak volumes about our work and our team. As you explore this section, take a moment to immerse yourself in the visual journey of the CBS Research Group. Discover the faces behind our research and get a glimpse into our collaborative spirit and innovative projects."
        />
      </Suspense>
      <Suspense fallback={<ApplicationSpinner />}>
        <PhotoGallery />
      </Suspense>
    </main>
  );
};

export default Gallery;
