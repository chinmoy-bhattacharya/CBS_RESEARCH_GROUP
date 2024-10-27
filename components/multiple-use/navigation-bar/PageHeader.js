"use client";
import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { PiSunFill } from "react-icons/pi";
import { TbMoonFilled } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
import IIESTLogo from "@/public/icons/IIEST_Brand_Logo_Light.webp";
import IIESTLogoDark from "@/public/icons/IIEST_Brand_Logo_Dark.webp";
import CBSLogo from "@/public/icons/CBS_Research_Group_Logo_Light.webp";
import CBSLogoDark from "@/public/icons/CBS_Research_Group_Logo_Dark.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const PageHeader = () => {
  const [cbsLogo, setCbsLogo] = useState(CBSLogo);
  const [iiestLogo, setIiestLogo] = useState(IIESTLogo);
  const navbarRef = useRef(null);
  const pathname = usePathname();
  const [openCollapseMenu, setOpenCollapseMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isGroupDropDownOpen, setIsGroupDropDownOpen] = useState(false);
  const [isResourceDropDownOpen, setIsResourceDropDownOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setCbsLogo(CBSLogoDark);
      setIiestLogo(IIESTLogoDark);
    } else {
      setCbsLogo(CBSLogo);
      setIiestLogo(IIESTLogo);
    }
  }, [theme]);
  //1. Navbar open and close function
  const handleClick = () => {
    setOpenCollapseMenu((prev) => !prev);
  };

  //2. findout screen width function
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setOpenCollapseMenu(false);
      } else {
        setIsMobile(false);
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

  //3. on scroll show navbar function
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //4. Click outside and close navbar function
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpenCollapseMenu(false);
    }
  };

  //5. Click outside and close navbar event listen
  useEffect(() => {
    if (openCollapseMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCollapseMenu]);

  return (
    <header
      className={`${
        isSticky === true ? "visable" : "hidden"
      } min-h-[60px] tracking-wide w-full shadow-lg fixed top-0 right-0 left-0 z-[1000] 
       `}
    >
      <section className="border-b border-gray-100 dark:border-gray-700">
        <div className="flex justify-center px-10 bg-white dark:bg-slate-900">
          <Image
            src={iiestLogo}
            alt="IIEST Shibpur Image"
            width={500}
            height={100}
          />
        </div>
      </section>

      {/* Main Nav bar  */}
      <nav
        className="flex bg-white dark:bg-slate-900 dark:text-gray-400 min-h-[70px]
        relative z-50"
      >
        <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
          <Link href="/">
            <Image src={cbsLogo} alt="logo" width={80} height={80} />
          </Link>

          <div
            className={`${
              openCollapseMenu === true ? "block" : "hidden"
            } lg:!block shadow-md lg:shadow-none max-lg:before:fixed max-lg:before:bg-black
              dark:bg-slate-900 dark:text-gray-400
              max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50
             `}
          >
            <button
              // onClick={handleClick}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white
               dark:bg-slate-900 dark:text-gray-400 p-2 transform
              translate-1
              hover:scale-110"
            >
              <IoMdClose className="text-3xl font-extrabold hover:text-blue-600" />
            </button>

            <ul
              ref={navbarRef}
              className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white dark:bg-slate-900 dark:text-gray-400
                 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
                 [&::-webkit-scrollbar]:w-[7px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500`}
            >
              <li className="mb-6 hidden max-lg:block" onClick={handleClick}>
                <Link href="/">
                  <Image src={cbsLogo} alt="logo" width={80} height={80} />
                </Link>
              </li>

              {/* Home */}
              <li
                className="max-lg:border-b border-gray-200 dark:border-gray-700 max-lg:py-3 block lg:inline-flex lg:items-center"
                onClick={handleClick}
              >
                <Link
                  href="/"
                  className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                    ${
                      pathname === "/"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff]"
                        : ""
                    }`}
                >
                  Home
                </Link>
              </li>
              {/* About Us */}
              <li
                onClick={handleClick}
                className="max-lg:border-b border-gray-200 dark:border-gray-700 max-lg:py-3 lg:inline-flex lg:items-center"
              >
                <Link
                  href="/about"
                  className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                    ${
                      pathname === "/about"
                        ? "text-[#007bff] border-b-2 w-fit border-[#007bff]"
                        : ""
                    }`}
                >
                  About Us
                </Link>
              </li>

              {/* Publications */}
              <li
                onClick={handleClick}
                className="max-lg:border-b border-gray-200 dark:border-gray-700 max-lg:py-3 lg:inline-flex lg:items-center"
              >
                <Link
                  href="/publications"
                  className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold
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
              {isMobile === true ? (
                <ol
                  onClick={() => setIsGroupDropDownOpen((prev) => !prev)}
                  className="group max-lg:border-b border-gray-200 dark:border-gray-700 
              max-lg:py-3 relative"
                >
                  <p
                    className="cursor-pointer hover:text-[#007bff] dark:hover:text-[#007bff]
                     text-gray-600 dark:text-gray-400 text-[15px] font-bold
                     inline-flex items-center"
                  >
                    <span
                      className={
                        pathname === "/alumni" ||
                        pathname === "/members" ||
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
                        pathname === "/alumni" ||
                        pathname === "/members" ||
                        pathname === "/awards"
                          ? "text-blue-500 "
                          : ""
                      }`}
                    />
                  </p>
                  <ul
                    onClick={handleClick}
                    className={`absolute shadow-lg bg-white dark:bg-slate-900
                dark:text-gray-400 space-y-3 lg:top-10 mt-2 max-lg:top-8 -left-6
                  min-w-[250px] z-50 ${
                    isGroupDropDownOpen === true ? "block" : "hidden"
                  } overflow-hidden  px-6  transition-all duration-500
                  opacity-100 max-h-[700px] pb-4 pt-6`}
                  >
                    {/* Alumni */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/alumni"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                        ${
                          pathname === "/alumni"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                      >
                        Alumni
                      </Link>
                    </li>

                    {/* Members */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/members"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                        ${
                          pathname === "/members"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                      >
                        Members
                      </Link>
                    </li>

                    {/* Awards */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/awards"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                </ol>
              ) : (
                <ol
                  className="group max-lg:border-b border-gray-200 dark:border-gray-700 
              max-lg:py-3 relative"
                >
                  <p
                    className="cursor-pointer hover:text-[#007bff] dark:hover:text-[#007bff]
                     text-gray-600 dark:text-gray-400 text-[15px] font-bold
                     inline-flex items-center"
                  >
                    <span
                      className={
                        pathname === "/alumni" ||
                        pathname === "/members" ||
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
                        pathname === "/alumni" ||
                        pathname === "/members" ||
                        pathname === "/awards"
                          ? "text-blue-500 "
                          : ""
                      }`}
                    />
                  </p>
                  <ul
                    className="absolute shadow-lg bg-white dark:bg-slate-900
                dark:text-gray-400 space-y-3 lg:top-10 mt-2 max-lg:top-8 -left-6
                  min-w-[250px] z-50 max-h-0 overflow-hidden  px-6  transition-all duration-500
                  group-hover:opacity-100 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6"
                  >
                    {/* Alumni */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/alumni"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                        ${
                          pathname === "/alumni"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                      >
                        Alumni
                      </Link>
                    </li>

                    {/* Members */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/members"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
                        ${
                          pathname === "/members"
                            ? "text-[#007bff] border-b-2 w-fit border-[#007bff] "
                            : ""
                        }`}
                      >
                        Members
                      </Link>
                    </li>

                    {/* Awards */}
                    <li className="border-b border-gray-200 dark:border-gray-700  py-2 ">
                      <Link
                        href="/awards"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                </ol>
              )}

              {/* Resources */}
              {isMobile === true ? (
                <ol
                  onClick={() => setIsResourceDropDownOpen((prev) => !prev)}
                  className="group max-lg:border-b border-gray-200 dark:border-gray-700 max-lg:py-3 relative"
                >
                  <p
                    className="cursor-pointer hover:text-[#007bff] dark:hover:text-[#007bff]
   text-gray-600 dark:text-gray-400  text-[15px] font-bold
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
                  <ul
                    onClick={handleClick}
                    className={`absolute shadow-lg bg-white dark:bg-slate-900 dark:text-gray-400 px-6 space-y-3 lg:top-10
   mt-2 max-lg:top-8 -left-6 min-w-[250px] z-50 ${
     isResourceDropDownOpen === true ? "visable" : "hidden"
   } overflow-hidden transition-all duration-500
   opacity-100 max-h-[700px] pb-4 pt-6`}
                  >
                    {/* News */}
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/news"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/lab-facilities"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/projects"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/gallery"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                </ol>
              ) : (
                <ol className="group max-lg:border-b border-gray-200 dark:border-gray-700 max-lg:py-3 relative">
                  <p
                    className="cursor-pointer hover:text-[#007bff] dark:hover:text-[#007bff]
                  text-gray-600 dark:text-gray-400  text-[15px] font-bold
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
                  <ul
                    className="absolute shadow-lg bg-white dark:bg-slate-900 dark:text-gray-400 px-6 space-y-3 lg:top-10
                  mt-2 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden transition-all duration-500
                  group-hover:opacity-100 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6"
                  >
                    {/* News */}
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/news"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/lab-facilities"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/projects"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                    <li className="border-b border-gray-200 dark:border-gray-700 py-2 ">
                      <Link
                        href="/gallery"
                        className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold block
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
                </ol>
              )}

              {/* Contact */}
              <li
                onClick={handleClick}
                className="max-lg:py-3 lg:inline-flex lg:items-center"
              >
                <Link
                  href="/contact"
                  className={`hover:text-[#007bff] dark:hover:text-[#007bff] text-gray-600 dark:text-gray-400 text-[15px] font-bold
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

          <div className="flex items-center space-x-8 max-lg:ml-auto">
            <a
              href="https://adminsconsole.chinmoybhattacharyaelectrochemistry.com/"
              target="_blank"
              className="relative flex justify-end tooltip transform translate-1 hover:scale-110"
            >
              <MdAdminPanelSettings className="text-2xl hover:text-blue-500 cursor-pointer" />
              <span className="tooltiptext">Login As An Admin</span>
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <TbMoonFilled className="text-2xl hover:text-yellow-400 cursor-pointer" />
              ) : (
                <PiSunFill className="text-2xl transition-opacity duration-300 dark:text-gray-400 hover:text-yellow-400 cursor-pointer" />
              )}
            </button>

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
