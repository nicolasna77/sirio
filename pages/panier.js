import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import FeedIcon from "@mui/icons-material/Feed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import SuccessPanier from "../components/SuccessPanier";
import StepperPanier from "../components/StepperPanier";
import { useState } from "react";
import StepperDelivery from "../components/stepperDelivery";

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
    color: "#9c1019",
  }),
}));

const steps = ["Panier", "Livraison", "Payement"];

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

const panier = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeStep, setActiveStep] = useState(0);

  function getStepsContent(activeStep) {
    switch (activeStep) {
      case 0:
        return <StepperPanier setActiveStep={setActiveStep} />;
      case 1:
        return <StepperDelivery />;
      case 2:
        return "<ReviewOrder />";
      default:
        return <div>Not Found</div>;
    }
  }
  return (
    <Box
      sx={{ width: "100%", minHeight: "80vh", margin: "0 auto", mt: "50px" }}
    >
      {activeStep === steps.length ? (
        <SuccessPanier />
      ) : (
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepsContent(activeStep)}
        </div>
      )}
    </Box>
  );
};
export default panier;
