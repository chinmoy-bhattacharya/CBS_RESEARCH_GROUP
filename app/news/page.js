import React from "react";
import groupNewsBannerImage from "@/public/images/background/group_news_banner.webp";
import getRequest_all from "@/apis/getRequestAll.js";
import envConfig from "@/config/envConfig.js";
import dynamic from "next/dynamic";
import CommonBanner from "@/components/multiple-use/common-banner/CommonBanner.js";
import ComponentSpinner from "@/utils/spinner/component-spinner/ComponentSpinner";

const CommonHeading = dynamic(
  () => import("@/utils/common-headings/CommonHeading.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const NewsCard = dynamic(
  () => import("@/components/multiple-use/news-card/NewsCard.js"),
  {
    loading: () => <ComponentSpinner />,
  }
);

export const metadata = {
  title: "News | CBS Research Group",
  description:
    "Stay updated with the latest news and developments from the CBS Research Group, an electrochemistry lab at IIEST Shibpur. Discover our recent projects, publications, and events.",
  keywords:
    "CBS Research Group, news, electrochemistry, research updates, Dr. Chinmoy Bhattacharya, IIEST Shibpur",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Latest News | CBS Research Group",
    description:
      "Get the latest news and updates from CBS Research Group, focused on advancements in electrochemistry.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/news",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur. Joined as Assistant Professor on June 23, 2006, and promoted to Associate Professor on February 22, 2019.",
    image:
      "https://www.iiests.ac.in/assets/images/faculty/chem-faculty_chinmoy-bhattacharya.jpg",
  },
  googlescholar: {
    card: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology.",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
  },
  researchgate: {
    card: "https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, Howrah, India.",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, specializing in Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, IIEST Shibpur, focusing on Photoelectrochemistry, Electrochemistry, and Corrosion Electrochemistry.",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description: "Associate Professor, Department of Chemistry, IIEST Shibpur.",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/news",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";
const News = async () => {
  const getAllLatestGroupNews = await getRequest_all(
    envConfig.latestGroupUpdateApiUrl
  );
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800">
      <CommonBanner
        bannerBackgroundImg={groupNewsBannerImage}
        headingFirst={"Stay Informed:"}
        UniqueHeading={"Research Lab News and Updates"}
        headingLast={null}
        subHeading={`Catch up on the latest developments, discoveries, and announcements from our research lab, including important admissions news. Stay connected with ongoing projects, upcoming events, and insights that showcase the impactful work being done by our team, ensuring you never miss a vital update in the world of research.`}
      />

      <CommonHeading
        Heading="Important Announcements And Notice"
        subHeading="Stay informed with our latest announcements, including essential updates and critical information regarding our research lab."
        customColorHeadig={null}
      />

      {getAllLatestGroupNews.length == 0 ? (
        <h2 className="pb-20 text-xl font-semibold text-center mx-0 lg:mx-10 my-20 text-gray-600 dark:text-gray-300">
          At this time, information regarding news & updates is not available.
        </h2>
      ) : (
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
      )}
    </main>
  );
};

export default News;
