"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword() {
  const notify = (message) => {
    toast.success(message, {
      autoClose: 6000,
    });
  };

  const notifyError = (message) => toast.error(message);
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };
  return (
    <>
      <main className="flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 max-w-4xl mx-auto  mt-24">
        <div className="w-full px-[4rem] max-w-lg space-y-6 bg-gray-300 rounded-[25px] py-16">
          <motion.h1
            className="text-3xl font-bold text-center"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
            }}>
            Forgot your password?
          </motion.h1>
          <p className="text-center">
            Please, enter your email address below. You will receive a link to
            create a new password via email.
          </p>
          <Formik
            initialValues={{
              email: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={async (values, { resetForm }) => {
              resetForm();
              try {
                const { data } = await axios.post(
                  "http://46.101.105.17:3001/user/olvide-password",
                  values
                );

                notify("Email sent successfully");
              } catch (error) {
                console.log(error);
                notifyError("Email not sent, please check your email");
              }
            }}>
            {({ errors }) => (
              <Form action="#" className="space-y-6 w-ful">
                <Field
                  className="w-full px-4 py-2 border rounded-[4rem] focus:outline-none focus:ring focus:ring-primary-100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                />
                <div className="pl-[6.9rem]">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[10rem] px-[1rem] py-2 font-medium rounded-[5rem] text-white bg-black transition-colors duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                    Send
                  </motion.button>
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
