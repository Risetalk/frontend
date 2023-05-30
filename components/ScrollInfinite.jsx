'use client'
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import CourseCard from "./CourseCard";


export default function ScrollInfinite() {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1)
    const [limit] = useState(8)
    const containerRef = useRef(null)

    useEffect(()=>{
        cargarCourses();
    },[])
    
    useEffect(() => {
        console.log(page);
        console.log(courses);
    }, [courses])

    const cargarCourses = async() => {

        try {
            const  response = await axios(`http://localhost:3001/courses?page=${page}&limit=${limit}`)
            const newCourses = response.data.result
            setCourses(prevCourses => [...prevCourses, ...newCourses])
            setPage(page + 1)
        } catch (error) {
            console.log(error);
        }   

        // axios
        //     .get(`http://localhost:3001/courses?page=${page}&limit=${limit}`)
        //     .then(response => {
        //         const newCourses = response.data.result
        //         setCourses(prevCourses => [...prevCourses, ...newCourses])
        //         setPage((prevPage) => prevPage + 1)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    const handleScroll = () => {
        const container = containerRef.current;
        const scrollHeight = container.scrollHeight;
        const scrollTop = container.scrollTop;
        const clientHeight = container.clientHeight;

        // if (scrollHeight - scrollTop === clientHeight) {
        //     cargarCourses();
        // }
        if (scrollTop + clientHeight >= scrollHeight) {
                    cargarCourses();
                }
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [page]);

    // const handleScroll = () => {

    //     const scrollHeight = document.documentElement.scrollHeight;
    //     const scrollTop = document.documentElement.scrollTop;
    //     const clientHeight = document.documentElement.clientHeight;

    //     console.log(`Este es el scroll Height ${scrollHeight}`);
    //     console.log(`Este es el scroll scrollTop ${scrollTop}`);
    //     console.log(`Este es el scroll clientHeight ${clientHeight}`);

    //     if (scrollTop + clientHeight >= scrollHeight) {
    //         cargarCourses();
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [])



    return (
        <div >
            <div 
            ref={containerRef} style={{ overflowY: "scroll", height: "800px" }}
            className="justify-between my-[2rem] w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-[auto]">
                {courses.map((course, index) => (
                    <CourseCard
                        id={course.id}
                        key={index}
                        title={course?.title}
                        background_image={course?.background_image}
                        description={course?.description}
                        categoryId={course?.categoryId}
                        language={course?.language}
                        createdAt={course?.createdAt}
                        updatedAt={course?.updatedAt}
                        price={course?.price}
                        like={course?.like}
                        
                    />
                ))}
            </div>
        </div>
    )
}