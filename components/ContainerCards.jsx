'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Course from "./Course";

import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesRecommended, getCoursesCard } from "@/store/slice";

export default function ContainerCards({ title, link }) {

  const courses = useSelector(state => state.courses)

  const path = usePathname()
  const dispatch = useDispatch()
  const [recommends, setRecommends] = useState([]);

  //PAGINADO ------------------------------------------------
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);



  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedCoursesRecommend = courses.coursesCardRecommend.slice(startIndex, endIndex);
  const slicedCoursesChoice = courses.coursesCardChoice.slice(startIndex, endIndex);
  const slicedCoursesDevelop = courses.coursesCardDevelop.slice(startIndex, endIndex);
  const slicedCoursesStudents = courses.coursesCardStudents.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(courses.coursesCardRecommend.length / pageSize);
  //--------------------------------------------------------



  useEffect(() => {
    dispatch(getCoursesCard())

    const getRecommend = async () => {
      try {
        const res = await fetch("http://localhost:3000/recommend.json");
        const data = await res.json();
        setRecommends(data);
      } catch (error) {
        console.error("Error fetching recommends:", error);
      }
    };

    getRecommend();

  }, []);

  return (
    <section className="w-[87%] m-[auto]">
      <div className="flex justify-between w-[100%] items-center mb-[2.7rem]">
        <h2 className={`inline font-medium text-[1.65rem] leading-[2.813rem]   ${path === "/search" ? 'text-orange-400' : 'text-black'}`}>
          {title}
        </h2>
        <Link href={`#`}>
          <span className={`font-bold text-[1rem] ${path === "/search" ? 'text-orange-400' : 'text-[#222129]'} `}>{link}</span>
        </Link>
      </div>

      <div className="flex gap-x-[2.9rem] text-[white]">
        {
          (title === "Recommended for you")
          ?
          slicedCoursesRecommend.map(course => (
            <Course
              key={course.id}
              img={course.image}
              title={course.title}
              tema={course.category}
              duration={course.duration}
              description={course.description}
              imgAuthor={course.authorImg}
              author={course.author}
              price={course.price}
              offer={course.offer}
            />))

        :   (title === "Get choice of your course")
            ? slicedCoursesChoice.map(course => (
              <Course
                key={course.id}
                img={course.image}
                title={course.title}
                tema={course.category}
                duration={course.duration}
                description={course.description}
                imgAuthor={course.authorImg}
                author={course.author}
                price={course.price}
                offer={course.offer}
              />))

            : (title === "The course in personal development")
              ? slicedCoursesDevelop.map(course => (
                <Course
                  key={course.id}
                  img={course.image}
                  title={course.title}
                  tema={course.category}
                  duration={course.duration}
                  description={course.description}
                  imgAuthor={course.authorImg}
                  author={course.author}
                  price={course.price}
                  offer={course.offer}
                />))

              :
              slicedCoursesStudents.map(course => (
                <Course
                  key={course.id}
                  img={course.image}
                  title={course.title}
                  tema={course.category}
                  duration={course.duration}
                  description={course.description}
                  imgAuthor={course.authorImg}
                  author={course.author}
                  price={course.price}
                  offer={course.offer}
                />))
              
        }

      </div>
    </section>
  );
}

