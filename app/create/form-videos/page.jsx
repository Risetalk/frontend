'use client'

import React, { useState } from 'react';

function VideoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, such as sending it to a server or updating state
  }

  return (
    <form onSubmit={handleSubmit} className='p-8 m-auto flex flex-col w-1/4'>
      <label  className=' p-8  flex flex-row'>
        <h1 className=' text-black'>
        Title:  
        </h1> 
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=' text-black' placeholder='Write a title....'/>
      </label>
      <label  className=' p-8  flex flex-row'>
        <h1 className=' text-black'>

        Description:
        </h1>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  className=' text-black' placeholder='Write a description....'/>
      </label>
      <label  className=' p-8  flex flex-row'>
        <h1 className=' text-black'>
        Video URL:

        </h1>
        <input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)}  className=' text-black' placeholder='Upload a video...'/>
      </label>
      <button className='p-3 rounded-full bg-yellow-500 text-black' type="submit">Submit</button>
    </form>
  );
}

export default VideoForm;
