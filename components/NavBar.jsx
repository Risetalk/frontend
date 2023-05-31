"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginAccess } from "@/store/slice";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import cart from '../public/cart.png'


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
  const [access, setAccess] = useState("false");

  const [active, setActive] = useState(false);
  const router = useRouter();




  const handleActive = () => {
    setActive(!active);
    if (active) {
      document.body.classList.remove("overflow-hidden");
    }
    if (!active) {
      document.body.classList.add("overflow-hidden");
    }
  };

  const handleLogout = async () => {

    try {
      await axios.post("/api/auth/logout");
      router.push("/login");
      // if (session) {
      //   signOut();
      // }
      // localStorage.removeItem("user");
      // localStorage.removeItem("access");
      // setAccess("false");
      // signOut();
      // dispatch(loginAccess(false));
      localStorage.clear("user")
      session && signOut();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const storeUser = localStorage.getItem("user");

    if (storeUser || session) {
      localStorage.setItem("access", "true");
      const userData = JSON.parse(storeUser);
    } else {
      localStorage.setItem("access", "false");
    }

    const storeAccess = localStorage.getItem("access");
    console.log(storeAccess);
    if (storeAccess === "true") {
      setAccess("true");
    }
  }, [session]);

  useEffect(() => {
    const google = async () => {
      try {
        await axios.post("/api/auth/loginGoogle", session);
        const response = await axios.post("http://localhost:3001/user/googlelogin", session);
        console.log(response.data);
        localStorage.setItem("userGoogle", JSON.stringify(response.data));
      } catch (error) {
        console.log(error.response.data);
      }
    }
    google()
  }, [session]);

  return (
    // Animation Container
    <motion.nav
      className="fixed shadow-lg w-full z-20"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      {(session || access == "true") && (
        <div className="absolute text-black bg-white dark:text-[white] dark:bg-midnight-blue top-[100%] right-0 opacity-[0.9]">
          <ul
            className={`flex flex-col items-end gap-4 w-[220px] p-4 ${active ? "" : "hidden"
              }`}>
            <Link href={"/mycourses"} onClick={handleActive}>
              My courses
            </Link>
            <Link href={"/create"} onClick={handleActive}>
              Create course
            </Link>
            <Link href={"#"} onClick={handleActive}>
              Options
            </Link>
            <Link href={"/login"} onClick={handleLogout}>
              Logout
            </Link>
          </ul>
        </div>
      )}
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
            {access == "true" ? (
              <div className="flex gap-x-[1rem] items-center">
                <Link href="/checkout">
                  <Image
                    className="h-[30px] w-[30px] cursor-pointer"
                    src={cart} alt="ico-cart" width={50} height={50} />
                </Link>
                <button
                  className="flex items-center space-x-4 "
                  onClick={handleActive}>
                  <div>
                    {session ? (
                      <Image
                        onClick={handleActive}
                        className="rounded-full w-[40px] h-[40px]"
                        src={session.user.image}
                        alt="profile picture"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Image
                        onClick={handleActive}
                        className="rounded-full w-[40px] h-[40px]"
                        src={"https://source.unsplash.com/64x64/?person"}
                        alt="default profile picture"
                        width={40}
                        height={40}
                      />
                    )}
                  </div>
                  <div>
                    <Image
                      onClick={handleActive}
                      className={`rounded-full ${active ? "hidden" : ""}`}
                      src="/Pestaña.png"
                      alt="logo"
                      width={12}
                      height={21}
                    />
                  </div>
                </button>
              </div>
            ) : (
              <div>
                <Link className="dark:text-white" href={"/login"}>
                  Login
                </Link>
                <Link
                  className="bg-burnt-orange ml-4 px-4 py-2 rounded-md text-white "
                  href={"/login"}>
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
