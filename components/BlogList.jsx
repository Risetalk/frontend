import React from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BlogList() {

  const ref = useRef()
  const isInView = useInView(ref,{once: true})

  return (
    <div>
      <motion.div className="pt-[4rem] px-[6.8rem]" 
      ref={ref}
      animate={isInView ? {opacity: 1 , y:0} : {opacity: 0 , y:50}}
      transition={{duration: 1}}
      >
            <Image
              className=" flex flex-row "
              src="/Group271.png"
              alt="Example Image"
              width={1652}
              height={403}
            />
          </motion.div>
          </div>

  )
}
            