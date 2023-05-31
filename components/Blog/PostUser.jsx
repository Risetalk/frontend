'use client';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PostUser() {
  const user = useSelector((store) => store);

  const [formPost, setFormPost] = useState({
    userId: "",
    title: "",
    description: "",
    background_image: null, // Cambiado a null en lugar de una cadena vacía
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "background_image") {
      // Si el campo es el input de archivo, almacenar el archivo en el estado
      setFormPost({
        ...formPost,
        [name]: files[0],
      });
    } else {
      // Para otros campos, actualizar el valor como antes
      setFormPost({
        ...formPost,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", formPost.userId);
    formData.append("title", formPost.title);
    formData.append("description", formPost.description);
    formData.append("background_image", formPost.background_image);

    

    try {
      const response = await axios.post(
        `http://localhost:3001/post/${formPost.userId}`,
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
  <h3 className="text-lg font-semibold">Crea tu post:</h3>
  <form onSubmit={handleSubmit} className="mt-4">
    
    <div className="mb-4">
      <label className="block text-sm font-medium">Título:</label>
      <input
        type="text"
        name="title"
        value={formPost.title}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium">Descripción:</label>
      <textarea
        name="description"
        value={formPost.description}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md w-full"
      ></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium">Imagen:</label>
      <input
        type="file"
        name="background_image"
        onChange={handleChange}
        className="border border-gray-300 rounded-md w-full"
      />
    </div>
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Publicar
    </button>
  </form>
</div>
  );
}
