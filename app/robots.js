import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig";

export default async function robots() {
  const baseUrl = "https://www.chinmoybhattacharyaelectrochemistry.com";

  try {
    // Fetch dynamic data
    const publications = await getRequest_all(envConfig.publicationsApiUrl);
    const phdStudents = await getRequest_all(envConfig.phdStudentApiUrl);
    const mscStudents = await getRequest_all(envConfig.mscStudentApiUrl);
    const phdAlumni = await getRequest_all(envConfig.phdAlumniApiUrl);
    const mscAlumni = await getRequest_all(envConfig.mscAlumniApiUrl);
    // Generate dynamic URLs
    const allPublication = publications.map(
      (publication) => `/publications/${publication._id}`
    );
    const phdUrls = phdStudents.map((student) => `/members/phd/${student._id}`);
    const mscUrls = mscStudents.map((student) => `/members/msc/${student._id}`);
    const phdAlumniUrls = phdAlumni.map(
      (alumnus) => `/alumni/doctorate/${alumnus._id}`
    );
    const mscAlumniUrls = mscAlumni.map(
      (alumnus) => `/alumni/masters/${alumnus._id}`
    );
    const allAllowedUrls = [
      "/",
      "/about",
      "/publications",
      ...allPublication,
      "/alumni",
      ...phdAlumniUrls,
      ...mscAlumniUrls,
      "/members",
      ...phdUrls,
      ...mscUrls,
      "/awards",
      "/news",
      "/lab-facilities",
      "/projects",
      "/gallery",
    ];

    return {
      rules: [
        {
          userAgent: "*",
          allow: allAllowedUrls,
          disallow: ["/contact"],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  } catch (error) {
    console.error("Error fetching data for robots.txt:", error);
    return {
      rules: [
        {
          userAgent: "*",
          allow: ["/"], // Fallback to allowing just the root
          disallow: ["/contact"],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }
}
