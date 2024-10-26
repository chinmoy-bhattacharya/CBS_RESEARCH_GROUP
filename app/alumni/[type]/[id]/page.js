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
  // Based on the `type`, decide which API to call
  const isDoctorate = type === "doctorate";

  const apiUrl = isDoctorate
    ? envConfig.doctorateAlumniApiUrl
    : envConfig.mastersAlumniApiUrl;

  // Fetch the alumnus info from the API
  const alumnusInfo = await getRequest_single(apiUrl, id);

  if (!alumnusInfo) {
    return (
      <div className="py-24">
        <h1>No alumnus data found</h1>
      </div>
    );
  }

  // Return the JSX to display the alumnus profile
  return (
    <Suspense fallback={<ApplicationSpinner />}>
      <main className="bg-gray-50 dark:bg-slate-800 py-24">
        <StudentPreview
          studentName={alumnusInfo.alumniName}
          profileImageUrl={alumnusInfo.profilePicture}
          previewHeading={isDoctorate ? "Doctorate Alumnus" : "Masters Alumnus"}
          googleScholarId={alumnusInfo.googleScholarId}
          researchGateId={alumnusInfo.researchGateId}
          emailId={alumnusInfo.emailId}
          phoneNumber={alumnusInfo.phoneNumber}
          bscCollege={alumnusInfo.bscDoneFrom}
          mscCollege={alumnusInfo.mscDoneFrom}
          yearOfPassout={alumnusInfo.yearOfPassout}
          currentYear={null}
          aboutInfo={alumnusInfo.details}
          goBackLink="/alumni"
        />
      </main>
    </Suspense>
  );
}
AlumnusProfile.propType = {
  params: PropTypes.object,
};
export default AlumnusProfile;
