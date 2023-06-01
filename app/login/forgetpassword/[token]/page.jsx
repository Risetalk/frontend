"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function ResetPassword() {
  const notify = () => {
    toast.success("Password changed successfully", {
      autoClose: 6000,
    });
  };

  const notifyError = () =>
    toast.error("Error. Your password has already been changed.");
  const router = useRouter();
  const path = usePathname();

  const idPath = path.split("/").pop();

  const handlerSubmit = async (values, { resetForm }) => {
    resetForm();
    try {
      await axios.get(`https://backend-production-ea3f.up.railway.app/user/olvide-password/${idPath}`);

      const { data } = await axios.post(
        `https://backend-production-ea3f.up.railway.app/user/olvide-password/${idPath}`,
        values
      );
      console.log(data);
      notify();
    setTimeout(() => {
      router.push('/login');
    }, 2000);
     
    } catch (error) {
      console.log(error);
      notifyError();
    }
  };
  
  return (
    <>
      <main className="relative flex flex-col items-center justify-center p-4 space-y-4 antialiased text-gray-900 max-w-4xl mx-auto mt-24">
        <div className="h-[100px] w-[fit-content] mx-auto absolute top-[-6rem]"></div>
        <div className="w-full px-[4rem] max-w-lg space-y-6 bg-gray-300 rounded-[25px] py-16">
          <motion.h1
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Reset your password
          </motion.h1>
          <p className="text-center">Please, enter your new password.</p>
          <Formik
            initialValues={{
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = "Required";
              } else if (
                !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
              ) {
                errors.password = "Invalid password";
              }
              return errors;
            }}
            onSubmit={handlerSubmit}>
            {({ errors }) => (
              <Form action="#" className="space-y-6 w-ful">
                <Field
                  className="w-full px-4 py-2 border rounded-[4rem] focus:outline-none focus:ring focus:ring-primary-100"
                  type="password"
                  name="password"
                  placeholder="New password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                />

                <div className="pl-[6.9rem]">
                  <button
                    type="submit"
                    className="w-[10rem] px-[1rem] py-2 font-medium rounded-[5rem] text-white bg-black transition-colors duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-sm text-gray-600 items-center flex justify-between">
          <Link href="/login">
            <p className="text-gray-800 cursor-pointer hover:text-gray-900 inline-flex items-center ml-4">
              ⬅ Back
            </p>
          </Link>
        </div>
        <Link href="/">
          <p className="hover:text-orange-500 cursor-pointer ml-[1rem]">
            Need help?
          </p>
        </Link>
      </main>
      <ToastContainer />
    </>
  );
}
