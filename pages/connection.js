/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useRouter } from "next/router";
import logoGoogle from "../public/logo-google.png";
import Image from "next/image";
import { signIn } from "../context/firebase";
import { Label } from "@mui/icons-material";
const connection = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    console.log(res.error);

    if (res.error) {
      seterror(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <Box>
      <Box pt={{ xs: 5, md: 5 }} pb={{ xs: 8, md: 10 }}>
        <Container component="main" maxWidth="xs">
          <div>
            <Box sx={{ my: 3 }}>
              <Typography variant="h4">Connection</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Button
                  fullWidth
                  startIcon={
                    <Image
                      width={24}
                      height={24}
                      src={logoGoogle}
                      alt="Google"
                    />
                  }
                  size="large"
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#888",
                    fontWeight: "bold",
                  }}
                >
                  Connection avec Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                {"ou si vous avez déjà un compte"}
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              {error ? <span>{error}</span> : null}

              <Box pt={{ xs: 2, md: 2 }} pb={{ xs: 1, md: 1 }}>
                <Button type="submit" variant="contained" color="secondary">
                  {"Connection"}
                </Button>
              </Box>
              <Grid container justify="flex-end">
                <Grid item>
                  {/* <Link href="" variant="body2">
                    {"Mot de passe oublie ?"}
                  </Link> */}
                  <br />
                  <Link href="/inscription" variant="body2">
                    {"je n'ai pas de compte"}
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
