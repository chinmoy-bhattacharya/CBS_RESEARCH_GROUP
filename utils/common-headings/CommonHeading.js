import React from "react";

const CommonHeading = ({ Heading, subHeading }) => {
  return (
    <section className="mx-10 my-12">
      <h2 className="text-2xl font-semibold text-center">{Heading}</h2>
      <p className="text-center">{subHeading}</p>
    </section>
  );
};

export default CommonHeading;
