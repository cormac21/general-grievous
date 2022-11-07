import React, {useContext, useState} from 'react';
import {createNewUser, authenticate} from "../api/userService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();

  async function login(email, password, callback) {
    try {
      const userData = await authenticate({email: email, password: password});
      setCurrentUser(userData);
      callback();
    } catch (err) {
      const { status } = err.response;
      console.log('Failed to authenticate user. Error: '.concat(status));
    }
  }

  function signup(email, password) {
    return createNewUser({email: email, password: password});
  }

  function logout(callback) {
    setCurrentUser(null);
    callback();
  }

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
