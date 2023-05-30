import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
const cards = [
  {
    id: 1,
    image: "/Rectangle23.png",
    title:
      "Unleashing the Power of IoT: Connecting Devices for a Smarter World",
    userPhoto: "/Photo.png",
    name: "Joel",
    description:
      "Stay updated with in-depth analysis, product reviews, helpful guides, and informative articles on topics such as artificial intelligence, Internet of Things, cybersecurity, and much more...",
  },
  {
    id: 2,
    image: "/Group40.png",
    title:
      "Exploring the Future: How Artificial Intelligence is Revolutionizing Industries",
    userPhoto: "/Group234.png",
    name: "Maria",
    description:
      "Our technology blog is your reliable source to explore the fascinating world of technological innovation and how it is shaping our digital present and future...",
  },
  {
    id: 3,
    image: "/Grupo.png",
    title: "The Rise of Artificial Intelligence in Modern Society",
    userPhoto: "/image Circle.png",
    name: "Juan",
    description:
      "In recent years, artificial intelligence (AI) has emerged as a transformative force, revolutionizing various industries and shaping the way we live and work...",
  },
  {
    id: 4,
    image: "/image16.png",
    title: "Python: A Versatile and Powerful Programming Language",
    userPhoto: "/Group234.png",
    name: "Maria",
    description:
      "Python has emerged as one of the most popular and versatile programming languages in recent years. Known for its simplicity and readability, Python offers a wide range of applications and has become a favorite among developers...",
  },
];

const Card = ({ image, name, title, description, userPhoto }) => {
  return (
    <div className=" flex flex-row  py-20 pb- rounded-md pt-[1rem] px-[3.5rem] ">
      <div className="bg-white shadow-md rounded-2xl p-8 h-[760px] w-[986px] left-[99px] top-[1549px]">
        <Link href="/blog">
          <Image
            src={image}
            alt={name}
            className="rounded-md pb-8 h-[382.5px] w-[720px]"
            width={720}
            height={382.5}
          />

          <h2 className="text-lg font-normal font-poppins text-[#000000] leading-[28.2px] tracking-[2%] pb-8">
            {title}
          </h2>
        </Link>

        <div className="flex items-center">
          <Image
            src={userPhoto}
            alt={userPhoto}
            className="w-[58px] h-[58px] mr-4  "
            width={58}
            height={58}
          />

          <p className="text-l ">{name}</p>
        </div>
        <div className=" py-4">
          <h2 className="text-gray-500 pb-5">{description}</h2>
        </div>

        <Link href="/blog">
          <div className="text-[#000000] hover:text-blue-700  inline-block pb-3">
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default function CardsBlog() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cards.slice(startIndex, endIndex);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
      transition={{ duration: 1 }}>
      <div className="bg-[#222129] p-6 mt-[4rem] ">
        <h1 className="mt-10 text-3xl ml-[5rem] leading-[66px]  font-extrabold font-poppins text-white py-1">
          Related Blog
        </h1>
        <div className="grid grid-cols-2 gap-[1rem] ">
          {currentCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="mr-2 "
            onClick={handlePrevPage}
            disabled={currentPage === 0}>
            <Image
              src="/BotonAnt.png"
              alt="Previous Button"
              width={30}
              height={30}
            />
          </button>
          <button
            className="ml-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}>
            <Image
              src="/BotonNext.png"
              alt="Previous Button"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
