'use client'
import {
  Autocomplete,
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  LoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Data from "@/Shared/Data";
import RangeSelect from "./RangeSelect";
import Teammarkers from "./Teammarkers";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Getdistance from "./Getdistance";

const GoogleMapView = () => {
  const router = useRouter();
  const [rad, setRad] = useState(1000);
  const places = Data.places;
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [viewPort, setViewPort] = useState({ lat: 22.60, lng: 78.56 });
  const [value, setValue] = useState({
    lat: 0,
    lng: 0,
    radius: rad,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const mapContainerStyle = {
    width: "65%",
    height: "70vh",
  };

  // async function getLatLong(city){
  //   const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  //   const geocodeResponse = await fetch(geoCodeUrl)
  //   const geocodeData = await geocodeResponse.json()
  //   const {lat,lng} = geocodeData.results[0].geometry.location;
  //   return {lat,lng}
  // }

  return (
    (
      <div className="flex flex-row-reverse justify-around">
        <div className="flex flex-col">
          <div className="">
            {/* <Autocomplete>
              <input
                type="text"
                className=" bg-[#F8F9FC] h-[40px] outline-none border-[3px] pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
                placeholder="Search for base stations..."
              />
            </Autocomplete> */}
            {/* <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
              <FaSearch color="white" />
            </div> */}
            <form type="submit" className="flex flex-col gap-2">
              <div>
                <input
                  name="lat"
                  onChange={handleChange}
                  type="number"
                  step="any"
                  placeholder="Enter Lat"
                  className="border-2 border-gray-700 rounded-md p-3"
                />
                <input
                  name="lng"
                  onChange={handleChange}
                  type="number"
                  step="any"
                  placeholder="Enter Long"
                  className="border-2 border-gray-700 rounded-md p-3"
                />
              </div>
              <input
                type="range"
                name="radius"
                className="w-full h-2 bg-gray-200
            rounded-lg appearance-none
            cursor-pointer "
                min="1000"
                max="100000"
                step="1000"
                onChange={handleChange}
                defaultValue={rad}
              />
              <label
                className="text-gray-900 font-bold
            text-[15px]"
              >Radius: <span className="text-xl">{value.radius / 1000} </span>
                  Kilometers
              </label>
            </form>
          </div>
          <div>
            <Getdistance data={value}/>
          </div>
        </div>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={viewPort}
            options={{}}
            zoom={4.5}
          >
            <Teammarkers data={value} />
          </GoogleMap>
        </LoadScript>
      </div>
    )
  );
};

export default GoogleMapView;
