// 'use client'
// import { useState, useEffect } from "react"
// import axios from "axios"

// import MyCourse from "../MyCourse"

export default function AddVideo() {

    // const [allLessons, setAllLessons] = useState([])

    // const [oneLesson, setOneLeeson] = useState({
    //     id: "",
    //     title: ""
    // })

    // const myCourses = [
    //     {
    //         id: 1,
    //         title: "titulo",
    //         category: "Dogs",
    //         languaje: "spanish",
    //         img: "https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //     },
    //     {
    //         id: 2,
    //         title: "titulo",
    //         category: "Dogs",
    //         languaje: "spanish",
    //         img: "https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //     },
    //     {
    //         id: 3,
    //         title: "titulo",
    //         category: "Dogs",
    //         languaje: "spanish",
    //         img: "https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //     }
    // ]

    // const handleOnLesson = (id, title) => {
    //     setOneLeeson({
    //         id: id,
    //         title: title
    //     })
    // }

    // useEffect(() => {
    //     const getAllLessons = async () => {
    //         const response = await axios("https://backend-production-ea3f.up.railway.app/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91")
    //         const data = await response.data;
    //         console.log(response);
    //         console.log(data);
            // setAllLessons(data)
    //     }

    //     getAllLessons()
    // }, [])

    return (
        <div className="w-[100%] ">
        
            <div className="py-[2.25rem] px-[1.688rem] border-[1px] border-[#BDC5CD] border-b-0 ">
                <h2 className="font-extrabold text-[2rem] leading-[1.5rem] mb-[0.75rem]">dd video in lessons </h2>
                <span className="font-semibold text-[1.2rem] leading-[1.5rem] text-[#687684]">Courses made by you.</span>
            </div>

            <div className="flex justify-between flex-wrap py-[1rem] px-[1.7rem] border-[1px] border-[#BDC5CD]">
                    <h2>hoal a todos</h2>
                </div>

            {/* 

            <div className="flex justify-between flex-wrap py-[1rem] px-[1.7rem] border-[1px] border-[#BDC5CD]">

                {
                    allLessons.map((course,index )=> {
                        return (
                            <div key={index} className="w-[30%]"
                            onClick={handleOnLesson(course.id, course.title)}
                            >
                                <h3>{`${index+1}. ${course.title}`}</h3>
                                <p>{course.description}</p>
                            </div>  
                        )
                    })
                }
            </div>
            
            <label htmlFor="">
            {oneLesson.title}
            <input type="text" />
            </label> */}

        </div>
    )
}