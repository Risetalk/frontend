import React from "react";
import Image from "next/image";
import image16 from "../public/image16.png";
import Group234 from "../public/Group234.png";
const courses = [
  {
    id: 1,
    title: "Python intermediate",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programacion",
    image: image16,
    authorImg: Group234.png,
    autor: "Sandra",
    price: "$19.99",
    duration: 3,
    offer: 15.99,
  },
  {
    id: 2,
    title: "React Js + Express",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Felipe",
    price: "$29.99",
    duration: 5,
    offer: 15.99,
  },
  {
    id: 3,
    title: "Next Js + 13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Ricardo",
    price: "$19.99",
    duration: 3,
    offer: 15.99,
  },
  {
    id: 4,
    title: "AWS certified solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Lina",
    price: "$29.99",
    duration: 2,
    offer: 15.99,
  },
  {
    id: 5,
    title: "JavaScript ES6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Sarah",
    price: "$19.99",
    duration: 4,
    offer: 15.99,
  },
  {
    id: 6,
    title: "Dart + Flutter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Bryan",
    price: "$29.99",
    duration: 1,
    offer: 15.99,
  },
  {
    id: 7,
    title: "Docker + Kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Hernan",
    price: "$19.99",
    duration: 3,
    offer: 15.99,
  },
  {
    id: 8,
    title: "Solidity + Blockchain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit neque nibh, ac per euismod eget.",
    tema: "Programming",
    image: image16,
    authorImg: Group234.png,
    author: "Sandra",
    price: "$29.99",
    duration: 2,
    offer: 15.99,
  },
];
const CourseCard = ({ course }) => {
  return (
    <div className="">
      <article
        className=" ml-[2rem] pt-4 px-6 bg-[white] pb-12  rounded-[1.25rem]  shadow-2xl"
        key={course.id}>
        <Image
          className="rounded-[1.25rem] h-[200px] object-cover w-[100%]"
         src={course.image}
          alt={course.title}
          width={300}
          height={300}
        />
        <div className="flex justify-between my-[1rem]">
          <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#d77631]">
            {course.tema}
          </span>
          <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#696984]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block w-4 h-4 mr-1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {course.duration} Month
          </span>
        </div>
        <h3 className="font-medium text-[1.3rem] leading-[1.9rem] text-[#252641] mb-[1.2rem]">
          {course.title}
        </h3>
        <p className="font-normal text-[1rem] leading-[1.6rem] text-[#696984] mb-[1.063rem]">
          {course.description}
        </p>
        <div className="flex items-end justify-between">
          <div className="flex items-center">
          <Image className="rounded-full" src={"https://source.unsplash.com/64x64/?person"} alt="logo" width={36} height={36}/>
            <span className="font-medium text-[1rem] leading-[1rem] ml-[0.938rem] text-[black]">
              {course.author}
            </span>
          </div>
          <div>
            <span className="font-light italic line-through text-[1rem] leading-[1.688rem] mr-4 text-[#00000080]">
              ${course.price}
            </span>
            <span className="font-bold text-[1rem] leading-[2.25rem] text-[#222129] ">
              ${course.offer}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};
export default function SearchCourses() {
  return (
    <div className="justify-between my-[3rem] mr-[8rem] ml-[6rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}
