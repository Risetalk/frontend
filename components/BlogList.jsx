import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function BlogList() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        className="items-center justify-center flex flex-col"
        ref={ref}>
        <section className=" bg-[#222129]   px-[1rem] py-[0.5rem] w-[1500px] rounded-[118px]">
          <div className="px-[3rem] py-[1rem]">
            <div className="px-2 flex justify-between items-center">
              <h1 className="font-poppins font-bold text-2xl pt-[1rem] leading-[1rem] text-white text-opacity-80">
                Reading Blog list
              </h1>
              <Link
                href="/blog"
                className="text-white text-opacity-80 font-poppins font-bold text-20 leading-30 hover:text-orange-500">
                See all
              </Link>
            </div>
            <div className="flex  ">
              <div className=" mb-4 my-[2rem] flex space-x-[2rem]">
                <div className="relative">
                  <motion.div
                    className="flex flex-row h-[300px] w-[330px]"
                    whileHover={{ scale: 1.1 }}>
                   <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-[#FFFFFF] rounded-2xl font-monserrat font-extrabold text-xl leading-6 text-center text-black ">
                      Bootcamps
                    </button>

                    <Image
                      className=" flex flex-row h-[294px] w-[319px] "
                      src="/Bootcamps.png"
                      alt="Example Image"
                      width={319}
                      height={294}
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    className="flex flex-row  h-[294px] w-[319px]"
                    whileHover={{ scale: 1.1 }}>
                    <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-[#FFFFFF] rounded-2xl font-monserrat font-extrabold text-xl leading-6 text-center text-black ">
                      React
                    </button>

                    <Image
                      className=" flex flex-row   h-[294px] w-[319px] "
                      src="/React.png"
                      alt="Example Image"
                      width={356}
                      height={331.11}
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    className="flex flex-row  h-[294px] w-[319px]"
                    whileHover={{ scale: 1.1 }}>
                    <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-[#FFFFFF] rounded-2xl font-monserrat font-extrabold text-xl leading-6 text-center text-black ">
                      Flutter
                    </button>

                    <Image
                      className=" flex flex-row  h-[294px] w-[319px] "
                      src="/Flutter.png"
                      alt="Example Image"
                      width={356}
                      height={331.11}
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    className="flex flex-row  h-[294px] w-[319px]"
                    whileHover={{ scale: 1.1 }}>
                    <button className="absolute items-center left-[3rem] w-[14rem] h-[60px] mt-[13rem] bg-[#FFFFFF] rounded-2xl font-monserrat font-extrabold text-xl leading-6 text-center text-black ">
                      Javascript
                    </button>

                    <Image
                      className=" flex flex-row  h-[294px] w-[319px] "
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
        </section>
      </motion.div>
    </div>
  );
}
