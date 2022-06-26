import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./AuthContext";
import { app } from "../firebase-config";
import { cartReducer } from "./Reducers";
import { useReducer } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";

const auth = getAuth(app);
const StepperContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <StepperContextProvider value={{ activeStep }}>
      {children}
    </StepperContextProvider>
  );
};

export default StepperContextProvider;
