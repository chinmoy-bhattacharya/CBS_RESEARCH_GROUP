// /app/alumni/[type]/[id]/page.tsx

import getRequest_single from "@/apis/getRequest(single).js";
import StudentPreview from "@/components/multiple-use/student-preview/StudentPreview";
import envConfig from "@/config/envConfig";
import PropTypes from "prop-types";

async function AlumnusProfile({ params }) {
  const { type, id } = params; // Get dynamic parameters from the URL
  // Based on the `type`, decide which API to call
  const isPhd = type === "phd";

  const apiUrl = isPhd
    ? envConfig.phdStudentApiUrl
    : envConfig.projectStudentApiUrl;

  // Fetch the alumnus info from the API
  const membersInfo = await getRequest_single(apiUrl, id);

  if (!membersInfo) {
    return (
      <div className="py-24">
        <h1>Members are not found</h1>
      </div>
    );
  }

  // Return the JSX to display the alumnus profile
  return (
    <main className="bg-gray-50 dark:bg-slate-800 py-24">
      <StudentPreview
        studentName={membersInfo.memberName}
        profileImageUrl={membersInfo.profilePicture}
        previewHeading={isPhd ? "PHd Member" : "Masters Member"}
        googleScholarId={membersInfo.googleScholarId}
        researchGateId={membersInfo.researchGateId}
        emailId={membersInfo.emailId}
        phoneNumber={membersInfo.phoneNumber}
        bscCollege={membersInfo.bscDoneFrom}
        mscCollege={membersInfo.mscDoneFrom}
        yearOfPassout={null}
        currentYear={membersInfo.currentYear}
        aboutInfo={membersInfo.details}
        goBackLink="/members"
      />
    </main>
  );
}
AlumnusProfile.propType = {
  params: PropTypes.object,
};
export default AlumnusProfile;
