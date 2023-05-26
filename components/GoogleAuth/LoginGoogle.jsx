"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LoginGoogle = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="leading-[2rem] px-[3rem] rounded-[4rem] bg-gray-100 m-[1rem] shadow-md border border-gray-100 hover:bg-black hover:text-white">
          <div className="flex items-center py-[1rem]">
            <Image
              src="/google.png"
              width={30}
              height={30}
              alt="google logo"
              className="mr-4"
            />
            <button onClick={() => signIn(null, { callbackUrl: "/" })}>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginGoogle;
