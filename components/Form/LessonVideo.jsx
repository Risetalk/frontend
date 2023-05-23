'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { createVideo } from "@/store/slice"


export default function LessonVideo() {

    const dispatch = useDispatch()
    const [allLessons, setAllLessons] = useState([
    ])

    const [titleLesson, setTitleLesson] = useState("")

    const [videoData, setVideoData] = useState({
        title: "",
        description: "",
        video_url: ""
    })


    const courses = useSelector(state => state.courses)


    const handleOneLesson = (id, title, description) => {
        setOneLesson({
            ...oneLesson,
            id: id,
            title: title,
            description: description,
        })
    }

    // const handleInputVideo = (event) => {
    //     setOneLesson({
    //         ...oneLesson,
    //         url_video: event.target.value
    //     })

    // }

    const handleInputVideo = (event) => {
        setVideoData({
            ...videoData,
            [event.target.name]: event.target.value
        })
    }

    const handleCreateVideo = (event) => {
        event.preventDefault();

        // Crear un objeto de video usando los datos del formulario

        // Buscar la lección correspondiente en createCourse
        dispatch(createVideo({ titleLesson, videoData }));

        // Verificar si se encontró la lección


        // Limpiar los datos del formulario

    };

    const handleSubmitCourseCreate = (event) =>{
        console.log(courses.course);
        const createCourse = async () => {
            try {
                const requestBody = {
                    course: courses.course
                  };
                const response = await axios.post("http://localhost:3001/courses?id=b72de358-0034-47e1-8f3d-5fe63307e547", requestBody);
                console.log(response.data);
                // setMessageRegister(true)
            } catch (error) {
                console.error("Error getting data:", error);
            }
        };

        createCourse();
        
        event.preventDefault();

    }

    const addVideo = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/video?id=${oneLesson.id}`, oneLesson)
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

    // console.log(oneLesson)

    // const getAllLesson = async () => {
    //     const response = (await axios("http://localhost:3001/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91")).data
    //     console.log(response);
    //     setAllLessons(response)
    // }


    useEffect(() => {
        // getAllLesson()
    }, [])

    return (
        <div className="w-[100%]  pb-[2rem]">
            <div className=" border-[1px] border-[#BDC5CD] border-b-0 ">
                <h1 className="font-bold font-roboto text-xl md:text-3xl mb-[2rem] mt-[2rem] pl-[1.5rem] ">
                    Add video lesson.
                </h1>
            </div>
            <h2 className="text-center font-semibold text-[1.6rem]">Lessons</h2>
            <div className="flex flex-wrap justify-between bg-yellow-400 w-[100%] py-[2rem] gap-[1rem] px-[3rem]">
                {

                    courses.course.lessons?.map((lesson, index) => {
                        console.log(lesson);
                        return (
                            <div
                                onClick={() => { setTitleLesson(lesson.title) }}
                                key={index} className="w-[46%]  p-[1rem] rounded-[1rem] cursor-pointer bg-orange-400">

                                <h3 className="font-medium text-[1.4rem] text-white">{`${index + 1}. ${lesson.title} `}</h3>
                                <p className="font-normal text-[1rem] text-white">Videos</p>

                                <div className="flex flex-col">
                                    {
                                        (lesson.videos.length) === 0
                                            ?
                                            <span className="mt-[0.6rem] text-[#e24949] ml-[1rem] bg-gray-300 w-[fit-content] py-[0.2rem] px-[0.4rem] rounded-[0.4rem]" key={index}>Falta cargar video</span>
                                    
                                            :
                                    
                                            lesson?.videos?.map((video, index) => {
                                                return (
                                                    <span className="text-white ml-[1rem]" key={index}>{video.title}</span>
                                                )
                                            })
                                    
                                    }
                                </div>
                            </div>
                        )

                    })
                }
            </div>


            {/* <div className="flex flex-col " htmlFor=""
            // onSubmit={handleOnSubmit}
            >
                <div className="flex items-center gap-x-[0.6rem]">
                    <span className="ont-medium text-[1.4rem]">Lesson:</span>
                    <span className="font-medium text-[1.4rem]">{titleLesson}</span>
                </div>
                <input type="text" placeholder="Enter url video lesson..."
                    className="py-[1rem] px-[0.6rem] border-4 "
                    onChange={handleInputVideo}
                />
                <button className="font-bold text-white w-[fit-content] py-[0.6rem] px-[0.8rem] bg-orange-400 rounded-[0.6rem] hover:bg-orange-300"
                    onClick={addVideo}>Upload video</button>
            </div> */}


            <form className="p-[1rem] flex flex-col gap-y-[0.6rem]" onSubmit={handleCreateVideo} action="">
                <div className="flex gap-x-[0.6rem] items-end">
                    <h3 className="font-semibold text-[1.4rem]">{`Lesson: `}</h3>
                    <h3 className="font-normal text-[1.4rem]">{titleLesson}</h3>
                </div>
                <label htmlFor="">
                    Add title video lesson:
                    <input
                        name="title"
                        placeholder="Add title video of lesson..."
                        className="border-4 block p-[0.4rem] w-[75%] rounded-[0.6rem]"
                        onChange={handleInputVideo}
                    >
                    </input>
                </label>
                <label htmlFor="">
                    Add description video lesson:
                    <textarea
                        name="description"
                        placeholder="Add description video of lesson..."
                        className="border-4 block p-[0.4rem] w-[75%] rounded-[0.6rem]"
                        onChange={handleInputVideo}
                    >
                    </textarea>
                </label>
                <label htmlFor="">
                    Add URL video lesson:
                    <input
                        name="video_url"
                        placeholder="Add URL video of lesson..."
                        className="border-4 block p-[0.4rem] w-[75%] rounded-[0.6rem]"
                        onChange={handleInputVideo}
                    >
                    </input>
                </label>

                <button
                    className="font-bold bg-orange-500 hover:bg-orange-400 w-[fit-content] text-white px-[1rem] py-2 m-2  rounded-[0.6rem]">
                    Add video
                </button>
            </form>

            <button 
            onClick={handleSubmitCourseCreate}
            className="font-bold bg-orange-500 hover:bg-orange-400 w-[fit-content] text-white px-[1rem] py-2 ml-[1.4rem]  rounded-[0.6rem]">Create Course</button>
        </div>
    )
}