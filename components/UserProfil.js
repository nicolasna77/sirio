import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import AppContext from "../context/AuthContext";

const UserProfil = () => {
  const { user } = useContext(AppContext);

  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />

            <Typography color="textPrimary" gutterBottom variant="h5">
              {user && user.firstName} {user && user.lastName}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {user && user.email}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {user && user.adresse}, {user && user.city}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default UserProfil;
