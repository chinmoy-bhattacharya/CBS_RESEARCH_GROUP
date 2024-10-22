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
          <p className={mouduleStyle.title}>
            <Image
              src={equipmentImage}
              alt="second"
              className="rounded-xl mx-auto w-full mb-2"
              width={500}
              height={500}
            />
          </p>
          <p className="text-center h-14 my-auto items-center">About &rarr;</p>
        </div>
        <div
          className={`p-4 ${mouduleStyle.flipCardBack} overflow-y-scroll cardScrollbar`}
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

LabEquipmentCard.propType = {
  equipmentImage: PropTypes.string,
  equipmentName: PropTypes.string,
  equipmentDetails: PropTypes.string,
};

export default LabEquipmentCard;
