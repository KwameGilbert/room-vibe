
import { IoArrowBack } from "react-icons/io5";

export default function BookingForms(){
  return (
    <section className="bg-[#e9ecef]">
      <div className="flex items-center bg-[#d9480f] py-5 px-3 gap-5 text-white">
        <IoArrowBack size={40}/>
        <p className="text-2xl ">Booking</p>
      </div>
      <p className="text-2xl py-5 px-3">Fill this forms to Book a room</p>

      <form action="" className="flex flex-col gap-2 py-5 px-2">

        {/* the user's name will be collected from the user's profile */}
        <input type="text" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required value="Owusu Boateng"/>

        {/* the user's email address will also collected from the  user's profile */}
        <input type="email" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required value="owusuboateng@mail.com"/>

        {/* the user's phone number will be collected from the user's profile */}
        <input type="tel" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required value="0556789743"/>

        {/* the user's gender will be collected from the user's profile */}
        <input type="text" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required value="Male"/>

        {/* the user's program */}
        <input type="text" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required placeholder="program of study"/>

        {/* the user's college */}
        <input type="text" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required placeholder="college"/>

        {/* emergency contact number */}
        <input type="tel" className="h-[50px] border border-slate-950 px-4 text-xl rounded-xl focus:outline-none mb-2 w-full" required placeholder="emergency contact phone number"/>

        <div className="py-5">
          <p className="text-2xl font-semibold pb-5">Select Room Type</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-xl font-semibold pb-2">Four In A Room</p>
              <button type="button" className="border border-slate-700 px-2 py-3 rounded-lg">Normal - GHS 3300</button>
            </div>

            <div>
              <p className="text-xl font-semibold pb-2">Three In A Room</p>
              <button type="button" className="border border-slate-700 px-2 py-3 rounded-lg">Normal - GHS 4300</button>
            </div>

            <div>
              <p className="text-xl font-semibold pb-2">Two In A Room</p>
              <button type="button" className="border border-slate-700 px-2 py-3 rounded-lg">Normal - GHS 4300</button>
            </div>

            <div className="">
              <p className="text-xl font-semibold pb-2">One In A Room</p>
              <button type="button" className="border border-slate-700 px-2 py-3 rounded-lg focus:bg-[#d9480f]">Normal - GHS 4300</button>
            </div>
          </div>
        </div>

        <input type="submit" value="Confirm Booking" className="bg-[#d9480f] py-4 my-5 text-white text-2xl font-semibold rounded-lg"/>
      </form>
      
    </section>
  )
}