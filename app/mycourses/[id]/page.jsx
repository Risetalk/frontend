"use client";
import React, { useState } from "react";
import ContainerCards from "../../../components/ContainerCards";
import Image from "next/image";
import Link from "next/link";

const CourseDetail = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [additionalText, setAdditionalText] = useState("");
  const [additionalTittle, setAdditionalTittle] = useState("");

  const videos = [
    {
      id: 1,
      title: "Lesson 1: Introduction to ReactJs",
      url: "https://www.youtube.com/embed/T_j60n1zgu0",
      time: "1:30",
      additionalText: "Additional text for video 1",
      additionalTittle: "O6 Super Coins on the way",
    },
    {
      id: 2,
      title: "Lesson 2: React Components",
      url: "https://www.youtube.com/embed/SQbZ9dThB80",
      time: "2:15",
      additionalText: "Additional text for video 2",
      additionalTittle: "Who this course is for?",
    },
    {
      id: 3,
      title: "Lesson 3: React Hooks",
      url: "https://www.youtube.com/embed/2NDLa2pNoh0",
      time: "1:45",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmod",
      additionalTittle: "Archievable",
    },
    {
      id: 4,
      title: "React-redux",
      url: "https://www.youtube.com/embed/Ul1bjSY0J3w",
      time: "1:30",
      additionalText: "Additional text for video 1",
      additionalTittle: "O6 Super Coins on the way",
    },
    {
      id: 5,
      title: "React Hooks",
      url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
      time: "1:30",
      additionalText: "Additional text for video 1",
      additionalTittle: "O6 Super Coins on the way",
    },
    {
      id: 6,
      title: "React-router",
      url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
      time: "1:30",
      additionalText: "Additional text for video 1",
      additionalTittle: "O6 Super Coins on the way",
    },
    {
      id: 7,
      title: "import and export",
      url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
      time: "1:30",
      additionalText: "Additional text for video 1",
      additionalTittle: "O6 Super Coins on the way",
    },
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setAdditionalText(video.additionalText);
    setAdditionalTittle(video.additionalTittle);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/4 bg-white">
          <Link href="/" className="pl-[9rem]">
            <Image
              className=" pl-[2.5rem] "
              src="/risetalkLogo.png"
              alt="Example Image"
              width={210}
              height={140}
            />
          </Link>
          <h1 className="text-gray-800 font-poppins text-2xl font-semibold  tracking-normal text-center  h-11 m-4">
            Change Simplification
          </h1>
          <ul className="space-y-4 p-[2rem]">
            {videos.map((video) => (
              <li
                key={video.id}
                className="cursor-pointer text-gray-800 text-xs hover:bg-gray-800 hover:text-white relative py-[1rem] pl-[1rem] rounded-lg bg-orange-300 bg-opacity-30"
                onClick={() => handleVideoSelect(video)}>
                {video.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 bg-gray-200 relative ">
          <div className="left-0 right-0 px-4 py-[1rem] bg-[#222129] text-white h-163 w-1423 left-497 top-0">
            <h2 className="text-3xl font-poppins">
              Learn about ReactJs from scratch
            </h2>
            <p className="font-poppins xs py-2">Introduction about ReactJs</p>
            {selectedVideo && (
              <div className="font-medium text-[0.875rem] flex-1 grid justify-items-end leading-[1.563rem] text-[#696984]">
                {selectedVideo.time} Hour
              </div>
            )}
          </div>
          {selectedVideo ? (
            <iframe
              className="w-[79rem] h-[650px] py-[3rem] px-[3rem]"
              src={selectedVideo.url}
              width="100%"
              height="650"
              frameBorder="0"
              allowFullScreen></iframe>
          ) : (
            <p className="text-[black] p-4">Plase Select a video</p>
          )}
          {selectedVideo && (
            <div className="bg-[white] ">
              <h1 className="font-poppins text-black text-2xl font-semibold leading-[5rem] tracking-normal px-[2rem] text-left">
                {additionalTittle}
              </h1>
              <p className="font-poppins text-black text-xl font-normal leading-[27px] tracking-[0.02em] text-left py-2 px-[2rem]">
                {additionalText}
              </p>
            </div>
          )}
          <section className="bg-[white] pt-[4rem] pb-[13.313rem]">
            <div>
              <ContainerCards title="More Courses" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
