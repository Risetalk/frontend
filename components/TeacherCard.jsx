import React from "react";
import Image from "next/image";

function TeacherCard({ professor }) {
  return (
    <div className=" mb-[3rem] pt-6">
      <div className="w-[105px] h-[101px] ml-[1.5rem] mb-[1.5rem] rounded-full bg-gray-300">
        <Image
          src={professor.image}
          width={105}
          height={101}
          alt={professor.name}
          className="w-full mb-[4rem] h-full rounded-full"
        />
      </div>
      
      <div className="ml-[1.5rem] flex-1 ">
        <div>
          <h3 className="font-bold text-xs mb-[1rem]" style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: 500, fontSize: "22px" }}>
            {professor.name}
          </h3>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-[1rem]" style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: 400, fontSize: "15px" }}>
            {professor.email}
          </p>
        </div>
      
        <p className="font-montserrat font-bold text-black mb-[1rem] text-base leading-9">
            About me
            </p>
       
        <div>
          <p className="text-xs text-gray-500 mb-[2rem]" style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "20px", letterSpacing: "2px", color: "#000000" }}>
            {professor.aboutMe} 
          </p> 

        </div>

        <h1 className="font-montserrat font-bold text-black text-base leading-5">Last messages</h1>
      </div>
    </div>
  );
}

export default TeacherCard;
