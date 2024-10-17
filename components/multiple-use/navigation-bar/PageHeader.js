"use client";
import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
import IIESTLogo from "@/public/icons/brandlogo/Indian Institute of Engineering Science and Technology.webp";
import CBSLogo from "@/public/icons/brandlogo/CBS Research Group Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
const PageHeader = () => {
  const [openCollapseMenu, setOpenCollapseMenu] = useState(false);
  const pathname = usePathname();
  const handleClick = () => {
    setOpenCollapseMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenCollapseMenu(false);
      } else {
        setOpenCollapseMenu(true);
      }
    };

    handleResize(); // Initialize screen width

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="min-h-[60px] tracking-wide w-full shadow-lg fixed top-0 right-0 left-0 z-[1000]">
      <section className="border-b border-gray-100">
        <div className="flex justify-center px-10 bg-white">
          <Image
            src={IIESTLogo}
            alt="IIEST Shibpur Image"
            width={500}
            height={100}
          />
        </div>
      </section>

      {/* Main Nav bar  */}
      <nav className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
          <Link href="/">
            <Image src={CBSLogo} alt="logo" width={80} height={80} />
          </Link>

          <div
            className={`${
              openCollapseMenu === true ? "block" : "hidden"
            } lg:!block shadow-md lg:shadow-none max-lg:before:fixed max-lg:before:bg-black
             max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50
             `}
          >
            <button
              onClick={handleClick}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-2 transform
              translate-1
              hover:scale-110"
            >
              <IoMdClose className="text-3xl font-extrabold " />
            </button>

            <ul
              onClick={handleClick}
              className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
            >
              <li className="mb-6 hidden max-lg:block">
                <Link href="/">
                  <Image src={CBSLogo} alt="logo" width={80} height={80} />
                </Link>
              </li>

              {/* Home */}
              <li className="max-lg:border-b max-lg:py-3 block lg:inline-flex lg:items-center">
                <Link
                  href="/"
                  className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                    ${
                      pathname === "/"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                        : ""
                    }`}
                >
                  Home
                </Link>
              </li>
              {/* Professor */}
              <li className="max-lg:border-b max-lg:py-3 lg:inline-flex lg:items-center">
                <Link
                  href="/professor"
                  className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                    ${
                      pathname === "/professor"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff]"
                        : ""
                    }`}
                >
                  Professor
                </Link>
              </li>

              {/* Publications */}
              <li className="max-lg:border-b max-lg:py-3 lg:inline-flex lg:items-center">
                <Link
                  href="/publications"
                  className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold
                    ${
                      pathname === "/publications"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                        : ""
                    }`}
                >
                  Publications
                </Link>
              </li>

              {/* Groups */}
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <p
                  className="cursor-pointer hover:text-[#007bff]
                     text-gray-600 text-[15px] font-bold
                     inline-flex items-center"
                >
                  <span
                    className={
                      pathname === "/msc-alumni" ||
                      pathname === "/phd-alumni" ||
                      pathname === "/msc-members" ||
                      pathname === "/phd-members" ||
                      pathname === "/awards"
                        ? "text-blue-500 "
                        : ""
                    }
                  >
                    {" "}
                    Groups
                  </span>
                  <RiArrowDropDownLine
                    className={`text-3xl ${
                      pathname === "/msc-alumni" ||
                      pathname === "/phd-alumni" ||
                      pathname === "/msc-members" ||
                      pathname === "/phd-members" ||
                      pathname === "/awards"
                        ? "text-blue-500 "
                        : ""
                    }`}
                  />
                </p>
                <ul
                  className="absolute shadow-lg bg-white space-y-3 lg:top-10 mt-2 max-lg:top-8 -left-6 min-w-[250px]
                z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500"
                >
                  {/* MSC Alumni */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/msc-alumni"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/msc-alumni"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      MSc Alumni
                    </Link>
                  </li>

                  {/* PHD Alumni */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/phd-alumni"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/phd-alumni"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      PHd Alumni
                    </Link>
                  </li>

                  {/* MSC Members */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/msc-members"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/msc-members"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      MSc Members
                    </Link>
                  </li>

                  {/* PHD Members */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/phd-members"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/phd-members"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      PHd Members
                    </Link>
                  </li>
                  {/* Awards */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/awards"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/awards"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      Awards
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Resources */}
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <p
                  className="cursor-pointer hover:text-[#007bff]
                  text-gray-600 text-[15px] font-bold
                  inline-flex items-center"
                >
                  <span
                    className={
                      pathname === "/news" ||
                      pathname === "/gallery" ||
                      pathname === "/projects" ||
                      pathname === "/lab-facilities"
                        ? "text-blue-500"
                        : ""
                    }
                  >
                    Resources
                  </span>
                  <RiArrowDropDownLine
                    className={` text-3xl ${
                      pathname === "/news" ||
                      pathname === "/gallery" ||
                      pathname === "/projects" ||
                      pathname === "/lab-facilities"
                        ? "text-blue-500"
                        : ""
                    }`}
                  />
                </p>
                <ul className="absolute shadow-lg bg-white space-y-3 lg:top-10 mt-2 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  {/* News */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/news"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/news"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      News
                    </Link>
                  </li>

                  {/* Lab Facilities */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/lab-facilities"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/lab-facilities"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      Lab Facilities
                    </Link>
                  </li>

                  {/* Projects */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/projects"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/projects"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      Projects
                    </Link>
                  </li>

                  {/* Gallery */}
                  <li className="border-b py-2 ">
                    <Link
                      href="/gallery"
                      className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold block
                        ${
                          pathname === "/gallery"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li className="max-lg:border-b max-lg:py-3 lg:inline-flex lg:items-center">
                <Link
                  href="/contact"
                  className={`hover:text-[#007bff] text-gray-600 text-[15px] font-bold
                    ${
                      pathname === "/contact"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                        : ""
                    }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-8 max-lg:ml-auto w-20">
            <a
              href="https://adminsconsole.chinmoybhattacharyaelectrochemistry.com/"
              target="_blank"
              className="relative flex justify-end tooltip transform translate-1 hover:scale-110"
            >
              <MdAdminPanelSettings className="text-2xl hover:text-blue-500 cursor-pointer" />
              <span className="tooltiptext">Login As An Admin</span>
            </a>
            <button id="toggleOpen" onClick={handleClick} className="lg:hidden">
              <HiMenuAlt3 className="text-4xl hover:text-blue-500 transform translate-1 hover:scale-110" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
