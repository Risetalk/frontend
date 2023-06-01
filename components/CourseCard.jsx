'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import likeIco from '../public/like.png'

import { useRef, useEffect, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from "axios";
import { addMyCart } from "@/store/slice"
import { useDispatch } from "react-redux"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function CourseCard({ id, title, background_image, categoryId, language, description, createdAt, price, updatedAt, like }) {
    const notifyError = (message) => toast.error(message);
    const [myCart, setMyCart] = useState({})
    const dispatch = useDispatch()
    console.log(myCart)

    const getCheckout = () => {
        const myCoursesPurchased = localStorage.getItem('myCoursesPurchased')
        const coursesPurchased = JSON.parse(myCoursesPurchased)
        if (!coursesPurchased.error) {

            const searchCoursePurchased = coursesPurchased.find((course) => course.id === myCart.id)

            if (searchCoursePurchased) {
                notifyError("This course is already purchased")
                return
            }

        }
        dispatch(addMyCart(myCart))
    }

    useEffect(() => {
        setMyCart({
            id: id,
            title: title,
            price: price,
            background_image: background_image,
            description: description
        })
    }, [])

    return (
        <div className="card" >
            <Tippy
                interactive={true}
                placement="right"
                content={
                    <div className="flex flex-col p-[1rem] gap-y-[1rem]">
                        <h3 className="font-bold text-[1.6rem]">{title}</h3>
                        <span className="text-[0.8rem]">Update last: {updatedAt ? updatedAt.slice(0, 10) : ""}</span>
                        <p className="font-medium text-[1rem]">{description}</p>
                        <button onClick={getCheckout} className="font-bold text-[1.2rem] bg-[#F9662A] py-[0.6rem] w-[90%] mx-[auto] rounded-[0.6rem]">Add to cart</button>
                    </div>
                }
            >
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-between  bg-[white] h-[300px]   shadow-2xl "
                    key={id}>
                    <div className="h-[50%]">
                        <Image
                            className=" h-[100%] object-cover w-[100%]"
                            src={background_image}
                            alt={title || "img-course"}
                            width={300}
                            height={400}
                        />

                    </div>
                    <div className="h-[50%] flex flex-col p-[0.6rem] justify-between">
                        <Link href={`search/${id}`} className="font-medium text-[1.3rem] leading-[1.9rem] text-[#252641] ">
                            {title}
                        </Link>
                        <span className="text-[0.8rem]">Create date:{createdAt ? createdAt.slice(0, 10) : ""}</span>
                        <div className="flex justify-between">
                            <span className="font-medium text-[0.8rem] leading-[1.563rem] text-[#d77631]">
                                Category
                            </span>
                            <span className="text-[0.8rem]">{language}</span>
                        </div>
                        <div className="flex items-center gap-x-[0.4rem]">
                            <Image
                                src={likeIco} alt="like-ico" width={60} height={60}
                                className="w-[20px] h-[20px]" />
                            <span className="font-bold text-[#909090] text-[1rem]">{like}</span>
                        </div>

                        <div className="flex items-end justify-between">
                            <div>
                                <span className="font-bold text-[1.2rem] leading-[2.25rem] text-[#222129] ">
                                    $ {price}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </Tippy>
            <ToastContainer />
        </div>

    )
}