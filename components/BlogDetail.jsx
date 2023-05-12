import React from "react";
import Image from "next/image";

const blog = [
  {
    id: 1,
    title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
    paragraph1:
      "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
    paragraph2:
      "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place",
    paragraph3:
      "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
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
            <p className="text-lg font-normal mt-[1rem] leading-relaxed text-left font-poppins">
              {item.paragraph1}
            </p>
            <p className="text-lg font-normal mt-[1rem] leading-relaxed text-left font-poppins">
              {item.paragraph2}
            </p>
            <p className="text-lg font-normal mt-[1rem] leading-relaxed text-left font-poppins">
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
    </div>
  );
}
