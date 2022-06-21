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

const UserProfilDetail = () => {
  return (
    <form autoComplete="off" noValidate>
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
                name="Nom"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Prenom"
                name="lastName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                required
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse"
                name="Adresse"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="ville"
                name="Adresse"
                required
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
          <Button color="secondary" variant="contained">
            Enregistrer
          </Button>
        </Box>
      </Card>
    </form>
  );
};
export default UserProfilDetail;
