import React from "react";
import NotFoundTv from "./NotFoundTv.js";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20">
      <h2 className="text-lg md:text-xl lg:text-2xl text-center leading-2 font-semibold dark:text-gray-200">
        The page you are trying to get access is not exist, 404.
      </h2>

      <NotFoundTv />
      <Link
        href={"/"}
        className="text-lg font-semibold rounded-md bg-orange-500 h-10 w-28 text-center flex  justify-center items-center border border-gray-200 dark:border-black transform translate-x hover:scale-110"
      >
        Back &rarr;
      </Link>
    </div>
  );
};

export default NotFoundPage;
