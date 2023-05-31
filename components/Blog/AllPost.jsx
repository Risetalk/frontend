"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPostUser } from "@/store/slice";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import AddCommentPost from "./addCommentPost";
import { useSession } from "next-auth/react";
import { store } from "@/store/store";

export default function AllPost() {
  const dispatch = useDispatch();
  const [formComment, setFormComment] = useState({
    comment: "",
    userId: "",
    postId: ""
  })
  const { data: session, status } = useSession();
  
  const post = useSelector((state) => state.courses);
  const storeUser = localStorage.getItem("user");
  console.log(storeUser);
 
    
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
     
    
  const handlerSubmit = async (id) => {
    setFormComment({
      ...formComment,
      postId: id
    });
  };

  useEffect(() => {
    const postData = async () => {
      try {
       
        await axios.post("http://localhost:3001/postcomment", formComment);
      } catch (error) {
        console.log({ message: error.message });
      }
    };

    if (formComment.postId !== "") {
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

// const handleEdit = () => {
//   // Lógica para manejar la opción "Editar"
//   console.log("Editar opción seleccionada");
// };

const handleDelete = (id) => {
  // Lógica para manejar la opción "Eliminar"
  const deleteData = () =>{
    console.log(id);
  }
  deleteData()
};
    const getPost = post.postUser


    return (
      <div className="flex flex-col justify-center items-center mt-8">
        {getPost?.map((postItem) => (
          <div key={postItem.first_name} style={{ width: '75vw' }} className="bg-gray-200 p-10 m-2">
            <div className="flex items-start">
              <Image
                src={postItem.profile_picture}
                alt={postItem.profile_picture}
                className="inline ... rounded-full"
                width={45}
                height={45}
              />
              <div className="inline text-left ml-2">
                <div>{postItem.first_name}</div>
                <div>{postItem.last_name}</div>
                
              </div>
              
            </div>
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
         
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>handleDelete(postItem.id)}>
            Eliminar
          </motion.li>
        </motion.ul>
      )}
    </div>) : (<div></div>)
              }
            
    </div>
            <div>{postItem.post.title}</div>
            <div>{postItem.post.description}</div>
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
    {session?.user?.image ? (
      <label>
        <Image
          src={session.user.image}
          alt={session.user.email}
          className="inline ... rounded-full mt-7 mr-2"
          width={45}
          height={45}
        />
      </label>
    ) : (
      <label>
        <Image
          src={"https://ionicframework.com/docs/img/demos/avatar.svg"}
          alt={"default"}
          className="inline ... rounded-full"
          width={45}
          height={45}
        />
      </label>
    )}
    <div className="flex flex-col w-full">
      <form onSubmit={()=>handlerSubmit(postItem.post.id)}>
      <input
        type="text"
        placeholder="Id del usuario hasta arreglar..."
        className="w-full mt-7"
        name="userId"
        onChange={handlerChange}
      />
      <textarea
        placeholder="Haz tu comentario..."
        className=" rounded-[10px] mt-2 w-full h-14"
        type="text"
        name="comment"
        onChange={handlerChange}
      ></textarea>
      
      <button type="submit">Enviar</button>
      </form>
      <div>
        {postItem.post.post_comments?.map((ele)=>{
         return( 
          
         <div>
          <div>
          <Image
          src={ele.user.profile_picture}
          alt={ele.user.profile_picture}
          className="inline ... rounded-full"
          width={45}
          height={45}
        />
         
          </div>
          <div>
            {ele.user.first_name}
          </div>
          <div>
            {ele.user.last_name}
          </div>
          <div>
          {ele.comment}
          </div>
         </div>

         )
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
