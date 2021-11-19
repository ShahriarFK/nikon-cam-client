import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiig";

const initializeAuth = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuth;
