'use client'
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import Data from "@/Shared/Data";
import { getBoundsOfDistance, getDistance, convertDistance } from "geolib";

const Getdistance = ({ data }) => {
  let distance = 0;
  const [places, setPlaces] = useState([]);
  const [distances, setDistances] = useState(distance);

  const getData = data;

  useEffect(() => {
    const srcLat = getData.lat;
    const srcLng = getData.lng;
    const radius = getData.radius;
    nearby(srcLat, srcLng, radius);
    const distances = places.map((place) => {
      // console.log("Returning",place)
      return {
        id: Math.floor(Math.random() * (1000 - 1) + 1),
        distance: calDistance(srcLat, srcLng, place.latitude, place.longitude),
        team: place.name
      };
    });
    console.log("Before sorting",distances)
    distances.sort((a, b) => a.distance - b.distance);
    console.log("After sorting",distances)
    // const sortedDistances = distances.map((item) => item.distance);
    // console.log("sortedDistances",sortedDistances)
    setDistances(distances);
  }, [getData.radius]);

  const calDistance = (srcLat, srcLng, destLat, destLng) => {
    const dist = getDistance(
      { latitude: destLat, longitude: destLng },
      { latitude: srcLat, longitude: srcLng }
    );
    const distance = convertDistance(dist, "km");
    return distance;
  };

  const nearby = async (lat, lng, radius) => {
    const bounds = getBoundsOfDistance({ lat, lng }, radius);
    const place = Data.places.filter((place) => {
      return (
        place.latitude >= bounds[0].latitude &&
        place.latitude <= bounds[1].latitude &&
        place.longitude >= bounds[0].longitude &&
        place.longitude <= bounds[1].longitude &&
        place.name
      );
    });
    // console.log("Teams are", place);
    setPlaces(place)
    return place;
  };

  return (
    // console.log(distances),
    <div className="text-lg font-semibold">
      Least to most distance between disaster and teams are
      {distances
        ? distances.map((dist) =>( 
        <h1 key={dist.id} className="m-2">
            <span className="bg-green-700 text-white font-bold px-2 py-1 rounded-md">{dist.team}</span>--
            <span className="bg-red-500 text-white font-bold px-2 py-1 rounded-md">Disaster</span>
              : <span className="text-xl font-bold"> {dist.distance} km</span>
        </h1>))
        : null}
    </div>
  );
};

export default Getdistance;
