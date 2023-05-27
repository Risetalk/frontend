"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/slice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Router } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import validate from "./validate";

export default function Register() {
  const [formularioSend, setFormularioSend] = useState(false);
  const notify = (message) => {
    toast.success(message, {
      autoClose: 6000,
    });
  };

  const notifyError = (message) => toast.error(message);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="relative flex text-black  py-[0.5rem] h-[100vh]">
      <motion.div
        className="w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/3e7e/9314/6615600d573353d7a63d3068eab9b88a?Expires=1685318400&Signature=UIZCPiXhZ4toyGEIJJBXSRCuBynBVi5E6C1kduArQO012gd72EDE84eJ3~7R6dtTBghjOHfS4tuGUUGTBA-wJo3IApbNKg7x4elTodoSsqvbcYmRmtBV8tNVUvxYBPFWNLkRlxCdvRq7BnOd3~JpVDnfdrp-LuaFHlo8AO7eCwin1jaZeRQDFVLWJcEwpkyHBfiPMgitqekUUGerjVVTINNVKtzmZx-rd2jBIFwry6pkRiEWTHxl8Op9aBN~S9V7pdQfM0DQs77~n9W2Pj1AxQ8YHvGEOt0~4DnA9HjAYeUK83z6879QoX491s97UWwH0gz-zCMwjLKeS9sTNTl3~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          alt="img-register"
          width={800}
          height={500}
          className="h-[100%] w-[80%] object-cover  rounded-r-3xl"
        />
      </motion.div>

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          user_name: "",
          email: "",
          password: "",
          date_birth: "",
        }}
        validate={validate}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
          setFormularioSend(true);
          setTimeout(() => setFormularioSend(false), 5000);

          try {
            const response = await axios.post(
              "http://localhost:3001/user/register",
              values
            );
            console.log(response);
            notify(
              "User created successfully, check your email to activate your account"
            );
            dispatch(addUser(response.data));
            setTimeout(() => router.push("/login"), 6000);
          } catch (error) {
            console.log(error);
            notifyError("User already exists");
          }
        }}>
        {({ errors }) => (
          <Form className=" w-[50%] h-[100%] ">
            <div className="flex flex-col items-center justify-between w-[70%] mx-[auto]  ">
              <Image
                onClick={() => {
                  router.push("/");
                }}
                src={
                  "https://s3-alpha-sig.figma.com/img/4912/c528/b482053e4d5d1d82d7eed9e4ea91dd17?Expires=1685923200&Signature=bQ4vf5Y082FcVS1B7vbU2tdMUYDANSUu4XxsohDBFvSI94wLoe~uvY0mGd9Fd~Vck77GsGz76hPL0uXEj9XntjAb~zXNC2xwSf0nEnEDig8-xzkOyH~DpfxX9UHluna1Wq79mcq7czivvaF0Hf3B8hZAO3I9kwRDibzIX4paCkJ7pNCnFDbL0eg6dD-5zARCtbdmgnHiZDtGW1bgSRLE2AJX631U65eh9NmRCf8-8OuZexg9IlSD92W0xR8mkMnQT4ZbdlS8pnLyJK9ZfdXzvbesiqG-sK7cUZ5uWBmZ4gDsmAqGZImHIMlPORqzjOWn52hnVh1cEXu0XFkpWUMCGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
                alt="img-logo"
                width={300}
                height={300}
                className="cursor-pointer"
              />
              <span className="font-normal text-[1rem] leading-[1.5rem]">
                Welcome to RiseTalk
              </span>
              <div className="flex py-[0.625rem] px-[0.75rem] gap-x-4 rounded-[2rem] bg-[#222129A6] my-[3rem]">
                <Link
                  href={`/login`}
                  className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] ">
                  Login
                </Link>
                <Link
                  href={`/register`}
                  className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] bg-[#222129]">
                  Register
                </Link>
              </div>

              <div className="flex flex-wrap justify-between w-[100%] gap-y-[0.5rem]">
                <label className=" w-[48%]" htmlFor="">
                  First Name
                  <div>
                    <Field
                      name="first_name"
                      type="text"
                      placeholder="Enter you First Name"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="first_name"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.first_name}
                        </div>
                      )}
                    />
                  </div>
                </label>
                <label className="w-[48%]" htmlFor="">
                  Last Name
                  <div>
                    <Field
                      name="last_name"
                      type="text"
                      placeholder="Enter you Last Name"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="last_name"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.last_name}
                        </div>
                      )}
                    />
                  </div>
                </label>
                <label className="w-[100%]" htmlFor="">
                  Email
                  <div>
                    <Field
                      name="email"
                      type="text"
                      placeholder="Enter you Email"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.email}
                        </div>
                      )}
                    />
                  </div>
                </label>
                <label className="w-[62%]" htmlFor="">
                  Username
                  <div>
                    <Field
                      name="user_name"
                      type="text"
                      placeholder="Enter you Username"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.2rem] w-[100%] mt-[0.2rem] mb-[0.2rem]   border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="user_name"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.user_name}
                        </div>
                      )}
                    />
                  </div>
                </label>

                <label className="w-[34%]" htmlFor="">
                  Date Birth
                  <div>
                    <Field
                      name="date_birth"
                      type="date"
                      placeholder="Enter you Password"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem] border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="date_birth"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.date_birth}
                        </div>
                      )}
                    />
                  </div>
                </label>

                <label className="w-[100%]" htmlFor="">
                  Password
                  <div>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter you Password"
                      className="font-light text-[0.9rem] leading-[1.3rem] py-[0.6rem] px-[1rem] rounded-[1.6rem] w-[100%] mt-[0.2rem] mb-[0.2rem] border-2 border-[#222129]"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="text-red-500 text-xs">
                          {errors.password}
                        </div>
                      )}
                    />
                  </div>
                </label>
              </div>

              <div className="flex justify-between w-[100%] font-light text-[0.75rem] leading-[1.125rem] px-[0.4rem] mt-[1em]">
                <div>
                  <input
                    type="checkbox"
                    name="is_tutor"
                    className="mr-[0.5rem]"
                  />
                  Count tutor
                </div>
              </div>

              <div className="flex w-[100%] justify-end ">
                <button
                  type="submit"
                  className="font-normal text-[1.125rem] leading-[1.5rem] text-white py-[0.8rem]  px-[4.5rem] bg-[#222129] rounded-[2.25rem] mt-[2rem] ">
                  Register
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}
