import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import FeedIcon from "@mui/icons-material/Feed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  zIndex: 1,
  color: "#888",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",

  ...(ownerState.active && {
    color: "#9c1019",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

const steps = ["Panier", "Detail livraison", "Payement"];

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <FeedIcon />,
    3: <PaymentIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
const StepperPanier = () => {
  return (
    <Box
      sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto", mt: "50px" }}
    >
      <Stepper alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default StepperPanier;
