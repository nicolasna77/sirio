import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase-config";

const db = getFirestore(app);
const auth = getAuth(app);

const loginOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

const signUp = async (email, password, firstName, lastName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      firstName,
      lastName,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

const dataPop = async () => {
  const q = collection(db, "produits");
  const querySnapshot = await getDocs(q);
  const arr = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    arr.push(data);
  });
  dataPop();
};

export { signIn, loginOut, signUp, dataPop };
