"use client";
import Image from "next/image";
import Link from "next/link";
import BlogList from "../components/BlogList.jsx";
import CardsBlog from "../components/CardsBlog.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMyCourses , allCourses, allBuyCourses } from "@/store/slice.js";
import { usePathname, useRouter } from "next/navigation.js";



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
        
      } catch (error) {
        console.error("Error fetching recommends:", error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div>
      <div>
        <section className="bg-gray-200 flex flex-row px-4 py-[1rem] pb-5">
          <div className="max-w-6xl m-12 mx-auto w-[50%]">
            <div className="lg:w-2/3 mx-8 lg:mx-16 mr-15">
              <h2 className="text-xl text-[#000000] font-poppins leading-[5rem] ">
                By themadbrains in ispiration
              </h2>

              <h1 className="mt-10 text-4xl leading-[66px] font-extrabold tracking-tight font-poppins text-[#262F30]">
                Why Swift UI Should Be on the Radar of Every Mobile Developer
              </h1>

              <div className="h-1 w-20 rounded-full mt-8 pb-2"></div>
              <p className="text-lg font-normal font-poppins text-[#000000] leading-[43.2px] tracking-[2%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                elit, sed do eiusmod tempor
              </p>

              <div className="mt-10 flex ">
                <Link
                  className="px-[2.5rem] py-[1.25rem]  text-white leading-[1.5rem] bg-orange-500 rounded-lg  font-poppins"
                  href="/courses">
                  Start learning Now
                </Link>
                <div className="ml-6"></div>
              </div>
            </div>
          </div>
          <div className=" w-[50%] flex aling py-20 pr-[6rem]">
            <Image
              className="object-right-top w-[100%]"
              src="/Group40.png"
              alt="Example Image"
              width={719}
              height={382}
            />
          </div>
        </section>
      </div>
      <BlogList />
      <CardsBlog />
    </div>
  );
}
