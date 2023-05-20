"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import MyContent from "@/components/Form/MyContent";
import UploadVideo from "@/components/Form/UploadVideo";
import CreateCourse from "@/components/Form/CreateCourse";
import TeacherCard from "@/components/TeacherCard";
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
    <div className="flex text-black justify-between ">
      <div className="w-1/4 p-[2rem] border-r border-gray-300 py-[3rem] pl-[6rem]">
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
        <ul className="mb-4 py-[1rem]">
          <li className="mb-[1rem]">
            <span
              className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
              onClick={handleCreateCourseClick}>
              <Image
                src="/Group.png"
                alt="Image"
                className="w-8 h-8"
                width={28}
                height={26.69}
              />
              <span className="ml-[1rem]">Create a course</span>
            </span>
          </li>
          <li className="mb-[1rem]">
            <span
              className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
              onClick={handleUploadVideoClick}>
              <Image
                src="/Film.png"
                alt="Image"
                className="w-8 h-8"
                width={28}
                height={26.69}
              />
              <span className="ml-[1rem]"> Upload a video</span>
            </span>
          </li>
          <li className="mb-[1rem]">
            <span
              className="flex items-center text-[#687684] hover:font-bold text-base md:text-lg hover:text-[#000000]"
              onClick={handleMyContentClick}>
              <Image
                src="/Color.png"
                alt="Image"
                className="w-8 h-8"
                width={28}
                height={26.69}
              />
              <span className="ml-[1rem]"> My content</span>
            </span>
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
        {showMyContent && (
          <MyContent
            professors={professors}
            userId={userId}
            uploadedCourse={uploadedCourse}
          />
        )}
      </div>

      <div className="w-1/4 p-[1.5rem] border-r border-gray-300 ">
        <div className="mb-4">
          {professors.map((professor) => {
            if (professor.id === userId) {
              return <TeacherCard key={professor.id} professor={professor} />;
            }
            return null;
          })}

          {professors.slice(1, 5).map((professor) => (
            <div
              key={professor.id}
              className="relative flex items-center mb-[1rem]">
              <div className="w-12 h-12 rounded-full bg-gray-300">
                <Image
                  src={professor.image}
                  width="58"
                  height="58"
                  alt={professor.name}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="ml-2 text-xs">
                <div>{professor.name}</div>
                {professor.date && professor.time && (
                  <div className="flex text-gray-500">
                    <span className="absolute left-1/3 right-[3rem] p-[2rem] top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                      {professor.date}
                    </span>
                    <span className="absolute right-[5px] top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                      {professor.time}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <button className="w-24 h-8 text-[#000000] text-center leading-4 text-xs rounded-[12px] font-medium bg-[#FFB56A]">
            Click Me
          </button>
          <hr className=" my-4" />
          <p className="text-sm text-[#687684]">Términos y Condiciones</p>
          <p className="text-sm text-[#687684]">Ayuda Legal</p>
          <p className="text-sm text-[#687684]">&copy; 2023 RiseTalk Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
