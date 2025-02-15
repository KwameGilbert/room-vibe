"use-client"

import Image from "next/image"
import Hostel1 from "../../../public/images/image1.jpg"

import { FaRegStar } from "react-icons/fa";

export default function ExploreHostelsMobile (){
  return (
    <section className="flex flex-col lg:hidden gap-5 pb-24 px-5 h-[80vh] overflow-scroll relative top-40 bottom-40 pt-6">
      <div className="w-full flex gap-10 border-b-[1px] border-t-[1px] border-slate-300 py-5">
        <Image src={Hostel1} alt="Green Hostel" width={150} className="rounded-lg"/>
        <div>
          <h1 className="text-xl font-semibold">Green Hostel</h1>
          <p className="text-sm text-gray-500 font-semibold">AAMUSTED - Tanoso</p>

          <div className="pt-10 flex justify-between">
            <button className="bg-[#2f9e44] px-2 text-white font-semibold rounded-md">Available</button>
            <FaRegStar size={20}/>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10 border-b-[1px] border-slate-300 py-5">
        <Image src={Hostel1} alt="Green Hostel" width={150} className="rounded-lg"/>
        <div>
          <h1 className="text-xl font-semibold">Green Hostel</h1>
          <p className="text-sm text-gray-500 font-semibold">AAMUSTED - Tanoso</p>

          <div className="pt-10 flex justify-between">
            <button className="bg-[#2f9e44] px-2 text-white font-semibold rounded-md">Available</button>
            <FaRegStar size={20}/>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10 border-b-[1px] border-slate-300 py-5">
        <Image src={Hostel1} alt="Green Hostel" width={150} className="rounded-lg"/>
        <div>
          <h1 className="text-xl font-semibold">Green Hostel</h1>
          <p className="text-sm text-gray-500 font-semibold">AAMUSTED - Tanoso</p>

          <div className="pt-10 flex justify-between">
            <button className="bg-[#2f9e44] px-2 text-white font-semibold rounded-md">Available</button>
            <FaRegStar size={20}/>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10 border-b-[1px] border-slate-300 py-5">
        <Image src={Hostel1} alt="Green Hostel" width={150} className="rounded-lg"/>
        <div>
          <h1 className="text-xl font-semibold">Green Hostel</h1>
          <p className="text-sm text-gray-500 font-semibold">AAMUSTED - Tanoso</p>

          <div className="pt-10 flex justify-between">
            <button className="bg-[#2f9e44] px-2 text-white font-semibold rounded-md">Available</button>
            <FaRegStar size={20}/>
          </div>
        </div>
      </div>
    </section>
  )
}