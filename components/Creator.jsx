import Image from "next/image"

export default function Creator({title, image, description}){
    return (
        <article className="w-[30%] mt-[11rem]">
            <div className="relative text-center pt-[7rem] px-[3rem] pb-[1.875rem] shadow-2xl">
                <Image className="absolute w-[200px] h-[200px] object-cover top-[-100px] bottom-[50px] left-0 right-0 mx-[auto]" src={image} alt="creator" width={300} height={300}/>
                <h3 className="font-medium text-[1.5rem] leading-[2.25rem] text-[#252641] mb-[1.25rem]">{title}</h3>
                <p className="font-normal text-4 leading-8 text-[#696984] ">{description}</p>
            </div>
        </article>
    )
}