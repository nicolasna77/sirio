import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const inscription = () => {
  return (
    <Box>
      <Box pt={{ xs: 5, md: 5 }} pb={{ xs: 8, md: 10 }}>
        <Container component="main" maxWidth="xs">
          <div>
            <Container justify="center">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">inscription</Typography>
            </Container>
            <Box pt={{ xs: 3, md: 3 }} pb={{ xs: 3, md: 3 }}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="filled"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="filled"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      fullWidth
                      label="Mot de passe"
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Box pt={{ xs: 2, md: 2 }} pb={{ xs: 1, md: 1 }}>
                  <Button type="submit" variant="contained" color="secondary">
                    S'inscrire
                  </Button>
                </Box>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Mot de passe oublie ?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </div>
        </Container>
      </Box>
    </Box>
  );
};
export default inscription;
