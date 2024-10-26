import React from "react";
import styleSheet from "./ApplicationSpinner.module.css";
const ApplicationSpinner = () => {
  return (
    <div
      className={`min-h-screen ${styleSheet.overlay} fixed inset-0 px-4 flex-wrap justify-center 
        items-center w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full overflow-auto`}
    >
      <div className={`${styleSheet.loader} relative top-72 mx-auto`}></div>
    </div>
  );
};

export default ApplicationSpinner;
