
import Image from "next/image"
import Profile1 from "../../../public/images/profile-1.jpg"
import Profile2 from "../../../public/images/profile-3.jpeg"
import Profile3 from "../../../public/images/profile-3.jpg"

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Testimonials (){
  return (
    <section className="hidden lg:flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-center font-semibold">What our customers say</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Hear from some of the people who have experienced our services.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center py-20 px-4">
          
          <div className="shadow-2xl rounded-lg w-full lg:w-[400px] p-4 bg-white">
            <Image src={Profile1} alt="picture 1" width={80} className="relative rounded-full mx-auto top-[-50px] border-2 border-[#fd7e14]"/>
            <p className="-mt-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, omnis quia blanditiis rem ut eaque?</p>
            <div className="flex justify-between pt-5">
            <p className="text-xl font-semibold">Gilbert Kukah</p>
            <p className="flex">
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStarHalfAlt color="#ffbd27"/>
            </p>
            </div>
          </div>

          <div className="shadow-2xl rounded-lg w-full lg:w-[400px] p-4 bg-white">
            <Image src={Profile2} alt="picture 1" width={80} className="relative rounded-full mx-auto top-[-50px] border-2 border-[#fd7e14]"/>
            <p className="-mt-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, omnis quia blanditiis rem ut eaque?</p>
            <div className="flex justify-between pt-5">
            <p className="text-xl font-semibold">Nkrumah Asemani Joshua</p>
            <p className="flex">
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStarHalfAlt color="#ffbd27"/>
            </p>
            </div>
          </div>

          <div className="shadow-2xl rounded-lg w-full lg:w-[400px] p-4 bg-white">
            <Image src={Profile3} alt="picture 1" width={80} className="relative rounded-full mx-auto top-[-50px] border-2 border-[#fd7e14]"/>
            <p className="-mt-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, omnis quia blanditiis rem ut eaque?</p>
            <div className="flex justify-between pt-5">
            <p className="text-xl font-semibold">Owusu Boateng</p>
            <p className="flex">
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStar color="#ffbd27"/>
             <FaStarHalfAlt color="#ffbd27"/>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}