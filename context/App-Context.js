import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./AuthContext";
import { app } from "../firebase-config";
import { cartReducer } from "./Reducers";
import { useReducer } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";

const auth = getAuth(app);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const db = getFirestore(app);
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          try {
            const querySnapshot = await getDocs(
              collection(db, "users"),
              where("uid", "==", user.uid)
            );
            let data = null;
            querySnapshot.forEach((doc) => {
              data = doc.data();
              setUser(data);
            });
          } catch (error) {
            console.log(error);
          }
        })();
      } else {
        setUser(null);
      }
    });
  });

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
