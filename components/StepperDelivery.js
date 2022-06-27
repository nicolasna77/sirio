import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import AppContext from "../context/AuthContext";

const StepperDelivery = () => {
  const { user } = useContext(AppContext);

  const [adresse, setAdresse] = useState(user && user.adresse);
  const [city, setCity] = useState(user && user.city);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const users = doc(db, "users");
  //   await updateDoc(users, {
  //     lastName: lastName,
  //     adresse: adresse,
  //     firstName: firstName,
  //     email: email,
  //     city: city,
  //   }).catch((error) => {
  //     console.log(error.message);
  //   });
  // };
  return (
    <CardContent>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h6">Votre adresse de livraison</Typography>
      </Box>
      <form>
        {" "}
        <Grid container xs={10} spacing={3}>
          <Grid item md={5} xs={12}>
            <TextField
              fullWidth
              value={adresse || ""}
              label="Adresse"
              name="Adresse"
              onChange={(e) => setAdresse(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <TextField
              fullWidth
              label="ville"
              value={city || ""}
              name="city"
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="secondary" type="submit" variant="contained">
            valider
          </Button>
        </Box>
      </form>
    </CardContent>
  );
};
export default StepperDelivery;
