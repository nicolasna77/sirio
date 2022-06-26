import * as React from "react";
import Image from "next/image";
import imgSection from "../public/furniture_background.jpg";
import { Typography } from "@mui/material";

const Selection = () => {
  return (
    <div className="article">
      <Image
        className="img-article"
        src={imgSection}
        height={700}
        alt="front Picture"
        priority
      />
      <Typography className="article-header">
        Le confort a petit prix !
      </Typography>
    </div>
  );
};
export default Selection;
