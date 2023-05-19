"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgetPassword() {
  return (
<>
      <main className="flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 max-w-4xl mx-auto  mt-24">
        <div className="w-full px-[4rem] max-w-lg space-y-6 bg-gray-300 rounded-[25px] py-16">
          <h1 className=" text-3xl font-bold text-center">
            Forgot your password?
          </h1>
          <p className="text-center ">
            {" "}
            Please, enter the email address you used when you joined and we will
            send you instructions to reset your password.
          </p>
          <form action="#" className="space-y-6 w-ful" />
          <input
            className="w-full px-4 py-2 border rounded-[4rem] focus:outline-none focus:ring focus:ring-primary-100"
            type="email"
            name="email"
            placeholder="Email address"
            required=""
          />

          <div className="pl-[6.9rem]">
            <button
              type="submit"
              className="w-[10rem] px-[1rem] py-2 font-medium rounded-[5rem] text-white bg-black transition-colors duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
              Send
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 items-center flex justify-between">
          <Link href="/login">
          <p className="text-gray-800 cursor-pointer hover:text-gray-900 inline-flex items-center ml-4">
            ⬅ Back
          </p>
          </Link>

          
        </div>
        <Link href="/">
        <p className="hover:text-orange-500 cursor-pointer ml-[1rem]">Need help?</p>
        </Link>
      </main>
  </>
  );
}
