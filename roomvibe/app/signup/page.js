import Link from "next/link";

export default function signup() {
  return (
    <section className="pt-5 px-3 sm:hidden">
      <h1 className="text-2xl text-center pb-3 font-semibold">
        Create An Account
      </h1>
    
      <form action="" className="flex flex-col gap-3">
        {/* this is the username's name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-2xl">
            Username
          </label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            required
            className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-2"/>
        </div>
         
         {/* this the user's email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            required
            className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none"
          />
        </div>

        {/* this is the user's phone number */}
        <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-2xl">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="johndoe@gmail.com"
            name="contact"
            required
            className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none"
          />
        </div>

        {/* this is the user's password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-2xl">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            name="name"
            required
            className="h-[55px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none"></input>
        </div>

        {/* this is the submit button */}
        <input
          type="submit"
          value="Sign Up"
          className="bg-[#fd7e14] p-3 text-3xl font-bold rounded-md mt-7"
        />
      </form>
    </section>
  );
}
