import React, {useContext, useState} from 'react';
import {createNewUser} from "../api/userService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();

  function login(email, password) {

  }

  function signup(email, password) {
    return createNewUser({email: email, password: password});
  }

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
