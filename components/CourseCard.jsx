import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { useRef, useEffect } from "react";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import { createPortal } from 'react-dom';



export default function CourseCard({ id, title, background_image, tema, duration, description, author, price, offer }) {

    const cardRef = useRef(null);
    const tooltipContentRef = useRef(null);

    useEffect(() => {
        if (cardRef.current && tooltipContentRef.current) {
            tippy(cardRef.current, {
                placement: "left",
                content: tooltipContentRef.current,
                allowHTML: true,
                arrow: true
            });
        }
    }, []);

    const tooltipContent = (
        <div className="text-white" ref={tooltipContentRef}>
            <h2 className="font-bold text-[1.6rem]">{title}</h2>
            <h3 className="text-[#F9662A]">$ {price}</h3>
            <p className="font-normal ">{description}</p>
        </div>
    );


    return (
        <div className="card" >
            {createPortal(tooltipContent, document.body)}
            <motion.article
                ref={cardRef}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col justify-between pt-4 px-6 bg-[white] pb-4  rounded-[1.25rem]  shadow-2xl h-[500px]"
                key={id}>
                <Image
                    className="rounded-[1.25rem] h-[200px] object-cover w-[100%]"
                    src={background_image}
                    alt={title || "img-course"}
                    width={300}
                    height={300}
                />
                <div className="flex justify-between my-[1rem]">
                    <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#d77631]">
                        {tema}
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
                        {duration} Month
                    </span>
                </div>
                <Link href={`search/${id}`} className="font-medium text-[1.3rem] leading-[1.9rem] text-[#252641] mb-[1.2rem]">
                    {title}
                </Link>
                <p className="font-normal text-[1rem] leading-[1.6rem] text-[#696984] mb-[1.063rem] h-[80px] overflow-y-scroll">
                    {description}
                </p>
                <div className="flex items-end justify-between">
                    <div className="flex items-center">
                        <Image className="rounded-full" src={"https://source.unsplash.com/64x64/?person"} alt="logo" width={36} height={36} />
                        <span className="font-medium text-[1rem] leading-[1rem] ml-[0.938rem] text-[black]">
                            {author}
                        </span>
                    </div>
                    <div>
                        <span className="font-light italic line-through text-[1rem] leading-[1.688rem] mr-4 text-[#00000080]">
                            ${price}
                        </span>
                        <span className="font-bold text-[1rem] leading-[2.25rem] text-[#222129] ">
                            ${offer}
                        </span>
                    </div>
                </div>
            </motion.article>
        </div>
    )
}