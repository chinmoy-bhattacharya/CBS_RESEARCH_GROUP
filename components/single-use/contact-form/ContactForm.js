"use client";

import envConfig from "@/config/envConfig.js";
import CustomAlert from "@/utils/custom-alert/CustomAlert.js";
import ApplicationSpinner from "@/utils/spinner/application-spinner/ApplicationSpinner.js";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertmessage] = useState({
    text: "",
    message: "",
    status: false,
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [numberNotValid, setNumberNotValid] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();
    let emailValidation;
    let numberValidation;
    const givenEmail = email.split("@")[1];
    const lowerCaseEmail = givenEmail.toLowerCase();

    emailValidation =
      lowerCaseEmail === "gmail.com" || lowerCaseEmail === "outlook.com"
        ? "true"
        : "false";

    numberValidation = phoneNumber.length === 10 ? "true" : "false";

    if (numberValidation === "true" && emailValidation === "true") {
      setLoading(true);
      const contactInfo = {
        userName: `${firstName} ${lastName}`,
        emailId: email,
        phoneNumber: phoneNumber,
        desireCourse: course,
        message: userMessage,
      };

      try {
        const response = await fetch(envConfig.contactFormPostApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactInfo),
        });

        if (response.ok) {
          setLoading(false);
          setAlertmessage({
            text: "Successful!",
            message: "Everything seems great.",
            status: true,
          });
          setAlertOpen(true);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setLoading(false);
        setAlertmessage({
          text: "Failed!",
          message: "Something went wrong.",
          status: false,
        });
        setAlertOpen(true);
        console.log(error);
      } finally {
        formRef.current.reset();
        setEmailNotValid(false);
        setNumberNotValid(false);
      }
    } else {
      setNumberNotValid(numberValidation === "false");
      setEmailNotValid(emailValidation === "false");
    }
  };

  return (
    <main className="w-[100%]">
      {alertOpen === true && (
        <CustomAlert
          alertText={alertMessage.text}
          message={alertMessage.message}
          isSuccessful={alertMessage.status}
        />
      )}{" "}
      {loading === true && <ApplicationSpinner />}
      <div
        className="max-w-2xl mx-auto min-h-full bg-white dark:bg-slate-700 p-12
     md:p-24 rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmission} ref={formRef}>
          {/* First name input  */}
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                 dark:bg-transparent 
                focus:bg-transparent
                 border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none
                   focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                  peer-focus:text-blue-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>

            {/* Last name input  */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                 border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none 
                  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="floating_last_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                  peer-focus:text-blue-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          {/* Email address input  */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email_id"
              id="email_id"
              className={`${
                emailNotValid === true
                  ? "border border-red-600 dark:border-red-600"
                  : ""
              } block py-2.5 px-0 w-full text-sm
                 text-gray-900 bg-transparent border-0
               border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
                dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailNotValid === true ? (
              <p className="text-xs text-red-600">
                Email address is not valid!
              </p>
            ) : (
              ""
            )}
            <label
              htmlFor="email_id"
              className="absolute text-sm text-gray-500 dark:text-gray-400
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-yellow-500
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                 peer-focus:-translate-y-6"
            >
              Enter your email address
            </label>
          </div>

          {/* Phone number and desire course  */}
          <div className="grid xl:grid-cols-2 xl:gap-6">
            {/* Phone number  */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                className={`${
                  numberNotValid === true
                    ? "border border-red-600 dark:border-red-600"
                    : ""
                } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                 border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none 
                  focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {numberNotValid === true ? (
                <p className="text-xs text-red-600">
                  Phone number is not valid!
                </p>
              ) : (
                ""
              )}
              <label
                htmlFor="floating_phone"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                  peer-focus:text-blue-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>

            {/* desire course */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="desire_course"
                id="desire_course"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
                 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setCourse(e.target.value)}
              />
              <label
                htmlFor="desire_course"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                  peer-focus:text-blue-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Desire Course (Ex. MSc in chemistry)
              </label>
            </div>
          </div>

          {/* Message  */}
          <div className="relative">
            <textarea
              type="text"
              id="messages"
              aria-describedby="floating_helper_text"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm
               text-gray-900 bg-white dark:bg-gray-700 border-0 border-b-2
                border-gray-300 appearance-none dark:text-white dark:border-gray-600
                 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <label
              htmlFor="messages"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
              transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600
               peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Leave a message
            </label>
          </div>

          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 hover:bg-blue-800 focus:ring-4
           focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5
            py-2.5 text-center  dark:focus:ring-yellow-400"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
