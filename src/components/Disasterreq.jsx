
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBoundsOfDistance, getDistance, convertDistance } from "geolib";
import DisasterImage from "./DisasterImage";

const getData = async () => {
  try {
    const data = await fetch("https://disaster-report-public.vercel.app/api/uploadImage", {
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const resp = await data.json();
    const res = resp.reverse();

    // const lat = res.map((item) => item.lat);
    // const lng = res.map((item) => item.lng);
    // // console.log("No 1", typeof lat, typeof lng[0]);
    // const nearby = async (lat, lng) => {
    //   const bounds = getBoundsOfDistance({ lat, lng }, 100);
    //   // console.log("No 2", bounds);
    //   const places = await res.filter((place) => {
    //     // console.log("Lot of lat No 3", place.lat, place.lng);
    //     return (
    //       place.lat >= bounds[0].latitude &&
    //       place.lat <= bounds[1].latitude &&
    //       place.lng >= bounds[0].longitude &&
    //       place.lng <= bounds[1].longitude
    //     );
    //   });
    //   // console.log(places)
    //   return places;
    // };

    // const fdata = [];
    // for (let i = 0; i < 2; i++) {
    //   const places = await nearby(lat[i], lng[i]);
    //   fdata.push(...places);
    // }
    // console.log(fdata.map((item) => item.lat));

    return res;
  } catch (error) {
    throw error;
  }
};

export default async function Disasterreq() {
  const data = await getData();
  // const [img, setImg] = useState(false)
  // const dispImage = () =>{
  //   setImg(true)
  // }
  // const closeImage = () =>{
  //   setImg(false)
  // }
  // console.log(data)
  // const [places, setPlaces] = useState([]);
  // const [inrad, setInrad] = useState(false);
  // useEffect(() => {
  //   nearby(data.lat, data.lng);
  // }, [data])

  // const nearby = async (lat, lng) => {
  //   const bounds = getBoundsOfDistance({ lat, lng }, 100);
  //   const places = await data.filter((place) => {
  //     return (
  //       place.latitude >= bounds[0].latitude &&
  //       place.latitude <= bounds[1].latitude &&
  //       place.longitude >= bounds[0].longitude &&
  //       place.longitude <= bounds[1].longitude
  //     );
  //   });
  //   setPlaces(places);
  //   console.log(places)
  //   return places;
  // };

  // console.log(data)
  return (
    <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-4 md:mx-16 xl:mx-36">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-2xl capitalize">Recent Requests:</h1>
        <table className="w-full text-sm text-left rtl:text-right text-zinc-100">
          <thead className="text-xs text-zinc-100 uppercase bg-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-lg font-bold">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-lg font-bold">
                Latitude
              </th>
              <th scope="col" className="px-6 py-3 text-lg font-bold">
                Longitude
              </th>
            </tr>
          </thead>
          {data?.map((item) => (
            <tbody
              className="relative m-5 lg:max-w-full border-[1px] border-gray-300 dark:border-emerald-950 rounded-lg"
              key={item._id}
              >
              {/* {img&& <DisasterImage data={img}/>} */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  // onClick={dispImage}
                >
                  <Image
                    width={500}
                    height={100}
                    src={item.img}
                    alt="image"
                    style={{ objectFit: "contain" }}
                  />
                  
                </th>
                {/* <td className="px-6 py-4">
                  
                </td> */}
                <td className="px-6 py-4">{item.lat}</td>
                <td className="px-6 py-4">{item.lng}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </main>
  );
}
