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
            const response = await axios.post("http://localhost:3001/courses?id=0533f46a-dd37-4405-854b-3b694bc88bb0", course)            
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