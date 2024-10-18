import React from "react";
import styleSource from "./ComponentSpinner.module.css";
const ComponentSpinner = () => {
  return (
    <section className="w-full h-full block">
      <div className={`mx-auto my-8 ${styleSource.loader}`}></div>;
    </section>
  );
};

export default ComponentSpinner;
