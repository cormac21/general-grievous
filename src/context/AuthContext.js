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

  async function signup(email, password) {
    await createNewUser({email: email, password: password});
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
