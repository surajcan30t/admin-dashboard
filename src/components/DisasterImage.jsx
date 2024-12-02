import React from "react";

const DisasterImage = ({data}) => {
  return (
    <div className="flex flex-col">
        <div className="flex items-end">
            <h1 className="text-red-600">X</h1>
        </div>
      <Image
        width={900}
        height={1000}
        src={item.img}
        alt="image"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default DisasterImage;
