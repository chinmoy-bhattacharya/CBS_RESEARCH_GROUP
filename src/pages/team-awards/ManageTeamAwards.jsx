import AwardCard from "../../components/reuseable/awards-card/AwardCard";
import { useEffect, useState } from "react";
import envConfig from "../../../envConfig";
import LoadingSpinner from "../../utils/common-loading-spinner/LoadingSpinner";
import { getAllData } from "../../../operations/apis/getAllData";
import SectionHeading from "../../components/reuseable/section-heading/SectionHeading";

const ManageTeamAwards = () => {
  const [allAwards, setAllawards] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const output = await getAllData(setLoading, envConfig.teamAwardsUrl);
      output && setAllawards(output);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-gray-50">
      <SectionHeading
        heading={"Manage Awards of CBS Research Group (Team)"}
        subHeading={`
       View, update, or delete all awards achieved by the CBS Research Group team, including details for each award to maintain comprehensive recognition and documentation.`}
      />
      {loading === true && <LoadingSpinner />}
      {allAwards && allAwards.length === 0 ? (
        <h2 className="text-2xl text-gray-500 text-center font-bold pt-20">
          {" "}
          Currently awards details are not available!
        </h2>
      ) : (
        ""
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto gap-1 py-20">
        {allAwards &&
          allAwards.map((data, index) => (
            <AwardCard
              key={index}
              updateUrl={`/admin-panel/update-team-award/${data._id}`}
              deleteUrl={`/admin-panel/delete-team-award/${data._id}`}
              awardTitle={data.awardTitle}
              recivedDate={data.recivedDate}
              overView={data.recivedFor}
              uploadDate={new Date(data.createdAt).toLocaleDateString()}
              updateDate={new Date(data.updatedAt).toLocaleDateString()}
            />
          ))}
      </div>
    </main>
  );
};

export default ManageTeamAwards;
