import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Profile from "../../public/images/avatar.png";

import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";




export default function personalinfo() {
  return (
    <section className="lg:hidden personalinfo">
      <div className="py-3 flex flex-col justify-center px-3">
        <Link href="/profile">
          <IoArrowBack size={40} />
        </Link>
        <p className="text-center mb-5 text-2xl font-bold -mt-2 pb-4 text-white">
          Anthony Afriyie
        </p>
        <Image
          src={Profile}
          alt="profile picture"
          className="w-[90px] mx-auto rounded-full -mt-3"
        />
      </div>

      <div className="">
        <div className="flex items-center justify-between py-8 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <IoPersonOutline size={30} color="#fd7e14" />
              <small className="text-xl">Anthony Afriyie</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-8 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <CiMail size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">anthonyafriyie!@gmail.com</small>
            </p>
        </div>

        <div className="flex items-center justify-between py-8 border-b border-slate-500 px-4">
            <p className="flex gap-5 items-center ">
              <IoPhonePortraitOutline size={30} color="#fd7e14" />
              <small className="text-xl text-gray-500">+233 24 123 4567</small>
            </p>
        </div>
      </div>
    </section>
  );
}
