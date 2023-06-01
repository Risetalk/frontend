'use client';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";

export default function PostUser() {
  const user = useSelector((store) => store);
  const [storeUser, setStoreUser] = useState(null);
  const [formPost, setFormPost] = useState({
    userId: "",
    title: "",
    description: "",
    background_image: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verificar que se esté ejecutando en el lado del cliente
      const userData = localStorage.getItem("userGoogle");
      setStoreUser(userData ? JSON.parse(userData) : null);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "background_image") {
      setFormPost({
        ...formPost,
        [name]: files[0],
      });
    } else {
      setFormPost({
        ...formPost,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", formPost.title);
    formData.append("description", formPost.description);
    formData.append("background_image", formPost.background_image);
  
    try {
      const response = await axios.post(
        `http://localhost:3001/post/${storeUser?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className="my-4">
     <div style={{ width: "100vw" }}>
      <Image
        src={"/image 22.png"}
        alt={"image_"}
        className=""
        
        width={1920}
        height={1080}
      />
    </div>
    <div className="w-4/5 bg-gray-100 mx-auto my-auto py-9 mt-6">
      <form onSubmit={handleSubmit} className="mt-4 ">
        <div className="mb-4">
          <label className="block text-sm font-medium">Título:</label>
          <input
            type="text"
            name="title"
            value={formPost.title}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md w-3/4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Descripción:</label>
          <textarea
            name="description"
            value={formPost.description}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md w-3/4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Imagen:</label>
          <input
            type="file"
            name="background_image"
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-3/4"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 font-poppins text-white rounded-md"
        >
          Publicar
        </button>
      </form>
      </div>
    </div>
  );
}
