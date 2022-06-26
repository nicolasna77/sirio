import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Input,
  Rating,
  Typography,
} from "@mui/material";
import * as React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../firebase-config";
import CardProduct from "../../components/CardProduct";
import Filter from "../../components/Filter";

const Produit = () => {
  const router = useRouter();
  const { categorie } = router.query;
  const db = getFirestore(app);
  const [produits, setProduits] = useState();

  const fetchProduits = async () => {
    try {
      const q = query(
        collection(db, "produits"),
        where("categori", "==", categorie)
      );
      const arr = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = { uid: doc.id, ...doc.data() };
        arr.push(data);
      });

      setProduits(arr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduits();
  }, []);
  return (
    <Box
      pb={{ xs: 5, md: 10 }}
      sx={{
        maxWidth: [1100],
        margin: "0 auto!important",
        padding: "10px",
      }}
    >
      <Grid container>
        <Grid item sm={"auto"}>
          <div className="titleCardPop">
            <Typography gutterBottom variant="h6" component="div">
              {"Produits pour votre : "}
              {categorie}
            </Typography>

            <Divider className="divider" />
          </div>
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          <Filter></Filter>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        {/* {produits > 0 ? ( */}
        {produits &&
          produits.map((prod) => {
            return <CardProduct key={prod.uid} prod={prod} />;
          })}
      </Grid>
    </Box>
  );
};
export default Produit;
