import cert from '../public/cert-ico.png'
import Image from 'next/image'


export default function SubSection({ title }) {
    return (
        <>
            {
                title === "This Course included"
                    ?
                    <div className="mb-[2.1rem] pt-[2rem] border-t-2 border-[#696984]">
                        <h3 className='font-semibold text-[1.875rem] text-start leading-[2.819rem] mb-[2rem]'>{title}</h3>
                        <div className='flex flex-col gap-y-[0.6rem]'>
                            <div className='flex  items-center gap-x-[0.5rem]'>
                                <Image className='w-[20px] h-[20px]' src={cert} alt='cert-ico' width={50} height={50} />
                                <span className='font-semibold text-[0.875rem] leading-[1.313] text-[#00000080]'>Money Back Guarantee</span>
                            </div>
                            <div className='flex  items-center gap-x-[0.5rem]'>
                                <Image className='w-[20px] h-[20px]' src={cert} alt='cert-ico' width={50} height={50} />
                                <span className='font-semibold text-[0.875rem] leading-[1.313] text-[#00000080]'>Access on all devices</span>
                            </div>
                            <div className='flex  items-center gap-x-[0.5rem]'>
                                <Image className='w-[20px] h-[20px]' src={cert} alt='cert-ico' width={50} height={50} />
                                <span className='font-semibold text-[0.875rem] leading-[1.313] text-[#00000080]'>Certification of completion</span>
                            </div>
                            <div className='flex  items-center gap-x-[0.5rem]'>
                                <Image className='w-[20px] h-[20px]' src={cert} alt='cert-ico' width={50} height={50} />
                                <span className='font-semibold text-[0.875rem] leading-[1.313] text-[#00000080]'>Moduls</span>
                            </div>
                        </div>
                    </div>

                    : <></>

            }


            {/* {------------------------------------------------------------------} */}


            {title === "Training 5 or more people"
                ?

                <div className="mb-[2.1rem] pt-[2rem] border-t-2 border-[#696984]">
                    <h3 className='font-semibold text-[1.875rem] text-start leading-[2.819rem] mb-[2rem]'>{title}</h3>
                    <p className='font-normal text-[0.875rem] leading-[1.575rem] text-[#696984] text-start'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>

                : <></>
            }

            {/* {------------------------------------------------------------------------} */}

            {
                title === "Share this course"
                    ?
                    <div className="mb-[2.1rem] pt-[2rem] border-t-2 border-[#696984]">

                        <h3 className='font-semibold text-[1.875rem] text-start leading-[2.819rem] mb-[2rem]'>{title}</h3>
                        <div className='flex justify- gap-x-4'>
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                            <Image className='w-[32px] h-[32px]' src={cert} alt='cert-ico' width={50} height={50} />
                        </div>

                    </div>

                    : <></>
            }

        </>
    )

}