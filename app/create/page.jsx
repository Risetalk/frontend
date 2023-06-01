"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import AddLesson from "@/components/Form/AddLesson";

import CreateCourse from "@/components/Form/CreateCourse";

import LessonVideo from "@/components/Form/LessonVideo";

function Form() {

  const professors = [
    {
      id: 1,
      name: "Joel",
      image: "/Photo.png",
      aboutMe:
        "Dedicated, resourceful and goal-driven professional educator with a solid commitment to the social and academic growth and development of every child.",
      email: "jose@gmail.com",
      date: "2023-may-10",
      time: "05:00",
    },
    {
      id: 2,
      name: "Jesse",
      image: "/image Circle.png",
      aboutMe: "I am a developer",
      email: "jose@gmail.com",
      date: "2023-may-10",
      time: "05:00",
    },
    {
      id: 3,
      name: "Nahuel",
      image: "/image Circle.png",
      aboutMe: "I am a developer",
      email: "jose@gmail.com",
      date: "2023-may-10",
      time: "10:00",
    },
    {
      id: 4,
      name: "Miguel",
      image: "/image Circle.png",
      aboutMe: "I am a developer",
      date: "2023-may-10",
      time: "9:00",
    },
    {
      id: 5,
      name: "Diego I",
      image: "/image Circle.png",
      aboutMe: "I am a developer",
      date: "2023-march-10",
      time: "3:00",
    },
    {
      id: 6,
      name: "Diego",
      image: "/image Circle.png",
      aboutMe: "I am a teacher",
      date: "2023-may-10",
      time: "08:00",
    },
  ];

  const userId = 1;
  const [showCreateCourse, setShowCreateCourse] = useState(true);
  const [showUploadVideo, setShowUploadVideo] = useState(false);
  const [showMyContent, setShowMyContent] = useState(false);
  const [uploadedCourse, setUploadedCourse] = useState(null);


  let userData;

  if (typeof window !== "undefined") {

    const userRegister = localStorage.getItem("user");
    const userGoogle = localStorage.getItem("userGoogle");

    if (userRegister) {
      const user = localStorage.getItem("user");
      userData = JSON.parse(user);
    }

    if (userGoogle) {
      const user = localStorage.getItem("userGoogle");
      userData = JSON.parse(user);
    }
  }

  const createCourse = useSelector((state) => state.courses);

  const [steps, setSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const handleCreateCourseClick = () => {
    setShowCreateCourse(true);
    setShowUploadVideo(false);
    setShowMyContent(false);
  };

  const handleUploadVideoClick = () => {
    setShowCreateCourse(false);
    setShowUploadVideo(true);
    setShowMyContent(false);
  };

  const handleMyContentClick = () => {
    setShowCreateCourse(false);
    setShowUploadVideo(false);
    setShowMyContent(true);
  };

  const handleStep1 = () => {
    setSteps({
      step1: true,
      step2: false,
      step3: false,
    });
  };
  const handleStep2 = () => {
    setSteps({
      step1: true,
      step2: true,
      step3: false,
    });
  };
  const handleStep3 = () => {
    setSteps({
      step1: true,
      step2: true,
      step3: true,
    });
  };

  return (
    <div className="flex text-black justify-between w-[100%]">
      <div className="w-[25%]  border-r border-gray-300 ">
        <div className="flex items-center justify-start mb-4">
          <Link href="/">
            <Image
              className="pr-[4rem] block w-329 h-89 relative top-1 left-37"
              src="/risetalkLogo.png"
              alt="Example Image"
              width={329}
              height={89}
            />
          </Link>
        </div>

        <div className="py-[1rem] flex flex-col gap-y-[1rem] w-[80%] mx-[auto]">
          <div
            className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]  cursor-pointer"
            onClick={handleCreateCourseClick}
          >
            <Image
              src="/Group.png"
              alt="Image"
              className="w-8 h-8"
              width={28}
              height={26.69}
            />
            <span className="ml-[1rem]">Create a course</span>
          </div>

          <div className="relative ">
            {steps.step2 === false ? (
              <span
                className="absolute w-[100%] h-[100%] bg-white
                "
              ></span>
            ) : (
              <></>
            )}
            <div
              className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000] cursor-pointer"
              onClick={handleUploadVideoClick}
            >
              <Image
                src="/Color.png"
                alt="Image"
                className="w-8 h-8"
                width={28}
                height={26.69}
              />
              <span className="ml-[1rem]"> Create Lesson</span>
            </div>
          </div>

          <div className=" relative">
            {steps.step3 === false ? (
              <span className="absolute w-[100%] h-[100%] bg-white"></span>
            ) : (
              <></>
            )}
            <div
              className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000] cursor-pointer"
              onClick={handleMyContentClick}
            >
              <Image
                src="/Film.png"
                alt="Image"
                className="w-8 h-8"
                width={28}
                height={26.69}
              />
              <span className="ml-[1rem]"> Add video lesson</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------- */}

      <div className="w-[50%]">
        <div className={`${!showCreateCourse ? "hidden" : "block"}`}>
          <CreateCourse
            handleStep2={handleStep2}
            steps={steps}
            professors={professors}
            handleUploadVideoClick={handleUploadVideoClick}
          />
        </div>

        <div className={`${!showUploadVideo ? "hidden" : "block"}`}>
          <AddLesson
            uploadedCourse={uploadedCourse}
            handleStep3={handleStep3}
          />
        </div>

        <div className={`${!showMyContent ? "hidden" : "block"}`}>
          <LessonVideo />
        </div>
      </div>

      <div className="w-[25%] p-[1.5rem] border-r border-gray-300 ">
        <div className="mb-4 flex flex-col justify-center">
          <Image
            src={userData?.profile_picture}
            alt={userData?.first_name}
            width={100}
            height={100}
            className="rounded-full w-[80px] h-[80px] mx-[auto]"
          />
          <span className="text-center">{userData?.user_name}</span>
          <div className="flex gap-x-[0.4rem] mx-[auto] justify-center">
            <span>{userData?.first_name}</span>
            <span>{userData?.last_name}</span>
          </div>
          <span className="text-center">{userData?.email}</span>

          <hr className=" my-4" />
          <p className="text-sm text-[#687684] cursor-pointer mb-[0.6rem]">
            Términos y Condiciones
          </p>
          <p className="text-sm text-[#687684] cursor-pointer mb-[0.6rem]">
            Ayuda Legal
          </p>
          <p className="text-sm text-[#687684] cursor-pointer mb-[0.6rem]">
            &copy; 2023 RiseTalk Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;