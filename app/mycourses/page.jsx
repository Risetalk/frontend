'use client'

import Link from "next/link"
import Image from "next/image"
import ContainerCards from "@/components/ContainerCards"
import Navigation from "../../components/NavBar";
import { useSelector } from "react-redux";
import ContainerMyCourses from "@/components/ContainerMyCourses";
import Categories from "@/components/Categories";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";




export default function MyCoursesPage() {

    const ref = useRef()
    const isInView = useInView(ref, { once: true })



    const [myCourses, setMyCourses] = useState([]);

    // const getAllMyCourse = async (id) => {
    //     try {
    //         const { data } = await axios.get(`http://localhost:3001/purchased?id=${id}`)
    //         if (data.error) {
    //             return setMyCourses([])
    //         }
    //         setMyCourses(data);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    useEffect(() => {

        const myCoursesPurchased = localStorage.getItem('myCoursesPurchased')
        const coursesPurchased = JSON.parse(myCoursesPurchased)
        setMyCourses(coursesPurchased)
        // const userRegister = localStorage.getItem("user");
        // const userGoogle = localStorage.getItem("userGoogle");
        // let userFinal

        // if (userRegister) {
        //     const parse = JSON.parse(userRegister)
        //     userFinal = parse.id;

        // } else if (userGoogle) {
        //     const parse = JSON.parse(userGoogle)
        //     userFinal = parse.id;
        // }

        // getAllMyCourse(userFinal);
    }, [])

    return (
        <main className=" bg-white ">

            <ContainerMyCourses myCourses={myCourses} />


            {/* <Categories /> */}

            <section className="bg-[#22212921] pt-[6.063rem] pb-[13.313rem] ">
                <div>
                    <ContainerCards key={1} title={"Recommended for you"} link={"See all"} />
                </div>
            </section>

            <section className="pt-[6.063rem] pb-[6rem]">
                <div >
                    <ContainerCards key={2} title={"Get choice of your course"} link={"See all"} />
                </div>
            </section>

            <section className="w-[90%] mx-[auto] text-white">
                <div className="bg-[#222129] text-center pb-[5.188rem] mx-[auto] rounded-[2.313rem]">
                    <h2 className="font-semibold text-[2rem] leading-[3.375rem] pt-[4.375rem]">Online coaching lessons for remote learning.</h2>
                    <p className="font-normal text-[1.25rem] leading-[2.7rem] pt-[1.875rem] pb-[4.563rem] w-[70%] mx-[auto]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <motion.div ref={ref}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                    >
                        <Link className="font-bold text-4 leading-[1.5rem] bg-[#F0713D] pt-[1rem] px-[2.5rem] pb-[1rem] rounded-[0.75rem] " href={`#`}>
                            Start learning now
                        </Link>

                    </motion.div>
                </div>
            </section>

            <section className="pt-[6.063rem] pb-[6rem]">
                <div>
                    <ContainerCards key={3} title={"The course in personal development"} link={"See all"} />
                </div>
            </section>

            <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">
                {/* <div ref={ref}>
                        {
                            inView && (
                                <motion.div 
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y:0}}
                                transition={{duration:1}}
                                >
                                    <ContainerCards key={1} title={"Recommended for you"} link={"See all"} array={recommended} />
                                </motion.div>

                            )
                        }
                    </div> */}
                <div>
                    <ContainerCards key={4} title={"Student are viewing"} link={"See all"} />

                </div>
            </section>

        </main>

    )
}