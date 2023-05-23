"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import axios from 'axios';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const path = usePathname();
 
  

  const idPath = path.split('/').pop()
 
useEffect(() => {
  const confirmToken = async () => {
    try {
      await axios.get(`http://localhost:3001/user/olvide-password/${idPath}`)

    } catch (error) {
      console.log(error)
      
    }
    

  }
  confirmToken()

},[])


  // useEffect(() => {
  //   if (password) {
  //     const timer = setTimeout(() => {
  //       router.push('/login');

  //     }, 4000); 

  //     return () => clearTimeout(timer); 
  //   }
  // }, [password, router]);

  const handlerSubmmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post(`http://localhost:3001/user/olvide-password/${idPath}`, {password})
      console.log(data)
    } catch (error) {
      console.log(error)

      
    }
  }


  return (
    <>
      <main className="relative flex flex-col items-center justify-center p-4 space-y-4 antialiased text-gray-900 max-w-4xl mx-auto mt-24">
        <div className="h-[100px] w-[fit-content] mx-auto absolute top-[-6rem]">
          {password ? (
            <h2 className="bg-gray-800 transition-opacity text-white py-[2rem] px-[2rem] text-xs rounded-[1rem]">
              ❕Your password has been changed.
            </h2>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full px-[4rem] max-w-lg space-y-6 bg-gray-300 rounded-[25px] py-16">
          <h1 className="text-3xl font-bold text-center">Reset your password?</h1>
          <p className="text-center">Please, enter your new password.</p>
          <form action="#" className="space-y-6 w-ful"
          onSubmit={handlerSubmmit}>
            <input
              className="w-full px-4 py-2 border rounded-[4rem] focus:outline-none focus:ring focus:ring-primary-100"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              required=""
            />
            <div className="pl-[6.9rem]">
              <button
               
                type="submit"
                className="w-[10rem] px-[1rem] py-2 font-medium rounded-[5rem] text-white bg-black transition-colors duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                Send
              </button>
            </div>
          </form>
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
