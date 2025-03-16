import Link from "next/link";

export default function signup() {
  return (
    <main>
          <section className="pt-10 px-5 sm:hidden">
            <h1 className="text-2xl text-center pb-10 font-semibold">Create An Account</h1>
            <form action="" className="flex flex-col gap-3">

              {/* Full Name */}
    
              <label htmlFor="fullname" className="text-2xl">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Anthony Afriyie"
                className="h-[60px] border border-slate-950 px-2 text-xl rounded-md mb-5 focus:outline-none"
                required
              />

              {/* email */}
    
              <label htmlFor="email" className="text-2xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="anthonyafriyie@gmail.com"
                className="h-[60px] border border-slate-950 px-2 text-xl rounded-md mb-5 focus:outline-none"
                required
              />
    
              {/* password */}
    
              <label htmlFor="password" className="text-2xl">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="h-[60px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-5"
                required
              />

              {/* Phone Number */}
    
              <label htmlFor="phoneNumber" className="text-2xl">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="0212345678"
                pattern="[0-9]{10}"
                className="h-[60px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-5"
                required
              />

              {/* Profile Image */}
    
              <label htmlFor="profileImage" className="text-2xl">
                Profile Image
              </label>
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                className="h-[60px] px-2 text-xl rounded-md focus:outline-none"
                
              />

              <p className="text-sm pb-5 text-center">
                Already have an account?{" "}
                <Link href="/login" className="underline text-[#fd7e14]">
                  Login
                </Link>
              </p>
              <input
                type="submit"
                value="Sign Up"
                className="bg-[#fd7e14] p-3 text-3xl font-bold rounded-md mb-10"
              />
            </form>
          </section>
        </main>
  );
}
