import * as React from "react";
import Image from "next/image";
import imgSection from "../public/furniture_background.jpg";

const Selection = () => {
  return <Image src={imgSection} height={700} alt="front Picture" priority />;
};
export default Selection;
