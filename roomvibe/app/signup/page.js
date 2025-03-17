"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import { useState } from "react";

export default function signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignup = async (event) => {
    // TODO: Implement signup logic by hitting the backend API
    // TODO: Redirect to the home page after successful signup
    // TODO: Show a success message to the user
    // TODO: Show an error message to the user if the signup fails
    // TODO: Show a loading indicator while the signup is in progress
    // TODO: Show a success message to the user after the signup is complete
    
    // prevent the default form submission
    event.preventDefault();
    setIsLoading(true);

    // get the form data
    const formData = new FormData(event.target);

    // create a new user object
    const user = {
      full_name: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone_number: formData.get("phoneNumber"),
    };

    try {
      // hit the backend API
      const response = await fetch("https://room-vibe.onrender.com/user/register/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(user),
      }); 

      // check if the response is successful and adding sweetalert
      if (response.ok) {
        // show a success message to the user
        Swal.fire({
          title: "Signup successful",
          icon: "success",
        });
        // redirect to the home page
        router.push("./login");
      } else {
        // show an error message to the user
        const errorData = await response.json();
        // Using sweetalert to show the error message
        Swal.fire({
          title: "Signup failed",
          text: errorData.message,
          icon: "error",
        });
        
      }

    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
          <section className="pt-10 px-5 sm:hidden">
            <h1 className="text-2xl text-center pb-10 font-semibold">Create An Account</h1>
            <form onSubmit={handleSignup} className="flex flex-col gap-3">

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

              {/* Profile Image
    
              <label htmlFor="profileImage" className="text-2xl">
                Profile Image
              </label>
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                className="h-[60px] px-2 text-xl rounded-md focus:outline-none"
                
              /> */}

              <p className="text-sm pb-5 text-center">
                Already have an account?{" "}
                <Link href="/login" className="underline text-[#fd7e14]">
                  Login
                </Link>
              </p>
              <input
                type="submit"
                value={isLoading ? "Signing up..." : "Sign Up"}
                disabled={isLoading}
                className={`bg-[#fd7e14] p-3 text-3xl font-bold rounded-md mb-10 cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            </form>
          </section>
        </main>
  );
}
