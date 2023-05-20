import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlogList() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        className="pt-[4rem] px-[6.8rem]"
        ref={ref}
        >
        <div className="px-2">
          <h1 class="  font-poppins font-bold text-2xl leading-3 text-black text-opacity-80 ">
            Reading Blog list
          </h1>
          <div className="flex mb-4 ">
            <div className=" mb-4 my-[3rem] flex space-x-[3rem]">
              <div className="relative">
              <motion.div
                  className="flex flex-row h-[300px] w-[330px]"
                  whileHover={{ scale: 1.1 }} 
                >

                <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-white bg-opacity-70 rounded-2xl font-poppins font-bold text-lg leading-6 text-center text-black ">
                  UX/UI
                </button>
               
                <Image
                  className=" flex flex-row h-[300px] w-[330px] "
                  src="/Group 2 .png"
                  alt="Example Image"
                  width={356}
                  height={331.11}
                />
                 </motion.div>
                
              </div>

              <div className="relative">

              <motion.div
                  className="flex flex-row h-[300px] w-[330px]"
                  whileHover={{ scale: 1.1 }} 
                >

                <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-white bg-opacity-70 rounded-2xl font-poppins font-bold text-lg leading-6 text-center text-black ">
                  React
                </button>
                

                <Image
                  className=" flex flex-row  h-[300px] w-[330px] "
                  src="/Group3.png"
                  alt="Example Image"
                  width={356}
                  height={331.11}
                />
              </motion.div>

              </div>


              <div className="relative">
              <motion.div
                  className="flex flex-row h-[300px] w-[330px]"
                  whileHover={{ scale: 1.1 }} 
                >
                <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-white bg-opacity-70 rounded-2xl font-poppins font-bold text-lg leading-6 text-center text-black ">
                  PHP
                </button>
                

                <Image
                  className=" flex flex-row  h-[300px] w-[330px] "
                  src="/Rectangle 4.png"
                  alt="Example Image"
                  width={356}
                  height={331.11}
                />
                  </motion.div>
              </div>

              
              <div className="relative">
              <motion.div
                  className="flex flex-row h-[300px] w-[330px]"
                  whileHover={{ scale: 1.1 }} 
                >

                <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-white bg-opacity-70 rounded-2xl font-poppins font-bold text-lg leading-6 text-center text-black ">
                  Javascript
                </button>
                
                <Image
                  className=" flex flex-row  h-[300px] w-[330px] "
                  src="/Rectangle3.png"
                  alt="Example Image"
                  width={356}
                  height={331.11}
                />
                 </motion.div>
               
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
