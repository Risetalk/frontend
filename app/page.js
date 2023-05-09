import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="bg-gray-200 flex flex-row px-4 py-20 pb-1">
        
        <div className="max-w-6xl m-12 mx-auto">
          <div className="lg:w-2/3 mx-6 lg:mx-16 mr-15">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase ">Logo
            </h2>
            
            <h1 className="mt-10 text-3xl leading-8 font-extrabold tracking-tight font-poppins text-gray-900 sm:text-4xl">
              Why Swift UI Should Be on the Radar of Every Mobile Developer 
            </h1>
            
            <div className="h-1 w-20 rounded-full mt-8"></div>
         
     
            <p className="text-lg font-medium text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor 
            </p>
            
            
            <div className="mt-10 flex">
              <Link className="px-6 py-2 text-gray-900 font-poppins" href="/courses">Start learning Now</Link>
              <div className="ml-6">
               
              </div>
            </div>
          </div>
        </div>
        <div className="m-20 flex aling">
        <Image className= "object-right-top "src="/Group40.png" alt="Example Image" width={779} height={526.88} />


        </div>
      </section>
    
    </div>
  )
}



// 