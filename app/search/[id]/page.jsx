'use client'

import Image from "next/image"
import Link from "next/link"
import ContainerCards from "@/components/ContainerCards"
import globe from '../../../public/globe.png'
import checked from '../../../public/doblecheck.png'
import window from '../../../public/window.png'
import file from '../../../public/file.png'
import analitics from '../../../public/analitics.png'
import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'
import vectorDown from '../../../public/vector-down.png'
import vectorUp from '../../../public/vector-up.png'
import like from '../../../public/like.png'
import dislike from '../../../public/dislike.png'
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { addMyCart } from "@/store/slice"

export default function BuyCourseDetail() {
    const path = usePathname();
    const dispatch = useDispatch()
    const [courseDetail, setCourseDetail] = useState({});

    const [myCart, setMyCart] = useState({})

    const [vector, setVector] = useState(0)

    const idPath = path.split("/").pop();
    console.log(idPath);

    const reviews = [
        {
            id: "1",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        },
        {
            id: "2",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        }
    ]

    const recommended = [
        {
            id: "1",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "2",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "3",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "4",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    const education = [
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
    ]

    const getCheckout = () => {
        dispatch(addMyCart(myCart))
    }

    const handleVector = (index) => {
        console.log(index);
        setVector(index)
    }
    const handleOutVector = (index) => {
        console.log(index);
        setVector(0)
    }

    useEffect(() => {
        const getDataCourseID = async () => {
            const response = await axios(`http://localhost:3001/courses/${idPath}`)
            setCourseDetail(response.data.data);
        }
        getDataCourseID()

    }, [idPath])

    useEffect(() => {
        setMyCart({
            id: courseDetail?.course?.id,
            title: courseDetail?.course?.title,
            price: courseDetail?.course?.price,
            background_image: courseDetail?.course?.background_image,
            description: courseDetail?.course?.description
        })

        dispatch(addMyCart(myCart))
    }, [courseDetail])
    console.log({ courseDetail });
    console.log(`Esto va para my cart${myCart}`);
    return (
        <main className="bg-white">
            <div className="">
                <section className="flex justify-between w-[90%] mx-[auto] py-[2rem] gap-x-[2rem] mt-[2rem]">
                    <div className="w-[75%] ">
                        <div className="flex flex-col justify-around w-[100%] h-[100%]">
                            <div className="flex gap-x-[1rem]">
                                <div className="flex items-center bg-[#F9662A] py-[0.5rem] px-[0.6rem] text-[white] w-[fit-content] rounded-[0.3rem]">
                                    <Image
                                        src={courseDetail.course?.category.background_image} alt="category-ico" width={200} height={200}
                                        className="w-[20px] h-[20px]"
                                    />
                                    <span>{courseDetail.course?.category.title}</span>
                                </div>
                                <div className="flex gap-x-[1rem]">
                                    <div className="flex items-center gap-x-[0.4rem]">
                                        <Image className="w-[34px] h-[34px]" src={like} alt="like" width={50} height={50} />
                                        <span className="font-bold text-[1.2rem] text-[#909090]">{courseDetail.course?.like}</span>
                                    </div>
                                    <div className="flex items-center gap-x-[0.4rem]">
                                        <Image className="w-[34px] h-[34px]" src={dislike} alt="dislike" width={50} height={50} />
                                        <span className="font-bold text-[1.2rem] text-[#909090]">{courseDetail.course?.dislike}</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="font-black text-[4rem] text-[#000000] mt-[1.4rem]">{courseDetail.course?.title}</h1>
                            <div className="flex items-center justify-between gap-x-[1rem]  mt-[2.8rem] w-[85%] ">
                                <div className="flex items-center  gap-x-[1rem] ">
                                    <Image
                                        src={courseDetail.user?.profile_picture} alt={'tutor'}
                                        width={50} height={50}
                                        className="rounded-full object-cover w-[50px] h-[50px]"
                                    />
                                    <span><strong className="text-[#7F7F7F]">By</strong> {courseDetail.user?.first_name} {courseDetail.user?.last_name}</span>
                                </div>

                                <div className="flex gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#A09EAD]">Languaje</span>
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]">{courseDetail.course?.language}</span>
                                </div>

                                <div className="flex gap-x-[0.6rem]">
                                    <Image src={linkedin} alt="linkedin-ico" width={35} height={35} />
                                    <Image src={github} alt="github-ico" width={35} height={35} />
                                </div>
                            </div>

                            <div className="flex justify-between my-[3rem] w-[85%]">

                                <div className="flex flex-col  gap-x-[0.4rem]">

                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#A09EAD]">Last Update</span>
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]">{courseDetail.course?.updatedAt.slice(0, 10)}</span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#A09EAD]">Lessons</span>
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]">{courseDetail.course?.lessons.length}</span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#A09EAD]">Category</span>
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]">{courseDetail.course?.category.title}</span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#A09EAD]">Last Update</span>
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]">{courseDetail.course?.updatedAt.slice(0, 10)}</span>
                                </div>

                            </div>

                            <div className="flex flex-col gap-y-[0.6rem] mb-[5rem]">
                                <h2 className="font-medium text-[1.6rem] text-[#F9662A]">Description</h2>
                                <p className="font-normal text-[1.25rem] leading-[1.8rem] text-[#00000080]">
                                    {courseDetail.course?.description}
                                </p>
                            </div>

                            <div>
                                <h2 className=" font-medium text-[1.6rem] text-[#F9662A] mb-[1rem]">Lessons</h2>
                                <div className="flex gap-x-[3rem]  gap-y-[2rem]  px-[2rem] ">
                                    {
                                        courseDetail.course?.lessons?.map((lesson, index) => {
                                            return (
                                            <div
                                                key={index + 1}
                                                onMouseEnter={()=>{handleVector(index + 1)}}
                                                onMouseLeave={()=>{handleOutVector(index + 1)}}
                                                className="relative group w-[30%] cursor-pointer">
                                                <div className="absolute w-full top-[100%] bg-white opacity-0 transition-all duration-500 ease-in-out transform scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100">
                                                    <div className="flex flex-col justify-around p-[1rem] gap-y-[0.6rem] shadow-lg">
                                                        {
                                                            lesson.videos.map((video, index) => {
                                                                return (

                                                                    <div key={index + 1} className="border-[2px] border-[#F9662A] p-[0.6rem]">
                                                                        <h3 className="font-semibold text-[0.8rem] text-[#000000]">{`${index + 1}-${video.title}`}</h3>
                                                                        <p className="font-normal text-[0.6rem] text-[#000000]">{video.description}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div key={index + 1} className="relative flex justify-center items-center py-[1.4rem] px-[1.8rem] border-[1px] border-[#222129] w-[100%] shadow-md hover:bg-[#F9662A] hover:text-white">
                                                    {
                                                        vector === (index + 1)
                                                            ?
                                                            <Image src={vectorUp} alt="vector-down-ico" width={20} height={20} />
                                                            :
                                                            <Image src={vectorDown} alt="vector-down-ico" width={20} height={20} />
                                                    }
                                                    <span className="font-normal text-[0.8rem] leading-[1.125rem] w-[fit-content] py-[0.4rem] px-[0.8rem] rounded-[1rem]">
                                                        {lesson.title}
                                                    </span>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[25%] ">

                        <div className="w-[100%] mx-[auto]  bg-[white] border-[#222129] border-[2px] h-[fit-content]">
                            <Image
                                src={courseDetail.course?.background_image} alt="img-course" width={500} height={300}

                            />
                            <article className="flex flex-col gap-y-[0.8rem] px-[2.4rem] pt-[1.6rem]">
                                <h2 className="font-medium text-[1.4rem] leading-[2rem] text-[#A09EAD]">Material Includes</h2>
                                <div className="flex items-center gap-x-[0.4rem]">
                                    <Image src={checked} alt="checked-ico" width={25} height={10} />
                                    <span className="text-[#7F7F7F]">30 Lessons</span>
                                </div>
                                <div className="flex items-center gap-x-[0.4rem]">
                                    <Image src={checked} alt="checked-ico" width={25} height={10} />
                                    <span className="text-[#7F7F7F]">20 Videos </span>
                                </div>
                                <div className="flex items-center gap-x-[0.4rem]">
                                    <Image src={checked} alt="checked-ico" width={25} height={10} />
                                    <span className="text-[#7F7F7F]">Access on Mobile on Desktop</span>
                                </div>
                                <div className="flex items-center gap-x-[0.4rem]">
                                    <Image src={checked} alt="checked-ico" width={25} height={10} />
                                    <span className="text-[#7F7F7F]">Full Lifetime Access</span>
                                </div>
                                <div className="flex items-center gap-x-[0.4rem]">
                                    <Image src={checked} alt="checked-ico" width={25} height={10} />
                                    <span className="text-[#7F7F7F]">Certificate of Completion</span>
                                </div>
                            </article >
                            <article className="flex flex-col h-[fit-content] px-[2.4rem] py-[1.6rem]">
                                <div className="flex items-center gap-x-[0.6rem]">
                                    <span className="font-semibold text-[3rem] text-[#FF7A00] ">${courseDetail.course?.price}</span>
                                </div>
                                <div className="flex justify-between mt-[1.2rem]">

                                    <Link href={'#'} className="w-[45%] text-center text-[1rem] text-[#F9662A] hover:bg-[#F9662A] hover:text-[white] font-semibold bg-[white] py-[0.6rem] rounded-[0.3rem] border-[2px] border-[#F9662A] shadow-md">Add to cart</Link>

                                    <Link
                                        onClick={getCheckout}
                                        href={`checkout/${idPath}`} className="w-[45%] text-center text-[1rem] text-[#F9662A] hover:bg-[#F9662A] hover:text-[white] font-semibold bg-[white] py-[0.6rem] rounded-[0.3rem] border-[2px] border-[#F9662A] shadow-md">Buy Now</Link>

                                </div>
                            </article>
                        </div>

                    </div>

                </section>
            </div>

            <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">

                <ContainerCards key={5} title={"Marketing Articles"} link={"See all"} array={recommended} />

            </section>

            <section className="text-[black]">
                <article className="flex w-[85%] mx-[auto] py-[11rem] gap-x-[2rem]">
                    <div className="w-[50%]">
                        <h2 className="font-medium text-[2.25rem] leading-[3.6rem] mb-[1.875rem]">Everything you can do in a physical classroom,<strong className="font-medium text-[2.25rem] leading-[3.6rem] text-[#F0713D]">you can do with TOTC</strong></h2>
                        <p className="font-normal text-[1.5rem] leading-[2.7rem] text-[#696984] mb-[1.875rem]">TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <Link href={`#`} className="font-normal text-[1.375rem] leading-[2.5rem] text-[#696984] underline ">Learn more</Link>
                    </div>

                    <div className="w-[50%] flex justify-center">
                        <div className="relative">
                            <div className="z-20">
                                <Image src={"https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1685923200&Signature=k3S2XBiavdR8IhbbcRWwS40dn0NSW2wVoY9-pb4SHRfLDNzrxcY67IrT-V~1vUjn~WQt42ZcZ91mBP2jWx3dFV1TbUbQfsYV1LjgXacDrRU7RfRCLaTEXUuGnr~KJrB-9K1IprTsw0prvgSZc51DJOVsJ5iMs06CFRnRVUnyLDJunl-K8f9nuOkV6cewXFCq5DQCZhBYeTooJw8KNyHEMPkHw9wjDKvYYkqn1L2mD3u5YbJbaUe2RTAfmB6cp-trEQttIJG1HBYVBlY5rGRC8y4bSrl3WahoKDBuq1A1TADITe-O6w69T6HWKeqkhrgwny5J1gCbnV9gcBCCOyT5Hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} alt="imagen-section" width={600} height={300} />
                            </div>
                            <div className="absolute bg-[#FF986F] h-[180px] w-[180px] rounded-[1.25rem] z-[1] bottom-[-20px] right-[-20px]"></div>
                            <div className="absolute bg-[#000] h-[180px] w-[180px] rounded-[1.25rem] z-[1] top-[-20px] left-[-20px]"></div>
                        </div>
                    </div>

                </article>
            </section>

            <section>

            </section>
        </main>
    )
}