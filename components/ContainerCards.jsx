'use client'

import Link from "next/link"
import Course from "./Course"
import { useEffect, useState } from "react"


export default async function ContainerCards({ title, link }) {
    
    const [recommends,setRecommends] = useState([]);
    
    const  getRecommend = async () =>{
        const res = await fetch("http://localhost:3000/recommend.json")
        const data =await res.json()
        setRecommends(data)
        
    }

    useEffect(()=>{


        getRecommend()
        
    },[])
    
    console.log(recommends);
    
    return (
        <section className="w-[87%]  m-[auto] ">
            <div className="flex justify-between w-[100%] items-center mb-[2.7rem]">
                <h2 className="inline font-medium text-[1.65rem] leading-[2.813rem] text-[black]">{title}</h2>
                <Link href={`#`}><span className="font-bold text-[1rem] text-[#222129]">{link}</span>
                </Link>
            </div>

            <div className="flex gap-x-[2.9rem] text-[black]">
                {
                    recommends?.map(course => {
                        return (
                            <Course key={course.id}
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
                        )
                    })
                }
            </div>
        </section>
    )
}