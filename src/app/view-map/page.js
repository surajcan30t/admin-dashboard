// "use client";
import GoogleMapView from "@/components/GoogleMapView";
import React from "react";
import { FaCircle, FaSearch } from "react-icons/fa";
// import { UserLocationContext } from "@/context/UserLocationContext";

const page = () => {
  return (
    <div className="flex mt-[22px] w-full gap-[30px]">
      <div className="basis-[100%] border bg-white shadow-md rounded-[4px]">
        <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
          <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
            Base Locations
          </h2>

          
        </div>
        <div className="flex flex-col gap-1 m-3">
          <div className="text-center">
            <h1 className="flex gap-2">
              <span className="text-red-600">
                <FaCircle />
              </span>
              In Staion
            </h1>
            <h1 className="flex gap-2">
              <span className="text-green-600">
                <FaCircle />
              </span>
              Out Staion
            </h1>
          </div>
          <div className="w-[100%]">
            <GoogleMapView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
