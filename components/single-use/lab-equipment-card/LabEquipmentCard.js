import React from "react";
import mouduleStyle from "./LabEquipmentCard.module.css";
import Image from "next/image";
import PropTypes from "prop-types";
const LabEquipmentCard = ({
  equipmentImage,
  equipmentName,
  equipmentDetails,
}) => {
  return (
    <div className={mouduleStyle.flipCard}>
      <div className={mouduleStyle.flipCardInner}>
        <div className={mouduleStyle.flipCardFront}>
          <div className={mouduleStyle.title}>
            <div className="max-h-[300px] h-[300px] w-[350px] max-w-[350px]">
              <Image
                src={equipmentImage}
                alt="second"
                className="rounded-xl mx-auto w-[95%] mb-2 h-[250px] m-2"
                width={500}
                height={500}
              />
              <p className="text-center text-blue-800 dark:text-blue-300">
                About &rarr;
              </p>
            </div>
          </div>
        </div>
        <div
          className={`p-4 ${mouduleStyle.flipCardBack} text-gray-800 dark:text-gray-200 overflow-y-scroll cardScrollbar`}
        >
          <h2
            className="font-semibold text-md border-b
           border-gray-800 pb-2"
          >
            {equipmentName}
          </h2>
          <p>{equipmentDetails}</p>
        </div>
      </div>
    </div>
  );
};

LabEquipmentCard.propTypes = {
  equipmentImage: PropTypes.string,
  equipmentName: PropTypes.string,
  equipmentDetails: PropTypes.string,
};

export default LabEquipmentCard;
