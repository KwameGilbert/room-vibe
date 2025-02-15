
import { IoIosArrowForward } from "react-icons/io";

export default function Hero (){
  return(
    <section className="hidden hero h-[70vh] lg:flex items-center justify-center w-[100%]">
      <div>
        {/* search input and button for searching  hostels available on the site */}
        <div className="flex items-center justify-center">

          {/* Search Input */}
        <input type="text" placeholder="Search for your favorite hostel here" className="hidden lg:block w-full lg:w-[700px] h-[50px] px-5 text-xl rounded-md mr-2 focus:outline-none"/>

          {/* Search button  */}
        <input type="submit" className="border-none h-[50px] px-7 bg-[#d9480f]  rounded-md text-2xl font-semibold text-white"/>
        </div>

        {/* Dropdowns for filtering out the hostels available on the site base on location prince amenities school */}
        <div className="flex gap-2 py-2 bg-[#bdb1a8] px-5 mt-3 rounded-lg items-center">

          {/* selecting your school  */}
          <select name="" id="" className="h-[40px] focus:outline-none px-2 bg-inherit border-r-2">
            <option value="Select your school">Select your school</option>
            <option value="AAMUSTED">AAMUSTED</option>
            <option value="KNUST">KNUST</option>
            <option value="UCC">UCC</option>
            <option value="UNER">UNER</option>
          </select>

          {/* Selecting Amenities to want */}
          <select name="" id="" className="h-[40px] focus:outline-none px-2 bg-inherit border-r-2">
            <option value="Select Amenities">Select Amenities</option>
            <option value="Study Room">Study Room</option>
            <option value="TV Room">TV Room</option>
            <option value="Emergency Ambulance">Emergency Ambulance</option>
          </select>

           {/* Selecting Room type you want */}
           <select name="" id="" className="h-[40px] focus:outline-none px-2 bg-inherit border-r-2">
            <option value="Select the room type you want">Select the room type you want</option>
            <option value="One in a room">One in a room</option>
            <option value="One in a room with air condition">One in a room</option>
            <option value="Two in a room">Tow in a room</option>
            <option value="Two in a room with air condition">Emergency Ambulance</option>
            <option value="Three in a room">Tow in a room</option>
            <option value="Three in a room with air condition">Emergency Ambulance</option>
            <option value="Four in a room">Tow in a room</option>
            <option value="Four in a room with air condition">Emergency Ambulance</option>
          </select>

          {/* Selecting Room Price range */}
          <select name="" id="" className="h-[40px] focus:outline-none px-2 bg-inherit border-r-2">
            <option value="Select Room Price range you want">Select Room Price range you want</option>
            <option value="1800-2300">1800-2300</option>
            <option value="2400-3000">2400-3000</option>
            <option value="3100-4000">3100-4000</option>
            <option value="4100-5000">4100-5000</option>
          </select>

          <IoIosArrowForward size={50} color="#d9480f" className="pointer"/>
        </div>
      </div>
    </section>
  )
}