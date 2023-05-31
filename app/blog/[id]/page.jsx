"use client"
import React from "react";
import Image from "next/image";
import CardsBlog from "@/components/CardsBlog";

const blog = [
  {
    id: 1,
    title: "Unleashing the Power of IoT: Connecting Devices for a Smarter World",
    paragraph1:
      "The Internet of Things (IoT) has opened up a world of possibilities where devices connect and collaborate with each other to create a smarter and more efficient environment. From household appliances and mobile devices to industrial sensors and autonomous vehicles, IoT is transforming the way we interact with technology. By unleashing the power of IoT, we can harness real-time data and utilize advanced analytics to make more informed decisions and improve people's quality of life.",
    paragraph2:
      "IoT connectivity allows us to control and monitor our devices from anywhere, providing convenience and efficiency. Imagine turning on the lights in your home before you arrive, adjusting the temperature from your phone, or receiving real-time alerts about the status of your appliances. Additionally, in industrial settings, IoT enables remote monitoring of machinery, predictive maintenance, and process optimization, which can reduce costs and enhance productivity.",
    paragraph3:
      "However, along with the benefits of IoT, challenges arise in terms of security and privacy. By connecting devices to the network, the risk of cyber-attacks and exposure of sensitive data increases. It is crucial to implement robust security measures such as data encryption, strong authentication, and regular firmware updates to safeguard the integrity of IoT systems. Additionally, appropriate regulation is required to ensure user privacy and responsible use of IoT technology.",
    contentTipe: "affordable,  Stunning, making madbrawns",
    writenBy: "Sandra",
    authorImg: "sandra",
  },
];
export default function Blog() {
  return (
    <div>
      <div>
        <div className="relative">
          <Image
            src="/image 22.png"
            alt="SearchBar Background"
            className="rounded-0"
            width={1800}
            height={595}
          />
        </div>

        {blog.map((item) => (
          <div key={item.id} className="text-black mx-[6rem] mt-[3rem]">
            <h1 className="text-4xl font-semibold leading-tight text-center font-poppins">
              {item.title}
            </h1>
            <p className="text-lg font-normal  py-[2rem] leading-relaxed text-left font-poppins">
              {item.paragraph1}
            </p>
            <p className="text-lg font-normal  py-[1rem]  leading-relaxed text-left font-poppins">
              {item.paragraph2}
            </p>
            <p className="text-lg font-normal py-[1rem]  leading-relaxed text-left font-poppins">
              {item.paragraph3}
            </p>

            <div className="me-[8rem]mt-[1rem]">
              <button className="w-136 h-49 ml-[2rem] bg-[#fdddca] text-black rounded-full px-4 py-2">
                Affordable
              </button>
              <button className="w-136 h-49 ml-[2rem] bg-[#fdddca] text-black rounded-full px-4 py-2 mt-4">
                Stunning
              </button>
              <button className="w-136 h-49 ml-[2rem] bg-[#fdddca] text-black rounded-full px-4 py-2 mt-4">
                Making
              </button>
              <button className="w-136 h-49 ml-[2rem] bg-[#fdddca] text-black rounded-full px-4 py-2 mt-4 absolute left-462 top-1490">
                Madbrawns
              </button>
            </div>

            <hr className="mt-[2rem]" />
            <div className="flex items-center mt-[2rem]">
              <Image
                className=" mt-[0.5rem]"
                src={"https://source.unsplash.com/64x64/?person"}
                alt="logo"
                width={36}
                height={36}
              />
              <div>
                <p className="text-xs ml-[1rem]">WritenBy</p>
                <p className="text-l flex-1 mt-[0rem] mx-[1rem] ml-[1rem]">
                  {item.writenBy}
                </p>
              </div>
              
            </div>
            <button className="flex-1 mt-[1rem] ml-[80rem] w border border-[#F0713D] text-[#F0713D] rounded-lg px-9 py-2 ">
              Follow
            </button>
          </div>
        ))}
      </div>
      <div>
  <CardsBlog />
</div>
    </div>
  );
}
