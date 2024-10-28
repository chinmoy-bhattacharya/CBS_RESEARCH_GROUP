"use client";
import ContentDisplayer from "@/utils/modals/ContentDisplayer.js";
import React, { useState } from "react";

const Readmore = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowCourseDetails = (id) => {
    setIsModalOpen(true);
    setCurrentId(id);
  };

  const handleDetailsClose = () => setIsModalOpen(false);
  const teachings = [
    {
      courses: "Teaching (PG Courses)",
      topics: [
        {
          id: 1,
          title: "1. M.Sc. CHEM. 2nd SEM Physical Chemistry Laboratory-I",
          course_code: "CH5271, Credit: 2",
          classes: " 0 Lectures, 0 Tutorials, 1 Practicals",
        },
        {
          id: 2,
          title: "2. M.Sc. CHEM. 4th SEM Non-Conventional Energy",
          course_code: "PGC 406, Credit: 1",
          classes: "1 Lectures, 0 Tutorials, 0 Practicals",
        },
        {
          id: 3,
          title: "3. M.Sc. Chemistry 4th SEM_Applied Physical Chemistry-II",
          course_code: "PGC 401B, Credit: 0",
          classes: "3 Lectures, 0 Tutorials, 0 Practicals",
        },
        {
          id: 4,
          title:
            "4. M.Sc. CHEM. 2nd SEM: Classical And Statistical Thermodynamics, Surface And Biophysical Chemistry(Unit 1: Classical Thermodynamics).",
          course_code: " CH5201, Credit: 1",
          classes: "1 Lectures, 0 Tutorials, 0 Practicals",
        },
      ],
    },
    {
      courses: "Teaching (UG Courses)",
      topics: [
        {
          id: 5,
          title: "1. B.Tech 2nd SEM_Chemistry Practical_CH1271.",
          course_code: "CH1271, Credit: 2",
          classes: "0 Lectures, 0 Tutorials, 1 Practicals",
        },
        {
          id: 6,
          title: "2. B.Tech (IT) 2nd SEM Chemistry (Electrochemistry).",
          course_code: "CH1201, Credit: 1",
          classes: "1 Lectures, 0 Tutorials, 0 Practicals",
        },
      ],
    },
    {
      title: "Academic Qualification",
      qualifications: [
        {
          id: 1,
          degree: "Master of Science",
          specialization: "Chemistry",
          year: "2000",
        },
        {
          id: 2,
          degree: "Doctorate",
          specialization: "Chemistry",
          year: "2006",
        },
      ],
    },
  ];

  const handleShowMoreDetails = () => setIsSectionOpen(!isSectionOpen);

  return (
    <main>
      <div className="mt-12 flex flex-col justify-center">
        {" "}
        <p className="text-sm md:text-base lg:text-base text-gray-800 dark:text-gray-300 text-center font-normal lg:px-16 mb-10">
          Joined the Institute as Assistant Professor , Department of Chemistry,
          Indian Institute of Engineering Science & Technology, Shibpur
          (formerly, BESUS) Howrah – 711 103, West Bengal on 23rd June 2006.
          Promoted to Associate Professor, Department of Chemistry, IIESTS on
          22nd Feb. 2019..
        </p>{" "}
        {isSectionOpen === true && (
          <section
            className="py-12 border-t text-gray-600 dark:text-gray-300
                 border-gray-300 dark:border-gray-600"
          >
            <div className="container mx-auto">
              <div className="mx-auto max-w-screen-lg">
                <div className="text-center mb-10">
                  <h1 className="text-center text-xl font-medium md:text-2xl">
                    Academic Qualification & Teaching Experiences
                  </h1>
                </div>
                <div className="mx-auto flex flex-col gap-16 text-center">
                  {teachings.map((teaching, index) => (
                    <div key={index} className="grid">
                      <h2 className="pb-2 text-xl font-bold">
                        {teaching.courses}
                      </h2>
                      {teaching.topics &&
                        teaching.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center border-t border-b
                             border-gray-300 dark:border-gray-600  py-4"
                          >
                            <button
                              onClick={() => handleShowCourseDetails(index)}
                              className="font-semibold hover:underline hover:text-blue-600 text-sm md:text-md lg:text-base"
                            >
                              {topic.title}
                            </button>
                            {isModalOpen === true && index === currentId ? (
                              <ContentDisplayer
                                key={index}
                                courseTitle={topic.title}
                                courseCode={topic.course_code}
                                classess={topic.classes}
                                colseModel={handleDetailsClose}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        ))}

                      <h3 className="pb-2 text-xl font-bold ">
                        {teaching.title}
                      </h3>
                      {teaching.qualifications &&
                        teaching.qualifications.map((qualification, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center border-t border-b
                             border-gray-300 dark:border-gray-600  py-4"
                          >
                            <p className="font-semibold">
                              {qualification.degree} in{" "}
                              {qualification.specialization} (
                              {qualification.year})
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        <button
          onClick={handleShowMoreDetails}
          className="text-blue-700 hover:text-blue-800 hover:font-bold font-semibold mt-4"
        >
          {isSectionOpen === true ? "See less..." : "See more..."}
        </button>
      </div>
    </main>
  );
};

export default Readmore;
