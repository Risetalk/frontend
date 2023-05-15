'use client'

import React, { useState } from 'react';
import Link from "next/link";

export default function FormCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, such as sending it to a server or updating state
  }

  return (
    <form onSubmit={handleSubmit} className='p-8 m-auto flex flex-col w-1/4'>
      <label className=' p-8  flex flex-row'>
        <h2 className=' text-black'>
        Title:    
        </h2> 
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write a title...'/>
      </label>
      <label className=' p-8  flex flex-row'>
        <h2 className=' text-black'>
        Description:
        </h2>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Write a description....' />
      </label>
      <label className=' p-8  flex flex-row'>
        <h2 className=' text-black'>
        Price:
        </h2>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}  className=' text-black'/>
      </label>
      <label className=' p-8  flex flex-row'>
        <h2 className=' text-black'>
        Rating:
        </h2>
        <select value={rating} onChange={(e) => setRating(e.target.value)}  className=' p-16  text-black'>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>
      </label>
      <label className=' p-8  flex flex-row'>
        <h2 className=' text-black'>
        Image:
        </h2>
        <input type="file" onChange={(e) => setImage(e.target.value)} />
      </label>
      <label className=' p-8   flex flex-row'>
        <h2 className=' text-black'>
        Date:
        </h2>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className=' text-black' />
      </label>
      <Link href='create/form-videos'>
      <button type="submit" className='p-3 rounded-full bg-yellow-500 text-black'>Submit</button>
      </Link>
    </form>
  );
}