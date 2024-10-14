import { useEffect, useState } from "react";
import envConfig from "../../../envConfig";
import LoadingSpinner from "../../utils/common-loading-spinner/LoadingSpinner";
import StudentCard from "../../components/reuseable/students-card/StudentCard";
import { getAllData } from "../../../operations/apis/getAllData";
import SectionHeading from "../../components/reuseable/section-heading/SectionHeading";

const ManageMastersAlumni = () => {
  const [alumniInfo, setAlumniInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const output = await getAllData(setLoading, envConfig.mastersAlumniUrl);
      output && setAlumniInfo(output);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <SectionHeading
        heading={"CBS Research Group MSc Alumni (Management Console)"}
        subHeading={`Explore and manage the complete list of MSc alumni from the CBS Research Group, highlighting their details, research contributions, and career paths since graduation`}
      />
      {alumniInfo && alumniInfo.length === 0 ? (
        <h2 className="text-2xl text-gray-500 text-center font-bold pt-20">
          {" "}
          Currently alumni details are not available!
        </h2>
      ) : (
        ""
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      2xl:grid-cols-4 gap-1 w-full mx-auto py-20"
      >
        {loading === true && <LoadingSpinner />}
        <>
          {alumniInfo &&
            alumniInfo.map((data, index) => (
              <StudentCard
                key={index}
                requiredName={data.alumniName}
                googleSchollarUrl={data.googleScholarId}
                researchGateUrl={data.researchGateId}
                ImageUrl={data.profilePicture}
                EmailId={data.emailId}
                contactNumber={data.phoneNumber}
                PreviousCollege={data.bscDoneFrom}
                PreviousMastersCollege={null}
                passwoutYear={data.yearOfPassout}
                currentYear={null}
                uploadDate={new Date(data.createdAt).toLocaleDateString()}
                updateDate={new Date(data.updatedAt).toLocaleDateString()}
                previewRouteLink={`/admin-panel/preview-masters-alumni/${data._id}`}
                updateRouteLink={`/admin-panel/update-masters-alumni/${data._id}`}
                deleteRouteLink={`/admin-panel/delete-masters-alumni/${data._id}`}
              />
            ))}
        </>
      </div>
    </main>
  );
};

export default ManageMastersAlumni;
