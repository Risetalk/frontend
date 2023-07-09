"use client";
import Link from "next/link";
import BlogList from "../components/BlogList.jsx";
import CardsBlog from "../components/CardsBlog.jsx";
import ContainerCards from "../components/ContainerCards.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allMyCourses,
  allCourses,
  allBuyCourses,
  getMyCategories,
  getCoursesRecommended,
} from "@/store/slice.js";
import { usePathname, useRouter } from "next/navigation.js";
import { articleTexts } from "./utils/text.js";
import Image from "next/image.js";
import Steps from "@/components/steps/index.jsx";

export default function Home() {
  const courses = useSelector((state) => state.courses);
  const router = useRouter();

  return (
    <>
      {/* Principal Home Container */}
      <div className="flex h-screen ">
        {/* Home Text Container */}
        <div className=" flex flex-col justify-center w-2/5 pl-14">
          {/* Home Title */}
          <h1 className="mt-10 text-4xl leading-[66px] font-bold tracking-tight text-black">
            Unlock Your Potential and Expand Your Horizons with our Online
            Courses
          </h1>

          {/* Home Description */}
          <p className="text-xl font-normal ml-2 ">
            Learn at your own pace and on your own terms, with a flexible and
            adaptable learning experience.
          </p>

          {/* Home Button */}
          <Link
            className="bg-burnt-orange text-white w-2/6 ml-2 mt-10 px-3 py-3 rounded-md font-semibold text-center"
            href="/search"
          >
            Start learning Now
          </Link>
        </div>

        {/* Home Image Container */}
        <div className="flex items-center justify-center w-3/5 ">
          {/* Home Image */}
          <picture>
            {/* Dark Image */}
            <source
              srcset="/assets/home/images/dark.png"
              media="(prefers-color-scheme: dark)"
            />

            {/* Light Image */}
            <img
              className="h-[80vh] w-full object-cover"
              src="/assets/home/images/light.png"
              alt="Browser with large and small images of a coffee cup and plants"
            />
          </picture>
        </div>
      </div>

      {/* Articles Section */}
      <section className="flex items-center  h-70vh px-10 ">
        {/* Mapping Articles. */}
        {articleTexts.map((article) => (
          <article
            key={article.title}
            className="flex flex-col items-start w-1/3  px-10 "
          >
            <Image
              src={article.image}
              alt={article.alt}
              width={50}
              height={50}
            />

            <h3 className="text-3xl font-bold text-center mt-8 mb-6">
              {article.title}
            </h3>
            <p className="font-normal ">{article.description}</p>
          </article>
        ))}
      </section>

      <section
        className="
         flex bg-midnight-shadow 
      "
      >
        {/* RoadmapImage */}
        <img
          src="/assets/home/images/roadmap.png"
          alt="roadmap"
          className="w-1/2"
        />

        <Steps className="w-1/2" />
      </section>

      {/* <BlogList /> */}
      {/* <CardsBlog /> */}
      {/* <section className="pt-[6.063rem] pb-[6rem]">
        <div >
          <ContainerCards key={2} title={"Get choice of your course"} link={"See all"} />
        </div>
      </section> */}
      {/* <div className='pt-[3rem] pb-[5.5rem]  bg-[#222129] tex-white'>
        <ContainerCards
          key={1}
          title={'Recommended for you'}
          link={'See all'}
        />
      </div> */}
    </>
  );
}
