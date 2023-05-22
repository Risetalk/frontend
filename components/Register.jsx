'use client'
import Link from "next/link"
import Image from "next/image"
import validationRegister from "@/app/login/validateRegister"

import axios from "axios"

import { motion } from "framer-motion"

import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "@/store/slice"
import { useState } from "react"


export default function Register() {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)
    const router = useRouter()

    // const [messageRegister, setMessageRegister] = useState(false)
    const [message, setMessage] = useState('no')

    const [register, setRegister] = useState(
        {
            first_name: "",
            last_name: "",
            user_name: "",
            email: "",
            password: "",
            date_birth: "",
            is_tutor:false,
        }
    )
    const [errors, setErrors] = useState(
        {
            first_name: "no",
            last_name: "no",
            user_name: "no",
            email: "no",
            password: "no",
            date_birth: "no",
        }
    )

    const handleChecked = (event) =>{
        const {checked} = event.target;
        if(checked){
            setRegister({
                ...register,
                is_tutor:true,
            })
        }else{
            setRegister({
                ...register,
                is_tutor:false,
            })
        }
    }

    const handleRegister = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value,
        })
    }

    const handleError = () => {
        setErrors(validationRegister(register))
    }


    const handleOnSubmit = async (event) => {
        // console.log(register);
        // const hasErrors = Object.values(errors).every(error => error === "No hay error")

        // if (hasErrors ){

            const getDataRegister = async () => {
                try {
                    const response = await axios.post("http://localhost:3001/user/register", register);
                    const message =  response.data
                    console.log(message.message);
                    setMessage(message.message)
                    // setMessageRegister(true)
                } catch (error) {
                    console.error("Error getting data:", error);
                }
            };
    
            getDataRegister();
            
            event.preventDefault()
        // }else{
        //     window.alert('Revisa  tus datos')
        //     event.preventDefault()
        // }
        
        // const res = await axios.post('http://localhost:3001/register', register)
        // console.log(res);
        // .then(response => { dispatch(addUser(response.data)) })
    }


    return (
        <div className="relative flex text-black  py-[0.5rem] h-[100vh]">
            {
                message !== 'no'
                ? <div className="absolute  bg-green-500 rounded-[0.6rem] left-[15%] top-[10%]">
                    <span className=" block font-semibold text-white py-[0.6rem] px-[1rem] rounded-[0.6rem]">{`${message}. Confirm the message we send to your email.`}</span>
                </div>
                : <></>
            }
            <motion.div className="w-[50%]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <Image src={"https://s3-alpha-sig.figma.com/img/3e7e/9314/6615600d573353d7a63d3068eab9b88a?Expires=1685318400&Signature=UIZCPiXhZ4toyGEIJJBXSRCuBynBVi5E6C1kduArQO012gd72EDE84eJ3~7R6dtTBghjOHfS4tuGUUGTBA-wJo3IApbNKg7x4elTodoSsqvbcYmRmtBV8tNVUvxYBPFWNLkRlxCdvRq7BnOd3~JpVDnfdrp-LuaFHlo8AO7eCwin1jaZeRQDFVLWJcEwpkyHBfiPMgitqekUUGerjVVTINNVKtzmZx-rd2jBIFwry6pkRiEWTHxl8Op9aBN~S9V7pdQfM0DQs77~n9W2Pj1AxQ8YHvGEOt0~4DnA9HjAYeUK83z6879QoX491s97UWwH0gz-zCMwjLKeS9sTNTl3~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="img-register" width={800} height={500}
                    className="h-[100%] w-[80%] object-cover  rounded-r-3xl"
                />
            </motion.div>
            {/* onSubmit={()=>{console.log('handSubmit')}} */}
            <form action="" className=" w-[50%] h-[100%]" onSubmit={handleOnSubmit}>
                <div className="flex flex-col items-center justify-between w-[70%] mx-[auto]  ">
                    <Image
                        onClick={() => { router.push('/') }}
                        src={"https://s3-alpha-sig.figma.com/img/4912/c528/b482053e4d5d1d82d7eed9e4ea91dd17?Expires=1684713600&Signature=TtxwQiQQLKS0Zvwz0N4ZNMcW~ghCB6bdMNl5646YzRXetQwjegTZHXorXm59Ctbb2fVP8FLtG0TczcxN4uQuLBQjQI2G4cueIsMG3ncsBa1rIqOavXVL4oPDZ2f7oIbUaSdKZs8c8~nXvVFIOiludUnMUohRqNPxLMxADQBpeEtQSGbCgqhyJHS6CutKQVG~RPfDkGDY6MBalOpNh7cri7Pl8ZyJKJQCaUQ37eC8z-8JwJNRLQLVX6WHhbVep74kz8kIjP9ihYR0W3rFMA1kgqa--1zLN1mDAxDmoyJpbvHkkd~vxjhgjug1E5t9FW7ohCdf12dEKwBJur~Gq58PrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                        alt="img-logo"
                        width={300}
                        height={300}
                        className="cursor-pointer" />
                    <span className="font-normal text-[1rem] leading-[1.5rem]">Welcome to RiseTalk</span>
                    <div className="flex py-[0.625rem] px-[0.75rem] gap-x-4 rounded-[2rem] bg-[#222129A6] my-[1rem]">
                        <Link href={`/login`} className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] ">Login</Link>
                        <Link href={`/register`} className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] bg-[#222129]">Register</Link>
                    </div>

                    <div className="flex flex-wrap justify-between w-[100%] gap-y-[0.2rem]">

                        <label className=" w-[48%]" htmlFor="">
                            First Name
                            <div>
                                <input onChange={handleRegister} name="first_name" type="text" placeholder="Enter you First Name" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]" />
                                {
                                    errors.first_name === "no"
                                        ? <div className=" h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.first_name}`}</span>
                                        </div>
                                }
                            </div>
                        </label>
                        <label className="w-[48%]" htmlFor="">
                            Last Name
                            <div>
                                <input onChange={handleRegister} name="last_name" type="text" placeholder="Enter you Last Name" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]" />
                                {
                                    errors.last_name === "no"
                                        ? <div className="h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.last_name}`}</span>
                                        </div>
                                }
                            </div>
                        </label>
                        <label className="w-[100%]" htmlFor="">
                            Email
                            <div>
                                <input onChange={handleRegister} name="email" type="text" placeholder="Enter you Email" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]" />
                                {
                                    errors.email === "no"
                                        ? <div className="h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.email}`}</span>
                                        </div>
                                }
                            </div>
                        </label>
                        <label className="w-[62%]" htmlFor="">
                            Username
                            <div>
                                <input onChange={handleRegister} name="user_name" type="text" placeholder="Enter you Username" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]" />
                                {
                                    errors.user_name === "no"
                                        ? <div className="h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.user_name}`}</span>
                                        </div>
                                }
                            </div>
                        </label>

                        <label className="w-[34%]" htmlFor="">
                            Date Birth
                            <div>
                                <input onChange={handleRegister} name="date_birth" type="date" placeholder="Enter you Password" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem] border-2 border-[#222129]" />
                                {
                                    errors.date_birth === "no"
                                        ? <div className="h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.date_birth}`}</span>
                                        </div>
                                }
                            </div>
                        </label>

                        <label className="w-[100%]" htmlFor="">
                            Password
                            <div>
                                <input onChange={handleRegister} name="password" type="password" placeholder="Enter you Password" className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem] border-2 border-[#222129]" />
                                {
                                    errors.password === "no"
                                        ? <div className="h-[1.6rem] "></div>
                                        : <div className="h-[1.6rem] ">
                                            <span className="text-[#F87171]">{`*${errors.password}`}</span>
                                        </div>
                                }
                            </div>
                        </label>

                    </div>

                    <div className="flex justify-between w-[100%] font-normal text-[1.2rem] leading-[1.125rem] px-[0.4rem] mt-[1em]">
                        <div >
                            <input type="checkbox" name="is_tutor" id="" className="mr-[0.5rem]" 
                            onChange={handleChecked}
                            />
                            count tutor
                        </div>
                    </div>

                    <div className="flex w-[100%] justify-end ">

                        <button
                            className="font-normal text-[1.125rem] leading-[1.5rem] text-white py-[0.8rem]  px-[4.5rem] bg-[#222129] rounded-[2.25rem] mt-[2rem] "
                            onClick={handleError}
                        >Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}