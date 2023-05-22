import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCreateCourse } from "@/store/slice";
// import MyContent from "./AddVideo";
// import UploadVideo from "./UploadVideo";
import Image from "next/image";

import axios from "axios";

function CreateCourse({ professors, steps, handleStep2 }) {

  const createCourses = useSelector(state=> state.courses)
  const dispatch = useDispatch()

  const [dataCourses, setDataCourses] = useState({
    title: "",
    description: "",
    price: "",
    language: "",
    background_image: "",
    lessons:[],
  });

  const handleDataCourses = (e) => {
    setDataCourses({
      ...dataCourses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {

    event.preventDefault()
    
    dispatch(postCreateCourse(dataCourses))
    handleStep2()
    // const createCourse = async () => {
    //   try {
    //     const response = await axios.post("http://localhost:3001/courses?id=dab72acf-1f09-4612-be63-eaa1cee1c15f", dataCourses);
    //     console.log(response);
    //     handleStep2()

    //   } catch (error) {
    //     console.error("Error getting data:", error);
    //   }
    // };

    // createCourse();

    // event.preventDefault()
  };

  return (
    <div className=" border-r border-gray-350">
      <h1 className="font-bold font-roboto text-xl md:text-3xl mb-[2rem] mt-[2rem] pl-[1.5rem] ">
        Create a course
      </h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="relative">
          <p className="pb-[1rem] h-[1rem] font-inter font-semibold text-lg text-18 leading-25 text-light flex items-center pl-[1.5rem] text-[#687684]">
            Best Teachers
          </p>
        </div>
        <div className="flex items-center mb-4 pl-[1rem] ">
          {professors.map((professor) => (
            <div
              key={professor.id}
              className="w-[58px] h-[58px] rounded-full  text-center ml-2">
              <Image
                src={professor.image}
                alt={professor.name}
                width="59"
                height="59"
                className="rounded-full"
              />
              <p className="text-xs text-[#687684]">{professor.name}</p>
            </div>

          ))}

        </div> */}
        <hr />
        <div className="relative  flex flex-col  gap-y-[0.8rem] py-[0.8rem]">
            <div className="flex items-center w-[100%]  text-black   mr-2 ">
              <Image
                src="/Write.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
      
              <input
                className=" w-[80%] py-[0.4rem] text-xl  pl-[1rem] rounded-[0.6rem]"
                placeholder="Write title..."
                htmlFor="courseTitle"
                name="title"
                onChange={handleDataCourses}
              />
            </div>
            
          <hr className="border-l-slate-500" />

            <div className="flex items-center w-[100%]  text-black  mr-2 ">
              <Image
                src="/dateR.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
              <input
                className=" w-[80%] py-[0.4rem] text-xl  pl-[1rem] rounded-[0.6rem]"
                type="text"
                name="background_image"
                placeholder="image Url"
                onChange={handleDataCourses}
              />
            </div>

          <hr className="border-l-slate-500" />

            <div className="flex items-center w-[100%] text-gray-400  mr-2">
              <Image
                src="/Write.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
              <textarea
                className=" w-[80%] py-[0.4rem] text-xl  pl-[1rem] rounded-[0.6rem] text-black"
                htmlFor="courseDescription"
                name="description"
                placeholder="Write a description..."
                onChange={handleDataCourses}
              />
            </div>
        </div>

        <hr className="border-l-slate-500" />

        <div className="flex justify-around py-[0.8rem]">
          <div className="relative flex items-center">
            <Image
              src="/EllipseLangu.png"
              alt="Imagen"
              className="absolute w-[62px] h-[62px] mr-4 ml-[1rem] "
              width={60}
              height={60}
            />
            <select
              name="language"
              onChange={handleDataCourses}
              className="flex items-center text-center  h-[100%] bg-[#687684] pl-[3.5rem]  text-white rounded-[2rem] mr-[9rem]">
              <option className="items-center text-white" disabled>
                Choose a language
              </option>
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </div>

          <div className="relative flex items-center">
            <Image
              src="/EllipseCate.png"
              alt="Imagen"
              className="absolute  w-[62px] h-[62px] mr-4 ml-[1rem] "
              width={60}
              height={60}
            />
            <select
              name="category"
              onChange={handleDataCourses}
              className="flex items-center text-center  py-[1.6rem] bg-[#687684] pl-[3.5rem]  text-white rounded-[2rem] mr-2">
              <option className="items-center text-white" disabled>
                Choose a Category
              </option>
              <option value="UX/UI">UX</option>
              <option value="Bussines">Bussines</option>
              <option value="Programing">Programming</option>
            </select>
          </div>
        </div>
        <hr className="border-l-slate-500" />
        <div className="flex justify-between">
          <div className="flex items-center w-[100%]  text-black  mr-2 py-[0.6rem]">
            <Image
              src="/HowIma.png"
              alt="Imagen"
              className="w-[62px] h-[62px] mr-4 ml-[1rem] "
              width={60}
              height={60}
            />
            <input
              className=" w-[80%] py-[0.4rem] text-xl  pl-[1rem] rounded-[0.6rem]"
              placeholder="How much does it cost?"
              htmlFor="price"
              name="price"
              onChange={handleDataCourses}
            />
          </div>
        </div>


        <div className="flex justify-end">
          <button
            className="bg-orange-500 text-white px-[2.5rem] py-2 m-6  rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
