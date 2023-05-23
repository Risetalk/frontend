'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createLesson, createVideo } from "@/store/slice";

function UploadVideo({ uploadedCourse, handleStep3 }) {
  // const [videoFile, setVideoFile] = useState(null);
  // const router = useRouter();

  // const backgroundImageStyle =
  //   uploadedCourse && uploadedCourse.imageUrl
  // //     ? { backgroundImage: `url(${uploadedCourse.imageUrl})` }
  //     : null;

  // const handleVideoUpload = () => {
  //   if (videoFile) {
  //     console.log("Uploading video:", videoFile);
  //     router.push("/mycontent");
  //   } else {
  //     console.log("No video");
  //   }
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setVideoFile(file);
  // };


  const dispatch = useDispatch()
  const course = useSelector(state => state.courses)

  const [lessonData, setLesssonData] = useState({
    title: "",
    description: "",
    videos: []
  })

  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    video_url: ""
  })


  const [titleLesson, setTitleLesson] = useState("");

  const [lessons, setLessons] = useState([])

  const [allLessons, setAllLessons] = useState([])

  const clear = () => {
    setLesssonData({
      title: "",
      description: ""
    })
  }

  const handleInput = (event) => {
    setLesssonData({
      ...lessonData,
      [event.target.name]: event.target.value
    })
  }

  const handleInputVideo = (event) => {
    setVideoData({
      ...videoData,
      [event.target.name]: event.target.value
    })
  }

  // ----------------------------------------------------------------------------------------
  const handleCreateVideo = (event) => {
    event.preventDefault();

    // Crear un objeto de video usando los datos del formulario

    // Buscar la lección correspondiente en createCourse
    dispatch(createVideo({ titleLesson, videoData }));

    // Verificar si se encontró la lección


    // Limpiar los datos del formulario

  };

  // ----------------------------------------------------------------------------------------
  const handleOnSubmit = (event) => {

    // try {
    //   const createLesson = async () => {
    //     const response = await axios.post("http://localhost:3001/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91", lessonData)
    //     const data = await response.data
    //     setAllLessons([
    //       ...allLessons,
    //       data
    //     ])
    //     console.log(response);
    //     clear()
    //     handleStep3()

    //   }
    //   createLesson()
    // } catch (error) {
    //   console.error("Error getting data:", error);
    // }
    dispatch(createLesson(lessonData))
    handleStep3()
    event.preventDefault()
  }

  // useEffect(() => {
  //   const getAllLessons = async () => {
  //     const response = await axios("http://localhost:3001/lesson?id=30580de9-b4f1-4e5a-a5bc-ee54ac743b91")
  //     console.log(response);
  //     const data = await response.data;
  //     setAllLessons(data)
  //   }

  //   getAllLessons()
  // }, [])

  return (

    <div className="flex flex-col gap-y-[1rem] ">
      {/* {uploadedCourse && (
        <div
          className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={backgroundImageStyle}>
          <div className="p-4 bg-gray-900 bg-opacity-75 text-white">
            <h2 className="text-xl font-bold mb-2">Uploaded Course:</h2>
            <p className="mb-2">
              <span className="font-bold">Title:</span> {uploadedCourse.title}
            </p>
            <p className="mb-2">
              <span className="font-bold">Description:</span>{" "}
              {uploadedCourse.description}
            </p>
            <p className="mb-2">
              <span className="font-bold">Cost:</span> {uploadedCourse.cost}
            </p>
            <p className="mb-2">
              <span className="font-bold">Rating:</span> {uploadedCourse.rating}
            </p>
          </div>
        </div>
      )} */}

      <h1 className="font-bold font-roboto text-xl md:text-3xl mb-[2rem] mt-[2rem] pl-[1.5rem] ">
        Create lesson.
      </h1>

      <form className="flex flex-col  w-[100%] ml-[2rem]"
        onSubmit={handleOnSubmit}
      >

        <label htmlFor="">
          Title:
          <input
            type="text"
            placeholder="Add Title for Lesson..."
            accept="video/*"
            name="title"
            onChange={handleInput}
            className="mb-4 border-4 block w-[50%] py-[0.6rem] px-[0.4rem] rounded-[0.6rem] "
          />
        </label>

        <div className="flex flex-col justify-end gap-y-[0.6rem]">
          <label htmlFor="">
            Description:
            <textarea name="description" id="" cols="30" rows="5"
              placeholder="Add description of lesson..."
              className="border-4 block p-[1rem] w-[75%] rounded-[0.6rem]"
              onChange={handleInput}
            >
            </textarea>
          </label>



          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold w-[fit-content] py-2 px-4 rounded-[0.6rem]"
          // onClick={handleVideoUpload}
          >
            Add lesson
          </button>
        </div>
      </form>

      {/* <section className="flex flex-wrap justify-between bg-yellow-400 w-[100%] py-[2rem] gap-[1rem] px-[3rem]">
          {

            course.createCourse.lessons?.map((lesson, index) => {
              return (
                <div key={index} className="w-[46%] bg-red-400 p-[1rem] rounded-[1rem]">
                  <h3 className="font-medium text-[1.4rem]"
                  onClick={()=>{setTitleLesson(lesson.title)}}>{`${index + 1}. ${lesson.title} `}</h3>
                  <p className="font-normal text-[1rem]">{lesson.description}</p>
                </div>
              )

            })
          }
        </section> */}
      {/* <h3>{titleLesson}</h3>

        <form onSubmit={handleCreateVideo} action="">
        <label htmlFor="">
            Add title video lesson:
            <input
              name="title"
              placeholder="Add title video of lesson..."
              className="border-4 block p-[1rem] w-[75%] rounded-[0.6rem]"
              onChange={handleInputVideo}
            >
            </input>
          </label>
        <label htmlFor="">
            Add description video lesson:
            <input
              name="description"
              placeholder="Add description video of lesson..."
              className="border-4 block p-[1rem] w-[75%] rounded-[0.6rem]"
              onChange={handleInputVideo}
            >
            </input>
          </label>
        <label htmlFor="">
            Add URL video lesson:
            <input
              name="video_url"
              placeholder="Add URL video of lesson..."
              className="border-4 block p-[1rem] w-[75%] rounded-[0.6rem]"
              onChange={handleInputVideo}
            >
            </input>
          </label>

        <button
          className="font-bold bg-orange-500 hover:bg-orange-400 w-[fit-content] text-white px-[2.5rem] py-2 m-6  rounded-full">
          Add video
        </button>
      </form> */}

    </div>
  );
}

export default UploadVideo;

