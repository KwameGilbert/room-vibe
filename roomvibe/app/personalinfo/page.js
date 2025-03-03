import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Profile from "../../public/images/avatar.png";

import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";





export default function personalinfo() {
  return (
    <section className="lg:hidden personalinfo">
      <div className=" py-5 flex flex-col justify-center px-3">
        <Link href="/profile">
          <IoArrowBack size={40} className="text-white"/>
        </Link>
        <p className="text-center text-2xl font-bold mt-2 text-white">
          Anthony Afriyie
        </p>
        <Image
          src={Profile}
          alt="profile picture"
          className="w-[80px] mx-auto rounded-full mt-28"
        />
      </div>

      <div className="">
        <div className="flex items-center justify-between py-6 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <IoPersonOutline size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">Anthony Afriyie</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <CiMail size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">anthonyafriyie!@gmail.com</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <IoPhonePortraitOutline size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">+233 24 123 4567</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <BiSolidSchool size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">AAMUSTED</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <FaEyeSlash size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">Password</small>
            </p>
        </div>

        <div className="flex items-center justify-center px-4 py-5">
          <button className="bg-gradient-to-r from-[#d9480f] to-[#fd7e14] text-white text-2xl font-bold py-4 w-full rounded-xl">
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
}
