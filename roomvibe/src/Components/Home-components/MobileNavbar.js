
import Link from "next/link"
import { TbViewfinder } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function MobileNavbar (){
  return(
    <header className="flex lg:hidden fixed w-[100%] bottom-0 z-50">
      <ul className="flex gap-10 justify-center items-center w-full h-full py-2">
        <li className="text-[#fd7e14]"><Link href="/" className="flex flex-col items-center"><TbViewfinder size={25}/> <p className="text-[10px]">Explore</p></Link></li>

        <li className=""><Link href="/wishlist" className="flex flex-col items-center"><FaRegStar size={25}/> <p className="text-[10px] text-[#868e96]">WishList</p></Link></li>

        <li className=""><Link href="/map" className="flex flex-col items-center"><FiMapPin size={25}/> <p className="text-[10px] text-[#868e96]">Map</p></Link></li>

        <li className=""><Link href="/booking" className="flex flex-col items-center"><MdShoppingCartCheckout size={25}/> <p className="text-[10px] text-[#868e96]">Bookings</p></Link></li>

        <li className=""><Link href="/profile" className="flex flex-col items-center"><CgProfile size={25}/> <p className="text-[10px] text-[#868e96]">Profile</p></Link></li>
      </ul>
    </header>
  )
}