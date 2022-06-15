/* eslint-disable react-hooks/rules-of-hooks */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
// import { auth, db } from "../firebase-config";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, set } from "firebase/database";
import { useRouter } from "next/router";
// import { Alert, Toolbar } from "@mui/material";
// import { collection } from "firebase/firestore";
import { signUp } from "../context/firebase";

const inscription = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    const res = await signUp(email, password, firstName, lastName);
    if (res.error) {
      setError(res.error);
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
              <Typography variant="h4">Inscription</Typography>
            </Box>
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
              <Box pb={{ xs: 3, md: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="filled"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                      fullWidth
                      id="firstName"
                      label="Nom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="filled"
                      required
                      fullWidth
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      label="Prenom"
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
                      onChange={(e) => setEmail(e.target.value)}
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
                <Box pt={{ xs: 2, md: 2 }} pb={{ xs: 1, md: 1 }}>
                  <Button type="submit" variant="contained" color="secondary">
                    {" S'inscrire"}
                  </Button>
                </Box>

                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/connection" variant="body2">
                      {"j'ai deja un compte"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </div>
        </Container>
      </Box>
    </Box>
  );
};
export default inscription;
