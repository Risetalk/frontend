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
import SearchDetailSkeleton from "@/components/Skeletons/SearchDetail"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function BuyCourseDetail() {

    const router = useRouter()
    const path = usePathname();
    const dispatch = useDispatch()
    const [courseDetail, setCourseDetail] = useState({});

    const [myCart, setMyCart] = useState({
        id:"",
        title:"",
        price:"",
        background_image:"",
        description:"",

    })

    const [vector, setVector] = useState(0)

    const [loading, setLoading] = useState(true)

    const idPath = path.split("/").pop();


    const getCheckout = () => {
        const notifyError = (message) => toast.error(message);
        const myCoursesPurchased = localStorage.getItem('myCoursesPurchased')
        const coursesPurchased = JSON.parse(myCoursesPurchased)
        if (!coursesPurchased.error) {
            const searchCoursePurchased = coursesPurchased.find((course) => course.id === myCart.id)

            if (searchCoursePurchased) {
                notifyError("This course is already purchased")
                return 
            }
        }
        
        dispatch(addMyCart(myCart))

        router.push('/checkout')
    }

    const handleVector = (index) => {
        setVector(index)
    }
    const handleOutVector = (index) => {
        setVector(0)
    }

    const addToCart = () => {


        const notifyError = (message) => toast.error(message);
        const myCoursesPurchased = localStorage.getItem('myCoursesPurchased')
        const coursesPurchased = JSON.parse(myCoursesPurchased)
        if (!coursesPurchased.error) {
            const searchCoursePurchased = coursesPurchased.find((course) => course.id === myCart.id)

            if (searchCoursePurchased) {
                notifyError("This course is already purchased")
                return 
            }
        }

        dispatch(addMyCart(myCart))
    }

    useEffect(() => {
        const getDataCourseID = async () => {
            const response = await axios(`http://46.101.105.17:3001/courses/${idPath}`)
            setCourseDetail(response.data.data);
            setMyCart({
                id: response.data.data?.course?.id,
                title: response.data.data?.course?.title,
                price: response.data.data?.course?.price,
                background_image: response.data.data?.course?.background_image,
                description: response.data.data?.course?.description
            })
            setLoading(false)

        }
        getDataCourseID()

    }, [idPath])

    return (
        <main className="bg-white">
            {
                loading
                    ? <SearchDetailSkeleton />
                    : (
                        <div className="w-full flex flex-col justify-start items-start px-10 pt-10">
                            <div className="w-full flex flex-row justify-between items-start">
                                <div className="w-[50%] flex flex-col justify-start items-start">
                                    <h1 className="text-[20px] font-bold">{courseDetail?.course?.title}</h1>
                                    <div className="flex flex-row justify-start items-center space-x-2 mt-2">
                                        <Image src={globe} alt="globe" />
                                        <p className="text-[13px]">{courseDetail?.course?.company}</p>
                                        <Image src={checked} alt="checked" />
                                        <p className="text-[13px]">{courseDetail?.course?.is_certificated ? 'Certificated' : 'Not Certificated'}</p>
                                    </div>
                                    <div className="flex flex-row justify-start items-center space-x-2 mt-2">
                                        <Image src={window} alt="window" />
                                        <p className="text-[13px]">{courseDetail?.course?.hours} hours</p>
                                        <Image src={file} alt="file" />
                                        <p className="text-[13px]">{courseDetail?.course?.lessons} lessons</p>
                                        <Image src={analitics} alt="analitics" />
                                        <p className="text-[13px]">{courseDetail?.course?.level}</p>
                                    </div>
                                    <div className="flex flex-row justify-start items-center mt-4">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addToCart}>Add to cart</button>
                                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={getCheckout}>Checkout</button>
                                    </div>
                                    <div className="flex flex-row justify-start items-center mt-4">
                                        <Image src={linkedin} alt="linkedin" />
                                        <Image src={github} alt="github" />
                                    </div>
                                </div>
                                <div className="w-[25%] flex flex-col justify-start items-start">
                                    <div className="w-full flex flex-row justify-start items-center">
                                        <Image src={like} alt="like" />
                                        <p className="text-[13px]">84%</p>
                                    </div>
                                    <div className="w-full flex flex-row justify-start items-center">
                                        <Image src={dislike} alt="dislike" />
                                        <p className="text-[13px]">16%</p>
                                    </div>
                                    <div className="w-full flex flex-row justify-start items-center">
                                        <Image src={vectorDown} alt="vector-down" onMouseOver={() => handleVector(1)} onMouseOut={() => handleOutVector(0)} />
                                        <p className="text-[13px]">{vector === 1 ? courseDetail?.course?.description : ''}</p>
                                    </div>
                                    <div className="w-full flex flex-row justify-start items-center">
                                        <Image src={vectorUp} alt="vector-up" onMouseOver={() => handleVector(2)} onMouseOut={() => handleOutVector(0)} />
                                        <p className="text-[13px]">{vector === 2 ? courseDetail?.course?.description : ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-start items-start mt-10">
                                <div className="w-[70%] flex flex-col justify-start items-start">
                                    <h2 className="text-[16px] font-bold mb-4">What will you learn</h2>
                                    <ul className="text-[14px] space-y-2">
                                        {
                                            courseDetail?.course?.learning_goals?.map((goal, index) => (
                                                <li key={index}>{goal}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="w-[30%] flex flex-col justify-start items-start ml-10">
                                    <h2 className="text-[16px] font-bold mb-4">Requirements</h2>
                                    <ul className="text-[14px] space-y-2">
                                        {
                                            courseDetail?.course?.requirements?.map((requirement, index) => (
                                                <li key={index}>{requirement}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <ContainerCards title="Suggested Courses" courses={courseDetail?.suggested_courses} />
                        </div>
                    )
            }
            <ToastContainer />
        </main>
    )
}