import * as React from "react";
import Box from "@mui/system";
import Grid from "@mui/material/Grid";
import data from "../data";
import Filter from "../components/Filter";
import CardProduct from "../components/CardProduct";

const produits = () => {
  return (
    <div>
      <Filter />
      <Box
        pb={{ xs: 5, md: 5 }}
        pt={{ xs: 5, md: 5 }}
        sx={{
          maxWidth: [1100],
          margin: "0 auto!important",
          padding: "10px",
        }}
      >
        <Grid container spacing={3}>
          {data.map((data) => {
            return <CardProduct data={data} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default produits;
