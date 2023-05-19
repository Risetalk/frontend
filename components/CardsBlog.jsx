import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Card = ({ image, name, title, description, link }) => {
  return (
    <div className=" flex flex-row  py-20 pb- rounded-md pt-[1rem] px-[3.5rem] ">
      <div className="bg-white shadow-md rounded-2xl p-8 h-[680px] w-[986px] left-[99px] top-[1549px]">
        <Image
          src="/Rectangle23.png"
          alt={name}
          className="rounded-md pb-8"
          width={719}
          height={382}
        />

        <h2 className="text-lg font-normal font-poppins text-[#000000] leading-[28.2px] tracking-[2%] pb-8">
          {title}
        </h2>
        <p className="text-lg text-gray-500 font-semibold pb-3">{name}</p>
        <h2 className="text-gray-500 pb-5">{description}</h2>
        <a
          href={link}
          className="text-[#000000] hover:text-blue-700  inline-block pb-3">
          Read More
        </a>
      </div>
    </div>
  );
};

export default function CardsBlog() {

  const ref = useRef()
  const isInView = useInView(ref, { once: true })

  const cards = [
    {
      image: "/card1.png",
      title:
        "Unleashing the Power of IoT: Connecting Devices for a Smarter World",
      name: "Lina",
      description:
        "Stay updated with in-depth analysis, product reviews, helpful guides, and informative articles on topics such as artificial intelligence, Internet of Things, cybersecurity, and much more..",
      link: "https://example.com/card1",
    },
    {
      image: "/card2.png",
      title:
        "Exploring the Future: How Artificial Intelligence is Revolutionizing Industries",
      name: "Maria",
      description:
        "Our technology blog is your reliable source to explore the fascinating world of technological innovation and how it is shaping our digital present and future.",
      link: "https://example.com/card2",
    },
  ];

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gray-200 p-6 mt-[4rem] ">
        <h1 className="mt-10 text-3xl ml-[5rem] leading-[66px]  font-extrabold font-poppins text-[#262F30] py-1">
          Related Blog
        </h1>
        <div className="grid grid-cols-2 gap-[1rem] ">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
