import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./AuthContext";
import { app } from "../firebase-config";
import { cartReducer } from "./Reducers";
import { useReducer } from "react";

const auth = getAuth(app);
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ user, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const CartState = () => {
  return useContext(AppContext);
};
export default AppContextProvider;
