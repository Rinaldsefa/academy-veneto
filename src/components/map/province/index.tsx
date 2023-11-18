import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ProvinceProps = {
  img: string;
  position: string;
  onClick: () => void;
};

const ProvinceMap = ({ img, position, onClick }: ProvinceProps) => {
  const [animate, setAnimate] = useState(false);
  const mapAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <button
        className={`absolute w-20 h-20  rounded-full ${position} z-20 cursor-pointer`}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
        onClick={() => {
          setAnimate(true);
          onClick();
        }}
      />

      <motion.div
        className="absolute w-full h-full z-10"
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

export default ProvinceMap;
