import { useEffect, useState } from "react";
import GroupNewsCard from "../../components/single-use/group-news-card/GroupNewsCard";
import envConfig from "../../../envConfig";
import LoadingSpinner from "../../utils/common-loading-spinner/LoadingSpinner";
import { getAllData } from "../../../operations/apis/getAllData";
import SectionHeading from "../../components/reuseable/section-heading/SectionHeading";

const ManageGroupnews = () => {
  const [allGroupNews, setAllGroupNews] = useState(null);
  const [loadIng, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const output = await getAllData(setLoading, envConfig.groupNewsUrl);
      output && setAllGroupNews(output);
    };
    fetchData();
  }, []);
  return (
    <main className="bg-gray-50">
      <SectionHeading
        heading={"Manage Current News of CBS Research Group"}
        subHeading={`
        View, update, or delete all current news articles for the CBS Research Group, ensuring relevant information is accurately presented and easily accessible.`}
      />
      {loadIng === true && <LoadingSpinner />}
      {allGroupNews && allGroupNews.length === 0 ? (
        <h2 className="text-2xl text-gray-500 text-center font-bold pt-20">
          {" "}
          Currently group news are not available!
        </h2>
      ) : (
        ""
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
         mx-auto content-center gap-1 py-16"
      >
        {allGroupNews &&
          allGroupNews.map((data, index) => (
            <GroupNewsCard
              key={index}
              newsTitle={data.newsTitle}
              newsContent={data.content}
              createDate={data.createdAt}
              updateDate={data.updatedAt}
              updateUrl={`/admin-panel/update-group-news/${data._id}`}
              deleteUrl={`/admin-panel/delete-group-news/${data._id}`}
            />
          ))}
      </div>
      )
    </main>
  );
};

export default ManageGroupnews;
