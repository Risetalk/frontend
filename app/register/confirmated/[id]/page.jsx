"use client";
import Register from "@/components/Registrer/Register";
import check from "../../../../public/check.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Confirmated() {
  const path = usePathname();

  const idPath = path.split("/").pop();
  console.log(idPath);

  useEffect(() => {
    const userConfirm = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/user/confirmar/${idPath}`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    userConfirm();
  }, [idPath]);

  return (
    <main>
      <div className="absolute w-[100%] h-[100vh] bg-[#00000090] flex items-center z-30">
        <div className="bg-[#222129] w-[40%] mx-[auto] h-[40%] mb-[10rem] rounded-[2rem] p-4">
          <div className="flex flex-col items-center justify-around bg-white h-[100%] pt-[1rem] pb-[2rem] rounded-[1rem]">
            <div>
              <Image
                className="mx-[auto]"
                src={check}
                alt="logo-check"
                width={70}
                height={70}
              />

              <h2 className="font-bold text-[#838383] mt-[1rem]">
                Account confirmed, click Login to start
              </h2>
            </div>
            <Link
              href={"/login"}
              className="font-normal text-[1rem] leading-[1.5rem] text-white py-[0.6rem]  px-[3.5rem] bg-[#222129A6] rounded-[2.25rem] mt-[2rem] ">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Register />
    </main>
  );
}
