"use client";
import axios from "@/config/axios";
import envConfig from "@/config/envConfig";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import ComponentSpinner from "../spinner/component-spinner/ComponentSpinner";

const CountUpSection = () => {
  // When user richout to this section the section will visable
  const [loading, setLoading] = useState(false);
  const [mscAlumni, setMscAlumni] = useState([]);
  const [phdAlumni, setPhdAlumni] = useState([]);
  const [mscStudents, setMscStudents] = useState([]);
  const [phdStudents, setPhdStudents] = useState([]);
  // Get Countup Content
  useEffect(() => {
    setLoading(true);
    try {
      async function fetchData() {
        await axios.get(envConfig.mscAlumniApiUrl).then((res) => {
          setMscAlumni(res.data);
        });
        await axios.get(envConfig.phdAlumniApiUrl).then((res) => {
          setPhdAlumni(res.data);
        });
        await axios.get(envConfig.mscStudentApiUrl).then((res) => {
          setMscStudents(res.data);
        });
        await axios.get(envConfig.phdStudentApiUrl).then((res) => {
          setPhdStudents(res.data);
          if (res) {
            setLoading(false);
          }
        });
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {" "}
      {loading === true ? (
        <ComponentSpinner />
      ) : (
        <div
          className="flex flex-col justify-center items-center shadow-lg
         bg-white text-blue-600 dark:bg-slate-900 dark:text-gray-400"
        >
          <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-6 md:w-3/4 my-8 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp
                  start={0}
                  end={mscAlumni && mscAlumni.length}
                  duration={2.75}
                ></CountUp>
                +
              </h3>
              <p className="text-base font-semibold">Masters Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp
                  start={0}
                  end={phdAlumni && phdAlumni.length}
                  duration={2.75}
                ></CountUp>
                +
              </h3>
              <p className="text-base font-semibold">Doctorate Alumni</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp
                  start={0}
                  end={mscStudents && mscStudents.length}
                  duration={2.75}
                ></CountUp>
                +
              </h3>
              <p className="text-base font-semibold">MSc Students</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold">
                <CountUp
                  start={0}
                  end={phdStudents && phdStudents.length}
                  duration={2.75}
                ></CountUp>
                +
              </h3>
              <p className="text-base font-semibold">PHd Students</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountUpSection;
