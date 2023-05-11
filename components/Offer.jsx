import Image from "next/image"

export default function Offer({ title, image, description, offer }) {
    return (
        <article className="w-[400px]">
            <div className="relative ">
                    <Image className="h-[400px] object-cover" src={image} alt="img-offer" width={400}  height={600}/>
                <div className="absolute top-0 py-[2rem] pl-[2rem] pr-[6rem] bg-[#00000066] h-[400px] w-[400px] text-[#FFFFFF]">
                    <div className="bg-[#F0713D] rounded-[0.625rem] w-[100px] h-[100px] flex items-center justify-center">
                        <h3 className="font-bold text-[2.5rem] leading-[4.688rem] text-[#FFFFFF] ">{offer}%</h3>
                    </div>
                    <h3 className="font-bold text-[1.6rem] leading-[2.625rem] mt-[1.4rem] mb-[0.5rem]">{title}</h3>
                    <p className="font-medium text-[1rem] leading-[2.25rem] ">{description}</p>
                </div>
            </div>
        </article>
    )
}