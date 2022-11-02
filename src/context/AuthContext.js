import React, {useContext, useState} from 'react';
import {createNewUser, authenticate} from "../api/userService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  let userType = {email: '', authorization_token: ''}
  const [currentUser, setCurrentUser] = useState(userType);

  async function login(email, password) {
    try {
      const userData = await authenticate({email: email, password: password});
      setCurrentUser(userData);
    } catch (err) {
      const { status } = err.response;
      console.log('Failed to authenticate user. Error: '.concat(status));
    }
  }

  function signup(email, password) {
    return createNewUser({email: email, password: password});
  }

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login
  }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
