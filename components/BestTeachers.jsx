import React from 'react'

export default function BestTeachers() {

    const users = [
        {
          "name": "John Doe",
          "profile_image": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          "name": "Jane Smith",
          "profile_image": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          "name": "David Johnson",
          "profile_image": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          "name": "Emily Davis",
          "profile_image": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          "name": "Michael Brown",
          "profile_image": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          "name": "Ashley Wilson",
          "profile_image": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
          "name": "Christopher Lee",
          "profile_image": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          "name": "Maria Martinez",
          "profile_image": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          "name": "Daniel Taylor",
          "profile_image": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          "name": "Olivia Anderson",
          "profile_image": "https://randomuser.me/api/portraits/women/10.jpg"
        }
      ];
  return (
    <div className=' p-40'>
    <div className=' w-3/4'>
    <h1 className=' font-bold text-[1.6rem] leading-[2.6rem] text-[#000000]'>Course Creation Form</h1>
    <h2 className=' font-medium text-[1.6rem] leading-[2.6rem] text-[#687684]'>Best Teachers</h2>
    <div className=' flex flex-row gap-x-[50px] '>
      {users.map((teacher) => {
        return (
          
          <div className=' flex flex-row '>
              <div className='flex flex-col items-center'>
                  <div>
                      <img src={teacher.profile_image} alt="Teacher" className='rounded-full w-12' />
                  </div>
                  <h3 className='text-black text-center'>{teacher.name}</h3>
              </div>
          </div>
        )
      })}
    </div>
  </div>
  </div>
  )
}
