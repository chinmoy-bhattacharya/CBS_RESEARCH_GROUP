import getRequest_single from "@/apis/getRequestSingle.js";
import envConfig from "@/config/envConfig.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";
const StudentPreview = dynamic(
  () => import("@/components/multiple-use/student-preview/StudentPreview.js"),
  {
    loading: () => <ApplicationSpinner />,
  }
);

export const metadata = {
  title: "Member Details | CBS Research Group",
  description:
    "CBS Research Group is an electrochemistry lab under (Indian Institute of Engineering Science and Technology) it is located in Shibpur P.O. - Botanic Garden, Howrah - 711 103 West Bengal, India Phone: +91 (033) 2668 4561 to 63 Fax: +91 (033) 2668 2916",
  keywords:
    "Dr. Chinmoy Bhattacharya, researcher, Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry Indian Institute of Engineering Science and Technology: Howrah, West Bengal, IN",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "CBS Research Group",
    description:
      "Botanic Garden, Dist: Howrah, West Bengal, India - 711103  +91 (033) 2668 4561 to 63  +91 (033) 2668 2916 (Fax)",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Joined the Institute as Assistant Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology, Shibpur (formerly, BESUS) Howrah – 711 103, West Bengal on 23rd June 2006. Promoted to Associate Professor, Department of Chemistry, IIESTS on 22nd Feb. 2019.",
    image:
      "https://www.iiests.ac.in/assets/images/faculty/chem-faculty_chinmoy-bhattacharya.jpg",
  },
  googlescholar: {
    card: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
  },
  researchgate: {
    card: "https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Indian Institute of Engineering Science and Technology, Shibpur, Howrah, India · Chemistry",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};
export const viewport = "width=device-width, initial-scale=1.0";

async function AlumnusProfile({ params }) {
  const { type, id } = await params; // Get dynamic parameters from the URL
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
AlumnusProfile.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlumnusProfile;
