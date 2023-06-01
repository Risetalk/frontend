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
            const response = await axios(`http://localhost:3001/courses/${idPath}`)
            setCourseDetail(response.data.data);
            setMyCart({
                id: response.data.data?.course?.id,
                title: response.data.data?.course?.title,
                price: response.data.data?.course?.price,
                background_image: response.data.data?.course?.background_image,
                description: response.data.data?.course?.description
            })
        }
        getDataCourseID()

    }, [idPath])

    return (
        <main className="bg-white">
            <div className="">
                <section className="flex justify-center w-[90%] mx-[auto] py-[7rem] gap-x-[2rem] ">
                    <div className="w-[60%] ">
                        <div className="flex flex-col justify-around w-[100%] h-[100%]">
                            <div className="flex gap-x-[1rem]">
                                <div className="flex items-center bg-[#F9662A] py-[0.5rem] px-[0.6rem] text-[white] w-[fit-content] rounded-[0.3rem] gap-x-[0.4rem]">
                                    <Image
                                        src={courseDetail.course?.category.background_image} alt="category-ico" width={200} height={200}
                                        className="w-[20px] h-[20px]"
                                    />
                                    <span>{courseDetail.course?.category.title}</span>
                                </div>
                                <div className="flex gap-x-[1rem]">
                                    <div className="flex items-center gap-x-[0.4rem]">
                                        <Image className="w-[25px] h-[25px] cursor-pointer" src={like} alt="like" width={40} height={40} />
                                        <span className="font-bold text-[1.2rem] text-[#909090] cursor-default">{courseDetail.course?.like}</span>
                                    </div>
                                    <div className="flex items-center gap-x-[0.4rem]">
                                        <Image className="w-[25px] h-[25px] cursor-pointer" src={dislike} alt="dislike" width={40} height={40} />
                                        <span className="font-bold text-[1.2rem] text-[#909090] cursor-default">{courseDetail.course?.dislike}</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="font-black text-[3rem] text-[#000000] mt-[1.4rem]">{courseDetail.course?.title}</h1>
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

                            <div className="flex flex-col gap-y-[0.6rem] mb-[3rem]">
                                <h2 className="font-medium text-[1.6rem] text-[#F9662A]">Description</h2>
                                <p className="font-normal text-[1.25rem] leading-[1.8rem] text-[#00000080]">
                                    {courseDetail.course?.description}
                                </p>
                            </div>

                            <div>
                                <h2 className=" font-medium text-[1.6rem] text-[#F9662A] mb-[1rem]">Lessons</h2>
                                <div className="flex gap-x-[3rem]  gap-y-[2rem]   ">
                                    {
                                        courseDetail.course?.lessons?.map((lesson, index) => {
                                            return (
                                                <div
                                                    key={index + 1}
                                                    onMouseEnter={() => { handleVector(index + 1) }}
                                                    onMouseLeave={() => { handleOutVector(index + 1) }}
                                                    className="relative group w-[30%] cursor-pointer">
                                                    <div className="absolute w-full top-[100%] bg-white opacity-0 transition-all duration-500 ease-in-out transform scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100">
                                                        <div className="flex flex-col justify-around p-[1rem] gap-y-[0.6rem] shadow-lg">
                                                            {
                                                                lesson.videos?.map((video, index) => {
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

                                    <span onClick={addToCart} className=" w-[45%] text-center text-[1rem] text-[#F9662A] hover:bg-[#F9662A] hover:text-[white] font-semibold bg-[white] py-[0.6rem] rounded-[0.3rem] border-[2px] border-[#F9662A] shadow-md cursor-pointer">Add to cart</span>

                                    <span
                                        onClick={getCheckout}
                                        className="cursor-pointer w-[45%] text-center text-[1rem] text-[#F9662A] hover:bg-[#F9662A] hover:text-[white] font-semibold bg-[white] py-[0.6rem] rounded-[0.3rem] border-[2px] border-[#F9662A] shadow-md">Buy Now</span>

                                </div>
                            </article>
                        </div>

                    </div>

                </section>
            </div>

            <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">

                {/* <ContainerCards key={5} title={"Marketing Articles"} link={"See all"} array={recommended} /> */}

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
            <ToastContainer/>
        </main>
    )
}