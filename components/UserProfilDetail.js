import * as React from "react";

import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import AppContext from "../context/AuthContext";
import { useState } from "react";
import {
  updateDoc,
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { app } from "../firebase-config";
import { async } from "@firebase/util";
import { useContext } from "react";

const db = getFirestore(app);

const UserProfilDetail = () => {
  const { user } = useContext(AppContext);
  const [uid, setUid] = useState(user && user.uid);
  const [postal, setPostal] = useState(user && user.postal);

  const [lastName, setLastName] = useState(user && user.lastName);
  const [firstName, setFirstName] = useState(user && user.firstName);
  const [email, setEmail] = useState(user && user.email);
  const [adresse, setAdresse] = useState(user && user.adresse);
  const [city, setCity] = useState(user && user.city);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(users);
    let docID = "";
    querySnapshot.forEach((doc) => {
      docID = doc.uid;
    });

    const useruid = setDoc(doc(db, "users", docID));
    await updateDoc(useruid, {
      lastName: lastName,
      firstName: firstName,
      email: email,
      adresse: adresse,
      city: city,
      postal: postal,
    });
  };
  return (
    <Box>
      {user ? (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Card>
            <CardHeader
              subheader="Vous pouvez modifier vos information"
              title="Mon profil"
            ></CardHeader>
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Nom"
                    value={firstName || ""}
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Prenom"
                    name="lastName"
                    value={lastName || ""}
                    onChange={(e) => setLastName(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    value={adresse || ""}
                    label="Adresse"
                    name="Adresse"
                    onChange={(e) => setAdresse(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Ville"
                    value={city || ""}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    variant="outlined"
                  />
                </Grid>{" "}
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="code Postal"
                    value={postal || ""}
                    name="postal"
                    onChange={(e) => setPostal(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button color="secondary" type="submit" variant="contained">
                Enregistrer
              </Button>
            </Box>
          </Card>
        </form>
      ) : (
        ""
      )}
    </Box>
  );
};
export default UserProfilDetail;
