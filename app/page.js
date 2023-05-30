"use client";
import Image from "next/image";
import Link from "next/link";
import BlogList from "../components/BlogList.jsx";
import CardsBlog from "../components/CardsBlog.jsx";
import ContainerCards from "../components/ContainerCards.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMyCourses , allCourses, allBuyCourses, getMyCategories, getCoursesRecommended } from "@/store/slice.js";
import { usePathname, useRouter } from "next/navigation.js";
import { motion } from "framer-motion";



export default function Home() {

  const courses = useSelector((state) => state.courses);
  const router = useRouter()


  const dispatch = useDispatch();


  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const res = await fetch("http://localhost:3000/course.json");
        const data = await res.json();
        dispatch(allCourses(data));
        dispatch(allMyCourses())
        dispatch(allBuyCourses())
        dispatch(getMyCategories())
        
        
      } catch (error) {
        console.error("Error fetching recommends:", error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div>
      <div>
        <section className=" flex flex-row px-4 py-[1rem] pb-5">
          <div className="max-w-6xl m-12 mx-auto w-[50%]">
            <div className="lg:w-2/3 mx-8 lg:mx-16 mr-15 ">
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1}}
              >
                <h2 className="text-xl text-[#000000] font-poppins leading-[5rem] ">
             
                </h2>
                
                <h1 className="mt-10 text-4xl leading-[66px] font-extrabold tracking-tight font-poppins text-[#262F30]">
                Unlock Your Potential and Expand Your Horizons with our Online Courses
                </h1>
                
                <div className="h-1 w-20 rounded-full mt-8 pb-2"></div>
                <p className="text-lg font-normal font-poppins text-[#000000] leading-[43.2px] tracking-[2%]">
                Learn at your own pace and on your own terms, with a flexible and adaptable learning experience.
                </p>
              </motion.div>

              <motion.div className="mt-10 flex"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay:1}}
              
              >
                <Link
                  className="px-[2.5rem] py-[1.25rem]  text-white leading-[1.5rem] bg-orange-500 rounded-lg  font-poppins"
                  href="/search">
                  Start learning Now
                </Link>
                <div className="ml-6"></div>
              </motion.div>
            </div>
          </div>
          <motion.div className=" w-[50%] flex aling py-20 pr-[6rem]"
          initial={{opacity: 0 }}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          >
            <Image
              className="object-right-top w-[100%]"
              src="/HomeImage.png"
              alt="Example Image"
              width={719}
              height={382}
            />
          </motion.div>
        </section>
      </div>
      <BlogList />
      <CardsBlog />
      <section className="pt-[6.063rem] pb-[6rem]">
                <div >
                    <ContainerCards key={2} title={"Get choice of your course"} link={"See all"} />
                </div>
            </section>
      <div className='pt-[3rem] pb-[5.5rem]  bg-[#222129] tex-white'>
        <ContainerCards
          key={1}
          title={'Recommended for you'}
          link={'See all'}
        />
      </div>
    </div>
  );
}
