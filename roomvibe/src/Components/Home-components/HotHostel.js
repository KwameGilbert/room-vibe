
import Link from "next/link"
import Image from "next/image"
import Image1 from "../../../public/images/image1.jpg"
import Image2 from "../../../public/images/image2.webp"
import Image3 from "../../../public/images/image3.webp"

export default function HotHostel (){
  return(
    <section className="hidden lg:flex lg:flex-row items-center justify-center gap-10 py-10">
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold text-center">Hot <span className="text-[#f76707]">Hostel</span> Budget Rooms</h1>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center py-14">

            <div className="w-[350px] shadow-xl p-2 rounded-md">
              <Image src={Image1} alt="green hostel" className="rounded-sm"/>
              <h1 className="pt-5 pb-4 font-semibold text-2xl">Green Hostel</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!</p>
            </div>

            <div className="w-[350px] shadow-xl p-2 rounded-md">
              <Image src={Image2} alt="green hostel " className="h-[225px] rounded-sm"/>
              <h1 className="pt-5 pb-4 font-semibold text-2xl">Blessing Hostel</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!</p>
            </div>

            <div className="w-[350px] shadow-xl p-2 rounded-md">
              <Image src={Image3} alt="green hostel" className="h-[225px] rounded-sm"/>
              <div>
              <h1 className="pt-5 pb-4 font-semibold text-2xl">Washington Hostel</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!</p>
              </div>
            </div>

        </div>


        <div className="flex items-center justify-center">
          <Link href="/explore-hostels">
            <button className="bg-[#f8f9fa] p-4 font-semibold">Explore More Hostels</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const hostels = [
  {
    Id: 1,
    img: "/image1.jpg",
    name: "Green Hostel",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!"
  },
  {
    Id: 2,
    img: "",
    name: "Blessing Hostel",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!"
  },
  {
    Id: 3,
    img: "",
    name: "Washington Hostel",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, veniam!"
  }
]