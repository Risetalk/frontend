"use client";

import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPostUser } from "@/store/slice";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import AddCommentPost from "./addCommentPost";
import { useSession } from "next-auth/react";
import { store } from "@/store/store";
import { useEffect } from "react";
export default function AllPost() {
  const dispatch = useDispatch();
  const [formComment, setFormComment] = useState({
    comment: "",
    userId: "",
    postId: ""
  })
  const { data: session, status } = useSession();
  const [storeUser, setStoreUser] = useState(null);
  const post = useSelector((state) => state.courses);


useEffect(() => {
  if (typeof window !== "undefined") {
   
    const userData = localStorage.getItem("userGoogle");
    setStoreUser(userData ? JSON.parse(userData) : null);
  }
}, []);

    
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/post");
        dispatch(setPostUser(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);  
  
  const handlerSubmit = (id) => {
   
    setFormComment({
      ...formComment,
      userId: storeUser?.id,
      postId: id
    });
  };
  
  const postData = async () => {
    console.log("entra");
    try {
      const dataToSend = {
        ...formComment,
        userId: storeUser?.id
      };
      console.log(dataToSend);
      await axios.post("http://localhost:3001/postcomment", dataToSend);
    } catch (error) {
      console.log({ message: error.message });
    }
  };
  
  useEffect(() => {
    if (formComment.postId !== "" && (formComment.userId !== null || formComment.userId !== undefined)) {
      postData();
    }
  }, [formComment]);
  
 
  
const handlerChange = (e)=>{
  e.preventDefault();
  const {name, value} = e.target
  
  setFormComment({
    ...formComment,
    [name]: value
  })

}
const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

const handleDelete = (id) => {

 
    const deleteData = async () =>{
      try {
        console.log(id);
        const response = await axios.delete(`http://localhost:3001/post/${id}`)
        console.log(response);
      } catch (error) {
        console.log({message: error.message});
      }
      
    }
 
  
  deleteData()
};
    const getPost = post.postUser


    return (
      <div className="flex flex-col justify-center items-center mt-8 border-b border-gray-500">
        {getPost?.map((postItem) => (
          <div key={postItem.first_name} style={{ width: '75vw' }} className=" p-10 m-2">
           
            <div>
              {
                postItem.email === session?.user.email ?
                (<div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
        <span style={{ fontSize: '34px' }}>&#9881;</span>
      </motion.div>
      {isOpen && (
        <motion.ul layout>
         
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>handleDelete(postItem.post.id)}>
            Eliminar
          </motion.li>
        </motion.ul>
      )}
    </div>) : (<div></div>)
              }
            
    </div>
            <div className="text-4xl font-semibold leading-tight text-center font-poppins">{postItem.post.title}</div>
            <div className="text-lg font-normal  py-[2rem] leading-relaxed text-left font-poppins">{postItem.post.description}</div>
            <div className="flex justify-center">
              <Image
                src={postItem.post.background_image}
                alt={postItem.post.background_image}
                className="mx-auto"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center items-center">
  <div className="flex items-center w-full">
    
     <div className="flex flex-col w-full">
     <div className="items-center w-[100px]">
  <div className="text-xs ml-[1rem] block ...">WritenBy</div>
  <div className="inline pr-2">{postItem.first_name}</div>
  <div className="inline">{postItem.last_name}</div>
  </div>

  <div className="flex items-center">
  <Image
    src={postItem.profile_picture}
    alt={postItem.profile_picture}
    className="rounded-full mb-5 mr-4 "
    width={45}
    height={45}
  />
  <div className="ml-2 flex-col w-full">
    <form onSubmit={() => handlerSubmit(postItem.post.id)} className="w-full">
      <div className="flex">
        <textarea
          placeholder="Haz tu comentario..."
          className="rounded-[10px] mt-2 w-11/12 h-14 border-solid border-4 border-light-blue-500"
          type="text"
          name="comment"
          onChange={handlerChange}
        ></textarea>
      </div>
      <div className="mt-2">
        <button type="submit" className="px-4 py-2 mr-14 bg-orange-500 font-poppins text-white rounded-md">Enviar</button>
      </div>
    </form>
  </div>
</div>
<div>
  {postItem.post.post_comments?.map((ele) => {
    return (
      <div key={ele.id} className="rounded-3xl grid grid-cols-3 gap-2 justify-center mt-[20px] bg-gray-100 px-6 pb-4 pt-4">
        <div className="col-span-2 flex items-center ">
          <Image
            src={ele.user.profile_picture}
            alt={ele.user.profile_picture}
            className="inline ... rounded-full"
            width={45}
            height={45}
          />
          <div className="ml-2">
            <div className="inline ... pr-2">{ele.user.first_name}</div>
            <div className="inline ... pr-2">{ele.user.last_name}</div>
          </div>
        </div>
        <div className="col-span-3 font-poppins mt-4">{ele.comment}</div>
      </div>
    );
  })}
</div>
 </div>
</div>
</div>
 </div>
))}
</div>
    );
}
