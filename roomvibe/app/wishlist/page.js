import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";
import Image from "next/image";
import Wishlist from "../../public/images/wish.gif"
import Hostel1 from "../../public/images/image1.jpg"

import { FaRegStar } from "react-icons/fa";


export default function wishlist (){
  return(
    <section className="lg:hidden">
      <MobileNavbar/>
      <h1 className="text-3xl text-center pt-10">Wishlist</h1>
      <div className="flex flex-col">
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
      </div>
    </section>
  )
}