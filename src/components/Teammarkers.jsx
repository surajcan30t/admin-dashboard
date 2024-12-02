'use client'
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import Data from "@/Shared/Data";
import { getBoundsOfDistance, getDistance, convertDistance } from "geolib";

const Teammarkers = ({ data }) => {
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [places, setPlaces] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [distances, setDistances] = useState([]);
  const [curLoc, setCurLoc] = useState([]);

  const getData = data;

  useEffect(() => {
    const srcLat = getData.lat;
    const srcLng = getData.lng;
    const radius = getData.radius;
    //   nearby(20.2966,85.8220)
    nearby(srcLat, srcLng, radius);
    // places.map((place) => {
    //   calDistance(srcLat, srcLng, place.latitude, place.longitude);
    // });
  }, [getData]);

  // const calDistance = (srcLat, srcLng, destLat, destLng) => {
  //   const dist = getDistance(
  //     { latitude: destLat, longitude: destLng },
  //     { latitude: srcLat, longitude: srcLng }
  //   );
  //   const distance = convertDistance(dist, "km");
  //   // console.log("Getdata lat:",getData.lat,",Srclat:",srcLat);
  //   // console.log("Distance between ",srcLat,destLat,"is:",distance,"Kilometers. Places",places.map((place) => place.latitude))
  //   setDistances(distance);
  //   return distance;
  // };

  const nearby = async (lat, lng, radius) => {
    const bounds = getBoundsOfDistance({ lat, lng }, radius);
    const places = Data.places.filter((place) => {
      // console.log("Latttt",place.latitude, place.longitude)
      return (
        place.latitude >= bounds[0].latitude &&
        place.latitude <= bounds[1].latitude &&
        place.longitude >= bounds[0].longitude &&
        place.longitude <= bounds[1].longitude
      );
    });
    setPlaces(places);
    return places;
  };

  return (
    // console.log(typeof(parseFloat(getData.lat)), parseFloat(getData.lat)),
    <div className="relative">
      <MarkerF
        position={{ lat: parseFloat(getData.lat), lng: parseFloat(getData.lng) }}
      />
      {places.map((place) => (
        <MarkerF
          key={`${place.latitude}-${place.longitude}`}
          place={place}
          onClick={() => {
            place === selectedPlace
              ? setSelectedPlace(undefined)
              : setSelectedPlace(place);
          }}
          position={{ lat: place.latitude, lng: place.longitude }}
          icon={{
            url: place.status === 1 ? "/redcir.png" : "/grecir.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        />
      ))}
      {selectedPlace && (
        <InfoWindowF
          position={{
            lat: selectedPlace.latitude,
            lng: selectedPlace.longitude,
          }}
          zIndex={1}
          options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
          onCloseClick={() => setSelectedPlace(undefined)}
        >
          <div>
            <h1 className="text-lg">{selectedPlace.name}</h1>
            <p className="text-base">PS:{selectedPlace.ps}</p>
            <p className="text-base">{selectedPlace.psno}</p>
          </div>
        </InfoWindowF>
      )}
    </div>
  );
};

export default Teammarkers;
