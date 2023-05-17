'use client'

"use client";
import React, { useState } from "react";
import Image from "next/image";
import MyContent from "@/components/Form/MyContent";
import UploadVideo from "@/components/Form/UploadVideo";
import CreateCourse from "@/components/Form/CreateCourse";

function Form() {
  const professors = [
    { id: 1, name: "Joel Vegas", image: "/image Circle.png" },
    { id: 2, name: "Jesse", image: "/image Circle.png" },
    { id: 3, name: "Nahuel", image: "/image Circle.png" },
    { id: 4, name: "Miguel", image: "/image Circle.png" },
    { id: 5, name: "Diego I", image: "/image Circle.png" },
    { id: 6, name: "Diego", image: "/image Circle.png" },
  ];
  const userId = 1;
  const [showCreateCourse, setShowCreateCourse] = useState(true);
  const [showUploadVideo, setShowUploadVideo] = useState(false);
  const [showMyContent, setShowMyContent] = useState(false);
  const [uploadedCourse, setUploadedCourse] = useState(null);
  const [imageURL, setImageURL] = useState(""); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageURL(URL.createObjectURL(file)); 
  };

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

  const handlePost = (courseData) => {
    const courseWithImage = {
      ...courseData,
      imageUrl: imageURL || "", 
    };

    setUploadedCourse(courseWithImage);
    handleUploadVideoClick();
  };

  return (
    <div className="text-black">
      <div className="flex ">
        <div className="w-1/4 p-[2rem] border-r border-gray-300 py-[3rem] pl-[6rem]">
          <div className="flex items-center justify-start mb-4">
            <div className="w-16 h-16 rounded-full  ">
              <Image
                src={
                  professors.find((professor) => professor.id === userId)?.image
                }
                alt="UserImage"
                className="rounded-full w-16 h-16 bg-gray-300"
                width={59}
                height={59}
              />
            </div>
            <h1 className="ml-2 font-bold font-roboto text-xl">
              {professors.find((professor) => professor.id === userId)?.name}
            </h1>
          </div>
          <ul className="mb-4 py-[1rem]">
            <li className="mb-[1rem]">
              <a
                href="#"
                className="block text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
                onClick={handleCreateCourseClick}>
                Create a course
              </a>
            </li>
            <li className="mb-[1rem]">
              <a
                href="#"
                className="block text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
                onClick={handleUploadVideoClick}>
                Upload a video
              </a>
            </li>
            <li className="mb-[1rem]">
              <a
                href="#"
                className="block text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
                onClick={handleMyContentClick}>
                My content
              </a>
            </li>
          </ul>
        </div>
        <div>
          {showCreateCourse && (
            <CreateCourse
              professors={professors}
              onPost={handlePost}
              handleImageChange={handleImageChange} 
            />
          )}
          {showUploadVideo && <UploadVideo uploadedCourse={uploadedCourse} />}
          {showMyContent && ( <MyContent professors={professors} userId={userId} uploadedCourse={uploadedCourse}
            />
          )}
          
        </div>
      </div>
    </div>
  );
}
export default Form;
