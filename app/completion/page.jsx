"use client";
import check from "../../public/check.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Completion() {


  
  const addCoursePurchased = async (myCourses) => {

    const userRegister = localStorage.getItem("user");
      const userGoogle = localStorage.getItem("userGoogle");
      let userFinal

      if (userRegister) {
        const parse = JSON.parse(userRegister)
        userFinal = parse.id;

      } else if (userGoogle) {
        const parse = JSON.parse(userGoogle)
        userFinal = parse.id;
      }



    myCourses.map(async (course) => {
      try {
        const { data } = await axios.post(`https://backend-production-ea3f.up.railway.app/purchased?idUser=${userFinal}&idCourse=${course.id}`)


      } catch (error) {
        console.log(error);
      }
    })
  }

  const handleClearLocal = () =>{
    localStorage.removeItem('dataMyCart')
  }
  
  useEffect(() => {
    const getMyCourses = localStorage.getItem("dataMyCart");
    const myCourses = JSON.parse(getMyCourses)

    addCoursePurchased(myCourses)

    let currentText = "";
    let index = 0;
    const typingInterval = setInterval(() => {
      currentText += sentence[index];
      setTypedText(currentText);
      index++;
      if (index >= sentence.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => {
      clearInterval(typingInterval);
    };

  }, []);




  const [typedText, setTypedText] = useState("");
  const sentence = "We hope you enjoy and make the most of your learning experience with us!";

  return (
    <main className="h-[100vh]">
      <div className="absolute w-[100%] h-[100vh] bg-[#00000090] flex items-center z-30">
        <div className="bg-[#222129] w-[40%] mx-[auto] h-[40%] mb-[10rem] rounded-[2rem] p-4">
          <div className="flex flex-col items-center justify-around bg-white h-[100%] pt-[1rem] pb-[2rem] rounded-[1rem]">
            <div>
              <Image
                className="mx-[auto]"
                src={check}
                alt="logo-check"
                width={70}
                height={70}
              />

              <h2 className="font-bold text-[#838383] mt-[1rem] text-center">
                Your transaction has been processed successfully.
              </h2>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-[#838383] mt-[1rem] text-center"
              >
                {typedText}
              </motion.h2>
            </div>
            <Link
            onClick={handleClearLocal}
              href={"/mycourses"}
              className="font-normal text-[1rem] leading-[1.5rem] text-white py-[0.6rem]  px-[3.5rem] bg-[#222129A6] rounded-[2.25rem] mt-[2rem] ">
              Welcome
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
