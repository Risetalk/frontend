import Link from 'next/link';

export default function TeachCTA() {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-2/4 p-4 p-[2rem]">
          <h1 className="text-5xl text-center">Our Online Courses</h1>
          <div className="flex space-x-4  mx-8 mt-10">
            <article className="bg-white shadow-lg shadow-orange-500/40 rounded-xl h-full w-full ">
              <div className="m-2">
                <img
                  className="rounded-xl w-full object-cover object-center"
                  src="/assets/Targeta1.png"
                  alt=""
                />
              </div>
              <div className="mx-6">
                <div className="flex justify-between  py-6 px-5 ">
                  <h5 className=" ">Desing</h5>
                  <div className="flex justify-end items-center">
                    <span className="pr-3">
                      <svg
                        className="h-7 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    <p>3 Month</p>
                  </div>
                </div>
                <h3 className="font-semibold text-xl pb-14">Javascript for kinds</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis
                  consectetur sunt numquam sequi pariatur
                </p>
                <div className="flex justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <img src="/assets/Perfil.png" alt="" />
                    <p>Nombre</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 space-x-1">
                    <del className="text-sm">$100</del>
                    <p className="text-xl font-extrabold">$80</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white shadow-lg shadow-orange-500/40 rounded-xl h-full w-full ">
              <div className="m-2">
                <img
                  className="rounded-xl w-full object-cover object-center"
                  src="/assets/Targeta2.png"
                  alt=""
                />
              </div>
              <div className="mx-6">
                <div className="flex justify-between  py-6 px-5 ">
                  <h5 className=" ">Desing</h5>
                  <div className="flex justify-end items-center">
                    <span className="pr-3">
                      <svg
                        className="h-7 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    <p>3 Month</p>
                  </div>
                </div>
                <h3 className="font-semibold text-xl pb-14">Javascript for kinds</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis
                  consectetur sunt numquam sequi pariatur
                </p>
                <div className="flex justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <img src="/assets/Perfil.png" alt="" />
                    <p>Nombre</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 space-x-1">
                    <del className="text-sm">$100</del>
                    <p className="text-xl font-extrabold">$80</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="bg-background basis-2/4 p-16">
          <div className=" flex items-center justify-center flex-col">
            <h1 className="text-5xl text-center text-white">Live Meetings with Online Teachers</h1>
            <div className="py-4 px-12">
              <img src="/assets/Live.png" alt="" />
            </div>
          </div>
          <h4 className="text-white font-semibold mx-16 my-6">Go to</h4>
        </div>
      </div>
      <div className="">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
              The Ultimate NFT Courses Marketplace!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 dark:text-dark-txt-secondary text-gray-600">
              Immerse yourself in the thrilling realm of digital and physical products, powered by our cutting-edge Stacks network and NFT technology. Our user-friendly platform streamlines buying and selling unique, rare items like never before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/teach"
                className="rounded-md bg-hoverOrange dark:bg-dark-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris-600"
              >
                Get started
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-dark-txt"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
