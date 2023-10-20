import { motion } from "framer-motion";
import Image from "next/image";
import { type } from "os";
import { useState } from "react";

type ProvinceProps = {
  img: string;
  position: string;
};

const Province = ({ img, position }: ProvinceProps) => {
  const [animate, setAnimate] = useState(false);
  const mapAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <div
        className={`absolute w-20 h-20  rounded-full ${position} z-30 cursor-pointer`}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
        onClick={() => {
          console.log("click");
          setAnimate(true);
        }}
      />

      <motion.div
        className="absolute w-full h-full z-20"
        initial="hidden"
        variants={mapAnimation}
        animate={animate ? "show" : "hidden"}
        exit="hidden"
      >
        <Image
          alt=""
          className="absolute w-full h-full"
          width={300}
          height={300}
          src={img}
        />
      </motion.div>
    </>
  );
};

export default Province;
