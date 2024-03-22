"use client";

import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";

interface imagensType {
  imagens: string[]
}

export function ImagesCarrossel({ imagens }: imagensType) {
  return (
    <ImagesSlider className="h-[40rem]" images={imagens}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
