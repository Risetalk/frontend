'use client'

import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetPage } from "@/store/slice";

export default function SearchCourses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch()

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);



  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedCourses = courses?.filterCourses?.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(courses?.filterCourses?.length / pageSize);

  useEffect(()=>{
    
    if(courses.reset === true){
      dispatch(resetPage())
      setCurrentPage(1);
    }
  },[courses.reset])

  return (
    <div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === index + 1
                ? "bg-gray-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="justify-between my-[2rem] mr-[8rem] ml-[6rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {slicedCourses?.map((course, index) => (
          <CourseCard
            id={course.id}
            key={index}
            image={course?.image}
            title={course?.title}
            tema={course?.tema}
            duration={course?.duration}
            description={course?.description}
            author={course?.author}
            price={course?.price}
            offer={course?.offer}
          />
        ))}
      </div>
    </div>
  );
}
