import getRequest_all from "@/apis/getRequestAll";
import envConfig from "@/config/envConfig"; // Ensure correct import for MSc students

export default async function sitemap() {
  const baseUrl = "https://www.chinmoybhattacharyaelectrochemistry.com";

  try {
    // PhD Students sitemap
    const publications = await getRequest_all(envConfig.publicationsApiUrl);
    const publicationsMetaData = publications.map((publication) => {
      return {
        url: `${baseUrl}/publications/${publication._id}`,
        lastModified: new Date(publication.createdAt).toISOString(), // Ensure it's in the right format
      };
    });

    // PhD Students sitemap
    const phdStudents = await getRequest_all(envConfig.phdStudentApiUrl);
    const phdStudentsMetaData = phdStudents.map((phdStudent) => {
      return {
        url: `${baseUrl}/members/phd/${phdStudent._id}`,
        lastModified: new Date(phdStudent.createdAt).toISOString(), // Ensure it's in the right format
      };
    });

    // MSc Students sitemap
    const mscStudents = await getRequest_all(envConfig.mscStudentApiUrl); // Use the correct API for MSc students
    const mscStudentsMetaData = mscStudents.map((mscStudent) => {
      return {
        url: `${baseUrl}/members/msc/${mscStudent._id}`, // Change the URL as needed
        lastModified: new Date(mscStudent.createdAt).toISOString(),
      };
    });

    //   PHD Alumni sitemap
    const phdAlumni = await getRequest_all(envConfig.phdAlumniApiUrl); // Use the correct API for MSc students
    const phdAlumniMetaData = phdAlumni.map((phdAlumnus) => {
      return {
        url: `${baseUrl}/alumni/doctorate/${phdAlumnus._id}`, // Change the URL as needed
        lastModified: new Date(phdAlumnus.createdAt).toISOString(),
      };
    });

    //   Msc Alumni sitemap
    const mscAlumni = await getRequest_all(envConfig.mscAlumniApiUrl); // Use the correct API for MSc students
    const mscAlumniMetaData = mscAlumni.map((mscAlumnus) => {
      return {
        url: `${baseUrl}/alumni/masters/${mscAlumnus._id}`, // Change the URL as needed
        lastModified: new Date(mscAlumnus.createdAt).toISOString(),
      };
    });

    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/publications`,
        lastModified: new Date(),
      },
      ...publicationsMetaData,
      {
        url: `${baseUrl}/alumni`,
        lastModified: new Date(),
      },
      ...phdAlumniMetaData,
      ...mscAlumniMetaData,
      {
        url: `${baseUrl}/members`,
        lastModified: new Date(),
      },
      ...phdStudentsMetaData,
      ...mscStudentsMetaData,
      {
        url: `${baseUrl}/awards`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/news`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/lab-facilities`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/gallery`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      },
    ];
  } catch (error) {
    console.error("Error fetching student data:", error);
    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
      },
    ];
  }
}
