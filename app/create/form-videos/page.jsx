'use client'

import React, { useState } from 'react';
import Image from 'next/image';

function VideoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="flex">
    
      <div className="bg-gray-200 w-1/4 p-4 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image src="/Image Circle.png" alt="User Image" width={68} height={68} />
        </div>
        <h1 className="text-xs mt-2 text-black font-roboto font-medium">User Name</h1>
        <div className="mt-4">
  <h1 className="text-l mt-4 text-black font-roboto font-medium">Create a course</h1>
  <h1 className="text-l mt-2 text-black font-roboto font-medium">Upload Videos</h1>
  <h1 className="text-l mt-2 text-black font-roboto font-medium">My Content</h1>
        </div>
      </div>
      
   
      <div className="w-3/4 p-8">
      <h1 className='text-black mr-4 text-center'>
                Add a new video
            </h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='flex flex-row mb-4'>
           
            <h1 className='text-black mr-4'>
              Title:  
            </h1> 
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='text-black' placeholder='Write a title....'/>
          </label>
          <label className='flex flex-row mb-4'>
            <h1 className='text-black mr-4'>
              Description:
            </h1>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='text-black' placeholder='Write a description....'/>
          </label>
          <label className='flex flex-row mb-4'>
            <h1 className='text-black mr-4'>
              Video URL:
            </h1>
            <input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} className='text-black' placeholder='Upload a video...'/>
          </label>
          <button className='p-3 rounded-full  bg-yellow-500  text-black' type="submit">Add Video</button>
        </form>
      </div>
    </div>
  );
}

export default VideoForm;


