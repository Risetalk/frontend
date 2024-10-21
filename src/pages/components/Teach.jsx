import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from "react";


export default function Teach() {
  return (
    <>
      <div className="grid sm:grid-cols-1 sm:space-y-5 md:grid-cols-2 bg-background py-12 ">
        <div className="flex justify-center">
          <Image
              className="w-full h-screen "
              src={`/assets/Seccion.png`}
              alt="RiseTalk"
              width={1550}
              height={1550}
          />
        </div>
        <div className="flex flex-col pt-12 gap-7 mx-[5rem]  space-x-2 ">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Unlock Your Potential and Expand Your Horizons with our Online Courses
            </h1>
            <h3 className="text-lg text-gray-300 mt-4 text-center px-10">
              Learn at your own pace and on your own terms, with a flexible and adaptable learning
              experience.
            </h3>
          </div>
          <div className="space-y-4 relative px-[5rem]">
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
                  Platform Deployed on ICP Network (October 18, 2024)
                </h4>
                <p className="text-gray-400">
                The platform has been successfully deployed on the Internet Computer (ICP) network, enabling decentralized hosting that provides increased speed, scalability, and security while significantly reducing operational costs.
                </p>
              </div>
            </div>

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
                Authentication Integration with ICP and Stacks (October 22, 2024) in comming.
                </h4>
                <p className="text-gray-400">
                Users can now log in securely using decentralized authentication systems from both ICP and Stacks Auth, offering greater control over their data and enhancing privacy.
                </p>
              </div>
            </div>
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
                Automated NFT Certificate Generation (November 1, 2024) in comming.
                </h4>
                <p className="text-gray-400">
                Course completion certificates are now autostxally generated as NFTs, securely stored on the blockchain. This ensures the authenticity and verifiable ownership of students’ academic achievements.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
