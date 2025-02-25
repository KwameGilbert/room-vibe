import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";
import Image from "next/image";
import Wishlist from "../../public/images/wish.gif"

export default function wishlist (){
  return(
    <section className="lg:hidden">
      <MobileNavbar/>
      <h1 className="text-3xl text-center pt-10">Wishlist</h1>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <Image src={Wishlist} alt="wishlist"/>
        <p>No hostel in your wishlist</p>
      </div>
    </section>
  )
}