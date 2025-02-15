

export default function Filtering (){
  return (
    <section className="flex flex-col md:hidden gap-5 px-5 py-5 w-[100%] fixed top-20 bg-white z-50">
     <div className="flex gap-10 items-start">
      <button className="bg-[#d9480f] py-1 px-2 text-white text-md rounded-3xl">All Hostels</button>
      <button className="bg-[#fff4e6] py-1 px-2 text-md rounded-3xl">Popular</button>
     </div>

     <div className="flex gap-1">
       <button className="bg-[#dee2e6] py-1 px-2 text-md rounded-3xl">School</button>
       <button className="bg-[#dee2e6] py-1 px-2 text-md rounded-3xl">Amenities</button>
       <button className="bg-[#dee2e6] py-1 px-2 text-md rounded-3xl">Room Type</button>
       <button className="bg-[#dee2e6] py-1 px-2 text-md rounded-3xl">Price</button>
     </div>
    </section>
  )
}