import Image from "next/image";
import teacher from "../public/teacherdetail.png";
import { motion } from "framer-motion";

export default function TeacherDetail() {
  return (
    <section className="bg-[#222129] text-white pt-[40px]">
      <div className="relative w-[85%] pt-[2.75rem] pb-[2.5rem] mx-[auto]">
        <h2 className="font-medium text-[1.875rem] leading-[2.813rem] text-[#FFFFFF] mt-[3.125rem]">
          What our students have to say
        </h2>
        <div className="flex justify-center gap-x-[5rem] pt-[2.5rem] pl-[6.875rem] pb-[3.5rem] mt-[5.625rem] w-[100%] mx-[auto] bg-[#FFFFFFBD] rounded-[2.5rem]">
          <Image
            src="/teacherdetail.png"
            alt="teacher"
            width={500}
            height={450}
          />
          <div className="flex flex-col justify-center w-[60%]">
            <h3 className="font-bold text-[1.875rem] leading-[2.813rem] text-[#252641]">
              Savannah Nguyen
            </h3>
            <span className="font-medium text-[1.5rem] leading-[2.25rem] text-[#252641] mt-[1.875rem] mb-[1.25rem]">
              tanya.hill@gmail.com
            </span>
            <p className="font-normal text-[1.125rem] leading-8 text-[#222129] mb-[0.75rem] w-[80%]">
              I highly recommend this Web Development course! It has been an
              amazing experience from start to finish. The course content is
              comprehensive and well-structured, allowing me to acquire the
              necessary knowledge gradually.
            </p>
            <div className="flex gap-x-[1.875rem]">
              <motion.div
                className="w-[31px] h-[31px] rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Image
                  src="/facebookimae.png"
                  alt="teacher"
                  width={30}
                  height={30}
                />
              </motion.div>
              <motion.div
                className="w-[30px] h-[30px] rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Image
                  src="/twitter.png"
                  alt="teacher"
                  width={30}
                  height={30}
                />
              </motion.div>
              <motion.div
                className="w-[30px] h-[30px] rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Image
                  src="/instagramImage.png"
                  alt="teacher"
                  width={30}
                  height={30}
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute right-[3rem] bottom-[6rem] flex flex-col gap-[1.563rem]">
            <motion.div
              className="w-[60px] h-[60px] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Image
                src="/Image Circle.png"
                alt="teacher"
                width={60}
                height={60}
              />
            </motion.div>
            <motion.div
              className="w-[60px] h-[60px] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Image src="/Photo.png" alt="teacher" width={60} height={60} />
            </motion.div>
            <motion.div
              className="w-[60px] h-[60px] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Image
                src="/Image Circle.png"
                alt="teacher"
                width={60}
                height={60}
              />
            </motion.div>
            <motion.div
              className="w-[60px] h-[60px] rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Image src="/Photo.png" alt="teacher" width={60} height={60} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
