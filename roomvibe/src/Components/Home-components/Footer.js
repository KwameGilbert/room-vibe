
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";


import Link from "next/link";

export default function Footer() {
  return (
   <footer className="hidden lg:block">
    <div className="bg-[#f9f8f4] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between py-4 gap-20 lg:px-32 px-3 w-[100%]">
      <div className="flex-[0.5]">
        <h2 className="text-xl font-semibold py-2">Company</h2>
        <ul>
          <li>About US</li>
          <li>Contact US</li>
          <li>Book Now</li>
          <li>Team</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="flex-[0.5]">
        <h2 className="text-xl font-semibold py-2">Company</h2>
        <ul>
          <li>About US</li>
          <li>Contact US</li>
          <li>Book Now</li>
          <li>Team</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="flex-[0.5]">
        <h2 className="text-xl font-semibold py-2">Company</h2>
        <ul>
          <li>About US</li>
          <li>Contact US</li>
          <li>Book Now</li>
          <li>Team</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="flex-[1.5]">
        <h1 className="font-semibold py-2 text-center lg:text-justify"><Link href="/" className="text-2xl font-semibold">Room<span className="text-3xl text-[#fd7e14] ">V</span>ibe</Link></h1>
        <p className="py-5 text-center lg:text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, vitae! Lorem ipsum dolor</p>

        <div className="flex items-center gap-1 justify-center">
        <input type="email" placeholder="Your Email" className="h-10 lg:w-[300px] px-3 border border-black focus:outline-none rounded-md"/>
        <input type="submit" value="Subscribe" className="bg-[#fd7e14] h-10 px-3 rounded-md"/>
        </div>
      </div>
    </div>
    <div className="py-4 lg:px-14 bg-[#f76707] flex flex-col lg:flex-row items-center justify-between gap-5">
      <p className="text-white font-semibold">
        &copy; {new Date().getFullYear()} HostelHub. All rights reserved.{" "}
      </p>
      <div className="flex gap-3 text-2xl lg:text-3xl lg:order-2 text-white font-semibold">
          <a href="" className="">
            <TiSocialFacebookCircular />
          </a>
          <a href="" className="">
            <SlSocialInstagram />
          </a>
          <a href="" className="">
            <TiSocialTwitter />
          </a>
          <a href="" className="">
            <TiSocialLinkedin />
          </a>
          <a href="" className="">
            <TiSocialYoutube />
          </a>
        </div>
    </div>
   </footer>
  );
}
