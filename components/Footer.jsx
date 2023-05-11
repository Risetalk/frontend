export default function Footer() {
    return (
        <footer className='flex justify-center text-white text-center bg-[#222129] pt-[4rem] pb-[2.5rem]'>
            <div className='w-fit'>
                <div className='mb-[5rem]'>
                    <h1 className='inline font-bold text-[3rem] border-r-2 pr-8 py-2 align-middle w-fit cursor-pointer'>RiseTalk</h1>
                    <span className='inline-block text-start ml-8 w-[100px] align-middle cursor-pointer'>Virtual Class for Zoom</span>
                </div>
                <div className='flex flex-wrap justify-center gap-x-[1.25rem] mb-[4rem]'>
                    <label className='w-full block mt-[20px] mb-[1.25rem] font-medium text-[1.3rem] leanding-[2.438rem]' htmlFor="">Subscribe to get our Newsletter</label>
                    <input className='font-normal text-[1.25rem] leading-[1.875rem] bg-[#222129] w-[25rem]  px-[1.875rem] py-[0.8rem] rounded-[5rem] border-[white] border-2' type='text' placeholder='You Email' />
                    <button className="font-medium text-[1rem] leading-[2.063rem] bg-[#F0713D] px-[2rem] py-[0.9rem] rounded-[3.75rem] ">Suscribe</button>
                </div>
                <ul className='flex justify-center gap-4 mb-[1.25rem]'>
                    <span className='font-normal text-[1rem] leading-[2.063rem] text-[#B2B3CF] px-4 border-r-2 border-[#B2B3CF] cursor-pointer'>Carrers</span>
                    <span className='font-normal text-[1rem] leading-[2.063rem] text-[#B2B3CF] px-4 border-r-2 border-[#B2B3CF] cursor-pointer'>Privacy Policy</span>
                    <span className='font-normal  text-[1rem]  leading-[2.063rem]  text-[#B2B3CF] px-4  cursor-pointer'>Tearms & Conditions</span>
                </ul>
                <span className='font-normal text-[1rem] leading-[2.063rem] text-[#B2B3CF] cursor-default'>© 2021 Class Technologies Inc.</span>
            </div>
        </footer>
    )
}