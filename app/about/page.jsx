"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";

export default function AboutPage() {
  const cardData = [
    {
      name: "Joel",
      last_name: "Vegas",
      img_profile: "/images/joel.jpg",
      booth: "Deployment",
      linkedin: "https://www.linkedin.com/in/joelvegas/",
      github: "https://github.com/JOEL18VEGAS",
      page: "",
    },
    {
      name: "Jesse",
      last_name: "McCallums",
      img_profile: "/images/jesse.jpg",
      booth: "Deployment",
      linkedin: "https://www.linkedin.com/in/jessemccallums/",
      github: "https://github.com/Jessemccallums",
      page: "",
    },
    {
      name: "Nahuel",
      last_name: "Chamorro",
      img_profile: "/images/Nahu.jpeg",
      booth: "Frontend",
      linkedin: "https://www.linkedin.com/in/nahuel-chamorro-aaba74238/",
      github: "https://github.com/nahucham18",
      page: "",
    },
    {
      name: "Eliza",
      last_name: "Ortiz",
      img_profile: "/images/eliza.jpg",
      booth: "Frontend",
      linkedin: "https://www.linkedin.com/in/elizabeth-ortiz-rivas/",
      github: "https://github.com/LizOrtizR",
      page: "",
    },
    {
      name: "Diego",
      last_name: "Ibañez",
      img_profile: "/images/diego.jpg",
      booth: "Backend",
      linkedin: "https://www.linkedin.com/in/diego-iba%C3%B1ez-09202822a/",
      github: "https://github.com/DiegoLIbanez",
      page: "",
    },
    {
      name: "Miguel",
      last_name: "Miguel",
      img_profile: "/images/miguel.jpg",
      booth: "Backend",
      linkedin:
        "https://www.linkedin.com/in/miguel-agustin-fernandez-aa1596248/",
      github: "https://github.com/Fer-Mig-Agus",
      page: "",
    },
    {
      name: "Diego",
      last_name: "Caruso",
      img_profile: "/images/diegocaruso.jpg",
      booth: "Backend",
      linkedin: "https://www.linkedin.com/in/diego-caruso-433864237/",
      github: "https://github.com/Diegoc24",
      page: "",
    },
  ];

  const images = [
    { src: "/AboutTech/js.png" },
    { src: "/AboutTech/NodeJs.png" },
    { src: "/AboutTech/react .png" },
    { src: "/AboutTech/sql.png" },
    { src: "/AboutTech/css.png" },
    { src: "/AboutTech/google.png" },
    { src: "/AboutTech/html-5.png" },
    { src: "/AboutTech/redux-icon.png" },
    { src: "/AboutTech/LogoFigma.png" },
    { src: "/AboutTech/nextjs-icon.png" },
    { src: "/AboutTech/stripe.png" },
    { src: "/AboutTech/tailwind-css-icon.png" },
  ];

  const rows = [];
  const cardsPerRow = 4;

  for (let i = 0; i < cardData.length; i += cardsPerRow) {
    const rowCards = cardData.slice(i, i + cardsPerRow);
    rows.push(rowCards);
  }
const imageGroups = [];
for (let i = 0; i < images.length; i += 5) {
  const group = images.slice(i, i + 5);
  imageGroups.push(group);
}
  return (
    <div>
      <main className="pt-[2rem]">
      <div>
  <main className="pt-[2rem]">
    <section className="flex flex-col pt-[4rem] w-[69%] mx-[auto] mb-8">
      <div className="flex">
        <div className="bg-gray-100 rounded-lg p-8 flex-1 mr-9 shadow-md">
        <div className="w-[200px] h-[40px]  ml-1 mb-6">
            <Image
              src="/images/principalLogo.png"
              alt="logo-img"
              width={200}
              height={40}
              className="w-full h-full"
            />
          </div>
          <p className="w-[100%] font-poppins text-base font-normal text-[18px] leading-[30px] tracking-[0.02em] text-justify">
            RiseTalk is a leading online platform that specializes in technology education. We are dedicated to empowering individuals with the knowledge and skills they need to thrive in the digital age. Our platform offers a diverse range of courses, covering topics such as programming, UI/UX design, and also, focus on DevOps and we cover business content to empower our students to reach a new level of knowledge. We are here to improve education and our main purpose is to provide high value to our Students.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 flex-1 shadow-md">
        <div className="font-poppins font-semibold text-[23px] leading-[28px] text-[#262F30] mx-auto mb-4">
  <h2 className="mb-8">Technologies we use</h2>
</div>
<div className="flex justify-center items-center">
  <div className="flex justify-center space-x-8">
    {images.slice(0, 5).map((image, index) => (
      <div key={index} style={{ width: '20%' }}>
        <Image
          src={image.src}
          alt="logo-img"
          width={50}
          height={40}
          className=""
        />
      </div>
    ))}
  </div>
</div>
<div className="flex justify-center items-center">
  <div className="flex justify-center space-x-8 mt-5">
    {images.slice(5, 10).map((image, index) => (
      <div key={index} style={{ width: '20%' }}>
        <Image
          src={image.src}
          alt="logo-img"
          width={50}
          height={40}
          className=""
        />
      </div>
    ))}
  </div>
</div>
<div className="flex justify-center items-center">
  <div className="flex justify-center space-x-8 mt-6">
    {images.slice(10, 12).map((image, index) => (
      <div key={index} style={{ width: '20%' }}>
        <Image
          src={image.src}
          alt="logo-img"
          width={120}
          height={110}
          className=""
        />
      </div>
    ))}
  </div>
</div>



      </div>
      </div>

    </section>

  </main>
</div>






        <section>
          <div className="font-poppins font-semibold text-[23px] leading-[28px] text-[#262F30]mx-auto mb-4 flex justify-center items-center">
            <h2 className="">Meet the team</h2>
          </div>

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-4">
              {row.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="w-1/5 px-4 flex flex-col items-center">
                  {" "}
                  {/* Agrega "flex flex-col items-center" */}
                  <div className="w-36 h-36 rounded-full overflow-hidden">
  <motion.div
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.3 }}
  >
    <Image
      src={card.img_profile}
      alt={`${card.name} ${card.last_name}`}
      width={500}
      height={500}
      className="w-full h-full"
    />
  </motion.div>
</div>
                  <h3 className="text-center mt-2">{`${card.name} ${card.last_name}`}</h3>
                  <p>{card.booth}</p>
                  <div className="flex flex-row">
                    <Link href={card.linkedin}>
                      <div >
                        <Image
                          src={linkedin}
                          alt="LinkedIn"
                          width={24}
                          height={24}
                          className="hover:filter hover:brightness-110 hover:saturate-200 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <Link href={card.github}>
                      <div>
                        <Image
                          src={github}
                          alt="GitHub"
                          width={24}
                          height={24}
                          className="hover:filter hover:brightness-110 hover:saturate-200 transition-all duration-300"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
