import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCreateCourse } from "@/store/slice";
import Image from "next/image";
import axios from "axios";

function CreateCourse({ handleUploadVideoClick,professors, steps, handleStep2 }) {

  const dispatch = useDispatch()

  const [dataCourses, setDataCourses] = useState({
    title: "",
    description: "",
    price: "",
    language: "",
    background_image: "",
    categoryId:"",
    lessons: [],
  });

  const [next, setnext] = useState({
    title: "no",
    description: "no",
    price: "no",
    language: "no",
    background_image: "no",
  })

  const [category, setCategory] = useState([])

  const handleDataCourses = (e) => {
    setDataCourses({
      ...dataCourses,
      [e.target.name]: e.target.value,
    });
    setnext({
      ...next,
      [e.target.name]: (e.target.value || 'no')
    })
  };

  const handleSubmit = (event) => {

    event.preventDefault()

    dispatch(postCreateCourse(dataCourses))
    handleStep2()
    handleUploadVideoClick()
  };

  useEffect(()=>{
    const getCategory = async() =>{
      const response = await axios('http://46.101.105.17:3001/category')
      setCategory(response.data.result)
    }
    
    
    getCategory()
  },[])


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
            
        </div> */
        }
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

        <div className="flex  py-[0.8rem] justify-around">
          <div className="relative flex items-center">
            <Image
              src="/EllipseLangu.png"
              alt="Imagen"
              className="absolute w-[62px] h-[62px] mr-4 ml-[1rem] "
              width={60}
              height={60}
            />
            <select
              defaultValue={'choose'}
              name="language"
              onChange={handleDataCourses}
              className="flex items-center text-center h-[65px] justify-center  bg-[#687684] pl-[3.5rem]  text-white rounded-[2rem] ml-[1rem] w-[200px]">
              <option className="items-center text-white" value="choose" disabled>Language</option>
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
            defaultValue={'cat'}
              name="categoryId"
              onChange={handleDataCourses}
              className="flex items-center text-center h-[65px]  bg-[#687684] pl-[3.5rem]  text-white rounded-[2rem] ml-[1rem] w-[200px]">
              <option className="items-center text-white"  value='cat'  disabled>Category</option>
              {
              category?.map(cat =>{
                return (
                  <option key={cat?.id} value={cat?.id}>{cat?.title}</option>
                )
              })
              }
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
          {
            (next.title !== 'no' && next.background_image !== 'no' && next.description !== 'no' && next.language !== 'no' && next.price !== 'no')
              ?
              <button
                className="bg-orange-500 text-white px-[2rem] py-2 m-6  rounded-[0.8rem]">
                Submit
              </button>
              :
              <span
                className="bg-gray-400 text-white px-[2rem] py-2 m-6  rounded-[0.8rem] cursor-default">
                Submit
              </span>
          }
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
