import React, { useState, useEffect } from "react";
import MyContent from "./MyContent";
import UploadVideo from "./UploadVideo";
import Image from "next/image";
import DropdownCategory from "./DropdownCategory";
import DropdownLanguaje from "./DropdownLanguaje";

function CreateCourse({ professors, onPost }) {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCost, setCourseCost] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Estado para la URL de la imagen

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);
  }, []);

  const handlePostClick = () => {
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      cost: courseCost,
      rating: courseRating,
      imageUrl: imageUrl,
    };
    onPost(courseData);
  };

  return (
    <div className="border-r border-gray-350">
      <h1 className="font-bold font-roboto text-xl md:text-3xl mb-[2rem] mt-[2rem] pl-[1.5rem]">
        Create a course
      </h1>
      <div>
        <p className="pb-[1rem] h-[1rem] font-inter font-semibold text-lg text-18 leading-25 text-light flex items-center pl-[1.5rem] text-[#687684]">
          Best Teachers
        </p>
      </div>
      <div className="flex items-center mb-4 pl-[1rem]">
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
      <div className="relative">
        <input
          className="border border-gray-300 rounded px-10 py-[5rem] w-[50rem] h-[6.9rem] font-roboto font-normal text-xl text-[black] "
          placeholder="Write title..."
          onChange={(e) => setCourseTitle(e.target.value)}
        />

        <div className="flex justify-between p-[2rem]">
          <button className="flex items-center w-[18rem] h-[6rem] bg-[#687684] font-bold text-white rounded-full mb-2 mr-2">
            <span className="flex items-center">
              <Image
                src="/dateR.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
            </span>
            Upload a image
          </button>

          <button className="flex items-center w-[18rem] h-[6rem] bg-[#687684] font-bold text-white rounded-full mb-2 mr-2">
            <span className="flex items-center">
              <Image
                src="/EllipseRele.png"
                alt="Imagen"
                className="w-[62px] h-[62px] mr-4 ml-[1rem] "
                width={60}
                height={60}
              />
            </span>
            Date released
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          className="mb-2 border text-xl border-gray-300 rounded px-2 py-[5rem] pl-[1rem]  w-full h-[8rem]"
          placeholder="
          Write a description..."
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        <div className="flex justify-between p-[2rem]">
          <DropdownCategory /> <DropdownLanguaje />
        </div>

        <input
          className="mb-2 border border-gray-300 rounded px-2 py-[3rem] w-full h-[2rem] pl-[1.5rem] text-xl"
          placeholder="How much does it cost?"
          onChange={(e) => setCourseCost(e.target.value)}
        />
        <div className="ml-auto flex items-center mb-4">
          <select
            className="bg-white rounded-full px-4 py-2"
            onChange={(e) => setCourseRating(e.target.value)}>
            <option value="" disabled defaultValue>
              ⭐ Give a star
            </option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-orange-500 text-white px-[2.5rem] py-2 m-6  rounded-full"
          onClick={handlePostClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateCourse;
