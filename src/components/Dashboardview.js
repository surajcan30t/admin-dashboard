'use client'
import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa";
import Disasterreq from "./Disasterreq";
// import profile from "../assets/profile.png"

const Dashboardview = () => {
  const [open, setOpen] = useState(false);
  const [avail, setAvail] = useState(false);

  const showProfile = () => {
    setOpen(!open);
    setOpen(!avail);

  };

  return (
    <div className="">
      <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px] ">
        <div className="flex items-center rounded-[5px]">
          {/* <input
            type="text"
            className=" bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
            placeholder="Search for..."
          /> */}
          {/* <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
            <FaSearch color="white" />
          </div> */}
        </div>

        <div className="flex items-center gap-[20px]">
          {/* <button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]">
            Automatic
          </button> */}
          {/* <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
            <FaRegBell />
            <FaEnvelope />
          </div> */}
          <div
            className="flex items-center gap-[15px] relative"
            onClick={showProfile}
          >
            <p>
              Admin <span>(Location)</span>{" "}
            </p>

            <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40">
              {/* <img src={profile} alt="" /> */}
            </div>
            <div className="flex flex-col">
              <div>
                {open && (
                  <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Profile
                    </p>
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Settings
                    </p>
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Log out
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
