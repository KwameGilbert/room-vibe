import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";
import Image from "next/image";
import Map from "../../public/images/map1.gif"

export default function map (){
  return(
    <section className="lg:hidden">
      <MobileNavbar/>
      <h1 className="text-3xl text-center pt-10">Map</h1>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <Image src={Map} alt="map"/>
      </div>
    </section>
  )
}