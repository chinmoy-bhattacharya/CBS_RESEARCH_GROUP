import dynamic from "next/dynamic";
import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import PropTypes from "prop-types";
import { Suspense } from "react";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner.js";

const StudentPreview = dynamic(() =>
  import("@/components/multiple-use/student-preview/StudentPreview.js")
);

async function AlumnusProfile({ params }) {
  const { type, id } = params; // Get dynamic parameters from the URL
  const isDoctorate = type === "doctorate";

  const apiUrl = isDoctorate
    ? envConfig.doctorateAlumniApiUrl
    : envConfig.mastersAlumniApiUrl;

  try {
    // Fetch the alumnus info from the API
    const alumnusInfo = await getRequest_single(apiUrl, id);

    if (!alumnusInfo || typeof alumnusInfo !== "object") {
      return (
        <div className="py-24">
          <h1>No alumnus data found</h1>
        </div>
      );
    }

    // Return the JSX to display the alumnus profile
    return (
      <main className="bg-gray-50 dark:bg-slate-800 py-24">
        <Suspense fallback={<ApplicationSpinner />}>
          <StudentPreview
            studentName={alumnusInfo.alumniName}
            profileImageUrl={alumnusInfo.profilePicture}
            previewHeading={
              isDoctorate ? "Doctorate Alumnus" : "Masters Alumnus"
            }
            googleScholarId={alumnusInfo.googleScholarId}
            researchGateId={alumnusInfo.researchGateId}
            emailId={alumnusInfo.emailId}
            phoneNumber={alumnusInfo.phoneNumber}
            bscCollege={alumnusInfo.bscDoneFrom}
            mscCollege={alumnusInfo.mscDoneFrom}
            yearOfPassout={alumnusInfo.yearOfPassout}
            currentYear={null} // Update if necessary
            aboutInfo={alumnusInfo.details}
            goBackLink="/alumni"
          />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Error fetching alumnus data:", error); // Log error for debugging
    return (
      <div className="py-24">
        <h1>Error fetching alumnus data</h1>
      </div>
    );
  }
}

AlumnusProfile.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlumnusProfile;
