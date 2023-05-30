"use client";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";

const Welcome = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>Welcome {session.user.name}, Ready for you next lesson? </p>
      </div>
    );
  } else {
    return (
      <div>
        <p> You are not loged in.</p>
        <Link href="/login">
          <div>Log in to see your courses</div>
        </Link>
      </div>
    );
  }
};

export default Welcome;
