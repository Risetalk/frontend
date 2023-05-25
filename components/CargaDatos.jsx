'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function CargaDatos () {
    const [courses, setCourses] = useState([])

    

    

    useEffect(()=>{
        const getCourses= async() =>{
            const response = (await axios('http://localhost:3000/coursesdata.json')).data
            console.log(response);
            setCourses(response)
        }

        getCourses()

        
    },[])

    useEffect(()=>{
        for (let index = 0; index < courses.length; index++) {
        axios.post("http://localhost:3001/courses?id=b26ab3f9-d92c-4e88-b913-93968539e030", courses[index])
        .then(response => response.data)
        .catch(error => console.log(error))
            
        }
    },[courses])


    console.log(courses);
    return (
        <div>

        </div>
    )
}