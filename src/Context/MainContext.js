import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Components/Loader";

export const AuthContext = createContext();

const MainContext = ({ children }) => {
  const auth = getAuth(app);

  // getting user data from localStorage
  // const userLocalData = localStorage.getItem("AccountStatus")
  //   set user
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [userState, SetUserState] = useState(null)
  // user signIN
  const userSignIN = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user register
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    updateUserProfile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google sign in
  const googleSignIN = (provider) => {
    setLoader(true);
    // SetUserState(userLocalData)
    return signInWithPopup(auth, provider);
  };
  // github sign in
  const githubSignIN = (provider) => {
    setLoader(true);
    // SetUserState(userLocalData)
    return signInWithPopup(auth, provider);
  };
  //   user logout
  const userLogout = () => {
    // SetUserState(userLocalData)
    setLoader(true);
    return signOut(auth);
  };

  //   set user after logIN or logOut
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserInfo) => {
      // SetUserState(userLocalData)
      const userSateFromLocalStorage = localStorage.getItem("AccountStatus");
      SetUserState(userSateFromLocalStorage)
      setUser(currentUserInfo);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if(loader){
    return <Loader></Loader>
  }

  const userInfo = {
    userSignIN,
    userRegister,
    userLogout,
    updateUserProfile,
    user,
    loader,
    userState,
    setLoader,
    SetUserState,
    googleSignIN,
    githubSignIN,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default MainContext;
