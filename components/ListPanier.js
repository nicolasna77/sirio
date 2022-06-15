import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import ItemPanier from "./ItemPanier";
import { useState } from "react";

const ListPanier = () => {
  // recevoirProduit = (item) => {
  //   this.state.Panier.push(item);
  //   this.setState({ Panier: this.state.Panier });
  // };
  return (
    <Box
      pt={{ xs: 8, md: 8 }}
      pb={{ xs: 8, md: 8 }}
      sx={{ margin: "auto", maxWidth: "1300px !important" }}
    >
      <Grid container md={10} sx={{ margin: "auto", flexGrow: 1 }}>
        <Grid item xs={12} sm={10} md={8} sx={{ margin: "auto", flexGrow: 1 }}>
          <Grid item xs={10} sx={{ maxWidth: "700px !important" }}>
            <Box>
              <Typography variant="subtitle1" component="div">
                Total Articles :{" "}
              </Typography>
            </Box>
          </Grid>

          <Grid container xs={12} md={12} sx={{ maxWidth: "700px !important" }}>
            {/* <ItemPanier /> */}
            {/* <ListItem>
              <Grid item>
                <ListItem>
                  <img src="./salon.jpg" alt="" srcset="" width="120px" />
                </ListItem>
              </Grid>

              <Grid item xs={7}>
                <ListItemText primary="Table Salon" secondary="color : grey" />
              </Grid>

              <Grid item xs="3">
                <Input
                  defaultValue="1"
                  sx={{ width: "35px" }}
                  size="small"
                  type="number"
                ></Input>
              </Grid>

              <Grid item xs="3">
                <Typography variant="h6">9.99€</Typography>
              </Grid>

              <Grid item>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item>
                <ListItem>
                  <img src="./SalleDeBain.jpg" alt="" srcset="" width="120px" />
                </ListItem>
              </Grid>

              <Grid item xs={7}>
                <ListItemText primary="Table Salon" secondary="color : grey" />
              </Grid>

              <Grid item xs="3">
                <Input
                  defaultValue="1"
                  sx={{ width: "35px" }}
                  size="small"
                  type="number"
                ></Input>
              </Grid>

              <Grid item xs="3">
                <Typography variant="h6">9.99€</Typography>
              </Grid>

              <Grid item>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </ListItem> */}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Paper>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ width: "100%" }} mb="15px" mt="15px">
                  <Typography variant="h6" component="span">
                    {"Total :"}
                  </Typography>
                  <Typography variant="h6" component="span">
                    {"€"}
                  </Typography>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Button variant="contained" color="secondary">
                    {"Valider mon panier"}
                  </Button>
                </Box>
                <Box sx={{ width: "100%" }} pt="10px">
                  <Button color="secondary">{"Continue mes achat"}</Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ListPanier;
