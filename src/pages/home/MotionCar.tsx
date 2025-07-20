"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function MotionCar() {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-3/5 flex justify-end"
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://i.ibb.co/Xfkyrjr4/hero-car-removebg-preview.png"
        width={500}
        height={500}
      />
    </motion.div>
  );
}