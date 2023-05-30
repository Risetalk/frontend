'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function CargaDatos () {
    const [courses, setCourses] = useState([])

    

    

    useEffect(()=>{
        const getCourses= async() =>{
            const response = (await axios('http://localhost:3000/coursesCarga.json')).data
            console.log(response);
            setCourses(response)
        }
        getCourses()

        
    },[])

    useEffect(()=>{

        const addCourses = async(course) =>{
            const response = await axios.post("http://localhost:3001/courses?id=4c625941-aee3-4a9b-9ede-d60ab6040b07", course)
            console.log(response.data);
        }
        if(courses){
            for (let index = 0; index < courses.length; index++) {
                addCourses(courses[index])
            }
        }

    },[courses])


    console.log(courses);
    return (
        <div>

        </div>
    )
}