import { useDispatch, useSelector } from "react-redux"
import { filterCoursesCategory, filterCoursesRaiting, filterCoursesOrder, filterCoursesLanguaje, resetPage } from "@/store/slice";
import { useState } from "react";


export default function Selectors() {

    const [searchTerm, setSearchTerm] = useState("");

    const categories = useSelector(state => state.courses.categories)
    const dispatch = useDispatch()


    return (
        <div>
            <div className='absolute bottom-[3rem] left-1/2 -translate-x-1/2 mb-4'>
                <div className='flex justify-center'>
                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none' defaultValue={"category"}
                    onChange={(event)=>{
                        dispatch(filterCoursesCategory(event.target.value))
                        dispatch(resetPage())
                    }}
                    >
                        <option value="category" disabled >Category</option>
                        <option value="all" >All</option>
                        {categories.map((cat,index)=>{
                            return <option value={cat.id} key={index}>{cat.title}</option>
                        })}

                        {/* <option value={categories.map(cat => {
                            if( cat.title === "Data Science"){
                                return cat.id
                            }
                        })} >Data Science</option> */}


                        {/* <option value={categories.map(cat => {
                            if( cat.title === "design"){
                                console.log(cat.id);
                                return cat.id
                            }
                        })}>Design</option>
                        <option value={categories.map(cat => {
                            if( cat.title === "Development"){
                                return cat.id
                            }
                        })}>Development</option>
                        <option value={categories.map(cat => {
                            if( cat.title === "Business"){
                                return cat.id
                            }
                        })}>Business</option>
                        <option value={categories.map(cat => {
                            if( cat.title === "Marketing"){
                                return cat.id
                            }
                        })}>Marketing</option> */}
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none' defaultValue={"raiting"}
                    onChange={(event)=>{
                        dispatch(filterCoursesRaiting(event.target.value))
                    }}
                    >
                        <option value="raiting" disabled>Raiting</option>
                        <option value="max">max</option>
                        <option value="min">min</option>
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none' defaultValue={"order"}
                    onChange={(event)=>{
                        dispatch(filterCoursesOrder(event.target.value))
                    }}
                    >
                        <option value="order" disabled>Order</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none' defaultValue={"languaje"}
                    onChange={(event)=>{
                        dispatch(filterCoursesLanguaje(event.target.value))
                        dispatch(resetPage())
                    }}
                    >
                        <option value="languaje" disabled>Languaje</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                    </select>

                </div>
            </div>
        </div>
    )
}