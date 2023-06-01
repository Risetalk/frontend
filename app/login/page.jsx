"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import LoginGoogle from "@/components/GoogleAuth/LoginGoogle";
import { ToastContainer, toast } from "react-toastify";
import { loginSuccess, logoutSuccess } from "@/store/slice.js";
import { useSelector, useDispatch } from "react-redux";
import { Router } from "next/router";

const Login = () => {
  const [formularioSend, setFormularioSend] = useState(false);
  const notify = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex text-black  py-[0.5rem] h-[100vh]">
          <motion.div
            className="w-[50%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/8254/7cef/95aac6fc03724e9cf48466ee2c65e717?Expires=1685923200&Signature=AVdO~PF8E4vRiVNO-v~ljA1JH9P9dDT4TLpzO6aWRVeGvT-55Yo93duLBf0HNKp7XYRt2YbY1DQWhoV-QGD8~cb6UyCY9ZFWOj1SM6QMZLdimg~84Bt6RXYN7i2LFVTKxIcU0C80v727iAqfyZiaRrdu-usXg-kxnPccHX7zBlR8Fzc-lM5sSkI4WqjatYXka8U3m~pcCem4mubxv-KrXhfILkSSQ44CE2xHTknouD2YXYY0gD3ISflbvSfEx841L8ovNbF2Op23aGuRd-LBx-7dlzYDrQZk4MR3m9RnMKFckR0~CRNxwxlxTwzhbPfTJHOysRUgs62ST8WSRXR~Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              }
              alt="img-login"
              width={800}
              height={500}
              className="h-[100%] w-[80%] object-cover object-right rounded-r-3xl"
            />
          </motion.div>

          <div className="flex flex-col gap-y-[1rem]  justify-start w-[50%]  pb-[2rem]">


            <div>
              <Formik
                className="mb-4 flex "
                initialValues={{ email: "", password: "", }} validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password.length < 8) {
                    errors.password = "Password must be at least 8 characters";
                  }
                  return errors;
                }}
                onSubmit={async (values, { resetForm }) => {
                  resetForm();
                  setFormularioSend(true);
                  setTimeout(() => setFormularioSend(false), 5000);

                  try {
                    const { data } = await axios.post(
                      "http://46.101.105.17:3001/user/login",
                      values
                    );
                    localStorage.setItem("user", JSON.stringify(data));

                    await axios.post("/api/auth/login", data.token);
                    dispatch(loginSuccess(data));
                    notify("Login Success!");
                    router.push("/");
                  } catch (error) {
                    notifyError("Error getting data: " + error.message);
                  }
                }}>
                {({ errors }) => (
                  <div className=" w-[100%] h-[50%]">
                    <Form action="" >
                      <div className="flex flex-col items-center justify-between w-[50%] mx-[auto]">
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
                        <div className="flex py-[0.625rem] px-[0.75rem] gap-x-4 rounded-[2rem] bg-[#222129A6] my-[1rem]">
                          <Link
                            href={`/login`}
                            className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] bg-[#222129] ">
                            Login
                          </Link>
                          <Link
                            href={`/register`}
                            className="font-medium text-4 leading-[2.5rem] text-white px-[3rem] rounded-[2rem] ">
                            Register
                          </Link>
                        </div>

                        <div className="flex flex-col w-[100%] mt-4">
                          <label htmlFor="">
                            Email
                            <div>
                              <Field
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                className="font-light text-[0.9rem] leading-[1.3rem] py-[1rem] px-[2rem] rounded-[2.5rem] w-[100%] mt-[0.5rem] mb-[1.5rem]  border-2 border-[#222129]"
                              />
                              <ErrorMessage
                                name="email"
                                component={() => (
                                  <div className="text-red-500">{errors.email}</div>
                                )}
                              />
                            </div>
                          </label>

                          <label htmlFor="">
                            Password
                            <div>
                              <Field
                                name="password"
                                type="password"
                                placeholder="Enter you Password"
                                className="font-light text-[0.9rem]  leading-[1.3rem] py-[1rem] px-[2rem] rounded-[2.5rem] w-[100%] mt-[0.5rem] mb-[1rem] border-2 border-[#222129]"
                              />
                              <ErrorMessage
                                name="password"
                                component={() => (
                                  <div className="text-red-500">
                                    {errors.password}
                                  </div>
                                )}
                              />
                            </div>
                          </label>
                        </div>

                        <div className="flex justify-between w-[100%] font-light text-[0.75rem] leading-[1.125rem] px-[0.4rem] mt-4">
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="mr-[0.5rem]"
                            />
                            Remember me
                          </div>
                          <Link href={"/login/forgetpassword"}>
                            Forgot Password?
                          </Link>
                        </div>

                        <div className="flex w-[100%] justify-end mb-4">
                          <div style={{ marginTop: "2em" }}>
                            <button
                              type="submit"
                              className="font-normal text-[1.125rem] leading-[1.5rem] text-white py-[0.8rem] px-[4.5rem] bg-[#222129] rounded-[2.25rem] mt-[1.75rem]">
                              Login
                            </button>
                          </div>
                        </div>

                        <hr className=" w-full bg-gray-200" />
                      </div>
                    </Form>

                  </div>
                )}
              </Formik>
            </div>

            <div className="w-[fit-content] mx-[auto]">

              <LoginGoogle />

            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
export default Login;