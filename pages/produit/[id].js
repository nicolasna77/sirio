import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Rating,
  Typography,
} from "@mui/material";
import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app, storage } from "../../firebase-config";
import ReactImageGallery from "react-image-gallery";
import { CirclePicker } from "react-color";
import { CartState } from "../../context/App-Context";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Produit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [produit, setProduit] = useState([]);
  const db = getFirestore(app);

  const getPoduct = async () => {
    try {
      const docRef = doc(db, "produits", id);
      const docSnap = await getDoc(docRef);

      setProduit(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPoduct();
  }, []);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Box sx={{ pt: 6 }}>
      {(produit && (
        <div>
          <Grid
            container
            xs={10}
            justifyContent="center"
            sx={{ margin: "0 auto" }}
          >
            <Grid item xs={12} sm={7}>
              {/* <ImageGallery items={produit.image} /> */}
            </Grid>

            <Grid container xs={12} md={5}>
              <Grid item xs={10}>
                <Typography variant="h6">{produit.title}</Typography>
              </Grid>
              <Grid item xs={2} md={2}>
                <Typography variant="h6">
                  {produit.price} {"€"}
                </Typography>
              </Grid>
              {(produit.rating && (
                <Rating
                  value={produit.rating}
                  name="rating"
                  size="medium"
                  readOnly
                  precision={0.5}
                ></Rating>
              )) ||
                ""}
              <Box pt="10px" componant="div" color="secondary">
                <Typography variant="subtitle1">{produit.body}</Typography>
              </Box>
              <Grid item xs={12}>
                <Box pt="10px">
                  <Typography variant="subtitle1">
                    {"Taille :"} <span>{produit.size}</span>
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box pt="10px">
                  <Typography variant="subtitle1">{"Couleur :"}</Typography>
                  <Grid item xs={12} sm={12} md={12}>
                    <CirclePicker circleSize={20} colors={produit.color} />
                  </Grid>
                </Box>
              </Grid>

              <Box pt="10px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography color="secondary">{produit.qty}</Typography>
                    <Typography variant="subtitle2">
                      Produit(s) en stock
                    </Typography>
                    <Input
                      min="1"
                      max={produit.qty}
                      defaultValue="1"
                      sx={{ width: "35px" }}
                      size="small"
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          playload: {
                            id: produit.id,
                            qty: e.target.value,
                          },
                        })
                      }
                      type="number"
                    ></Input>
                  </Grid>
                </Grid>
              </Box>

              <Box pt="10px">
                <Box>
                  <Container>
                    {cart.some((p) => p.uid === id) ? (
                      <Button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: produit,
                          })
                        }
                      >
                        Supprimer
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: produit,
                          })
                        }
                      >
                        ajouter au panier
                      </Button>
                    )}
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ pt: 10, margin: "0 auto" }} xs={8}>
            <Typography variant="h6">{produit.fullBody}</Typography>
          </Grid>
        </div>
      )) ||
        " "}
    </Box>
  );
};
export default Produit;
