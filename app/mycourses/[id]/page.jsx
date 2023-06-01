"use client";
import React, { useEffect, useState } from "react";
import ContainerCards from "../../../components/ContainerCards";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { Content } from "next/font/google";
import arrowleft from '../../../public/arrowleft.png'
import arrowright from '../../../public/arrowright.png'
import ContainerReviews from "@/components/MyCourses/ContainerReviews";
import ReactPlayer from "react-player";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const CourseDetail = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [titleVideo, setTitleVideo] = useState("");
  const [descVideo, setDescVideo] = useState("");
  const [urlVideo,setUrlVideo] = useState("")

  const path = usePathname()
  const pathId = path.split('/').pop()

  const [myCourseData, setMyCourseData] = useState({})
  const [lessonSub, setLessonSub] = useState('');
  const [arrayLessons, setArrayLessons] = useState([])

  const [active, setActive] = useState(null)
  const [lessonsActive, setLessonsActive] = useState({})
  const [videoData, setVideoData] = useState({})
  const [allVideos, setAllVideos] = useState([])

  const [loading, setLoading] = useState(true)




  //  const videos = [
  //     {
  //       id: 1,
  //       title: "Lesson 1: Introduction to ReactJs",
  //       url: "https://www.youtube.com/embed/T_j60n1zgu0",
  //       time: "1:30",
  //       additionalText: "Additional text for video 1",
  //       additionalTittle: "O6 Super Coins on the way",
  //     },
  //     {
  //       id: 2,
  //       title: "Lesson 2: React Components",
  //       url: "https://www.youtube.com/embed/SQbZ9dThB80",
  //       time: "2:15",
  //       additionalText: "Additional text for video 2",
  //       additionalTittle: "Who this course is for?",
  //     },
  //     {
  //       id: 3,
  //       title: "Lesson 3: React Hooks",
  //       url: "https://www.youtube.com/embed/2NDLa2pNoh0",
  //       time: "1:45",
  //       additionalText:
  //         "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmod",
  //       additionalTittle: "Archievable",
  //     },
  //     {
  //       id: 4,
  //       title: "React-redux",
  //       url: "https://www.youtube.com/embed/Ul1bjSY0J3w",
  //       time: "1:30",
  //       additionalText: "Additional text for video 1",
  //       additionalTittle: "O6 Super Coins on the way",
  //     },
  //     {
  //       id: 5,
  //       title: "React Hooks",
  //       url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
  //       time: "1:30",
  //       additionalText: "Additional text for video 1",
  //       additionalTittle: "O6 Super Coins on the way",
  //     },
  //     {
  //       id: 6,
  //       title: "React-router",
  //       url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
  //       time: "1:30",
  //       additionalText: "Additional text for video 1",
  //       additionalTittle: "O6 Super Coins on the way",
  //     },
  //     {
  //       id: 7,
  //       title: "import and export",
  //       url: "https://www.youtube.com/embed/fQoDUj46pwU?controls=0",
  //       time: "1:30",
  //       additionalText: "Additional text for video 1",
  //       additionalTittle: "O6 Super Coins on the way",
  //     },
  //   ]; 

  const handleActive = (key) => {
    setLessonsActive({ ...lessonsActive, key })
    if (lessonsActive[key] === false) {
      setLessonsActive({ ...lessonsActive, [key]: true })
    } else {
      setLessonsActive({ ...lessonsActive, [key]: false })
    }

  }

  const handleVideoSelect = (video, index, videos) => {
    videos.forEach((v, index) => {
      if (video.title === v.title) {
        setSelectedVideo(v)
        setVideoIndex(index)
        setTitleVideo(v.title)
        setDescVideo(v.description)
        setUrlVideo(v.url_video)
      }
    })
    // setSelectedVideo(video);
    // setVideoIndex(index)
    // setTitleVideo(video.title)
    // setDescVideo(video.description)
  };

  const handlePreviousLesson = () => {
    console.log(videoIndex);
    const previousIndex = videoIndex - 1;
    if (previousIndex >= 0) {
      const previousVideo = allVideos[previousIndex];
      handleVideoSelect(previousVideo, previousIndex, allVideos);
    }
  };

  const handleNextLesson = () => {
    const nextIndex = videoIndex + 1;
    if (nextIndex < allVideos.length) {
      const nextVideo = allVideos[nextIndex];
      handleVideoSelect(nextVideo, nextIndex, allVideos);
    }
  };



  useEffect(() => {

    const userRegister = localStorage.getItem("user");
      const userGoogle = localStorage.getItem("userGoogle");
      let userFinal

      if (userRegister) {
        const parse = JSON.parse(userRegister)
        userFinal = parse.id;

      } else if (userGoogle) {
        const parse = JSON.parse(userGoogle)
        userFinal = parse.id;
      }

    const getMyCourseById = async () => {
      const userId = userFinal
      const courseId = pathId
      const response = await axios.post(`http://46.101.105.17:3001/courses/view-course`,{ userId, courseId})
      setMyCourseData(response.data.data)
        setLoading(false);
    }

    getMyCourseById()
  }, [pathId, loading])

  useEffect(() => {
    if (myCourseData.course) {
      const allLessons = myCourseData.course.lessons;
      setArrayLessons(allLessons);
      const allVideos = myCourseData.course.lessons.flatMap(lesson => lesson.videos);
      setAllVideos(allVideos)
    }

  }, [myCourseData])

  console.log(myCourseData);
  console.log(videoIndex);
  console.log(selectedVideo);
  console.log(allVideos);

  const loader = () => {
    return (
      <div className="pt-[5rem]">        
        <div className="flex">
          <div className="w-1/4 bg-white">
            <div className="pl-[2rem] ">
              <Skeleton className="mt-[1.6rem] animate-pulse transition-colors duration-300" width={200} height={50} />
            </div>
            <h1 className="w-[80%] mx-[auto] mt-[1rem] animate-pulse transition-colors duration-300">
              <Skeleton height={40} />
            </h1>
            <div className="h-[100%] w-[80%] mx-[auto] mt-[3rem]">
              <Skeleton className="animate-pulse transition-colors duration-300" height={50} count={7} />
            </div>
          </div>
          <div className="w-3/4 relative">
            <div className="">
              <h2>
                <Skeleton className="animate-pulse transition-colors duration-300" height={120} />
              </h2>
            </div>
            <section className="bg-[white] pt-[4rem] pb-[3rem]">
              <div className="w-[80%] mx-[auto]">
                <div>
                  <Skeleton className="animate-pulse transition-colors duration-300" height={350} />
                </div>
                <div className="w-[90%] mx-[auto] flex justify-around mt-[1rem]">
                  <span className="w-[30%]">
                    <Skeleton className=" h-[40px] animate-pulse transition-colors duration-300" />
                  </span>
                  <span className="w-[30%] ">
                    <Skeleton className=" h-[40px] animate-pulse transition-colors duration-300" />
                  </span>
                </div>
                <div className="mt-[2rem]">
                  <h2>
                    <Skeleton height={30} className="animate-pulse transition-colors duration-300" />
                  </h2>
                  <p>
                    <Skeleton height={20} className="animate-pulse transition-colors duration-300"/>
                  </p>
                </div>
                <ContainerReviews />
              </div>
            </section>
          </div>
        </div>
        <ContainerCards title="More Courses" />
      </div>
    );
  }

  if (loading) {
    return (
      loader()
    )
  }
  else {

    return (
      <div className="pt-[5rem]">
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
            <div className="space-y-4 p-[2rem]">
              {
                myCourseData?.course?.lessons.map((lesson, index) => {
                  return (

                    <div key={index + 1}>
                      <div
                        key={lesson?.id}
                        className={`cursor-pointer text-gray-800 hover:bg-[#0E1729] text-[1rem] hover:text-white relative py-[1rem] pl-[1rem] ${lessonsActive[index + 1] ? "bg-[#0E1729] text-white" : "bg-orange-200"}  `}
                        onClick={() => {
                          handleActive(index + 1)
                        }}>
                        {lesson.title || <Skeleton />}
                      </div>
                      {
                        lessonsActive[index + 1]
                          ?
                          <div className="text-[0.8rem] justify-end flex flex-col gap-y-[0.6rem] pt-[1rem] pl-[0.4rem]  border-l-2 w-[90%] mx-[auto]">
                            {
                              lesson.videos.map((video, index) => {
                                return (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "fit-content" }}
                                    transition={{ duration: 0.2 }}
                                    key={index + 1}>
                                    <h2
                                      onClick={() => { handleVideoSelect(video, index, allVideos) }}
                                      className="cursor-pointer hover:text-[#F78100]"> {video.title}</h2>
                                  </motion.div>
                                )
                              })
                            }
                          </div>
                          :
                          <></>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="w-3/4 bg-gray-200 relative ">
            <div className="left-0 right-0 px-4 py-[1rem] bg-[#222129] text-white h-163 w-1423 left-497 top-0">
              <h2 className="text-3xl font-poppins">
                {myCourseData.course?.title}
              </h2>
              <div className="h-[40px]">
                {
                  lessonSub
                    ?
                    <p className="font-poppins xs py-2">{lessonSub}</p>
                    :
                    ""
                }
              </div>
            </div>
            {/* {selectedVideo ? (
            <iframe
              className="w-[79rem] h-[650px] py-[3rem] px-[3rem]"
              src={selectedVideo.url}
              width="100%"
              height="650"
              frameBorder="0"
              allowFullScreen></iframe>
          ) : (
            <p className="text-[black] p-4">Plase Select a video</p>
          )} */}
            {/* {selectedVideo && (
            <div className="bg-[white] ">
              <h1 className="font-poppins text-black text-2xl font-semibold leading-[5rem] tracking-normal px-[2rem] text-left">
                {additionalTittle}
              </h1>
              <p className="font-poppins text-black text-xl font-normal leading-[27px] tracking-[0.02em] text-left py-2 px-[2rem]">
                {additionalText}
              </p>
            </div>
          )} */}
            <section className="bg-[white] pt-[4rem] pb-[3rem]">
              <div className="w-[90%] mx-[auto]">
                <ReactPlayer
                  url={urlVideo}
                />
                {/* <video controls
                  className="w-[100%]">
                  <source src="https://www.youtube.com/watch?v=qCHOtrDF0nY" type="tipo_del_video" />
                  tu navegador no soporta esto
                </video> */}
                <div className="w-[90%] mx-[auto] flex justify-around mt-[1rem]">
                  <div
                    onClick={() => { handlePreviousLesson() }}
                    className="w-[25%] flex justify-center items-center bg-[#0E1729] py-[0.8rem]  font-bold text-[white] rounded-[0.6rem] hover:bg-[#14395F] cursor-pointer">
                    <Image
                      className="w-[20px] h-[30px] "
                      src={arrowleft} alt="arrowleft-ico" width={50} height={50}
                    />
                    <span >Previous lesson</span>
                  </div>
                  <div
                    onClick={() => { handleNextLesson() }}
                    className="w-[25%] flex justify-center items-center bg-[#0E1729] py-[0.8rem] font-bold text-[white] rounded-[0.6rem] hover:bg-[#14395F] cursor-pointer">
                    <span >Complete lesson</span>
                    <Image
                      className="w-[20px] h-[30px]"
                      src={arrowright} alt="arrowright-ico" width={50} height={50} />
                  </div>
                </div>
                <div className="mt-[2rem]">
                  <h2 className="font-bold text-[2rem]">{titleVideo}</h2>
                  <p className="font-medium text-[1rem]">{descVideo}</p>
                </div>
                <ContainerReviews />
              </div>
            </section>
          </div>
        </div>
        <ContainerCards title="More Courses" />
      </div>
    );
  }
};

export default CourseDetail;


 // console.log(myCourseData);
  // console.log(arrayLessons);
  // console.log(arrayLessons.length);
  // console.log(allVideos);
  // console.log(lessonsActive);
  // console.log(videoData);