import MobileNavbar from "@/src/Components/Home-components/MobileNavbar"
import Link from "next/link"
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoBagSharp } from "react-icons/io5";
import { FaPeopleLine } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { IoMdHelpCircle } from "react-icons/io";


export default function profile() {
  return(
    <main className="lg:hidden">
      <MobileNavbar/>
      <section className="flex flex-col py-10 px-5  pb-24 h-[85h] overflow-scroll ">
      <div>
        <h1 className="text-center text-3xl pb-6 font-semibold text-[#ff8929]">Profile</h1>
       <div>
         <p className="flex flex-col text-xl">Owusu Boateng</p>
         <p className="text-gray-400 text-sm">owusuboateng@gamail.com</p>
       </div>

        <div className="shadow-md m-5 p-5 rounded-xl flex flex-col items-center justify-center">
        <h1><Link href="/" className="text-2xl font-semibold">Room<span className="text-3xl text-[#fd7e14]">V</span>ibe</Link></h1>
        <p className="text-[13px] py-2 text-gray-500">Hostel bookings and accommodation just got easier on your campus.</p>
        <button className="border px-4 py-2 bg-[#fd7e14] rounded-md text-xl mt-4 font-semibold">Book Now</button>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between py-5 border-b border-slate-500">
            <p className="flex gap-5 items-center ">
              <CgProfile size={30} color="#fd7e14"/>
              <small className="text-xl">Personal Info</small>
            </p>
            <IoIosArrowForward size={30}/>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-slate-500">
            <p className="flex gap-5 items-center ">
              <IoBagSharp size={30} color="#fd7e14"/>
              <small className="text-xl">How RoomVibe Works</small>
            </p>
            <IoIosArrowForward size={30}/>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-slate-500">
            <p className="flex gap-5 items-center ">
              <FaPeopleLine size={30} color="#fd7e14"/>
              <small className="text-xl">Our Referral Program</small>
            </p>
            <IoIosArrowForward size={30}/>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-slate-500">
            <p className="flex gap-5 items-center ">
              <TiContacts size={30} color="#fd7e14"/>
              <small className="text-xl">Contact Us</small>
            </p>
            <IoIosArrowForward size={30}/>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-slate-500">
            <p className="flex gap-5 items-center ">
              <IoMdHelpCircle size={30} color="#fd7e14"/>
              <small className="text-xl">Help</small>
            </p>
            <IoIosArrowForward size={30}/>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5">
          <p></p>
        <Link href="/login"><button className="text-3xl bg-[#fd7e14] px-8 py-3 rounded-md font-semibold">Logout</button></Link>
        </div>
      </div>
    </section>
    </main>
  )
}
