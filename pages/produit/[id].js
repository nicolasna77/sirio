import { Button, Grid, Input, Typography } from "@mui/material";
import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";
import { app, storage } from "../../firebase-config";
import ReactImageGallery from "react-image-gallery";
import { CirclePicker } from "react-color";
import { ref } from "firebase/storage";

const Produit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [produit, setProduit] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "produits"),
          where("id", "==", id)
        );

        let data = null;
        querySnapshot.forEach((doc) => {
          data = doc.data();
        });
        setProduit(data);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <Box sx={{ pt: 6 }}>
      {produit && (
        <div>
          <Grid
            container
            spacing={3}
            xs={10}
            justifyContent="center"
            sx={{ margin: "0 auto" }}
          >
            <Grid item xs={12} sm={6}>
              {/* <ImageGallery items={produit.image} /> */}
            </Grid>

            {/* description produit */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6">{produit.title}</Typography>
              <Box pt="10px" componant="div" color="secondary">
                <Typography variant="subtitle1">{produit.body}</Typography>
              </Box>
              <Box pt="10px">
                <Typography variant="subtitle2">
                  {"Taille :"} <span>{produit.size}</span>
                </Typography>
              </Box>
              <Box pt="10px">
                <Typography variant="subtitle2">{"Couleur :"}</Typography>
                <Grid item xs={12} sm={12} md={12}>
                  <CirclePicker circleSize={20} colors={produit.color} />
                </Grid>
              </Box>

              <Box pt="10px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography variant="h6">
                      {produit.price} {"€"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Input
                      defaultValue="1"
                      sx={{ width: "35px" }}
                      size="small"
                      type="number"
                    ></Input>
                  </Grid>
                </Grid>
              </Box>

              <Box pt="10px">
                <Box>
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                  >
                    {"Ajouter au panier"}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ pt: 10, margin: "0 auto" }} xs={10}>
            <Typography variant="h6">{produit.fullBody}</Typography>
          </Grid>
        </div>
      )}
    </Box>
  );
};
export default Produit;
