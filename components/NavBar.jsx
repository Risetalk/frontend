"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginAccess } from "@/store/slice";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/search" },
  { title: "Careers", path: "/search" },
  { title: "Blog", path: "/blog" },
  { title: "About Us", path: "/about" },
  // { title: "Login", path: "/login" },
];

export default function NavBar() {
  const { data: session, status } = useSession();
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const handleLogout = () => {
    signOut();
    dispatch(loginAccess(false));
  };

  return (
    // Animation Container
    <motion.nav
      className="fixed shadow-lg w-full z-10"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {active && courses.access && session ? (
        <div className="absolute text-black bg-white dark:bg-midnight-blue top-[100%] right-0 opacity-[0.9]">
          <ul className="flex flex-col items-end gap-4 w-[220px] p-4">
            <Link href={"/mycourses"}>My courses</Link>
            <Link href={"/create"}>Create course</Link>
            <Link href={"#"}>Options</Link>
            <Link onClick={handleLogout} href={"#"}>
              Logout
            </Link>
          </ul>
        </div>
      ) : null}
      <div className="flex flex-col bg-white dark:bg-midnight-blue  min-h-[4rem] ">
        <div className="colored-top-bar"></div>
        <div className="flex justify-between items-center px-8 py-3 ">
          <div>
            {/* Logo */}
            <Link href="/">
              <picture>
                <source
                  srcset="/images/principalLogoDark.png"
                  media="(prefers-color-scheme: dark)"
                />
                <Image
                  src="/images/principalLogo.png"
                  alt="Example Image"
                  width={180}
                  height={120}
                />
              </picture>
            </Link>
          </div>
          {/* Nav List */}

          <ul className="flex gap-x-8">
            {navLinks.map((element, index) => (
              <Link key={index} href={element.path}>
                <li className="text-midnight-shadow font-medium  hover:underline hover:text-burnt-orange text-base dark:text-white ">
                  {element.title}
                </li>
              </Link>
            ))}
          </ul>

          <div>
            {!courses.access ? (
              <>
                <button className="flex items-center">
                  <div >
                    {session ? (
                      <Image
                        onClick={handleActive}
                        className="rounded-full"
                        src={session.user.image}
                        alt="profile picture"
                        width={30}
                        height={30}
                      />
                    ) : (
                      <Image
                        onClick={handleActive}
                        className="rounded-full"
                        src={"https://source.unsplash.com/64x64/?person"}
                        alt="default profile picture"
                        width={30}
                        height={30}
                      />
                    )}
                  </div>
                  <div>
                    <Image
                      onClick={handleActive}
                      className=""
                      src="/Pestaña.png"
                      alt="logo"
                      width={12}
                      height={21}
                    />
                  </div>
                </button>
              </>
            ) : (
              <div>
                <Link className="dark:text-white" href={"/login"}>
                  Login
                </Link>
                <Link
                  className="bg-burnt-orange ml-4 px-4 py-2 rounded-md text-white "
                  href={"/login"}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

