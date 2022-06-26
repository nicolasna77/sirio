import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useEffect, useState } from "react";
import { CartState } from "../context/App-Context";
import ItemPanier from "./ItemPanier";

const StepperPanier = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { setActiveStep } = props;

  const handleNext = () => {
    console.log("fefr");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Box
      pt={{ xs: 8, md: 8 }}
      pb={{ xs: 8, md: 8 }}
      sx={{ margin: "auto", maxWidth: "1200px !important" }}
    >
      {cart.length === 0 ? (
        <Typography variant="h6">{"Votre panier est vide."}</Typography>
      ) : (
        <Grid container xs={10} md={10} sx={{ margin: "auto", flexGrow: 1 }}>
          <Grid
            container
            item
            xs={12}
            sm={10}
            md={8}
            sx={{ margin: "auto", flexGrow: 1 }}
          >
            <Grid item xs={10} sx={{ minWidth: "700px !important" }}>
              <Box>
                <Typography variant="subtitle1" component="div">
                  {"Liste d'achat :"}
                </Typography>
              </Box>
            </Grid>

            <Grid xs={12}>
              {cart.map((prod) => (
                <ItemPanier prod={prod} key={prod.id}></ItemPanier>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ width: "100%" }} mb="15px" mt="15px">
                  <Grid container sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" component={"span"}>
                        {"Nombre d'article:"}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" component={"span"}>
                        ({cart.length})
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={6}>
                      <Typography variant="h6" component={"span"}>
                        {"Total :"}
                      </Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography variant="h6" component={"span"}>
                        {total} {"€"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ pb: 3 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleNext()}
                    color="secondary"
                  >
                    {"Valider mon panier"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
export default StepperPanier;
