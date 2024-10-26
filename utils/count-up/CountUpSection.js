"use client";
import CountUp from "react-countup";
import envConfig from "@/config/envConfig.js";
import React, { useEffect, useState } from "react";
import ComponentSpinner from "../spinner/component-spinner/ComponentSpinner.js";

const CountUpSection = () => {
  const [loading, setLoading] = useState(false);
  const [mscAlumni, setMscAlumni] = useState([]);
  const [phdAlumni, setPhdAlumni] = useState([]);
  const [mscStudents, setMscStudents] = useState([]);
  const [phdStudents, setPhdStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const mscAlumniResponse = await fetch(envConfig.mscAlumniApiUrl);
        const phdAlumniResponse = await fetch(envConfig.phdAlumniApiUrl);
        const mscStudentsResponse = await fetch(envConfig.mscStudentApiUrl);
        const phdStudentsResponse = await fetch(envConfig.phdStudentApiUrl);

        if (
          !mscAlumniResponse.ok ||
          !phdAlumniResponse.ok ||
          !mscStudentsResponse.ok ||
          !phdStudentsResponse.ok
        ) {
          throw new Error("Network response was not ok");
        }

        const mscAlumniData = await mscAlumniResponse.json();
        const phdAlumniData = await phdAlumniResponse.json();
        const mscStudentsData = await mscStudentsResponse.json();
        const phdStudentsData = await phdStudentsResponse.json();

        setMscAlumni(mscAlumniData);
        setPhdAlumni(phdAlumniData);
        setMscStudents(mscStudentsData);
        setPhdStudents(phdStudentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <ComponentSpinner />
      ) : (
        <div
          className="flex flex-col justify-center items-center shadow-lg mb-8
         bg-white text-blue-600 dark:bg-slate-900 dark:text-gray-400"
        >
          <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-6 md:w-3/4 my-8 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={mscAlumni.length} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">Masters Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={phdAlumni.length} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">Doctorate Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={mscStudents.length} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">MSc Students</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={phdStudents.length} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">PhD Students</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountUpSection;
