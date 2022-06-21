import { useState } from "react";
import { useEffect } from "react";
import { app } from "../../firebase-config";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  collectionGroup,
  where,
  query,
} from "firebase/firestore";

const useApi = () => {
  const db = getFirestore(app);
  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      try {
        const q = collection(db, "produits");
        const querySnapshot = await getDocs(q);
        const arr = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          arr.push(data);
        });
        setRes(arr);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { res };
};

export default useApi;
