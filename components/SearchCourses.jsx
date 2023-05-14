import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

export default function SearchCourses() {
  const courses = useSelector((state) => state.courses);

  const slicedCourses = courses?.filterCourses?.slice(0, 4);

  return (
    <div className="justify-between my-[3rem] mr-[8rem] ml-[6rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {slicedCourses?.map((course, index) => (
        <CourseCard
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
  );
}
