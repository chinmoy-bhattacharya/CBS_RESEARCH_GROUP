import { useEffect, useState } from "react";
import AccountHolderCard from "../../components/reuseable/account-holder-card/AccountHolderCard";
import { getAllData } from "../../../operations/apis/getAllData";
import envConfig from "../../../envConfig";
import LoadingSpinner from "../../utils/common-loading-spinner/LoadingSpinner";
import SectionHeading from "../../components/reuseable/section-heading/SectionHeading";

const ManageAdminAccounts = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const output = await getAllData(setLoading, envConfig.allAdminUsers);
      output && setApiResponse(output);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pb-24 lg:py-auto">
      {loading === true && <LoadingSpinner />}

      <div className="text-center">
        <SectionHeading
          heading={"Overview of Registered Admin Users"}
          subHeading={`
         Explore the complete list of all registered admin accounts, including their roles and registration dates, for effective management.`}
        />
        <div className="flex justify-center items-center mt-12 ">
          <div className="min-w-[80%] mx-auto">
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <div className="divide-y divide-gray-200">
                  {apiResponse &&
                    apiResponse.map((data, index) => (
                      <AccountHolderCard
                        key={index}
                        iconCharacter={data.adminUserName[0]}
                        accountHolderName={data.adminUserName}
                        corespondingEmailId={data.adminUserEmail}
                        registerDate={data.createdAt}
                        updateDate={data.updatedAt}
                        deActivateLink={`/admin-panel/deactivate-admin-account/${data._id}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageAdminAccounts;
