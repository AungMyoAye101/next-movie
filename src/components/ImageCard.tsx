"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageLink {
  img: string;
}
const ImageCard = ({ img }: ImageLink) => {
  const [imgSrc, setimgSrc] = useState(img);
  return (
    <Image
      src={imgSrc}
      width={500}
      height={300}
      alt="posters"
      className="rounded aspect-video object-cover"
      onError={(e) => setimgSrc("/failedImg.jpg")}
    />
  );
};

export default ImageCard;
