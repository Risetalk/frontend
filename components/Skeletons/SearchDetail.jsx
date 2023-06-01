import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";
import Link from "next/link";

export default function SearchDetailSkeleton() {
    return (
        <div className="">
            <section className="flex justify-center w-[90%] mx-[auto] py-[7rem] gap-x-[2rem] ">
                <div className="w-[60%] ">
                    <div className="flex flex-col  w-[100%] h-[100%]">
                        <div className="flex gap-x-[1rem]">
                            <div>
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={200} height={50} />
                            </div>
                        </div>
                        <h1 className="font-black text-[5rem] text-[#000000] ]"><Skeleton className=" animate-pulse transition-colors duration-300" /></h1>
                        <div className="flex items-center justify-between gap-x-[1rem] mt-[1rem] w-[85%] ">

                            <div className="flex justify-between my-[1rem w-[100%]">
                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-x-[1rem] mt-[3rem] w-[85%] ">

                            <div className="flex justify-between my-[1rem w-[100%]">
                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                                <div className="flex flex-col  gap-x-[0.4rem]">
                                    <span className="font-medium text-[1.25rem] leading-[1.9rem] text-[#222129]"><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={50} /></span>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col gap-y-[0.6rem] mt-[2rem]">
                            <h2 className="font-medium text-[1.6rem] text-[#F9662A]"><Skeleton className=" animate-pulse transition-colors duration-300" width={200} height={40}/></h2>
                            <p className="font-normal text-[1.25rem] leading-[1.8rem] text-[#00000080]"><Skeleton className=" animate-pulse transition-colors duration-300" width={500} height={30}/></p>
                        </div>

                        <div className="mt-[2rem]">
                            <h2 className=" font-medium text-[1.6rem] text-[#F9662A] mb-[1rem]"><Skeleton className=" animate-pulse transition-colors duration-300" width={160} height={40}/></h2>
                            <div className="flex gap-x-[3rem]  gap-y-[2rem]   ">
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={200} height={60}/>
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={200} height={60}/>
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={200} height={60}/>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[25%] ">

                    <div className="w-[100%] mx-[auto]  bg-[white] border-[#222129] border-[2px] h-[fit-content]">
                        <Skeleton className=" animate-pulse transition-colors duration-300"  height={200} />
                        <article className="flex flex-col gap-y-[0.8rem] px-[2.4rem] pt-[1.6rem]">
                            <Skeleton className=" animate-pulse transition-colors duration-300" width={170} height={30}/>
                            <div className="flex flex-col items-start gap-x-[0.4rem]">
                                <Skeleton className="my-[0.4rem] animate-pulse transition-colors duration-300" width={150} height={25}/>
                                <Skeleton className="my-[0.4rem] animate-pulse transition-colors duration-300" width={150} height={25}/>
                                <Skeleton className="my-[0.4rem] animate-pulse transition-colors duration-300" width={150} height={25}/>
                                <Skeleton className="my-[0.4rem] animate-pulse transition-colors duration-300" width={150} height={25}/>
                                <Skeleton className="my-[0.4rem] animate-pulse transition-colors duration-300" width={150} height={25}/>
                                <Skeleton className="mt-[1rem] animate-pulse transition-colors duration-300" width={100} height={50}/>
                            </div>
                        </article >
                        <article className="flex flex-col h-[fit-content] px-[2.4rem] py-[1.6rem]">
                            <div className="flex justify-between">
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={100} height={40} />
                                <Skeleton className=" animate-pulse transition-colors duration-300" width={100} height={40} />


                            </div>
                        </article>
                    </div>

                </div>

            </section>
        </div>
    )
}