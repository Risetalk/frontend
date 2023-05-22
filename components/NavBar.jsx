"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginAccess } from "@/store/slice";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Buy", path: "/search" },
];

export default function NavBar() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <motion.nav
      className="relative bg-white shadow-lg  w-full z-10 "
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      {active && courses.access ? (
        <div className="absolute text-black bg-white top-[100%] right-0 opacity-[0.9] ">
          <ul className="flex flex-col items-end gap-4 w-[220px] p-4">
            <Link href={"/mycourses"}>My courses</Link>
            <Link href={"/create"}>Create course</Link>
            <Link href={"#"}>Options</Link>
            <Link
              onClick={() => {
                dispatch(loginAccess(false));
              }}
              href={"#"}>
              Logout
            </Link>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div className=" mx-auto max-w-8xl px-2  lg:px-9 ">
        <div className="flex justify-between items-end ">
          <div>
            <ul>
              <li className="text-[#5B5B5B] hover:text-gray-400 ">
                <Link href="/">
                  <Image
                    className=" relative-block  top-2 left-24"
                    src="/risetalkLogo.png"
                    alt="Example Image"
                    width={219}
                    height={140}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-x-8 items-center px-[4rem] pb-[1rem] ">
            <ul className="flex gap-x-[4rem]">
              {navLinks.map((element, index) => {
                return (
                  <Link key={index} href={element.path}>
                    <li className="text-[#5B5B5B] hover:text-black font-poppins text-[19px] font-Poppins leading-[33px] text-left  ">
                      {element.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div>
              {courses.access ? (
                <button className="flex items-center">
                  <div className="mr-[1rem]">
                    <Image
                      onClick={handleActive}
                      className="rounded-full"
                      src={"https://source.unsplash.com/64x64/?person"}
                      alt="logo"
                      width={40}
                      height={40}
                    />
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
              ) : (
                <Link className="text-[#5B5B5B]" href={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
