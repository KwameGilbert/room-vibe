import Link from "next/link";
import Image from "next/image";
import Signup from "../../public/images/wish.gif";

export default function signup() {
  return (
    <section className="pt-5 px-3 sm:hidden">
      <h1 className="text-2xl text-center pb-3 font-semibold">
        Create An Account
      </h1>
      <Image src={Signup} alt="sign up page" />
      <form action="" className="flex flex-col gap-3">
        {/* this is the username's name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-2xl">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            className="h-[60px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-2"/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            name="name"
            className="h-[60px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none"
          />
        </div>

        {/* this is the submit button */}
        <input
          type="submit"
          value="Sign Up"
          className="bg-[#fd7e14] p-3 text-3xl font-bold rounded-md"
        />
      </form>
    </section>
  );
}
