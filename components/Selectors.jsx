

export default function Selectors() {
    

    return (
        <div>
            <div className='absolute bottom-[3rem] left-1/2 -translate-x-1/2 mb-4'>
                <div className='flex justify-center'>
                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none'>
                        <option value="category" selected disabled>Category</option>
                        <option value="all" >All</option>
                        <option value="programming" >Programming</option>
                        <option value="desing" >Desing</option>
                        <option value="development">Development</option>
                        <option value="Business">Business</option>
                        <option value="marketing">Marketing</option>
                        <option value="photography">Photography</option>
                        <option value="acting">Acting</option>
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none'>
                        <option value="raiting"selected disabled >Raiting</option>
                        <option value="max">max</option>
                        <option value="min">min</option>
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none'>
                        <option value="order" selected disabled>Order</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>

                    <select className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none'>
                        <option value="languaje" selected disabled>Languaje</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                    </select>

                    <button className='px-4 py-2 mx-2 text-[#262F30] bg-white border border-gray-300  rounded-[10px] hover:bg-gray-100 focus:outline-none'>
                        Recents
                    </button>
                </div>
            </div>
        </div>
    )
}