import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const logoList = ['Logo.png'];

export default function LogoImg() {
  const [logo, setLogo] = useState(logoList[0]);
  const animationControls = useAnimation();

  useEffect(() => {
    const randomLogo = logoList[Math.floor(Math.random() * logoList.length)];
    setLogo(randomLogo);
  }, []);

  const handleMouseEnter = () => {
    const randomLogo = logoList[Math.floor(Math.random() * logoList.length)];
    animationControls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 },
    });
    setTimeout(() => {
      setLogo(randomLogo);
    }, 300);
  };

  return (
    <motion.div onMouseEnter={handleMouseEnter} animate={animationControls}>
      <Image
        className=" w-full h-full"
        src={`/assets/img/logos/${logo}`}
        alt="Boomslag"
        width={80}
        height={110}
        priority
      />
    </motion.div>
  );
}
