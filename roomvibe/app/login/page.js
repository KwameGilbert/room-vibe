import Link from "next/link";
export default function login() {
  return (
    <main>
      <section className="pt-10 px-5 sm:hidden">
        <h1 className="text-2xl text-center pb-16 font-semibold">Login</h1>
        <form action="" className="flex flex-col gap-3">
          {/* login with email */}

          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="anthonyafriyie@gmail.com"
            className="h-[60px] border border-slate-950 px-2 text-xl rounded-md mb-10 focus:outline-none"
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
            className="h-[60px] border border-slate-950 px-2 text-xl rounded-md focus:outline-none mb-10"
            required
          />
          <p className="text-sm pb-5">
            Don&apos;t have an account.{" "}
            <Link href="/signup" className="underline text-[#fd7e14]">
              Create an account
            </Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="bg-[#fd7e14] p-3 text-3xl font-bold rounded-md"
          />
        </form>
      </section>
    </main>
  );
}
