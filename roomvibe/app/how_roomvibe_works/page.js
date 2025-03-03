import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";

export default function HowRoomVibeWorks() {
  return (
    <section className="lg:hidden">
      <MobileNavbar/>
        <div className="flex flex-col items-center justify-center pt-10 px-5">
            <h1 className="text-3xl text-[#ff8929] font-bold">How RoomVibe Works</h1>
            <p className="text-center text-[#868e96] mt-3">RoomVibe is a platform that connects you to the best places to stay during your stay at your University. We provide a platform for property owners to list their properties and for guests to book these properties. </p>


            {/* Steps to booking a hostel */}

            <div className="flex flex-col items-center justify-center mt-5 mb-24">
                <h1 className="text-2xl font-semibold">How to Book a Room</h1>
                <p className="text-[#868e96] text-center mt-3">You can book a room in few easy steps</p>

                <div className="flex flex-col items-center justify-center mt-5">
                    <h1 className="text-xl font-semibold">Step 1</h1>
                    <p className="text-[#868e96] text-center mt-3">Create an account on RoomVibe</p>

                    <h1 className="text-xl font-semibold mt-5">Step 2</h1>
                    <p className="text-[#868e96] text-center mt-3">Search for your preferred hostel</p>

                    <h1 className="text-xl font-semibold mt-5">Step 3</h1>
                    <p className="text-[#868e96] text-center mt-3">Book your preferred hostel</p>

                    <h1 className="text-xl font-semibold mt-5">Step 4</h1>
                    <p className="text-[#868e96] text-center mt-3">Pay for your booking</p>

                    <h1 className="text-xl font-semibold mt-5">Step 5</h1>
                    <p className="text-[#868e96] text-center mt-3">Get your booking confirmation</p>

                    <h1 className="text-xl font-semibold mt-5">Step 6</h1>
                    <p className="text-[#868e96] text-center mt-3">Move into your hostel</p>

                    <h1 className="text-xl font-semibold mt-5">Step 7</h1>
                    <p className="text-[#868e96] text-center mt-3">Enjoy your stay</p>

                </div>


            </div>   


        </div>
        
    </section>
  );
}