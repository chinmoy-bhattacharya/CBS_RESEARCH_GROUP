import { useEffect, useState } from "react";
import ContactInfoCard from "../../components/single-use/contact-info-card/ContactInfoCard";
import envConfig from "../../../envConfig";
import LoadingSpinner from "../../utils/common-loading-spinner/LoadingSpinner";
import { getAllData } from "../../../operations/apis/getAllData";
import SectionHeading from "../../components/reuseable/section-heading/SectionHeading";

const ManageContacts = () => {
  const [allContactData, setAllContactData] = useState(null);
  const [getRecivedTimes, setRecivedTimes] = useState([]); // Changed to plural to hold multiple times
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const output = await getAllData(setLoading, envConfig.contactFormDataUrl);
      output && setAllContactData(output);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allContactData) {
      const formattedTimes = allContactData.map((data) => {
        const isoDate = data.createdAt;
        const date = new Date(isoDate);

        // Convert to Indian Standard Time (IST) by adding 5 hours and 30 minutes
        const istOffset = 5.5 * 60; // IST is UTC+5:30 in minutes
        const istDate = new Date(date.getTime() + istOffset * 60 * 1000);

        // Get hours and convert to 12-hour format
        let hours = istDate.getUTCHours();
        const minutes = istDate.getUTCMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert '0' hour to '12' in 12-hour format

        // Format time string
        return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      });

      // Set all formatted times in state at once
      setRecivedTimes(formattedTimes);
    }
  }, [allContactData]); // Remove getRecivedTime from dependencies

  return (
    <main className="bg-gray-50 ">
      {loading && <LoadingSpinner />}
      <SectionHeading
        heading={"Contact Us: Manage Inquiries"}
        subHeading={`View and manage all contact applications submitted to the CBS Research Group. You can respond and connect with applicants via email for seamless communication.`}
      />
      {allContactData && allContactData.length === 0 ? (
        <h2 className="text-2xl text-gray-500 text-center font-bold pt-20">
          {" "}
          Currently contact applications box is empty!
        </h2>
      ) : (
        ""
      )}

      <div className="py-20">
        {allContactData &&
          allContactData.map((data, index) => (
            <ContactInfoCard
              key={index}
              id={data._id}
              customerName={data.userName}
              providedEmail={data.emailId}
              providedNumber={data.phoneNumber}
              submitionTime={getRecivedTimes[index]} // Use index to get the correct time
              submitionDate={data.createdAt}
              preViewUrl={`/admin-panel/preview-contacts/${data._id}`}
              deleteUrl={`/admin-panel/delete-contacts/${data._id}`}
            />
          ))}
      </div>
    </main>
  );
};

export default ManageContacts;
