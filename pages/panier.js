import * as React from "react";
import ListPanier from "../components/ListPanier";
import StepperPanier from "../components/stepperPanier";

const panier = () => {
  return (
    <div>
      <StepperPanier />

      <ListPanier />
    </div>
  );
};
export default panier;
