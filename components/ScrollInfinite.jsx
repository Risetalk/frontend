'use client'
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { allCoursesDB } from "@/store/slice";
import CardsPrueba from "./Skeletons/CardsPrueba";


export default function ScrollInfinite() {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1)
    const [limit] = useState(8)
    const containerRef = useRef(null)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const coursesDB = useSelector(state=> state.courses)

    useEffect(()=>{
        cargarCourses();
    },[])
    
    useEffect(() => {
    }, [courses])

    const cargarCourses = async() => {

        try {
            const  response = await axios(`http://46.101.105.17:3001/courses?page=${page}&limit=${limit}`)
            const newCourses = response.data.result
            setCourses(prevCourses => [...prevCourses, ...newCourses])
            setPage(page + 1)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }   

    };

    useEffect(()=>{
        dispatch(allCoursesDB(courses))
    },[courses, loading])

    const handleScroll = () => {

        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            cargarCourses();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [page])


    return (
        <>
        {
            loading
            ?
            <CardsPrueba/>
            :

            
        <div className="min-h-screen">
            <div 
            ref={containerRef}
            className="justify-between my-[2rem] w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] p-4 mx-[auto] pb-[2rem]">
                {
                coursesDB.filterCoursesDB?.map((course, index) => (
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
                ))
                }
            </div>
        </div>
        }
        </>
    )
}