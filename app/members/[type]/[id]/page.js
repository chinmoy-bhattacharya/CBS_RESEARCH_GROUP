import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { Suspense } from "react";
const StudentPreview = dynamic(() =>
  import("@/components/multiple-use/student-preview/StudentPreview.js")
);
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
    <Suspense fallback={<ApplicationSpinner />}>
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
    </Suspense>
  );
}
AlumnusProfile.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlumnusProfile;
