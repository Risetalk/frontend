'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Course from "./Course";

import { usePathname } from "next/navigation";

export default function ContainerCards({ title, link }) {

  const path = usePathname()

  console.log(path);

  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
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
        {recommends.map((course) => (
          <Course
            key={course.id}
            img={course.img}
            title={course.title}
            tema={course.tema}
            duration={course.duration}
            description={course.description}
            imgAuthor={course.imgAuthor}
            author={course.author}
            price={course.price}
            offer={course.offer}
          />
        ))}
      </div>
    </section>
  );
}
