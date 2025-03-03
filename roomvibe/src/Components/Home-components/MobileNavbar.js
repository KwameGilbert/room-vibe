"use client";
import React, { useEffect } from "react";
import Link from "next/link"
import { TbViewfinder } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function MobileNavbar (){

  useEffect(() => {
    function change_focus(){
      // getting individual link list
      const explore = document.getElementById("explore");
      const whishlist = document.getElementById("whishlist");
      const map = document.getElementById("map");
      const booking = document.getElementById("booking");
      const Profile = document.getElementById("Profile");

      // function to set active link and save to local storage
      function setActiveLink(activeLink) {
        explore?.classList.remove("text-[#fd7e14]");
        whishlist?.classList.remove("text-[#fd7e14]");
        map?.classList.remove("text-[#fd7e14]");
        booking?.classList.remove("text-[#fd7e14]");
        Profile?.classList.remove("text-[#fd7e14]");
        if (activeLink) {
          activeLink.classList.add("text-[#fd7e14]");
          localStorage.setItem("activeLink", activeLink.id);
        }
      }

      // add event listeners
      explore?.addEventListener("click", () => setActiveLink(explore));
      whishlist?.addEventListener("click", () => setActiveLink(whishlist));
      map?.addEventListener("click", () => setActiveLink(map));
      booking?.addEventListener("click", () => setActiveLink(booking));
      Profile?.addEventListener("click", () => setActiveLink(Profile));

      // on mount, check for active link in local storage
      const savedActiveLinkId = localStorage.getItem("activeLink");
      if (savedActiveLinkId) {
        const savedActiveLink = document.getElementById(savedActiveLinkId);
        setActiveLink(savedActiveLink);
      }
    }

    // calling the change focus function
    change_focus();
    
  }, []);

  return(
    <header className="flex lg:hidden fixed w-[100%] bottom-0 z-50">
      <ul className="flex gap-10 justify-center items-center w-full h-full py-2">
        <li className="text-[#fd7e14]" id="explore" ><Link href="/" className="flex flex-col items-center"><TbViewfinder size={25}/> <p className="text-[10px]">Explore</p></Link></li>

        <li className="" id="whishlist" ><Link href="/wishlist" className="flex flex-col items-center"><FaRegStar size={25}/> <p className="text-[10px] text-[#868e96]">WishList</p></Link></li>

        <li className="" id="map" ><Link href="/map" className="flex flex-col items-center"><FiMapPin size={25}/> <p className="text-[10px] text-[#868e96]">Map</p></Link></li>

        <li className="" id="booking" ><Link href="/booking" className="flex flex-col items-center"><MdShoppingCartCheckout size={25}/> <p className="text-[10px] text-[#868e96]">Bookings</p></Link></li>

        <li className="" id="Profile" ><Link href="/profile" className="flex flex-col items-center"><CgProfile size={25}/> <p className="text-[10px] text-[#868e96]">Profile</p></Link></li>
      </ul>
    </header>
  )
}