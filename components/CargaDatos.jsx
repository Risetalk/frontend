'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function CargaDatos () {
    const [courses, setCourses] = useState([])

    

    

    useEffect(()=>{
        const getCourses= async() =>{
            const response = (await axios('http://localhost:3000/coursesCarga.json')).data
            setCourses(response)
        }
        getCourses()

        
    },[])

    useEffect(()=>{

        const addCourses = async(course) =>{

            const response = await axios.post("https://backend-production-ea3f.up.railway.app/courses?id=50de339f-cda7-4ef5-9814-811beaf79a29", course)            

        }
        if(courses){
            for (let index = 0; index < courses.length; index++) {
                addCourses(courses[index])
            }
        }

    },[courses])


    return (
        <div>

        </div>
    )
}