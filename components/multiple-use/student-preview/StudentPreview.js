import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
const StudentPreview = ({
  studentName,
  profileImageUrl,
  previewHeading,
  googleScholarId,
  researchGateId,
  emailId,
  phoneNumber,
  bscCollege,
  mscCollege,
  yearOfPassout,
  currentYear,
  aboutInfo,
  goBackLink,
}) => {
  return (
    <section className="pt-8">
      <div className="border-1 shadow-md rounded-lg bg-white dark:bg-slate-700">
        <div className="flex rounded-t-lg bg-blue-200 dark:bg-[#e4da83] sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3 ">
            <Image
              src={profileImageUrl}
              alt={studentName}
              height={500}
              width={500}
            />
          </div>

          <div className="w-11/12 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-semibold text-heading sm:text-4xl text-2xl capitalize text-gray-700">
              {studentName}
            </p>
            <p className="text-heading text-sm md:text-base lg:text-base dark:text-gray-800 mt-2 font-normal">
              {previewHeading}
            </p>
            <p className="text-center inline-flex item-center">
              <a
                href={`https://${googleScholarId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleScholar className="text-xl mt-1 text-blue-500  hover:text-blue-600 transform translate-y-1 hover:scale-110 cursor-pointer" />
              </a>
              <a
                href={`https://${researchGateId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaResearchgate className="text-xl mt-1 text-orange-500 hover:text-orange-600 ml-2 transform translate-y-1 hover:scale-110 cursor-pointer" />
              </a>
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-semibold text-start text-gray-700 dark:text-gray-200">
                  Contact Details
                </h2>
                <div className="border-2 w-32 border-top-color my-3 border-gray-300 dark:border-gray-600"></div>

                <div className="flex text-sm md:text-base lg:text-base flex-col justify-start ml-0 mr-2 font-medium text-gray-600 dark:text-gray-300">
                  <div className="flex items-start my-1">
                    <div>{emailId}</div>
                  </div>
                  <div className="flex items-start my-1">
                    <div> {phoneNumber}</div>
                  </div>
                  <div className="flex flex-col items-start my-1">
                    <div>
                      {" "}
                      <span className="text-blue-500 font-semibold dark:text-yellow-500">
                        BSc:
                      </span>{" "}
                      {bscCollege}
                    </div>
                  </div>
                  <div
                    className={`${
                      mscCollege ? "flex" : "hidden"
                    } flex-col items-start my-1`}
                  >
                    <div>
                      <span className="text-blue-500 dark:text-yellow-500 font-semibold">
                        MSc:
                      </span>{" "}
                      {mscCollege}
                    </div>
                  </div>
                  {yearOfPassout ? (
                    <div className="inline-flex items-center justify-start my-1">
                      <div>
                        {" "}
                        <span className="text-blue-500 dark:text-yellow-500 font-semibold">
                          Graduated:{" "}
                        </span>
                        {yearOfPassout}
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-start my-1">
                      <div>
                        <span className="text-blue-500 dark:text-yellow-500 font-semibold">
                          Current Year:
                        </span>
                        {currentYear}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-poppins font-semibold text-gray-700 dark:text-gray-200 text-start ">
                  About Info
                </h2>
                <div className="border-2 w-32 border-top-color my-3 border-gray-300 dark:border-gray-600"></div>
                <article className="text-start text-gray-500 dark:text-gray-300 text-sm md:text-base lg:text-base">
                  {aboutInfo}
                </article>
                <div className="flex justify-start mt-4">
                  <Link
                    href={goBackLink}
                    className="text-gray-700 text-lg font-medium bg-yellow-500 px-6 py-1 rounded-lg inline-flex items-center hover:bg-yellow-600 transform translate-y-1 hover:scale-110 cursor-pointer"
                  >
                    <FaLongArrowAltLeft />
                    <span className="ml-2">Return</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
StudentPreview.propTypes = {
  studentName: PropTypes.string,
  profileImageUrl: PropTypes.string,
  previewHeading: PropTypes.string,
  googleScholarId: PropTypes.string,
  researchGateId: PropTypes.string,
  emailId: PropTypes.string,
  phoneNumber: PropTypes.string,
  bscCollege: PropTypes.string,
  mscCollege: PropTypes.string || null,
  yearOfPassout: PropTypes.string || null,
  currentYear: PropTypes.string || null,
  aboutInfo: PropTypes.string,
  goBackLink: PropTypes.string,
};
export default StudentPreview;
