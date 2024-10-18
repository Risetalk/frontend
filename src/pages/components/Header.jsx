// import ParticlesBg from 'particles-bg';
import Link from 'next/link';
import Image from 'next/image';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Header() {
  return (
    <main>
      {/* <ParticlesBackground /> */}
      <div className="">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl  pt-20 pb-16 sm:pt-28 lg:px-8 lg:pt-16">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl px-4 sm:px-6 lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-5xl font-black tracking-tight dark:text-dark-txt text-gray-900 sm:text-6xl">
                  Unlock the Future of Online Education
                </h1>
                <p className="relative mt-6 text-lg leading-8 dark:text-dark-txt-secondary text-gray-600 sm:max-w-md lg:max-w-none">
                  Explore an extensive range of courses in any field, with the power of Web 3
                  technology enhancing your learning experience. Our platform provides a secure and
                  dynamic environment where students and instructors can collaborate and thrive with
                  cutting-edge tools.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/marketplace"
                    className="rounded  bg-gradient-to-r bg-customOrange px-5 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out  hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris-400"
                  >
                    E-Learning Platform
                  </Link>
                  <Link
                    href="/roadmap"
                    className="text-dark dark:text-dark-txt text-sm font-semibold leading-6"
                  >
                    Roadmap <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="">
                  <img
                    src="/assets/img/Principal.png"
                    alt=""
                    width={0}
                    height={0}
                    className=" w-full h-full"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
