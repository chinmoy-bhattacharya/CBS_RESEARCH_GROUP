const environment = {
  phdStudentApiUrl: process.env.NEXT_PUBLIC_PHD_STUDENT_URL,
  mscStudentApiUrl: process.env.NEXT_PUBLIC_MSC_STUDENT_URL,
  phdAlumniApiUrl: process.env.NEXT_PUBLIC_PHD_ALUMNI_URL,
  mscAlumniApiUrl: process.env.NEXT_PUBLIC_MSC_ALUMNI_URL,
};

const envConfig = Object.freeze(environment);

export default envConfig;
