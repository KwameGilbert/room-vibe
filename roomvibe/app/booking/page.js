import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";
import Image from "next/image";
import Booking from "../../public/images/wish.gif"

export default function booking(){
  return(
    <section className="lg:hidden">
       <MobileNavbar/>
      <h1 className="text-3xl text-center pt-10">My Booked List</h1>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <Image src={Booking} alt="wishlist"/>
        <p>No Bookings Found</p>
      </div>
    </section>
  )
}