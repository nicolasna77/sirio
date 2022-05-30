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

const connection = () => {
  return (
    <Box>
      <Box pt={{ xs: 5, md: 5 }} pb={{ xs: 8, md: 10 }}>
        <Container component="main" maxWidth="xs">
          <div>
            <Container justify="center">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Connection</Typography>
            </Container>

            <form>
              <Grid container spacing={2}>
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Connection
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
          </div>
        </Container>
      </Box>
    </Box>
  );
};
export default connection;
