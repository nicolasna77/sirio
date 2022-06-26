import React from "react";
import Typography from "@mui/material/Typography";

const SuccessPanier = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ py: 4 }}>
        Merci pour votre commande !!
      </Typography>
      <Typography component="p" align="center">
        a la prochaine fois
      </Typography>
    </>
  );
};
export default SuccessPanier;
