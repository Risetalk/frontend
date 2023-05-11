import Image from "next/image";


export default function Course({img,title,tema,duration,description,imgAuthor,author,price,offer,id}){
    return (
        <article className="pt-4 px-4 bg-[white] pb-6 rounded-[1.25rem] shadow-2xl" key={id}>
                                <Image className="rounded-[1.25rem] h-[200px] object-cover w-[100%]" src={img} alt={title} width={300}
                                    height={300} />
                                <div className="flex justify-between my-[1rem]">
                                    <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#696984]">{tema}</span>
                                    <span className="font-medium text-[0.875rem] leading-[1.563rem] text-[#696984]">{duration} Month</span>
                                </div>
                                <h3 className="font-medium text-[1.3rem] leading-[1.9rem] text-[#252641] mb-[1.2rem]">{title}</h3>
                                <p className="font-normal text-[1rem] leading-[1.6rem] text-[#696984] mb-[1.063rem]">{description}</p>
                                <div className="flex items-end justify-between">
                                    <div className="flex items-center">
                                        <Image className="inline  bg-slate-500 h-[35px] w-[35px] object-cover object-top rounded-full" src={imgAuthor} alt={author} width={500} height={100} />
                                        <span className="font-medium text-[1rem] leading-[1.688rem] ml-[0.938rem]">{author}</span>
                                    </div>
                                    <div>
                                        <span className="font-light italic line-through text-[1rem] leading-[1.688rem] mr-4 text-[#00000080]">${price}</span>
                                        <span className="font-bold text-[1.3rem] leading-[2.25rem] text-[#222129] ">${offer}</span>
                                    </div>
                                </div>
                            </article>
    )
}