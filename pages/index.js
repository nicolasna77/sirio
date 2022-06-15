import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Selection from "../components/Selection";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import CardProduct from "../components/CardProduct.js";
// import data from "../data";
import ItemCategories from "../components/ItemCategories";
import categories from "../categories";
import { Container } from "@mui/material";
import { dataPop } from "../context/firebase";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataPop();
    setData(data);
  }, []);
  console.log(data);
  return (
    <div>
      <Selection />
      <Box pt={{ xs: 3, md: 3 }} pl={{ xs: 5, md: 5 }} />
      <div>
        <Container>
          <Box
            pt={{ xs: 3, md: 3 }}
            pb={{ xs: 5, md: 10 }}
            sx={{
              maxWidth: [1000],
              margin: "0 auto!important",
              display: "Block",
            }}
          >
            <Grid container spacing={3}>
              {categories.map((categories) => (
                <Grid item xs={6} sm={4} md={3} lg={3} key={categories.id}>
                  <ItemCategories categories={categories} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box
          pb={{ xs: 5, md: 10 }}
          sx={{
            maxWidth: [1100],
            margin: "0 auto!important",
            padding: "10px",
          }}
        >
          <Grid container>
            <Grid item xs={6} sm={"auto"}>
              <div className="titleCardPop">
                <Typography gutterBottom variant="h6" component="div">
                  Produits populaires
                </Typography>

                <Divider className="divider" />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* {data.map((data) => {
              return <CardProduct key={data.id} data={data} />;
            })} */}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default Home;
