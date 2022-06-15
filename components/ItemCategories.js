import * as React from "react";
import { Grid } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Link from "next/link";
import { Box } from "@mui/system";

const ItemCategories = (props) => {
  const {
    categories: { id, imageUrl, nameCategorie },
  } = props;
  const nameCategorieReg = nameCategorie.replace(/\s+$/, " ");
  return (
    <div>
      <Link href={`/categorie/${nameCategorieReg}`}>
        <ImageListItem key={id}>
          <img src={imageUrl} srcSet={imageUrl} alt={nameCategorie} />
          <ImageListItemBar title={nameCategorie}></ImageListItemBar>
        </ImageListItem>
      </Link>
    </div>
  );
};
export default ItemCategories;
