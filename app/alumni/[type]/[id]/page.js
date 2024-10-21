// /app/alumni/[type]/[id]/page.tsx

import getRequest_single from "@/apis/getRequest(single)";
import StudentPreview from "@/components/multiple-use/student-preview/StudentPreview";
import envConfig from "@/config/envConfig";
import PropTypes from "prop-types";

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
  );
}
AlumnusProfile.propType = {
  params: PropTypes.object,
};
export default AlumnusProfile;
