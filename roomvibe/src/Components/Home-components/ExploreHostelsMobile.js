"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Hostel1 from "@/public/images/image1.jpg";

import { FaRegStar } from "react-icons/fa";

export default function ExploreHostelsMobile() {
  const [hostels, setHostels] = useState([]);

  // fetch the data from the server using a function
  const fetchData = async () => {
    try {
      const response = await fetch("https://room-vibe-backend.sliplane.app/api/explore/hostels", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
      setHostels(data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
      setHostels([]); // Set empty array in case of error
    }
  }

  // call the function when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col lg:hidden gap-5 pb-24 px-5 h-[80vh] overflow-scroll relative top-40 bottom-40 pt-6">
      {hostels.map((hostel) => (
        <div key={hostel.id} className="w-full flex gap-10 border-b-[1px] border-slate-300 py-5">
          <Image src={Hostel1} alt={hostel.name} width={150} className="rounded-lg"/>
          <div>
            <h1 className="text-xl font-semibold">{hostel.name}</h1>
            <p className="text-sm text-gray-500 font-semibold">{hostel.location}</p>
            <div className="pt-10 flex items-center justify-center gap-10">
              <button className="bg-[#2f9e44] px-2 text-white font-semibold rounded-md">Available</button>
              <FaRegStar size={20}/>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}