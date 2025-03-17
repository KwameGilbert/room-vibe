"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // handle submit for login
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.target);
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("https://room-vibe.onrender.com/auth/login/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(user)
      });
      
      // Displaying sweetalert if the response is successful
      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: "Login successful",
          icon: "success",
        });
        // Handle successful login
        router.push("/");
      } else {
        const errorData = await response.json();
        // Using sweetalert to show the error message
        Swal.fire({
          title: "Login failed",
          text: errorData.message,
          icon: "error",
        });

      }
      
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
      <section className="pt-10 px-5 sm:hidden">
        <h1 className="text-2xl text-center pb-16 font-semibold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            value={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
            className={`bg-[#fd7e14] p-3 text-3xl font-bold rounded-md cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </form>
      </section>
    </main>
  );
}
