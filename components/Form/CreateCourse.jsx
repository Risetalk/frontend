import React, { useState, useEffect } from "react";
import MyContent from "./MyContent";
import UploadVideo from "./UploadVideo";
import Image from "next/image";

import axios from "axios";

function CreateCourse({ professors }) {
  
  const [dataCourses, setDataCourses] = useState({
    title: "",
    description: "",
    price: "",
    language: "",
    background_image: "",
  });

  const handleDataCourses = (e) => {
    setDataCourses({
      ...dataCourses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/courses?id=cb3f526f-3c9e-45db-851f-d6da5f70c7b4",
        dataCourses
      )
      .then((response) => {
        console.log("Course created:", response.data);
        // Realizar acciones adicionales después de crear el curso, si es necesario
      })
      .catch((error) => {
        console.error("Error creating course:", error);
      });
  };

  return (
    <div className=" border-r border-gray-350">
      <h1 className="font-bold font-roboto text-xl md:text-3xl mb-[2rem] mt-[2rem] pl-[1.5rem] ">
        Create a course
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative">
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
                
        </div>
        <hr />
        <div className="relative  ">
          <div className="flex justify-between">
          
            <div className="flex items-center w-[100%] h-[8rem] text-black  mb-2 mr-2 ">
              <Image
                src="/Write.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />

              <hr className="border-l-slate-500" />
              <input
                className=" w-[80%] py-[2rem] text-xl "
                placeholder="Write title..."
                htmlFor="courseTitle"
                name="title"
                onChange={handleDataCourses}
              />
            </div>
          </div>
          <hr className="border-l-slate-500" />
          <div className="flex justify-between">
            <div className="flex items-center w-[100%] h-[8rem]  text-black  mb-2 mr-2 ">
              <Image
                src="/dateR.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
              <input
                className="w-[80%] py-[2rem] text-xl"
                type="text"
                name="background_image"
                placeholder="image Url"
                onChange={handleDataCourses}
              />
            </div>
          </div>
          <hr className="border-l-slate-500" />

          <div className="flex justify-between ">
            <div className="flex items-center w-[100%] h-[8rem] text-gray-400  mb-2 mr-2">
              <Image
                src="/Write.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
              <input
                className="w-[80%] py-[2rem] text-xl "
                htmlFor="courseDescription"
                name="description"
                placeholder="Write a description..."
                onChange={handleDataCourses}
              />
            </div>
          </div>
        </div>
        <hr className="border-l-slate-500" />

        <div className="flex justify-around p-[3rem]">
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
              className="flex items-center text-center w-[18rem] h-[100%] bg-[#687684] pl-[3.5rem]  text-white rounded-full mr-[9rem]">
              <option className="items-center" selected>
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
              className="flex items-center text-center w-[18rem] h-[5.9rem] bg-[#687684] pl-[3.5rem]  text-white rounded-full mr-2">
              <option className="items-center" selected>
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
          <div className="flex items-center w-[100%] h-[8rem]  text-black  mb-2 mr-2">
            <Image
              src="/HowIma.png"
              alt="Imagen"
              className="w-[62px] h-[62px] mr-4 ml-[1rem] "
              width={60}
              height={60}
            />
            <input
              className="w-[80%] py-[2rem] text-xl"
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
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
