'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ContainerOffers from '@/components/ContainerOffers'
import ContainerCards from '@/components/ContainerCards'
import SearchCourses from '../../components/SearchCourses'

import Selectors from '@/components/Selectors'
import { resetPage, searchCourses } from '@/store/slice'
import { useDispatch } from 'react-redux'
import ScrollInfinite from '@/components/ScrollInfinite'
import { getCategories } from '@/store/slice'
import axios from 'axios'

export default function SearchPage() {

  const dispatch = useDispatch();

  const addCategories = async() =>{
    const {data} = await axios.get("http://46.101.105.17:3001/category")
    dispatch(getCategories(data.result))
}

  const handleChange = (event) => {
    const value = event.target.value
    const newValue = value.toLowerCase()
    dispatch(searchCourses(newValue))
    dispatch(resetPage())
  }


  useEffect(()=>{
    addCategories()
    localStorage.setItem('my_cart', JSON.stringify([]))
  },[])

  return (
    <div>
      <div className='relative'>
        <Image
          src='/image14.png'
          alt='SearchBar Background'
          className='rounded-0'
          width={1920}
          height={332}
        />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[65rem] mx-auto bg-white rounded-full shadow-lg z-10'>
          <div className='flex items-center w-full px-4 py-[1rem] text-black'>
            <span className='mr-4 text-gray-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg>
            </span>
            <input type="text" placeholder='Search your favourite course' onChange={handleChange} className='block w-[90%] text-black outline-none' />
          </div>
        </div>
        <Selectors />

      </div>
      
      <ScrollInfinite/>


    </div>
  )
}