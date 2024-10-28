import Link from "next/link";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";
import { FaOrcid } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-300 py-10 px-2 lg:px-10 
    font-sans tracking-wide"
    >
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-2xl font-semibold text-blue-700">
            CBS Research Group
          </h1>
        </Link>
        <p className="text-sm mt-4">
          CBS Research Group is an electrochemistry research lab under (Indian
          Institute of Engineering Science and Technology). It&apos;s located in
          Shibpur P.O. - Botanic Garden, Howrah - 711 103 West Bengal, India.
        </p>

        <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
          <li className="transform translate-1 hover:scale-110">
            <a
              title="Google Scholar"
              href="https://scholar.google.com/citations?user=7Be7e7IAAAAJ&hl=en"
              target="_blank"
            >
              <FaGoogleScholar className="text-2xl text-blue-500" />
            </a>
          </li>

          <li className="transform translate-1 hover:scale-110">
            <a
              title="Research Gate"
              href="https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2"
              target="_blank"
            >
              <FaResearchgate className="text-2xl text-orange-400 rounded-full" />
            </a>
          </li>

          <li className="transform translate-1 hover:scale-110">
            <a
              title="Scopus"
              href="https://www.scopus.com/authid/detail.uri?authorId=7006023691"
              target="_blank"
            >
              <SiScopus className="text-2xl text-orange-400 rounded-full" />
            </a>
          </li>

          <li className="transform translate-1 hover:scale-110">
            <a
              title="Orcid"
              href="https://orcid.org/0000-0003-2370-7108"
              target="_blank"
            >
              <FaOrcid className="text-2xl text-lime-400 rounded-full" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-start md:justify-center md:items-center">
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mt-20 mx-4 md:mx-2">
          <li className="flex items-center cursor-pointer" title="Contact Us">
            <div
              className="dark:bg-slate-700 h-10 w-10 rounded-full flex items-center
           justify-center shrink-0"
            >
              <PiPhoneCallFill className="text-2xl text-blue-500" />
            </div>
            <a href="tel: +918334911400" className="text-blue-500 text-sm ml-3">
              <small className="block">Tel:</small>
              <strong className="font-medium">+ 91 8334-911-400</strong>
            </a>
          </li>

          <li className="flex items-center cursor-pointer" title="Contact Us">
            <div className="dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <PiPhoneCallFill className="text-2xl text-blue-500 " />
            </div>
            <a href="tel: +917003191127" className="text-blue-500 text-sm ml-3">
              <small className="block">Tel:</small>
              <strong className="font-medium">+ 91 7003-191-127</strong>
            </a>
          </li>

          <li className="flex items-center cursor-pointer" title="Send Email">
            <div className="dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <MdOutlineMailOutline className="text-2xl  text-blue-500 " />
            </div>
            <a
              href="mailto:chinmoy@chem.iiests.ac.in"
              className="text-blue-500 text-sm ml-3"
            >
              <small className="block">Mail</small>
              <strong className="font-medium">chinmoy@chem.iiests.ac.in</strong>
            </a>
          </li>

          <li className="flex items-center cursor-pointer" title="Send Email">
            <div
              className="dark:bg-slate-700 h-10 w-10 rounded-full flex items-center
           justify-center shrink-0"
            >
              <MdOutlineMailOutline className="text-2xl  text-blue-500 " />
            </div>
            <a
              href="mailto:cbhattacharya.besus@gmail.com"
              className="text-blue-500 text-sm ml-3"
            >
              <small className="block">Mail</small>
              <strong className="font-medium">
                cbhattacharya.besus@gmail.com
              </strong>
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-10 border-gray-200 dark:border-gray-800" />

      <div className="flex max-md:flex-col gap-4 px-8">
        <ul className="flex flex-wrap gap-4">
          <li className="text-sm">
            <a
              href="https://github.com/chinmoy-bhattacharya/CBS_RESEARCH_GROUP/issues"
              target="_blank"
              className="text-blue-500 font-semibold hover:underline"
            >
              Report Issues
            </a>
          </li>
        </ul>
        <p className="text-sm md:ml-auto">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
