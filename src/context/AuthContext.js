import React, {useContext, useState} from 'react';
import {createNewUser, authenticate} from "../api/userService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();

  function resetError() {
    setError({});
  }

  async function login(email, password) {
    const result = await authenticate({email: email, password: password});
    if ( result?.email ) {
      setCurrentUser(result);
    } else {
      setError(result);
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
    error,
    resetError,
    logout,
  }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
