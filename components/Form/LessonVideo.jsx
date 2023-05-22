'use client'
import { useState, useEffect } from "react"
import axios from "axios"


export default function LessonVideo (){

    const [allLessons, setAllLessons] = useState([
    ])

    const [oneLesson, setOneLesson] = useState({
        id:"",
        title:"",
        description:"",
        url_video:""
    })


    const handleOneLesson = (id,title,description) =>{
        setOneLesson({
            ...oneLesson,
            id:id,
            title: title,
            description: description,
        })
    }

    const handleInputVideo = (event) =>{
        setOneLesson({
            ...oneLesson,
            url_video: event.target.value
        })
        
    }

    const addVideo = async() =>{
        try {
            const response = await axios.post(`http://localhost:3001/video?id=${oneLesson.id}`,oneLesson)
            console.log(response);
            
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }

    // const handleOnSubmit = () =>{
    //     const addVideoLesson = async() =>{
    //         const response = (await axios("http://localhost:3001/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91")).data
    //         console.log(response);
    //         setAllLessons(response)
    //     }  
    // }

    console.log(oneLesson)

    const getAllLesson = async() =>{
        const response = (await axios("http://localhost:3001/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91")).data
        console.log(response);
        setAllLessons(response)
    }   


    useEffect(()=>{
        getAllLesson()
    },[])

    return (
        <div className="w-[100%] bg-red-400 ">
            <div className="py-[2.25rem] px-[1.688rem] border-[1px] border-[#BDC5CD] border-b-0 ">
                <h2 className="font-extrabold text-[2rem] leading-[1.5rem] mb-[0.75rem]">Add video in lessons </h2>
                <span className="font-semibold text-[1.2rem] leading-[1.5rem] text-[#687684]">Courses made by you.</span>
            </div>
            <div className="flex justify-between flex-wrap py-[1rem] px-[1.7rem] border-[1px] border-[#BDC5CD]">
                    {
                        allLessons.map((lesson, index) => {
                            return (
                                <div key={index} className="w-[30%]">
                                    <h2 onClick={()=>{handleOneLesson(lesson.id,lesson.title,lesson.description)}}>{lesson.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="flex flex-col " htmlFor=""
                // onSubmit={handleOnSubmit}
                >
                    <div className="flex items-center gap-x-[0.6rem]">
                <span className="ont-medium text-[1.4rem]">Lesson:</span>
                <span className="font-medium text-[1.4rem]">{oneLesson.title}</span>
                    </div>
                    <input type="text" placeholder="Enter url video lesson..."
                    className="py-[1rem] px-[0.6rem] border-4 "
                    onChange={handleInputVideo}
                    />
                    <button className="font-bold text-white w-[fit-content] py-[0.6rem] px-[0.8rem] bg-orange-400 rounded-[0.6rem] hover:bg-orange-300"
                    onClick={addVideo}>Upload video</button>
                </div>
        </div>
    )
}