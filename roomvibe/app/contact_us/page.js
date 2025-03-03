import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";


export default function ContactUs() {
  return (
    <section className="lg:hidden">

      <MobileNavbar/>

      
        <div className="flex flex-col items-center justify-center pt-10 px-4">
            <h1 className="text-3xl text-[#ff8929] font-bold">Contact Us</h1>
            <p className="text-center text-[#868e96] mt-3">We are here to help you with any issues you may have. Please feel free to reach out to us.</p>

            {/* Contact Us Form */}
            <div className="flex flex-col items-center justify-center mt-5 mb-24 w-full">

                <form action="" className="flex flex-col gap-3 w-full">
                    {/* this is the username's name */}
                    <div className="flex flex-col gap-2">
                    
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                        required
                        className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-2 w-full"/>
                    </div>
                    
                    {/* this the user's email */}
                    <div className="flex flex-col gap-2">
                    
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        required
                        className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none w-full"
                    />
                    </div>

                    {/* this is the user's phone number */}
                    <div className="flex flex-col gap-2">
                    
                    <input
                        type="tel"
                        placeholder="Enter your Phone Number"
                        name="contact"
                        required
                        className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none w-full"
                    />

                    </div>

                    {/* this is the user's password */}
                    <div className="flex flex-col gap-2">
                    
                    <textarea placeholder="Type your Message here" cols="7" rows="4" className="border border-slate-950 px-2 text-xl rounded-md focus:outline-none w-full">

                    </textarea>

                    </div>

                    {/* this is the submit button */}
                    <input
                    type="submit"
                    value="Submit"
                    className="bg-[#fd7e14] p-3 text-3xl font-bold rounded-md mt-4"
                    />
        </form>

      </div>

        </div>

    </section>

    );
}