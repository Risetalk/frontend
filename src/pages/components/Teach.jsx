import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Lightning-Fast Payments',
    description:
      'Get paid instantly for your courses using our cutting-edge blockchain technology. No more waiting for 60 days to receive your earnings.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Unlock Your Earnings Potential',
    description:
      'With our decentralized approach, enjoy greater financial freedom and the ability to tap into new revenue streams through a secondary marketplace.',
    icon: LockClosedIcon,
  },
  {
    name: 'Revolutionary NFT Courses',
    description:
      'Leverage the power of NFTs to create unique, valuable, and easily tradable course content. Benefit from royalties on resales and build a lasting legacy.',
    icon: ServerIcon,
  },
];

export default function Teach() {
  return (
    <>
      <div className="grid sm:grid-cols-1 sm:space-y-5 md:grid-cols-2 bg-background py-28">
        {/* Columna de imagen */}
        <div className="flex justify-center">
          <img className="rounded" src="/assets/Seccion.png" alt="Imagen de cursos" />
        </div>

        {/* Columna de contenido */}
        <div className="flex flex-col pt-12 gap-7 px-8 md:px-16 space-x-2">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Unlock Your Potential and Expand Your Horizons with our Online Courses
            </h1>
            <h3 className="text-lg text-gray-300 mt-4 text-center">
              Learn at your own pace and on your own terms, with a flexible and adaptable learning
              experience.
            </h3>
          </div>

          {/* Lista de pasos */}
          <div className="space-y-4 relative">
            {/* Paso con línea */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center relative z-10">
                  <span className="w-3 h-3  rounded-full">
                    <svg
                      className="font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className="absolute w-px h-full bg-white z-0"
                  style={{ left: '11px', top: '18PX', width: '3px' }}
                ></div>
                {/* Línea */}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">
                  Deploy Smart Contracts (Apr 20 ~ 27, 2023)
                </h4>
                <p className="text-gray-400">
                  Initially, we must ensure our e-learning platform functions seamlessly. During
                  this stage, our focus will be on deploying smart contracts and conducting
                  penetration testing.
                </p>
              </div>
            </div>

            {/* Paso con línea */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center relative z-10">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <div
                  className="absolute w-px h-full bg-white z-0"
                  style={{ left: '11px', top: '18PX', width: '3px' }}
                ></div>
                {/* Línea */}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">
                  Deploy Smart Contracts (Apr 20 ~ 27, 2023)
                </h4>
                <p className="text-gray-400">
                  Initially, we must ensure our e-learning platform functions seamlessly. During
                  this stage, our focus will be on deploying smart contracts and conducting
                  penetration testing.
                </p>
              </div>
            </div>

            {/* Paso con línea */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center relative z-10">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <div
                  className="absolute w-px h-full bg-white z-0"
                  style={{ left: '11px', top: '18PX', width: '3px' }}
                ></div>
                {/* Línea */}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">
                  Deploy Smart Contracts (Apr 20 ~ 27, 2023)
                </h4>
                <p className="text-gray-400">
                  Initially, we must ensure our e-learning platform functions seamlessly. During
                  this stage, our focus will be on deploying smart contracts and conducting
                  penetration testing.
                </p>
              </div>
            </div>

            {/* Paso final */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center relative z-10">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <div
                  className="absolute w-px h-full bg-white z-0"
                  style={{ left: '11px', top: '18PX', width: '3px' }}
                ></div>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-white">
                  Deploy Smart Contracts (Apr 20 ~ 27, 2023)
                </h4>
                <p className="text-gray-400">
                  Initially, we must ensure our e-learning platform functions seamlessly. During
                  this stage, our focus will be on deploying smart contracts and conducting
                  penetration testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /**
  
  
  <div>
      <div className=" bg-background py-28">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-iris-600 dark:text-dark-accent">
                  Become an Instructor on Boomslag
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
                  Share Your Expertise with the World
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-dark-txt-secondary">
                  Generate passive income in MATIC while making a meaningful impact.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-dark-txt">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-forest-green-200"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline dark:text-dark-txt-secondary">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative flex lg:order-first h-screen w-full">
              <Image
                src="/assets/Seccion.png"
                alt="Product screenshot"
                className="w-full h-full object-cover object-center"
                width={1500} // Ajusta las dimensiones según lo necesites
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  */
}
