import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import initializeFirebase from "../Firebase/firebase.init";

export const auth = getAuth(initializeFirebase());
export const db = getFirestore(initializeFirebase());
export const storage = getStorage(initializeFirebase());
const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // Login User By Email
  const loginUser = (email, password) => {
    setLoading(true);
    signOut(auth);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          swal({
            title: "Well Done",
            text: "Welcome to Nehal Machinery AdminPanel",
            icon: "success",
            button: "OK",
          });
        }
      })
      .catch((error) => {
        swal({
          title: "Sorry",
          text: `Wrong Password Or User Don't Exist`,
          icon: "error",
          button: "OK",
        });
      })
      .finally(() => setLoading(false));
  };

  // Observer
  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return authSubscription;
  }, [auth]);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    loading,
    loginUser,
    logOut,
  };
};

export default useFirebase;
