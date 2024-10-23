const environment = {
  phdStudentApiUrl: process.env.NEXT_PUBLIC_PHD_STUDENT_URL,
  mscStudentApiUrl: process.env.NEXT_PUBLIC_MSC_STUDENT_URL,
  phdAlumniApiUrl: process.env.NEXT_PUBLIC_PHD_ALUMNI_URL,
  mscAlumniApiUrl: process.env.NEXT_PUBLIC_MSC_ALUMNI_URL,
  personalAwardsApiUrl: process.env.NEXT_PUBLIC_PERSONAL_AWARDS_URL,
  teamAwardsApiUrl: process.env.NEXT_PUBLIC_TEAM_AWARDS_URL,
  publicationsApiUrl: process.env.NEXT_PUBLIC_PUBLICATIONS_URL,
  mastersAlumniApiUrl: process.env.NEXT_PUBLIC_MASTERS_ALUMNI_URL,
  doctorateAlumniApiUrl: process.env.NEXT_PUBLIC_DOCTORATES_ALUMNI_URL,
  projectStudentApiUrl: process.env.NEXT_PUBLIC_MSC_MEMBERS_URL,
  phdStudentApiUrl: process.env.NEXT_PUBLIC_PHD_MEMBERS_URL,
  latestGroupUpdateApiUrl: process.env.NEXT_PUBLIC_GROUP_NEWS_URL,
  labEquipmentsApiUrl: process.env.NEXT_PUBLIC_LAB_INSTRUMENTS_URL,
  projectsApiUrl: process.env.NEXT_PUBLIC_PROJECTS_URL,
  contactFormPostApiUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_POST_URL,
};

const envConfig = Object.freeze(environment);

export default envConfig;
