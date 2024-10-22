import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner";
import React from "react";
import groupNewsBannerImage from "@/public/images/background/group_news_banner.png";
import NewsCard from "@/components/multiple-use/news-card/NewsCard";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import getRequest_all from "@/apis/getRequest(all)";
import envConfig from "@/config/envConfig";
const News = async () => {
  const getAllLatestGroupNews = await getRequest_all(
    envConfig.latestGroupUpdateApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={groupNewsBannerImage}
        headingFirst={"Here are all the"}
        UniqueHeading={"Publication's"}
        headingLast={"from CBS Research Group."}
        subHeading={`Our research work mainly focusses on different synthetic routes of
              various photocatalysts or semiconductors that are basically oxides
              of inorganic compound. Using these, we check their
              photoelectrochemical and photocatalytic activity so that they can
              be useful in the modern world. Additionally, our research group
              also works in the field of Corrosion Chemistry. All the published
              papers till date has been provided here, you can freely access
              them and get a thorough understanding about the research work of
              our lab.`}
      />

      <CommonHeading
        Heading="Latest Group News"
        subHeading="Our research work mainly focusses on different synthetic routes of
              various photocatalysts or semiconductors that are basically oxides
              of inorganic compound. Using these, we check their"
        customColorHeadig={null}
      />
      <section className="pb-20">
        {getAllLatestGroupNews &&
          getAllLatestGroupNews.map((news, index) => (
            <NewsCard
              key={index}
              createAt={news.createdAt}
              newsTitle={news.newsTitle}
              newsDescription={news.content}
            />
          ))}
      </section>
    </main>
  );
};

export default News;
