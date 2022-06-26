import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import secure from "../public/secure-payment.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box pt={{ xs: 10, md: 10 }} sx={{}}>
      <div>
        <Box bgcolor="text.primary" color="grey.400">
          <Box pb={"25px"} sx={{ bgcolor: "#e7e7e7" }}>
            <Grid
              container
              justifyItems="center"
              justifie="center"
              justifyContent="center"
              alignContent="center"
              spacing={4}
            >
              <Grid item xs={3} md={4} sm={3}>
                <Box justifyItems="center">
                  <img
                    alt=""
                    className="imgSubFooter"
                    src="../secure-payment.png"
                  />
                </Box>
                <Typography
                  textAlign="center"
                  variant="h6"
                  color="secondary"
                  component="div"
                >
                  Payment simplifier
                </Typography>
              </Grid>

              <Grid item xs={6} md={4} sm={6}>
                <Box>
                  <img alt="" className="imgSubFooter" src="../livraison.png" />
                </Box>
                <Typography textAlign="center" color="secondary" variant="h6">
                  Livraison rapide
                </Typography>
              </Grid>

              <Grid item xs={6} md={4} sm={6}>
                <Box>
                  <img alt="" className="imgSubFooter" src="../return.png" />
                </Box>
                <Typography variant="h6" color="secondary" textAlign="center">
                  Retours Gratuits
                </Typography>
                <Typography variant="body2" textAlign="center">
                  Sous 30 jours
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            justifyItems="center"
            justifie="center"
            justifyContent="center"
            alignContent="center"
            pt={{ xs: 5, md: 5 }}
          >
            <Grid item justifyContent="center">
              <div>
                <img className="logoHeader" alt="logo" src={"/logo.png"} />
              </div>
            </Grid>
          </Grid>
          <Container>
            <Box
              textAlign="center"
              color="grey.700"
              pt={{ xs: 5, sm: 5 }}
              pb={{ xs: 5, sm: 3 }}
            >
              Sirio.com &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </div>
    </Box>
  );
};
export default Footer;
