import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./AuthContext";
import { app } from "../firebase-config";

const auth = getAuth(app);
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
