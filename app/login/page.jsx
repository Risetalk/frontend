'use client'

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";


import { useEffect, useState } from "react";

import validation from "./validation";
import { loginAccess } from "@/store/slice";


export default  function Login() {
    const dispatch = useDispatch()
    const courses = useSelector((state) => state.courses);

    const router = useRouter(); 
    const username = 'nahucham';
    const password = '1234asdfg';


    const [ access, setAccess] = useState (false)
    const [ userData, setUserData] = useState({
        username:'',
        password:''
    })

    const [ errors, setErrors] = useState({
        username:'no',
        password:'no'
    })

    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleOnSubmit = (event) =>{

        const hasErrors = Object.values(errors).every(error => error === "no")
        if (hasErrors && (userData.username === username && userData.password === password)){
            
            dispatch(loginAccess(true))
            event.preventDefault()
        }else{
            
                window.alert('Error al ingresar datos')
                
            
        }

    }


    useEffect(()=>{
        
        // if(courses.access){
        //     router.push('/')
        // }
    },[courses.access])

    return (
        <div className="flex text-black  py-[0.5rem] h-[100vh]">
            <motion.div className="w-[50%]"
            initial={{opacity:0, x:-50}}
            animate={{opacity:1 ,x:0}}
            transition={{duration:1}}>
                
                <Image src={"https://s3-alpha-sig.figma.com/img/8254/7cef/95aac6fc03724e9cf48466ee2c65e717?Expires=1685923200&Signature=AVdO~PF8E4vRiVNO-v~ljA1JH9P9dDT4TLpzO6aWRVeGvT-55Yo93duLBf0HNKp7XYRt2YbY1DQWhoV-QGD8~cb6UyCY9ZFWOj1SM6QMZLdimg~84Bt6RXYN7i2LFVTKxIcU0C80v727iAqfyZiaRrdu-usXg-kxnPccHX7zBlR8Fzc-lM5sSkI4WqjatYXka8U3m~pcCem4mubxv-KrXhfILkSSQ44CE2xHTknouD2YXYY0gD3ISflbvSfEx841L8ovNbF2Op23aGuRd-LBx-7dlzYDrQZk4MR3m9RnMKFckR0~CRNxwxlxTwzhbPfTJHOysRUgs62ST8WSRXR~Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="img-login" width={800} height={500}
                    className="h-[100%] w-[80%] object-cover object-right rounded-r-3xl"
                />
            </motion.div>
            <form action="" className=" w-[50%] h-[100%]" onSubmit={handleOnSubmit}>
                <div  className="flex flex-col items-center justify-between w-[50%] mx-[auto]">
                    <Image onClick={()=>{router.push('/')}} src={"https://s3-alpha-sig.figma.com/img/4912/c528/b482053e4d5d1d82d7eed9e4ea91dd17?Expires=1685923200&Signature=bQ4vf5Y082FcVS1B7vbU2tdMUYDANSUu4XxsohDBFvSI94wLoe~uvY0mGd9Fd~Vck77GsGz76hPL0uXEj9XntjAb~zXNC2xwSf0nEnEDig8-xzkOyH~DpfxX9UHluna1Wq79mcq7czivvaF0Hf3B8hZAO3I9kwRDibzIX4paCkJ7pNCnFDbL0eg6dD-5zARCtbdmgnHiZDtGW1bgSRLE2AJX631U65eh9NmRCf8-8OuZexg9IlSD92W0xR8mkMnQT4ZbdlS8pnLyJK9ZfdXzvbesiqG-sK7cUZ5uWBmZ4gDsmAqGZImHIMlPORqzjOWn52hnVh1cEXu0XFkpWUMCGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                        alt="img-logo"
                        width={300}
                        height={300}
                        className="cursor-pointer"/>
                    <span className="font-normal text-[1rem] leading-[1.5rem]">Welcome to RiseTalk</span>
                    <div className="flex py-[0.625rem] px-[0.75rem] gap-x-4 rounded-[2rem] bg-[#222129A6] my-[3.25rem]">
                        <Link href={`/login`} className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] bg-[#222129] ">Login</Link>
                        <Link href={`/register`} className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] ">Register</Link>
                    </div>

                    {/* <p className="font-normal text-[1rem] text-start leading-[1.5rem] text-[#5B5B5B] mb-[2.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    <div className="flex flex-col w-[100%]">

                        <label htmlFor="">
                            Username
                            <div>
                                <input name="username" type="text" placeholder="Enter you Username" className="font-light text-[0.9rem] leading-[1.3rem] py-[1rem] px-[2rem] rounded-[2.5rem] w-[100%] mt-[0.75rem] mb-[0.2rem]   border-2 border-[#222129]" onChange={handleInputChange} />
                            <h6 className={`${errors.username === 'no' ? 'text-white' :  'text-red-400'} mb-[2rem]`}>{errors.username}</h6>
                            </div>
                        </label>

                        <label htmlFor="">
                            Password
                            <div>
                                <input name="password" type="password" placeholder="Enter you Password" className="font-light text-[0.9rem] leading-[1.3rem] py-[1rem] px-[2rem] rounded-[2.5rem] w-[100%] mt-[0.75rem] mb-[0.2rem] border-2 border-[#222129]" onChange={handleInputChange}/>
                                <h6 className={`${errors.password === 'no' ? 'text-white' :  'text-red-400'} mb-[2rem]`}>{errors.password}</h6>
                            </div>
                        </label>

                    </div>

                    <div className="flex justify-between w-[100%] font-light text-[0.75rem] leading-[1.125rem] px-[0.4rem]">
                        <div >
                            <input type="checkbox" name="" id="" className="mr-[0.5rem]"/>
                            Remember me
                        </div>
                        <Link href={"/login/forgetpassword"}>Forgot Password?</Link>
                    </div>

                    <div className="flex w-[100%] justify-end ">
                        <button onClick={()=>{router.push('/mycourses')}} className="font-normal text-[1.125rem] leading-[1.5rem] text-white py-[0.8rem]  px-[4.5rem] bg-[#222129] rounded-[2.25rem] mt-[3.75rem]">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
