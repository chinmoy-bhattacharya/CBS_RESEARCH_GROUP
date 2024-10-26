"use client";
import CountUp from "react-countup";
import envConfig from "@/config/envConfig.js";
import React, { useEffect, useState } from "react";
import ComponentSpinner from "../spinner/component-spinner/ComponentSpinner.js";

const CountUpSection = () => {
  const [loading, setLoading] = useState(true);
  const [mscAlumniCount, setMscAlumniCount] = useState(0);
  const [phdAlumniCount, setPhdAlumniCount] = useState(0);
  const [mscStudentsCount, setMscStudentsCount] = useState(0);
  const [phdStudentsCount, setPhdStudentsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
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

        setMscAlumniCount(mscAlumniData.length);
        setPhdAlumniCount(phdAlumniData.length);
        setMscStudentsCount(mscStudentsData.length);
        setPhdStudentsCount(phdStudentsData.length);
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
          <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-6 md:w-3/4 my-8">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={mscAlumniCount} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">Masters Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={phdAlumniCount} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">Doctorate Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={mscStudentsCount} duration={2.75} />+
              </h3>
              <p className="text-base font-semibold">MSc Students</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp start={0} end={phdStudentsCount} duration={2.75} />+
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
