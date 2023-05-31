"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContainerMyCourses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const [myCourses,setMyCourses] = useState([])

  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedCourses = myCourses?.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(myCourses.length / pageSize);




  useEffect(()=>{
    const addMyCourses = async() =>{
      const response = await axios('http://localhost:3000/myCourses.json')
      setMyCourses(response.data)
    }
    addMyCourses()
  },[])

  console.log(myCourses);
  return (
    <section>
      <section className="bg-[#22212920]  pb-[5.625rem] pt-[6.125rem]">
        <header className="flex justify-between flex-wrap w-[87%] mx-[auto]">
          <motion.div
            className="flex justify-between w-[100%] items-center mb-[3.125rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <h2 className="inline font-bold text-[1.85rem] leading-[3.375rem] text-[#252641]">
              {" "}
      Welcome back, ready for your next lesson? 
            </h2>
            <Link
              href={`#`}
              className="font-bold text-[1.1rem] leading-[1.875rem] text-black">
              View history
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-between w-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {slicedCourses?.map((course,index) => {
              return (
                <article
                  className="w-[32%] bg-white px-[1.313rem] pt-[1.188rem] text-[black] rounded-[1.25rem] h-fit"
                  key={index}>
                  <Image
                    className="w-[100%] h-[210px] object-cover rounded-[1.25rem]"
                    src={course.course.background_image}
                    alt={course.course.title}
                    width={400}
                    height={400}
                  />

                  <Link href={`/mycourses/id`}>
                    {" "}
                    <h3 className="font-medium text-[1.25rem] leading-[2.7rem] mt-[0.75rem] mb-[0.55rem]">
                      {course.course.title}
                    </h3>
                  </Link>
                  <div className="flex items-center  mb-[1.563rem] ">
                    <Image
                      className="inline  bg-slate-500 h-[35px] w-[35px] object-cover object-top rounded-full"
                      src={course.authorImg}
                      alt={course.author}
                      width={500}
                      height={100}
                    />
                    <span className="font-medium text-[1.2rem] leading-[1.688rem] ml-[0.938rem]">
                      {course.author}
                    </span>
                  </div>
                  <div className="h-[8px] border-2 bg-[#D9D9D9]">
                    <div className="h-[100%] bg-[#222129] w-[80%]"></div>
                  </div>
                  <span className="block font-semibold text-[0.7rem] leading-[1.313rem] text-[#00000080] w-[100%] text-end py-[0.75rem]">
                    Lesson 5 of 7
                  </span>
                </article>
              );
            })}
          </motion.div>
        </header>
      </section>
    </section>
  );
}
