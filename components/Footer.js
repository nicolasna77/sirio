import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Box pt={{ xs: 10, md: 10 }}>
        <div>
          <Box
            //  py={{ xs: 5, sm: 12 }}
            bgcolor="text.primary"
            color="grey.400"
          >
            <Box pb={"25px"} sx={{ bgcolor: "#e7e7e7" }}>
              <Grid
                container
                justifyItems="center"
                justifie="center"
                justifyContent="center"
                alignContent="center"
                spacing={4}
              >
                <Grid item xs="6" md="4" sm="6">
                  <Box justifyItems="center">
                    <img
                      alt=""
                      className="imgSubFooter "
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

                <Grid item xs="6" md="4" sm="6">
                  <Box>
                    <img
                      alt=""
                      className="imgSubFooter"
                      src="../livraison.png"
                    />
                  </Box>
                  <Typography textAlign="center" color="secondary" variant="h6">
                    Livraison rapide
                  </Typography>
                </Grid>

                <Grid item xs="6" md="4" sm="6">
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
                  <img class="logoHeader" alt="logo" src={"/logo.png"} />
                </div>
              </Grid>
            </Grid>
            <Container>
              <Box pt={{ xs: 3, md: 5 }}>
                <Grid container justifyContent="center" spacing={5}>
                  <Grid item xs={4} sm={4} md={2}>
                    <Box margin="0 auto">
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="grey"
                        component="div"
                      >
                        Aide
                      </Typography>
                    </Box>

                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Nous Contacter</Link>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Support</Link>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Privacy</Link>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sm={4} md={2}>
                    <Box>
                      <Typography gutterBottom variant="h6" component="div">
                        Compte
                      </Typography>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Connection</Link>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">S'enregistrer</Link>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sm={4} md={2}>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Pages
                      </Typography>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Home</Link>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Produit</Link>
                    </Box>
                    <Box pb={{ xs: 1, md: 1 }}>
                      <Link href="/">Compte</Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
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
    </div>
  );
};
export default Footer;
