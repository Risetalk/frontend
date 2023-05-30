"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import axios from "axios";
const LoginGoogle = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session)

  const handlerGoogle = async () => { 
    signIn(null, { callbackUrl: "/" })
    try {      
      await axios.post("/api/auth/loginGoogle", session);
    } catch (error) {
      console.log(error.response.data);
    }
  }


  if (session) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="leading-[2rem] px-[3rem] rounded-[4rem] bg-gray-100 m-[1rem]  border  hover:bg-black hover:text-white shadow-black shadow-sm border-1 border-gray-400">
          <div className="flex items-center py-[1rem]">
            <Image
              src="/google.png"
              width={30}
              height={30}
              alt="google logo"
              className="mr-4"
            />
            <button onClick={handlerGoogle}>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginGoogle;
