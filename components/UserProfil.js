import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { onValue } from "firebase/database";
import { collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import AppContext from "../context/AuthContext";

const UserProfil = () => {
  const { user } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (user) {
  //     const starCountRef = collection(db, "users" + user.uid);
  //     onValue(starCountRef, (snapshot) => {
  //       if (snapshot.exists()) {
  //         var data = snapshot.val();
  //         setUsername(data.firstName);
  //         setLastname(data.lastName);
  //         setAdresse(data.adresse);
  //         setEmail(data.email);
  //       }
  //     });
  //   }
  // }, [user]);
  return (
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
            {username} {lastname}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {adresse}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default UserProfil;
