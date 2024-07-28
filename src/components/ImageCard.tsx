"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface ImageLink {
  img: string;
}
const ImageCard = ({ img }: ImageLink) => {
  const [imgSrc, setimgSrc] = useState(img);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="overflow-hidden"
    >
      <Image
        src={imgSrc}
        width={500}
        height={300}
        alt="posters"
        className="rounded aspect-video object-cover hover:scale-110 transition-all duration-150 ease-in-out"
        onError={(e) => setimgSrc("/failedImg.jpg")}
      />
    </motion.div>
  );
};

export default ImageCard;
